# SAP RASD Workbench

Static SAP-style workbench that turns a RASD export into customer-focused release actions, relevance decisions, and Cloud ALM-ready test-pack workbooks.

Public site:

<https://sap-cloud-lab.github.io/sap-rasd-workbench/>

Open `index.html` in a browser for local use. The page is preloaded with the 2608.0 RASD review data and can also import another RASD ZIP when the browser can load the bundled CDN parsing libraries.

Main pages:

- Overview
- Scope Impact
- What Changed
- Apps & Roles
- Extensibility
- Deprecated
- New Features
- Test Plan

Key outputs:

- Cloud ALM upload workbooks for the release test pack and future-adoption backlog.
- One-scope-item workbooks where a scope-specific review is opened.
- Action register and public-sector review register CSV files.

## Publishing

GitHub Pages publishes automatically on every push to `main` using `.github/workflows/pages.yml`.
