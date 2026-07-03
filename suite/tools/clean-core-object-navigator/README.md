# Clean Core Advisor

Combined SAP S/4HANA Cloud Public Edition CDS/API Finder and Clean Core Scorecard.

## Run locally

```powershell
cd "C:\Users\f617820\OneDrive - Fortescue Metals Group\Documents\Day to Day tasks\public-cloud-cds-api-finder"
node .\local-server.mjs
```

Open:

```text
http://localhost:4321
```

The app attempts live SAP Business Accelerator Hub search through the local proxy. If live lookup fails, it uses seeded official examples and clean-core routing rules.

## Source logic

SAP KBA 2974010 says to discover released CDS/API content through SAP Business Accelerator Hub, View Browser, and SAP Help Portal. The app follows that pattern and adds clean-core route guidance:

- SAP Business Accelerator Hub: live keyword search
- View Browser: tenant verification step for released CDS views
- Help Portal: structure and documentation check
- Clean Core Scorecard: standard configuration, key user extensibility, developer extensibility, BTP side-by-side, or not clean-core friendly

The first version does not log in to a tenant, so View Browser and tenant-specific availability remain verification steps rather than automated checks.
