(function () {
  window.CLEAN_CORE_ADVISOR_SEED = {
    defaultPrompt: "I need AR ageing, cost centre actuals, WBS actuals, GL balances",
    officialLinks: {
      kba: "https://userapps.support.sap.com/sap/support/knowledge/en/2974010",
      apiHub: "https://api.sap.com/products/SAPS4HANACloud/apis/all",
      helpPortal: "https://help.sap.com/docs/SAP_S4HANA_CLOUD",
      cleanCore: "https://help.sap.com/docs/abap-cloud/abap-development-tools-user-guide/clean-core",
      extensibility: "https://help.sap.com/docs/SAP_S4HANA_CLOUD/b0f040329e93461d9f843e8bf9f871bf/extensibility",
      customCds: "https://help.sap.com/docs/SAP_S4HANA_CLOUD/0e602d466b99490187fcbb30d1dc897c/custom-cds-views",
      customCommunication: "https://help.sap.com/docs/SAP_S4HANA_CLOUD/0e602d466b99490187fcbb30d1dc897c/communication-scenarios"
    },
    examples: [
      "I need AR ageing by customer and bucket",
      "Post cost centre actuals from an external system",
      "Extend sales order with custom fields",
      "Expose CDS to external analytics in SAC",
      "Integrate with external tax engine on BTP",
      "Create a custom approval workflow for purchase requisitions"
    ],
    routes: [
      {
        id: "standard",
        label: "Standard configuration",
        short: "Standard config",
        tone: "good",
        description: "Use standard apps, scope items, configuration, analytical queries, or released APIs without enhancement.",
        signals: ["standard", "configure", "configuration", "variant", "workflow", "approval", "output", "payment terms", "pricing", "report", "analytics", "balance", "ageing", "aging", "actuals"],
        steps: [
          "Check whether a standard Fiori app, analytical query, report, or API already covers the need.",
          "Validate required fields and filters in the tenant using View Browser or app metadata.",
          "Document configuration and role/catalog impacts before building any extension."
        ]
      },
      {
        id: "keyUser",
        label: "Key user extensibility",
        short: "Key user",
        tone: "good",
        description: "Use public-cloud key user tools such as custom fields, UI adaptation, custom logic, custom CDS views, and custom analytical queries.",
        signals: ["custom field", "field", "ui adaptation", "custom logic", "custom cds", "analytical query", "extension field", "form template", "email template"],
        steps: [
          "Use key user extensibility when the requirement is a field, UI, form, simple logic, or analytical view extension.",
          "Build only on released fields, released CDS views, and supported key user extension points.",
          "Use a custom CDS view only when standard released views do not deliver the exact consumption shape."
        ]
      },
      {
        id: "developer",
        label: "Developer extensibility",
        short: "Developer",
        tone: "warn",
        description: "Use ABAP Cloud developer extensibility for more complex in-app logic, custom RAP objects, custom services, or released-object extensions.",
        signals: ["developer", "abap", "rap", "custom business object", "custom service", "custom api", "complex logic", "badi", "enhancement implementation", "behavior", "side effects"],
        steps: [
          "Use ABAP Cloud and released APIs/CDS only; avoid unreleased tables or classic modifications.",
          "Create custom CDS or RAP service only when released standard content is insufficient.",
          "Expose a custom OData API through a custom communication scenario if external consumption is required."
        ]
      },
      {
        id: "sideBySide",
        label: "BTP side-by-side",
        short: "BTP side-by-side",
        tone: "btp",
        description: "Use BTP or another side-by-side application for external workflows, heavy orchestration, advanced integration, ML/AI, or non-core UI.",
        signals: ["btp", "external", "integration", "side by side", "side-by-side", "api", "event", "replicate", "middleware", "tax engine", "third party", "sac", "data warehouse", "datasphere", "ai", "agent", "upload", "mass upload", "bulk upload", "load multiple", "mobile app"],
        steps: [
          "Find the released SAP API/event/CDS source in SAP Business Accelerator Hub and Help Portal.",
          "Set up communication user, communication system, and communication arrangement for the chosen scenario.",
          "Use BTP destination/connectivity and keep write-backs behind released APIs only."
        ]
      },
      {
        id: "notClean",
        label: "Not clean-core friendly",
        short: "Not clean-core",
        tone: "bad",
        description: "Avoid direct modifications, unreleased tables, copied standard objects, implicit enhancements, or unsupported write paths.",
        signals: ["modify standard", "change standard", "copy standard", "unreleased", "direct table", "direct update", "debug change", "implicit enhancement", "classic enhancement", "z copy", "clone standard", "table update"],
        steps: [
          "Stop and reframe the requirement around released APIs, released CDS, key user tools, or BTP.",
          "If SAP does not expose a released object, document the gap and raise a feature request or customer influence item.",
          "Do not copy or modify SAP standard CDS/services unless SAP explicitly supports that extension route."
        ]
      }
    ],
    needs: [
      {
        id: "ar-aging",
        label: "AR ageing",
        terms: ["AR ageing", "accounts receivable aging", "AR aging grid"],
        aliases: ["ar ageing", "ar aging", "accounts receivable ageing", "accounts receivable aging", "receivables ageing", "receivables aging", "customer aging", "customer ageing"],
        routeHint: "standard",
        mustVerify: ["Aging buckets, customer/company-code dimensions, ledger perspective, and whether item-level dunning fields are exposed."],
        nextChecks: ["Open the CDS in View Browser and confirm aging-bucket, customer, company code, ledger, and currency fields.", "Confirm whether the need is analytical reporting or external API consumption."]
      },
      {
        id: "cost-center-actuals",
        label: "Cost centre actuals",
        terms: ["cost center actuals", "cost centre actuals", "cost center plan actual"],
        aliases: ["cost center actual", "cost centre actual", "cost center actuals", "cost centre actuals", "cost center plan actual", "cost centre plan actual"],
        routeHint: "standard",
        mustVerify: ["Cost element, fiscal period, controlling area, currency, and whether line-item drilldown is required."],
        nextChecks: ["Use View Browser to compare query-level actuals with line-item CDS views.", "Confirm whether the output is embedded analytics, SAC, or external integration."]
      },
      {
        id: "wbs-actuals",
        label: "WBS actuals",
        terms: ["WBS actuals", "project actual costs", "WBS element actuals"],
        aliases: ["wbs actual", "wbs actuals", "wbs element actual", "wbs element actuals", "project actual", "project actual costs", "project costs"],
        routeHint: "developer",
        verifyByDefault: true,
        mustVerify: ["WBS-element granularity is not guaranteed from a keyword match. Confirm WBS fields, project profile, commitment/actual split, and public-sector dependency."],
        nextChecks: ["Search View Browser for WBS Element fields inside project actuals objects.", "If no released CDS/API has the required WBS fields, shape a custom CDS or document a SAP product gap."]
      },
      {
        id: "gl-balances",
        label: "GL balances",
        terms: ["G/L account balances", "Trial Balance", "GL account balance"],
        aliases: ["gl balance", "gl balances", "g/l balance", "g/l balances", "general ledger balance", "trial balance"],
        routeHint: "standard",
        mustVerify: ["Ledger, company code, fiscal period, financial statement version, and whether balances or flows are required."],
        nextChecks: ["Check Trial Balance API if the need is external read access.", "Check CDS queries if the need is embedded analytics or custom CDS consumption."]
      },
      {
        id: "ap-aging",
        label: "AP ageing",
        terms: ["AP ageing", "accounts payable aging", "AP aging grid"],
        aliases: ["ap ageing", "ap aging", "accounts payable aging", "accounts payable ageing", "payables aging", "payables ageing", "supplier aging", "supplier ageing"],
        routeHint: "standard",
        mustVerify: ["Supplier dimensions, due-date bucket logic, and whether open-item detail is needed."],
        nextChecks: ["Confirm supplier and due-date fields in View Browser.", "Check whether country-specific aging reports are involved."]
      },
      {
        id: "bank-balances",
        label: "Bank balances",
        terms: ["bank balances", "bank account balance", "bank reconciliation statement"],
        aliases: ["bank balance", "bank balances", "bank account balance", "house bank balance", "bank reconciliation"],
        routeHint: "sideBySide",
        mustVerify: ["House bank account, statement date, reconciliation status, and whether bank-statement item detail is needed."],
        nextChecks: ["Check SAP_COM scenario details on the API object.", "Validate exposed entities in the API metadata before building an integration."]
      },
      {
        id: "sales-order-extension",
        label: "Sales order extension",
        terms: ["sales order custom field", "sales order extension", "custom field sales order"],
        aliases: ["sales order custom field", "extend sales order", "custom field sales order", "sales order extension"],
        routeHint: "keyUser",
        mustVerify: ["Business context availability, UI exposure, API exposure, form/output usage, and reporting need."],
        nextChecks: ["Check Custom Fields app for the sales-order business context.", "Enable field usage only for the required UIs, APIs, reports, or forms."]
      },
      {
        id: "external-tax",
        label: "External tax engine",
        terms: ["external tax engine", "tax integration", "tax API"],
        aliases: ["tax engine", "external tax", "third party tax", "tax integration"],
        routeHint: "sideBySide",
        mustVerify: ["Synchronous write path, communication scenario, tax jurisdiction, retry/error handling, and audit trail."],
        nextChecks: ["Search SAP Business Accelerator Hub for released tax APIs/events.", "Use a BTP integration layer if orchestration or enrichment is required."]
      },
      {
        id: "approval-workflow",
        label: "Approval workflow",
        terms: ["approval workflow", "flexible workflow", "workflow extension"],
        aliases: ["approval workflow", "custom approval", "flexible workflow", "workflow extension"],
        routeHint: "standard",
        mustVerify: ["Whether flexible workflow covers the condition and whether custom logic is needed for the rule."],
        nextChecks: ["Use standard flexible workflow first.", "Add key user custom logic only for supported rule derivation gaps."]
      },
      {
        id: "stock-transport-order-load",
        label: "Stock transport order load",
        terms: ["API_STOCKTRANSPORTORDER", "Stock Transport Order OData V4", "STO mass upload"],
        aliases: ["stock transport order", "stock transport orders", "stock transfer order", "stock transfer orders", "sto", "sto mass upload", "mass upload sto", "bulk sto", "load multiple stock transport order", "load multiple stock transport orders", "mass upload purchase orders"],
        routeHint: "sideBySide",
        mustVerify: ["Use the STO-specific OData V4 API. Do not assume Purchase Order APIs or in-app extensibility can mass-create or mass-update STOs."],
        nextChecks: ["Enable SAP_COM_0A80 - Stock Transport Order Integration and confirm API_STOCKTRANSPORTORDER metadata in the tenant.", "Build the upload/orchestration layer in BTP or an integration layer using the released OData V4 API."]
      }
    ],
    seedResults: {
      "ar-aging": [
        {
          Name: "C_ARAGINGGRIDGENLEDGERQRY",
          DisplayName: "G/L Perspective of AR Aging Grid - Query",
          Type: "CDSVIEW",
          APIState: "RELEASED",
          ReleaseStateKeyUserExtensibility: "Released",
          Products: "SAP S/4HANA Cloud Public Edition",
          Description: "Analytical query for AR aging grid from G/L perspective.",
          ParentDisplayName: "Finance for SAP S/4HANA Cloud Public Edition",
          Rank: 1.4
        },
        {
          Name: "C_ARJRNLENTRITMAGINGGRID",
          DisplayName: "Aging grid of journal entry view of Accounts Receivables",
          Type: "CDSVIEW",
          APIState: "RELEASED",
          ReleaseStateKeyUserExtensibility: "Released",
          Products: "SAP S/4HANA Cloud Public Edition",
          Description: "Consumption view for receivables aging grid.",
          ParentDisplayName: "Finance for SAP S/4HANA Cloud Public Edition",
          Rank: 1.2
        },
        {
          Name: "I_ARBALAMTAGE",
          DisplayName: "AR Balance Amount Age",
          Type: "CDSVIEW",
          APIState: "RELEASED",
          ReleaseStateKeyUserExtensibility: "Released",
          Products: "SAP S/4HANA Cloud Public Edition",
          Description: "Basic released CDS view for AR balance amount age.",
          ParentDisplayName: "Finance for SAP S/4HANA Cloud Public Edition",
          Rank: 1
        }
      ],
      "cost-center-actuals": [
        {
          Name: "C_COSTCENTERACTUALQUERY",
          DisplayName: "Cost Center Actuals - Query",
          Type: "CDSVIEW",
          APIState: "RELEASED",
          ReleaseStateKeyUserExtensibility: "Released",
          Products: "SAP S/4HANA Cloud Public Edition",
          Description: "Released query for cost center actual values.",
          ParentDisplayName: "Controlling for SAP S/4HANA Cloud Public Edition",
          Rank: 1.4
        },
        {
          Name: "C_COSTCENTERQ2001",
          DisplayName: "Cost Centers Actuals",
          Type: "CDSVIEW",
          APIState: "RELEASED",
          ReleaseStateKeyUserExtensibility: "Released",
          Products: "SAP S/4HANA Cloud Public Edition",
          Description: "Released analytical CDS query for cost center actuals.",
          ParentDisplayName: "Controlling for SAP S/4HANA Cloud Public Edition",
          Rank: 1.2
        },
        {
          Name: "C_COSTCENTERPLANACTUALQUERY",
          DisplayName: "Cost Center Plan and Actual Values - Query",
          Type: "CDSVIEW",
          APIState: "RELEASED",
          ReleaseStateKeyUserExtensibility: "Released",
          Products: "SAP S/4HANA Cloud Public Edition",
          Description: "Query for cost center plan and actual values.",
          ParentDisplayName: "Controlling for SAP S/4HANA Cloud Public Edition",
          Rank: 1
        }
      ],
      "wbs-actuals": [
        {
          Name: "C_PROJECTQ2201",
          DisplayName: "Projects Actuals",
          Type: "CDSVIEW",
          APIState: "RELEASED",
          ReleaseStateKeyUserExtensibility: "Released",
          Products: "SAP S/4HANA Cloud Public Edition",
          Description: "Released project actuals query. Verify whether required WBS element fields are included.",
          ParentDisplayName: "Project System for SAP S/4HANA Cloud Public Edition",
          Rank: 1.1,
          NeedsVerification: true
        },
        {
          Name: "CO_PSWBSELEMENT_MASTER_DATA_RE",
          DisplayName: "WBS Element - Replicate Data",
          Type: "API",
          APIState: "ACTIVE",
          Products: "SAP S/4HANA Cloud Public Edition",
          Description: "WBS element replication API candidate. This does not prove actual cost reporting coverage.",
          ParentDisplayName: "SAP S/4HANA Cloud Public Edition",
          Rank: 0.7,
          NeedsVerification: true
        },
        {
          Name: "API_PUBSECCMTMTACTLITEM",
          DisplayName: "Commitment and Actual Items (A2X)",
          Type: "API",
          APIState: "ACTIVE",
          Products: "SAP S/4HANA Cloud Public Edition",
          Description: "Public-sector commitment and actual items API. Check fit before using for generic WBS actuals.",
          ParentDisplayName: "SAP S/4HANA Cloud Public Edition",
          Rank: 0.7,
          NeedsVerification: true
        }
      ],
      "gl-balances": [
        {
          Name: "C_TRIALBALANCE_CDS",
          DisplayName: "Trial Balance - Read",
          Type: "API",
          APIState: "ACTIVE",
          Products: "SAP S/4HANA Cloud Public Edition",
          Description: "Released read API candidate for trial balance / G/L balance style reporting.",
          ParentDisplayName: "SAP S/4HANA Cloud Public Edition",
          Rank: 1.4
        },
        {
          Name: "C_TRIALBALANCE",
          DisplayName: "Trial Balance",
          Type: "CDSVIEW",
          APIState: "RELEASED",
          ReleaseStateKeyUserExtensibility: "Released",
          Products: "SAP S/4HANA Cloud Public Edition",
          Description: "Released CDS view for trial balance reporting.",
          ParentDisplayName: "Accounting and Financial Close for SAP S/4HANA Cloud Public Edition",
          Rank: 1.3
        },
        {
          Name: "C_GLACCOUNTFLOW",
          DisplayName: "G/L Account Balance with Flow-Measure",
          Type: "CDSVIEW",
          APIState: "RELEASED",
          ReleaseStateKeyUserExtensibility: "Released",
          Products: "SAP S/4HANA Cloud Public Edition",
          Description: "Released CDS view for G/L account balances with flow measure.",
          ParentDisplayName: "Accounting and Financial Close for SAP S/4HANA Cloud Public Edition",
          Rank: 1.1
        }
      ],
      "ap-aging": [
        {
          Name: "C_APJRNLENTRITMAGINGGRID",
          DisplayName: "Aging grid of journal entry view of Accounts Payables",
          Type: "CDSVIEW",
          APIState: "RELEASED",
          ReleaseStateKeyUserExtensibility: "Released",
          Products: "SAP S/4HANA Cloud Public Edition",
          Description: "Released AP aging grid candidate.",
          ParentDisplayName: "Finance for SAP S/4HANA Cloud Public Edition",
          Rank: 1.2
        },
        {
          Name: "I_APJRNLENTRITMAGINGGRID",
          DisplayName: "Aging Grid of Accounts Payables",
          Type: "CDSVIEW",
          APIState: "RELEASED",
          ReleaseStateKeyUserExtensibility: "Released",
          Products: "SAP S/4HANA Cloud Public Edition",
          Description: "Released AP aging grid interface view candidate.",
          ParentDisplayName: "Finance for SAP S/4HANA Cloud Public Edition",
          Rank: 1.1
        }
      ],
      "bank-balances": [
        {
          Name: "API_CN_BANK_RECONCILIAITON_SRV",
          DisplayName: "Bank Reconciliation Statement - Read, Reconcile (Synchronous)",
          Type: "API",
          APIState: "ACTIVE",
          Products: "SAP S/4HANA Cloud Public Edition",
          Description: "API with bank reconciliation, bank statement and bank account balance related entities.",
          ParentDisplayName: "SAP S/4HANA Cloud Public Edition",
          CommunicationScenario: "SAP_COM_0388",
          Rank: 1,
          NeedsVerification: true
        }
      ],
      "sales-order-extension": [],
      "external-tax": [],
      "approval-workflow": [],
      "stock-transport-order-load": [
        {
          Name: "sap-s4-CE_STOCKTRANSPORTORDER_0001-v1",
          DisplayName: "Stock Transport Order",
          Type: "API",
          APIState: "ACTIVE",
          Products: "SAP S/4HANA Cloud Public Edition",
          Description: "Released Stock Transport Order OData V4 API for integration scenarios. Verify create/update entities and fields in metadata.",
          ParentDisplayName: "SAP S/4HANA Cloud Public Edition",
          CommunicationScenario: "Stock Transport Order Integration (SAP_COM_0A80)",
          Rank: 2
        }
      ]
    },
    guardrails: [
      "Use released CDS views, released APIs, key user tools, or ABAP Cloud released objects first.",
      "Do not directly update SAP tables or consume unreleased technical tables from side-by-side apps.",
      "Do not copy standard CDS or standard services as the first move. Extend released views or create a custom consumption view only when needed.",
      "Expose custom data externally through a supported custom communication scenario and communication arrangement.",
      "If SAP exposes no released object for the requirement, record the gap and raise a feature request instead of building against unsupported internals."
    ]
  };
})();
