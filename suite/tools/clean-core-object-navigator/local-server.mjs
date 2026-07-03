import { createServer } from "node:http";
import { request as httpsRequest } from "node:https";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = Number(process.env.PORT || 4321);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml"
};

createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
    if (url.pathname === "/api/sap-search") {
      await proxySapSearch(url, res);
      return;
    }

    const requested = url.pathname === "/" ? "/index.html" : url.pathname;
    const filePath = normalize(join(root, requested));
    if (!filePath.startsWith(root)) {
      send(res, 403, "text/plain; charset=utf-8", "Forbidden");
      return;
    }

    const content = await readFile(filePath);
    send(res, 200, mimeTypes[extname(filePath)] || "application/octet-stream", content);
  } catch (error) {
    send(res, 404, "text/plain; charset=utf-8", `Not found: ${error.message}`);
  }
}).listen(port, () => {
  console.log(`Clean Core Advisor running at http://localhost:${port}`);
});

function proxySapSearch(url, res) {
  const term = url.searchParams.get("searchterm") || "";
  const top = url.searchParams.get("$top") || url.searchParams.get("%24top") || "12";
  const upstream = new URL("https://api.sap.com/api/1.0/searchservice");
  upstream.searchParams.set("searchterm", term);
  upstream.searchParams.set("tab", "All");
  upstream.searchParams.set("$scope", "all");
  upstream.searchParams.set("$top", top);

  return new Promise((resolve) => {
    const req = httpsRequest(
      upstream,
      {
        // Local dev only: some corporate Windows networks inspect TLS with a
        // certificate chain Node does not know about. Set SAP_FINDER_STRICT_TLS=1
        // if this proxy is moved to a managed server with normal CA trust.
        rejectUnauthorized: process.env.SAP_FINDER_STRICT_TLS === "1",
        headers: {
          Accept: "application/json",
          "User-Agent": "public-cloud-cds-api-finder-local-proxy"
        }
      },
      (upstreamRes) => {
        const chunks = [];
        upstreamRes.on("data", (chunk) => chunks.push(chunk));
        upstreamRes.on("end", () => {
          res.setHeader("Access-Control-Allow-Origin", "*");
          send(res, upstreamRes.statusCode || 502, "application/json; charset=utf-8", Buffer.concat(chunks));
          resolve();
        });
      }
    );

    req.on("error", (error) => {
      send(res, 502, "application/json; charset=utf-8", JSON.stringify({ error: error.message }));
      resolve();
    });
    req.setTimeout(15000, () => {
      req.destroy(new Error("SAP Hub request timed out"));
    });
    req.end();
  });
}

function send(res, status, type, body) {
  res.writeHead(status, {
    "Content-Type": type,
    "Cache-Control": "no-store"
  });
  res.end(body);
}
