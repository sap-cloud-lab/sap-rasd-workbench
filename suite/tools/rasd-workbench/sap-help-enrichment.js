window.RASD_HELP_ENRICHMENT = {
  "meta": {
    "generatedAt": "2026-06-28T11:28:22.121Z",
    "source": "SAP Help Portal authenticated harvest from RASD Whats New links",
    "rowsHarvested": 178,
    "failures": 0,
    "curatedOverrides": 5,
    "note": "Each entry is tied to the RASD What's New source URL. Do not add generic search links; show source-backed detail only."
  },
  "byUrl": {
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4bfdd78489c642e3a4e0393fda875b15?version=2608.00": {
      "title": "Removal of Manage Direct Activity Allocation (Old Version)",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4bfdd78489c642e3a4e0393fda875b15?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Removal of Manage Direct Activity Allocation (Old Version) | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:13:21.481Z",
      "summary": "As of SAP S/4HANA Cloud Public Edition 2408, the Manage Direct Activity Allocation (Old Version) (App ID:F3697) app was deprecated and replaced by Manage Direct Activity Allocation (New Version) (App ID: F3697A).  With SAP S/4HANA Cloud Public Edition 2608, the old app version of Manage Direct Activity Allocation (F3697) is now removed and will no longer be available.  For more information about app deprecation, see Deprecation Process for Apps.  All users need to use Manage Direct Activity Allocation (New Version) (App ID: F3697A) as of now.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "As of SAP S/4HANA Cloud Public Edition 2408, the Manage Direct Activity Allocation (Old Version) (App ID:F3697) app was deprecated and replaced by Manage Direct Activity Allocation (New Version) (App ID: F3697A). With SAP S/4HANA Cloud Public Edition 2608, the old app version of Manage Direct Activity Allocation (F3697) is now removed and will no longer be available. For more information about app deprecation, see Deprecation Process for Apps. All users need to use Manage Direct Activity Allocation (New Version) (App ID: F3697A) as of now. All customers who have not yet moved to the new Manage Direct Activity Allocation (F3697A) app need to act immediately and provide their users access to this app. For more information, refer to"
        },
        {
          "heading": "Implementation details from SAP",
          "text": "– Authorizations below. Implementation Details Authorizations To enable users to access the new app, their business users need to have the following IAM app assigned: Manage Direct Activity Allocation V2 (F3697A_TRAN). Note Update your existing assignments. Authorization objects and restriction types linked to the obsolete IAM App Manage Direct Activity Allocation (F3697_TRAN) will be removed and won't be automatically reassigned. This affects the following dependent IAM app and business catalogs: Dependent IAM App: Schedule Project Accounting Jobs (F5090_TRAN) Business Catalogs: Overhead Cost Accounting - General Posting Activities (SAP_FIN_BC_OH_PER_GPA_PC) Enterprise Projects - Financial Control (SAP_PS_BC_FIN_CONTRL_MC)"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J54. Use affected app/technical object F3697, F3697A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Removal of Manage Direct Activity Allocation (Old Version): confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Critical – Immediate Action Required Type Deleted Functional Localization No localization Scope Item J54 (Overhead Cost Accounting) Technical Object Name App ID (predecessor app): F3697 App ID (successor app): F3697A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CO-FIO-CCA-TRA (Cost Center Accounting Transactions) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Removal of Manage Direct Activity Allocation (Old Version), including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Removal of Manage Direct Activity Allocation (Old Version)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4bfdd78489c642e3a4e0393fda875b15?version=2608.00"
        },
        {
          "label": "Deprecation Process for Apps",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/5efa551420f24d738131134c8101168a.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Manage Direct Activity Allocation (New Version)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/25defac4a09b432b8e155d30f5c1c2df.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/5a8bdf384b90461898997c74373995df?version=2608.00": {
      "title": "Apps Deleted for Intraday Memo Records Reconciliation",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/5a8bdf384b90461898997c74373995df?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:13:25.364Z",
      "summary": "The apps Reconcile Cash Flows - Intraday Memo Records (F3418) and Schedule Intraday Memo Records Reconciliation (F5284) are removed from the SAP Fiori launchpad as of SAP S/4HANA Cloud Public Edition 2608.  Please switch to the successor apps Reconcile Cash Flows (F3418A) and Schedule Jobs for Cash Flow Reconciliation (F5283) as soon as possible.  The successor apps offer new features such as reconciliation with end-of-day bank statements, customizable reconciliation steps based on various rules including custom reconciliation rules.  The following table compares the differences with the deprecated apps and the successor apps.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The apps Reconcile Cash Flows - Intraday Memo Records (F3418) and Schedule Intraday Memo Records Reconciliation (F5284) are removed from the SAP Fiori launchpad as of SAP S/4HANA Cloud Public Edition 2608.  Please switch to the successor apps Reconcile Cash Flows (F3418A) and Schedule Jobs for Cash Flow Reconciliation (F5283) as soon as possible.  The successor apps offer new features such as reconciliation with end-of-day bank statements, customizable reconciliation steps based on various rules including custom reconciliation rules.  The following table compares the differences with the deprecated apps and the successor apps."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "activity Define Tolerance Groups for Cash Flow Reconciliation. Supported You define tolerance settings directly in the Schedule Jobs for Cash Flow Reconciliation app. Value date deviation for forecasted flows Not supported Only forecasted cash flows with the same value date can reconcile with the bank statement flows. Supported You can specify a date range for forecasted cash flows and define the deviation days allowed for reconciliation."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J78. Use affected app/technical object F3418, F5284, F3418A, F5283."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Apps Deleted for Intraday Memo Records Reconciliation: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Critical – Immediate Action Required Type Deleted Functional Localization No localization Scope Item J78 (Advanced Cash Operations) Technical Object Name App ID: F3418 F5284 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FIN-FSCM-CLM-COP (Cash Operations) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Apps Deleted for Intraday Memo Records Reconciliation, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Apps Deleted for Intraday Memo Records Reconciliation",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/5a8bdf384b90461898997c74373995df?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/7686eb98a8e44d1e980f96ed0d0f1477?version=2608.00": {
      "title": "Removal of Display Profit Center (KE53)",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/7686eb98a8e44d1e980f96ed0d0f1477?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:13:30.005Z",
      "summary": "As of SAP S/4HANA Cloud Public Edition 2508, the Display Profit Center (KE53) app was deprecated. The successor app is Manage Profit Centers (New Version) (F3516A). With SAP S/4HANA Cloud Public Edition 2608, the Display Profit Center (KE53) app is now removed and will no longer be available. For more information about app deprecation, see Deprecation Process for Apps. All users need to use Manage Profit Centers (New Version) (F3516A) as of now. All customers who have not yet moved to the Manage Profit Centers (New Version) (F3516A) app need to act immediately and provide their users access to this app. For more information, refer to",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "As of SAP S/4HANA Cloud Public Edition 2508, the Display Profit Center (KE53) app was deprecated. The successor app is Manage Profit Centers (New Version) (F3516A). With SAP S/4HANA Cloud Public Edition 2608, the Display Profit Center (KE53) app is now removed and will no longer be available. For more information about app deprecation, see Deprecation Process for Apps. All users need to use Manage Profit Centers (New Version) (F3516A) as of now. All customers who have not yet moved to the Manage Profit Centers (New Version) (F3516A) app need to act immediately and provide their users access to this app. For more information, refer to"
        },
        {
          "heading": "Implementation details from SAP",
          "text": "– Authorizations below. Implementation Details Authorizations To enable users to access this app, their business users need to have one of the following IAM apps assigned: Manage Profit Centers (New Version) (F3516A_GL_TRAN). Manage Profit Centers (New Version) (F3516A_TRAN). To authorize display only access, assign Display Profit Centers (New Version) (F3516A_03_TRAN)."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J58. Use affected app/technical object F3516A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Removal of Display Profit Center (KE53): confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Critical – Immediate Action Required Type Deleted Functional Localization No localization Scope Item J58 (Accounting and Financial Close), O58 (Accounting and Financial Close) Technical Object Name App ID (predecessor): KE53 App ID (successor): F3516A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component EC-PCA (Profit Center Accounting) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Removal of Display Profit Center (KE53), including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Removal of Display Profit Center (KE53)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/7686eb98a8e44d1e980f96ed0d0f1477?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/837fc2ec95564ec7a3ac2f2e57643d1b?version=2608.00": {
      "title": "Profitability Segment Assignment for Projects with Revenue",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/837fc2ec95564ec7a3ac2f2e57643d1b?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Profitability Segment Assignment for Projects with Revenue | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:13:33.958Z",
      "summary": "With this feature, for projects with revenue, you can now assign a profitability segment to the following: Project Billing WBS Elements Non-Billing WBS Elements that are not part of a Billing Element hierarchy To add the profitability segment, use the Assign link available for the new Profitability Segment field that has been added to the Control tab.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, for projects with revenue, you can now assign a profitability segment to the following: Project Billing WBS Elements Non-Billing WBS Elements that are not part of a Billing Element hierarchy To add the profitability segment, use the Assign link available for the new Profitability Segment field that has been added to the Control tab."
        },
        {
          "heading": "Effects on existing data",
          "text": "For existing revenue projects with settlement rules, the rules are copied to the profitability segment field in WBS master data, during data migration."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1NT. Use affected app/technical object F3215, F3799."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Profitability Segment Assignment for Projects with Revenue: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Critical – Immediate Action Required Type Changed Functional Localization No localization Scope Item 1NT (Project Control – Finance) Technical Object Name App IDs: F3215 F3799 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component PPM-SCL (EPPM in S/4HANA (Public Cloud) ) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Profitability Segment Assignment for Projects with Revenue, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Profitability Segment Assignment for Projects with Revenue",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/837fc2ec95564ec7a3ac2f2e57643d1b?version=2608.00"
        },
        {
          "label": "WBS Element",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/cdf62d19b01f42daabcc58fdf12d9478.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Project Control - Enterprise Projects",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a70d0302aa0b4a79b772aeb6dd50f6de.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a1c6d8ed0fa6487297fc86308b75ba94?version=2608.00": {
      "title": "Removal of My Purchase Requisitions - Deprecated",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a1c6d8ed0fa6487297fc86308b75ba94?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:13:38.186Z",
      "summary": "With SAP S/4HANA Cloud Public Edition 2608 release, the app My Purchase Requisitions - Deprecated (F1639) is now removed and will no longer be available. For more information about app deprecation, see Deprecation Process for Apps. All users need to use My Purchase Requisitions (F1639A) as of now. As of SAP S/4HANA Cloud Public Edition 2308 release, the app My Purchase Requisitions (F1639) app was deprecated and replaced by My Purchase Requisitions - New (F1639A). However the predecessor and successor apps have been renamed. For more information see, Renamed Apps in Self-Service Requisitioning.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With SAP S/4HANA Cloud Public Edition 2608 release, the app My Purchase Requisitions - Deprecated (F1639) is now removed and will no longer be available. For more information about app deprecation, see Deprecation Process for Apps. All users need to use My Purchase Requisitions (F1639A) as of now. As of SAP S/4HANA Cloud Public Edition 2308 release, the app My Purchase Requisitions (F1639) app was deprecated and replaced by My Purchase Requisitions - New (F1639A). However the predecessor and successor apps have been renamed. For more information see, Renamed Apps in Self-Service Requisitioning."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To be able to access the My Purchase Requisitions app, you need to have the following assigned: IAM App assigned: F1643_TRAN and F1639_TRAN Business Role: SAP_BR_EMPLOYEE_PROCUREMENT Business Catalog: SAP_MM_BC_PR_PROCESS_PC"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1XI,18J,O8J. Use affected app/technical object F1639, F1639A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Removal of My Purchase Requisitions - Deprecated: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Critical – Immediate Action Required Type Deleted Functional Localization No localization Scope Item 18J (Requisitioning), 1XI (Central Requisitioning), O8J (Requisitioning) Technical Object Name App ID (predecessor): F1639 App ID (successor):F1639A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-FIO-PUR-REQ-SSP (Self-Service Procurement) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Removal of My Purchase Requisitions - Deprecated, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Removal of My Purchase Requisitions - Deprecated",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a1c6d8ed0fa6487297fc86308b75ba94?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b92d6c28fdef46d492e8e3396a705004?version=2608.00": {
      "title": "Deletion of XI Runtime Issue Situation Template",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b92d6c28fdef46d492e8e3396a705004?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Deletion of XI Runtime Issue Situation Template | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:13:41.766Z",
      "summary": "The situation template FIN_MBC_BANK_MESSAGE_XIRTISSUE is deleted with this release since it's not valid for SAP S/4HANA Cloud Public Edition customers. There is no need for a successor situation template.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The situation template FIN_MBC_BANK_MESSAGE_XIRTISSUE is deleted with this release since it's not valid for SAP S/4HANA Cloud Public Edition customers. There is no need for a successor situation template."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 16R. Use affected app/technical object F4385, F4385A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Deletion of XI Runtime Issue Situation Template: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Critical – Immediate Action Required Type Deleted Functional Localization No localization Scope Item 16R Technical Object Name App ID (predecessor): F4385 App ID (successor): F4385A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component LOD-FSN-AGT (connector for SAP Multi-Bank Connectivity) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Deletion of XI Runtime Issue Situation Template, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Deletion of XI Runtime Issue Situation Template",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b92d6c28fdef46d492e8e3396a705004?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/bd74678360ee420cbc292a5b13c7d7e2?version=2608.00": {
      "title": "Restricted Access to Cost Centers Based on Company Code",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/bd74678360ee420cbc292a5b13c7d7e2?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:13:46.523Z",
      "summary": "The Company Code (BUKRS) restriction has been added to enhance authorization in the cost center master data management area.  This new restriction helps administrators to ensure that specific users and roles can view and manage only the cost centers associated with the company codes that they are authorized to access.  This update improves security and enables better control over cost center master data within organizations.  As of this version, the Company Code restriction is applied to cost centers in all apps mentioned in the SAP Note 3761179 .  This change may make cost center data unavailable in several contexts.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The Company Code (BUKRS) restriction has been added to enhance authorization in the cost center master data management area.  This new restriction helps administrators to ensure that specific users and roles can view and manage only the cost centers associated with the company codes that they are authorized to access.  This update improves security and enables better control over cost center master data within organizations.  As of this version, the Company Code restriction is applied to cost centers in all apps mentioned in the SAP Note 3761179 .  This change may make cost center data unavailable in several contexts.  To ensure a seamless transition, administrators must configure values for this restriction using the Maintain Business Roles app (F1492).  For a list of the apps that are affected by this change, see SAP Note 3761179 ."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To configure the Company Code restriction in IAM apps of the app authorization variant type (AAVs) and assign it to a business role or user, administrators must have the SAP_CORE_BC_IAM_RM business catalog assigned."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "Administrators must maintain the values for the Company Code restriction for all business roles that need to view and manage cost center master data. These values can be maintained in the Maintain Business Roles app (F1492)."
        },
        {
          "heading": "Effects on existing data",
          "text": "The Company Code restriction affects access to cost center master data through the following objects: CDS Views I_CostCenter I_CostCenerVH I_CostCenterSTDVH I_CostCenterTP_2 Data Dictionary Value Help KOST Business Object Interface I_CostCenterTP_2 With this change: Users without the proper Company Code authorization are no longer able to view or manage cost center data outside their assigned company codes. Administrators must ensure that the Company Code restrictions are in place for all affected business roles to prevent unintended access issues."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): O54,1M1,J54,3F7,2I3,JB1,3UP,1NL. Use affected app/technical object F1492."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Restricted Access to Cost Centers Based on Company Code: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Critical – Immediate Action Required Type New Functional Localization No localization Scope Item Not applicable Technical Object Name CDS Views: I_CostCenter I_CostCenerVH I_CostCenterSTDVH I_CostCenterTP_2 Data Dictionary Value Help: KOST Business Object Interface: I_CostCenterTP_2 Latest Reference Content Version Required Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component Not applicable Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Restricted Access to Cost Centers Based on Company Code, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Restricted Access to Cost Centers Based on Company Code",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/bd74678360ee420cbc292a5b13c7d7e2?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d1763c9a77474fed869279f4ce1e6c3e?version=2608.00": {
      "title": "Removal of Create Purchase Requisition - Deprecated",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d1763c9a77474fed869279f4ce1e6c3e?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Removal of Create Purchase Requisition - Deprecated | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:13:50.386Z",
      "summary": "With SAP S/4HANA Cloud Public Edition 2608 release, the Create Purchase Requisition - Deprecated (F1643) app is now removed and will no longer be available. For more information about app deprecation, see Deprecation Process for Apps. All users need to use My Purchase Requisitions (F1639A) as of now. As of SAP S/4HANA Cloud Public Edition 2308 release, the app Create Purchase Requisition (F1643) was deprecated and replaced by My Purchase Requisitions - New (F1639A). However the predecessor and successor apps have been renamed. For more information see, Renamed Apps in Self-Service Requisitioning",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With SAP S/4HANA Cloud Public Edition 2608 release, the Create Purchase Requisition - Deprecated (F1643) app is now removed and will no longer be available. For more information about app deprecation, see Deprecation Process for Apps. All users need to use My Purchase Requisitions (F1639A) as of now. As of SAP S/4HANA Cloud Public Edition 2308 release, the app Create Purchase Requisition (F1643) was deprecated and replaced by My Purchase Requisitions - New (F1639A). However the predecessor and successor apps have been renamed. For more information see, Renamed Apps in Self-Service Requisitioning"
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To be able to access the My Purchase Requisitions app, you need to have the following assigned: IAM App assigned: F1643_TRAN and F1639_TRAN Business Role: SAP_BR_EMPLOYEE_PROCUREMENT Business Catalog: SAP_MM_BC_PR_PROCESS_PC"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 18J,O8J. Use affected app/technical object F1643, F1639A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Removal of Create Purchase Requisition - Deprecated: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Critical – Immediate Action Required Type Deleted Functional Localization No localization Scope Item 18J (Requisitioning), 1XI (Central Requisitioning), O8J (Requisitioning) Technical Object Name App ID (predecessor): F1643 App ID (successor):F1639A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-FIO-PUR-REQ-SSP (Self-Service Procurement) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Removal of Create Purchase Requisition - Deprecated, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Removal of Create Purchase Requisition - Deprecated",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d1763c9a77474fed869279f4ce1e6c3e?version=2608.00"
        },
        {
          "label": "Deprecation Process for Apps",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/5efa551420f24d738131134c8101168a.html"
        },
        {
          "label": "Renamed Apps in Self-Service Requisitioning",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e67e55b3c0054b6b822e8ebd56f08cf5.html?version=2508.00"
        },
        {
          "label": "My Purchase Requisitions - New",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/713eae2544204816b71a88caa89bd256.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/03aa06778c564c899f928e682da79575?version=2608.00": {
      "title": "International Trade Compliance Check for Purchase Requisitions",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/03aa06778c564c899f928e682da79575?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "International Trade Compliance Check for Purchase Requisitions | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:13:54.506Z",
      "summary": "With this release, while you are creating a purchase requisition using the app Create Purchase Requisition - Advanced, you can now check the trade compliance block details via the new section Trade Compliance in the item of a purchase requisition. In the purchase requisition item, you can now see the following new fields under the Trade Compliance section: Embargo Status Screening Status Total Legal Control Status Examples of the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this release, while you are creating a purchase requisition using the app Create Purchase Requisition - Advanced, you can now check the trade compliance block details via the new section Trade Compliance in the item of a purchase requisition. In the purchase requisition item, you can now see the following new fields under the Trade Compliance section: Embargo Status Screening Status Total Legal Control Status Examples of the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. In the purchase requisition item, you can now see the new section Trade Compliance. Trade Compliance in Purchase Requisition Item"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): OMD,18J,BMD. Use affected app/technical object ME51N."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for International Trade Compliance Check for Purchase Requisitions: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item BMD (Purchase Contract), OMD (Purchase Contract), 18J (Requisitioning), O8J (Requisitioning) Technical Object Name App ID:ME51N Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. Application Component MM-FIO-PUR-REQ-SSP (Self-Service Procurement) MM-PUR-REQ (Purchase Requisitions) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for International Trade Compliance Check for Purchase Requisitions, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - International Trade Compliance Check for Purchase Requisitions",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/03aa06778c564c899f928e682da79575?version=2608.00"
        },
        {
          "label": "Create Purchase Requisition - Advanced",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1e01361a8a0347f7a74ac399db546b20.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "International Trade in Purchasing Documents",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/0b5bcd3c64c24040aab6f6bfb7424daa.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio8c323e9b4df44cd08756e1928c960cea_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/04a4acbe87444c6f94973d4adef3ff3a?version=2608.00": {
      "title": "Manage Customer Returns - Version 2 App: Enhancements",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/04a4acbe87444c6f94973d4adef3ff3a?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Manage Customer Returns - Version 2 App: Enhancements | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:13:58.128Z",
      "summary": "With this app, you can now do the following: Assign serial numbers for the product Edit item descriptions Serial Numbers Serial numbers are unique identifiers that are assigned to individual units of a returned product for tracking purposes.  You can assign serial numbers for the product in a returns order item if the product is serial number enabled.  A serial number profile must be defined for the product at plant level.  To assign serial numbers for an item, you can: Search for serial numbers by reference document or product Enter serial numbers manually If a reference document exists, the serial numbers are not copied automatically from the reference document.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this app, you can now do the following: Assign serial numbers for the product Edit item descriptions Serial Numbers Serial numbers are unique identifiers that are assigned to individual units of a returned product for tracking purposes.  You can assign serial numbers for the product in a returns order item if the product is serial number enabled.  A serial number profile must be defined for the product at plant level.  To assign serial numbers for an item, you can: Search for serial numbers by reference document or product Enter serial numbers manually If a reference document exists, the serial numbers are not copied automatically from the reference document.  You can search by reference document and assign them yourself.  Also note the following: To assign serial numbers, first enter the item quantity."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access this app, their business users need to have the following IAM app assigned: Manage Customer Returns - Version 2 (F4832_TRAN)."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. You can assign serial numbers in a returns order item: You can search for serial numbers by product or reference document: You can edit the item description in the items table: The item description is displayed at the top of the item details:"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BKP. Use affected app/technical object F4832."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Manage Customer Returns - Version 2 App: Enhancements: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item BKP (Customer Returns) Technical Object Name App ID: F4832 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component SD-SLS-RE (Customer Returns) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Manage Customer Returns - Version 2 App: Enhancements, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Manage Customer Returns - Version 2 App: Enhancements",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/04a4acbe87444c6f94973d4adef3ff3a?version=2608.00"
        },
        {
          "label": "Manage Customer Returns – Version 2",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/7eec8dcd568b4dfb8ffb1784ffdc6c2f.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "Screenshot showing where to assign serial numbers.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio8d69cea7bb5947339dd3aeb990d14598_LowRes.png"
        },
        {
          "label": "Screenshot showing how to search by product or reference document.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio06479566748142808c1cf162aaeb8528_LowRes.png"
        },
        {
          "label": "Screenshot showing where to edit item descriptions.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio28edb8f2a3f34d4bb8a9168dd7fbb42f_LowRes.png"
        },
        {
          "label": "Screenshot showing the location of item description displayed in item details.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio1f21ac6415f84740a45673bc8a62069f_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/05b2c408591b465ea457bf9006811d78?version=2608.00": {
      "title": "Navigation of Purchase Requisitions from Process Purchase Requisitions",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/05b2c408591b465ea457bf9006811d78?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Navigation of Purchase Requisitions from Process Purchase Requisitions | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:14:01.895Z",
      "summary": "With this release, you can now navigate directly from a purchase requisition item in the Process Purchase Requisitions app to its corresponding object page in the Manage Purchase Requisitions - Professional app. For advanced purchase requisition scenario, it directly navigates to the Create Purchase Requisition - Advanced app.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this release, you can now navigate directly from a purchase requisition item in the Process Purchase Requisitions app to its corresponding object page in the Manage Purchase Requisitions - Professional app. For advanced purchase requisition scenario, it directly navigates to the Create Purchase Requisition - Advanced app."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): 18J,O8J. Use affected app/technical object F1048A, F2229."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item 18J (Requisitioning), O8J (Requisitioning) Technical Object Name App ID: F1048A App ID: F2229 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-FIO-PUR-REQ-SOC (Fiori UI for Sourcing Purchase Requisitions) MM-PUR-REQ (Purchase Requisitions) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Navigation of Purchase Requisitions from Process Purchase Requisitions",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/05b2c408591b465ea457bf9006811d78?version=2608.00"
        },
        {
          "label": "Process Purchase Requisitions (V2)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b9ef8f7ff6084b63a7bf59dac8de06c7.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Manage Purchase Requisitions - Professional",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/0df90d3c7cb848eeb4a6832e96606c32.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Create Purchase Requisition - Advanced",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1e01361a8a0347f7a74ac399db546b20.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/0ba390401b4749568aadc15e23382e93?version=2608.00": {
      "title": "Integration with SAP Global Trade Services for Payment Check",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/0ba390401b4749568aadc15e23382e93?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Integration with SAP Global Trade Services for Payment Check | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:14:07.699Z",
      "summary": "The integration with SAP Global Trade Services, edition for SAP HANA (hereafter referred to as SAP GTS) enables the screening of supplier payments against sanctioned party lists and embargo situations during the payment run process.  This ensures compliance with trade regulations by automatically screening all payment transactions before payments are made.  Previously, third-party supplier invoices and their payments were not being screened against sanctioned party lists and embargo situations.  These transactions flowed through the payment run in SAP S/4HANA Cloud Public Edition without being routed into screening systems.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The integration with SAP Global Trade Services, edition for SAP HANA (hereafter referred to as SAP GTS) enables the screening of supplier payments against sanctioned party lists and embargo situations during the payment run process.  This ensures compliance with trade regulations by automatically screening all payment transactions before payments are made.  Previously, third-party supplier invoices and their payments were not being screened against sanctioned party lists and embargo situations.  These transactions flowed through the payment run in SAP S/4HANA Cloud Public Edition without being routed into screening systems.  This integration now enables automatic screening of payments during the payment run process."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to schedule payment proposals and payment runs, their business users need to have the following IAM apps assigned: Manage Automatic Payments (F0770_TRAN) Revise Payment Proposals (F0771_TRAN)"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "Before you can use this feature for screening payment runs, ensure the following prerequisites are met: Your SAP S/4HANA Cloud Public Edition system has been integrated with SAP GTS, which requires the activation of the scope item 24J (Compliance Management with SAP Global Trade Services).  Required master data must be maintained in your system and transferred to SAP GTS.  For more information, see Master Data.  Sanctioned party lists and embargo situations must be maintained in your SAP GTS system.  See Sanctioned Party List Screening and Embargo Checks.  SAP GTS screening has been enabled in the configuration activity Activate Check in SAP Global Trade Services for FI Payments.  In your configuration environment, use the search function to open the configuration activity."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J60. Use affected app/technical object F0771."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Integration with SAP Global Trade Services for Payment Check: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item J60(Accounts Payable) 24J (Compliance Management with SAP Global Trade Services) Technical Object Name App ID: F0771 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-AP-PAY (Payment Apps) Valid as Of SAP S/4HANA Cloud Public Edition 2608 Related Links SAP Global Trade Services, edition for SAP HANA Integration with SAP S/4HANA Cloud Resetting Unsuccessful Payments or Proposals"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Integration with SAP Global Trade Services for Payment Check, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Integration with SAP Global Trade Services for Payment Check",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/0ba390401b4749568aadc15e23382e93?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/0f99dfb021964717af01fbef33861592?version=2608.00": {
      "title": "Additional GS1 EAN Prefixes Now Available in Product Master",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/0f99dfb021964717af01fbef33861592?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Additional GS1 EAN Prefixes Now Available in Product Master | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:14:11.530Z",
      "summary": "With this feature, you can use an expanded set of EAN prefixes as defined by GS1 directly in your system without any additional",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, you can use an expanded set of EAN prefixes as defined by GS1 directly in your system without any additional"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "effort. Previously, SAP delivered 102 standard EAN prefixes. Additional GS1-standard EAN prefixes are now available as standard content out of the box. An EAN prefix is a sequence of digits at the beginning of an EAN-13 barcode that identifies the country or organization that issued the barcode. These prefixes are standardized and maintained globally by GS1, the international organization responsible for barcode standards. With this delivery, the following prefixes are available as standard system content."
        },
        {
          "heading": "Effects on existing data",
          "text": "If your system already contains EAN prefixes that were added through expert"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1FD,1XF,7TZ,BD9,6B2,16T,5D2,OW0,2T3,1F1,4MM,2JN,4Q2,O1R,1WO,3TQ,4LU,1GA,2YC,4H2,6HA,OS2,7OD,40G,2G4,41F,PEJ,J60,4B3,OS0,6BG,OLZ,4GA,2BE,6W2,OWV,6VA,34E,57Z,64C,OML,O3R,21T,6NE,63Y,3BR,OZS,J45,4LZ,5ON,1Z3,BKN,3G8,1X9,2BG,2UO,6WE,2F4,2VO,2BK,PMC,1IH,65D,PLF,2EJ,PMR,3OK,7DO,2NV,1MC,BH1,3L3,64A,33V,3TD,83I,O8J,OGP,3QE,34C,OJT,5IK,5W2,7ZH,31J,BJ5,3W0,49F,2VJ,OWF,35E,5HN,5I2,OFD,OHR,BMY,1MR,O78,2WL,1GF,BKA,1Q4,1LE,7S7,BDT,BDG,1ZI,35Q,OD9,2TS,1MI,1W8,34F,5OD,1Z6,3DX,4GT,21D,6GC,5OI,7MI,1J5,BJN,2VL,BH2,55I,6JM,4WM,4DN,5HR,6W3,1S0,1X7,7UA,BFH,2RU,2WK,5KF,5VV,4I9,7TO,OF4,2EL,OEJ,OT3,5IS,3ND,O3Y,OVY,OMD,1EZ,1JW,1P0,4AP,6VC,OMI,OTW,J58,OZ6,O1Q,1N1,3M0,4Q0,6BP,2R7,64B,3F4,1GP,5YV,2RP,3X4,O58,J54,5WH,3L1,OMK,1E1,ODH,3M4,PRF,OX3,3BS,22P,6HY,2ET,1ZT,77G,7DN,BJK,O2Z,3VQ,3SS,OFB,2O2,OT6,O5F,2QL,2MB,5VY,5Z0,OAZ,55E,3X3,2TT,4AN,63Q,J14,5W6,6B7,6N0,4X9,BML,ODQ,3M5,6B4,19O,3X1,3BX,ONA,34L,ODD,1JT,1B6,3UK,2QI,6VB,4HI,839,3WZ,BMR,3VR,85O,OVX,BEV,33G,OHH,5HK,2G5,BJH,4B4,5HL,6WC,PJ2,1ZQ,49D,1FM,3LQ,34D,7DX,OFC,OWM,7G5,OET,5VX,33E,7MA,54V,5OM,1NF,7L1,6W1,OBL,2TW,4V7,56E,6OT,2ZS,2VB,22Z,OKL,6VF,3BU,5IT,33O,2RW,19M,2UT,6VJ,6W4,OMB,31H,33X,OVZ,34B,2YL,63L,1WV,3NE,3EP,O9M,5OS,6ND,OWY,3F7,6W9,3NI,55U,6NH,O5E,BNA,1IU,6BU,3MO,5VZ,6NI,1IQ,OU8,42M,5W3,4BL,BDA,6VN,BKX,4A1,OVT,4GS,OUN,1T6,1YI,2UJ,2U8,5HP,3LP,4AZ,5OK,1N5,O60,J13,I9I,3X2,4YX,24H,41U,ONZ,6B6,1XN,OFA,OGO,OKJ,7Z2,2LG,3L8,1KC,3L7,34G,7DM,6WD,ODG,7NH,7Z1,2BI,1WC,33M,43D,19C,35F,1IL,7KW,BMK,O9E,4MO,4HH,OB5,6B3,1S2,7DW,O59,5OF,2DP,7ZA,1Z1,J77,2LN,BMC,J78,2V7,5OJ,6A6,2NY,BDN,2OI,J12,5L6,BJ8,6NF,3X0,3F0,2UN,OF7,2LZ,4RD,1BM,1RK,3UL,2VA,5CX,54U,64E,6BH,1N7,BDW,PKP,2QN,3XK,BD3,OBK,2I3,2UP,O62,BKL,1MZ,O44,21P,2HU,3D2,4B5,5YA,OKA,1J2,2ME,1A0,5WI,1E3,61V,6MT,PUJ,1K2,4E9,5W0,J82,1X3,7EZ,4X5,5DS,1HB,6U2,4RI,2R3,31L,43R,2O0,43Y,3QD,1YT,2VM,3VS,6VH,4AH,53X,ONV,1P7,3TE,6GD,PLH,PEZ,BNX,BKJ,2UW,O9C,O2K,OXN,BDK,4GQ,J62,4AQ,2UV,1QG,64F,3BW,4ON,BEJ,3M3,42L,16R,5MQ,OF1,42N,2NZ,54A,OO0,21Q,1QM,33Q,2UG,63S,49E,BJQ,4AU,21R,6W8,55F,5DR,O45,2AR,7VH,BMD,5YU,OBG,4A2,OND,2QP,1WE,OQ4,5WF,5HO,4OC,7MG,OL4,2FA,6V1,O54,OHI,1XB,2XU,5Z2,6BA,1QA,BDD,BFB,1P9,7T7,2MV,2FM,PFM,2F2,2XV,OEQ,4GR,77N,3LO,4AV,BLF,5XC,5QC,6VE,6GU,J55,1N3,1MP,5W4,6AA,6VG,2F9,18J,34M,2NX,ONT,OV7,7L4,830,2TX,BFC,42K,OLL,1R3,77V,2PD,6GS,31G,OYF,BF7,6B5,2XW,1QC,2G6,BJ2,6V0,BJE,5DQ,ONX,1GO,31Q,5YW,1WQ,BMH,JB1,2LH,BEI,BDQ,2UU,5OE,6X6,OAR,1NR,6VD,22T,54D,34O,1GB,22R,BD6,OBI,OX1,2UZ,OEG,1NT,19E,BDH,J59,4GY."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Additional GS1 EAN Prefixes Now Available in Product Master: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item See Scope Item Table Technical Object Name Not applicable Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade."
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Additional GS1 EAN Prefixes Now Available in Product Master, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Additional GS1 EAN Prefixes Now Available in Product Master",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/0f99dfb021964717af01fbef33861592?version=2608.00"
        },
        {
          "label": "https://www.gs1.org/standards/id-keys/company-prefix",
          "url": "https://help.sap.com/docs/link-disclaimer?site=https%3A%2F%2Fwww.gs1.org%2Fstandards%2Fid-keys%2Fcompany-prefix"
        },
        {
          "label": "EAN Prefixes",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/58aeea69a14d45d185ae078d7f928f38.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "Information published on non-SAP site",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/themes/sap-light/img/3rd_link.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/10e164ac0855481692934ba3d7fda894?version=2608.00": {
      "title": "Deprecation of Run Actual Settlement Application",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/10e164ac0855481692934ba3d7fda894?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Deprecation of Run Actual Settlement Application | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:14:18.439Z",
      "summary": "The Run Actual Settlement application (EAM88) is deprecated and will be removed in an upcoming release. This deprecation impacts the business catalogs mentioned below. These business catalogs are part of the Maintenance Planner role. Catalog ID Catalog Title SAP_EAM_BC_MP_ORD_MNG_PC EAM - Maintenance Orders Management SAP_EAM_BC_ORD_MC EAM - Order SAP_EAM_BC_ORD_MNG_PC EAM - Maintenance Orders Management Run Settlement - Actual (F4568) is the successor application.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The Run Actual Settlement application (EAM88) is deprecated and will be removed in an upcoming release. This deprecation impacts the business catalogs mentioned below. These business catalogs are part of the Maintenance Planner role. Catalog ID Catalog Title SAP_EAM_BC_MP_ORD_MNG_PC EAM - Maintenance Orders Management SAP_EAM_BC_ORD_MC EAM - Order SAP_EAM_BC_ORD_MNG_PC EAM - Maintenance Orders Management Run Settlement - Actual (F4568) is the successor application."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 4HI,4WN,4VT,4HH. Use affected app/technical object F4568."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Deprecation of Run Actual Settlement Application: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Deprecated Functional Localization No localization Scope Item 4HI (Proactive Maintenance) 4HH (Reactive Maintenance) 4VT (Improvement Maintenance) 4WM (Operational and Overhead Maintenance) Technical Object Name App ID (predecessor): EAM88 App ID (successor): F4568 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component PM-WOC-MO (Maintenance Orders) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Deprecation of Run Actual Settlement Application, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Deprecation of Run Actual Settlement Application",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/10e164ac0855481692934ba3d7fda894?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/115c59b8d7514df48907eb9724742e5b?version=2608.00": {
      "title": "Manage Sales Document Workflows: \"Do Nothing\" Option Removed",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/115c59b8d7514df48907eb9724742e5b?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Manage Sales Document Workflows: \"Do Nothing\" Option Removed | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:14:23.364Z",
      "summary": "In the Manage Sales Document Workflows app, the Do Nothing option is no longer available as an action in the exception handling for sales quotation workflows, sales contract workflows, sales order workflows, and sales order without charge workflows.  Previously, using this option could lead to workflow activation issues.  When you define a workflow step for sales document workflows, an action must be selected in the exception handling for a rework request.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "In the Manage Sales Document Workflows app, the Do Nothing option is no longer available as an action in the exception handling for sales quotation workflows, sales contract workflows, sales order workflows, and sales order without charge workflows.  Previously, using this option could lead to workflow activation issues.  When you define a workflow step for sales document workflows, an action must be selected in the exception handling for a rework request.  Currently, Rework is the only available action and is automatically preselected for the sales quotation workflows, sales contract workflows, sales order workflows, and sales order without charge workflows created as of SAP S/4HANA Cloud Public Edition 2608.  Changes to the User Interface Note The screenshots are examples to make the described change visible."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To access the Manage Sales Document Workflows app, users need to have the following IAM app assigned: F3014_TRAN"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. This is how the user interface looked before the change: This is how the user interface looks now:"
        },
        {
          "heading": "Effects on existing data",
          "text": "Due to this change, manual steps are required if you want to activate workflows created prior to SAP S/4HANA Cloud Public Edition 2608: Open a workflow created earlier. A message strip indicating data inconsistencies appears in the properties section. In the message strip, choose Upgrade twice as prompted. (Applicable if the Do Nothing option was previously selected) Open a workflow step where an error is indicated, choose Rework as an action in the exception handling section. Note If the Do Nothing option was previously selected in a workflow step, an error is indicated in the step. Activate the workflow."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BD9. Use affected app/technical object F3014."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Manage Sales Document Workflows: \"Do Nothing\" Option Removed: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item BD9 (Sell from Stock) Technical Object Name App ID: F3014 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component SD-SLS (Sales) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Manage Sales Document Workflows: \"Do Nothing\" Option Removed, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Manage Sales Document Workflows: \"Do Nothing\" Option Removed",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/115c59b8d7514df48907eb9724742e5b?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "In the exception handling section of a workflow step, the \"Do Nothing\" and \"Rework\" options were previously available as actions.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio27f5c53cd2c0403398a965c320618b68_LowRes.png"
        },
        {
          "label": "In the exception handling section of a workflow step, only the \"Rework\" option is now available as an action.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loiob47aa774ae79496394087d239fbad319_LowRes.png"
        },
        {
          "label": "In the properties section of the workflow, a message asking you to upgrade the workflow version appears.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loioe7c45d9e387444bfb0b332700e6acfb0_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1784665324f740e6861222a7c2b5160f?version=2608.00": {
      "title": "Deprecation of Display Actual Cost Documents (KSB5)",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1784665324f740e6861222a7c2b5160f?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:14:27.014Z",
      "summary": "As of SAP S/4HANA Cloud Public Edition 2602, the old app version of the Display Actual Cost Documents app is deprecated and will be removed in an upcoming release.  We strongly recommend that you switch to the successor app Display Journal Entries as soon as possible.  For more information about app deprecation, see Deprecation Process for Apps.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "As of SAP S/4HANA Cloud Public Edition 2602, the old app version of the Display Actual Cost Documents app is deprecated and will be removed in an upcoming release.  We strongly recommend that you switch to the successor app Display Journal Entries as soon as possible.  For more information about app deprecation, see Deprecation Process for Apps.  The new app provides the following additional features: Integrated and aligned view on the relevant dimensions from financial accounting and overhead accounting Drill down between dimensions from financial accounting and overhead accounting without switching back and forth between two apps Latest design and technology To find out how to display information relevant for overhead management in the Display Journal Entries app, see SAP Note 3674471 ."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access the new app, their business users need to have the following business catalog assigned: Display Journal Entries (F7697_TRAN) Note Since the underlying IAM apps are delivered as inactive, the new experience switch is not displayed to users by default. It only appears when you activate the underlying IAM apps and assign them to your users. We highly recommend doing this to make users aware of the need to switch to the new app version. For more information on how to activate or deactivate IAM apps, refer to How to Activate or Deactivate IAM Apps of Type App Authorization Variant."
        },
        {
          "heading": "Effects on existing data",
          "text": "The New Experience Switch automatically expands an information popover in the affected apps. If you have your own test automation (RPA bots, etc.) set up in your system, this behavior might have an impact on these tests. For details on how to resolve the impact on your test automates, see Tips for Test Automation."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J54. Use affected app/technical object F7697."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Deprecation of Display Actual Cost Documents (KSB5): confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Deprecated Functional Localization No localization Scope Item J54 (Overhead Cost Management) Technical Object Name App ID (old app): KSB5 App ID (new app): F7697 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CO-OM (Overhead Cost Controlling) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Deprecation of Display Actual Cost Documents (KSB5), including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Deprecation of Display Actual Cost Documents (KSB5)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1784665324f740e6861222a7c2b5160f?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/17f0b275b12543289afceeada764d916?version=2608.00": {
      "title": "New Indicator for Interest Calculation on Accounts Payable Items",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/17f0b275b12543289afceeada764d916?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "New Indicator for Interest Calculation on Accounts Payable Items | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:14:30.529Z",
      "summary": "When a supplier invoice has associated goods receipts, it's now possible to use the later date of the invoice baseline date or the date of the last goods receipt together with the related payment terms to determine the due date of accounts payable (AP) items, and then calculate interest based on that due date. This is achieved by enabling the new indicator Recalculate Due Date for Accounts Payable Items in the Prepare Item Interest Calculation (ID: 103459)",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "When a supplier invoice has associated goods receipts, it's now possible to use the later date of the invoice baseline date or the date of the last goods receipt together with the related payment terms to determine the due date of accounts payable (AP) items, and then calculate interest based on that due date. This is achieved by enabling the new indicator Recalculate Due Date for Accounts Payable Items in the Prepare Item Interest Calculation (ID: 103459)"
        },
        {
          "heading": "Implementation details from SAP",
          "text": "This new indicator was already available in a previous release but required you to activate the New indicator for interest calculation on AP Items (FI_INT_MM_CASE) feature in the Activate Features"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "activity. When the indicator is set, the system ignores the reference date maintained the Ref. Date field in the Prepare Item Interest Calculation activity for due date determination and interest calculation on AP items. Instead, based on whether the supplier invoice has associated goods receipts, the following rules apply for AP items: Invoice without reference to goods receipts When dealing with a supplier invoice that has no associated goods receipts (for example, invoices posted directly in financial accounting), the system uses the invoice baseline date along with the payment terms to determine the due date and then starts interest calculation from the day after the due date."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J59,J60."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for New Indicator for Interest Calculation on Accounts Payable Items: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J59 (Accounts Receivable) Technical Object Name Configuration activity ID: 103459 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-AR-AR-C (Dunning/Interest) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        },
        {
          "heading": "Configuration / SSCUI to check",
          "text": "ID: 103459 | configuration activity | Configuration activity ID: 103459 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for New Indicator for Interest Calculation on Accounts Payable Items, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - New Indicator for Interest Calculation on Accounts Payable Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/17f0b275b12543289afceeada764d916?version=2608.00"
        },
        {
          "label": "Configuration for Interest Calculation",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/be999fa506d042ad80d6dc23f0f9c816.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "The new indicator is highlighted in the screenshot.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loiof49b7e51cfae4f28900a0e071c34b2a0_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1b0f478ca3e248a794d211553b4629e1?version=2608.00": {
      "title": "Validation for Item Hierarchy in Purchase Requisition",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1b0f478ca3e248a794d211553b4629e1?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Validation for Item Hierarchy in Purchase Requisition | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:14:34.314Z",
      "summary": "With this release, in the Process Purchase Requisitions app, when creating purchase orders from purchase requisitions, there is a validation for item hierarchy.  The Create Purchase Order button is enabled only if all the selected purchase requisitions share the same supplier, purchasing organization, and purchasing group.  For purchase requisitions with item hierarchies, the validation is performed for all the items within the root item ensuring that the criteria is met.  Additionally, all the sub-items must be approved and not blocked.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this release, in the Process Purchase Requisitions app, when creating purchase orders from purchase requisitions, there is a validation for item hierarchy.  The Create Purchase Order button is enabled only if all the selected purchase requisitions share the same supplier, purchasing organization, and purchasing group.  For purchase requisitions with item hierarchies, the validation is performed for all the items within the root item ensuring that the criteria is met.  Additionally, all the sub-items must be approved and not blocked.  The Fixed Supplier button is enabled only if the sub-items in purchase requisitions with item hierarchies, have same material, plant and purchasing organization."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 18J. Use affected app/technical object F1048A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Validation for Item Hierarchy in Purchase Requisition: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item 18J (Requisitioning) Technical Object Name App ID: F1048A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-FIO-PUR-REQ-SOC (Fiori UI for Sourcing Purchase Requisitions) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Validation for Item Hierarchy in Purchase Requisition, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Validation for Item Hierarchy in Purchase Requisition",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1b0f478ca3e248a794d211553b4629e1?version=2608.00"
        },
        {
          "label": "Process Purchase Requisitions (V2)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b9ef8f7ff6084b63a7bf59dac8de06c7.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1dfcbff1d5074e75b7fd3bf657081017?version=2608.00": {
      "title": "\"Not Used\" Column Removed from Renumber G/L Accounts Configuration Activity",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1dfcbff1d5074e75b7fd3bf657081017?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "\"Not Used\" Column Removed from Renumber G/L Accounts Configuration Activity | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:14:37.926Z",
      "summary": "As previously announced, the Not Used column was an obsolete feature in the Renumber G/L Accounts",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "As previously announced, the Not Used column was an obsolete feature in the Renumber G/L Accounts"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "Activity"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J58."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for \"Not Used\" Column Removed from Renumber G/L Accounts Configuration Activity: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J58 (Accounting and Financial Close) Technical Object Name Configuration Activity 150000 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-GL-MD (Master Data Apps) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        },
        {
          "heading": "Configuration / SSCUI to check",
          "text": "configuration activity | Configuration Activity 150000 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for \"Not Used\" Column Removed from Renumber G/L Accounts Configuration Activity, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - \"Not Used\" Column Removed from Renumber G/L Accounts Configuration Activi",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1dfcbff1d5074e75b7fd3bf657081017?version=2608.00"
        },
        {
          "label": "Manage G/L Account Master Data",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/34428754dccbe85ee10000000a44176d.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio602fc2112f714ae292a4f93607d17194_LowRes.png"
        },
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio584fd14cbee74a13b545812d9ebf3eb9_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2005d852e43746889ba889bcaeb11a36?version=2608.00": {
      "title": "Refined Log Categories in Display Automatic Payments Logs",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2005d852e43746889ba889bcaeb11a36?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Refined Log Categories in Display Automatic Payments Logs | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:14:43.362Z",
      "summary": "The Display Automatic Payments Logs app (ID: F6782) now offers a streamlined log data display. It focuses on log categories specifically relevant to automatic payments in the accounts payable process and only displays logs from the following categories: FAP_SPP FBPM FBPM_NEW and the following subcategories: FI_PYORD JOB_LOG FI_DD_PREN CPM",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The Display Automatic Payments Logs app (ID: F6782) now offers a streamlined log data display. It focuses on log categories specifically relevant to automatic payments in the accounts payable process and only displays logs from the following categories: FAP_SPP FBPM FBPM_NEW and the following subcategories: FI_PYORD JOB_LOG FI_DD_PREN CPM"
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access this app, their business users need to have the following IAM app assigned: Display Automatic Payments Logs (F6782_TRAN)."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J60. Use affected app/technical object F6782."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Refined Log Categories in Display Automatic Payments Logs: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J60 (Accounts Payable) Technical Object Name App ID: F6782 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-AP-PAY (Payment Apps) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Refined Log Categories in Display Automatic Payments Logs, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Refined Log Categories in Display Automatic Payments Logs",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2005d852e43746889ba889bcaeb11a36?version=2608.00"
        },
        {
          "label": "Display Automatic Payments Logs",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/34f4a0f46d684ed78fb36043a5a93a6b.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/21477875ae014eb2a5f9b95346635a46?version=2608.00": {
      "title": "Number of Sources of Supply in Process Purchase Requisitions",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/21477875ae014eb2a5f9b95346635a46?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Number of Sources of Supply in Process Purchase Requisitions | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:14:46.565Z",
      "summary": "With this release, you can view the actual number of proposed sources of supply for each purchase requisition line item in the app Process Purchase Requisitions. Examples of the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this release, you can view the actual number of proposed sources of supply for each purchase requisition line item in the app Process Purchase Requisitions. Examples of the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. In the Process Purchase Requisitions app, you can view the Number of Sources of Supply in the list page by selecting it via the Settings and using the Show More per Row. Number of Sources of Supply in Process Purchase Requisitions"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Review only if this exact feature is used by CFA or sits in a used scope/process. Scope item(s): 18J. Use affected app/technical object F1048A."
        },
        {
          "heading": "How to test",
          "text": "Use SAP's article details to identify the specific changed field, app action, report output, configuration setting, or process behaviour; then run one realistic walkthrough with the owning business role."
        },
        {
          "heading": "Expected result",
          "text": "The changed behaviour appears exactly where SAP describes it and does not break the current CFA user flow. Record relevant, not relevant, or future adoption."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item 18J (Requisitioning) Technical Object Name App ID: F1048A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-FIO-PUR-REQ-SOC (Fiori UI for Sourcing Purchase Requisitions) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current behaviour for the affected app/process before upgrade if the area is used.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 changed behaviour and whether CFA needs release testing, future adoption, or no action.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Number of Sources of Supply in Process Purchase Requisitions",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/21477875ae014eb2a5f9b95346635a46?version=2608.00"
        },
        {
          "label": "Process Purchase Requisitions (V2)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b9ef8f7ff6084b63a7bf59dac8de06c7.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio17df8ce36c8f4d5bb33b2549fa9cf3fd_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2150f26e5af04290ac67ee1d7d6d47f2?version=2608.00": {
      "title": "Header Attachments in Purchase Requisition Header Object Page and My Inbox",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2150f26e5af04290ac67ee1d7d6d47f2?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Header Attachments in Purchase Requisition Header Object Page and My Inbox | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:14:51.913Z",
      "summary": "With this release, you can view and download DMS (Document Management Service) header attachments of a purchase requisition using the Attachments section in the Purchase Requisition Object Page and My Inbox. Additionally you can also: View details of the user that added the attachments. View details of the attachment like name, upload date, file size, document type and source. Examples of the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this release, you can view and download DMS (Document Management Service) header attachments of a purchase requisition using the Attachments section in the Purchase Requisition Object Page and My Inbox. Additionally you can also: View details of the user that added the attachments. View details of the attachment like name, upload date, file size, document type and source. Examples of the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. In the purchase requisition header object page and My Inbox, you can view and download DMS attachments at the header level. DMS Header Attachments in Purchase Requisition Header Object Page"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Review only if this exact feature is used by CFA or sits in a used scope/process. Scope item(s): BNX,1XI,18J,O8J. Use affected app/technical object F1640, F0862."
        },
        {
          "heading": "How to test",
          "text": "Use SAP's article details to identify the specific changed field, app action, report output, configuration setting, or process behaviour; then run one realistic walkthrough with the owning business role."
        },
        {
          "heading": "Expected result",
          "text": "The changed behaviour appears exactly where SAP describes it and does not break the current CFA user flow. Record relevant, not relevant, or future adoption."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item 18J (Requisitioning), O8J (Requisitioning), 1XI (Central Requisitioning), BNX (Consumable Purchasing) Technical Object Name App ID: F1640 App ID: F0862 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-PUR-REQ (Purchase Requisitions) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current behaviour for the affected app/process before upgrade if the area is used.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 changed behaviour and whether CFA needs release testing, future adoption, or no action.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Header Attachments in Purchase Requisition Header Object Page and My Inbo",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2150f26e5af04290ac67ee1d7d6d47f2?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loioc5db6cc394aa4d1aab3a4bd31d6ccdef_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/22e0713af73c41b790eb63dc381d8465?version=2608.00": {
      "title": "Data Validation for Custom Fields in Condition Records",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/22e0713af73c41b790eb63dc381d8465?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Data Validation for Custom Fields in Condition Records | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:14:55.404Z",
      "summary": "With this feature, the system now validates values for custom fields in condition records for pricing in sales.  This validation applies to custom fields that use the Code List Based on CDS View type.  When you specify a value for the custom fields in a condition record, the system checks whether the value exists in its defined value help.  If the value doesn't exist, the system considers it invalid and you can't enter it.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, the system now validates values for custom fields in condition records for pricing in sales.  This validation applies to custom fields that use the Code List Based on CDS View type.  When you specify a value for the custom fields in a condition record, the system checks whether the value exists in its defined value help.  If the value doesn't exist, the system considers it invalid and you can't enter it."
        },
        {
          "heading": "Effects on existing data",
          "text": "If you have existing custom fields of the type Code List Based on CDS View, republish those fields in the Custom Fields app to enable this feature. For more information, see the extensibility documentation for the respective apps. For the API, data validation is automatically available for existing custom fields."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BD9. Use affected app/technical object F4111."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Data Validation for Custom Fields in Condition Records: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item BD9 (Sell from Stock) Technical Object Name App ID: F4111 VK12 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component SD-MD-CM (Conditions) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Data Validation for Custom Fields in Condition Records, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Data Validation for Custom Fields in Condition Records",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/22e0713af73c41b790eb63dc381d8465?version=2608.00"
        },
        {
          "label": "App Extensibility: Manage Prices - Sales",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/621e844403fe4dd5a076438d87156e14.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "App Extensibility: Manage Tax Rates – Sales",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/86829f362bb74604b76381a5b6832fc7.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Extensibility: Condition Record for Pricing in Sales",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/af4a34071e484fb28bd3008febfa0c5e.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/23e70ce7b3354501a300c6a781a858d1?version=2608.00": {
      "title": "IAM Changes for Purchase Requisition",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/23e70ce7b3354501a300c6a781a858d1?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:14:58.867Z",
      "summary": "Changes to identity and access management (IAM) objects have been delivered for purchase requisition in sourcing and procurement. For details about the IAM changes that have occurred between two releases of SAP S/4HANA Cloud Public Edition, please see: Identity and Access Management (IAM): Central Change Overview",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "Changes to identity and access management (IAM) objects have been delivered for purchase requisition in sourcing and procurement. For details about the IAM changes that have occurred between two releases of SAP S/4HANA Cloud Public Edition, please see: Identity and Access Management (IAM): Central Change Overview"
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations You can use the Business Role Templates app and the Business Catalogs app to read the description of each business role template and business catalog, and to see the associated restriction types.  If you use IAM App variant to create custom business role, then: As an employee, you have no action.  As a purchaser, you need to activate the app F1639A_TRAN.  If you use standard business role template, then: As an employee (SAP_BR_EMPLOYEE_PROCUREMENT), you have to disable the app F1639A_JOULE_TRAN.  As a purchaser (SAP_BR_PURCHASER), you need to activate."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1XI,18J,O8J. Use affected app/technical object F1639A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for IAM Changes for Purchase Requisition: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item 18J (Requisitioning) Technical Object Name App ID: F1639A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-PUR-REQ (Purchase Requisitions) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for IAM Changes for Purchase Requisition, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - IAM Changes for Purchase Requisition",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/23e70ce7b3354501a300c6a781a858d1?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2491db41ad83424a966f5c3b6a409986?version=2608.00": {
      "title": "Changes in Manage Finance Notifications",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2491db41ad83424a966f5c3b6a409986?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Changes in Manage Finance Notifications | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:15:03.661Z",
      "summary": "To give you a quick overview of operations for finance notifications and the posting status of accounting notifications, the Manage Finance Notifications app now provides the following new features: The Last Operation tab The Operation History tab Key information of accounting notifications, displayed on the object page of the Process Information tab On the Last Operation tab, you can view key details about the most recent processing operation, such as the operation result and the performers involved, as well as operation logs of all types, including warnings, errors, and informational messages.  A complete record of all operations is available on the Operation History tab.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "To give you a quick overview of operations for finance notifications and the posting status of accounting notifications, the Manage Finance Notifications app now provides the following new features: The Last Operation tab The Operation History tab Key information of accounting notifications, displayed on the object page of the Process Information tab On the Last Operation tab, you can view key details about the most recent processing operation, such as the operation result and the performers involved, as well as operation logs of all types, including warnings, errors, and informational messages.  A complete record of all operations is available on the Operation History tab.  Together, these features help you monitor all changes to your finance notifications in one place."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. The Last Operation and Operation History tabs The accounting notification information on the Process Information tab"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): J58. Use affected app/technical object F8825."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J58 (Accounting and Financial Close) Technical Object Name App ID: F8825 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-GL-BTI (Accounting Business Transaction Interface) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Changes in Manage Finance Notifications",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2491db41ad83424a966f5c3b6a409986?version=2608.00"
        },
        {
          "label": "Manage Finance Notifications",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6f33b084d2ed4f6089e30215df3d964d.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio027366e4714f4f4b8dcfef52cdcb2069_LowRes.png"
        },
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio48b78d0007094a51b04227bce1769d4b_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/27aaf3b5397b4840b630f7b33e418254?version=2608.00": {
      "title": "Deprecation of Material Price Change Documents (CKMPCD) and Display Price Changes (CKMPCSEARCH)",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/27aaf3b5397b4840b630f7b33e418254?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Deprecation of Material Price Change Documents (CKMPCD) and Display Price Changes (CKMPCSEARCH) | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:15:26.131Z",
      "summary": "As of SAP S/4HANA Cloud Public Edition 2608, the old app versions of Material Price Change Documents (CKMPCSEARCH) and Display Price Changes (CKMPCD) are deprecated and will be removed in an upcoming release.  For more information about app deprecation, see Deprecation Process for Apps.  We strongly recommend that you switch to the successor apps Display Material Price Change Documents (F6684) and Display Material Debit/Credit Documents (F8982) as soon as possible.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "As of SAP S/4HANA Cloud Public Edition 2608, the old app versions of Material Price Change Documents (CKMPCSEARCH) and Display Price Changes (CKMPCD) are deprecated and will be removed in an upcoming release.  For more information about app deprecation, see Deprecation Process for Apps.  We strongly recommend that you switch to the successor apps Display Material Price Change Documents (F6684) and Display Material Debit/Credit Documents (F8982) as soon as possible.  The new apps provide the following additional features: Split screen: switch between search and display of price change documents Flexible filter options Quick links Note In both involved apps, the New Experience Switch behavior is enabled.  If business end users have authorizations for both the old and the new app, they can also switch between both app versions."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access the successor apps, their business users need to have the following IAM apps assigned: Display Material Price Change Documents (F6684_TRAN) Display Material Debit/Credit Documents (F8982_TRAN)"
        },
        {
          "heading": "Effects on existing data",
          "text": "The New Experience Switch automatically expands an information popover in the affected apps. If you have your own test automation (RPA bots, etc.) set up in your system, this behavior might have an impact on these tests. For details on how to resolve the impact on your test automates, see Tips for Test Automation."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1ZT. Use affected app/technical object F6684, F8982."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Deprecation of Material Price Change Documents (CKMPCD) and Display Price Changes (CKMPCSEARCH): confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Deprecated Functional Localization No localization Scope Item 1ZT (Managing Material Price Changes and Inventory Values) Technical Object Name App ID (old apps): CKMPCD CKMPCSEARCH App ID (new apps): F6684 F8982 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CO-PC-ML (Material Subledger) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Deprecation of Material Price Change Documents (CKMPCD) and Display Price Changes (CKMPCSEARCH), including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Deprecation of Material Price Change Documents (CKMPCD) and Display Price",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/27aaf3b5397b4840b630f7b33e418254?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2817160138f54a66a9c2cb1183b15296?version=2608.00": {
      "title": "Changes in Manage Operating G/L Accounts App",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2817160138f54a66a9c2cb1183b15296?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Changes in Manage Operating G/L Accounts App | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:15:29.423Z",
      "summary": "The action item Mass Change in the Manage Operating G/L Accounts app is changed to the action group Mass Change. When you select Mass Change in the Chart of Accounts view, you can then select the action Mass Change Chart of Accounts. The functionality remains the same.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The action item Mass Change in the Manage Operating G/L Accounts app is changed to the action group Mass Change. When you select Mass Change in the Chart of Accounts view, you can then select the action Mass Change Chart of Accounts. The functionality remains the same."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Review only if this exact feature is used by CFA or sits in a used scope/process. Scope item(s): J58. Use affected app/technical object F0731B."
        },
        {
          "heading": "How to test",
          "text": "Use SAP's article details to identify the specific changed field, app action, report output, configuration setting, or process behaviour; then run one realistic walkthrough with the owning business role."
        },
        {
          "heading": "Expected result",
          "text": "The changed behaviour appears exactly where SAP describes it and does not break the current CFA user flow. Record relevant, not relevant, or future adoption."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J58 (Accounting and Financial Close) Technical Object Name App ID: F0731B App Name: Manage Operating G/L Accounts Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-GL-GL-N (Master Data) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current behaviour for the affected app/process before upgrade if the area is used.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 changed behaviour and whether CFA needs release testing, future adoption, or no action.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Changes in Manage Operating G/L Accounts App",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2817160138f54a66a9c2cb1183b15296?version=2608.00"
        },
        {
          "label": "Manage Operating G/L Accounts",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f99d42d9afe140e1846c5f09d5923e2e.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2bccd443140f4298bc0edcda02eef365?version=2608.00": {
      "title": "New Fields Added to the Template of the Upload Customer Open Items App",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2bccd443140f4298bc0edcda02eef365?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "New Fields Added to the Template of the Upload Customer Open Items App | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:15:32.645Z",
      "summary": "The template of the Upload Customer Open Items app has been enhanced with additional fields to support country/region-specific requirements and profitability analysis.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The template of the Upload Customer Open Items app has been enhanced with additional fields to support country/region-specific requirements and profitability analysis."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J59. Use affected app/technical object F4051."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for New Fields Added to the Template of the Upload Customer Open Items App: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J59 (Accounts Receivable) Technical Object Name App ID: F4051 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-AR-TRA (Transaction Apps) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for New Fields Added to the Template of the Upload Customer Open Items App, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - New Fields Added to the Template of the Upload Customer Open Items App",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2bccd443140f4298bc0edcda02eef365?version=2608.00"
        },
        {
          "label": "Enablement of Country/Region-Specific Fields in Upload Customer Open Items App",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b0b25ac16390445297a95a0efc412918.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Hidden Fields in the Template",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9ae49cceb84d469897a9f85628f3fe5c.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Upload Customer Open Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/87e29780bde0416f901ad730f658fc47.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2d37ac42d5de41a887403267380647ac?version=2608.00": {
      "title": "Clear G/L Accounts - Manual Clearing: Enhanced Simulate Button",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2d37ac42d5de41a887403267380647ac?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Clear G/L Accounts - Manual Clearing: Enhanced Simulate Button | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:15:38.548Z",
      "summary": "The Simulate button in the Clear G/L Accounts - Manual Clearing app has been enhanced. Previously, the button directed you to a simulated journal entry in the Manage Journal Entries app. Now, the button opens a simulated view of a posted journal entry in a pop-up screen within the posting app. This screen includes a header and tabs for General Information and Line Items in Entry View. For more information, see Simulating Journal Entries.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The Simulate button in the Clear G/L Accounts - Manual Clearing app has been enhanced. Previously, the button directed you to a simulated journal entry in the Manage Journal Entries app. Now, the button opens a simulated view of a posted journal entry in a pop-up screen within the posting app. This screen includes a header and tabs for General Information and Line Items in Entry View. For more information, see Simulating Journal Entries."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Review only if this exact feature is used by CFA or sits in a used scope/process. Scope item(s): J58. Use affected app/technical object F1579."
        },
        {
          "heading": "How to test",
          "text": "Use SAP's article details to identify the specific changed field, app action, report output, configuration setting, or process behaviour; then run one realistic walkthrough with the owning business role."
        },
        {
          "heading": "Expected result",
          "text": "The changed behaviour appears exactly where SAP describes it and does not break the current CFA user flow. Record relevant, not relevant, or future adoption."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J58 Technical Object Name F1579 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-GL-PER (Periodic Activities Applications in General Ledger) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current behaviour for the affected app/process before upgrade if the area is used.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 changed behaviour and whether CFA needs release testing, future adoption, or no action.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Clear G/L Accounts - Manual Clearing: Enhanced Simulate Button",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2d37ac42d5de41a887403267380647ac?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2e82906821064114a2f09247c3f578b9?version=2608.00": {
      "title": "Attachments in Manage Statistical Key Figure Values",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2e82906821064114a2f09247c3f578b9?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Attachments in Manage Statistical Key Figure Values | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:15:42.166Z",
      "summary": "The Manage Statistical Key Figure Values (F3915A) app now includes an attachments section.  When posting a document containing statistical key figure values, you can upload attachments during document creation.  Because documents cannot be modified after they are saved, this restriction also applies to attachments: once a document has been created, attachments can no longer be uploaded or modified.  They are available for download only.  Changes to the User Interface Note The screenshots are examples to make the described change visible.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The Manage Statistical Key Figure Values (F3915A) app now includes an attachments section. When posting a document containing statistical key figure values, you can upload attachments during document creation. Because documents cannot be modified after they are saved, this restriction also applies to attachments: once a document has been created, attachments can no longer be uploaded or modified. They are available for download only. Changes to the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to"
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access this app, their business users need to have the following IAM app assigned: Manage Statistical Key Figure Values V2 (F3915A_TRAN)."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. The new Attachments tab and the Upload attachment function in an unposted document: An attachment in a posted document. Note the only available functions are Download and Details:"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J54. Use affected app/technical object F3915A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Attachments in Manage Statistical Key Figure Values: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J54 (Overhead Cost Accounting) Technical Object Name App ID: F3915A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. Yes Note The most up-to-date reference content isn't available immediately after SAP has upgraded the software in your test system. That means this feature isn't available for early tests. Later, the reference content is upgraded in the development system, and any changes need to be brought to your test and production systems. Application Component FIN-UA (Universal Allocations) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Attachments in Manage Statistical Key Figure Values, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Attachments in Manage Statistical Key Figure Values",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2e82906821064114a2f09247c3f578b9?version=2608.00"
        },
        {
          "label": "Manage Statistical Key Figure Values (New Version)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/8b1d871966884aacba5c54d4605b11e6.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio4962e29371294763a29765817e83968b_LowRes.png"
        },
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loiof001a79380204e62bf960cdf9166035e_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2fd5f2791bea449a89d6e104ba6d5181?version=2608.00": {
      "title": "Material Inventory Values - Balance Summary Review Booklet",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2fd5f2791bea449a89d6e104ba6d5181?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Material Inventory Values - Balance Summary Review Booklet | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:15:46.720Z",
      "summary": "Use this app to display, analyze, and validate balance summary data of material inventory values for a reporting date.  The app presents an aggregated view of financial statements by combining the following predefined business pages Balance Summary Overview and Balance Summary Graphical Display.  You can use this app to do the following: Display the inventory quantity and value by company code, G/L account, material group, profit center, and segment Analyze the balance summary in detail with attributes such as plant, valuation area, material, and measures.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "Use this app to display, analyze, and validate balance summary data of material inventory values for a reporting date.  The app presents an aggregated view of financial statements by combining the following predefined business pages Balance Summary Overview and Balance Summary Graphical Display.  You can use this app to do the following: Display the inventory quantity and value by company code, G/L account, material group, profit center, and segment Analyze the balance summary in detail with attributes such as plant, valuation area, material, and measures.  The measures are a compilation of central characteristics including inventory quantity, amounts in different currency types (for example, functional currency)."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "For more information about working with review booklets, see Review Booklets. Authorizations To enable users to access this app, their business users need to have the following IAM app assigned: Material Inventory Values - Balance Summary Review Booklet (F1422B_TRAN)."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1ZT. Use affected app/technical object F1422B."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Material Inventory Values - Balance Summary Review Booklet: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item 1ZT (Managing Material Price Changes and Inventory Values) Technical Object Name App ID: F1422B Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CO-FIO-ML (Material Subledger) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Material Inventory Values - Balance Summary Review Booklet, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Material Inventory Values - Balance Summary Review Booklet",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2fd5f2791bea449a89d6e104ba6d5181?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "The screenshot shows an example of the Balance Summary Overview business page.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio656b3c244bf74fc6b86416b268246709_LowRes.png"
        },
        {
          "label": "The screenshot shows an example of the Balance Summary Graphical Display business page.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio0132f467229a470eae6fed45ad5e2520_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/33fc9357fe5241189bcc4d4bbd81620e?version=2608.00": {
      "title": "Manage Credit Memo Requests - Version 2 App: Enhancements",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/33fc9357fe5241189bcc4d4bbd81620e?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Manage Credit Memo Requests - Version 2 App: Enhancements | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:15:51.052Z",
      "summary": "With the Manage Credit Memo Requests - Version 2 app, you can now do the following in credit memo requests: View SAP GTS compliance check statuses Edit item descriptions View SAP GTS Compliance Check Statuses You can view results of trade compliance checks from SAP Global Trade Services (SAP GTS) in credit memo requests.  For more information, seeTrade Compliance Checks in Credit Memo Requests and Debit Memo Requests.  Item Description You can create the item description for credit memo request items.  Item description is used to further specify the item or provide additional information.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With the Manage Credit Memo Requests - Version 2 app, you can now do the following in credit memo requests: View SAP GTS compliance check statuses Edit item descriptions View SAP GTS Compliance Check Statuses You can view results of trade compliance checks from SAP Global Trade Services (SAP GTS) in credit memo requests.  For more information, seeTrade Compliance Checks in Credit Memo Requests and Debit Memo Requests.  Item Description You can create the item description for credit memo request items.  Item description is used to further specify the item or provide additional information.  If you don't specify your own description, the system uses the product description from master data as a default.  The item description field is not visible by default.  To edit it, first add it to the item table from the table settings."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access this app, their business users need to have the following IAM app assigned: Manage Credit Memo Requests - Version 2 (F1989A_TRAN)."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. You can edit the item description in the items table: The item description is displayed in the item details at the top:"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1EZ,BKL. Use affected app/technical object F1989A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Manage Credit Memo Requests - Version 2 App: Enhancements: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item 1EZ (Credit Memo Processing) BKL (Invoice Correction Process with Credit Memo) Technical Object Name App ID: F1989A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component SD-SLS-CMR (Credit Memo Request and Debit Memo Request) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Manage Credit Memo Requests - Version 2 App: Enhancements, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Manage Credit Memo Requests - Version 2 App: Enhancements",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/33fc9357fe5241189bcc4d4bbd81620e?version=2608.00"
        },
        {
          "label": "Trade Compliance Checks in Credit Memo Requests and Debit Memo Requests",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4f839da32c7a45968be2338b2ab94360.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Manage Credit Memo Requests - Version 2",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/eb3602d7234b43218377ff3f1e3b9825.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "Screenshot showing the item description field in the items table.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loiobf91c94c7efc4838a225ed593cbca540_LowRes.png"
        },
        {
          "label": "Screenshot showing the item description displayed at top of the item page.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio38d7209dda4e477e9a392bb0359e8440_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/3c40a7705245473e80f706f1d6432f48?version=2608.00": {
      "title": "Enhanced Extensibility of the Upload Customer Open Items App",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/3c40a7705245473e80f706f1d6432f48?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Enhanced Extensibility of the Upload Customer Open Items App | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:15:56.103Z",
      "summary": "As a key user, you can now extend the Upload Customer Open Items app with custom fields for market segments by using the Accounting: Market Segment business context.  You first use the Custom Fields app to create and publish your custom fields in the Accounting: Market Segment business context.  The published custom fields are then added automatically to the G/L Account Items section of the upload template.  Then, you download the template to get the latest version, which contains the custom fields, fill in the template, and upload the completed file back to the app.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "As a key user, you can now extend the Upload Customer Open Items app with custom fields for market segments by using the Accounting: Market Segment business context. You first use the Custom Fields app to create and publish your custom fields in the Accounting: Market Segment business context. The published custom fields are then added automatically to the G/L Account Items section of the upload template. Then, you download the template to get the latest version, which contains the custom fields, fill in the template, and upload the completed file back to the app. After uploading an open item back to the app, you use key user adaptation to add the custom fields to the details page of the open item. For more information, see App Extensibility: Upload Customer Open Items (Key User) and How to Create and Enable Custom Fields."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J59. Use affected app/technical object F4051."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Enhanced Extensibility of the Upload Customer Open Items App: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J59 (Accounts Receivable) Technical Object Name App ID: F4051 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-AR-TRA (Transaction Apps) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Enhanced Extensibility of the Upload Customer Open Items App, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Enhanced Extensibility of the Upload Customer Open Items App",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/3c40a7705245473e80f706f1d6432f48?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/3e32dd6983bb4b5ca7e91b042e1694ee?version=2608.00": {
      "title": "Import Teams",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/3e32dd6983bb4b5ca7e91b042e1694ee?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Import Teams | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:16:00.765Z",
      "summary": "You can now import team data in bulk into the Manage Teams and Responsibilities app using the new Import Teams feature. Instead of manually creating or updating teams one by one, you can upload a file containing the required team information directly, to efficiently onboard, migrate, or synchronize team structures without manual recreation. Key Benefits: Faster Setup – simplifies migration and onboarding. Reuse – Enables reuse of existing team definitions. Reduced Manual Effort – Eliminates the need for repetitive manual data entry. Improved Accuracy – Minimizes errors by importing structured data directly from a file.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "You can now import team data in bulk into the Manage Teams and Responsibilities app using the new Import Teams feature. Instead of manually creating or updating teams one by one, you can upload a file containing the required team information directly, to efficiently onboard, migrate, or synchronize team structures without manual recreation. Key Benefits: Faster Setup – simplifies migration and onboarding. Reuse – Enables reuse of existing team definitions. Reduced Manual Effort – Eliminates the need for repetitive manual data entry. Improved Accuracy – Minimizes errors by importing structured data directly from a file."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1NJ. Use affected app/technical object F2412."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Import Teams: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item 1NJ (1NJ) Technical Object Name App ID: F2412 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CA-SIT-RM (Responsibility Management) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Import Teams, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Import Teams",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/3e32dd6983bb4b5ca7e91b042e1694ee?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4024aa17bb854caaaf8eff4046497e69?version=2608.00": {
      "title": "Deprecation of SOAP APIs for Asset Master Data and Communication Scenario SAP_COM_0563",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4024aa17bb854caaaf8eff4046497e69?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:16:04.436Z",
      "summary": "The previous SOAP APIs for asset master data are deprecated as of release SAP S/4HANA Cloud Public Edition 2608.  They will be deleted in a future release.  Their successor is the OData V4 API Fixed Asset - Master Data (API_FIXEDASSET); it is available since release SAP S/4HANA Cloud Public Edition 2502.  The SOAP APIs for asset master data are included in the communication scenario SAP_COM_0563.  The communication scenario is also deprecated and will also be deleted in a future release.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The previous SOAP APIs for asset master data are deprecated as of release SAP S/4HANA Cloud Public Edition 2608.  They will be deleted in a future release.  Their successor is the OData V4 API Fixed Asset - Master Data (API_FIXEDASSET); it is available since release SAP S/4HANA Cloud Public Edition 2502.  The SOAP APIs for asset master data are included in the communication scenario SAP_COM_0563.  The communication scenario is also deprecated and will also be deleted in a future release."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 33G,J62,BFH,1GB,1GF,33F."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Deprecation of SOAP APIs for Asset Master Data and Communication Scenario SAP_COM_0563: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Deprecated Functional Localization No localization Scope Item J62; 1GB; 1GF; BFH; 33F; 33G Technical Object Name Deprecated APIs: FAA_FIXED_ASSET_CREATE_MAIN_WEBI CO_FAA_MD_ESR_CREATE_MAIN_CONF_SPRX FAA_FIXED_ASSET_CREATE_SUB_WEBI CO_FAA_MD_ESR_CREATE_SUB_CONF_SPRX FAA_FIXED_ASSET_CHANGE_WEBI CO_FAA_MD_ESR_CHANGE_CONF_SPRX Deprecated communication scenario: SAP_COM_0563 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape.  For more information, see Overview of Software and Content Upgrade."
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Deprecation of SOAP APIs for Asset Master Data and Communication Scenario SAP_COM_0563, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Deprecation of SOAP APIs for Asset Master Data and Communication Scenario",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4024aa17bb854caaaf8eff4046497e69?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4101062728284303afa01710f292abc5?version=2608.00": {
      "title": "Manage Posting Periods  Cost Accounting Integrated with SAP Advanced Financial Closing",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4101062728284303afa01710f292abc5?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Manage Posting Periods – Cost Accounting Integrated with SAP Advanced Financial Closing | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:16:08.092Z",
      "summary": "The Manage Posting Periods - Cost Accounting app is integrated with SAP Advanced Financial Closing.  This integration allows you to automate posting period status changes for cost accounting as part of your financial closing process.  You can include the relevant tasks in the task lists for your organizational units.  When the tasks are processed, the system updates the posting period status in the Manage Posting Periods - Cost Accounting app accordingly.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The Manage Posting Periods - Cost Accounting app is integrated with SAP Advanced Financial Closing. This integration allows you to automate posting period status changes for cost accounting as part of your financial closing process. You can include the relevant tasks in the task lists for your organizational units. When the tasks are processed, the system updates the posting period status in the Manage Posting Periods - Cost Accounting app accordingly. The following tasks are available for this integration: Close Previous Posting Period - Cost Accounting Open Next Posting Period - Cost Accounting Open/Close Current Posting Period - Cost Accounting Open/Close Posting Periods - Cost Accounting (A flexible task allowing users to define parameters.)"
        },
        {
          "heading": "Implementation details from SAP",
          "text": "SAP Advanced Financial Closing may require additional entitlements and authorizations. Please consult your SAP account executive for more information."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J58. Use affected app/technical object F4684."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Manage Posting Periods  Cost Accounting Integrated with SAP Advanced Financial Closing: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J58 (Accounting and Financial Close) Technical Object Name App ID: F4684 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-GL-JE (Journal Entry Processing and Reporting Apps) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Manage Posting Periods  Cost Accounting Integrated with SAP Advanced Financial Closing, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Manage Posting Periods Cost Accounting Integrated with SAP Advanced Finan",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4101062728284303afa01710f292abc5?version=2608.00"
        },
        {
          "label": "Manage Posting Periods – Cost Accounting",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/044eb1694b564390a6479c62497b6bc1.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/42735de81ad44a18b8361649b159839c?version=2608.00": {
      "title": "Deprecation of Manage Cost Center Groups (F1024)",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/42735de81ad44a18b8361649b159839c?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Deprecation of Manage Cost Center Groups (F1024) | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:16:12.770Z",
      "summary": "As of SAP S/4HANA Cloud Public Edition 2602, the old app version of the Manage Cost Center Groups app is deprecated and will be removed in an upcoming release.  We strongly recommend that you switch to the successor app Manage Global Hierarchies as soon as possible.  For more information about app deprecation, see Deprecation Process for Apps.  The new app provides the following additional features: Validity periods, status handling and insights on unassigned objects Spreadsheet upload All hierarchy maintenance options on one screen Note In both involved apps, the New Experience Switch behavior is enabled.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "As of SAP S/4HANA Cloud Public Edition 2602, the old app version of the Manage Cost Center Groups app is deprecated and will be removed in an upcoming release. We strongly recommend that you switch to the successor app Manage Global Hierarchies as soon as possible. For more information about app deprecation, see Deprecation Process for Apps. The new app provides the following additional features: Validity periods, status handling and insights on unassigned objects Spreadsheet upload All hierarchy maintenance options on one screen Note In both involved apps, the New Experience Switch behavior is enabled. If business end users have authorizations for both the old and the new app, they can also switch between both app versions. For more information, see Switching to a New App Version."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Before you can use the new app, you need to have your existing cost center groups migrated by an administrator.  This is a one-time effort.  After the migration, you can continue using your existing hierarchies in the new app.  For more information on the migration process, see How to Migrate Cost Center Groups to Global Hierarchies.  Authorizations To enable users to access the new app, their business users need to have the following business catalog assigned: Manage Global Hierarchies (F2918_TRAN) Note Since the underlying IAM apps are delivered as inactive, the new experience switch is not displayed to users by default.  It only appears when you activate the underlying IAM apps and assign them to your users.  We highly recommend doing this to make users aware of the need to switch to the new app version."
        },
        {
          "heading": "Effects on existing data",
          "text": "The New Experience Switch automatically expands an information popover in the affected apps. If you have your own test automation (RPA bots, etc.) set up in your system, this behavior might have an impact on these tests. For details on how to resolve the impact on your test automates, see Tips for Test Automation."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J54. Use affected app/technical object F1024, F2918."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Deprecation of Manage Cost Center Groups (F1024): confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Deprecated Functional Localization No localization Scope Item J54 (Overhead Cost Accounting) Technical Object Name App ID (old app): F1024 App ID (new app): F2918 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CO-FIO-CCA-MD (Master Data) FI-FIO-GL-HIE (Hierarchy Applications in General Ledger) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Deprecation of Manage Cost Center Groups (F1024), including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Deprecation of Manage Cost Center Groups (F1024)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/42735de81ad44a18b8361649b159839c?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/42abb9cbaa8c4bedad33c8d39a3573f0?version=2608.00": {
      "title": "Flexible Item Category Determination: Custom Sales Order Types Supported",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/42abb9cbaa8c4bedad33c8d39a3573f0?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Flexible Item Category Determination: Custom Sales Order Types Supported | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:16:16.853Z",
      "summary": "With this release, if your",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this release, if your"
        },
        {
          "heading": "Implementation details from SAP",
          "text": "For information about how to implement flexible item category determination, see Enabling Flexible Item Category Determination. Authorizations To enable users to access the required"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "environment is based on SAP Central Business Configuration, you as a configuration expert can enable flexible item category determination in sales orders with custom sales order types. This allows automated determination of item categories when using custom sales order types. Previously, flexible item category determination was only available for the following sales documents: Sales quotations with document type AG / QT Sales orders with document type TA / OR Sales orders without charge with document type CBFD / CBFD. Now, if you create a custom sales order type from template XTA, you can also use flexible item category determination for sales orders created with this custom sales order type. For more information about custom sales order types, see Custom Sales Order Types."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BD9."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Flexible Item Category Determination: Custom Sales Order Types Supported: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item BD9 (Sell from Stock) Technical Object Name Not applicable Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component SD-SLS-FLX (Sales Flexibility) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Flexible Item Category Determination: Custom Sales Order Types Supported, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Flexible Item Category Determination: Custom Sales Order Types Supported",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/42abb9cbaa8c4bedad33c8d39a3573f0?version=2608.00"
        },
        {
          "label": "Custom Sales Order Types",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9f022837593e42efa9b33a63c9e1a211.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Enabling Flexible Item Category Determination",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/834bb9bb37ac44e68585375c18e26b72.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Flexible Item Category Determination",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/66327f62527a4a988c1976c23e8ba3c4.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/43bd8d8ab3864a44b690018470f90ed8?version=2608.00": {
      "title": "Official Document Numbering for Reversed Invoices in Financial Accounting",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/43bd8d8ab3864a44b690018470f90ed8?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Official Document Numbering for Reversed Invoices in Financial Accounting | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:16:21.442Z",
      "summary": "With this feature, maintaining Official Document Numbering (ODN) information for reversed invoices in Financial Accounting is now available. You can manually maintain ODNs for reversed customer and supplier invoices in FI if they were created with ODN type U - User Manual Input. You can do this by using the Manage Journal Entries app.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, maintaining Official Document Numbering (ODN) information for reversed invoices in Financial Accounting is now available. You can manually maintain ODNs for reversed customer and supplier invoices in FI if they were created with ODN type U - User Manual Input. You can do this by using the Manage Journal Entries app."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): J59,J60."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item J59 (Accounts Receivable) J60 (Accounts Payable) Technical Object Name Not applicable Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-LOC-ODN-FIN (Integration with Financials) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Official Document Numbering for Reversed Invoices in Financial Accounting",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/43bd8d8ab3864a44b690018470f90ed8?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/44254096ec014cac9bdf228b14c35fcd?version=2608.00": {
      "title": "Configure Validation Messages for UoM Decimal Check in a Purchase Requisition",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/44254096ec014cac9bdf228b14c35fcd?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Configure Validation Messages for UoM Decimal Check in a Purchase Requisition | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:16:25.966Z",
      "summary": "With this release, as a purchaser and employee, you can configure a warning message, or an error message or no message to validate the decimal places for unit of measure (UoM) of a purchase requisition, for instance EA or PC unit, in the apps Manage Purchase Requisitions - Professional, Create Purchase Requisition - Advanced and My Purchase Requisitions.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this release, as a purchaser and employee, you can configure a warning message, or an error message or no message to validate the decimal places for unit of measure (UoM) of a purchase requisition, for instance EA or PC unit, in the apps Manage Purchase Requisitions - Professional, Create Purchase Requisition - Advanced and My Purchase Requisitions."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "To configure the message type, you can use the configuration activity Define Attributes of System Messages (SIMG_CFMENUOLMEOME0). For more information on configuration activities, see Configuration Environment of SAP S/4HANA Cloud Public Edition. You can use the message class ME and message number 678 for configuration."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Review only if this exact feature is used by CFA or sits in a used scope/process. Scope item(s): 18J,O8J. Use affected app/technical object F2229, ME51N, F1639A."
        },
        {
          "heading": "How to test",
          "text": "Use SAP's article details to identify the specific changed field, app action, report output, configuration setting, or process behaviour; then run one realistic walkthrough with the owning business role."
        },
        {
          "heading": "Expected result",
          "text": "The changed behaviour appears exactly where SAP describes it and does not break the current CFA user flow. Record relevant, not relevant, or future adoption."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item 18J (Requisitioning), O8J (Requisitioning) Technical Object Name App ID: F2229 App ID: ME51N App ID: F1639A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-PUR-REQ (Purchase Requisitions) MM-FIO-PUR-REQ-SSP (Self-Service Procurement) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current behaviour for the affected app/process before upgrade if the area is used.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 changed behaviour and whether CFA needs release testing, future adoption, or no action.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Configure Validation Messages for UoM Decimal Check in a Purchase Requisi",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/44254096ec014cac9bdf228b14c35fcd?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/449a908acd0740c292ede506b8a998ed?version=2608.00": {
      "title": "Planned Deprecation of Analysis Path Framework (APF) Apps",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/449a908acd0740c292ede506b8a998ed?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Planned Deprecation of Analysis Path Framework (APF) Apps | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:16:29.398Z",
      "summary": "Analysis Path Framework (APF) apps are planned for deprecation in a future release.  These apps are succeeded by existing Smart Business Key Performance Indicators (KPI) apps.  To ensure continuity of your business processes, we strongly recommend transitioning to the successor apps at the earliest opportunity.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "Analysis Path Framework (APF) apps are planned for deprecation in a future release.  These apps are succeeded by existing Smart Business Key Performance Indicators (KPI) apps.  To ensure continuity of your business processes, we strongly recommend transitioning to the successor apps at the earliest opportunity."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access the successor apps, their business users need to have the following IAM apps assigned: Days Payable Outstanding (F1740_TRAN) Days Sales Outstanding (F1741_TRAN) Days Payable Outstanding - Indirect Method (F2895_TRAN)"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J59,J60. Use affected app/technical object F2688, F1740, F2687, F1741, F2896, F2895."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Planned Deprecation of Analysis Path Framework (APF) Apps: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J59 (Accounts Receivable) J60 (Accounts Payable) Technical Object Name App ID: F2688 F1740 F2687 F1741 F2896 F2895 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-AP (Fiori UI for Accounts Payable) FI-FIO-AR (Fiori UI for Accounts Receivable) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Planned Deprecation of Analysis Path Framework (APF) Apps, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Planned Deprecation of Analysis Path Framework (APF) Apps",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/449a908acd0740c292ede506b8a998ed?version=2608.00"
        },
        {
          "label": "Days Payable Outstanding – Indirect Method",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6671168c9e5b49c6ab1f3ae30d815333.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Days Sales Outstanding",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a9453358fde89244e10000000a4450e5.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Days Sales Outstanding - Detailed Analysis",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a55b146911d841aaaa3b7b71d3c01eb5.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Days Payable Outstanding",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/74888854c46ee75ee10000000a44176d.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Days Payable Outstanding - Detailed Analysis",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a0e318f5ae484036a7374f72cb1987bd.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Days Payable Outstanding – Indirect Method - Detailed Analysis",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d10771495963485ca72d7411ff55772c.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/48fa7fc085e14b6a876fd64b0de9a52f?version=2608.00": {
      "title": "Attachments in Supplier Confirmations",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/48fa7fc085e14b6a876fd64b0de9a52f?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Attachments in Supplier Confirmations | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:16:32.929Z",
      "summary": "With this release, Attachments are now supported in the Manage Supplier Confirmations app.  You can now upload, download or delete attachments for supplier confirmations from the Attachments tab in the app.  Additionally, you can also: View total number of attachments added to a supplier confirmation.  View details of the user that added the attachments.  View details of the attachment like name, document type, status, date of creation and date of change.  URLs can also be added or deleted.  Note The Attachment service offers the ability to add URLs as attachments.  In order to meet security requirements, the hostname in the entered URL is validated against a URL allowlist.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this release, Attachments are now supported in the Manage Supplier Confirmations app.  You can now upload, download or delete attachments for supplier confirmations from the Attachments tab in the app.  Additionally, you can also: View total number of attachments added to a supplier confirmation.  View details of the user that added the attachments.  View details of the attachment like name, document type, status, date of creation and date of change.  URLs can also be added or deleted.  Note The Attachment service offers the ability to add URLs as attachments.  In order to meet security requirements, the hostname in the entered URL is validated against a URL allowlist.  Trusted hosts can be maintained under the Trusted Network Zones list in the Maintain Protection Allowlist app."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. In the Manage Supplier Confirmations app, the Attachments tab is now available. You can use the Upload button to add attachments to a supplier confirmation. You can also download existing attachments, or delete them."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J45. Use affected app/technical object F5039."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Attachments in Supplier Confirmations: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J45 (J45) Technical Object Name App ID: F5039 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. Yes Application Component MM-PUR-CNF (Supplier Confirmations) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Attachments in Supplier Confirmations, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Attachments in Supplier Confirmations",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/48fa7fc085e14b6a876fd64b0de9a52f?version=2608.00"
        },
        {
          "label": "Maintain Protection Allowlists",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/81aed02afbdb41379fe0eb4b23f7756a.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Manage Supplier Confirmations",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9900dd93aec14047b483dc1a52561bf5.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "The Attachments tab in the Manage Supplier Confirmations app with the option to upload, download or delete attachments.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loiob7244b7dbbe243288c5344e81f36ccb1_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4c8919e7ef1142259af59b9ed1e2dce8?version=2608.00": {
      "title": "Negative Posting Check for Posting APIs",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4c8919e7ef1142259af59b9ed1e2dce8?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Negative Posting Check for Posting APIs | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:16:39.182Z",
      "summary": "This feature enables you to check your input of negative postings in API payloads and block postings if negative postings are not configured.  It's optional to enable the check until SAP S/4HANA Cloud Public Edition 2702.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "This feature enables you to check your input of negative postings in API payloads and block postings if negative postings are not configured.  It's optional to enable the check until SAP S/4HANA Cloud Public Edition 2702.  The check applies to the following APIs: Journal Entry - Post (Synchronous) (JournalEntryCreateRequestConfirmation_In) Journal Entry - Post (Asynchronous) (JournalEntryBulkCreationRequest_In) Journal Entry by Ledger - Post (Asynchronous) (JournalEntryBulkLedgerCreationRequest_In) When you create a negative posting in a payload, enter 'H' (Credit) for DebitCreditCode if the item amount (AmountInTransactionCurrency) is positive, and enter 'S' (Debit) for DebitCreditCode if the item amount (AmountInTransactionCurrency) is negative."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "This feature of system check is automatically available in your system. You can deactivate the feature Enable negative posting check for Posting APIs (FI_POSTING_API_NG) in the"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "activities Company Code General Ledger View (ID: 106039) and Define Document Types (ID: 101522) in your configuration environment."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J58."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Negative Posting Check for Posting APIs: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence. Validate the named API/object JournalEntryCreateRequestConfirmation_In, JournalEntryBulkCreationRequest_In, JournalEntryBulkLedgerCreationRequest_In, AmountInTransactionCurrency with one realistic payload or consumer."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J58 (Accounting and Financial Close) Technical Object Name API JournalEntryBulkCreationRequest_In JournalEntryCreateRequestConfirmation_In JournalEntryBulkLedgerCreationRequest_In Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component AC_INT (Accounting Interface) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        },
        {
          "heading": "Configuration / SSCUI to check",
          "text": "SAP Help points to company code and document type configuration for negative postings, including Company Code General Ledger View (ID 106039) and Define Document Types (ID 101522). SAP Note 3157729 also shows reversal reasons in Define Reasons for Reversal, SSCUI ID 101039, where the negative posting indicator can be set for reversal reasons."
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Negative Posting Check for Posting APIs, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Negative Posting Check for Posting APIs",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4c8919e7ef1142259af59b9ed1e2dce8?version=2608.00"
        },
        {
          "label": "SAP KBA 3641505 - Negative Posting Check for Posting APIs",
          "url": "https://userapps.support.sap.com/sap/support/knowledge/en/3641505"
        },
        {
          "label": "SAP Note 3157729 - General Journal Entries negative postings",
          "url": "https://me.sap.com/notes/3157729"
        },
        {
          "label": "SAP Help - Negative Postings",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/0fa84c9d9c634132b7c4abb9ffdd8f06/8a5da6952ae44ea794d87d244c82fcb6.html"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4f839da32c7a45968be2338b2ab94360?version=2608.00": {
      "title": "Trade Compliance Checks in Credit Memo Requests and Debit Memo Requests",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4f839da32c7a45968be2338b2ab94360?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Trade Compliance Checks in Credit Memo Requests and Debit Memo Requests | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:16:42.306Z",
      "summary": "With this feature, you can view results of trade compliance checks from SAP Global Trade Services (SAP GTS) directly in credit memo requests and debit memo requests using the Manage Credit Memo Requests - Version 2 and Manage Debit Memo Requests - Version 2 apps.  In both apps, the new Status and Blocks tab at the document header and item levels displays SAP GTS compliance check statuses, including legal control status, embargo status, and screening status.  You can also add the status fields to the filter bar and the table list in both apps.  Examples of the User Interface Note The screenshots are examples to make the described change visible.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, you can view results of trade compliance checks from SAP Global Trade Services (SAP GTS) directly in credit memo requests and debit memo requests using the Manage Credit Memo Requests - Version 2 and Manage Debit Memo Requests - Version 2 apps. In both apps, the new Status and Blocks tab at the document header and item levels displays SAP GTS compliance check statuses, including legal control status, embargo status, and screening status. You can also add the status fields to the filter bar and the table list in both apps. Examples of the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. The following example shows the location of the compliance check statuses in the document header:"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1EZ,1F1,BDQ,BKL. Use affected app/technical object F1989A, F1988A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Trade Compliance Checks in Credit Memo Requests and Debit Memo Requests: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item 1EZ (Credit Memo Processing) BKL (Invoice Correction Process with Credit Memo) 1F1 (Debit Memo Processing) BDQ (Invoice Correction Process with Debit Memo) Technical Object Name App ID: F1989A F1988A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component SD-SLS-CMR (Credit Memo Request and Debit Memo Request) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Trade Compliance Checks in Credit Memo Requests and Debit Memo Requests, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Trade Compliance Checks in Credit Memo Requests and Debit Memo Requests",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4f839da32c7a45968be2338b2ab94360?version=2608.00"
        },
        {
          "label": "Integration of SAP Global Trade Services with Sales Documents for Compliance Check",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/705a7418255b4cc8b25dbe9e7122af12.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Manage Credit Memo Requests - Version 2",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/eb3602d7234b43218377ff3f1e3b9825.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Manage Debit Memo Requests - Version 2",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1f6bf12738db47d4bdf83e30f522b569.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio12dec839332e457fbe974dc7da8d817a_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4ffaca17c57e4ed5908fd809e4c829d8?version=2608.00": {
      "title": "Configure Matching and Duplicate Check for Products",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4ffaca17c57e4ed5908fd809e4c829d8?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Configure Matching and Duplicate Check for Products | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:16:45.729Z",
      "summary": "You can configure the matching step and the duplicate check for products with the",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "You can configure the matching step and the duplicate check for products with the"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "Activity Configure Matching and Duplicate Check."
        },
        {
          "heading": "Effects on existing data",
          "text": "This"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1RM."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Configure Matching and Duplicate Check for Products: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item 1RM (Mass Load and Mass Maintenance for Product) Technical Object Name Configuration Activity ID: 100274 (Configure Matching and Duplicate Check) Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CA-MDG (Master Data Governance) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        },
        {
          "heading": "Configuration / SSCUI to check",
          "text": "ID: 100274 | Configuration Activity Configure Matching and Duplicate Check | Configuration Activity ID: 100274 (Configure Matching and Duplicate Check) Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Configure Matching and Duplicate Check for Products, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Configure Matching and Duplicate Check for Products",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4ffaca17c57e4ed5908fd809e4c829d8?version=2608.00"
        },
        {
          "label": "Configure Matching and Duplicate Check",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e87d9d438d1f4b88983c3d4d331e8c43.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/532c8f2f03f3408f930b75bbba0eb6f7?version=2608.00": {
      "title": "View Breakdown for Activity-Based Actual Cost Rates (AACR) in Display Cost Rates",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/532c8f2f03f3408f930b75bbba0eb6f7?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "View Breakdown for Activity-Based Actual Cost Rates (AACR) in Display Cost Rates | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:16:48.952Z",
      "summary": "You can now view the detailed breakdown for activity-based actual cost rates calculated via KSII in the Display Cost Rates app. The breakdown details are available on the cost rate detail page and include a comparison by period.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "You can now view the detailed breakdown for activity-based actual cost rates calculated via KSII in the Display Cost Rates app. The breakdown details are available on the cost rate detail page and include a comparison by period."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): J54. Use affected app/technical object F5150."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J54 (Overhead Cost Accounting) Technical Object Name App ID: F5150 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CO-FIO-CCA-IS (Reporting) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - View Breakdown for Activity-Based Actual Cost Rates (AACR) in Display Cos",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/532c8f2f03f3408f930b75bbba0eb6f7?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/590208328f16410abefbced79aaf4e4f?version=2608.00": {
      "title": "Archiving for Tax Reallocation",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/590208328f16410abefbced79aaf4e4f?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Archiving for Tax Reallocation | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:16:52.977Z",
      "summary": "You can use the archiving object TAX_REALLO to archive or destroy tax reallocation of periodic services.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "You can use the archiving object TAX_REALLO to archive or destroy tax reallocation of periodic services."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): J58."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization Localized for Japan Scope Item J58 (Accounting and Financial Close) Technical Object Name See Above Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-LOC-FI-JP (Financials Japan) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Archiving for Tax Reallocation",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/590208328f16410abefbced79aaf4e4f?version=2608.00"
        },
        {
          "label": "Archiving Tax Reallocation of Periodic Service Using TAX_REALLO",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b58690afa7e14c7b97102363a9ad7edc.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/5fbcf6f2de7d4a8c898659e30dd47b9e?version=2608.00": {
      "title": "Successor for the \"Post Transfer\" Apps",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/5fbcf6f2de7d4a8c898659e30dd47b9e?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Successor for the \"Post Transfer\" Apps | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:16:58.215Z",
      "summary": "With the app Post Transfer - Within Company Code (ABUML), you can post asset transfers within the same company code.  With the app Post Transfer - Across Company Codes Within the Same Country (ABT1L), you can post asset transfers across different company codes, provided that both company codes are in the same country/region.  As of SAP S/4HANA Cloud Public Edition 2608, a successor version of these apps is available: the app Post Asset Transfer (New Version) (F9302).  This new app version will replace the old versions in a future release.  We recommend that you switch to the successor app as soon as possible.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With the app Post Transfer - Within Company Code (ABUML), you can post asset transfers within the same company code.  With the app Post Transfer - Across Company Codes Within the Same Country (ABT1L), you can post asset transfers across different company codes, provided that both company codes are in the same country/region.  As of SAP S/4HANA Cloud Public Edition 2608, a successor version of these apps is available: the app Post Asset Transfer (New Version) (F9302).  This new app version will replace the old versions in a future release.  We recommend that you switch to the successor app as soon as possible.  For new customers who are using Asset Accounting for the first time in release SAP S/4HANA Cloud Public Edition 2608 or higher, we recommend that you use only the new app version from the outset."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access the new app version, their business users need to have the following IAM app assigned: Post Asset Transfer (New Version) (F9302_TRAN).  Note Since the underlying IAM apps are delivered as inactive, the New Experience Switch is not displayed to users by default.  It only appears when you activate the underlying IAM apps and assign them to your users.  We highly recommend doing this to make users aware of the need to switch to the new app version.  For more information on how to activate or deactivate IAM apps, see How to Activate or Deactivate IAM Apps of Type App Authorization Variant."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available."
        },
        {
          "heading": "Effects on existing data",
          "text": "The enablement of the New Experience Switch entails an automatic expansion of an information popover in the affected apps. If you have your own test automation (RPA bots, etc.) set up in your system, this behavior might have an impact on these tests. For details on how to resolve the impact on your test automates, see Tips for Test Automation."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 33G,J62,BFH,1GB,1GF,33F. Use affected app/technical object F9302."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Successor for the \"Post Transfer\" Apps: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item J62; 1GB; 1GF; BFH; 33F; 33G Technical Object Name App ID (predecessors): ABUML and ABT1L App ID (successor): F9302 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. Yes Application Component Asset Accounting (FI-AA) Valid as Of SAP S/4HANA Cloud Public Edition 2608 Additional Information For more information about the new app version, see the product assistance for Asset Accounting under Post Asset Transfer."
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Successor for the \"Post Transfer\" Apps, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Successor for the \"Post Transfer\" Apps",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/5fbcf6f2de7d4a8c898659e30dd47b9e?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "\"Post Asset Transfer\" App, Transfer Within Company Code: Selection Screen",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio100f685612f74f8aae40c0e00e7f82ab_LowRes.png"
        },
        {
          "label": "\"Post Asset Transfer\" App, Transfer Within Company Code: Simulation of the Posting",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loioe6ab5443104f40f1bac478e479be9fda_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/629d5271e9d543a095838f259dde3c0f?version=2608.00": {
      "title": "Change House Bank Accounts and Reference Keys for Customer and Supplier Line Items",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/629d5271e9d543a095838f259dde3c0f?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Change House Bank Accounts and Reference Keys for Customer and Supplier Line Items | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:17:03.712Z",
      "summary": "This feature enables you to change house bank accounts for customer and supplier line items in the Manage Customer Line Items and Manage Supplier Line Items apps.  Review your custom logic implementations for these apps now to prepare for the general rollout of this feature in an upcoming release.  In the Manage Customer Line Items (F0711) and the Manage Supplier Line Items (F0712) apps, you can now edit house bank accounts for one or more line items from the list view of the apps.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "This feature enables you to change house bank accounts for customer and supplier line items in the Manage Customer Line Items and Manage Supplier Line Items apps.  Review your custom logic implementations for these apps now to prepare for the general rollout of this feature in an upcoming release.  In the Manage Customer Line Items (F0711) and the Manage Supplier Line Items (F0712) apps, you can now edit house bank accounts for one or more line items from the list view of the apps.  The following new fields are available for editing: House Bank / Account Reference Key 1 Reference Key 2 Reference Key 3 Examples of the User Interface Note The screenshots are examples to make the described change visible."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "This feature will not automatically be available in your system but requires that you activate the feature Change House Bank Accounts for Line Items (FT_F0711_F0712_EDIT_HKTID) in the"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. You can see the new fields in the apps when you select one or more line items and choose Edit Line Items:"
        },
        {
          "heading": "Effects on existing data",
          "text": "After activating this feature, custom implementations of the extension point FIN_ACDOC_SUBSTITUTION won't be called anymore when editing line items in the Manage Customer Line Items (F0711) and Manage Supplier Line Items (F0712) apps."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 4Q2,6IL,7VW,1WQ,1S0,7MG,J59,42K,J60,1JT,19M,1J5. Use affected app/technical object F0711, F0712."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Change House Bank Accounts and Reference Keys for Customer and Supplier Line Items: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item 6IL (Account Reconciliation – SAP Solution Extensions by BlackLine) J59 (Accounts Receivable) J60 (Accounts Payable) 1WQ (Bill of Exchange) 7VW (Bill of Exchange for Configuration Localization Tool) 1S0 (Customer Payments) 19M (Direct Debit) 1J5 (Invoice, Taxes and Complementary Postings) 1JT (Lockbox) Technical Object Name App IDs: F0711 F0712 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-AR-IS (Reporting Apps) FI-FIO-AP-IS (Reporting Apps) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Change House Bank Accounts and Reference Keys for Customer and Supplier Line Items, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Change House Bank Accounts and Reference Keys for Customer and Supplier L",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/629d5271e9d543a095838f259dde3c0f?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "Location of the new fields in the Edit Line Items dialog box.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio7ca9e2f3da674475993fcc808c9cebda_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/67a488fcde2e4d868d4117710f66abba?version=2608.00": {
      "title": "Monitor Projects - Cost Prediction (Deprecated)",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/67a488fcde2e4d868d4117710f66abba?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:17:07.353Z",
      "summary": "With this release, the Monitor Projects - Cost Prediction (F3318) app, that predicts the cost of enterprise projects has been deprecated and will be deleted in an upcoming release. The associated predictive scenario PREDICT_PROJECT_COST (Predictive scenario for project cost prediction) in the Intelligent Scenario Management (F4470) app has also been deprecated. Changes to the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this release, the Monitor Projects - Cost Prediction (F3318) app, that predicts the cost of enterprise projects has been deprecated and will be deleted in an upcoming release. The associated predictive scenario PREDICT_PROJECT_COST (Predictive scenario for project cost prediction) in the Intelligent Scenario Management (F4470) app has also been deprecated. Changes to the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. The navigation popups from the Monitor Projects app to the Cost Prediction app have been enabled with warning messages to indicate that the feature will be removed in an upcoming release."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1NT. Use affected app/technical object F3318, F4470."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Monitor Projects - Cost Prediction (Deprecated): confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Deprecated Functional Localization No localization Scope Item 1NT (Project Control – Finance) Technical Object Name App ID: F3318 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component PPM-SCL-REP (Project Reporting (Public Cloud)) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Monitor Projects - Cost Prediction (Deprecated), including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Monitor Projects - Cost Prediction (Deprecated)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/67a488fcde2e4d868d4117710f66abba?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/698b5ddedc9a410f91f1a5bd0e6af453?version=2608.00": {
      "title": "Schedule Jobs to Reset Cleared Items",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/698b5ddedc9a410f91f1a5bd0e6af453?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Schedule Jobs to Reset Cleared Items | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:17:29.980Z",
      "summary": "With the new Schedule Jobs to Reset Cleared Items (F9296) app, you can schedule jobs for resetting cleared items and reversing clearing entries. When dealing with large volumes of data in the Reset Cleared Items (F2223) app, that is, over 1,000 items, the system automatically schedules a job in the F9296 app and notifies you upon completion, ensuring optimal system performance and user experience. The new app contains the Reset Cleared Items job template. For more information on how to use the job template, see Schedule Jobs to Reset Cleared Items.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With the new Schedule Jobs to Reset Cleared Items (F9296) app, you can schedule jobs for resetting cleared items and reversing clearing entries. When dealing with large volumes of data in the Reset Cleared Items (F2223) app, that is, over 1,000 items, the system automatically schedules a job in the F9296 app and notifies you upon completion, ensuring optimal system performance and user experience. The new app contains the Reset Cleared Items job template. For more information on how to use the job template, see Schedule Jobs to Reset Cleared Items."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access this app, their business users need to have the Schedule Jobs to Reset Cleared Items (F9296_TRAN) IAM app assigned."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J59,1GA,J60. Use affected app/technical object F9296, F2223."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Schedule Jobs to Reset Cleared Items: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item J59 (Accounts Receivable) J60 (Accounts Payable) 1GA (Accounting and Financial Close – Group Ledger IFRS) Technical Object Name App ID: F9296 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-AR-TRA (Transaction Apps) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Schedule Jobs to Reset Cleared Items, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Schedule Jobs to Reset Cleared Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/698b5ddedc9a410f91f1a5bd0e6af453?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/69de0db5cda14566b732bf5f12277422?version=2608.00": {
      "title": "Deprecation of Manage Bank Messages App (F4385)",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/69de0db5cda14566b732bf5f12277422?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Deprecation of Manage Bank Messages App (F4385) | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:17:33.577Z",
      "summary": "As of SAP S/4HANA Cloud Public Edition 2608, there is a successor app for the old version of the Manage Bank Messages (F4385) app: Manage Bank Messages (F4385A).  The old app version Manage Bank Messages (F4385) is deprecated and will be removed in an upcoming release.  For more information about the app deprecation, see Deprecation Process for Apps.  We strongly recommend that you switch to the new successor app Manage Bank Messages (F4385A) as soon as possible.  The new app provides the following features: Detailed logs and administrative data for every message Advanced filtering mechanisms Note In both involved apps, the New Experience Switch behavior is enabled.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "As of SAP S/4HANA Cloud Public Edition 2608, there is a successor app for the old version of the Manage Bank Messages (F4385) app: Manage Bank Messages (F4385A).  The old app version Manage Bank Messages (F4385) is deprecated and will be removed in an upcoming release.  For more information about the app deprecation, see Deprecation Process for Apps.  We strongly recommend that you switch to the new successor app Manage Bank Messages (F4385A) as soon as possible.  The new app provides the following features: Detailed logs and administrative data for every message Advanced filtering mechanisms Note In both involved apps, the New Experience Switch behavior is enabled.  If business end users have authorizations for both the old and the new app, they can also switch between both app versions."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access this app, their business users need to have the business role template SAP_BR_BANK_INT_SPECIALIST assigned."
        },
        {
          "heading": "Effects on existing data",
          "text": "The enablement of the New Experience Switch entails an automatic expansion of an information popover in the affected apps. If you have your own test automation (RPA bots, etc.) set up in your system, this behavior might have an impact on these tests. For details on how to resolve the impact on your test automates, see Tips for Test Automation."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 16R. Use affected app/technical object F4385, F4385A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Deprecation of Manage Bank Messages App (F4385): confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Deprecated Functional Localization No localization Scope Item 16R Technical Object Name App ID: F4385 (predecessor) F4385A (successor) Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component LOD-FSN-AGT (connector for SAP Multi-Bank Connectivity) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Deprecation of Manage Bank Messages App (F4385), including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Deprecation of Manage Bank Messages App (F4385)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/69de0db5cda14566b732bf5f12277422?version=2608.00"
        },
        {
          "label": "Deprecation Process for Apps",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/53e36b5493804bcdb3f6f14de8b487dd/5efa551420f24d738131134c8101168a.html"
        },
        {
          "label": "Tips for Test Automation",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1c2371d12a41430e8cdee1ecd94f0eda.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Manage Bank Messages",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/df2999dc360a496aa9ba30ad0496cc04.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Manage Bank Messages",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/70ef8f74353949cd84b499c4a9680d52.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6c08ce053af34b1288d82752551869d2?version=2608.00": {
      "title": "Successor App for Manage Statistical Key Figures",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6c08ce053af34b1288d82752551869d2?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Successor App for Manage Statistical Key Figures | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:17:37.615Z",
      "summary": "As of SAP S/4HANA Cloud Public Edition 2608, a successor version of this app is available with the Manage Statistical Key Figures (New Version) (F1603B) app.  This new app version will replace the old Manage Statistical Key Figures (F1603A) app in the future.  We recommend that you switch to the successor app Manage Statistical Key Figures (New Version) (F1603B) as soon as possible.  Note In both involved apps, the New Experience Switch behavior is enabled.  If business end users have authorizations for both the old and the new app, they can also switch between both app versions.  For more information, see Switching to a New App Version.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "As of SAP S/4HANA Cloud Public Edition 2608, a successor version of this app is available with the Manage Statistical Key Figures (New Version) (F1603B) app.  This new app version will replace the old Manage Statistical Key Figures (F1603A) app in the future.  We recommend that you switch to the successor app Manage Statistical Key Figures (New Version) (F1603B) as soon as possible.  Note In both involved apps, the New Experience Switch behavior is enabled.  If business end users have authorizations for both the old and the new app, they can also switch between both app versions.  For more information, see Switching to a New App Version.  The Manage Statistical Key Figures (New Version) (F1603B) app provides the following additional features: Track changes to statistical key figures with the Last Changed By and Last Changed On fields."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access the new version of this app, their business users need to have the following IAM app assigned: Manage Statistical Key Figures (New Version) (F1603B_TRAN)."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. The new app has a user interface that is similar to the old version. The main app page: The detail page of a statistical key figure:"
        },
        {
          "heading": "Effects on existing data",
          "text": "The enablement of the New Experience Switch entails an automatic expansion of an information popover in the affected apps.  If you have your own test automation (RPA bots, etc. ) set up in your system, this behavior might have an impact on these tests.  For details on how to resolve the impact on your test automates, see Tips for Test Automation.  Note Since the underlying IAM apps are delivered as inactive, the New Experience Switch is not displayed to users by default.  It only appears when you activate the underlying IAM apps and assign them to your users."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J54. Use affected app/technical object F1603B, F1603A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Successor App for Manage Statistical Key Figures: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item J54 (Overhead Cost Accounting) Technical Object Name F1603B Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CO-FIO-CCA-MD (Cost Center Accounting – Master Data) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Successor App for Manage Statistical Key Figures, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Successor App for Manage Statistical Key Figures",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6c08ce053af34b1288d82752551869d2?version=2608.00"
        },
        {
          "label": "Switching to a New App Version",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/3e8bbaec0b544b52bc4d1c9db2b1d1db.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Tips for Test Automation",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1c2371d12a41430e8cdee1ecd94f0eda.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "How to Activate or Deactivate IAM Apps of Type App Authorization Variant",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/61f5a1ac89e04b68aaf755c883f1bbac.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Manage Statistical Key Figures (New Version)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/8c104eed3e914e0994b14d774f57cbf7.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "The main app page of the Manage Statistical Key Figures (F1603B) app that shows a list of statistical key figures.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio84116c850cfe4fa291b3b7197c5813a2_LowRes.png"
        },
        {
          "label": "The statistical key figure detail page that shows its properties, such as the statistical key figure name, measurement unit, category, translations to other languages, and so on.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio39a62bc0ea2243dcbf07044d48501812_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6dfa881fbd974d2cbc97612efc340ac4?version=2608.00": {
      "title": "Merge Multiple Supplier Documents into Single PDF",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6dfa881fbd974d2cbc97612efc340ac4?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Merge Multiple Supplier Documents into Single PDF | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:17:42.363Z",
      "summary": "PDF consolidation option for supplier documents for the TH WHT 50BIS report allows combining up to 300-400 pages into one file instead of viewing separate PDFs. This streamlines document review by reducing the number of files to open when processing multiple documents for the same supplier.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "PDF consolidation option for supplier documents for the TH WHT 50BIS report allows combining up to 300-400 pages into one file instead of viewing separate PDFs. This streamlines document review by reducing the number of files to open when processing multiple documents for the same supplier."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): 1J2. Use affected app/technical object F1515."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization Localized for Thailand Scope Item 1J2 Technical Object Name App ID: F1515 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component F1-AP-AP-Q1 Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Merge Multiple Supplier Documents into Single PDF",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6dfa881fbd974d2cbc97612efc340ac4?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6e4e10769611474f9e27b8c1c31723bf?version=2608.00": {
      "title": "Configure Payment Plan Authorizations by Company Codes",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6e4e10769611474f9e27b8c1c31723bf?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Configure Payment Plan Authorizations by Company Codes | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:17:47.975Z",
      "summary": "This feature enables you to assign separate authorizations to users for managing payment plans in the Manage Payment Plans app (ID: F4806). You can control which actions users can perform on payment plans for specific company codes. The following are the supported actions: Display Create Edit Activate Deactivate Delete",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "This feature enables you to assign separate authorizations to users for managing payment plans in the Manage Payment Plans app (ID: F4806). You can control which actions users can perform on payment plans for specific company codes. The following are the supported actions: Display Create Edit Activate Deactivate Delete"
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access this app, their business roles need to have the following IAM app assigned: Manage Payment Plans (F4806_TRAN).  To assign different authorization to different users, maintain additional restrictions for the IAM app in the Maintain Business Roles app (ID: F1492).  Within the assigned restriction type Company Code/Payment, define the following settings: Access categories Restriction field values for Company Code and Automatic Payment Type."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J60. Use affected app/technical object F4806, F1492."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Configure Payment Plan Authorizations by Company Codes: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J60 (Accounts Payable) Technical Object Name App ID: F4806 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-AP-PAY (Payment Apps) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Configure Payment Plan Authorizations by Company Codes, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Configure Payment Plan Authorizations by Company Codes",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6e4e10769611474f9e27b8c1c31723bf?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6e7f2d61cfca49be90cd9e4dce4d06c8?version=2608.00": {
      "title": "Harmonized Document Management (HDM) for Purchase Orders",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6e7f2d61cfca49be90cd9e4dce4d06c8?version=2608.00",
      "sourceStatus": "curated",
      "sourceTitle": "Harmonized Document Management (HDM) for Purchase Orders | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:17:51.547Z",
      "summary": "SAP's 2608 RASD row says Manage Purchase Orders now supports Harmonized Document Management (HDM) for purchase order item attachments. SAP Help for Manage Purchase Orders confirms that purchase orders support header and item attachments, that HDM can be activated for the PURCHASEORDER attachment object, and that item-level DMS attachments are available.",
      "sections": [
        {
          "heading": "What changed",
          "text": "The change is about item-level attachment handling in Manage Purchase Orders. Instead of treating this as a full J45 procurement retest, focus on whether users add, display, copy, and communicate purchase-order item attachments through the HDM/DMS attachment service."
        },
        {
          "heading": "Business relevance",
          "text": "Relevant if CFA buyers or procurement teams attach supporting documents at purchase-order item level, convert purchase requisitions into purchase orders with item attachments, or send attachment-relevant PO output to suppliers. If attachments are only stored outside SAP, this is likely future adoption rather than release-blocking testing."
        },
        {
          "heading": "Configuration / SSCUI",
          "text": "SAP Help for Manage Purchase Orders states that a configuration expert activates HDM for attachment object types using SSCUI ID 105346, Activate HDM for Attachment Object Type. For purchase orders, review the PURCHASEORDER object. Existing GOS attachments may remain visible while new GOS creation can be restricted when HDM is active."
        },
        {
          "heading": "How to test",
          "text": "Open Manage Purchase Orders, choose a PO with item lines, add an item-level attachment using the available HDM/DMS attachment area, save, reopen, and confirm the attachment remains available at the item. If PO output uses attachments, run one output scenario and confirm the expected attachment behaviour using a real supplier-facing document type."
        },
        {
          "heading": "Expected result",
          "text": "Users can manage purchase-order item attachments through the HDM-enabled attachment service without losing access to relevant existing attachments. Only test the attachment flow if item-level PO attachments are used by the customer."
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade",
          "title": "Purchase order item without HDM item attachment behaviour",
          "text": "Capture the PO item area in Manage Purchase Orders before the upgrade. The expected before evidence is the existing attachment behaviour used by CFA today, including whether item attachments are absent, GOS-only, or not part of the process.",
          "evidence": "Capture app, PO number, item number, attachment area, and whether the attachment is header-level or item-level."
        },
        {
          "label": "After upgrade",
          "title": "Purchase order item using HDM/DMS attachment service",
          "text": "After 2608, capture the same PO item flow with an item-level attachment added, saved, reopened, and visible through the HDM/DMS attachment area.",
          "evidence": "Capture PO item number, document type if visible, saved attachment, and reopened display result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Harmonized Document Management (HDM) for Purchase Orders",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6e7f2d61cfca49be90cd9e4dce4d06c8?version=2608.00"
        },
        {
          "label": "SAP Help - Manage Purchase Orders",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/0e602d466b99490187fcbb30d1dc897c/38cbf557c328be12e10000000a4450e5.html"
        },
        {
          "label": "SAP Learning video - PO attachments in output",
          "url": "https://learning.sap.com/videos/how-to-include-attachments-from-purchase-order-in-purchase-order-output-sap-s-4hana-cloud-sourcing-and-procurement"
        },
        {
          "label": "Harmonized Document Management (HDM)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/bc275e43f1b043cc8f97710d5de64e97.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/73ef7e9884e64a26a5ff5c6195897013?version=2608.00": {
      "title": "Configure Matching and Duplicate Check for Products",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/73ef7e9884e64a26a5ff5c6195897013?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Configure Matching and Duplicate Check for Products | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:17:56.608Z",
      "summary": "You can configure the matching step and the duplicate check for products with the",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "You can configure the matching step and the duplicate check for products with the"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "Activity Configure Matching and Duplicate Check."
        },
        {
          "heading": "Effects on existing data",
          "text": "This"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1RM."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Configure Matching and Duplicate Check for Products: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item 1RM (Mass Load and Mass Maintenance for Product) Technical Object Name Configuration Activity ID: 100274 (Configure Matching and Duplicate Check) Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CA-MDG (Master Data Governance) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        },
        {
          "heading": "Configuration / SSCUI to check",
          "text": "ID: 100274 | Configuration Activity Configure Matching and Duplicate Check | Configuration Activity ID: 100274 (Configure Matching and Duplicate Check) Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Configure Matching and Duplicate Check for Products, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Configure Matching and Duplicate Check for Products",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/73ef7e9884e64a26a5ff5c6195897013?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/7401d2fca5fc49868e13696e789234fe?version=2608.00": {
      "title": "Activate Invoice Receipt Date for All Countries/Regions",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/7401d2fca5fc49868e13696e789234fe?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:18:00.755Z",
      "summary": "With this feature, you can use the",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, you can use the"
        },
        {
          "heading": "Implementation details from SAP",
          "text": "In your"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "activity Activate Invoice Receipt Date to activate the invoice receipt date field in journal entries according to your business requirements in all countries/regions."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J60. Functional localization: Austria,Chad,Egypt,Mexico,Bangladesh,Malawi,Namibia,China,Uruguay,Madagascar,Malta,Sao Tome And Principe,Jamaica,Usa,Puerto Rico,Guyana,Brazil,Nepal,Albania,United Kingdom,Algeria,Slovakia,Switzerland,Vietnam,Finland,Georgia,Jordan,Chile,Norway,Bhutan,Laos,Kazakhstan,Germany,Sri Lanka,Myanmar,Kyrgyzstan,Liechtenstein,India,Senegal,St. Lucia,Greece,Japan,Nauru,Ecuador,Ireland,Cambodia,Palau,Saudi Arabia,South Korea,Utd.Arab Emir.,Togo,Guatemala,United Republic Of Tanzania,St. Vincent,Mongolia,Serbia,Iceland,Colombia,Kenya,Ghana,Netherlands,Lebanon,Spain,Singapore,Latvia,Grenada,Azerbaijan,Samoa,French Polynesia,Zambia,New Zealand,Estonia,Ukraine,Bahamas,Cameroon,Uganda,Seychelles,Bolivia,Malaysia,Peru,Bosnia And Herzegovina,Canada,Morocco,Ethiopia,Botswana,Hong Kong,Costa Rica,Paraguay,Marshall Islands,Virgin Islands (British),Mauritania,Angola,Russian Federation,Benin,El Salvador,South Africa,Macao,Zimbabwe,Armenia,Barbados,Lithuania,Guernsey,Gibraltar,Sint Maarten,Slovenia,Philippines,Poland,Honduras,Belgium,Dominica,Czech Republic,Trinidad,Tobago,Oman,Cape Verde,Tajikistan,Taiwan,Burkina Faso,Andorra,France,Venezuela,Luxembourg,Portugal,Liberia,Sierra Leone,Tuvalu,Uzbekistan,Libya,Fiji,Curacao,Cote D'Ivoire,Jersey,Niger,Democratic Republic Of The Congo,Moldova,Bahrain,Saint Kitts And Nevis,Isle Of Man,North Macedonia,Tunisia,Argentina,Israel,Panama,Indonesia,Mozambique,Australia,The Kingdom Of Eswatini,Denmark,Sweden,Dominican Republic,Hungary,Belize,Mauritius,Kuwait,The Republic Of Turkiye,Nicaragua,Gabon,Global,Cyprus,Qatar,Iraq,Italy,Guinea,Equatorial Guinea,Thailand,Rwanda,Nigeria,Cayman Islands,Bulgaria,Pakistan,Romania,Antigua And Barbuda,Croatia,American Virgin Islands,Bermuda; for CFA Australia, treat as not relevant unless the process owner confirms use."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Activate Invoice Receipt Date for All Countries/Regions: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization All countries/regions Scope Item J60 (Accounts Payable) Technical Object Name Configuration Activity: 107263 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-LOC-FI Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        },
        {
          "heading": "Configuration / SSCUI to check",
          "text": "configuration activity Activate Invoice Receipt Date to activate the invoice receipt date field in journal entries according to your business requirements in all countries/regions | Configuration Activity: 107263 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Activate Invoice Receipt Date for All Countries/Regions, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Activate Invoice Receipt Date for All Countries/Regions",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/7401d2fca5fc49868e13696e789234fe?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/780a440a02924a309aab8ae062765aab?version=2608.00": {
      "title": "Deprecation of Display Material Value Chain - Estimated Costs (F4898)",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/780a440a02924a309aab8ae062765aab?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Deprecation of Display Material Value Chain - Estimated Costs (F4898) | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:18:05.646Z",
      "summary": "The app Display Material Value Chain - Estimated Costs is deprecated as of 2608 and will be deleted from the SAP Fiori launchpad in an upcoming release. For more information about app deprecations, see Deprecation Process for Apps",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The app Display Material Value Chain - Estimated Costs is deprecated as of 2608 and will be deleted from the SAP Fiori launchpad in an upcoming release. For more information about app deprecations, see Deprecation Process for Apps"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1ZT. Use affected app/technical object F4898."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Deprecation of Display Material Value Chain - Estimated Costs (F4898): confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Deprecated Functional Localization No localization Scope Item 1ZT (Managing Material Price Changes and Inventory Values) Technical Object Name App ID: F4898 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CO-FIO-PCP (Fiori UI for Product Cost Planning) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Deprecation of Display Material Value Chain - Estimated Costs (F4898), including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Deprecation of Display Material Value Chain - Estimated Costs (F4898)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/780a440a02924a309aab8ae062765aab?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/7b4bd3b0f33a416997b1493df5e7c1ac?version=2608.00": {
      "title": "Delete Maintenance Activity Types",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/7b4bd3b0f33a416997b1493df5e7c1ac?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:18:09.498Z",
      "summary": "With this feature, you can now Delete a maintenance activity that is assigned in Assign Valid Maintenance Activity Types to Maintenance Order Types and defined in Define Maintenance Activity Types. To delete an assigned maintenance activity, go to Manage Your Solution > Configure Your Solution > Order Processing > Assign Valid Maintenance Activity Types to Maintenance Order Types. Then, delete the defined maintenance activity from Define Maintenance Activity Types. Authorizations To access this app, business users need to have the",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, you can now Delete a maintenance activity that is assigned in Assign Valid Maintenance Activity Types to Maintenance Order Types and defined in Define Maintenance Activity Types. To delete an assigned maintenance activity, go to Manage Your Solution > Configure Your Solution > Order Processing > Assign Valid Maintenance Activity Types to Maintenance Order Types. Then, delete the defined maintenance activity from Define Maintenance Activity Types. Authorizations To access this app, business users need to have the"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "Expert (SAP_BR_BPC_EXPERT) role."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 4WM,4HI,4VT,4HH."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Delete Maintenance Activity Types: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item 4HI (Proactive Maintenance) 4HH (Reactive Maintenance) 4VT (Improvement Maintenance) 4WM (Operational and Overhead Maintenance) Technical Object Name Configuration Activity:103652 Configuration Activity:103651 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component PM-WOC-MO (Maintenance orders) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        },
        {
          "heading": "Configuration / SSCUI to check",
          "text": "Configuration Activity:103652 Configuration Activity:103651 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Delete Maintenance Activity Types, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Delete Maintenance Activity Types",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/7b4bd3b0f33a416997b1493df5e7c1ac?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/7b6ad1b5a1334c50b27b7c5abe07f064?version=2608.00": {
      "title": "Manage Tasks for Timesheet App",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/7b6ad1b5a1334c50b27b7c5abe07f064?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Manage Tasks for Timesheet App | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:18:14.063Z",
      "summary": "With the new Manage Tasks for Timesheet app, you can view and create tasks for time recording in the Manage Timesheet app, for customer projects. The list includes tasks created by direct staffing in the Plan Customer Projects app, as well as manually created tasks, and general tasks such as administration, training, or travel time. You can also delete manually created tasks from your timesheet task list, provided no time entries exist for them. To access the app, navigate from the task list in the Manage Timesheet app.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With the new Manage Tasks for Timesheet app, you can view and create tasks for time recording in the Manage Timesheet app, for customer projects. The list includes tasks created by direct staffing in the Plan Customer Projects app, as well as manually created tasks, and general tasks such as administration, training, or travel time. You can also delete manually created tasks from your timesheet task list, provided no time entries exist for them. To access the app, navigate from the task list in the Manage Timesheet app."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access this app, their business users need to have the following IAM app assigned: Manage Tasks for Timesheet (F8824_TRAN)."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "To enable business users to manually create tasks for customer projects to which they are not staffed, the configuration expert need to activate the Unstaffed Project option in the Maintain Data Entry Profiles (S/4HANA) configuration step under Manage Your Solution Configure Your Solution Application Area: Human Resources Sub Application Area: Time Sheet Time Recording."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J12,1Q4. Use affected app/technical object F8824."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Manage Tasks for Timesheet App: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item 1Q4 (Time Recording) J12 (Time Recording - Project-Based Services) Technical Object Name App ID: F8824 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CA-TS-S4 (Cross Application Timesheet in S/4HANA) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Manage Tasks for Timesheet App, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Manage Tasks for Timesheet App",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/7b6ad1b5a1334c50b27b7c5abe07f064?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/7efe3c11f2d0491aae6b4c9c4de0c714?version=2608.00": {
      "title": "Enablement of Value Chain Types for Combination of Document Type and Item Category",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/7efe3c11f2d0491aae6b4c9c4de0c714?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Enablement of Value Chain Types for Combination of Document Type and Item Category | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:18:17.878Z",
      "summary": "You can now enable a value chain type (for instance Advanced Intercompany Sales) for a combination of a sales document type and a sales document item category in the Enable Value Chain Types for Combination of Document Type and Item Category",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "You can now enable a value chain type (for instance Advanced Intercompany Sales) for a combination of a sales document type and a sales document item category in the Enable Value Chain Types for Combination of Document Type and Item Category"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "activity. In previous releases, you had to create a customer ticket to do this. Once you have enabled a value chain type for a combination you cannot undo this setting, so make sure that the enablement of a value chain type aligns with your business requirements. It is not possible to disable a value chain type or to set it to Not Applicable. Examples of the User Interface The following screenshot shows the new Enable Value Chain Types for Combination of Document Type and Item Category configuration activity in the Configure Your Solution app. The following screenshot shows the Enabled setting for the IC_SALES (Advanced Intercompany Sales) value chain type within the Enable Value Chain Types for Combination of Document Type and Item Category configuration activity. Note The screenshots are examples to make the described change visible."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BD9."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Enablement of Value Chain Types for Combination of Document Type and Item Category: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item BD9 (Sell from Stock) and others Technical Object Name Configuration Activity: 107329 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component SD-SLS-GF-CU (Customizing) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        },
        {
          "heading": "Configuration / SSCUI to check",
          "text": "configuration activity | Configuration Activity: 107329 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Enablement of Value Chain Types for Combination of Document Type and Item Category, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Enablement of Value Chain Types for Combination of Document Type and Item",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/7efe3c11f2d0491aae6b4c9c4de0c714?version=2608.00"
        },
        {
          "label": "3192584",
          "url": "https://help.sap.com/docs/link-disclaimer?site=https://me.sap.com/notes/3192584"
        },
        {
          "label": "3192576",
          "url": "https://help.sap.com/docs/link-disclaimer?site=https://me.sap.com/notes/3192576"
        },
        {
          "label": "Setting Up Advanced Intercompany Sales",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6e7dd9099c4448bebf87d6bd95aa19bf.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "Shows the new Enable Value Chain Types for Combination of Document Type and Item Category configuration activity in Configure Your Solution.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loioc7fa4fda1f41414894ad96855db600d2_LowRes.png"
        },
        {
          "label": "Shows the Enabled setting for the IC_SALES (Advanced Intercompany Sales) value chain type.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loiob375261b37b44c8abeb4f165606662fc_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/82bd160f924e4c08b96b3b9eb2cf7337?version=2608.00": {
      "title": "Schedule Jobs for Cash Register: Automatically Run Flow Builder",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/82bd160f924e4c08b96b3b9eb2cf7337?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:18:21.625Z",
      "summary": "The Schedule Jobs for Cash Register app now has an improved user interface (UI): Automatically Run Flow Builder. This feature was previously called Build Flows in One Exposure. Enable Automatically Run Flow Builder Flow Builder runs after the reload to generate cash flow data and perform liquidity analysis. Cash Register data is reloaded. Flow Builder starts automatically. Liquidity Analysis runs. You can overwrite liquidity parameters with the Overwrite",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The Schedule Jobs for Cash Register app now has an improved user interface (UI): Automatically Run Flow Builder. This feature was previously called Build Flows in One Exposure. Enable Automatically Run Flow Builder Flow Builder runs after the reload to generate cash flow data and perform liquidity analysis. Cash Register data is reloaded. Flow Builder starts automatically. Liquidity Analysis runs. You can overwrite liquidity parameters with the Overwrite"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "option.  Disable Automatically Run Flow Builder Only the Cash Register reload is performed.  Flow Builder is skipped.  Only the Cash Register reload runs.  Flow Builder doesn't start.  No liquidity analysis is performed.  Overwrite Configuration (overwrite run parameters) and related liquidity fields are disabled.  You can use this setting when you only want to refresh Cash Register data and plan to run Flow Builder separately later.  Note This field is locked when Test Run is enabled.  Test runs never start Flow Builder.  This field is only visible when you select Enable Expert Mode.  In standard mode, Flow Builder always runs by default.  Toggling Test Run from ON to OFF automatically restores this checkbox to ON.  You can manually turn it off again if needed."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BFB,J78. Use affected app/technical object F8948."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Schedule Jobs for Cash Register: Automatically Run Flow Builder: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item BFB (Basic Cash Operations) J78 (Advanced Cash Operations) Technical Object Name App ID: F8948 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FIN-FSCM-CLM (Cash Management) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Schedule Jobs for Cash Register: Automatically Run Flow Builder, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Schedule Jobs for Cash Register: Automatically Run Flow Builder",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/82bd160f924e4c08b96b3b9eb2cf7337?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio063ccd397ab64230ba143b3352bdb683_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/84a07872483a448db96d554bb1746a42?version=2608.00": {
      "title": "Commitment Plan for Purchase Contracts",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/84a07872483a448db96d554bb1746a42?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Commitment Plan for Purchase Contracts | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:18:26.515Z",
      "summary": "This feature enables you to reserve and track budgets at the purchase contract level before actual spending occurs.  The commitment plan is a budget reservation mechanism that enables you to create budget reservations that automatically generate earmark funds, ensuring that reserved funds can't be used for other purposes.  This reserved fund is set aside for the specific contract.  The commitment plan supports both value contracts and quantity contracts.  Once you create a purchase contract with a commitment plan and confirm that the earmark fund is generated against the commitment plan items, you can create purchase requisitions using the purchase contract as the source of supply.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "This feature enables you to reserve and track budgets at the purchase contract level before actual spending occurs.  The commitment plan is a budget reservation mechanism that enables you to create budget reservations that automatically generate earmark funds, ensuring that reserved funds can't be used for other purposes.  This reserved fund is set aside for the specific contract.  The commitment plan supports both value contracts and quantity contracts.  Once you create a purchase contract with a commitment plan and confirm that the earmark fund is generated against the commitment plan items, you can create purchase requisitions using the purchase contract as the source of supply."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "General Prerequisites Ensure that the business catalog SAP_PSM_BC_EMRKFNDS_API_PC (Earmarked Funds Document - API) is assigned to your business role."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BMD. Use affected app/technical object F1600A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Commitment Plan for Purchase Contracts: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item BMD (Purchase Contract) Technical Object Name App ID: F1600A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-FIO-PUR-SQ-CON (Fiori UI for Manage Purchase Contracts) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Commitment Plan for Purchase Contracts, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Commitment Plan for Purchase Contracts",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/84a07872483a448db96d554bb1746a42?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loiodee0b4c5bd554850a4bd1139f46468c0_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/8518440a675a47339f7f4f5be0705772?version=2608.00": {
      "title": "Simplified System Connection Setup",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/8518440a675a47339f7f4f5be0705772?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Simplified System Connection Setup | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:18:30.518Z",
      "summary": "To simplify the process of connecting your SAP system to Concur, we enhance the Setting Up the System Connection wizard by automating the population of specific client credential fields. For more details on the integration system setup, see the SAP Integration with Concur Solutions – Setup Guide.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "To simplify the process of connecting your SAP system to Concur, we enhance the Setting Up the System Connection wizard by automating the population of specific client credential fields. For more details on the integration system setup, see the SAP Integration with Concur Solutions – Setup Guide."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Relevant where CFA has custom fields, custom logic, APIs, CDS views, integrations, BTP apps, or side-by-side consumers touching this object or process. Scope item(s): 1M1. Use affected app/technical object F8636."
        },
        {
          "heading": "How to test",
          "text": "Find the CFA extension/integration that touches this area, then run the smallest consuming flow: activation/syntax check, API call, report/app execution, or iFlow test. Compare output against a known pre-upgrade result."
        },
        {
          "heading": "Expected result",
          "text": "The extension, API, CDS consumer, or integration still activates and runs without syntax, authorisation, payload, or runtime errors; output matches the expected business result."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action Review/Required Type Changed Functional Localization No localization Scope Item 1M1 (Travel Expense Processing with SAP Concur) Technical Object Name App ID: CTE_SETUP F8636 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component BNS-CON-SE-S4 (Concur Suite Enablement S/4HANA Integration) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the existing custom object/API/CDS/integration behaviour and a known successful output or payload before upgrade.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the post-upgrade activation/runtime result and reconcile it to the expected business output.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Simplified System Connection Setup",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/8518440a675a47339f7f4f5be0705772?version=2608.00"
        },
        {
          "label": "Integrating SAP S/4HANA Cloud Systems with SAP Concur",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD_INTEGRATION_WITH_CONCUR_SOLUTIONS"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/8a8dde565f494ced8cc3a77a313ff938?version=2608.00": {
      "title": "Bills of Exchange in Manage Journal Entries",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/8a8dde565f494ced8cc3a77a313ff938?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Bills of Exchange in Manage Journal Entries | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:18:34.087Z",
      "summary": "The Manage Journal Entries (New Version) app now includes a dedicated Bill of Exchange section on the line item details page in both Ledger View and Entry View. This section is displayed only when bill of exchange data is available for the line item. Changes to the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The Manage Journal Entries (New Version) app now includes a dedicated Bill of Exchange section on the line item details page in both Ledger View and Entry View. This section is displayed only when bill of exchange data is available for the line item. Changes to the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to"
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations For more about the authorizations required to use this app, see Authorizations for Managing Journal Entries."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. The Bill of Exchange section on a line item detail page:"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J58. Use affected app/technical object F0717A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Bills of Exchange in Manage Journal Entries: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J58 (Accounting and Financial Close) Technical Object Name Configuration Activity: 104309 App ID: F0717A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-GL-JE (Journal Entry Processing and Reporting Apps) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        },
        {
          "heading": "Configuration / SSCUI to check",
          "text": "Configuration Activity: 104309 App ID: F0717A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Bills of Exchange in Manage Journal Entries, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Bills of Exchange in Manage Journal Entries",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/8a8dde565f494ced8cc3a77a313ff938?version=2608.00"
        },
        {
          "label": "Authorizations for Managing Journal Entries",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/0e177f8e71684d73b0abaede8910a809.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Manage Journal Entries (New Version)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a68062a6cd8a46d8aea1fcfd3b620d0b.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "Bill of Exchange tab showing general data, drawer, and drawee information.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio6106f64b25f346da9fb663babb69fe2e_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9205cbda5f814be6ac6dddcb2f0b194d?version=2608.00": {
      "title": "View Rejected Purchase Requisitions in Process Purchase Requisitions",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9205cbda5f814be6ac6dddcb2f0b194d?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:18:39.358Z",
      "summary": "With this release, rejected purchase requisition line items are now available in the Process Purchase Requisitions app.  In the Process Purchase Requisitions app, you can select Release Refused (08) in the Requisition Processing State field to view the rejected purchase requisitions.  Note The Create Contract, Create Purchase Order and Create RFQ buttons in the Process Purchase Requisitions app are not available when you select a rejected purchase requisition.  Examples of the User Interface Note The screenshots are examples to make the described change visible.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this release, rejected purchase requisition line items are now available in the Process Purchase Requisitions app. In the Process Purchase Requisitions app, you can select Release Refused (08) in the Requisition Processing State field to view the rejected purchase requisitions. Note The Create Contract, Create Purchase Order and Create RFQ buttons in the Process Purchase Requisitions app are not available when you select a rejected purchase requisition. Examples of the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. In the Process Purchase Requisitions app, you can view the and use the Requisition Processing State using the Adapt Filters and select Release Refused 08 to view the rejected purchase requisitions. Rejected Purchase Requisitions in Process Purchase Requisitions"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): 18J. Use affected app/technical object F1048A."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item 18J (Requisitioning) Technical Object Name App ID: F1048A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-FIO-PUR-REQ-SOC (Fiori UI for Sourcing Purchase Requisitions) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - View Rejected Purchase Requisitions in Process Purchase Requisitions",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9205cbda5f814be6ac6dddcb2f0b194d?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loioe55e7017fb714bd78fb4ac5696110300_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/922060a88e0d4c0da4bfb58110022619?version=2608.00": {
      "title": "Changed Button in Manage Settlement Rules - Projects app",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/922060a88e0d4c0da4bfb58110022619?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Changed Button in Manage Settlement Rules - Projects app | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:18:44.422Z",
      "summary": "The button Download Result Details is now called Settlement Rules Details. There is no change in its functionality.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The button Download Result Details is now called Settlement Rules Details. There is no change in its functionality."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Review only if this exact feature is used by CFA or sits in a used scope/process. Scope item(s): J54. Use affected app/technical object F6842."
        },
        {
          "heading": "How to test",
          "text": "Use SAP's article details to identify the specific changed field, app action, report output, configuration setting, or process behaviour; then run one realistic walkthrough with the owning business role."
        },
        {
          "heading": "Expected result",
          "text": "The changed behaviour appears exactly where SAP describes it and does not break the current CFA user flow. Record relevant, not relevant, or future adoption."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J54 (Overhead Cost Accounting) Technical Object Name App ID: F6842 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CO-OM (Cost Management) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current behaviour for the affected app/process before upgrade if the area is used.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 changed behaviour and whether CFA needs release testing, future adoption, or no action.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Changed Button in Manage Settlement Rules - Projects app",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/922060a88e0d4c0da4bfb58110022619?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/97a33ca059b1492282d1fb9d549e51b8?version=2608.00": {
      "title": "Define Rejection Reasons for Products",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/97a33ca059b1492282d1fb9d549e51b8?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Define Rejection Reasons for Products | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:18:49.479Z",
      "summary": "You can define rejection reasons when editing products in the Manage Mass Maintenance - Products app.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "You can define rejection reasons when editing products in the Manage Mass Maintenance - Products app."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): 1RM. Use affected app/technical object F9335."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item 1RM (Mass Load and Mass Maintenance for Product) Technical Object Name App ID: F9335 (Manage Mass Maintenance - Products) Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CA-MDG (Master Data Governance) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Define Rejection Reasons for Products",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/97a33ca059b1492282d1fb9d549e51b8?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9eca0d93252e414c8372586936d16b26?version=2608.00": {
      "title": "Cost Centers Review Booklet",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9eca0d93252e414c8372586936d16b26?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Cost Centers Review Booklet | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:18:53.107Z",
      "summary": "The following features have been added in the Cost Centers Review Booklet: Business page: Budget Quantity field for plan values Data source extensibility Business Page:Budget You can compare the following Budget values for a given Fiscal Year: Actuals Plan/Actuals Commitments Budget Quantity Field for Plan Values The Quantity field is now available for plan values.  Data Source Extensibility You can create data source extensions for queries.  This feature enables you to add fields to the Cost Centers Review Booklet.  For more information, see Creating Data Source Extensions.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The following features have been added in the Cost Centers Review Booklet: Business page: Budget Quantity field for plan values Data source extensibility Business Page:Budget You can compare the following Budget values for a given Fiscal Year: Actuals Plan/Actuals Commitments Budget Quantity Field for Plan Values The Quantity field is now available for plan values.  Data Source Extensibility You can create data source extensions for queries.  This feature enables you to add fields to the Cost Centers Review Booklet.  For more information, see Creating Data Source Extensions."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access this app, their business users need to have the following IAM app assigned: Cost Centers Review Booklet (F7763_TRAN)."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J54. Use affected app/technical object F7763."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Cost Centers Review Booklet: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J54 (Overhead Cost Accounting) Technical Object Name App ID: F7763 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CO-FIO-CCA-IS (Reporting) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Cost Centers Review Booklet, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Cost Centers Review Booklet",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9eca0d93252e414c8372586936d16b26?version=2608.00"
        },
        {
          "label": "Creating Data Source Extensions",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f71b07567568414face7043990335367.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "How to Create a Data Source Extension for the Cost Centers Review Booklet",
          "url": "https://help.sap.com/docs/link-disclaimer?site=https%3A%2F%2Fcommunity.sap.com%2Ft5%2Fenterprise-resource-planning-blog-posts-by-sap%2Fhow-to-create-a-data-source-extension-for-the-cost-centers-review-booklet%2Fba-p%2F14415605"
        },
        {
          "label": "Cost Centers Review Booklet",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/95063eff5ee0467f8cc04b4ff8f8ca01.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "This screenshot shows an overview of the Budget business page.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio527b6e9e54014527b804ccaffc44722d_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a0f861453d9e45f8a8165868448bf237?version=2608.00": {
      "title": "Schedule Billing Creation and Schedule Creation of Preliminary Billing Documents: App Extensibility",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a0f861453d9e45f8a8165868448bf237?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Schedule Billing Creation and Schedule Creation of Preliminary Billing Documents: App Extensibility | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:18:56.891Z",
      "summary": "With this feature, you as a key user can extend the Schedule Billing Creation and Schedule Creation of Preliminary Billing Documents apps with up to five custom fields.  Business users can use these fields as parameters when setting up billing document and preliminary billing document creation jobs.  By enabling users to more accurately filter the list of billing due list items to be included in the job, this feature helps you tailor automated billing creation to your business needs.  As a key user, you create custom fields in the Custom Fields app in the business context Sales: Billing Due List.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, you as a key user can extend the Schedule Billing Creation and Schedule Creation of Preliminary Billing Documents apps with up to five custom fields.  Business users can use these fields as parameters when setting up billing document and preliminary billing document creation jobs.  By enabling users to more accurately filter the list of billing due list items to be included in the job, this feature helps you tailor automated billing creation to your business needs.  As a key user, you create custom fields in the Custom Fields app in the business context Sales: Billing Due List.  Once you enable these custom fields for use, they appear automatically as parameters for all business users in both the Schedule Billing Creation and Schedule Creation of Preliminary Billing Documents apps."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access the Schedule Billing Creation and Schedule Creation of Preliminary Billing Documents apps, their business users need to have the following IAM app assigned: Schedule Billing Creation (F1519_TRAN) Schedule Creation of Preliminary Billing Documents (F4563_TRAN) To enable key users to create custom fields, their business users need to have the following IAM app assigned: Custom Fields (F1481_TRAN)."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BD9. Use affected app/technical object F1519, F4563."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Schedule Billing Creation and Schedule Creation of Preliminary Billing Documents: App Extensibility: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item BD9 (Sell from Stock) Technical Object Name App ID: F1519 F4563 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component SD-BIL (Billing) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Schedule Billing Creation and Schedule Creation of Preliminary Billing Documents: App Extensibility, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Schedule Billing Creation and Schedule Creation of Preliminary Billing Do",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a0f861453d9e45f8a8165868448bf237?version=2608.00"
        },
        {
          "label": "App Extensibility: Schedule Billing Creation and Schedule Creation of Preliminary Billing",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/38cabff980ab4d4d8d140c32c634f262.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Custom Fields App and Custom Logic App",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/57909455bf7c4fdd8bcf48d76c1eae33.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "Custom fields enabled for use appear under the Custom Fields group in the Parameters section of the Schedule Billing Creation and Schedule Creation of Preliminary Billing Documents apps.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio07a69266fabc4be8bef1c8a41bbc62aa_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a1bbc5b3f763487c8947443b7aa1988d?version=2608.00": {
      "title": "Transfer Postings: Partner and Origin Fields",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a1bbc5b3f763487c8947443b7aa1988d?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Transfer Postings: Partner and Origin Fields | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:19:00.252Z",
      "summary": "Additional fields are available that specify the origin of an asset in the case of an asset transfer.  On the one hand, these are new partner fields for asset acquisitions and retirements that you can use for asset transfers posted with the two-step approach; on the other hand, these are new origin fields in the asset master record.  Fields Indicating the Partner (Sender or Receiver) When posting asset transfers across company codes, you can use the two-step approach: First, you post an asset retirement in the sending company code, and then you post an asset acquisition in the receiving company code.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "Additional fields are available that specify the origin of an asset in the case of an asset transfer.  On the one hand, these are new partner fields for asset acquisitions and retirements that you can use for asset transfers posted with the two-step approach; on the other hand, these are new origin fields in the asset master record.  Fields Indicating the Partner (Sender or Receiver) When posting asset transfers across company codes, you can use the two-step approach: First, you post an asset retirement in the sending company code, and then you post an asset acquisition in the receiving company code.  To better trace the company codes and assets involved, new partner fields are introduced in some apps, APIs, and CDS views."
        },
        {
          "heading": "Effects on existing data",
          "text": "For existing asset master records for which the fields OriginalMasterFixedAsset and OriginalFixedAsset are already filled, the new field OriginalCompanyCode (Company Code of Original Asset) is not filled automatically. However, you can fill it manually."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): 33G,J62,BFH,1GB,1GF,33F. Use affected app/technical object F7107, F6488."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item J62; 1GB; 1GF; BFH; 33F; 33G Technical Object Name See object lists above. Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component Asset Accounting (FI-AA) Valid as Of SAP S/4HANA Cloud Public Edition 2608 Additional Information In the product assistance for Asset Accounting, additional information is available on the following topics: Asset master record: Manage Fixed Assets Asset transactions: Transactions CDS views: CDS Views for Asset Accounting APIs: APIs for Asset Accounting"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Transfer Postings: Partner and Origin Fields",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a1bbc5b3f763487c8947443b7aa1988d?version=2608.00"
        },
        {
          "label": "Manage Fixed Assets",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/aec7ecb2ee11437bbbc2041572be9612.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Transactions",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f0a16409fbc649b896add04c1c0a624e.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "CDS Views for Asset Accounting",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/5d1be150c2f64a81a5b1a0a72e6fa5c0.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "APIs for Asset Accounting",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/560ade3edf964466b10cc918c50cfa8e.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a53e7385453749be9f7b7a261cb81e49?version=2608.00": {
      "title": "CDS Views Released for Developer Extensibility",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a53e7385453749be9f7b7a261cb81e49?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "CDS Views Released for Developer Extensibility | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:19:03.682Z",
      "summary": "The following CDS views have been released for developer extensibility: Operational Journal Entry Item - Cube (I_OperationalAcctgDocCube) Company Code Settings for Ledger (I_LedgerCoCode) Journal Entry Item Cube (I_JOURNALENTRYITEMCUBE) GR/IR Process History (I_GRIRPROCESSHISTORY) G/L Account Balances - Cube (I_GLAccountYearToDateBalanceC) (I_GLACCOUNTYEARTODATEBALANCEC) G/L Account Line Item Cube (I_GLACCOUNTLINEITEMCUBE) Derive Fiscal Years for Posting Date (I_FSCLYRINTVLDRVTNFORPOSTGDATE) Fiscal Years for Posting Dates (I_FSCLYRINTVLDRVTNFORCOMPRNDTE) Fiscal Quarters For Fiscal Year Variant Without Fiscal Year (I_FSCLQTRWTHOUTFSCLYRFORVAR) Fiscal Periods For Fiscal Year Variant Without Fiscal Year (I_FSCLPERDWTHOUTFSCLYRFORVAR) Previous Fiscal: Year, Period, Quarter to Fiscal Cal.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The following CDS views have been released for developer extensibility: Operational Journal Entry Item - Cube (I_OperationalAcctgDocCube) Company Code Settings for Ledger (I_LedgerCoCode) Journal Entry Item Cube (I_JOURNALENTRYITEMCUBE) GR/IR Process History (I_GRIRPROCESSHISTORY) G/L Account Balances - Cube (I_GLAccountYearToDateBalanceC) (I_GLACCOUNTYEARTODATEBALANCEC) G/L Account Line Item Cube (I_GLACCOUNTLINEITEMCUBE) Derive Fiscal Years for Posting Date (I_FSCLYRINTVLDRVTNFORPOSTGDATE) Fiscal Years for Posting Dates (I_FSCLYRINTVLDRVTNFORCOMPRNDTE) Fiscal Quarters For Fiscal Year Variant Without Fiscal Year (I_FSCLQTRWTHOUTFSCLYRFORVAR) Fiscal Periods For Fiscal Year Variant Without Fiscal Year (I_FSCLPERDWTHOUTFSCLYRFORVAR) Previous Fiscal: Year, Period, Quarter to Fiscal Cal."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): J58."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J58 (Accounting and Financial Close) Technical Object Name I_OperationalAcctgDocCube I_LedgerCoCode I_JOURNALENTRYITEMCUBE I_GRIRPROCESSHISTORY I_GLACCOUNTYEARTODATEBALANCEC I_GLACCOUNTLINEITEMCUBE I_FSCLYRINTVLDRVTNFORPOSTGDATE I_FSCLYRINTVLDRVTNFORCOMPRNDTE I_FSCLQTRWTHOUTFSCLYRFORVAR I_FSCLPERDWTHOUTFSCLYRFORVAR I_FISCALCALENDARDTEPREVPERIODS I_FISCALCALENDARDATENXTPERIODS I_FISCALCALDATEPREVFSCLPERIOD I_FISCALCALDATENXTFSCLPERIOD I_CURRENTYEARFISCALPERIODTEXT Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape.  For more information, see Overview of Software and Content Upgrade."
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - CDS Views Released for Developer Extensibility",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a53e7385453749be9f7b7a261cb81e49?version=2608.00"
        },
        {
          "label": "Operational Journal Entry Item - Cube",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/54b2fdbc55dc46ea82afd64b6f2f17bf.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Company Code Settings for Ledger",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/ddd91dd875944dc09b625473ae2fb94a.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Journal Entry Item Cube",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/0ee5e95760521070e10000000a44147b.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "GR/IR Process History",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2f6ca5c000384017a2c985ab290aae97.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "G/L Account Balances - Cube (I_GLAccountYearToDateBalanceC)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/75e670f08c30421b90dc889c57eaa261.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "G/L Account Line Item Cube",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/77fca15734a76b10e10000000a441470.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Derive Fiscal Years for Posting Date",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/8e80ce3a9af848b79342e599812020be.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Fiscal Years for Posting Dates",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/3ba0d8c050f949f6a5a69d45cd3c6afd.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Fiscal Quarters For Fiscal Year Variant Without Fiscal Year",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/054f93e6a8154bf8a9ae910f3fdc9ae1.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a8e0363e1ae14ec796af68217097755f?version=2608.00": {
      "title": "Schedule Jobs for Cash Register: Overwrite Configuration",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a8e0363e1ae14ec796af68217097755f?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Schedule Jobs for Cash Register: Overwrite Configuration | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:19:08.447Z",
      "summary": "The Schedule Jobs for Cash Register app now has an improved user interface (UI): Overwrite",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The Schedule Jobs for Cash Register app now has an improved user interface (UI): Overwrite"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BFB,J78. Use affected app/technical object F8948."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Schedule Jobs for Cash Register: Overwrite Configuration: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item BFB (Basic Cash Operations) J78 (Advanced Cash Operations) Technical Object Name App ID: F8948 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FIN-FSCM-CLM (Cash Management) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Schedule Jobs for Cash Register: Overwrite Configuration, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Schedule Jobs for Cash Register: Overwrite Configuration",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a8e0363e1ae14ec796af68217097755f?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loioac8c9e9a4147467593edca7e29fddc35_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/ac5d95ca6f864089a40a6cfacf59f902?version=2608.00": {
      "title": "Manage Debit Memo Requests - Version 2 App: Enhancements",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/ac5d95ca6f864089a40a6cfacf59f902?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Manage Debit Memo Requests - Version 2 App: Enhancements | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:19:12.016Z",
      "summary": "With the Manage Debit Memo Requests - Version 2 app, you can now do the following in debit memo requests: View SAP GTS compliance check statuses Specify terms of payment Edit item descriptions View SAP GTS Compliance Check Statuses You can view results of trade compliance checks from SAP Global Trade Services (SAP GTS) in debit memo requests.  For more information, seeTrade Compliance Checks in Credit Memo Requests and Debit Memo Requests.  Edit Item Descriptions You can create the item description for debit memo request items.  Item description is used to further specify the item or provide additional information.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With the Manage Debit Memo Requests - Version 2 app, you can now do the following in debit memo requests: View SAP GTS compliance check statuses Specify terms of payment Edit item descriptions View SAP GTS Compliance Check Statuses You can view results of trade compliance checks from SAP Global Trade Services (SAP GTS) in debit memo requests.  For more information, seeTrade Compliance Checks in Credit Memo Requests and Debit Memo Requests.  Edit Item Descriptions You can create the item description for debit memo request items.  Item description is used to further specify the item or provide additional information.  If you don't specify your own description, the system uses the product description from master data as a default.  The item description field is not visible by default."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access this app, their business users need to have the following IAM app assigned: Manage Debit Memo Requests - Version 2 (F1988A_TRAN)."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. You can edit the item description in the items table: The item description is displayed in the item details at the top:"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BDQ,1F1. Use affected app/technical object F1988A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Manage Debit Memo Requests - Version 2 App: Enhancements: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item 1F1 (Debit Memo Processing) BDQ (Invoice Correction Process with Debit Memo) Technical Object Name App ID: F1988A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component SD-SLS-CMR (Credit Memo Request and Debit Memo Request) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Manage Debit Memo Requests - Version 2 App: Enhancements, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Manage Debit Memo Requests - Version 2 App: Enhancements",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/ac5d95ca6f864089a40a6cfacf59f902?version=2608.00"
        },
        {
          "label": "Trade Compliance Checks in Credit Memo Requests and Debit Memo Requests",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4f839da32c7a45968be2338b2ab94360.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Manage Debit Memo Requests - Version 2",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1f6bf12738db47d4bdf83e30f522b569.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "Screenshot showing the item description field in the items table.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loiobf91c94c7efc4838a225ed593cbca540_LowRes.png"
        },
        {
          "label": "Screenshot showing the item description displayed at top of the item page.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio38d7209dda4e477e9a392bb0359e8440_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/adc8fb66baf24e078ab705d83be6c43b?version=2608.00": {
      "title": "Export Change Documents for Products",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/adc8fb66baf24e078ab705d83be6c43b?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Export Change Documents for Products | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:19:32.398Z",
      "summary": "You can export change documents for products in the Export Master Data - Products app.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "You can export change documents for products in the Export Master Data - Products app."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): 1RM. Use affected app/technical object F8324."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item 1RM (Mass Load and Mass Maintenance for Product) Technical Object Name App ID: F8324 (Export Master Data - Products) Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CA-MDG (Master Data Governance) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Export Change Documents for Products",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/adc8fb66baf24e078ab705d83be6c43b?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b1144c9790f24118b37deaa3bcff4be2?version=2608.00": {
      "title": "Change House Bank Accounts and Reference Keys for Customer and Supplier Line Items",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b1144c9790f24118b37deaa3bcff4be2?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Change House Bank Accounts and Reference Keys for Customer and Supplier Line Items | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:19:36.118Z",
      "summary": "This feature enables you to change house bank accounts for customer and supplier line items in the Manage Customer Line Items and Manage Supplier Line Items apps. For detailed information, see Change House Bank Accounts and Reference Keys for Customer and Supplier Line Items.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "This feature enables you to change house bank accounts for customer and supplier line items in the Manage Customer Line Items and Manage Supplier Line Items apps. For detailed information, see Change House Bank Accounts and Reference Keys for Customer and Supplier Line Items."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "Localization Tool) 1S0 (Customer Payments) 19M (Direct Debit) 1J5 (Invoice, Taxes and Complementary Postings) 1JT (Lockbox) Technical Object Name App IDs: F0711 F0712 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-AR-IS (Reporting Apps) FI-FIO-AP-IS (Reporting Apps) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 4Q2,6IL,7VW,1WQ,1S0,7MG,J59,42K,J60,1JT,19M,1J5. Use affected app/technical object F0711, F0712."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Change House Bank Accounts and Reference Keys for Customer and Supplier Line Items: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item 6IL (Account Reconciliation – SAP Solution Extensions by BlackLine) J59 (Accounts Receivable) J60 (Accounts Payable) 1WQ (Bill of Exchange) 7VW (Bill of Exchange for Configuration Localization Tool) 1S0 (Customer Payments) 19M (Direct Debit) 1J5 (Invoice, Taxes and Complementary Postings) 1JT (Lockbox) Technical Object Name App IDs: F0711 F0712 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-AR-IS (Reporting Apps) FI-FIO-AP-IS (Reporting Apps) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Change House Bank Accounts and Reference Keys for Customer and Supplier Line Items, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Change House Bank Accounts and Reference Keys for Customer and Supplier L",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b1144c9790f24118b37deaa3bcff4be2?version=2608.00"
        },
        {
          "label": "Change House Bank Accounts and Reference Keys for Customer and Supplier Line Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/629d5271e9d543a095838f259dde3c0f.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b3c7fb25772c4518bfd7b1c497dbe9df?version=2608.00": {
      "title": "Activate Line Item Withholding Tax Configuration Step (New)",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b3c7fb25772c4518bfd7b1c497dbe9df?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Activate Line Item Withholding Tax Configuration Step (New) | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:19:41.081Z",
      "summary": "You can use this",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "You can use this"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "Step (New)"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J58."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Activate Line Item Withholding Tax Configuration Step (New): confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item J58 (Accounting and Financial Close) Technical Object Name Configuration Item: ID: 107358 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-AP-AP-Q (Withholding Tax (Calculation)) FI-AR-AR-Q (Withholding Tax (Calculation)) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        },
        {
          "heading": "Configuration / SSCUI to check",
          "text": "ID: 107358 | configuration activity to import the amount for withholding tax calculation directly from billing documents according to the specific pricing procedure configurations you have maintained"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Activate Line Item Withholding Tax Configuration Step (New), including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Activate Line Item Withholding Tax Configuration Step (New)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b3c7fb25772c4518bfd7b1c497dbe9df?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loiod5c584ebddb7442698fc2e78c19fe647_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b4a45f3ca257474384898c11e6aa4b66?version=2608.00": {
      "title": "Key User Extensibility for Simulating Journal Entries",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b4a45f3ca257474384898c11e6aa4b66?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Key User Extensibility for Simulating Journal Entries | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:19:45.850Z",
      "summary": "As a key user, you can extend the Simulate Journal Entries dialog according to your business needs. You can add additional fields in the following business contexts: Business Context FINS_CODING_BLOCK (Accounting: Coding Block) FINS_JOURNAL_ENTRY_ITEM (Accounting: Journal Entry Item) Note The Simulate Journal Entries dialog is a reusable function that is consumed by posting apps. It does not have a tile on the launchpad.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "As a key user, you can extend the Simulate Journal Entries dialog according to your business needs. You can add additional fields in the following business contexts: Business Context FINS_CODING_BLOCK (Accounting: Coding Block) FINS_JOURNAL_ENTRY_ITEM (Accounting: Journal Entry Item) Note The Simulate Journal Entries dialog is a reusable function that is consumed by posting apps. It does not have a tile on the launchpad."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J58. Use affected app/technical object F7958."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Key User Extensibility for Simulating Journal Entries: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J58 (Accounting and Financial Close) Technical Object Name App ID: F7958 Latest Reference Content Version Required Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-GL-JE (Journal Entry Processing and Reporting Apps) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Key User Extensibility for Simulating Journal Entries, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Key User Extensibility for Simulating Journal Entries",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b4a45f3ca257474384898c11e6aa4b66?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/bb5436f8de3446549c53f3c78bae5497?version=2608.00": {
      "title": "Enabling Editing of WBS Elements in Sales Orders Copied from Others Sales Orders",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/bb5436f8de3446549c53f3c78bae5497?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Enabling Editing of WBS Elements in Sales Orders Copied from Others Sales Orders | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:19:50.978Z",
      "summary": "You can now edit the Work Breakdown Structure (WBS) elements at the item level when you create a sales order with reference to an existing sales order. Previously, WBS elements were locked in any sales document that had a preceding document, to ensure consistent WBS assignment across the document flow. However, creating sales orders with reference to other sales orders act as a copy action. This feature can speed up your order creation process by copying existing sales orders to prefill data and enter different WBS values as needed.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "You can now edit the Work Breakdown Structure (WBS) elements at the item level when you create a sales order with reference to an existing sales order. Previously, WBS elements were locked in any sales document that had a preceding document, to ensure consistent WBS assignment across the document flow. However, creating sales orders with reference to other sales orders act as a copy action. This feature can speed up your order creation process by copying existing sales orders to prefill data and enter different WBS values as needed."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): BD9. Use affected app/technical object F3893."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item BD9 (Sell from Stock) Technical Object Name API: API_SALES_ORDER_SRV SalesOrder and others App: VA02 F3893 and others Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component SD-SLS-API (APIs for Sales Document in S/4 Sales & Distribution) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Enabling Editing of WBS Elements in Sales Orders Copied from Others Sales",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/bb5436f8de3446549c53f3c78bae5497?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/c11fad2cef41454ea25a7d04bc7959d3?version=2608.00": {
      "title": "Process Flow for Purchase Requisition Item Object Page",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/c11fad2cef41454ea25a7d04bc7959d3?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Process Flow for Purchase Requisition Item Object Page | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:19:53.756Z",
      "summary": "With this release, you can view Process Flow for a purchase requisition item in the Purchase Requisition Item Object Page. Examples of the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this release, you can view Process Flow for a purchase requisition item in the Purchase Requisition Item Object Page. Examples of the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. In the purchase requisition item object page, you can now view the process flow at the item level. Process Flow in Purchase Requisition Item Object Page"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Review only if this exact feature is used by CFA or sits in a used scope/process. Scope item(s): BNX,1XI,18J,O8J. Use affected app/technical object F0349A."
        },
        {
          "heading": "How to test",
          "text": "Use SAP's article details to identify the specific changed field, app action, report output, configuration setting, or process behaviour; then run one realistic walkthrough with the owning business role."
        },
        {
          "heading": "Expected result",
          "text": "The changed behaviour appears exactly where SAP describes it and does not break the current CFA user flow. Record relevant, not relevant, or future adoption."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item 18J (Requisitioning), O8J (Requisitioning), 1XI (Central Requisitioning), BNX (Consumable Purchasing) Technical Object Name App ID: F0349A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-PUR-REQ (Purchase Requisitions) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current behaviour for the affected app/process before upgrade if the area is used.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 changed behaviour and whether CFA needs release testing, future adoption, or no action.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Process Flow for Purchase Requisition Item Object Page",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/c11fad2cef41454ea25a7d04bc7959d3?version=2608.00"
        },
        {
          "label": "Purchase Requisition Item",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b149e8574add1070e10000000a44147b.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio959900631bd04aa8bca8477a1f19b1ec_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/c18a5e5dbc274c2dadb0fc01df781019?version=2608.00": {
      "title": "Deprecation of Cost Centers - Actuals (F0963) and Cost Centers - Plan/Actuals (W0081)",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/c18a5e5dbc274c2dadb0fc01df781019?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Deprecation of Cost Centers - Actuals (F0963) and Cost Centers - Plan/Actuals (W0081) | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:19:58.568Z",
      "summary": "As of SAP S/4HANA Cloud Public Edition 2602, the old app versions of the Cost Centers - Actuals (F0963) and Cost Centers - Plan/Actuals (W0081) app are deprecated and will be removed in an upcoming release.  We strongly recommend that you switch to the successor app Cost Centers Review Booklet as soon as possible.  For more information about app deprecation, see Deprecation Process for Apps.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "As of SAP S/4HANA Cloud Public Edition 2602, the old app versions of the Cost Centers - Actuals (F0963) and Cost Centers - Plan/Actuals (W0081) app are deprecated and will be removed in an upcoming release.  We strongly recommend that you switch to the successor app Cost Centers Review Booklet as soon as possible.  For more information about app deprecation, see Deprecation Process for Apps.  The new app provides the following additional features: All relevant comparisons and KPIs at a glance in one app Ready-to-use report comparisons, predefined measures, additional dimensions and filter options All reporting options on one screen Note In both involved apps, the New Experience Switch behavior is enabled.  If business end users have authorizations for both the old and the new app, they can also switch between both app versions."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access the new app, their business users need to have the following IAM app assigned: Cost Centers Review Booklet (F7763_TRAN) Note Since the underlying IAM apps are delivered as inactive, the new experience switch is not displayed to users by default. It only appears when you activate the underlying IAM apps and assign them to your users. We highly recommend doing this to make users aware of the need to switch to the new app version. For more information on how to activate or deactivate IAM apps, refer to How to Activate or Deactivate IAM Apps of Type App Authorization Variant."
        },
        {
          "heading": "Effects on existing data",
          "text": "The New Experience Switch automatically expands an information popover in the affected apps. If you have your own test automation (RPA bots, etc.) set up in your system, this behavior might have an impact on these tests. For details on how to resolve the impact on your test automates, see Tips for Test Automation."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J54. Use affected app/technical object F0963, F7763."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Deprecation of Cost Centers - Actuals (F0963) and Cost Centers - Plan/Actuals (W0081): confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Deprecated Functional Localization No localization Scope Item J54 (Overhead Cost Accounting) Technical Object Name App ID (old apps): F0963 W0081 App ID (new app): F7763 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CO-FIO-CCA-IS (Reporting) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Deprecation of Cost Centers - Actuals (F0963) and Cost Centers - Plan/Actuals (W0081), including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Deprecation of Cost Centers - Actuals (F0963) and Cost Centers - Plan/Act",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/c18a5e5dbc274c2dadb0fc01df781019?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/c2ae0a690ca9406f95059457d390f76c?version=2608.00": {
      "title": "Mass Changes in Settlement Rules - Projects",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/c2ae0a690ca9406f95059457d390f76c?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Mass Changes in Settlement Rules - Projects | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:20:03.148Z",
      "summary": "You can use this functionality to make mass-changes for settlement rules. You can create, update, and delete settlement distribution rules and parameters through a file download and upload. With this feature you can efficiently manage settlement rules across multiple projects simultaneously, eliminating repetitive manual entry and reducing processing time. Examples of the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "You can use this functionality to make mass-changes for settlement rules. You can create, update, and delete settlement distribution rules and parameters through a file download and upload. With this feature you can efficiently manage settlement rules across multiple projects simultaneously, eliminating repetitive manual entry and reducing processing time. Examples of the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): J54. Use affected app/technical object F6842."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item J54 (Overhead Cost Accounting) Technical Object Name App ID: F6842 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CO-OM (Cost Management) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Mass Changes in Settlement Rules - Projects",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/c2ae0a690ca9406f95059457d390f76c?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loiof3d08c0a7be94cc3bd31a75988076227_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/c4ae655255b7434f91caa0cb7e33166e?version=2608.00": {
      "title": "Refactoring of Display Tax Information Report",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/c4ae655255b7434f91caa0cb7e33166e?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:20:06.890Z",
      "summary": "The report Display Tax Information for Country/Region (S_ALR_87012365) displays specific tax information for a country/region. This report provides a compact overview of all tax codes, their conditions, account determinations, and, depending on the mode, TDT-specific information, such as tax groups, tax boxes, and mappings. In addition, tax-specific application logs from SAP Application Log can also be displayed with this report.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The report Display Tax Information for Country/Region (S_ALR_87012365) displays specific tax information for a country/region. This report provides a compact overview of all tax codes, their conditions, account determinations, and, depending on the mode, TDT-specific information, such as tax groups, tax boxes, and mappings. In addition, tax-specific application logs from SAP Application Log can also be displayed with this report."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Review only if this exact feature is used by CFA or sits in a used scope/process. Scope item(s): J58."
        },
        {
          "heading": "How to test",
          "text": "Use SAP's article details to identify the specific changed field, app action, report output, configuration setting, or process behaviour; then run one realistic walkthrough with the owning business role."
        },
        {
          "heading": "Expected result",
          "text": "The changed behaviour appears exactly where SAP describes it and does not break the current CFA user flow. Record relevant, not relevant, or future adoption."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J58 (Accounting and Financial Close) Technical Object Name Tax Information for Country/Region (S_ALR_87012365) Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-GL-GL-F (Value Added Tax (VAT)) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current behaviour for the affected app/process before upgrade if the area is used.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 changed behaviour and whether CFA needs release testing, future adoption, or no action.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Refactoring of Display Tax Information Report",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/c4ae655255b7434f91caa0cb7e33166e?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/ca5c95d850fc43c8b6c372349ef91288?version=2608.00": {
      "title": "Deprecation of Manage Payment Advices (F2550)",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/ca5c95d850fc43c8b6c372349ef91288?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Deprecation of Manage Payment Advices (F2550) | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:20:11.577Z",
      "summary": "As of SAP S/4HANA Cloud Public Edition 2508, there is a successor app for the old version of the Manage Payment Advices (F2550) app: Manage Payment Advices (F2550A).  As of SAP S/4HANA Cloud Public Edition 2608, the old app version Manage Payment Advices (F2550) is deprecated and will be removed in an upcoming release.  For more information about app deprecation, see Deprecation Process for Apps.  We strongly recommend that you switch to the successor app Manage Payment Advices (F2550A) as soon as possible.  The new app provides the following additional features: Enhanced accuracy in extracting payment advice data.  For more information, see Payment Advice Extraction with SAP Document AI.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "As of SAP S/4HANA Cloud Public Edition 2508, there is a successor app for the old version of the Manage Payment Advices (F2550) app: Manage Payment Advices (F2550A).  As of SAP S/4HANA Cloud Public Edition 2608, the old app version Manage Payment Advices (F2550) is deprecated and will be removed in an upcoming release.  For more information about app deprecation, see Deprecation Process for Apps.  We strongly recommend that you switch to the successor app Manage Payment Advices (F2550A) as soon as possible.  The new app provides the following additional features: Enhanced accuracy in extracting payment advice data.  For more information, see Payment Advice Extraction with SAP Document AI.  Tracking of the processing status of payment advice items.  Simultaneous collaboration with multiple users when drafting payment advices."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access the new app, their business users need to have the Manage Payment Advices (F2550A_TRAN) IAM app assigned. Note Since the underlying IAM apps are delivered as inactive, the new experience switch is not displayed to users by default. It only appears when you activate the underlying IAM apps and assign them to your users. We highly recommend doing this to make users aware of the need to switch to the new app version. For more information on how to activate or deactivate IAM apps, refer to How to Activate or Deactivate IAM Apps of Type App Authorization Variant."
        },
        {
          "heading": "Effects on existing data",
          "text": "The enablement of the New Experience Switch entails an automatic expansion of an information popover in the affected apps. If you have your own test automation (RPA bots, etc.) set up in your system, this behavior might have an impact on these tests. For details on how to resolve the impact on your test automates, see Tips for Test Automation."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J59. Use affected app/technical object F2550, F2550A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Deprecation of Manage Payment Advices (F2550): confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Deprecated Functional Localization No localization Scope Item J59 (Accounts Receivable) Technical Object Name App ID (predecessor): F2550 App ID (successor): F2550A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-AR-TRA (Transaction Apps) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Deprecation of Manage Payment Advices (F2550), including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Deprecation of Manage Payment Advices (F2550)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/ca5c95d850fc43c8b6c372349ef91288?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/cd8e849c3dd54060ab7801e668151ab8?version=2608.00": {
      "title": "Administrative Data Available for Condition Records",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/cd8e849c3dd54060ab7801e668151ab8?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Administrative Data Available for Condition Records | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:20:15.274Z",
      "summary": "With this feature, you can view administrative data for condition records for pricing in sales, including the created on date, created by user, last changed on date, and last changed by user.  You can use these fields to search and filter condition records.  In the Manage Prices - Sales (F4111) and Manage Tax Rates - Sales (F6972) apps, you can add these administrative data fields to the filter bar and as table columns using the personalization options.  If you export condition records with these filters, these fields are not included in the spreadsheet.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, you can view administrative data for condition records for pricing in sales, including the created on date, created by user, last changed on date, and last changed by user.  You can use these fields to search and filter condition records.  In the Manage Prices - Sales (F4111) and Manage Tax Rates - Sales (F6972) apps, you can add these administrative data fields to the filter bar and as table columns using the personalization options.  If you export condition records with these filters, these fields are not included in the spreadsheet.  Condition Record for Pricing in Sales OData API has been added with the last changed on date (LastChangeDate) and last changed by user (LastChangedByUser) in the Condition Records entity (A_SlsPrcgConditionRecord).  You can retrieve the administrative data using the API."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access these apps, their business users need to have the following IAM app assigned respectively: Manage Prices - Sales (F4111_TRAN) and Manage Tax Rates - Sales (F6972_TRAN)."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. The screenshot shows the administrative data displayed in the condition record detail page in the apps:"
        },
        {
          "heading": "Effects on existing data",
          "text": "The fields for last changed on date and last changed by user are only populated when a condition record is modified as of this release. For condition records modified before this release, these fields remain empty."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BD9. Use affected app/technical object F4111, F6972."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Administrative Data Available for Condition Records: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item BD9 (Sell from Stock) Technical Object Name App ID: F4111 F6972 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component SD-MD-CM (Conditions) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Administrative Data Available for Condition Records, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Administrative Data Available for Condition Records",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/cd8e849c3dd54060ab7801e668151ab8?version=2608.00"
        },
        {
          "label": "Manage Prices - Sales",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b2a4b6024aa54e30af5a523ff62f43bc.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Manage Tax Rates – Sales",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6923c411b2b240fc9b6913b3ee30ce87.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Condition Record for Pricing in Sales",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/7916962329ee49b293156fffddfb7dd8.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "Screenshot showing the location of admin data in condition record detail page.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loiofcc15f8bfa5d4881b01ad4267dc4be30_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae?version=2608.00": {
      "title": "Deprecated Scope Items",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Deprecated Scope Items | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:20:20.487Z",
      "summary": "The scope items listed here are deprecated. They are no longer offered for scoping and cannot be requested for activation. If the scope items are active, your existing",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The scope items listed here are deprecated. They are no longer offered for scoping and cannot be requested for activation. If the scope items are active, your existing"
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Obsolete Scope Items Columns: 2 selected Clear all Scope Item Successor Scope Item Scope Item Successor Scope Item Predictive Analytics for Purchase Contract Quantity Consumption (1QR) No successor planned Subsidiary as Production Unit and Internal Supplier to Headquarters (21T) Integration of Procurement with External Suppliers (2EJ) or Integration of Sales with External Buyers (2EL) These scope items can be used as an alternative to establish the integration to the subsidiary."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "settings related to the scope items will not be deleted and not updated by SAP. Individual features and functions described by these scope items may still be usable (deprecated features and functions are documented separately). Customers interested in the capabilities of these scope items are therefore recommended to opt for the successor scope items (when available). In case of questions, you may also contact your SAP Account Executive."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 2VO,6VB,1RK,2VN,4AI,2VM,6AV,BH1,2YL,BJ2,1QR,2OQ,3FY,2VL,BH2,4N6,2VJ,21T,2RP,20N,2VK."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Deprecated Scope Items: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Deprecated Functional Localization No localization Scope Item 1QR (Predictive Analytics for Purchase Contract Quantity Consumption), 1RK (Mass Load and Mass Maintenance for Business Partner), 20N (Predictive Analytics Model Training – Supply Chain), 21T (Subsidiary as Production Unit and Internal Supplier to Headquarters, 2OQ (Integration to SAP Enterprise Contract Assembly), 2RP (Electronic Documents), 3FY (Prediction of Delivery Date for Purchase Order Items, 4AI (SAP Ariba Buying), 4N6 (Invoice Processing with SAP Ariba Central Invoice Management), 6AV (Request Regulatory Documentation from Service Provider), 6VB (Asset Accounting – Additional Depreciation Keys for Local GAAPs, BH1 (Corrective Maintenance), BH2 (Emergency Maintenance), BJ2 (Preventive Maintenance), 2VN (SAP EWM Integration – Batch Management), 2VO (SAP EWM Integration – Customer Returns), 2VM (SAP EWM Integration – Delivery-Based Production Integration), 2VJ (SAP EWM Integration – Inbound Processing from Supplier), 2VK (SAP EWM Integration – Outbound Processing to Customer), 2VL (SAP EWM Integration – Stock Transport Orders), 2YL (SAP EWM Integration – Warehouse Stock Handling) Technical Object Name Not applicable Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape."
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Deprecated Scope Items, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae?version=2608.00"
        },
        {
          "label": "3646136",
          "url": "https://help.sap.com/docs/link-disclaimer?site=https://me.sap.com/notes/3646136"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/da53a61d90e04fc9b168409353222d34?version=2608.00": {
      "title": "Bank Profiles Card Deprecated in Bank Relationship Overview",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/da53a61d90e04fc9b168409353222d34?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Bank Profiles Card Deprecated in Bank Relationship Overview | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:20:24.160Z",
      "summary": "With this feature, the Bank Relationship Overview app (F3775) has been enhanced with a new Bank Profiles - By Bank Group card that replaces the existing card.  The new card supports the Account Type filter and uses the FCLM_BAM (Bank Account Management) restriction type for authorization control.  The old Bank Profiles - By Bank Group card is marked as deprecated and will be removed with SAP S/4HANA Cloud Public Edition 2702.  The new card has the following changes: The new bank profile card only includes bank accounts with status 02 (Active), 10 (Closing Request Sent to Bank), 09 (Marked for Closing), and 28 (Opened at Bank).",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, the Bank Relationship Overview app (F3775) has been enhanced with a new Bank Profiles - By Bank Group card that replaces the existing card.  The new card supports the Account Type filter and uses the FCLM_BAM (Bank Account Management) restriction type for authorization control.  The old Bank Profiles - By Bank Group card is marked as deprecated and will be removed with SAP S/4HANA Cloud Public Edition 2702.  The new card has the following changes: The new bank profile card only includes bank accounts with status 02 (Active), 10 (Closing Request Sent to Bank), 09 (Marked for Closing), and 28 (Opened at Bank).  Bank groups with no bank accounts included will no longer be shown in the card.  The following restriction types phased in with SAP S/4HANA Cloud Public Edition 2602 are now active."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access this app, their business users need to have the IAM app Bank Relationship Overview (F3775_TRAN) assigned. The following list outlines the specific restriction types required for accessing individual cards in this app. Please review your user authorizations to ensure users can properly access the affected cards. Bank Profiles - By Bank Group: Restriction type FCLM_BAM (Bank Account Management) Payments - By House Bank (In the Last 90 Days): Restriction type BURKS (Company Code) Bank Fees - By Bank Group: Restriction type FCLM_BF (Bank Fees) Bank Accounts - By Status: Restriction type FCLM_BAM (Bank Account Management) Bank Accounts - By Revision Status: Restriction type FCLM_BAM (Bank Account Management)"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J77. Use affected app/technical object F3775."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Bank Profiles Card Deprecated in Bank Relationship Overview: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Deprecated Functional Localization No localization Scope Item J77 (Advanced Bank Account Management) Technical Object Name App ID: F3775 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FIN-FSCM-CLM-BAM (Bank Account Management) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Bank Profiles Card Deprecated in Bank Relationship Overview, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Bank Profiles Card Deprecated in Bank Relationship Overview",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/da53a61d90e04fc9b168409353222d34?version=2608.00"
        },
        {
          "label": "Bank Relationship Overview",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f9de3636e30747d98eac6d7fb3ee31ef.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/da872c2dc9b84beb8c00b5cbf9329ca8?version=2608.00": {
      "title": "Material Inventory Values - Line Items (New Version)",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/da872c2dc9b84beb8c00b5cbf9329ca8?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Material Inventory Values - Line Items (New Version) | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:20:27.763Z",
      "summary": "With this app, you can analyze the quantities and values of your material inventories down to the line item level.  You can use this app to do the following: See the inventory quantity and value by company code, G/L account, material group, material, business transaction type, posting date, and document number (standard layout) Analyze the line items in detail with attributes such as plant, valuation area, material, and measures.  The measures are a compilation of central characteristics including inventory quantity and amounts in different currency types (for example, functional currency).",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this app, you can analyze the quantities and values of your material inventories down to the line item level.  You can use this app to do the following: See the inventory quantity and value by company code, G/L account, material group, material, business transaction type, posting date, and document number (standard layout) Analyze the line items in detail with attributes such as plant, valuation area, material, and measures.  The measures are a compilation of central characteristics including inventory quantity and amounts in different currency types (for example, functional currency)."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access this app, their business users need to have the following IAM app assigned: Material Inventory Values - Line Items (New Version) (F1423B_TRAN)."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1ZT. Use affected app/technical object F1423B."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Material Inventory Values - Line Items (New Version): confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item 1ZT (Managing Material Price Changes and Inventory Values) Technical Object Name App ID: F1423B Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CO-FIO-ML (Material Subledger) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Material Inventory Values - Line Items (New Version), including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Material Inventory Values - Line Items (New Version)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/da872c2dc9b84beb8c00b5cbf9329ca8?version=2608.00"
        },
        {
          "label": "Material Inventory Values - Line Items (New Version)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/bef78885c879469ba00724c138411a29.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "Object page with example data of the Material Inventory Values - Line Items (New Version) app.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio2daa8f2657c6442eb94c6baa650981c4_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/daa7a4a9f3394756bab184a03cef3577?version=2608.00": {
      "title": "Performance Improvement for Sales Document APIs",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/daa7a4a9f3394756bab184a03cef3577?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Performance Improvement for Sales Document APIs | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:20:32.294Z",
      "summary": "Previously, all inbound APIs for sales documents called pricing twice per request before saving the sales document if you used group conditions with pricing scales. This is unnecessary and has an impact on performance. This feature ensures that pricing is only called once per request before saving the sales document.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "Previously, all inbound APIs for sales documents called pricing twice per request before saving the sales document if you used group conditions with pricing scales. This is unnecessary and has an impact on performance. This feature ensures that pricing is only called once per request before saving the sales document."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Relevant where CFA has custom fields, custom logic, APIs, CDS views, integrations, BTP apps, or side-by-side consumers touching this object or process. Scope item(s): 6KO,BDA,BD9,OD9,1IU."
        },
        {
          "heading": "How to test",
          "text": "Find the CFA extension/integration that touches this area, then run the smallest consuming flow: activation/syntax check, API call, report/app execution, or iFlow test. Compare output against a known pre-upgrade result. Validate the named API/object SalesOrderBulkRequest_In, OrderRequest_In, CustomerReturnBulkRequest_In, CreditMemoRequest, DebitMemoRequest with one realistic payload or consumer."
        },
        {
          "heading": "Expected result",
          "text": "The extension, API, CDS consumer, or integration still activates and runs without syntax, authorisation, payload, or runtime errors; output matches the expected business result."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item BD9 (Sell from Stock) BDA (Free of Charge Delivery) 6KO (Opportunity to Order with SAP Sales Cloud Version 2) OD9 (Sell from Stock) 1IU (Customer Consignment) Technical Object Name API: API_SALES_QUOTATION_SRV API_SALES_CONTRACT_SRV SalesContract API_SALES_SCHEDULING_AGREEMENT SchedgAgrmtDlivSchedule_In SchedulingAgreementConsignment API_SALES_ORDER_SRV SalesOrder SalesOrderBulkRequest_In API_SALES_ORDER_SIMULATION_SRV SalesOrderSimulation OrderRequest_In API_SALES_ORDER_WITHOUT_CHARGE_SRV API_SALESORDERWITHOUTCHARGE API_CUSTOMER_RETURN_SRV CustomerReturn CustomerReturnBulkRequest_In API_CUSTOMER_RETURN_SIMULATION_SRV CustomerReturnSimulation API_CREDIT_MEMO_REQUEST_SRV CreditMemoRequest API_CREDIT_MEMO_REQ_SIMULATION_SRV API_DEBIT_MEMO_REQUEST_SRV DebitMemoRequest API_DEBIT_MEMO_REQ_SIMULATION_SRV Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape."
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the existing custom object/API/CDS/integration behaviour and a known successful output or payload before upgrade.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the post-upgrade activation/runtime result and reconcile it to the expected business output.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Performance Improvement for Sales Document APIs",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/daa7a4a9f3394756bab184a03cef3577?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/db20cf8bc31c4a849c2d93ab62246c27?version=2608.00": {
      "title": "Rating Procedures Supported for Banks",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/db20cf8bc31c4a849c2d93ab62246c27?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Rating Procedures Supported for Banks | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:20:36.235Z",
      "summary": "New bank ratings using the rating procedure approach are supported in bank-related apps, including the Manage Banks - Cash Management (F1574A) app and the Treasury Executive Dashboard (F4316) app.  This approach enables you to use different rating procedures to represent ratings for banks from various external agencies or your company-specific standards.  You can maintain multiple ratings with different validity periods under each rating procedure.  With this feature, you are able to get a more comprehensive view of a bank in terms of its creditworthiness from various perspectives in the new Ratings tab.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "New bank ratings using the rating procedure approach are supported in bank-related apps, including the Manage Banks - Cash Management (F1574A) app and the Treasury Executive Dashboard (F4316) app.  This approach enables you to use different rating procedures to represent ratings for banks from various external agencies or your company-specific standards.  You can maintain multiple ratings with different validity periods under each rating procedure.  With this feature, you are able to get a more comprehensive view of a bank in terms of its creditworthiness from various perspectives in the new Ratings tab."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To define ratings for banks, users must have the IAM app Maintain Business Partner (BP_TRAN) assigned."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available."
        },
        {
          "heading": "Effects on existing data",
          "text": "Previously, users could maintain a rating for a business partner in the Maintain Business Partner (BP) app and display the data in bank-related apps.  With the deprecation of the Rating field in the Maintain Business Partner app, customers who have not utilized the field before will be unable to access it.  However, customers who have previously created at least one rating value will retain access to the functionality and remain unaffected by this update."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BFA,J77,1MN. Use affected app/technical object F1574A, F4316."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Rating Procedures Supported for Banks: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item BFA (Basic Bank Account Management) J77 (Advanced Bank Account Management) 1MN (SAP Fiori Analytical Apps for Treasury and Risk Management) Technical Object Name App ID: F1574A F4316 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FIN-FSCM-CLM-BAM (Bank Relationship Management) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Rating Procedures Supported for Banks, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Rating Procedures Supported for Banks",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/db20cf8bc31c4a849c2d93ab62246c27?version=2608.00"
        },
        {
          "label": "Banks by Rating - Cube",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/71640f2974724d4f98fd87ef81f86b0b.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Banks by Rating - Query",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/60b7ecb06d3a43d9ad80561fb8e00b59.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Maintain Business Partner",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/beccd7570afba073e10000000a441470.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Manage Banks - Cash Management",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a4e4d58b503d4ab69f63d7ec92f3b1f9.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Treasury Executive Dashboard",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6c9a4be0b43844a5a80a2f1756bd2b44.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "The new Ratings tab showing ratings from different rating procedures with their validity periods.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio7181fff8cc4145f29f374a199e7ec3e5_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/db5520b3d19b484291a8d2f5b746a53b?version=2608.00": {
      "title": "Personalized Filtering for Enhanced WBS Element Search",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/db5520b3d19b484291a8d2f5b746a53b?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Personalized Filtering for Enhanced WBS Element Search | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:20:41.188Z",
      "summary": "To provide you with a more personalized experience, when you return to the app Enhanced WBS Element Search, we now automatically apply your last filter criteria for WBS Element Search Type. For more details on WBS elements and the integration, see the SAP Integration with Concur Solutions – Setup Guide.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "To provide you with a more personalized experience, when you return to the app Enhanced WBS Element Search, we now automatically apply your last filter criteria for WBS Element Search Type. For more details on WBS elements and the integration, see the SAP Integration with Concur Solutions – Setup Guide."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Relevant where CFA has custom fields, custom logic, APIs, CDS views, integrations, BTP apps, or side-by-side consumers touching this object or process. Scope item(s): 1M1. Use affected app/technical object F4856, F8690, F8636."
        },
        {
          "heading": "How to test",
          "text": "Find the CFA extension/integration that touches this area, then run the smallest consuming flow: activation/syntax check, API call, report/app execution, or iFlow test. Compare output against a known pre-upgrade result."
        },
        {
          "heading": "Expected result",
          "text": "The extension, API, CDS consumer, or integration still activates and runs without syntax, authorisation, payload, or runtime errors; output matches the expected business result."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item 1M1 (Travel Expense Processing with SAP Concur) Technical Object Name App ID: F4856 CTE_SETUP F8690 CTE_POST_MONI CTE_MONI F8636 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component BNS-CON-SE-S4-FIN (Concur S/4HANA Financial Integration) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the existing custom object/API/CDS/integration behaviour and a known successful output or payload before upgrade.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the post-upgrade activation/runtime result and reconcile it to the expected business output.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Personalized Filtering for Enhanced WBS Element Search",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/db5520b3d19b484291a8d2f5b746a53b?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/dbde98a4012b445ca591781ed98b17b4?version=2608.00": {
      "title": "Enable and Consider Changes from Reorganization in Advanced Valuation Jobs",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/dbde98a4012b445ca591781ed98b17b4?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Enable and Consider Changes from Reorganization in Advanced Valuation Jobs | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:20:46.189Z",
      "summary": "Changes that arise from reorganization, carried out in the Manage Organizational Changes app (ID: F4567) aren't automatically recognized and processed by Advanced Valuation in Financial Accounting.  The invoice balances are moved to the correct profit centers by profit center reorganization but the valuations posted by advanced valuation jobs aren't moved by profit center reorganization.  To have previously posted valuations of advanced valuation jobs on the same profit centers as the reorganized balances, you have to activate the feature Enable and Consider Changes from Reorganization in Advanced Valuation Jobs (FINS_FI_CLS_REORG).",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "Changes that arise from reorganization, carried out in the Manage Organizational Changes app (ID: F4567) aren't automatically recognized and processed by Advanced Valuation in Financial Accounting.  The invoice balances are moved to the correct profit centers by profit center reorganization but the valuations posted by advanced valuation jobs aren't moved by profit center reorganization.  To have previously posted valuations of advanced valuation jobs on the same profit centers as the reorganized balances, you have to activate the feature Enable and Consider Changes from Reorganization in Advanced Valuation Jobs (FINS_FI_CLS_REORG).  Caution This feature only works for accounts managed on an open-item basis."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "This feature won't automatically be available in your system but requires that you activate the feature Enable and Consider Changes from Reorganization in Advanced Valuation Jobs (FINS_FI_CLS_REORG).  For more information, see Activate Features.  This feature doesn't work for accounts not managed on an open-item basis such as in event-based revenue recognition and real estate.  When the feature isn't active, advanced valuations detect documents that might have postings stemming from profit center reorganization and issue warning messages.  But you can still process the documents as if there was no profit center reorganization.  When the feature is active, the corrections are posted as balance sheet to balance sheet transfer, P&L accounts remain untouched because profit center reorganization is an organizational move."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J58. Use affected app/technical object F4567."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Enable and Consider Changes from Reorganization in Advanced Valuation Jobs: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item J58 (Accounting and Financial Close) Technical Object Name Feature Toggle: FINS_FI_CLS_REORG Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-GL-GL-G (Closing Operations/Period End) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Enable and Consider Changes from Reorganization in Advanced Valuation Jobs, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Enable and Consider Changes from Reorganization in Advanced Valuation Job",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/dbde98a4012b445ca591781ed98b17b4?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/dca7c98c94e64e2db3cc6087bf0aa400?version=2608.00": {
      "title": "Manage Sales Orders - Version 2: Various Enhancements",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/dca7c98c94e64e2db3cc6087bf0aa400?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Manage Sales Orders - Version 2: Various Enhancements | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:20:51.050Z",
      "summary": "Several features were added to this app.  The following changed: In the list of all sales orders, you can now filter for a specific net value (or range of values).  To be able to filter for the net value, add the filter for the document currency first, select a value, and then filter for the net value.  When you create or edit a sales order, you can now select multiple items in the items table and update their prices, set or remove a rejection reason, and set or remove a billing block in one go.  Note If your key user creates custom action buttons for your UIs, these buttons can now also be enabled for multiple items.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "Several features were added to this app.  The following changed: In the list of all sales orders, you can now filter for a specific net value (or range of values).  To be able to filter for the net value, add the filter for the document currency first, select a value, and then filter for the net value.  When you create or edit a sales order, you can now select multiple items in the items table and update their prices, set or remove a rejection reason, and set or remove a billing block in one go.  Note If your key user creates custom action buttons for your UIs, these buttons can now also be enabled for multiple items.  When you use rounding profiles in customer material records or product master records, the system rounds the requested quantity according to your specifications."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access this app, their business users need to have the following IAM app assigned: Manage Sales Orders (Version 2) (F3893_TRAN)."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. When you filter for the document currency and the net value, it looks like this: When you select more than one item in the items table, you can choose the following: When you display the column for the rounded quantity in a schedule line, it looks like this: When you add the filters and table columns for the references in the list of sales orders, it looks like this: When you add the table columns for the customer reference and the purchase order item for the ship-to party in an item, it looks like this: When you change a partner address, the popup window now looks as follows, with new fields highlighted in red:"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BD9. Use affected app/technical object F3893."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Manage Sales Orders - Version 2: Various Enhancements: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item BD9 (Sell from Stock) Technical Object Name App ID: F3893 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component SD-SLS-SO (Sales Orders) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Manage Sales Orders - Version 2: Various Enhancements, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Manage Sales Orders - Version 2: Various Enhancements",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/dca7c98c94e64e2db3cc6087bf0aa400?version=2608.00"
        },
        {
          "label": "Manage Sales Orders - Version 2",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/ae4138d6a804446faa0a249f3a7e18d8.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "When you add a filter for Swiss franc and a filter for net values larger than 1,000, the list only contains sales order that fit these criteria.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loioe0a439cadb534e708a58b97825a0af80_LowRes.png"
        },
        {
          "label": "When you select more than one item in edit mode, you update the prices or adapt the rejection reason and billing block.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio2851282f2fd14e44b6ed6cd19e65b602_LowRes.png"
        },
        {
          "label": "The rounded quantity is a column next to other table columns displaying, for example, the requested quantity and the confirmed quantity.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio863e3593f32b4bfd93df2b8e71c243b9_LowRes.png"
        },
        {
          "label": "You can see additional filter fields and table columns for Your Reference and Your Reference (Ship-to Party).",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio151d1c30c3cf45aa941ce4ee206610c5_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/dda0023d668844aca3206c7a273d521d?version=2608.00": {
      "title": "Process Purchase Requisitions - Deprecated",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/dda0023d668844aca3206c7a273d521d?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Process Purchase Requisitions - Deprecated | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:20:54.931Z",
      "summary": "This app is deprecated and will be removed from the SAP Fiori Launchpad in a future release. We recommend that you switch to the successor app Process Purchase Requisitions at your earliest convenience. Note In both involved apps, the New Experience Switch behavior is enabled. If business end users have authorizations for both the old and the new app, they can also switch between both app versions. For more information, see Switching to a New App Version.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "This app is deprecated and will be removed from the SAP Fiori Launchpad in a future release. We recommend that you switch to the successor app Process Purchase Requisitions at your earliest convenience. Note In both involved apps, the New Experience Switch behavior is enabled. If business end users have authorizations for both the old and the new app, they can also switch between both app versions. For more information, see Switching to a New App Version."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To be able to access the Process Purchase Requisitions app, you need to have the following IAM app assigned: Process Purchase Requisition Version 2 (F1048A_TRAN) Note Since the underlying IAM apps are delivered as inactive, the new experience switch is not displayed to users by default. It only appears when you activate the underlying IAM apps and assign them to your users. We highly recommend doing this to make users aware of the need to switch to the new app version. For more information on how to activate or deactivate IAM apps, refer to How to Activate or Deactivate IAM Apps of Type App Authorization Variant."
        },
        {
          "heading": "Effects on existing data",
          "text": "The enablement of the New Experience Switch entails an automatic expansion of an information popover in the affected apps. If you have your own test automation (RPA bots, etc.) set up in your system, this behavior might have an impact on these tests. For details on how to resolve the impact on your test automates, see Tips for Test Automation."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 18J. Use affected app/technical object F1048, F1048A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Process Purchase Requisitions - Deprecated: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Deprecated Functional Localization No localization Scope Item 18J (Requisitioning) Technical Object Name App ID (predecessor): F1048 App ID (successor): F1048A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-FIO-PUR-REQ-SOC (Fiori UI for Sourcing Purchase Requisitions) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Process Purchase Requisitions - Deprecated, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Process Purchase Requisitions - Deprecated",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/dda0023d668844aca3206c7a273d521d?version=2608.00"
        },
        {
          "label": "Switching to a New App Version",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/3e8bbaec0b544b52bc4d1c9db2b1d1db.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "How to Activate or Deactivate IAM Apps of Type App Authorization Variant",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/61f5a1ac89e04b68aaf755c883f1bbac.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Tips for Test Automation",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1c2371d12a41430e8cdee1ecd94f0eda.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Process Purchase Requisitions (Deprecated)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b5508457f38e0322e10000000a44147b.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Process Purchase Requisitions (V2)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b9ef8f7ff6084b63a7bf59dac8de06c7.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e08cd31efdfa40a2a384f9678bf807f7?version=2608.00": {
      "title": "Deprecation of Interpretation Algorithms",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e08cd31efdfa40a2a384f9678bf807f7?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Deprecation of Interpretation Algorithms | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:20:58.656Z",
      "summary": "The interpretation algorithms listed below have been deprecated in SAP S/4HANA Cloud Public Edition 2502.  Deprecated interpretation algorithms are no longer recommended when configuring electronic bank statement processing.  For some of these algorithms, direct replacement options are available.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The interpretation algorithms listed below have been deprecated in SAP S/4HANA Cloud Public Edition 2502.  Deprecated interpretation algorithms are no longer recommended when configuring electronic bank statement processing.  For some of these algorithms, direct replacement options are available.  The following interpretation algorithms are deprecated: 014: Outgoing Check: Check management in FI or HR 022: BZÜ bank transfer method (Germany only) with document number 023: BZÜ bank transfer method (Germany only) with reference document number 024: Reserved 025: Invoice List 027: Reference number TITO 032: Search for EDI Payment Advice 033: Search for Payment Advice Notes) 034: Finland Reference No."
        },
        {
          "heading": "Configuration details from SAP",
          "text": ", including posting rules in the Make Global Settings for Electronic Bank Statement (101024) configuration activity and processing rules in the Manage Processing Rules – For Bank Statements (F3555) app.  Where a deprecated interpretation algorithm is used, update posting rules by selecting a supported interpretation algorithm that has not been deprecated.  In processing rules, you can alternatively use a supported interpretation algorithm or, where appropriate, an allocation algorithm.  Direct replacement options are available for the following deprecated interpretation algorithms: Deprecated Algorithm Recommended Alternative 014: Outgoing Check: Check Management in FI or HR 411: Outgoing Check: Extended Search Function for Check No."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J59. Use affected app/technical object F3555."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Deprecation of Interpretation Algorithms: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Deprecated Functional Localization No localization Scope Item J59 (Accounts Receivable) Technical Object Name App ID: F3555 Configuration Activity ID: 101024 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-AR (Fiori UI for Accounts Receivable) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        },
        {
          "heading": "Configuration / SSCUI to check",
          "text": "ID: 101024 | Configuration Activity ID: 101024 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Deprecation of Interpretation Algorithms, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Deprecation of Interpretation Algorithms",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e08cd31efdfa40a2a384f9678bf807f7?version=2608.00"
        },
        {
          "label": "Overview on All Predelivered Processing Instructions",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/ed31be4969ce485085da152c3a3e8062.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Interpretation Algorithms",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4dc5efb40c381c36e10000000a42189b.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Allocation Algorithms",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e06a7925f954416793cd34e0e9c667a1.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Manage Processing Rules - For Bank Statements",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d6fe6526b26f46e59d9d1dd0f7427fe3.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e0d354cf9a7f42bba34e459b2725e7fd?version=2608.00": {
      "title": "New and Changed Fields in the Display Payment Card Data App",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e0d354cf9a7f42bba34e459b2725e7fd?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "New and Changed Fields in the Display Payment Card Data App | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:21:03.734Z",
      "summary": "With this feature, new and changed fields are available in the Display Payment Card Data app.  Changes to the User Interface The following changes are visible when you navigate to the card payment details: The journal entry number now appears in the page title instead of the payment card number.  The Masked Card ID field has been replaced by the Card Number field in the header area and throughout the app.  The Payment Card Category field has been removed from the header area.  The Entry Mode field has been removed from the Entry Details area.  The Merchant ID field has been removed from the Entry Details area and replaced by the Merchant Alias field.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, new and changed fields are available in the Display Payment Card Data app.  Changes to the User Interface The following changes are visible when you navigate to the card payment details: The journal entry number now appears in the page title instead of the payment card number.  The Masked Card ID field has been replaced by the Card Number field in the header area and throughout the app.  The Payment Card Category field has been removed from the header area.  The Entry Mode field has been removed from the Entry Details area.  The Merchant ID field has been removed from the Entry Details area and replaced by the Merchant Alias field.  The Journal Entry field has been removed from the Entry Details area as the journal entry number now appears in the page title.  A new field, Reposted, has been added to the Settlement area."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): 1S2,2LZ,J59. Use affected app/technical object F2935."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item 1S2 (Digital Payments) 2LZ (External Digital Payments) J59 (Accounts Receivable) Technical Object Name App ID: F2935 Application Component FI-FIO-AR (Fiori UI for Accounts Receivable) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - New and Changed Fields in the Display Payment Card Data App",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e0d354cf9a7f42bba34e459b2725e7fd?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e1e2f3fd478f4d889f2e9d73cd15fea3?version=2608.00": {
      "title": "Configuration: Define Currency Settings for Activity Allocation",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e1e2f3fd478f4d889f2e9d73cd15fea3?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Configuration: Define Currency Settings for Activity Allocation | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:21:08.819Z",
      "summary": "The",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The"
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Prerequisites This currency conversion logic applies for postings (for both sender and receiver amounts) that meet the following prerequisites: The receiver is a profitability segment, cost center, WBS element, service contract, or a service order item Only plan cost rates or service cost rates are used Note This logic doesn't apply to manual prices or actual cost rates."
        },
        {
          "heading": "Configuration details from SAP",
          "text": ": Define Currency Settings for Activity Allocation"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J54."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Configuration: Define Currency Settings for Activity Allocation: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item J54 (Overhead Cost Accounting) BNA (Period-End Closing - Projects) Technical Object Name Configuration activity ID: 107337 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CO-OM (Overhead Cost Controlling) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        },
        {
          "heading": "Configuration / SSCUI to check",
          "text": "ID 103379 | ID: 107337 | configuration activity Define Currency Settings for Activity Allocation offers a new currency conversion logic for direct activity allocation and timesheet postings | configuration activity Define Currency Settings for Ledgers and Company Codes (ID 103379) accordingly for currency conversion of amounts from direct activity allocations and timesheet postings | Configuration activity ID: 107337 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Configuration: Define Currency Settings for Activity Allocation, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Configuration: Define Currency Settings for Activity Allocation",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e1e2f3fd478f4d889f2e9d73cd15fea3?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "This screen is displayed when you choose \"New Entry\". Here you can mark the checkbox for activating G/L conversion for currency conversion in activity allocations.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio3f6f8f340f314cdab68fc0e622ed28c3_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e4937372586647ba9182c3bcf4fd01d6?version=2608.00": {
      "title": "Additional Senders for the Posted Amounts Rule in Universal Allocation",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e4937372586647ba9182c3bcf4fd01d6?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Additional Senders for the Posted Amounts Rule in Universal Allocation | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:21:14.673Z",
      "summary": "In the Manage Allocations app, you can now define additional sender restriction criteria when using the Posted Amounts sender rule in an allocation segment.  Previously, only a limited set of fields was supported as sender objects.  With this enhancement, you can add the following optional fields as further restrictions on the sender side: Functional Area Balance Transactional Currency Profit Center (available only for the Cost Centers and Margin Analysis allocation contexts) Reporting Segment On the Senders tab of an allocation segment, an Add button lets you select one or more of these fields.  For each field, you can specify a single value, an interval, or a group.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "In the Manage Allocations app, you can now define additional sender restriction criteria when using the Posted Amounts sender rule in an allocation segment.  Previously, only a limited set of fields was supported as sender objects.  With this enhancement, you can add the following optional fields as further restrictions on the sender side: Functional Area Balance Transactional Currency Profit Center (available only for the Cost Centers and Margin Analysis allocation contexts) Reporting Segment On the Senders tab of an allocation segment, an Add button lets you select one or more of these fields.  For each field, you can specify a single value, an interval, or a group.  This makes it possible, for example, to restrict an allocation to a specific journal entry rather than allocating the entire sender balance."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations This function does not require additional authorizations. For more information about authorizations in Universal Allocation, see IAM in Universal Allocation."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "for the cycle to execute correctly. This enhancement is only available in the new version of the Manage Allocations app. The applied sender restrictions are visible in the Senders tab of the Allocation Results app and are reflected in the Manage Allocation Changes app. Excel upload and download are supported for cycles that use these restrictions. Changes to the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to configuration and extensibility options available. The new Add button on the Senders tab of the segment definition in Manage Allocations: The new optional fields to add: The fields added as senders:"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J54,2QL,J55. Use affected app/technical object F3338A, F3548, F4363, F4022, F4523, F4935, F5596, F7272, F8715."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Additional Senders for the Posted Amounts Rule in Universal Allocation: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J54 (Overhead Cost Accounting), J55 (Margin Analysis), 2QL (Universal Allocation) Technical Object Name App ID: F3338A F3548 F4363 F4022 F4523 F4935 F5596 F7272 F8715 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FIN-UA (Universal Allocation) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Additional Senders for the Posted Amounts Rule in Universal Allocation, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Additional Senders for the Posted Amounts Rule in Universal Allocation",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e4937372586647ba9182c3bcf4fd01d6?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio4c753a3db04a4bc68f429ed707817b8d_LowRes.png"
        },
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio4ea9758f30e740c38e764d5eaf59e32f_LowRes.png"
        },
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loiof9000c521a494496875145e2e84c23a6_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e4ed76c3022c4a099ea94b30c7d428c2?version=2608.00": {
      "title": "Define Priority and Reason for Products",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e4ed76c3022c4a099ea94b30c7d428c2?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Define Priority and Reason for Products | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:21:19.478Z",
      "summary": "You can define the priority and the reason when creating or editing a product in the Manage Mass Maintenance - Products app.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "You can define the priority and the reason when creating or editing a product in the Manage Mass Maintenance - Products app."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): 1RM. Use affected app/technical object F9335."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item 1RM (Mass Load and Mass Maintenance for Product) Technical Object Name App ID: F9335 (Manage Mass Maintenance - Products) Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CA-MDG (Master Data Governance) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Define Priority and Reason for Products",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e4ed76c3022c4a099ea94b30c7d428c2?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e52baa9cfe41439a8d080da9b5a07671?version=2608.00": {
      "title": "Schedule Jobs for Cash Register: Replication Mode",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e52baa9cfe41439a8d080da9b5a07671?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Schedule Jobs for Cash Register: Replication Mode | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:21:37.917Z",
      "summary": "The Schedule Jobs for Cash Register app now has an improved user interface (UI): Replication Mode.  This feature replaces Replicate from Accounting.  The Replication Mode has two options: Reprocess Cash Register Only and Import from Data Source.  If you select Reprocess Cash Register Only, you can retrieve the following data from the cash register: Flow Type Planning Type / Date Liquidity Item Bank Account You can use the Cash Register Selection Criteria for this option.  If you select Import from Data Source, the system replicates data from Accounting to the cash register.  In this case, you must derive the Flow Type and Planning Type / Date in the cash register.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The Schedule Jobs for Cash Register app now has an improved user interface (UI): Replication Mode.  This feature replaces Replicate from Accounting.  The Replication Mode has two options: Reprocess Cash Register Only and Import from Data Source.  If you select Reprocess Cash Register Only, you can retrieve the following data from the cash register: Flow Type Planning Type / Date Liquidity Item Bank Account You can use the Cash Register Selection Criteria for this option.  If you select Import from Data Source, the system replicates data from Accounting to the cash register.  In this case, you must derive the Flow Type and Planning Type / Date in the cash register.  You can use the FI Selection Criteria for this option.  Examples of the User Interface Note The screenshots are examples to make the described change visible."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. Here's what this looks like in the system: Replication Mode Reprocess Cash Register Only Import from Data Source"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BFB,J78. Use affected app/technical object F8948."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Schedule Jobs for Cash Register: Replication Mode: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item BFB (Basic Cash Operations) J78 (Advanced Cash Operations) Technical Object Name App ID: F8948 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FIN-FSCM-CLM (Cash Management) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Schedule Jobs for Cash Register: Replication Mode, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Schedule Jobs for Cash Register: Replication Mode",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e52baa9cfe41439a8d080da9b5a07671?version=2608.00"
        },
        {
          "label": "Schedule Jobs for Cash Register",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/8863c4c87fb141f19eac607cc2787d6c.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio40b4997b563349e6a5f93a1f826ef89f_LowRes.png"
        },
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loiodd81bbc83c82423588ed5125bff5031a_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e5b4cdcdea6749de9499bb701b6b2493?version=2608.00": {
      "title": "Comments in Manage Profit Centers",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e5b4cdcdea6749de9499bb701b6b2493?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Comments in Manage Profit Centers | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:21:42.596Z",
      "summary": "The Manage Profit Centers (New Version) app now includes a Comments feature on the profit center detail page.  Users can post, view, and delete comments within individual validity periods, enabling in-app discussions and information sharing.  Comments are stored at the validity period level.  The new Comments section appears on the profit center detail page.  To add a comment, choose Edit, enter your text, and then choose Send.  If you Save without sending the comment, the comment is lost.  Each comment shows the author’s name, initials, and a date and time stamp.  Long comments can be expanded with More and collapsed with Less.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The Manage Profit Centers (New Version) app now includes a Comments feature on the profit center detail page.  Users can post, view, and delete comments within individual validity periods, enabling in-app discussions and information sharing.  Comments are stored at the validity period level.  The new Comments section appears on the profit center detail page.  To add a comment, choose Edit, enter your text, and then choose Send.  If you Save without sending the comment, the comment is lost.  Each comment shows the author’s name, initials, and a date and time stamp.  Long comments can be expanded with More and collapsed with Less.  You can edit or delete any comment, regardless of who posted it."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access this app, their business users need to have one of the following IAM apps assigned: Manage Profit Centers (New Version) (F3516A_GL_TRAN). Manage Profit Centers (New Version) (F3516A_TRAN). To authorize display only access, assign Display Profit Centers (New Version) (F3516A_03_TRAN)."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. The new comment section with an example comment:"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J58. Use affected app/technical object F3516A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Comments in Manage Profit Centers: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J58 (Accounting and Financial Close) Technical Object Name App ID: F3516A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component EC-PCA-MD (Master Data) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Comments in Manage Profit Centers, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Comments in Manage Profit Centers",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e5b4cdcdea6749de9499bb701b6b2493?version=2608.00"
        },
        {
          "label": "Manage Profit Centers (New Version)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/afe6dfa42d794a5388151bb7f2d508f9.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "Comparison of comment indicators on a timeline before and after shortening.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio37b6e2fcda844d12937b75e3671c06bf_LowRes.png"
        },
        {
          "label": "Timeline comparison showing validity periods before and after split, with comments A and B marked.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio23dd67428749490db381a4c59cde7a7f_LowRes.png"
        },
        {
          "label": "Timeline comparison showing validity periods before and after split, with comment markers A and B.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio4ad6ea8ef5bd439dbd9da43d171e6012_LowRes.png"
        },
        {
          "label": "Timeline comparison showing comments before and after split across validity periods.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio4409428820ac448f87a8b331bedcbf5e_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e7931f722faa4e839c5311411b1eaed0?version=2608.00": {
      "title": "Storage Location in Process Purchase Requisitions",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e7931f722faa4e839c5311411b1eaed0?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Storage Location in Process Purchase Requisitions | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:21:46.541Z",
      "summary": "With this release, a new field Storage Location is now available in the Process Purchase Requisitions app. The Storage Location field contains the details of the storage location. Examples of the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this release, a new field Storage Location is now available in the Process Purchase Requisitions app. The Storage Location field contains the details of the storage location. Examples of the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. In the Process Purchase Requisitions app, you can view and use Storage Location using Adapt Filters and view it in the list page by selecting it via the Settings and using the Show More per Row. Storage Location in Process Purchase Requisitions"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): 18J. Use affected app/technical object F1048A."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item 18J (Requisitioning) Technical Object Name App ID: F1048A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-FIO-PUR-REQ-SOC (Fiori UI for Sourcing Purchase Requisitions) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Storage Location in Process Purchase Requisitions",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e7931f722faa4e839c5311411b1eaed0?version=2608.00"
        },
        {
          "label": "Process Purchase Requisitions (V2)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b9ef8f7ff6084b63a7bf59dac8de06c7.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loiof823f740f3c44b14819272f994f2541b_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e834a2d72eb646f2b9ed793bebbe6f80?version=2608.00": {
      "title": "Postprocess Event-Based Postings - Settlement",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e834a2d72eb646f2b9ed793bebbe6f80?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Postprocess Event-Based Postings - Settlement | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:21:52.507Z",
      "summary": "With this app, you can analyze, cancel and repost event-based settlements from investment projects to assets under construction (AuC).  You use this app to identify and resolve issues that occur during event‑based settlement from investment projects to assets under construction (AuC).  The app enables you to review failed settlement postings, analyze the root cause, and trigger the settlement posting once the issue has been corrected.  In addition, you can cancel and repost settlement documents that were created in error.  The app supports end‑to‑end transparency and ensures the completeness and correctness of event-based settlement postings.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this app, you can analyze, cancel and repost event-based settlements from investment projects to assets under construction (AuC).  You use this app to identify and resolve issues that occur during event‑based settlement from investment projects to assets under construction (AuC).  The app enables you to review failed settlement postings, analyze the root cause, and trigger the settlement posting once the issue has been corrected.  In addition, you can cancel and repost settlement documents that were created in error.  The app supports end‑to‑end transparency and ensures the completeness and correctness of event-based settlement postings."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "If you want to use event-based settlement, certain restrictions apply. For more information, see SAP Note 3615670 . Authorizations To enable users to access this app, their business users need to have the following IAM app assigned: Postprocess Event-Based Settlements (F8485_TRAN)"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BFH,1GF,J62. Use affected app/technical object F8485."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Postprocess Event-Based Postings - Settlement: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item 1GF (Asset Under Construction – Group Ledger IFRS) BFH (Asset Under Construction) BNA (Period-End Closing - Projects) J54 (Overhead Cost Controlling) J62 (Asset Accounting) Technical Object Name App ID: F8485 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component IM-FA (Investment Management) CO-OM (Overhead Cost Controlling) FI-AA (Asset Accounting) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Postprocess Event-Based Postings - Settlement, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Postprocess Event-Based Postings - Settlement",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e834a2d72eb646f2b9ed793bebbe6f80?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "This screenshot shows the filter bar, results list, and options for posting and reversing settlement",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio8eebe334b6214485ae431d10b00add03_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e89b492486104bc7afbd068aaf611753?version=2608.00": {
      "title": "Deprecation of \"Manage Legacy Assets\" App (F7280)",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e89b492486104bc7afbd068aaf611753?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:21:56.411Z",
      "summary": "As of SAP S/4HANA Cloud Public Edition 2602, there is a successor app for the old app version of app Manage Legacy Assets (F7280): The successor app is Manage Legacy Assets (F7280A).  As of SAP S/4HANA Cloud Public Edition 2608, the old app version F7280 is deprecated and will be deleted in a future release.  The features of the old app and its successor app are largely the same.  However, the successor app version offers the latest technology and design.  We strongly recommend that you switch to the successor app F7280A as soon as possible.  Note In both involved apps, the New Experience Switch behavior is enabled.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "As of SAP S/4HANA Cloud Public Edition 2602, there is a successor app for the old app version of app Manage Legacy Assets (F7280): The successor app is Manage Legacy Assets (F7280A). As of SAP S/4HANA Cloud Public Edition 2608, the old app version F7280 is deprecated and will be deleted in a future release. The features of the old app and its successor app are largely the same. However, the successor app version offers the latest technology and design. We strongly recommend that you switch to the successor app F7280A as soon as possible. Note In both involved apps, the New Experience Switch behavior is enabled. If business end users have authorizations for both the old and the new app, they can also switch between both app versions. For more information, see Switching to a New App Version."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access the new app version, their business users need to have the following IAM app assigned: Manage Legacy Assets (F7280A_TRAN). The IAM apps for the new and the old app version are assigned to the same business catalog: Asset Accounting - Master Data for Legacy Assets (SAP_FIN_BC_AA_MDAT_LDT_PC). Caution Since the underlying IAM apps are delivered as inactive, the New Experience Switch is not displayed to users by default. It only appears when you activate the underlying IAM apps and assign them to your users. We highly recommend doing this to make users aware of the need to switch to the new app version. For more information on how to activate or deactivate IAM apps, see How to Activate or Deactivate IAM Apps of Type App Authorization Variant."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "Extensibility: Enabling Custom Fields for Old and New App Version Regardless of whether you already use custom fields in the old app version or whether you want to use custom fields for the first time in the new app version, you must check the settings for the Use Declaration and, if necessary, include your custom fields on the new UI.  Caution You must check and, if necessary, change the mentioned settings, otherwise the custom fields are not available for master data maintenance.  For more information, see Transition from Old App Version (F7280) to New App Version (F7280A).  HDM: Activating the Attachments Function for Harmonized Document Management The Harmonized Document Management (HDM) is enabled for both the old app version and the new app version."
        },
        {
          "heading": "Effects on existing data",
          "text": "The enablement of the New Experience Switch entails an automatic expansion of an information popover in the affected apps. If you have your own test automation (RPA bots, etc.) set up in your system, this behavior might have an impact on these tests. For details on how to resolve the impact on your test automates, see Tips for Test Automation."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 33G,J62,BFH,1GB,1GF,33F. Use affected app/technical object F7280, F7280A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Deprecation of \"Manage Legacy Assets\" App (F7280): confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Deprecated Functional Localization No localization Scope Item J62; 1GB; 1GF; BFH; 33F; 33G Technical Object Name App ID (predecessor): F7280 App ID (successor): F7280A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape.  For more information, see Overview of Software and Content Upgrade.  Yes Application Component Asset Accounting (FI-AA) Valid as Of SAP S/4HANA Cloud Public Edition 2608 Additional Information The app documentation for both app versions is the same.  You can find it in the product assistance for Asset Accounting under Manage Legacy Assets.  For more information, see Transition from Old App Version (F7280) to New App Version (F7280A)."
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Deprecation of \"Manage Legacy Assets\" App (F7280), including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Deprecation of \"Manage Legacy Assets\" App (F7280)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e89b492486104bc7afbd068aaf611753?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e99185fb09f44c91a270a9f114e7e21e?version=2608.00": {
      "title": "SAP-Delivered Launchpad Space: Overhead Accounting",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e99185fb09f44c91a270a9f114e7e21e?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP-Delivered Launchpad Space: Overhead Accounting | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:22:01.304Z",
      "summary": "The SAP-delivered space template Overhead Accounting (SAP_BR_OVERHEAD_ACCOUNTANT) assigned to the business role template Cost Accountant - Overhead (SAP_BR_OVERHEAD_ACCOUNTANT) has been changed.  If your business users are reusing this space template and have the relevant authorizations, the layout and apps shown on the launchpad will change.  These changes become effective automatically if all of the following conditions are met: The relevant business users have the authorizations for using the relevant apps.  The SAP-delivered space template (not a customer-created space) is assigned to these business users through the assigned business roles.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The SAP-delivered space template Overhead Accounting (SAP_BR_OVERHEAD_ACCOUNTANT) assigned to the business role template Cost Accountant - Overhead (SAP_BR_OVERHEAD_ACCOUNTANT) has been changed.  If your business users are reusing this space template and have the relevant authorizations, the layout and apps shown on the launchpad will change.  These changes become effective automatically if all of the following conditions are met: The relevant business users have the authorizations for using the relevant apps.  The SAP-delivered space template (not a customer-created space) is assigned to these business users through the assigned business roles.  Note If personalization for launchpad spaces and pages is enabled, end users can make manual changes that may conflict with the changes described below."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "If this SAP-delivered space template is already assigned to business users, the changes described here become effective for them automatically after the upgrade. If a customer-created space is assigned to business users, you as the system administrator need to decide if you're going to make these changes in your customer-created space manually. For more information about assigning customer-created spaces or SAP-delivered space templates, see How to Create and Assign Spaces and Pages."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J54,J55."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for SAP-Delivered Launchpad Space: Overhead Accounting: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J55 (Margin Analysis) J54 (Overhead Cost Accounting) Technical Object Name Space ID: SAP_BR_OVERHEAD_ACCOUNTANT Latest Reference Content Version Required Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CO-OM (Overhead Cost Controlling) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for SAP-Delivered Launchpad Space: Overhead Accounting, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - SAP-Delivered Launchpad Space: Overhead Accounting",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e99185fb09f44c91a270a9f114e7e21e?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/eb02ed15dc5242659a2a1d520ebebdb3?version=2608.00": {
      "title": "Apps with Enhanced Simulate Button",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/eb02ed15dc5242659a2a1d520ebebdb3?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Apps with Enhanced Simulate Button | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:22:07.695Z",
      "summary": "The Simulate button in the following posting apps have been enhanced: Clear Incoming Payments (F0773) Clear Outgoing Payments (F1367) Post Incoming Payments (F1345) Post Outgoing Payments (F1612) Previously, the button directed you to a simulated journal entry in the Manage Journal Entries app. Now, the button opens a simulated view of a posted journal entry in a pop-up screen within the posting app. This screen includes a header and tabs for General Information and Line Items in Entry View. For more information, see Simulating Journal Entries.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The Simulate button in the following posting apps have been enhanced: Clear Incoming Payments (F0773) Clear Outgoing Payments (F1367) Post Incoming Payments (F1345) Post Outgoing Payments (F1612) Previously, the button directed you to a simulated journal entry in the Manage Journal Entries app. Now, the button opens a simulated view of a posted journal entry in a pop-up screen within the posting app. This screen includes a header and tabs for General Information and Line Items in Entry View. For more information, see Simulating Journal Entries."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Review only if this exact feature is used by CFA or sits in a used scope/process. Scope item(s): J59,J60. Use affected app/technical object F0773, F1367, F1345, F1612."
        },
        {
          "heading": "How to test",
          "text": "Use SAP's article details to identify the specific changed field, app action, report output, configuration setting, or process behaviour; then run one realistic walkthrough with the owning business role."
        },
        {
          "heading": "Expected result",
          "text": "The changed behaviour appears exactly where SAP describes it and does not break the current CFA user flow. Record relevant, not relevant, or future adoption."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J59 (Accounts Receivable) J60 (Accounts Payable) Technical Object Name App ID: F0773 F1367 F1345 F1612 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-AR-TRA (Transaction Apps) FI-FIO-AP-TRA (Transaction Apps) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current behaviour for the affected app/process before upgrade if the area is used.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 changed behaviour and whether CFA needs release testing, future adoption, or no action.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Apps with Enhanced Simulate Button",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/eb02ed15dc5242659a2a1d520ebebdb3?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/eb899eab7c524e4aa8fd80790824872e?version=2608.00": {
      "title": "Export Change Documents for Products",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/eb899eab7c524e4aa8fd80790824872e?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Export Change Documents for Products | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:22:12.357Z",
      "summary": "You can export change documents for products in the Export Master Data - Products app.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "You can export change documents for products in the Export Master Data - Products app."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): 1RM. Use affected app/technical object F8465."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item 1RM (Mass Load and Mass Maintenance for Product) Technical Object Name App ID: F8465 (Export Master Data - Products) Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CA-MDG (Master Data Governance) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Export Change Documents for Products",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/eb899eab7c524e4aa8fd80790824872e?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/efb1581f127b43a6a610d2cd642c4927?version=2608.00": {
      "title": "Material Number in Process Purchase Requisitions",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/efb1581f127b43a6a610d2cd642c4927?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Material Number in Process Purchase Requisitions | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:22:16.823Z",
      "summary": "With this release, you can view and use Material Number for a purchase requisition in the Process Purchase Requisitions app. Examples of the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this release, you can view and use Material Number for a purchase requisition in the Process Purchase Requisitions app. Examples of the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. In the Process Purchase Requisitions, you can view the Material Number in the list page by selecting it via the Settings and using the Show More per Row layout. Material Number in Process Purchase Requisitions"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Review only if this exact feature is used by CFA or sits in a used scope/process. Scope item(s): 18J. Use affected app/technical object F1048A."
        },
        {
          "heading": "How to test",
          "text": "Use SAP's article details to identify the specific changed field, app action, report output, configuration setting, or process behaviour; then run one realistic walkthrough with the owning business role."
        },
        {
          "heading": "Expected result",
          "text": "The changed behaviour appears exactly where SAP describes it and does not break the current CFA user flow. Record relevant, not relevant, or future adoption."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item 18J (Requisitioning) Technical Object Name App ID: F1048A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-FIO-PUR-REQ-SOC (Fiori UI for Sourcing Purchase Requisitions) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current behaviour for the affected app/process before upgrade if the area is used.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 changed behaviour and whether CFA needs release testing, future adoption, or no action.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Material Number in Process Purchase Requisitions",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/efb1581f127b43a6a610d2cd642c4927?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loiodcf9b7ff8eac49c4acdfeead1146103d_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/efed5bab670e4d5d9a0d71d120d5aa02?version=2608.00": {
      "title": "Analyze BOP Runs",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/efed5bab670e4d5d9a0d71d120d5aa02?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Analyze BOP Runs | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:22:20.330Z",
      "summary": "With this feature, ATP has introduced a new app, the Analyze BOP Runs (F2159A) app, to enable the basis for further technical and functional innovations for the backorder processing execution.  This new app is the successor app to our existing app, the Monitor BOP Run (F2159) app.  The new successor app will replace the existing app in the future.  We recommend that you switch to the new successor app Analyze BOP Runs (F2159A) as soon as possible.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, ATP has introduced a new app, the Analyze BOP Runs (F2159A) app, to enable the basis for further technical and functional innovations for the backorder processing execution.  This new app is the successor app to our existing app, the Monitor BOP Run (F2159) app.  The new successor app will replace the existing app in the future.  We recommend that you switch to the new successor app Analyze BOP Runs (F2159A) as soon as possible."
        },
        {
          "heading": "Effects on existing data",
          "text": "The enablement of the New Experience Switch entails an automatic expansion of an information popover in the affected apps. If you have your own test automation (RPA bots, etc.) set up in your system, this behavior might have an impact on these tests. For details on how to resolve the impact on your test automates, see Tips for Test Automation."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 2LN. Use affected app/technical object F2159A, F2159."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Analyze BOP Runs: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item 2LN (Basic Available-to-Promise Processing) Technical Object Name App ID: F2159A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CA-ATP-BOP (ATP: Backorder Processing) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Analyze BOP Runs, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Analyze BOP Runs",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/efed5bab670e4d5d9a0d71d120d5aa02?version=2608.00"
        },
        {
          "label": "Tips for Test Automation",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1c2371d12a41430e8cdee1ecd94f0eda.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Analyze BOP Runs",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/8954314863044c7e84d21879310c1f49.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f152c95763e54042b1b800aa8760b0af?version=2608.00": {
      "title": "Changed Report: G/L Accounts Blocked in P System Until Transport of Changes",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f152c95763e54042b1b800aa8760b0af?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Changed Report: G/L Accounts Blocked in P System Until Transport of Changes | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:22:23.614Z",
      "summary": "The accounting report G/L Accounts Blocked in P System Until Transport of Changes lists the G/L accounts that are blocked for posting in your production system pending the transport of changes to those accounts.  It also lists the open transport requests with the changes for these G/L accounts.  When you save a change to certain fields in a G/L account in your development system, a check in your production system runs to ensure that the change is allowed.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The accounting report G/L Accounts Blocked in P System Until Transport of Changes lists the G/L accounts that are blocked for posting in your production system pending the transport of changes to those accounts. It also lists the open transport requests with the changes for these G/L accounts. When you save a change to certain fields in a G/L account in your development system, a check in your production system runs to ensure that the change is allowed. If the change is allowed, the G/L account is blocked for posting in your test and production system until the transport request is released and the changes are transported from your development to your test system and then to your production system. When the changes reach the production system, the posting block is removed, and postings to the changed G/L account are possible again."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J58."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Changed Report: G/L Accounts Blocked in P System Until Transport of Changes: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J58 (Accounting and Financial Close) Technical Object Name Application Job Template: SAP_FIN_CSVC_GLACCOUNT_BLOCKED Job Category Entry: SAP_FIN_CSVC_GLACCOUNT_BLOCKED Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-GL-GL-N (Master Data) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Changed Report: G/L Accounts Blocked in P System Until Transport of Changes, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Changed Report: G/L Accounts Blocked in P System Until Transport of Chang",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f152c95763e54042b1b800aa8760b0af?version=2608.00"
        },
        {
          "label": "G/L Accounts Blocked in P System Until Transport of Changes",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e392432f0b2041528a118f8373f2269d.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f285d7b4211242be936a8077bd1ccc85?version=2608.00": {
      "title": "Advanced Variant Configuration for Sales Documents: Restriction for Reference Characteristics",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f285d7b4211242be936a8077bd1ccc85?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Advanced Variant Configuration for Sales Documents: Restriction for Reference Characteristics | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:22:28.521Z",
      "summary": "To improve performance when processing sales documents with multiple Advanced Variant",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "To improve performance when processing sales documents with multiple Advanced Variant"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "for Sales Documents: Restriction for Reference Characteristics"
        },
        {
          "heading": "Effects on existing data",
          "text": "If you are using the affected fields as reference characteristics in variant"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BD9."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Advanced Variant Configuration for Sales Documents: Restriction for Reference Characteristics: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item BD9 (Sell from Stock) and others Technical Object Name API: SalesOrder and others Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component SD-SLS-API (APIs for Sales Document in S/4 Sales & Distribution) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Advanced Variant Configuration for Sales Documents: Restriction for Reference Characteristics, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Advanced Variant Configuration for Sales Documents: Restriction for Refer",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f285d7b4211242be936a8077bd1ccc85?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f2b92ce452b44c78b4a962a966793670?version=2608.00": {
      "title": "Simulation of Cost Center Deletion",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f2b92ce452b44c78b4a962a966793670?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Simulation of Cost Center Deletion | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:22:32.315Z",
      "summary": "When you use the Manage Cost Centers (New Version) (F1443B) app to delete custom validity time ranges, you can now simulate the effects of the deletion. The simulation evaluates whether the validity time range can be deleted from the cost centers you selected. If the validity time range cannot be deleted, it helps you identify the reason. Changes to the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "When you use the Manage Cost Centers (New Version) (F1443B) app to delete custom validity time ranges, you can now simulate the effects of the deletion. The simulation evaluates whether the validity time range can be deleted from the cost centers you selected. If the validity time range cannot be deleted, it helps you identify the reason. Changes to the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. The Simulate button in the Delete Custom Time Range dialog: The results of the simulation:"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J54. Use affected app/technical object F1443B."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Simulation of Cost Center Deletion: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J54 (Overhead Cost Accounting) Technical Object Name F1443B Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CO-FIO-CCA-MD (Cost Center Accounting – Master Data) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Simulation of Cost Center Deletion, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Simulation of Cost Center Deletion",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f2b92ce452b44c78b4a962a966793670?version=2608.00"
        },
        {
          "label": "Manage Cost Centers (New Version)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/fa8f7e6786974fa0bb1cfd0266a98f36.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "The Delete Custom Time Range dialog with the Simulate button highlighted yellow at the bottom.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio6b9ee036428f4f32bb1f69fee731bdfb_LowRes.png"
        },
        {
          "label": "The Deletion Simulation dialog showing a list of cost centers where the specified validity cannot be deleted, along with the reason clarified (this cost center is used in table PRPS), followed by a list of cost centers where the specified validity can be successfully deleted.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loiof472ef534c9148a090409c1b67d495a3_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f33771c19b464be482d7db4eaec063b3?version=2608.00": {
      "title": "Deprecation of Predictive Scenario for Risk of Late Payment",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f33771c19b464be482d7db4eaec063b3?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:22:36.209Z",
      "summary": "The intelligent scenario Collections Management – Risk of Late Payment (FIN_COL_RSK_LTE_PMNT) is deprecated without replacement and will be deleted in an upcoming release. The following related objects are deprecated along with the scenario: Risk of Late Payment (UDM_COLL_LATE_PAYMENT_RISK and UDM_COLL_LATE_PAYMNT_RSK_DESC) fields in the Process Receivables (F0106A) app. Collection Rule: Amount of an Item w. High Risk of Late Payment (Deprecated) (CR00000030) Related",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The intelligent scenario Collections Management – Risk of Late Payment (FIN_COL_RSK_LTE_PMNT) is deprecated without replacement and will be deleted in an upcoming release. The following related objects are deprecated along with the scenario: Risk of Late Payment (UDM_COLL_LATE_PAYMENT_RISK and UDM_COLL_LATE_PAYMNT_RSK_DESC) fields in the Process Receivables (F0106A) app. Collection Rule: Amount of an Item w. High Risk of Late Payment (Deprecated) (CR00000030) Related"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "activity: Define Basic Rules Basic Rule: Amt of Ind. Item with High Risk of Late Paymnt (Deprecated) (BR00000030) Related configuration activity: Define Collection Rules"
        },
        {
          "heading": "Effects on existing data",
          "text": "After the deletion, the Risk of Late Payment field in the Process Receivables (F0106A) app will no longer be filled with data and activated scenarios will lose their functionality.  To prepare for the deletion of the scenario after the deprecation phase, review the following related settings: If you have included the Risk of Late Payment field in your collection strategy, revise the strategy and remove the field before the deletion of the predictive scenario.  You can do this in the Manage Collection Strategies (F2946) app."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BFC. Use affected app/technical object F0106A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Deprecation of Predictive Scenario for Risk of Late Payment: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Deprecated Functional Localization No localization Scope Item BFC (Collections and Dispute Management) Technical Object Name Scenario ID: FIN_COL_RSK_LTE_PMNT Fields: UDM_COLL_LATE_PAYMENT_RISK and UDM_COLL_LATE_PAYMNT_RSK_DESC Rules: CR00000030 and BR00000030 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FIN-FSCM-COL (Collections Management) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Deprecation of Predictive Scenario for Risk of Late Payment, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Deprecation of Predictive Scenario for Risk of Late Payment",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f33771c19b464be482d7db4eaec063b3?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f39d2aae88ba4a5da0f39451ee288eb1?version=2608.00": {
      "title": "App \"Manage Substitution and Validation Rules - For Asset Master Data\": New and Changed Fields",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f39d2aae88ba4a5da0f39451ee288eb1?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "App \"Manage Substitution and Validation Rules - For Asset Master Data\": New and Changed Fields | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:22:40.954Z",
      "summary": "In the app Manage Substitution and Validation Rules - For Asset Master Data (F6968), there are some new fields, some of which replace previous fields.  Field, Technical Name New Event Explanation DepreciationProfile New.  Future successor of DepreciationKey Fixed Asset: Time-Dependent Valuation This field is only available if you have activated the feature Introduction of configurable depreciation profiles (FAA_DEPRECIATION_PROFILE).  Recommendation If you have activated this feature and if you have used the DepreciationKey field in validation and/or substitution rules, you must replace it with the DepreciationProfile field.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "In the app Manage Substitution and Validation Rules - For Asset Master Data (F6968), there are some new fields, some of which replace previous fields.  Field, Technical Name New Event Explanation DepreciationProfile New.  Future successor of DepreciationKey Fixed Asset: Time-Dependent Valuation This field is only available if you have activated the feature Introduction of configurable depreciation profiles (FAA_DEPRECIATION_PROFILE).  Recommendation If you have activated this feature and if you have used the DepreciationKey field in validation and/or substitution rules, you must replace it with the DepreciationProfile field.  Otherwise, you will receive an error message when you create or change an asset."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "See the table in the \""
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 33G,J62,BFH,1GB,1GF,33F. Use affected app/technical object F6968."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for App \"Manage Substitution and Validation Rules - For Asset Master Data\": New and Changed Fields: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence. Validate the named API/object WBSElementInternalID with one realistic payload or consumer."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item J62; 1GB; 1GF; BFH; 33F; 33G Technical Object Name App ID: F6968 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape.  For more information, see Overview of Software and Content Upgrade."
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for App \"Manage Substitution and Validation Rules - For Asset Master Data\": New and Changed Fields, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - App \"Manage Substitution and Validation Rules - For Asset Master Data\": N",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f39d2aae88ba4a5da0f39451ee288eb1?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f628435f04a441848b27260b03cbc76c?version=2608.00": {
      "title": "Deprecation of \"Manage Fixed Assets\" App (F3425)",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f628435f04a441848b27260b03cbc76c?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:22:45.762Z",
      "summary": "As of SAP S/4HANA Cloud Public Edition 2602, there is a successor app for the old app version of app Manage Fixed Assets (F3425): The successor app is Manage Fixed Assets (F3425A) As of SAP S/4HANA Cloud Public Edition 2608, the old app version F3425 is deprecated and will be deleted in a future release.  The features of the old app and its successor app are largely the same.  However, the successor app version offers the latest technology and design.  We strongly recommend that you switch to the successor app F3425A as soon as possible.  Note In both involved apps, the New Experience Switch behavior is enabled.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "As of SAP S/4HANA Cloud Public Edition 2602, there is a successor app for the old app version of app Manage Fixed Assets (F3425): The successor app is Manage Fixed Assets (F3425A) As of SAP S/4HANA Cloud Public Edition 2608, the old app version F3425 is deprecated and will be deleted in a future release. The features of the old app and its successor app are largely the same. However, the successor app version offers the latest technology and design. We strongly recommend that you switch to the successor app F3425A as soon as possible. Note In both involved apps, the New Experience Switch behavior is enabled. If business end users have authorizations for both the old and the new app, they can also switch between both app versions. For more information, see Switching to a New App Version."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access the new app version, their business users need to have the following IAM app assigned: Manage Fixed Assets (F3425A_TRAN). The IAM apps for the new and the old app version are assigned to the same business catalog: Asset Accounting - Master Data for Ordinary Assets (SAP_FIN_BC_AA_MDAT_REG_PC). Caution Since the underlying IAM apps are delivered as inactive, the New Experience Switch is not displayed to users by default. It only appears when you activate the underlying IAM apps and assign them to your users. We highly recommend doing this to make users aware of the need to switch to the new app version. For more information on how to activate or deactivate IAM apps, see How to Activate or Deactivate IAM Apps of Type App Authorization Variant."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "Extensibility: Enabling Custom Fields for Old and New App Version Regardless of whether you already use custom fields in the old app version or whether you want to use custom fields for the first time in the new app version, you must check the settings for the Use Declaration and, if necessary, include your custom fields on the new UI.  Caution You must check and, if necessary, change the mentioned settings, otherwise the custom fields are not available for master data maintenance.  For more information, see Transition from Old App Version (F3425) to New App Version (F3425A).  HDM: Activating the Attachments Function for Harmonized Document Management The Harmonized Document Management (HDM) is enabled for both the old app version and the new app version."
        },
        {
          "heading": "Effects on existing data",
          "text": "The enablement of the New Experience Switch entails an automatic expansion of an information popover in the affected apps. If you have your own test automation (RPA bots, etc.) set up in your system, this behavior might have an impact on these tests. For details on how to resolve the impact on your test automates, see Tips for Test Automation."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 33G,J62,BFH,1GB,1GF,33F. Use affected app/technical object F3425, F3425A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Deprecation of \"Manage Fixed Assets\" App (F3425): confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Deprecated Functional Localization No localization Scope Item J62; 1GB; 1GF; BFH; 33F; 33G Technical Object Name App ID (predecessor): F3425 App ID (successor): F3425A Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape.  For more information, see Overview of Software and Content Upgrade.  Yes Application Component Asset Accounting (FI-AA) Valid as Of SAP S/4HANA Cloud Public Edition 2608 Additional Information The app documentation for both app versions is the same.  You can find it in the product assistance for Asset Accounting under Manage Fixed Assets."
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Deprecation of \"Manage Fixed Assets\" App (F3425), including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Deprecation of \"Manage Fixed Assets\" App (F3425)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f628435f04a441848b27260b03cbc76c?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f7b36a89c49d4a13a7bc1c37353bbf4d?version=2608.00": {
      "title": "Print Addresses with English Name of Business Partner Country/Region",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f7b36a89c49d4a13a7bc1c37353bbf4d?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Print Addresses with English Name of Business Partner Country/Region | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:22:50.439Z",
      "summary": "With this feature, you can ensure that the country or region name in business partner addresses is displayed in English in the printed output of billing process documents. This enables you to change the default system behavior of printing the receiver country or region name in the sender's language. This language",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, you can ensure that the country or region name in business partner addresses is displayed in English in the printed output of billing process documents. This enables you to change the default system behavior of printing the receiver country or region name in the sender's language. This language"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "has already been available in previous releases for various output forms, including sales document output. Now that the configuration is enabled for the output of billing process documents, you can meet customer requirements more easily. This change also ensures that the output of your sales and billing process documents displays business partner addresses consistently."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BD9."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Print Addresses with English Name of Business Partner Country/Region: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item BD9 (Sell from Stock) Technical Object Name Not applicable Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component SD-BIL-GF-OC (Output Control Billing) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Print Addresses with English Name of Business Partner Country/Region, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Print Addresses with English Name of Business Partner Country/Region",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f7b36a89c49d4a13a7bc1c37353bbf4d?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/fd323b0668204eefa4893822e2b5fa8e?version=2608.00": {
      "title": "Editable Email Message in the Create Correspondence App",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/fd323b0668204eefa4893822e2b5fa8e?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Editable Email Message in the Create Correspondence App | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:22:55.143Z",
      "summary": "This feature enables you to edit the message text generated on the Email Preview tab page in the Create Correspondence app. This means that you can now customize emails to your customers and suppliers to suit your needs. When you select an email template on the Email Preview tab page, the system generates a subject and message text that match the correspondence type you selected. Previously, only the subject could be edited, while the message text was read-only. It is now not only possible to change the message text, but it is also possible to format this text by changing the font and its color, size, and style, such as bold or italic. You can review the email before you send it.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "This feature enables you to edit the message text generated on the Email Preview tab page in the Create Correspondence app. This means that you can now customize emails to your customers and suppliers to suit your needs. When you select an email template on the Email Preview tab page, the system generates a subject and message text that match the correspondence type you selected. Previously, only the subject could be edited, while the message text was read-only. It is now not only possible to change the message text, but it is also possible to format this text by changing the font and its color, size, and style, such as bold or italic. You can review the email before you send it."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J59,J60. Use affected app/technical object F0744A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Editable Email Message in the Create Correspondence App: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item J59 (Accounts Receivable) J60 (Accounts Payable) Technical Object Name App ID: F0744A Application Component FI-AR-AR-CR (Correspondence) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Editable Email Message in the Create Correspondence App, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Editable Email Message in the Create Correspondence App",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/fd323b0668204eefa4893822e2b5fa8e?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/00d6727f6e844f9a83a6e87416d537f1?version=2608.00": {
      "title": "Cash Concentration Simulation in Cash Flow Analyzer",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/00d6727f6e844f9a83a6e87416d537f1?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Cash Concentration Simulation in Cash Flow Analyzer | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:22:58.857Z",
      "summary": "The Cash Flow Analyzer app now provides the Cash Concentration Simulation view for cash pools created in the Manage Cash Pools (Version 2) app.  This enhancement enables you to simulate cash concentration results before actual transfers occur, helping you understand your projected cash position and make confident financial decisions.  The Cash Concentration Simulation view now supports cash pools defined in the Manage Cash Pools (Version 2) app with the service provider types Company - Time-Dependent or Bank - Time-Dependent.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The Cash Flow Analyzer app now provides the Cash Concentration Simulation view for cash pools created in the Manage Cash Pools (Version 2) app.  This enhancement enables you to simulate cash concentration results before actual transfers occur, helping you understand your projected cash position and make confident financial decisions.  The Cash Concentration Simulation view now supports cash pools defined in the Manage Cash Pools (Version 2) app with the service provider types Company - Time-Dependent or Bank - Time-Dependent.  The simulation view displays the projected results of cash concentration for your selected cash pool, with a hierarchy view of your bank accounts in the cash pool, balance before and after the simulation, and key information such as the cash pool service providers and transfer amounts."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J78. Use affected app/technical object F2332."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Cash Concentration Simulation in Cash Flow Analyzer: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type Changed Functional Localization No localization Scope Item J78 (Advanced Cash Operations) Technical Object Name App ID: F2332 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FIN-FSCM-CLM-COP (Cash Operations) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Cash Concentration Simulation in Cash Flow Analyzer, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Cash Concentration Simulation in Cash Flow Analyzer",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/00d6727f6e844f9a83a6e87416d537f1?version=2608.00"
        },
        {
          "label": "Cash Flow Analyzer",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/cd6705281eef4230b81ef5a7b1ec54ee.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Manage Cash Concentration",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/69d58ccb5d1e44249e1a83174f965324.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Manage Cash Pools (Version 2)",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f7a76f4160db4fe6914262fdd8787e10.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "The Cash Concentration Simulation view in Cash Flow Analyzer",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio4a2a8e6d2b8d41d8ba092511fb4a102e_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/02fa2a2893d742188486e3f7e6fd55df?version=2608.00": {
      "title": "Cash Flow Statement Based on Reporting Rules",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/02fa2a2893d742188486e3f7e6fd55df?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Cash Flow Statement Based on Reporting Rules | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:23:05.171Z",
      "summary": "With this feature, you can generate cash flow statements - indirect method based on reporting rules, instead of semantic tags assigned to G/L accounts.  You begin by defining selection criteria for retrieving accounting data from chart of accounts in the Manage Reporting Rules - Accounting.  Then, you assign these reporting rules to reporting hierarchies in the Manage Global Hierarchies app.  The reporting hierarchy determines how the retrieved data is structured in cash flow statements displayed on the Cash Flow Statements - Indirect Method in the Financial Statements Review Booklet app.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, you can generate cash flow statements - indirect method based on reporting rules, instead of semantic tags assigned to G/L accounts.  You begin by defining selection criteria for retrieving accounting data from chart of accounts in the Manage Reporting Rules - Accounting.  Then, you assign these reporting rules to reporting hierarchies in the Manage Global Hierarchies app.  The reporting hierarchy determines how the retrieved data is structured in cash flow statements displayed on the Cash Flow Statements - Indirect Method in the Financial Statements Review Booklet app.  To enable this feature, the following enhancements has been introduced: A new app Manage Reporting Rules - Accounting is now available.  A new hierarchy type Reporting Hierarchy is now supported in Manage Global Hierarchies."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access the above mentioned apps, their business users need to have the following IAM apps assigned: Manage Reporting Rules - Accounting (F9259_TRAN) Manage Global Hierarchies (F2918_TRAN) Financial Statements Review Booklet (F8587_TRAN)"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. The user interface of the Manage Reporting Rules - Accounting app: A sample reporting hierarchy in the Manage Global Hierarchies app: A cash flow statement based on reporting rules as displayed in the Financial Statements Review Booklet app:"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J58,O58. Use affected app/technical object F9259, F2918, F8587."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Cash Flow Statement Based on Reporting Rules: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item J58 (Accounting and Financial Close) O58 (Accounting and Financial Close) Technical Object Name App ID: F9259 App ID: F2918 App ID: F8587 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-GL-HIE (Hierarchy Applications for General Ledger) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Cash Flow Statement Based on Reporting Rules, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Cash Flow Statement Based on Reporting Rules",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/02fa2a2893d742188486e3f7e6fd55df?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio7f00aefda029432eb574da0f0adaee96_LowRes.png"
        },
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio1274ffe02695472888394d66159c6ec1_LowRes.png"
        },
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio26a8398fd8d640d7b5cd12cf7eaf5bd0_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/098564fc8a02445e933502fe9e774260?version=2608.00": {
      "title": "Email with Fallback Channel Print",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/098564fc8a02445e933502fe9e774260?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Email with Fallback Channel Print | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:23:09.955Z",
      "summary": "In the Output Parameter Determination app, you can now select a new constant called Email with Fallback Channel Print. This",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "In the Output Parameter Determination app, you can now select a new constant called Email with Fallback Channel Print. This"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "provides a fallback option for your output: The system sends your output as email if the default email address is available. If no default email address is available, the system prints your output. The system automatically detects whether the default email address is available and sets the channel to EMAIL or PRINT accordingly. This new feature simplifies your workflows and maintains business continuity. The system processes output even if no default email address is available for an output receiver. You can set the new Email with Fallback Channel Print constant in the Output Parameter Determination app when you select the Channel determination step. For more information, refer to Email with Fallback Channel Print."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1LQ."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Email with Fallback Channel Print: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type Changed Functional Localization No localization Scope Item 1LQ (Output Management) Technical Object Name Email with Fallback Channel Print (EMFPR) Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CA-GTF-OC (Output Management for SAP S/4HANA) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Email with Fallback Channel Print, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Email with Fallback Channel Print",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/098564fc8a02445e933502fe9e774260?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1d974617cf8949ae95c45694aa4cdbd4?version=2608.00": {
      "title": "Support for Tax Codes Export",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1d974617cf8949ae95c45694aa4cdbd4?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Support for Tax Codes Export | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:23:14.821Z",
      "summary": "To facilitate the tax administration process in SAP Concur, we enhance the Financial",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "To facilitate the tax administration process in SAP Concur, we enhance the Financial"
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable the Financial"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "export, enabling you to export tax codes and tax condition types from your SAP system.  This integration piece ensures that the correct tax data are available in SAP Concur to support the flow of financial data back into your SAP system during the financial posting process.  Successfully exported tax codes display in the tax administration in SAP Concur as values in the entry help for the tax and reclaim configuration: In SAP Concur Professional Edition, the column ERP Reclaim Tax Code.  This new column appears in the SAP Concur system when you enable the tax codes export and save your tax codes configuration (Concur Integration Setup → Financial Configuration → Set Up Export→ Tax Codes).  In SAP Concur Standard Edition, the column ERP Reclaim Tax Code."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1M1. Use affected app/technical object F8636."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Support for Tax Codes Export: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item 1M1 (Travel Expense Processing with SAP Concur) Technical Object Name App ID: CTE_SETUP CTE_MONI F8636 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component BNS-CON-SE-S4-FIN (Concur S/4HANA Financial Integration) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Support for Tax Codes Export, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Support for Tax Codes Export",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1d974617cf8949ae95c45694aa4cdbd4?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1faff07879ba437b926f624657b13586?version=2608.00": {
      "title": "Financial Statements Review Booklet",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1faff07879ba437b926f624657b13586?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Financial Statements Review Booklet | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:23:20.197Z",
      "summary": "This feature is now automatically available and no longer requires activation.  You can also now display netting partner shifts in the app and use the standard review booklets commenting feature.  The app presents financial statements by combining predefined business pages.  This collection of pages forms a review booklet, which can be used to carry out a financial review.  To enable users to access the app, see the Authorization section of this document.  Note This app is currently unavailable in Manage KPIs and Reports.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "This feature is now automatically available and no longer requires activation.  You can also now display netting partner shifts in the app and use the standard review booklets commenting feature.  The app presents financial statements by combining predefined business pages.  This collection of pages forms a review booklet, which can be used to carry out a financial review.  To enable users to access the app, see the Authorization section of this document.  Note This app is currently unavailable in Manage KPIs and Reports.  Displaying Netting Partner Shifts To display balances grouped by the netting partner in the app, open Layout settings, add the Business Partner column, and deselect any comparison and difference columns.  You can only display balances this way when on the All Accounts and Balance Sheet business pages."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access this app, their business users need to have the following IAM app assigned: Financial Statements Review Booklet (IAM App ID: F8587_TRAN).  To add comments, add tags, and rename them, you need to have the IAM app My Analytical Cell Comments (F8232_TRAN) assigned to your user, which is used in the Analytics - Analytical Cell Comments (SAP_BW_BC_COMMENT_PC) business catalog.  Using the S_RS_CMT restriction type, you can restrict access to one or more analytical queries.  The IAM app is part of the SAP_BR_EMPLOYEE business role template.  To create, change, delete, and display comments, you need to have the IAM app Manage Analytical Cell Comments (F8233_TRAN) assigned to your user, which is used in the Analytics - Analytical Cell Comments Management (SAP_BW_BC_COMMENT_ADM_PC) business catalog."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J58. Use affected app/technical object F8587."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Financial Statements Review Booklet: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type Changed Functional Localization No localization Scope Item J58 (Accounting and Financial Close) Technical Object Name App ID: F8587 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-GL-PER (Periodic Activities Applications in General Ledger) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Financial Statements Review Booklet, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Financial Statements Review Booklet",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1faff07879ba437b926f624657b13586?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2f4f49dfc5fb44b29f9d8c8579767150?version=2608.00": {
      "title": "View Defect Details in the Serial Number History App",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2f4f49dfc5fb44b29f9d8c8579767150?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "View Defect Details in the Serial Number History App | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:23:24.114Z",
      "summary": "With this feature, you can now view defect details for serial numbers that have been assigned to a defect document in the Serial Number History app (App-ID: F7368 ). You can then navigate to the Process Defects app (App-ID: F8046 ) to see more details.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, you can now view defect details for serial numbers that have been assigned to a defect document in the Serial Number History app (App-ID: F7368 ). You can then navigate to the Process Defects app (App-ID: F8046 ) to see more details."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): BLL. Use affected app/technical object F7368, F8046."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item BLL (Serial Number Management in Logistics) Technical Object Name App ID: F7368 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component LO-MD-SN (Serial Number Management) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - View Defect Details in the Serial Number History App",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/2f4f49dfc5fb44b29f9d8c8579767150?version=2608.00"
        },
        {
          "label": "Serial Number History",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/ad5f3046a7d54d8aa2b959bed7ada98b.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/32d111faf79b4a1b8fe7eba5cf10cc7f?version=2608.00": {
      "title": "Valuation of Parallel Currencies in Advanced Valuation in Financial Accounting",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/32d111faf79b4a1b8fe7eba5cf10cc7f?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Valuation of Parallel Currencies in Advanced Valuation in Financial Accounting | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:23:29.701Z",
      "summary": "You can now control how Advanced Foreign Currency Valuation processes parallel currencies by selecting a valuation approach per accounting principle. This improves transparency and alignment with accounting and reporting requirements. You maintain this setting in the Maintain Settings for Valuation of Parallel Currencies (ID: 107185)",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "You can now control how Advanced Foreign Currency Valuation processes parallel currencies by selecting a valuation approach per accounting principle. This improves transparency and alignment with accounting and reporting requirements. You maintain this setting in the Maintain Settings for Valuation of Parallel Currencies (ID: 107185)"
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Regarding the two settings, the following applies: If you're a new customer with this release, the SAP-delivered"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "activity.  Before this release, you couldn't choose how valuation was carried out for parallel currencies.  The Post Advanced Foreign Currency Valuation job always valuated the functional currency in the valuation step and valuated the parallel currencies other than the functional currencies in a next step.  The result of this valuation was posted as an Unrealized Gain/Loss in every currency.  This scenario is called Management Valuation.  Starting with this release, there's now another option available.  You can see options now in the Maintain Settings for Valuation of Parallel Currencies (ID: 107185) configuration activity."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J58. Use affected app/technical object F1927."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Valuation of Parallel Currencies in Advanced Valuation in Financial Accounting: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item J58 (Accounting and Financial Close) Technical Object Name App ID: F1927 Job Template: Advanced Foreign Currency Valuation Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. Yes Application Component FI-GL-GL (Closing Operations / Period End) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        },
        {
          "heading": "Configuration / SSCUI to check",
          "text": "ID: 107185 | configuration activity"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Valuation of Parallel Currencies in Advanced Valuation in Financial Accounting, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Valuation of Parallel Currencies in Advanced Valuation in Financial Accou",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/32d111faf79b4a1b8fe7eba5cf10cc7f?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/35fcd268a62e4976ae27446493a44d8f?version=2608.00": {
      "title": "Pro Rata GST",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/35fcd268a62e4976ae27446493a44d8f?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Pro Rata GST | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:23:53.376Z",
      "summary": "With this feature, you can automatically split input GST in incoming invoices into deductible and non-deductible portions according to a predefined pro rata coefficient. The coefficient represents the portion of the input tax that can be deducted, for example, if the pro rata coefficient is 10% and the standard GST rate is 10%, then 1% is deductible and 9% is non-deductible.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, you can automatically split input GST in incoming invoices into deductible and non-deductible portions according to a predefined pro rata coefficient. The coefficient represents the portion of the input tax that can be deducted, for example, if the pro rata coefficient is 10% and the standard GST rate is 10%, then 1% is deductible and 9% is non-deductible."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "Before configuring pro rata GST, make sure that the time-dependent taxes (TDT) function is enabled in your solution. For more information, refer to Processing GST and Configuring Pro Rata GST Calculation."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): 22Z,J45,J60. Functional localization: Australia; for CFA Australia, treat as not relevant unless the process owner confirms use."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization Localized for Australia Scope Item J60 (Accounts Payable) J45 (Procurement of Direct Materials) 22Z (Procurement of Services) Technical Object Name Not applicable Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-LOC-FI-AU (Financials Australia) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Pro Rata GST",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/35fcd268a62e4976ae27446493a44d8f?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/3651420f80ee4136aa4f78341e950ca2?version=2608.00": {
      "title": "Event-Based Settlement: Postings with Trading Partner Information",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/3651420f80ee4136aa4f78341e950ca2?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Event-Based Settlement: Postings with Trading Partner Information | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:23:58.257Z",
      "summary": "During the event-based settlement process, the trading partner information is now inherited from the original cost posting to the WBS element: On the one hand, it is inherited during settlement from the WBS element to the asset under construction, and on the other hand during settlement from the asset under construction to the final recipients.  The following trading partner fields are supported: Company ID (VBUND) and Company ID of Trading Partner (RASSC).",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "During the event-based settlement process, the trading partner information is now inherited from the original cost posting to the WBS element: On the one hand, it is inherited during settlement from the WBS element to the asset under construction, and on the other hand during settlement from the asset under construction to the final recipients.  The following trading partner fields are supported: Company ID (VBUND) and Company ID of Trading Partner (RASSC).  For example, if you post an invoice to the WBS element and specify the trading partner field Company ID of Trading Partner (RASSC), this information is transferred throughout the entire settlement process and is then available on the completed asset."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available."
        },
        {
          "heading": "Effects on existing data",
          "text": "Note the following: The system does not retroactively adjust existing journal entries. If you reverse the final settlement for the asset under construction, the following applies: If there were no trading partner fields in the journal entry for the final settlement, the reversal is also posted without these trading partner fields."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): BFH,J54,1GF,J62. Use affected app/technical object F0718, F4406, F7697, F0717A."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item J54; J62; 1GF; BFH Technical Object Name Fields: Company ID (VBUND) Company ID of Trading Partner (RASSC) Apps: F0718 (Post General Journal Entries) and other apps for posting costs to the investment project F4406 Manage Substitution/Validation Rules F7697 (Display Journal Entries) F0717A (Manage Journal Entries) Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape.  For more information, see Overview of Software and Content Upgrade."
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Event-Based Settlement: Postings with Trading Partner Information",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/3651420f80ee4136aa4f78341e950ca2?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "Settlement Journal Entry with Trading Partner",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio8bc785a5828646d089cf087d76bb55eb_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4b36b3239ad743f8b8af9b9d740bfd4e?version=2608.00": {
      "title": "Changed Display of Simulated Journal Entries in Bank Statement and Lockbox Reprocessing",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4b36b3239ad743f8b8af9b9d740bfd4e?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:24:01.939Z",
      "summary": "When reprocessing items in the Reprocess Bank Statement Items (F1520) or Reprocess Lockbox Items (F3398) apps, the simulation results are now displayed in the Display Simulated Journal Entries (F7958) app.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "When reprocessing items in the Reprocess Bank Statement Items (F1520) or Reprocess Lockbox Items (F3398) apps, the simulation results are now displayed in the Display Simulated Journal Entries (F7958) app."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access the apps, their business users need to have the following IAM apps assigned: Reprocess Bank Statement Items (F1520_TRAN) Reprocess Lockbox Items (F3398_TRAN)"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1JT,J59. Use affected app/technical object F1520, F3398, F7958."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Changed Display of Simulated Journal Entries in Bank Statement and Lockbox Reprocessing: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type Changed Functional Localization No localization Scope Item Accounts Receivable (J59) Lockbox (1JT) Technical Object Name App ID: F3398 App ID: F1520 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-AR (Fiori UI for Accounts Receivable) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Changed Display of Simulated Journal Entries in Bank Statement and Lockbox Reprocessing, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Changed Display of Simulated Journal Entries in Bank Statement and Lockbo",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4b36b3239ad743f8b8af9b9d740bfd4e?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/510f770e6a6e4b4891fb5aa0f0cb6b7c?version=2608.00": {
      "title": "Mass Changes to Cost Centers",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/510f770e6a6e4b4891fb5aa0f0cb6b7c?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Mass Changes to Cost Centers | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:24:07.291Z",
      "summary": "With this version of SAP S/4HANA Cloud Public Edition, you can use the Manage Cost Centers (New Version) (F1443B) app to update multiple cost centers at once by uploading a spreadsheet with your changes.  To make mass changes, use the Mass Changes button that can be enabled for specific roles or users by administrators.  With mass changes to cost centers, you can: Efficiently process large-scale organizational changes.  Reduce manual data entry errors.  Improve productivity when managing frequent updates across multiple records simultaneously.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this version of SAP S/4HANA Cloud Public Edition, you can use the Manage Cost Centers (New Version) (F1443B) app to update multiple cost centers at once by uploading a spreadsheet with your changes.  To make mass changes, use the Mass Changes button that can be enabled for specific roles or users by administrators.  With mass changes to cost centers, you can: Efficiently process large-scale organizational changes.  Reduce manual data entry errors.  Improve productivity when managing frequent updates across multiple records simultaneously.  When making mass changes, make sure that the following prerequisites are met: To be able to make mass changes to cost centers, you must have the Mass Changes to Cost Centers (F9420_TRAN) IAM app assigned to your business role or user.  Mass changes can be made only to one validity period at a time."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access the Mass Changes button in the Manage Cost Centers (New Version) (F1443B) app, their business users need to have the following IAM apps assigned: Mass Changes to Cost Centers (F9420_TRAN) Manage Cost Centers (New Version) (F1443B_TRAN)"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. The Mass Changes button on the main app page: The spreadsheet template for making mass changes to cost centers: The last step of the Mass Changes dialog in the Manage Cost Centers (New Version) (F1443B) app:"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J54. Use affected app/technical object F1443B."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Mass Changes to Cost Centers: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item J54 (Overhead Cost Accounting) Technical Object Name F1443B Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CO-FIO-CCA-MD (Cost Center Accounting – Master Data) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Mass Changes to Cost Centers, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Mass Changes to Cost Centers",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/510f770e6a6e4b4891fb5aa0f0cb6b7c?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "The main page of the Manage Cost Centers (New Version) app (F1443B) with several cost centers selected and the Mass Changes button highlighted in the toolbar.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio3a4329ef624242e592a956f25c7ba0eb_LowRes.png"
        },
        {
          "label": "The image shows a spreadsheet with several cost centers, each on a separate row. One cost center has been marked for deletion by selecting the 'X' value in the 'Delete?' column, another cost center has a changed description highlighted in blue.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio58b51c9306bf46648070def0713749a4_LowRes.png"
        },
        {
          "label": "The image shows the last step of the 'Mass Changes' wizard. This step is named 'Import Changes'. The image shows the name of the imported file, a confirmation that the changes can be applied, and the 'Apply' button highlighted at the bottom of the dialog.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio10e025ae5e2842bfa25532c737da828a_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/54b13530c15447a69b5bbf47d64ca433?version=2608.00": {
      "title": "Stock - Single Material",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/54b13530c15447a69b5bbf47d64ca433?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Stock - Single Material | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:24:12.845Z",
      "summary": "For this app, you can now do the following: Two new optional columns are now available for plants and storage locations: Open Issue Quantity: displays the stock quantity reserved for issue against open reservations.  Open Receipt Quantity: displays the stock quantity expected to be received against open reservations.  The system hides both columns by default.  You can show or hide them at any time.  To do this, use the table personalization dialog.  Select the Settings icon in the table toolbar.  When a value includes special stock, such as stock assigned to a sales order or project, it appears as a link.  Select the link to view a breakdown by special stock type in a popover.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "For this app, you can now do the following: Two new optional columns are now available for plants and storage locations: Open Issue Quantity: displays the stock quantity reserved for issue against open reservations.  Open Receipt Quantity: displays the stock quantity expected to be received against open reservations.  The system hides both columns by default.  You can show or hide them at any time.  To do this, use the table personalization dialog.  Select the Settings icon in the table toolbar.  When a value includes special stock, such as stock assigned to a sales order or project, it appears as a link.  Select the link to view a breakdown by special stock type in a popover.  The first time you open the app after this update, you receive a notification about the new columns and where to find them."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): BMC. Use affected app/technical object F1076."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type Changed Functional Localization No localization Scope Item BMC (Core Inventory Management) Technical Object Name App ID: F1076 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-FIO-IM-SGM (Fiori UI for Stock and Goods Movements) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Stock - Single Material",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/54b13530c15447a69b5bbf47d64ca433?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/62dd8c682ba9414b883126a8f1b3fc39?version=2608.00": {
      "title": "Updates in Statutory Reporting Apps",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/62dd8c682ba9414b883126a8f1b3fc39?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Updates in Statutory Reporting Apps | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:24:17.958Z",
      "summary": "The following updates have been made to the Run Statutory Reports and Define Statutory Reports apps: Enhanced Status Tracking in Run Details The Status Log in Run Details now includes an Action Taken By column that displays who performed each document status change. Create Schema ID from Existing Schemas You can now create a new schema from an existing schema using the Create with Reference option in the Document Definition section of your document.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The following updates have been made to the Run Statutory Reports and Define Statutory Reports apps: Enhanced Status Tracking in Run Details The Status Log in Run Details now includes an Action Taken By column that displays who performed each document status change. Create Schema ID from Existing Schemas You can now create a new schema from an existing schema using the Create with Reference option in the Document Definition section of your document."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): 1J2,5XU. Use affected app/technical object F1515, F2131."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type Changed Functional Localization No localization Scope Item 5XU 1J2 Technical Object Name App ID: F1515 and App ID: F2131 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-LOC-SRF-RUN (Run Statutory Reports) FI-LOC-SRF-DEF (Define Statutory Reports) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Updates in Statutory Reporting Apps",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/62dd8c682ba9414b883126a8f1b3fc39?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6cc7c358ddbc4f6690247be12bb96a7e?version=2608.00": {
      "title": "Display Customer Line Items",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6cc7c358ddbc4f6690247be12bb96a7e?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Display Customer Line Items | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:24:22.625Z",
      "summary": "Use this new app to easily find customer line items using a wide range of search criteria.  It gives a broader set of users access to critical receivables data while maintaining data integrity.  You can use this app for ad-hoc requests or recurring reports to easily find customer line items using a wide range of search criteria.  For example, you can see all line items of a specific customer account or all unallocated payments for a specific company code at the end of a period.  You can export the data to a file and collaborate with colleagues.  Examples of the User Interface Note The screenshots are examples to make the described change visible.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "Use this new app to easily find customer line items using a wide range of search criteria. It gives a broader set of users access to critical receivables data while maintaining data integrity. You can use this app for ad-hoc requests or recurring reports to easily find customer line items using a wide range of search criteria. For example, you can see all line items of a specific customer account or all unallocated payments for a specific company code at the end of a period. You can export the data to a file and collaborate with colleagues. Examples of the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to"
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access this app, their business users need to have the following IAM app assigned: Display Customer Line Items (F8940_TRAN). Use the Display IAM Apps app to check for additional IAM apps that are functionally required."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1WQ,1S0,J59,1JT,19M,1J5. Use affected app/technical object F8940."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Display Customer Line Items: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item 19M (Direct Debit) 1J5 (Invoice, Taxes and Complementary Postings) 1JT (Lockbox) 1S0 (Customer Payments) 1WQ (Bill of Exchange) J59 (Accounts Receivable) Technical Object Name App ID: F8940 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-AR-IS (Reporting Apps) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Display Customer Line Items, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Display Customer Line Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6cc7c358ddbc4f6690247be12bb96a7e?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "The list report in the Display Customer Line Items app.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loioba23746ff85e403387e56137b56ba24c_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/7abbd459879a4e7fa1609912a3cec800?version=2608.00": {
      "title": "Integration of Accruals Management and Predictive Accounting",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/7abbd459879a4e7fa1609912a3cec800?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Integration of Accruals Management and Predictive Accounting | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:24:27.092Z",
      "summary": "With this enhancement, when you post accrual amounts for a purchase order that already has a commitment, the commitment is automatically reduced according to the accrual amounts.  As a result, the budget consumption of the purchase order isn't doubled after posting accrual amounts.  Before this enhancement, posting accrual amounts for purchase orders resulted only in actual cost postings without adjusting the existing commitments.  This caused double budget consumption for purchase orders.  With the new integration, additional Universal Journal entries are generated that reduce the commitment by the amount of the posted accruals.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this enhancement, when you post accrual amounts for a purchase order that already has a commitment, the commitment is automatically reduced according to the accrual amounts.  As a result, the budget consumption of the purchase order isn't doubled after posting accrual amounts.  Before this enhancement, posting accrual amounts for purchase orders resulted only in actual cost postings without adjusting the existing commitments.  This caused double budget consumption for purchase orders.  With the new integration, additional Universal Journal entries are generated that reduce the commitment by the amount of the posted accruals.  This ensures that the budget consumption remains accurate and updated."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 2I3. Use affected app/technical object F0717A, F3778."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Integration of Accruals Management and Predictive Accounting: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item 2I3 Technical Object Name F3778 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-PRA-PRA-2CL (Process Simulation and Document Preparation (Public Cloud)) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Integration of Accruals Management and Predictive Accounting, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Integration of Accruals Management and Predictive Accounting",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/7abbd459879a4e7fa1609912a3cec800?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/81dcad2d72e24226b920f45d9e3712e3?version=2608.00": {
      "title": "Manage Sales Documents",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/81dcad2d72e24226b920f45d9e3712e3?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Manage Sales Documents | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:24:31.917Z",
      "summary": "With the Manage Sales Documents app, you can now create sales orders (of order types OR, CCFU, and CCIS) with reference to sales quotations or sales contracts. Complete the following steps to create sales orders with reference: On the sales documents tab, choose Create with Reference Create Sales Order. Specify the sales order type, reference document category, and reference document number. Choose Continue. The system navigates to the Manage Sales Orders - Version 2 app. On the sales order page, fill in relevant data to complete order creation.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With the Manage Sales Documents app, you can now create sales orders (of order types OR, CCFU, and CCIS) with reference to sales quotations or sales contracts. Complete the following steps to create sales orders with reference: On the sales documents tab, choose Create with Reference Create Sales Order. Specify the sales order type, reference document category, and reference document number. Choose Continue. The system navigates to the Manage Sales Orders - Version 2 app. On the sales order page, fill in relevant data to complete order creation."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To access this app, users need to have the following IAM app assigned: Manage Sales Documents (F8712_TRAN)"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BD9. Use affected app/technical object F8712."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Manage Sales Documents: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item BD9 (Sell from Stock) and others Technical Object Name App ID: F8712 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component SD-SLS-SDL (Sales Document List and Processing) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Manage Sales Documents, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Manage Sales Documents",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/81dcad2d72e24226b920f45d9e3712e3?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/82fab9611c06409595771d1b7ae67ee4?version=2608.00": {
      "title": "Manage Enrichment Rule Sets - For Bank Statements",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/82fab9611c06409595771d1b7ae67ee4?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Manage Enrichment Rule Sets - For Bank Statements | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:24:36.431Z",
      "summary": "With this new app, you can enhance your bank statement processing. The Manage Enrichment Rule Sets - For Bank Statements app allows you to create and maintain sets of enrichment rules that prepare your bank statements for the processing phase. In the new Manage Enrichment Rule Sets - For Bank Statements app, you can create rules that help you to add missing information to your bank statement items or to overwrite incomplete information in your items, so that they can be processed correctly by the processing rules in a later step. For more detailed information, see the in-app help of the Manage Enrichment Rule Sets app and have a look at the related links below.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this new app, you can enhance your bank statement processing. The Manage Enrichment Rule Sets - For Bank Statements app allows you to create and maintain sets of enrichment rules that prepare your bank statements for the processing phase. In the new Manage Enrichment Rule Sets - For Bank Statements app, you can create rules that help you to add missing information to your bank statement items or to overwrite incomplete information in your items, so that they can be processed correctly by the processing rules in a later step. For more detailed information, see the in-app help of the Manage Enrichment Rule Sets app and have a look at the related links below."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access this app, their business users need to have one of the following business catalogs assigned: Bank Accounting - Bank Statement (SAP_FIN_BC_BA_BANKSTAT_PC) or Bank Accounting - Bank Statement Reprocessing (SAP_FIN_BC_BA_BANKSTRP_PC)."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "It's not necessary to change the settings in the configuration activities in order to use the Manage Enrichment Rule Sets - For Bank Statements app."
        },
        {
          "heading": "Effects on existing data",
          "text": "The delivery of this app and its usage do not lead to any changes to existing data or to any effects on existing data in your system."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J59. Use affected app/technical object F9062."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Manage Enrichment Rule Sets - For Bank Statements: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item J59 (Accounts Receivable) Technical Object Name App ID: F9062 Latest Reference Content Version Required Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-AR (Fiori UI for Accounts Receivable) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Manage Enrichment Rule Sets - For Bank Statements, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Manage Enrichment Rule Sets - For Bank Statements",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/82fab9611c06409595771d1b7ae67ee4?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/874689b3e2c04455a09600e8def67fdd?version=2608.00": {
      "title": "Manage Maintenance Notifications: Automatic Defaulting of Order Types",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/874689b3e2c04455a09600e8def67fdd?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Manage Maintenance Notifications: Automatic Defaulting of Order Types | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:24:41.123Z",
      "summary": "When creating a maintenance order from a notification in the Manage Maintenance Notifications (F5777) app, the system now automatically selects the appropriate maintenance order type according to best practices content.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "When creating a maintenance order from a notification in the Manage Maintenance Notifications (F5777) app, the system now automatically selects the appropriate maintenance order type according to best practices content."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): 4HI,4HH. Use affected app/technical object F5777."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item 4HI (Proactive Maintenance) 4HH (Reactive Maintenance) Technical Object Name App ID: F5777 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component PM-WOC-MN (Maintenance Notification) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Manage Maintenance Notifications: Automatic Defaulting of Order Types",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/874689b3e2c04455a09600e8def67fdd?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/8dc50d36a00f427c89e31cc56f76d600?version=2608.00": {
      "title": "Introduction of Configurable Depreciation Profiles",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/8dc50d36a00f427c89e31cc56f76d600?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Introduction of Configurable Depreciation Profiles | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:24:44.970Z",
      "summary": "Instead of the previously predefined depreciation keys, SAP now provides configurable depreciation profiles. Pilot customers can already use the configurable depreciation profiles in this release; all other customers can already see the depreciation profiles on the UI. In a later release, the previous depreciation keys will be completely replaced by configurable depreciation profiles for all customers. About the Previous Depreciation Keys For the depreciation of fixed assets, SAP delivers predefined depreciation keys for each country/region. You cannot change these predefined depreciation keys. You also do not have",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "Instead of the previously predefined depreciation keys, SAP now provides configurable depreciation profiles. Pilot customers can already use the configurable depreciation profiles in this release; all other customers can already see the depreciation profiles on the UI. In a later release, the previous depreciation keys will be completely replaced by configurable depreciation profiles for all customers. About the Previous Depreciation Keys For the depreciation of fixed assets, SAP delivers predefined depreciation keys for each country/region. You cannot change these predefined depreciation keys. You also do not have"
        },
        {
          "heading": "Implementation details from SAP",
          "text": "\" section below.  For all other customers (non-pilot customers), if you do not yet activate the depreciation profile feature, you use your depreciation keys as before.  The feature is generally available for all customers.  SAP activates the feature for all customers who have not activated the feature by then.  Implementation Details Implementation Steps in This Release From the start of the 2608 release upgrade until the activation of the depreciation profile feature, the following steps are required: Step No.  Explanation Affected Customers 1 The technical release upgrade takes place.  All customers 2 During the system downtime, a program automatically converts all existing depreciation keys into depreciation profiles.  The previous depreciation keys are retained."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "activities to create your own depreciation keys yourself.  The only way to have your own depreciation keys created is to request expert configuration (but this is only possible with SAP Central Business Configuration as configuration environment).  About the New Depreciation Profiles SAP now provides depreciation profiles as successors to the depreciation keys.  The depreciation profiles are based on a simplified data model.  Based on this simplified data model, SAP now provides configuration activities for amount methods and depreciation profiles.  As a pilot customer, you can use these to do the following: Create your own amount methods (for example, to specify memo values or maximum depreciation amounts) and assign them to depreciation profiles."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 33G,J62,BFH,1GB,1GF,33F. Use affected app/technical object F3425A."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Introduction of Configurable Depreciation Profiles: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item J62; 1GB; 1GF; BFH; 33F; 33G Technical Object Name See object lists above. Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade."
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Introduction of Configurable Depreciation Profiles, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Introduction of Configurable Depreciation Profiles",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/8dc50d36a00f427c89e31cc56f76d600?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "Asset master record in the \"Manage Fixed Assets\" app showing the valuation including depreciation profiles",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loiod671d784419649ec99e46654d9a99c4a_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/924a34c182894c5da29b0a2c9a6e01cf?version=2608.00": {
      "title": "Copy Attachments from Bank Statement Items and Lockbox Items to Clearing Journal Entries",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/924a34c182894c5da29b0a2c9a6e01cf?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Copy Attachments from Bank Statement Items and Lockbox Items to Clearing Journal Entries | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:24:49.532Z",
      "summary": "You can now choose Post and Copy Attachments when reprocessing bank statement items in the Reprocess Bank Statement Items (F1520) app or lockbox items in the Reprocess Lockbox Items (F3398) app. This transfers attachments from the bank statement items or lockbox items to the clearing journal entry during posting.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "You can now choose Post and Copy Attachments when reprocessing bank statement items in the Reprocess Bank Statement Items (F1520) app or lockbox items in the Reprocess Lockbox Items (F3398) app. This transfers attachments from the bank statement items or lockbox items to the clearing journal entry during posting."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access the apps, their business users need to have the following IAM apps assigned: Reprocess Bank Statement Items (F1520_TRAN) Reprocess Lockbox Items (F3398_TRAN)"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1JT,J59. Use affected app/technical object F1520, F3398."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Copy Attachments from Bank Statement Items and Lockbox Items to Clearing Journal Entries: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item Accounts Receivable (J59) Lockbox (1JT) Technical Object Name App ID: F1520 App ID: F3398 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-AR (Fiori UI for Accounts Receivable) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Copy Attachments from Bank Statement Items and Lockbox Items to Clearing Journal Entries, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Copy Attachments from Bank Statement Items and Lockbox Items to Clearing ",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/924a34c182894c5da29b0a2c9a6e01cf?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/966b27fdeca94c9c9a97a8e0aede6daa?version=2608.00": {
      "title": "Supply Blocks in Sales Documents",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/966b27fdeca94c9c9a97a8e0aede6daa?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Supply Blocks in Sales Documents | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:24:53.139Z",
      "summary": "You can now make settings so that the system automatically sets a supply block for sales orders and sales orders without charge in specific scenarios.  This allows you to temporarily suspend all supply-related activities.  These blocks can be helpful, for example, when you need to clarify a price discrepancy or when a sales order or sales order without charge is incomplete.  The system sets the supply block on sales document header or item level and has the following implications: The confirmed quantity in the sales document item is set to zero.  The transfer of requirements to material requirement planning (MRP) is stopped.  The creation of a purchase requisition is deferred.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "You can now make settings so that the system automatically sets a supply block for sales orders and sales orders without charge in specific scenarios.  This allows you to temporarily suspend all supply-related activities.  These blocks can be helpful, for example, when you need to clarify a price discrepancy or when a sales order or sales order without charge is incomplete.  The system sets the supply block on sales document header or item level and has the following implications: The confirmed quantity in the sales document item is set to zero.  The transfer of requirements to material requirement planning (MRP) is stopped.  The creation of a purchase requisition is deferred."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "In the Custom Logic app, your key user can create an implementation for the Modification of Sales Document in Finalize Phase before Save (SD_SLS_FINALIZE) Business Add-In (BAdI)."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. In the Manage Sales Orders app, you can adapt the filters and then filter for the overall supply block status on the header. You can also display this status as a column in the list of all sales orders. In addition to the header status in the list of all sales orders, you can also display the supply block reason and the supply block status on item level in the items table in the Manage Sales Orders - Version 2 app: In the Change Sales Orders - VA02 app, you can view the supply block reason on the schedule lines tab of an item: For more information about where you can find the supply block fields, see Supply Blocks in Apps, APIs, CDS Views, BAdIs, and Output."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BD9."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Supply Blocks in Sales Documents: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item BD9 (Sell from Stock) and others Technical Object Name Not applicable Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. Yes Application Component SD-SLS (Sales) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Supply Blocks in Sales Documents, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Supply Blocks in Sales Documents",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/966b27fdeca94c9c9a97a8e0aede6daa?version=2608.00"
        },
        {
          "label": "Supply Blocks in Apps, APIs, CDS Views, BAdIs, and Output",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6cede677799f47c5a1e9772b2b598829.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Configuration",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4bd44b75576f4d64abe51234fcc4fcfd.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Supply Blocks in Sales Documents",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/07db75ead8df47ceb7bbf1733b47b929.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": [
        {
          "label": "The graphic is explained in the accompanying text.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loioc28d76b8422e43e6bb915dd1c216a6d8_LowRes.png"
        },
        {
          "label": "The graphic is explained in the accompanying text.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio5cca547b877e4ea985161b478b269216_LowRes.png"
        },
        {
          "label": "The graphic is explained in the accompanying text.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio80c750cad74140b89ebb93fe5aa9a290_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9a4ee4682e57491386b63aad27aba0ba?version=2608.00": {
      "title": "Enhancements for the Define Cash Position Profiles and Short-Term Cash Positioning Apps",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9a4ee4682e57491386b63aad27aba0ba?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Enhancements for the Define Cash Position Profiles and Short-Term Cash Positioning Apps | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:24:57.907Z",
      "summary": "With this feature, the Define Cash Position Profiles app (FCLM_CP_PROFILE) and the Short-Term Cash Positioning app (F5380) have been enhanced with several user experience improvements, including a new flexible hierarchy option for hierarchy derivation, an improved settings structure and labels for the user interface, dynamic filters, and enhanced handling of memo records 2.  0.  The following improvements have been made: New Flexible Hierarchy The new flexible hierarchy option allows you to define the report hierarchy directly in the Short-Term Cash Positioning app using the Settings button above the table (see screenshot below), instead of predefining it in a cash position profile.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, the Define Cash Position Profiles app (FCLM_CP_PROFILE) and the Short-Term Cash Positioning app (F5380) have been enhanced with several user experience improvements, including a new flexible hierarchy option for hierarchy derivation, an improved settings structure and labels for the user interface, dynamic filters, and enhanced handling of memo records 2.  0.  The following improvements have been made: New Flexible Hierarchy The new flexible hierarchy option allows you to define the report hierarchy directly in the Short-Term Cash Positioning app using the Settings button above the table (see screenshot below), instead of predefining it in a cash position profile."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Review only if this exact feature is used by CFA or sits in a used scope/process. Scope item(s): J78. Use affected app/technical object F5380."
        },
        {
          "heading": "How to test",
          "text": "Use SAP's article details to identify the specific changed field, app action, report output, configuration setting, or process behaviour; then run one realistic walkthrough with the owning business role."
        },
        {
          "heading": "Expected result",
          "text": "The changed behaviour appears exactly where SAP describes it and does not break the current CFA user flow. Record relevant, not relevant, or future adoption."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type Changed Functional Localization No localization Scope Item J78 (Advanced Cash Operations) Technical Object Name App ID: FCLM_CP_PROFILE F5380 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FIN-FSCM-CLM (Cash Operations) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current behaviour for the affected app/process before upgrade if the area is used.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 changed behaviour and whether CFA needs release testing, future adoption, or no action.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Enhancements for the Define Cash Position Profiles and Short-Term Cash Po",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9a4ee4682e57491386b63aad27aba0ba?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio64cfe3b5fdd14e83aabf77036674e04e_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9bf56a513740415aa18d1a465cdb0490?version=2608.00": {
      "title": "Starting Financial Plan Data Jobs from SAP Analytics Cloud Multi Action",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9bf56a513740415aa18d1a465cdb0490?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:25:01.521Z",
      "summary": "With this release, the communication scenario SAP_COM_0087 (SAP Analytics Cloud for Planning Integration) has been enhanced with a new service: Start Jobs to pull Plan Data from SAP Analytics Cloud (API_FINPLANPULLJOB).  The service provides an additional, more efficient way to start the integration of plan data between an SAP Analytics Cloud (SAC) model and SAP S/4HANA Cloud Public Edition.  You can start the integration directly from an SAC Story using Multi Action.  This is an alternative and direct way to start the integration manually from the Schedule Financial Plan Data Jobs for SAP Analytics Cloud Integration app in SAP S/4HANA Cloud Public Edition.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this release, the communication scenario SAP_COM_0087 (SAP Analytics Cloud for Planning Integration) has been enhanced with a new service: Start Jobs to pull Plan Data from SAP Analytics Cloud (API_FINPLANPULLJOB).  The service provides an additional, more efficient way to start the integration of plan data between an SAP Analytics Cloud (SAC) model and SAP S/4HANA Cloud Public Edition.  You can start the integration directly from an SAC Story using Multi Action.  This is an alternative and direct way to start the integration manually from the Schedule Financial Plan Data Jobs for SAP Analytics Cloud Integration app in SAP S/4HANA Cloud Public Edition."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "To use this feature, complete the preparation steps in your SAP S/4HANA and SAP Analytics Cloud systems. For more information, refer to How to Start Financial Plan Data Jobs from SAP Analytics Cloud Multi Action."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): 1YB."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item 1YB Technical Object Name API_FINPLANPULLJOB Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CO-FIO-OM-PL-2CL (Financial Planning) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Starting Financial Plan Data Jobs from SAP Analytics Cloud Multi Action",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9bf56a513740415aa18d1a465cdb0490?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9e734faa9c7d45268e5d3e32e4c0b45a?version=2608.00": {
      "title": "New App Manage Alternative Chart of Accounts",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9e734faa9c7d45268e5d3e32e4c0b45a?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "New App Manage Alternative Chart of Accounts | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:25:05.062Z",
      "summary": "With the new Manage Alternative Chart of Accounts app you create and update alternative G/L accounts.  You then assign alternative G/L accounts to operating G/L accounts to maintain the alternative G/L accounts in the eligible company code assignments of the operating G/L account.  An alternative chart of accounts is specific to an industry or a country/region and contains the G/L accounts that meet specific legal reporting requirements for that industry or country/region.  The pre-delivered content for SAP S/4HANA Cloud Public Edition includes standard alternative chart of accounts for a number of countries/regions.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With the new Manage Alternative Chart of Accounts app you create and update alternative G/L accounts.  You then assign alternative G/L accounts to operating G/L accounts to maintain the alternative G/L accounts in the eligible company code assignments of the operating G/L account.  An alternative chart of accounts is specific to an industry or a country/region and contains the G/L accounts that meet specific legal reporting requirements for that industry or country/region.  The pre-delivered content for SAP S/4HANA Cloud Public Edition includes standard alternative chart of accounts for a number of countries/regions."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "activity. After you assign the new alternative chart of accounts to a company code, you create the alternative G/L accounts for it and assign these alternative G/L accounts to your operating G/L accounts."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): J58. Use affected app/technical object F8390."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Ite J58 (Accounting and Financial Close) Technical Object Name App ID: F8390 App Name: Manage Alternative Chart of Accounts Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-GL-GL-N (Master Data) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - New App Manage Alternative Chart of Accounts",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9e734faa9c7d45268e5d3e32e4c0b45a?version=2608.00"
        },
        {
          "label": "Manage Alternative Chart of Accounts",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b796c01009574189bcdc30ea65c44f45.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Chart of Accounts Maintenance: Authorization Concept",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e9f32ebd0bb346908af6b85bd32a5412.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a6549ba593804bf5988bfa81a91efcae?version=2608.00": {
      "title": "Optimized Error Handling for Bank Account Imports",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a6549ba593804bf5988bfa81a91efcae?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Optimized Error Handling for Bank Account Imports | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:25:09.762Z",
      "summary": "Previously, when bank accounts were imported using an XML file in the Manage Bank Accounts app (F1366A), errors were reported separately for each bank account.  This made processing complicated, especially when many bank accounts were involved.  With this feature, error handling is significantly enhanced: You now have a centralized view of all errors related to both file validations and bank account master data validations for all accounts in the import.  The message texts are enhanced with clear indications to help users pinpoint errors in the source file.  An external ID is provided to help users access the application log in the Display Bank Account Logs app (F6777).",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "Previously, when bank accounts were imported using an XML file in the Manage Bank Accounts app (F1366A), errors were reported separately for each bank account.  This made processing complicated, especially when many bank accounts were involved.  With this feature, error handling is significantly enhanced: You now have a centralized view of all errors related to both file validations and bank account master data validations for all accounts in the import.  The message texts are enhanced with clear indications to help users pinpoint errors in the source file.  An external ID is provided to help users access the application log in the Display Bank Account Logs app (F6777).  Additionally, you can export these error messages to a spreadsheet.  This enables efficient processing and resolution of all issues at the same time."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BFA. Use affected app/technical object F1366A, F6777."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Optimized Error Handling for Bank Account Imports: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type Changed Functional Localization No localization Scope Item BFA (Basic Bank Account Management) Technical Object Name App ID: F1366A F6777 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FIN-FSCM-CLM-BAM (Bank Account Management) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Optimized Error Handling for Bank Account Imports, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Optimized Error Handling for Bank Account Imports",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a6549ba593804bf5988bfa81a91efcae?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loioe46d1453a47344a59401698548012b29_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/af84507dcdf840ca839e5c6353da57e3?version=2608.00": {
      "title": "Archiving of External Tax for Statutory Reporting",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/af84507dcdf840ca839e5c6353da57e3?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Archiving of External Tax for Statutory Reporting | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:25:14.290Z",
      "summary": "This feature enables you to archive external tax for Statutory reporting. The External Tax Items have now fulfilled the residence time and can be archived. For more details, refer Archiving External Tax for Statutory Reporting Using ETTX_STRP.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "This feature enables you to archive external tax for Statutory reporting. The External Tax Items have now fulfilled the residence time and can be archived. For more details, refer Archiving External Tax for Statutory Reporting Using ETTX_STRP."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1J2,5XU."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Archiving of External Tax for Statutory Reporting: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item 5XU, 1J2 Technical Object Name Archiving object: External Tax for Statutory Reporting, ILM object: ETTX_STRP Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-AP-AP-Q1 Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Archiving of External Tax for Statutory Reporting, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Archiving of External Tax for Statutory Reporting",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/af84507dcdf840ca839e5c6353da57e3?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b7a55dd577774f46871b8154b987c260?version=2608.00": {
      "title": "New MDG Apps for Mass Load and Mass Maintenance",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b7a55dd577774f46871b8154b987c260?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "New MDG Apps for Mass Load and Mass Maintenance | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:25:17.868Z",
      "summary": "As of this release, there are new features and apps as well as changes for apps related to Mass Load and Mass Maintenance for Products.  The following new app versions are available: Mass Load and Mass Maintenance: New App Versions New App / New Feature New App ID Feature Description Manage Mass Maintenance - Products F9335 With this app, you can create mass processes for product data with the process goal Mass Maintenance.  You can also display processes that have the process goals Mass Maintenance or Single Processing.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "As of this release, there are new features and apps as well as changes for apps related to Mass Load and Mass Maintenance for Products.  The following new app versions are available: Mass Load and Mass Maintenance: New App Versions New App / New Feature New App ID Feature Description Manage Mass Maintenance - Products F9335 With this app, you can create mass processes for product data with the process goal Mass Maintenance.  You can also display processes that have the process goals Mass Maintenance or Single Processing.  Manage Remediation Processes - Products F9310 With this app, you can manage the processes for the master data remediation to check and correct the master data you have selected.  Export Master Data - Products F8465 With this app, you can export a selection of master data to a local file."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "This feature will not automatically be available in your system but requires that you activate the feature Successor MDG Apps for Product) (MDC_PRODUCT_GOVERNANCE) in the"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "activity Activate Features. For more information, see Activate Features. Authorizations To enable users to access this app, their business users need to have the following business catalog assigned: SAP_CMD_BC_PROD_MAINT_PC."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1RM. Use affected app/technical object F9335, F9310, F8465, F8469, F8544, F8468, F8470."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for New MDG Apps for Mass Load and Mass Maintenance: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item 1RM (Mass Load and Mass Maintenance for Product) Technical Object Name See tables in the Business Details section. Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CA-MDG-CMP (Consolidation & Mass Processing) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for New MDG Apps for Mass Load and Mass Maintenance, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - New MDG Apps for Mass Load and Mass Maintenance",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b7a55dd577774f46871b8154b987c260?version=2608.00"
        },
        {
          "label": "Activate Features",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/3e94fcc37b42433b97d6aef0c830dc52.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/bcc072f5262d46fa862b78b59a0dadf3?version=2608.00": {
      "title": "Down Payments with Reference to Purchase Order",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/bcc072f5262d46fa862b78b59a0dadf3?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Down Payments with Reference to Purchase Order | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:25:21.663Z",
      "summary": "Down payment requests and down payments that refer to a purchase order item that is assigned to an asset can be posted with reference to the purchase order item. However, the asset account assignment is not transferred. Example You create a purchase order item with the account assignment category Asset (A) and assign an asset. In the app Manage Supplier Down Payment Requests (F1688), you assign the purchase order item to the down payment request. The account assignment for the asset is not transferred to the down payment request, but the down payment request can be saved and processed. In this way, you have established a link between the purchase order and the down payment.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "Down payment requests and down payments that refer to a purchase order item that is assigned to an asset can be posted with reference to the purchase order item. However, the asset account assignment is not transferred. Example You create a purchase order item with the account assignment category Asset (A) and assign an asset. In the app Manage Supplier Down Payment Requests (F1688), you assign the purchase order item to the down payment request. The account assignment for the asset is not transferred to the down payment request, but the down payment request can be saved and processed. In this way, you have established a link between the purchase order and the down payment."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): J62. Use affected app/technical object F1688."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item J62 Technical Object Name App ID: F1688 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component Asset Accounting (FI-AA) Valid as Of SAP S/4HANA Cloud Public Edition 2608 Additional Information For more information about vendor down payments, see the product assistance for Asset Accounting under Vendor Down Payment."
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Down Payments with Reference to Purchase Order",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/bcc072f5262d46fa862b78b59a0dadf3?version=2608.00"
        },
        {
          "label": "Vendor Down Payment",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/48c65fa40af1437aabf69329a0e443c0.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d2110ca673a44d63b68e0f8be354c602?version=2608.00": {
      "title": "New MDG Apps for Products",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d2110ca673a44d63b68e0f8be354c602?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "New MDG Apps for Products | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:25:26.665Z",
      "summary": "As of this release, there are new features, apps, and changes for apps related to SAP Master Data Governance for products.  The following new app versions are available: Central Governance Consolidation Data Quality Management Mass Load and Mass Maintenance New App Versions New App / New Feature New App ID Feature Description Manage Governance Processes - Products F8466 With this app, you can create and display governance processes (including mass processes) for product data.  Track Changes - Products F8469 With this app, you can display all products that were part of a finalized master data process, such as a consolidation or a central governance process.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "As of this release, there are new features, apps, and changes for apps related to SAP Master Data Governance for products.  The following new app versions are available: Central Governance Consolidation Data Quality Management Mass Load and Mass Maintenance New App Versions New App / New Feature New App ID Feature Description Manage Governance Processes - Products F8466 With this app, you can create and display governance processes (including mass processes) for product data.  Track Changes - Products F8469 With this app, you can display all products that were part of a finalized master data process, such as a consolidation or a central governance process.  View Summary of Changes - Products F8470 With this app, you can display and monitor the changes on field level that were made to product data."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "This feature will not automatically be available in your system but requires that you activate the feature Successor MDG Apps for Product (MDC_PRODUCT_GOVERNANCE) in the"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "activity Activate Features. For more information, see Activate Features. Authorizations New Business Catalogs Business Catalog Application Component Business Role Template (Example) Master Data Governance - Central Governance for Products (SAP_CMD_BC_PROD_GOV_PC) CA-MDG-CMP-MM Master Data Specialist - Product Data (SAP_BR_PRODMASTER_SPECIALIST) Master Data Governance - Consolidation for Products (SAP_CMD_BC_PROD_CONS_PC) CA-MDG-CMP-MM Master Data Specialist - Product Data (SAP_BR_PRODMASTER_SPECIALIST) Master Data Governance - Mass Maintenance for Products (SAP_CMD_BC_PROD_MAINT_PC) CA-MDG-CMP-MM Master Data Specialist - Product Data (SAP_BR_PRODMASTER_SPECIALIST)"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1RM,1N5,4AQ,1N1. Use affected app/technical object F8466, F8469, F8470, F8465, F8468, F8467, F9381."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for New MDG Apps for Products: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item 1N1 (Master Data Consolidation for Product) 1N5 (Central Governance for Product) 4AQ (Data Quality Management for Product) 1RM (Mass Load and Mass Maintenance for Product) Technical Object Name See tables in the Business Details section. Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CA-MDG-CMP (Consolidation & Mass Processing) CA-MDG-ADQ (Master Data Quality Management) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for New MDG Apps for Products, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - New MDG Apps for Products",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d2110ca673a44d63b68e0f8be354c602?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/df68f4ee47074e4f8513f08c8ab495ae?version=2608.00": {
      "title": "Create Payment Media",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/df68f4ee47074e4f8513f08c8ab495ae?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:25:30.539Z",
      "summary": "A new app, Create Payment Media - for Payment Runs (ID: F7711), is available to display payment media generation status, delete payment groups and their associated payment files, and manually recreate payment media.  In cases where the automatic generation of payment media fails due to system errors, missing authorizations, or the failure of payment runs, there might be no payments in the file or duplicated payments in the file.  User can delete the payment group and associated payment files if necessary, and recreate payment media for a payment group or from a payment run.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "A new app, Create Payment Media - for Payment Runs (ID: F7711), is available to display payment media generation status, delete payment groups and their associated payment files, and manually recreate payment media.  In cases where the automatic generation of payment media fails due to system errors, missing authorizations, or the failure of payment runs, there might be no payments in the file or duplicated payments in the file.  User can delete the payment group and associated payment files if necessary, and recreate payment media for a payment group or from a payment run.  Additionally, users can navigate to other apps via links to the payment file ID to view detailed payment or payment file information, such as in the Manage Payment Media app (ID: F1868)."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access the Create Payment Media - for Payment Runs app, their business users must be assigned the Create Payment Media (F7711_TRAN) IAM app.  To further control whether a user can perform specific actions, such as deleting payment groups and associated payment files or retrying payment media creation, you need to define restrictions based on the relevant restriction types.  Authorization for Recreating Payment Media To grant users the authorization to retry payment media creation, assign the Retry Payment Media Creation value with Write access under the General Payment Media Remediation restriction settings.  To limit the company codes for which this action can be performed, specify the authorized company codes under General Company Code with Write access."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. The following is an example of the user interface:"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J60. Use affected app/technical object F7711, F1868."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Create Payment Media: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item J60 (Accounts Payable) Technical Object Name App ID: F7711 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-AP-AP-B (Payment Program / Payment Transfer) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Create Payment Media, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Create Payment Media",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/df68f4ee47074e4f8513f08c8ab495ae?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loioc4a885f34b6b4b5dafa98b2e2d424d20_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e72b22da06164071a08918d49e4a9ca6?version=2608.00": {
      "title": "Sales Document Output: Supply Block-Related Fields",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e72b22da06164071a08918d49e4a9ca6?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Sales Document Output: Supply Block-Related Fields | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:25:34.125Z",
      "summary": "For sales orders and sales orders without charge, supply block-related fields are now available to include in document output and to define output rules: The overall supply block status (header level), supply block status (item level), and supply block reason (item level) can be added to custom output form templates. The overall supply block status (header level) can be used as a condition field to define output rules. This allows for visibility of supply block-",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "For sales orders and sales orders without charge, supply block-related fields are now available to include in document output and to define output rules: The overall supply block status (header level), supply block status (item level), and supply block reason (item level) can be added to custom output form templates. The overall supply block status (header level) can be used as a condition field to define output rules. This allows for visibility of supply block-"
        },
        {
          "heading": "Implementation details from SAP",
          "text": "If you want to render output and control output relevance using supply block-related fields, complete the following steps: Add supply-block related fields to custom form templates. In the Maintain Form Templates app, you as an extensibility specialist add the fields to relevant custom form templates using Adobe LiveCycle Designer. Relevant form templates include the following: SD_SLS_ORDER_CONFIRM (for sales orders) SD_SLS_ORDER_WO_CHARGE (for sales orders without charge) For detailed instructions, see How to Create and Use Custom Form Templates. For information about form templates in general, see Form Templates and Maintain Form Templates. Assign the custom form templates to output types. In your"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "environment, you as a configuration expert assign the custom form templates to relevant output types in the Assign Form Templates configuration activity.  Relevant output types include the following: ORDER_CONFIRMATION and ORDER_CONFIRMATION_CHANGE (for sales orders) ORDER_WO_CHARGE and ORDER_WO_CHARGE_CHANGE (for sales orders without charge) For each relevant output type, define output rules based on the overall supply block status field.  Note Before using this field for the first time, you must refresh the Condition Parameters of Application structure in the Output Parameter Determination app to update the available fields.  For detailed steps on how to perform the update, see the chapter 4.  3.  3.  3.  2 in Refresh Condition Parameters of Application."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BDA,BD9."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Sales Document Output: Supply Block-Related Fields: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item BD9 (Sell from Stock) BDA (Free of Charge Delivery) Technical Object Name Form Template SD_SLS_ORDER_CONFIRM SD_SLS_ORDER_WO_CHARGE Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component SD-SLS-GF-OC (S/4HANA: Output Control on Sales Documents) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Sales Document Output: Supply Block-Related Fields, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Sales Document Output: Supply Block-Related Fields",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e72b22da06164071a08918d49e4a9ca6?version=2608.00"
        },
        {
          "label": "Output Management for Sales Documents and Billing Documents",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d9cc17d1aa404aee9bf2d10599c9a8d1.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "How to Create and Use Custom Form Templates",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/a2b387872d4743989769c432a482008d.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Form Templates",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/aaad0f198a634014b0776e001e4980bc.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Maintain Form Templates",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/da488f76078447b0b42792226cfcf9b1.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Refresh Condition Parameters of Application",
          "url": "https://help.sap.com/docs/link-disclaimer?site=https%3A%2F%2Fsupport.sap.com%2Fcontent%2Fdam%2FSAAP%2FSol_Pack%2FLibrary%2FSetup%2F1LQ_Set-Up_EN_XX.pdf"
        },
        {
          "label": "Output Parameter Determination",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/fdc3cf565b1b6b15e10000000a441470.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Supply Blocks in Sales Documents",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/07db75ead8df47ceb7bbf1733b47b929.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e9d4896fb1314ce18f9f60c7ed7391fd?version=2608.00": {
      "title": "New App: Manage Value Extraction Rules - For Bank Statements",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e9d4896fb1314ce18f9f60c7ed7391fd?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "New App: Manage Value Extraction Rules - For Bank Statements | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:25:38.748Z",
      "summary": "With the new Manage Value Extraction Rules - For Bank Statements (F9297) app, you can define patterns to extract reference values (such as IBANs or payment references) from bank statement memo lines. Value extractions can be assigned to enrichment rules and processing rules. When applied during bank statement processing, they extract reference values from the memo line, which are then used in enrichment rules for business partner identification, or in downstream processing rules for open item matching.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With the new Manage Value Extraction Rules - For Bank Statements (F9297) app, you can define patterns to extract reference values (such as IBANs or payment references) from bank statement memo lines. Value extractions can be assigned to enrichment rules and processing rules. When applied during bank statement processing, they extract reference values from the memo line, which are then used in enrichment rules for business partner identification, or in downstream processing rules for open item matching."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations To enable users to access the apps, their business users need to have the IAM app Manage Value Extraction Rules (F9297_TRAN) assigned."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J59. Use affected app/technical object F9297."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for New App: Manage Value Extraction Rules - For Bank Statements: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item Accounts Receivable (J59) Technical Object Name App ID: F9297 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-AR (Fiori UI for Accounts Receivable) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for New App: Manage Value Extraction Rules - For Bank Statements, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - New App: Manage Value Extraction Rules - For Bank Statements",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/e9d4896fb1314ce18f9f60c7ed7391fd?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f7245eda21a14ee9b9a1399797c7d5cb?version=2608.00": {
      "title": "New Target and Source Fields for Substitution Rules",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f7245eda21a14ee9b9a1399797c7d5cb?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "New Target and Source Fields for Substitution Rules | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:25:58.208Z",
      "summary": "To further enhance customizability for your integration with SAP Concur, with this release we provide new fields to use when creating substitution rules for expense reports in the app Manage Concur Substitution Rules (App ID: F6846): Target fields at the header level Additional target fields at the item level Additional source fields For more details on creating and managing substitution rules, see the SAP Integration with Concur Solutions – Setup Guide.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "To further enhance customizability for your integration with SAP Concur, with this release we provide new fields to use when creating substitution rules for expense reports in the app Manage Concur Substitution Rules (App ID: F6846): Target fields at the header level Additional target fields at the item level Additional source fields For more details on creating and managing substitution rules, see the SAP Integration with Concur Solutions – Setup Guide."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): 1M1. Use affected app/technical object F6846, F8690, F8636."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item 1M1 (Travel Expense Processing with SAP Concur) Technical Object Name App ID: F6846 CTE_SETUP F8690 CTE_POST_MONI CTE_MONI F8636 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component BNS-CON-SE-S4-FIN (Concur S/4HANA Financial Integration) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - New Target and Source Fields for Substitution Rules",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f7245eda21a14ee9b9a1399797c7d5cb?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f9bee7426ef244a29040df19317776b1?version=2608.00": {
      "title": "Liquidity Item Derivation for Intraday Bank Statements",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f9bee7426ef244a29040df19317776b1?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Liquidity Item Derivation for Intraday Bank Statements | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:26:02.877Z",
      "summary": "You can now use queries with origin B (From Bank Statement Text Information) to derive liquidity items for intraday memo records that are generated from intraday bank statements.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "You can now use queries with origin B (From Bank Statement Text Information) to derive liquidity items for intraday memo records that are generated from intraday bank statements."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "This feature will not automatically be available in your system but requires that you activate the feature New Integration Strategy for Bank Statements and Cash Mgmt (FTGL_BS_CASH_SIMP_INTEGRATION) in the"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "activity Activate Features. Configuration To derive liquidity items for intraday bank statement flows using queries with origin B (From Bank Statement Text Information), configure the following: Define the queries with origin B in the Define Queries for Liquidity Item Derivation app (FLQQA1). Define the query sequences for origin B in the configuration activity Define Query Sequences (ID: 105878). Assign the defined queries to the query sequences with origin B in the Assign Queries to Query Sequences app (FLQQA5). Assign the query sequences with origin B to relevant company codes in the configuration activity Assign Sequences to Company Codes (ID: 105900)."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J78."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Liquidity Item Derivation for Intraday Bank Statements: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item J78 (Advanced Cash Operations) Technical Object Name App ID: FLQQA1 FLQQA5 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FIN-FSCM-CLM-COP (Cash Operations) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Liquidity Item Derivation for Intraday Bank Statements, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Liquidity Item Derivation for Intraday Bank Statements",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f9bee7426ef244a29040df19317776b1?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/fe35a4b44c934677bb6ef041d7859668?version=2608.00": {
      "title": "New Balance Type Current Available Balance",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/fe35a4b44c934677bb6ef041d7859668?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "New Balance Type Current Available Balance | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:26:07.943Z",
      "summary": "With this feature, the Short-Term Cash Positioning app (F5380) and the Manage Bank Account Balances app (F5175) now support current available balances sourced from intraday bank statements and instant balances.  This balance type is also supported in the CDS views Bank Account Balances - Cube (I_BkCshBalByCshBalDteCube) and Bank Account Balances - Query (C_BkCshBalByCshBalDteQuery), allowing you to build your own bank account balances report on SAP Analytics Cloud.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, the Short-Term Cash Positioning app (F5380) and the Manage Bank Account Balances app (F5175) now support current available balances sourced from intraday bank statements and instant balances.  This balance type is also supported in the CDS views Bank Account Balances - Cube (I_BkCshBalByCshBalDteCube) and Bank Account Balances - Query (C_BkCshBalByCshBalDteQuery), allowing you to build your own bank account balances report on SAP Analytics Cloud.  This balance type represents the funds available in your bank accounts during the day, allowing you to make timely funding and liquidity decisions based on more current balance information rather than relying on end-of-day balances of the prior day."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Authorizations No changes to authorizations are required. Users who currently have access to the Short-Term Cash Positioning app (F5380) and Manage Bank Account Balances app (F5175) will automatically have access to these enhancements."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J78. Use affected app/technical object F5380, F5175."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for New Balance Type Current Available Balance: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item J78 (Advanced Cash Operations) Technical Object Name App ID: F5380 F5175 FCLM_CP_PROFILE Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FIN-FSCM-CLM (Cash Operations) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for New Balance Type Current Available Balance, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - New Balance Type Current Available Balance",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/fe35a4b44c934677bb6ef041d7859668?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "In the Manage Bank Account Balances app, a new tab shows a list of current available balances.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio15081e32ac04479686328085ef7004ef_LowRes.png"
        },
        {
          "label": "In the Short-Term Cash Positioning app, the current available balance is displayed for the current date with a link to the associated intraday bank statement.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loioe0bc052c360d49f497c966ad6928cbca_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/0aeadec7fcff422fa05a204133a84670?version=2608.00": {
      "title": "Advanced Foreign Currency Valuation - New Valuation Rule Available to Cover IFRS 18 Requirements",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/0aeadec7fcff422fa05a204133a84670?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Advanced Foreign Currency Valuation - New Valuation Rule Available to Cover IFRS 18 Requirements | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:26:12.663Z",
      "summary": "In Advanced Valuation in Financial Accounting there's a new valuation rule available for Advanced Foreign Currency Valuation. You can see this new rule in the",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "In Advanced Valuation in Financial Accounting there's a new valuation rule available for Advanced Foreign Currency Valuation. You can see this new rule in the"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "activity Define Rules for Advanced Foreign Currency Valuation ID: 105450.  The new valuation rule with the name SIFR Key Date Foreign Currency Valuation covers requirements for IFRS 18 Presentation and Disclosure in Financial Statements, income/expense category classification (Operating, Financing, Investing).  The new valuation rule SIFR Key Date Foreign Currency Valuation contains the following valuation rule steps.  To each step a corresponding semantic tag assigned: Valuation Rule Step Description Semantic Tag 10 Val Monetary Items Operating Categ.  FX_OP 20 Val Monetary Items Financing Categ.  FX_FIN 0 Val Monetary Items Investing Categ.  FX_INV If you want to use this rule, you mus assign the semantic tags defined in the rule steps to the relevant G/L accounts."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J58,1GA."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Advanced Foreign Currency Valuation - New Valuation Rule Available to Cover IFRS 18 Requirements: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Innovation Type New Functional Localization No localization Scope Item J58 (Accounting and Financial Close) there's (Accounting and Financial Close – Group Ledger IFRS) Technical Object Name Configuration Activity: Define Rules for Advanced Foreign Currency Valuation (ID: 105450 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. Yes Application Component FI-GL-GL-G (Closing Operations / Period-End) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        },
        {
          "heading": "Configuration / SSCUI to check",
          "text": "ID: 105450 | configuration activity Define Rules for Advanced Foreign Currency Valuation ID: 105450 | Configuration Activity: Define Rules for Advanced Foreign Currency Valuation (ID: 105450 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system land"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Advanced Foreign Currency Valuation - New Valuation Rule Available to Cover IFRS 18 Requirements, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Advanced Foreign Currency Valuation - New Valuation Rule Available to Cov",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/0aeadec7fcff422fa05a204133a84670?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/15c65e18eb1747c9b84e35c031c26147?version=2608.00": {
      "title": "Maintain Category for Planning: Removal of Exception for PRO01 (CPM Baseline)",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/15c65e18eb1747c9b84e35c031c26147?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Maintain Category for Planning: Removal of Exception for PRO01 (CPM Baseline) | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:26:17.443Z",
      "summary": "The exception that previously allowed the use of plan category PRO01 (CPM Baseline) in several apps has been removed.  You can no longer use plan category PRO01 in the following apps: Import Financial Plan Data (F1711) Copy Financial Plan Data (F3396) Compress Financial Plan Data (F6537) Delete Financial Plan Data (F4851) Delete Financial Plan Data - with Timestamp (F4074) Previously, you could activate them by selecting the checkboxes under Allow Entry/Delete of Plan Data.  Now, you can no longer import, copy, delete, or compress financial plan data for this plan category.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The exception that previously allowed the use of plan category PRO01 (CPM Baseline) in several apps has been removed.  You can no longer use plan category PRO01 in the following apps: Import Financial Plan Data (F1711) Copy Financial Plan Data (F3396) Compress Financial Plan Data (F6537) Delete Financial Plan Data (F4851) Delete Financial Plan Data - with Timestamp (F4074) Previously, you could activate them by selecting the checkboxes under Allow Entry/Delete of Plan Data.  Now, you can no longer import, copy, delete, or compress financial plan data for this plan category.  This change aligns the behavior of PRO01 with its intended purpose for app-managed data like SAP Commercial Project Management (CPM), and helps prevent unsupported planning activities, ensuring data consistency and process reliability."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. The four options listed under Allow Entry/Delete of Plan Data that allow the importing, copying, deleting and compressing of financial plan data are exclusively reserved for: Plan categories related to application type Periodic Planning and Consolidation Special service documents (application type: Service Document) related to object-based planning with usage description Manual update. Project management plan categories (application type: Project Management) related to object-based planning with usage description Manual update."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1YB,1HB. Use affected app/technical object F1711, F3396, F6537, F4851, F4074."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Maintain Category for Planning: Removal of Exception for PRO01 (CPM Baseline): confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Information Type Changed Functional Localization No localization Scope Item 1HB 1YB Technical Object Name 101970 (Maintain Category for Planning) Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. Yes Note The most up-to-date reference content isn't available immediately after SAP has upgraded the software in your test system. That means this feature isn't available for early tests. Later, the reference content is upgraded in the development system, and any changes need to be brought to your test and production systems. Application Component CO-FIO-OM-PL (Financial Planning) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Maintain Category for Planning: Removal of Exception for PRO01 (CPM Baseline), including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Maintain Category for Planning: Removal of Exception for PRO01 (CPM Basel",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/15c65e18eb1747c9b84e35c031c26147?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "Category maintenance screen showing options to allow entry or delete of plan data.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio7929b6febc3245a28dd67f2061b7f6ee_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1ee4c57d2d5746ccbbd2f722c4aec9b6?version=2608.00": {
      "title": "Permit to Work in Maintenance Orders",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1ee4c57d2d5746ccbbd2f722c4aec9b6?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:26:21.223Z",
      "summary": "With this feature, you can now list the work permits associated with the respective maintenance orders.  The work permits for the respective maintenance orders can be accessed through the Maintenance Order apps.  The following apps are enhanced with Permit to Work: Manage Maintenance Notifications and Orders app and Find Maintenance Order app: You can now list the Assigned Work Permits for the respective maintenance order in the app.  The list shows the assigned work permits with the following details.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, you can now list the work permits associated with the respective maintenance orders.  The work permits for the respective maintenance orders can be accessed through the Maintenance Order apps.  The following apps are enhanced with Permit to Work: Manage Maintenance Notifications and Orders app and Find Maintenance Order app: You can now list the Assigned Work Permits for the respective maintenance order in the app.  The list shows the assigned work permits with the following details."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): 4VT,4WM,4HI,4HH,7Z4. Use affected app/technical object F4604, F2175."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item 4HI (Proactive Maintenance) 4HH (Reactive Maintenance) 4VT (Improvement Maintenance) 4WM (Operational and Overhead Maintenance) 7Z4 (Permit to Work) Technical Object Name App ID:F4604 App ID:F2175 App ID:W0017 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape.  For more information, see Overview of Software and Content Upgrade.  Yes Note The most up-to-date reference content isn't available immediately after SAP has upgraded the software in your test system.  That means this feature isn't available for early tests."
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Permit to Work in Maintenance Orders",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/1ee4c57d2d5746ccbbd2f722c4aec9b6?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/353d99e5d2864d1aa8463d7891a635c8?version=2608.00": {
      "title": "Serial Number Business Document Filtering",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/353d99e5d2864d1aa8463d7891a635c8?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Serial Number Business Document Filtering | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:26:26.169Z",
      "summary": "Two new filtering fields in the Serial Number History app enable easier tracking of business documents associated with serial numbers. Use this feature to quickly locate and filter serial number records by Business Document and Business Document Type. The Business Document Type filter allows you to quickly isolate serial numbers by document type (e.g. Sales Order, Purchase Order, Goods Receipt, etc). The Business Document filter enables you to filter by a specific business document number and see exactly which serial numbers it contains.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "Two new filtering fields in the Serial Number History app enable easier tracking of business documents associated with serial numbers. Use this feature to quickly locate and filter serial number records by Business Document and Business Document Type. The Business Document Type filter allows you to quickly isolate serial numbers by document type (e.g. Sales Order, Purchase Order, Goods Receipt, etc). The Business Document filter enables you to filter by a specific business document number and see exactly which serial numbers it contains."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): BLL. Use affected app/technical object F7368."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Serial Number Business Document Filtering: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Information Type Changed Functional Localization No localization Scope Item BLL (Serial Number Management in Logistics) Technical Object Name App ID:F7368 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component LO-MD-SN (Serial Number Management) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Serial Number Business Document Filtering, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Serial Number Business Document Filtering",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/353d99e5d2864d1aa8463d7891a635c8?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/3df3553c16b84b078b6c529bb728f9b6?version=2608.00": {
      "title": "Output Messages for Archived Purchase Orders",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/3df3553c16b84b078b6c529bb728f9b6?version=2608.00",
      "sourceStatus": "curated",
      "sourceTitle": "Output Messages for Archived Purchase Orders | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:26:29.675Z",
      "summary": "SAP's 2608 RASD row says output line items for archived purchase orders can be viewed in SAP GUI for HTML apps ME21N, ME22N, and ME23N. SAP KBA 2877727 documents the earlier pain point: when an archived purchase order is displayed in ME23N, output messages may not appear when the Messages button is used.",
      "sections": [
        {
          "heading": "What changed",
          "text": "This is a targeted display/access change for output messages on archived purchase orders. It is not a full purchase-order processing retest."
        },
        {
          "heading": "Business relevance",
          "text": "Relevant if CFA needs to investigate, audit, resend, or prove supplier communication for archived purchase orders. If archived PO output is not used by procurement, AP, audit, or support teams, mark it as not relevant or low-priority evidence-only."
        },
        {
          "heading": "How to test",
          "text": "Find one archived purchase order with historical output messages. Open it in ME23N in SAP GUI for HTML and use the Messages/output option. If your role also uses ME21N or ME22N for archived document display paths, repeat the same view-only check there."
        },
        {
          "heading": "Expected result",
          "text": "The archived purchase order opens and the output line items/messages are visible from the Messages/output function. Capture the PO number, archive status/context, transaction/app, output line items, and user role."
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade",
          "title": "Archived PO output messages not visible",
          "text": "Capture ME23N for an archived purchase order before 2608 where the Messages/output action does not show the expected output line items, matching the SAP KBA symptom.",
          "evidence": "Capture transaction ME23N, PO number, Messages/output area, and the missing/empty message list."
        },
        {
          "label": "After upgrade",
          "title": "Archived PO output line items visible",
          "text": "After 2608, use the same or equivalent archived PO and capture the output line items/messages visible in SAP GUI for HTML.",
          "evidence": "Capture transaction/app, PO number, output type/status/date if visible, and user role."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Output Messages for Archived Purchase Orders",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/3df3553c16b84b078b6c529bb728f9b6?version=2608.00"
        },
        {
          "label": "SAP KBA 2877727 - Archived PO output messages",
          "url": "https://userapps.support.sap.com/sap/support/knowledge/en/2877727"
        },
        {
          "label": "Create Purchase Order - Advanced",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/28f492016a52485784d85b7a31f7542d.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4008ead89c7544c2aa10a4a39abc884b?version=2608.00": {
      "title": "Workflow Start Conditions for Purchase Orders with Contract References",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4008ead89c7544c2aa10a4a39abc884b?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Workflow Start Conditions for Purchase Orders with Contract References | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:26:34.474Z",
      "summary": "With this app, you can now configure workflow start conditions to initiate workflows based on references to active contracts.  If every line item of a purchase order has a contract reference, the purchase order is automatically approved.  However, if even one line item lacks a contract reference, the purchase order enters the manual approval workflow.  Also, returned and deleted line items are subject to conditional workflow irrespective of contract references.  Examples of the User Interface Note The screenshots are examples to make the described change visible.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this app, you can now configure workflow start conditions to initiate workflows based on references to active contracts. If every line item of a purchase order has a contract reference, the purchase order is automatically approved. However, if even one line item lacks a contract reference, the purchase order enters the manual approval workflow. Also, returned and deleted line items are subject to conditional workflow irrespective of contract references. Examples of the User Interface Note The screenshots are examples to make the described change visible. Please note that the screenshots show the English version of the user interface only, and that the user interface in your system might look slightly different due to"
        },
        {
          "heading": "Implementation details from SAP",
          "text": "General Prerequisites Configure two workflows as follows: Create workflow A with the start condition All purchase order items have contract references set to No. Add workflow steps that include the necessary approvers to approve purchase order items without contract references. Activate the workflow. Create or retain workflow B, which has no start condition, for automatic release of purchase orders. Activate the workflow. Ensure that workflow A is prioritized over workflow B. You can do this by choosing Define Order on the list page. Ensure the following: Flexible workflow is configured Purchase order has one or more items Referenced contract must be approved and active"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J45. Use affected app/technical object F2872."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Workflow Start Conditions for Purchase Orders with Contract References: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Information Type Changed Functional Localization No localization Scope Item J45 (Procurement of Direct Materials) Technical Object Name App ID: F2872 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-FIO-PUR-PO-WFL (Purchase Order Workflow) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Workflow Start Conditions for Purchase Orders with Contract References, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Workflow Start Conditions for Purchase Orders with Contract References",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4008ead89c7544c2aa10a4a39abc884b?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "SAP Help image",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio91bc0ca0e90149dda42119547fcc4d1a_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/40c490687b5c4bd2a94c603a95f4013e?version=2608.00": {
      "title": "Display Deleted Invoices",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/40c490687b5c4bd2a94c603a95f4013e?version=2608.00",
      "sourceStatus": "curated",
      "sourceTitle": "Display Deleted Invoices | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:26:39.122Z",
      "summary": "SAP's 2608 RASD row says deleted invoices can now be viewed from Supplier Invoices List, app F1060A. SAP KBA 3259323 documents the previous limitation that deleted invoices were not listed in Supplier Invoices List. SAP KBA 3740557 also confirms that the F1060A Delete button performs logical deletion, so this is mainly a visibility/auditability change.",
      "sections": [
        {
          "heading": "What changed",
          "text": "The change is in Supplier Invoices List (F1060A): deleted supplier invoices can be viewed from the list. This is not a full invoice processing retest; it is a list/filter/status visibility check."
        },
        {
          "heading": "Business relevance",
          "text": "Relevant if AP support, audit, or process owners need to find deleted invoices, investigate accidental deletion, or prove what happened to held/parked invoice records. It may also matter if roles are deliberately restricted from deleting or viewing deleted invoices."
        },
        {
          "heading": "How to test",
          "text": "Use a non-production invoice record that can be logically deleted. In F1060A, confirm it is deleted using an authorised AP role, then refresh Supplier Invoices List and verify the deleted invoice can be found using the relevant status/filter/search path."
        },
        {
          "heading": "Expected result",
          "text": "The deleted invoice is visible in Supplier Invoices List according to the new release behaviour, with enough status/detail information for AP to identify it. If the Delete button or deleted-invoice visibility is role-controlled, capture both an authorised and restricted user result."
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade",
          "title": "Deleted invoice not listed in F1060A",
          "text": "Capture Supplier Invoices List before 2608 after deleting a test invoice. The expected before evidence is that the deleted invoice cannot be found in the list, matching the SAP KBA symptom.",
          "evidence": "Capture app ID F1060A, invoice number, filters/search used, and no-result or missing-row evidence."
        },
        {
          "label": "After upgrade",
          "title": "Deleted invoice visible in F1060A",
          "text": "After 2608, repeat the same test and capture the deleted invoice row visible in Supplier Invoices List, including status or detail navigation if available.",
          "evidence": "Capture invoice number, supplier, company code, deleted/status indicator, and user role."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Display Deleted Invoices",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/40c490687b5c4bd2a94c603a95f4013e?version=2608.00"
        },
        {
          "label": "SAP Help - Supplier Invoices List",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/0e602d466b99490187fcbb30d1dc897c/ad246b54f94c8f4ce10000000a4450e5.html"
        },
        {
          "label": "SAP KBA 3259323 - Deleted invoices not displayed",
          "url": "https://userapps.support.sap.com/sap/support/knowledge/en/3259323"
        },
        {
          "label": "SAP KBA 3740557 - F1060A delete button",
          "url": "https://userapps.support.sap.com/sap/support/knowledge/en/3740557"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/53693b896b5d4ef1b500e9f27109c192?version=2608.00": {
      "title": "Display User Name for Locked Orders",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/53693b896b5d4ef1b500e9f27109c192?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Display User Name for Locked Orders | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:26:41.956Z",
      "summary": "With this feature, you can view both the user name and user ID when another user is modifying a maintenance order. This applies when you mass edit or change the status of maintenance orders in the following apps: Find Maintenance Orders Manage Maintenance Notification and Orders This ensures transparency and prevents conflicts by informing users of ongoing changes, allowing for better coordination and workflow management.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, you can view both the user name and user ID when another user is modifying a maintenance order. This applies when you mass edit or change the status of maintenance orders in the following apps: Find Maintenance Orders Manage Maintenance Notification and Orders This ensures transparency and prevents conflicts by informing users of ongoing changes, allowing for better coordination and workflow management."
        },
        {
          "heading": "Effects on existing data",
          "text": "The user interface for order lock notification alert has been enhanced to include the username along with the user ID."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Review only if this exact feature is used by CFA or sits in a used scope/process. Scope item(s): 4WM,4HI,4VT,4HH. Use affected app/technical object F2175, F4604."
        },
        {
          "heading": "How to test",
          "text": "Use SAP's article details to identify the specific changed field, app action, report output, configuration setting, or process behaviour; then run one realistic walkthrough with the owning business role."
        },
        {
          "heading": "Expected result",
          "text": "The changed behaviour appears exactly where SAP describes it and does not break the current CFA user flow. Record relevant, not relevant, or future adoption."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Information Type Changed Functional Localization No localization Scope Item 4HI (Proactive Maintenance) 4HH (Reactive Maintenance) 4VT (Improvement Maintenance) 4WM (Operational and Overhead Maintenance) Technical Object Name App ID:F2175 App ID:F4604 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component PM-FIO (Fiori User Interface (UI) for PM) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current behaviour for the affected app/process before upgrade if the area is used.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 changed behaviour and whether CFA needs release testing, future adoption, or no action.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Display User Name for Locked Orders",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/53693b896b5d4ef1b500e9f27109c192?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/5e0c4f2747ea4b7db79c3ef0ca50d8d2?version=2608.00": {
      "title": "Read-Only Access for Maintenance Plans and Maintenance Items",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/5e0c4f2747ea4b7db79c3ef0ca50d8d2?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Read-Only Access for Maintenance Plans and Maintenance Items | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:26:44.636Z",
      "summary": "Manage Maintenance Plans and Manage Maintenance Items applications now support display-only variants and app authorization variants. Customers can assign these variants to restrict end users to read-only access.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "Manage Maintenance Plans and Manage Maintenance Items applications now support display-only variants and app authorization variants. Customers can assign these variants to restrict end users to read-only access."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 4HI. Use affected app/technical object F5325, F5356."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Read-Only Access for Maintenance Plans and Maintenance Items: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Information Type New Functional Localization No localization Scope Item 4HI (Proactive Maintenance) Technical Object Name App ID: F5325 F5356 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component PM-FIO-PRM-MP ( Fiori UI for PM Maintenance Plans ) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Read-Only Access for Maintenance Plans and Maintenance Items, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Read-Only Access for Maintenance Plans and Maintenance Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/5e0c4f2747ea4b7db79c3ef0ca50d8d2?version=2608.00"
        },
        {
          "label": "Manage Maintenance Plans",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f0e9632b0e654fbeae597bad6abb823c.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Manage Maintenance Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6da7a4386b3e46dc83f30192b5fdd681.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/61b53dfc2ca6455ba38e9fd3995a48c7?version=2608.00": {
      "title": "Map Format Data - Data Type",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/61b53dfc2ca6455ba38e9fd3995a48c7?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Map Format Data - Data Type | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:26:50.042Z",
      "summary": "As of now, you can use the new data type Currency in Variables for format mappings directly inside the nodes and format mapping properties. This feature is available in the following integrations: Map Format Data for Incoming Files from Banks Map Format Data for Treasury Correspondence Map Format Data for Advanced Payment Management Map Format Data for Third-Party Payments Map Format Data for Direct Debit Mandate Instructions Changes to the User Interface There is a new data type Currency available in format mapping properties. You can select Currency as a data type in the Variables field.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "As of now, you can use the new data type Currency in Variables for format mappings directly inside the nodes and format mapping properties. This feature is available in the following integrations: Map Format Data for Incoming Files from Banks Map Format Data for Treasury Correspondence Map Format Data for Advanced Payment Management Map Format Data for Third-Party Payments Map Format Data for Direct Debit Mandate Instructions Changes to the User Interface There is a new data type Currency available in format mapping properties. You can select Currency as a data type in the Variables field."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): 4MT,BFB,J78,3QM,J60,J59,1X1,1WV,1X3. Use affected app/technical object F5608, F3554A, F5617, F9009, F7519."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Information Type Changed Functional Localization No localization Scope Item J59 (Accounts Receivable) J60 (Accounts Payable) 3QM (Treasury Correspondence Integration with SWIFT Network) 4MT (Adavanced Payment Management) J78 (Advanced Cash Operations) 1WV (Debt and Investment Management) 1X1 (Foreign Currency Risk Management) 1X3 (Interest Rate Derivatives Management) BFB (Basic Cash Operations) Technical Object Name App ID: F5608 App ID: F3554A App ID: F5617 App ID: F9009 App ID: F7519 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape.  For more information, see Overview of Software and Content Upgrade."
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Map Format Data - Data Type",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/61b53dfc2ca6455ba38e9fd3995a48c7?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/68ff0fcc8dbd424db117eacc6b34325c?version=2608.00": {
      "title": "Material Field for Import Supplier Invoices App",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/68ff0fcc8dbd424db117eacc6b34325c?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Material Field for Import Supplier Invoices App | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:26:55.334Z",
      "summary": "With this feature, the Material field is now available in the Import Supplier Invoices app (App ID: F3041). Now, when you create a draft invoice, for example as an Excel file via the Import Supplier Invoices app that contains information about the material for a G/L item, the new Material field appears within the G/L Items section when you open the draft invoice.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, the Material field is now available in the Import Supplier Invoices app (App ID: F3041). Now, when you create a draft invoice, for example as an Excel file via the Import Supplier Invoices app that contains information about the material for a G/L item, the new Material field appears within the G/L Items section when you open the draft invoice."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): BNX,J45. Use affected app/technical object F3041."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Information Type New Functional Localization No localization Scope Item J45 (Procurement of Direct Materials), BNX (Consumable Purchasing) Technical Object Name App ID: F3041 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-FIO-IV (Fiori UI for Invoice Verification), MM-IV (Invoice Verification) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Material Field for Import Supplier Invoices App",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/68ff0fcc8dbd424db117eacc6b34325c?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6b9ec398311d4633a00039793f91d8f9?version=2608.00": {
      "title": "Master Data Governance: Identity and Access Management for Products",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6b9ec398311d4633a00039793f91d8f9?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:26:59.099Z",
      "summary": "As of this release, there are new business catalogs available for Master Data Governance for Products.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "As of this release, there are new business catalogs available for Master Data Governance for Products."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "As a prerequisite for using new apps for Master Data Governance for Products, you need to activate the feature New MDG Apps for Central Governance, New MDG Apps for Consolidation, and New MDG Apps for Data Quality Management.  If you are still using the deprecated/older versions of the apps, you need to ensure that the feature Successor MDG Apps for Product (MDC_PRODUCT_GOVERNANCE) has not been activated yet."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1RM,1N5,4AQ,1N1."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Master Data Governance: Identity and Access Management for Products: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item 1N1 (Master Data Consolidation for Product) 1N5 (Central Governance for Product) 4AQ (Data Quality Management for Product) 1RM (Mass Load and Mass Maintenance for Product) Technical Object Name See tables in the Implementation Details section. Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component CA-MDG-CMP-MM (Consolidation & Mass Processing) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Master Data Governance: Identity and Access Management for Products, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Master Data Governance: Identity and Access Management for Products",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/6b9ec398311d4633a00039793f91d8f9?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9481097a6db443e58501846c824ee9da?version=2608.00": {
      "title": "Amount Split",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9481097a6db443e58501846c824ee9da?version=2608.00",
      "sourceStatus": "curated",
      "sourceTitle": "Amount Split | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:27:03.944Z",
      "summary": "SAP's 2608 RASD row says the Create view of Manage Supplier Invoices, app F0859, now has an Amount Split section. SAP's public feature comparison page shows the baseline gap: manual amount split was available in the advanced invoice app, but not in Manage Supplier Invoices F0859. This is therefore a targeted AP invoice-entry change, not a full BNX/J45 process retest.",
      "sections": [
        {
          "heading": "What changed",
          "text": "In release 2608, users can enter amount split information in the new Amount Split section while creating a supplier invoice in Manage Supplier Invoices (F0859). The section is shown only when amount split is enabled for the invoice company code."
        },
        {
          "heading": "Business relevance",
          "text": "Relevant if CFA AP users create supplier invoices in F0859 and have a real process where invoice amounts must be split during invoice entry. If the team never uses manual amount split, mark this as future adoption or not relevant; the change does not require retesting every purchasing or invoice scenario in BNX/J45."
        },
        {
          "heading": "Configuration dependency",
          "text": "The SAP RASD item states that amount split must be enabled for the invoice company code before the new section is displayed. I have not found a public SSCUI ID for this setting from the currently accessible SAP source, so the website should not invent one. The reviewer should search configuration by 'amount split' or check the company-code invoice settings in the implementation tenant."
        },
        {
          "heading": "How to test",
          "text": "Use one company code where amount split is enabled and one where it is not. In F0859, choose Create, enter a realistic supplier invoice, and confirm that the Amount Split section is visible only for the enabled company code. Enter a valid split, simulate or post the invoice, and verify the split is retained in the invoice/accounting result. Capture the app ID, company code, invoice number, and screenshot of the Amount Split section."
        },
        {
          "heading": "Expected result",
          "text": "Enabled company code: the Amount Split section appears in the Create view of F0859 and the invoice can be completed with the entered split. Disabled company code: the section is not displayed. No broader regression test is needed unless AP actually uses this split process."
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade",
          "title": "F0859 create supplier invoice without Amount Split",
          "text": "Open Manage Supplier Invoices (F0859), choose Create, and capture the Create view for the same invoice company code before the upgrade. The expected before evidence is that no Amount Split section is available.",
          "evidence": "Capture app ID F0859, company code, and the visible invoice-entry sections."
        },
        {
          "label": "After upgrade",
          "title": "F0859 create supplier invoice with Amount Split",
          "text": "After 2608, repeat the same create flow for a company code where amount split is enabled. The expected after evidence is a visible Amount Split section where split information can be entered and retained.",
          "evidence": "Capture the new section, entered split, simulation/posting result, and invoice number."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Amount Split",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9481097a6db443e58501846c824ee9da?version=2608.00"
        },
        {
          "label": "SAP Help - Feature Comparison for Managing Supplier Invoices",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/0e602d466b99490187fcbb30d1dc897c/c7c55da4af0a49d08d7df04fc5b39138.html"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/98ca15404a954ecaa86d100429a0d56a?version=2608.00": {
      "title": "Mass Changes to Purchase Orders",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/98ca15404a954ecaa86d100429a0d56a?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Mass Changes to Purchase Orders | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:27:09.210Z",
      "summary": "With this app, you can now update custom fields for multiple purchase order line items simultaneously.  Instead of updating each line item individually, you can now select multiple items within a single purchase order or across different purchase orders and update custom field values in one action.  Previously, you could only update custom fields for purchase order line items one at a time.  When working with purchase orders containing numerous line items (for example, more than 100), this process was time-consuming and inefficient.  With this enhancement, you can select multiple line items and apply custom field updates in a single operation.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this app, you can now update custom fields for multiple purchase order line items simultaneously.  Instead of updating each line item individually, you can now select multiple items within a single purchase order or across different purchase orders and update custom field values in one action.  Previously, you could only update custom fields for purchase order line items one at a time.  When working with purchase orders containing numerous line items (for example, more than 100), this process was time-consuming and inefficient.  With this enhancement, you can select multiple line items and apply custom field updates in a single operation.  Examples of the User Interface Note The screenshots are examples to make the described change visible."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): BNX,J45,5W3. Use affected app/technical object F2593."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Information Type Changed Functional Localization No localization Scope Item BNX (Consumable Purchasing) J45 (Procurement of Direct Materials) 5W3 (Procurement of Production Components – Consumer Products) Technical Object Name App ID: F2593 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-PUR-GF-MAS (Mass change (Public Cloud)) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Mass Changes to Purchase Orders",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/98ca15404a954ecaa86d100429a0d56a?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "Header Custom Fields dialog with dropdowns for each label and buttons for Apply, Cancel, and Restore",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio7d333987a081490b8c79bf2ac35f078f_LowRes.png"
        },
        {
          "label": "Item Custom Fields dialog with dropdowns for each label and buttons for Apply, Cancel, and Restore",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio2f0c3c999eaf44eba039db07b0bee4b1_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/99a9bc6d9fd54833820c765671a754e0?version=2608.00": {
      "title": "Reference Field in Manage Service Entry Sheet App",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/99a9bc6d9fd54833820c765671a754e0?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Reference Field in Manage Service Entry Sheet App | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:27:13.681Z",
      "summary": "With this feature, you can maintain reference document numbers directly in the Manage Service Entry Sheets app.  The new Reference field in the General Information section allows you to maintain supplier-provided document numbers, for example, service entry sheet numbers, goods receipt numbers, or free text.  This information is automatically transferred to the delivery note field of the goods receipt document.  It is recommended to enter an alphanumeric value of up to 16 characters, without special characters.  If the reference field value is already used in another service entry sheet for the same supplier and external system, an error message is displayed.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, you can maintain reference document numbers directly in the Manage Service Entry Sheets app.  The new Reference field in the General Information section allows you to maintain supplier-provided document numbers, for example, service entry sheet numbers, goods receipt numbers, or free text.  This information is automatically transferred to the delivery note field of the goods receipt document.  It is recommended to enter an alphanumeric value of up to 16 characters, without special characters.  If the reference field value is already used in another service entry sheet for the same supplier and external system, an error message is displayed.  Examples of the User Interface Note The screenshots are examples to make the described change visible."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Review only if this exact feature is used by CFA or sits in a used scope/process. Scope item(s): 22Z. Use affected app/technical object F2027."
        },
        {
          "heading": "How to test",
          "text": "Use SAP's article details to identify the specific changed field, app action, report output, configuration setting, or process behaviour; then run one realistic walkthrough with the owning business role."
        },
        {
          "heading": "Expected result",
          "text": "The changed behaviour appears exactly where SAP describes it and does not break the current CFA user flow. Record relevant, not relevant, or future adoption."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Information Type Changed Functional Localization No localization Scope Item 22Z (Procurement of Services) Technical Object Name App ID: F2027 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-PUR-SVC-SES (Service Entry Sheet for Service Procurement) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current behaviour for the affected app/process before upgrade if the area is used.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 changed behaviour and whether CFA needs release testing, future adoption, or no action.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Reference Field in Manage Service Entry Sheet App",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/99a9bc6d9fd54833820c765671a754e0?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "General Information section with Basic Data fields including Name of Service Entry Sheet, Reference Purchase Order, Posting Date, and Reference.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loiocbecef9b9f104ed1b87023474ce78501_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9d24302e44d145638f2d5e1355831399?version=2608.00": {
      "title": "Manage Maintenance Notifications: New Actions for Maintenance Notification API (OData V4)",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9d24302e44d145638f2d5e1355831399?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Manage Maintenance Notifications: New Actions for Maintenance Notification API (OData V4) | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:27:17.014Z",
      "summary": "The Maintenance Notification API (OData V4) now includes new actions: Approved, Rejected, and Information Required. Use these actions to more effectively manage and control the workflow of maintenance notifications.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The Maintenance Notification API (OData V4) now includes new actions: Approved, Rejected, and Information Required. Use these actions to more effectively manage and control the workflow of maintenance notifications."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 4HI,4HH."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Manage Maintenance Notifications: New Actions for Maintenance Notification API (OData V4): confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Information Type New Functional Localization No localization Scope Item 4HI (Proactive Maintenance) 4HH (Reactive Maintenance) Technical Object Name API: API_MAINTENANCENOTIFICATION Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component PM-WOC-MN (Maintenance Notification) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Manage Maintenance Notifications: New Actions for Maintenance Notification API (OData V4), including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Manage Maintenance Notifications: New Actions for Maintenance Notificatio",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/9d24302e44d145638f2d5e1355831399?version=2608.00"
        },
        {
          "label": "Set Actions for Maintenance Notifications",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/8a835f158fe54a34a510ad8a17edc1f4.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b141dac59cc04bfa9955c677d956d653?version=2608.00": {
      "title": "Dispatch Operations for Maintenance Orders",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b141dac59cc04bfa9955c677d956d653?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:27:20.565Z",
      "summary": "This feature enables you to Dispatch Operations in Find Maintenance Order and Change Maintenance Order apps regardless of resource scheduling (RSH)",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "This feature enables you to Dispatch Operations in Find Maintenance Order and Change Maintenance Order apps regardless of resource scheduling (RSH)"
        },
        {
          "heading": "Configuration details from SAP",
          "text": "for both RSH-enabled and non-RSH work centers. You can also perform Cancel Dispatch Operations in the Change Maintenance Order app. This change provides consistent behavior across work centers, improved flexibility in order processing, and simplified dispatch management."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 4WM,4HI,4VT,4HH. Use affected app/technical object F2175."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Dispatch Operations for Maintenance Orders: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Information Type New Functional Localization No localization Scope Item 4HI (Proactive Maintenance) 4HH (Reactive Maintenance) 4VT (Improvement Maintenance) 4WM (Operational and Overhead Maintenance) Technical Object Name App ID: F2175 App ID: W0017 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component EP-PCT-MAN-MW (BP for Maintenance Worker) PM-FIO (Fiori User Interface (UI) for PM) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Dispatch Operations for Maintenance Orders, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Dispatch Operations for Maintenance Orders",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b141dac59cc04bfa9955c677d956d653?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b992de09d8574e38bf6bda87472266e0?version=2608.00": {
      "title": "Monitor Purchase Order Items",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b992de09d8574e38bf6bda87472266e0?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Monitor Purchase Order Items | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:27:24.071Z",
      "summary": "With this feature, you can view the requisitioner name and ID in the Requisitioner column of the Monitor Purchase Order Items (F2358) app. The Requisitioner column is visible as non-default, read-only, and is available for search, filter, and personalization. The requisitioner name and ID displayed here is the name and ID of the individual requestor / workflow initiator of the purchase requisition.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, you can view the requisitioner name and ID in the Requisitioner column of the Monitor Purchase Order Items (F2358) app. The Requisitioner column is visible as non-default, read-only, and is available for search, filter, and personalization. The requisitioner name and ID displayed here is the name and ID of the individual requestor / workflow initiator of the purchase requisition."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): BNX,J45,1JI,5W3. Use affected app/technical object F2358."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Information Type Changed Functional Localization No localization Scope Item BNX (Consumable Purchasing) J45 (Procurement of Direct Materials) 5W3 (Procurement of Production Components – Consumer Products) 1JI (Real-Time Reporting and Monitoring for Procurement) Technical Object Name App ID: F2358 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-PUR-GF-MON (Mass Change) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Monitor Purchase Order Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/b992de09d8574e38bf6bda87472266e0?version=2608.00"
        },
        {
          "label": "Monitor Purchase Order Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/82f1e2574096f432e10000000a441470.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/caac39d1c20741a08f4d2d995610b68f?version=2608.00": {
      "title": "Material Documents Overview",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/caac39d1c20741a08f4d2d995610b68f?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:27:27.801Z",
      "summary": "With this release, additional search and list report fields are available for customer return, inbound, and outbound deliveries, plus goods receipt/issue slip numbers. Use these fields to enhance filtering capabilities and improve visibility across delivery-related transactions in your reports. New Fields and Technical Names Field Technical Name Customer Return Delivery CUSTOMER_RETURN_DELIVERY Inbound Delivery INBOUND_DELIVERY Outbound Delivery OUTBOUND_DELIVERY Goods Receipt/Issue Slip Number XABLN With the Material Documents Overview app, you can display a list of material document items and display the material document details of a selected material document item.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this release, additional search and list report fields are available for customer return, inbound, and outbound deliveries, plus goods receipt/issue slip numbers. Use these fields to enhance filtering capabilities and improve visibility across delivery-related transactions in your reports. New Fields and Technical Names Field Technical Name Customer Return Delivery CUSTOMER_RETURN_DELIVERY Inbound Delivery INBOUND_DELIVERY Outbound Delivery OUTBOUND_DELIVERY Goods Receipt/Issue Slip Number XABLN With the Material Documents Overview app, you can display a list of material document items and display the material document details of a selected material document item."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): BMC. Use affected app/technical object F1077."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Information Type Changed Functional Localization No localization Scope Item BMC (Core Inventory Management) Technical Object Name App ID: F1077 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-FIO-IM-SGM (Fiori UI for Stock and Goods Movements) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Material Documents Overview",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/caac39d1c20741a08f4d2d995610b68f?version=2608.00"
        },
        {
          "label": "Deprecated Scope Items",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/d86b73c768b344708dab88b4a7f6d6ae.html?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/dc08be46a5694c55b7a9e887fbb28d08?version=2608.00": {
      "title": "Maintenance Task List: Lean Services",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/dc08be46a5694c55b7a9e887fbb28d08?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Maintenance Task List: Lean Services | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:27:30.502Z",
      "summary": "API for maintenance task list is added with below fields to accommodate lean service details: BillOfMaterialProductType BillOfMaterialCurrency BillOfMaterialServiceDuration BOMServiceDurationUnit BOMOverallLimitAmount BOMExpectedOverallLimitAmount",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "API for maintenance task list is added with below fields to accommodate lean service details: BillOfMaterialProductType BillOfMaterialCurrency BillOfMaterialServiceDuration BOMServiceDurationUnit BOMOverallLimitAmount BOMExpectedOverallLimitAmount"
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): 4HI,4HH."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Information Type New Functional Localization No localization Scope Item 4HI (Proactive Maintenance) 4HH (Reactive Maintenance) Technical Object Name API: API_MAINTENANCETASKLIST Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component PM-FIO (Fiori User Interface (UI) for PM) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Maintenance Task List: Lean Services",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/dc08be46a5694c55b7a9e887fbb28d08?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/ddaa911ecd684d9cae3148abe9ae9694?version=2608.00": {
      "title": "Advanced Selection for Service Entry Sheets",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/ddaa911ecd684d9cae3148abe9ae9694?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Advanced Selection for Service Entry Sheets | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:27:33.216Z",
      "summary": "With this feature, the Advanced Selection button is now available when you select Service Entry Sheet - Lean Services in the Purchasing Document References section of the Create view of the Manage Supplier Invoices app (App ID: F0859). When you select the Advanced Selection, you are prompted to enter the supplier information. The service entry sheet results are displayed. You can select an item from the results and assign it to the invoice.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, the Advanced Selection button is now available when you select Service Entry Sheet - Lean Services in the Purchasing Document References section of the Create view of the Manage Supplier Invoices app (App ID: F0859). When you select the Advanced Selection, you are prompted to enter the supplier information. The service entry sheet results are displayed. You can select an item from the results and assign it to the invoice."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): BNX,J45. Use affected app/technical object F0859."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Information Type Changed Functional Localization No localization Scope Item J45 (Procurement of Direct Materials), BNX (Consumable Purchasing) Technical Object Name App ID: F0859 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component MM-FIO-IV (Fiori UI for Invoice Verification), MM-IV (Invoice Verification) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Advanced Selection for Service Entry Sheets",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/ddaa911ecd684d9cae3148abe9ae9694?version=2608.00"
        },
        {
          "label": "Manage Supplier Invoices",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/4e246b54f94c8f4ce10000000a4450e5.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Create Supplier Invoice",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/01060a2e758f4e8a9d4a7cf07b0ce323.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/de02aea5ffb44c5e958b8f60ef06f20d?version=2608.00": {
      "title": "Pending Settlement Confirmation for Payment Card Processing",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/de02aea5ffb44c5e958b8f60ef06f20d?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Pending Settlement Confirmation for Payment Card Processing | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:27:36.735Z",
      "summary": "The Pending Settlement Confirmation feature supports payment card processes where the payment service provider (PSP) returns the final settlement confirmation asynchronously at a later point in time.  When this feature is enabled, authorized payments selected during the settlement run are posted to the DP Pending Settlement interim account.  The Settlement Status Check background job retrieves settlement status updates from the SAP digital payments add-on and automatically transfers successfully settled items to the clearing account.  Items that cannot be settled are reposted to the customer account, ensuring that open receivables remain accurate.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The Pending Settlement Confirmation feature supports payment card processes where the payment service provider (PSP) returns the final settlement confirmation asynchronously at a later point in time.  When this feature is enabled, authorized payments selected during the settlement run are posted to the DP Pending Settlement interim account.  The Settlement Status Check background job retrieves settlement status updates from the SAP digital payments add-on and automatically transfers successfully settled items to the clearing account.  Items that cannot be settled are reposted to the customer account, ensuring that open receivables remain accurate.  Depending on how the payment was initiated, the system automatically triggers the appropriate reversal logic."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "The settlement process has been enhanced to handle settlement confirmations that are provided by PSPs after the initial settlement step: Select the Post to Pending Account field in the Payment Card Settlement background job to enable this feature.  Schedule the new Settlement Status Check periodic background job (for example, hourly) to retrieve settlement status updates from the SAP digital payments add-on and update postings accordingly: Successful items → DP Clear clearing account Failed items → customer account If an item remains unsettled after repeated attempts, the system automatically triggers the appropriate reversal logic to ensure correct AR balances."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1S2."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Pending Settlement Confirmation for Payment Card Processing: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type New Functional Localization No localization Scope Item 1S2 Technical Object Name Job Template: SAP_FIN_AR_DP_SETTL_STATUS_CHK_JOB_TMPL Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FIN-FSCM-DP-DP-2CL (SAP digital payments add-on) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Pending Settlement Confirmation for Payment Card Processing, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Pending Settlement Confirmation for Payment Card Processing",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/de02aea5ffb44c5e958b8f60ef06f20d?version=2608.00"
        },
        {
          "label": "Two-Step Payments Using Pending Settlement Confirmation",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/f2bcf116aea8467cab143f80370cb841.html?locale=en-US&state=PRODUCTION&version=2608.00"
        },
        {
          "label": "Settlement Status Check",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/5f645cadb99344f4a81797c1e65d26d4.html?locale=en-US&state=PRODUCTION&version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/df5c160116b847d9abc26a93e3e54839?version=2608.00": {
      "title": "Improve Payment Advice Extraction Results with Instant Learning in SAP Document AI",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/df5c160116b847d9abc26a93e3e54839?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "SAP Help Portal | SAP Online Help",
      "harvestedAt": "2026-06-28T11:27:40.544Z",
      "summary": "The Manage Payment Advices (F2550A) app now includes a new SAP Document AI button on the details page of an uploaded payment advice.  This button takes you to the new Review Extracted Payment Advices - SAP Document AI (F9024) app, where you can review and refine extracted field values.  The new app leverages the instant learning feature of SAP Document AI, meaning that any corrections or edits you make to extracted field values are used to improve extraction accuracy for future payment advices uploaded to the Manage Payment Advices app.  This continuous learning process helps reduce manual corrections over time and enhances the overall efficiency of payment advice processing.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The Manage Payment Advices (F2550A) app now includes a new SAP Document AI button on the details page of an uploaded payment advice.  This button takes you to the new Review Extracted Payment Advices - SAP Document AI (F9024) app, where you can review and refine extracted field values.  The new app leverages the instant learning feature of SAP Document AI, meaning that any corrections or edits you make to extracted field values are used to improve extraction accuracy for future payment advices uploaded to the Manage Payment Advices app.  This continuous learning process helps reduce manual corrections over time and enhances the overall efficiency of payment advice processing."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "Ensure the following prerequisites are fulfilled: The SAP Business AI feature \"processing of payment advices with SAP Document AI\" is activated.  For instructions on the activation process, see the Activation process for premium AI features section of SAP Note 3651017.  The integration with SAP Document AI is set up.  For more information, see Integration Overview.  The Payment Advice Document Extraction (PAYMENT_ADVICE_STANDARD) schema is activated in the Manage Document AI Schema Registration Subscriptions app.  For more information, see PAYMENT_ADVICE_STANDARD and Manage Document AI Schema Registration Subscriptions.  Instant learning has been activated in SAP Document AI.  For more information, see Instant Learning (Embedded Edition and Premium Edition)."
        },
        {
          "heading": "Configuration details from SAP",
          "text": "and extensibility options available. Screenshot One: After uploading a payment advice file to the Manage Payment Advices app, a draft payment advice is created and listed in the AI-Extracted Advices (To Be Confirmed) tab. Screenshot Two: The SAP Document AI button is available on the details page of an uploaded payment advice in the Manage Payment Advices app. Screenshot Three: If you close the preview of the original payment advice file on the right panel, you can choose the Show Document button to display it again. Screenshot Four: After choosing the SAP Document AI button, the system directs you to the Review Extracted Payment Advices - SAP Document AI app, where you can edit and refine extracted field values."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): J59,7TC. Use affected app/technical object F2550A, F9024."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Improve Payment Advice Extraction Results with Instant Learning in SAP Document AI: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Action/Review Required Type Changed Functional Localization No localization Scope Item 7TC (Integration with SAP Document AI) J59 (Accounts Receivable) Technical Object Name App ID: F2550A F9024 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FI-FIO-AR (Fiori UI for Accounts Receivable) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Improve Payment Advice Extraction Results with Instant Learning in SAP Document AI, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Improve Payment Advice Extraction Results with Instant Learning in SAP Do",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/df5c160116b847d9abc26a93e3e54839?version=2608.00"
        }
      ],
      "media": [
        {
          "label": "This screenshot shows a sample payment advice file uploaded to the Manage Payment Advices app.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loioec598ed8b6bc4d53bd6482ed05457a88_LowRes.png"
        },
        {
          "label": "The SAP Document AI button is highlighted in the screenshot.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio83845472d9984d9496bba591b77901f9_LowRes.png"
        },
        {
          "label": "The Show Document button is highlighted in the screenshot.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loio5be616c3a79c436aac0c2973f5c315d9_LowRes.png"
        },
        {
          "label": "The uploaded payment advice file is in the initial status of Review Needed. You can choose the Edit button to make changes. For example, correct any incorrectly extracted values in the fields on the panel on the right of the screen.",
          "type": "image",
          "url": "https://help.sap.com/doc/ee9ee0ca4c3942068ea584d2f929b5b1/2608.00/en-US/loioe97ec86c88be4fd0982dea4f35d0afcd_LowRes.png"
        }
      ]
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/ef2945c4f0524fd1b972dfc2e3f450c3?version=2608.00": {
      "title": "Planned Cost in Find Maintenance Order",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/ef2945c4f0524fd1b972dfc2e3f450c3?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Planned Cost in Find Maintenance Order | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:27:44.039Z",
      "summary": "With this feature, you can now view the Planned Cost directly in the header page of the Find Maintenance Order app. This enhancement provides immediate visibility into cost information without requiring you to navigate to additional screens, enabling faster decision-making and improved cost monitoring for maintenance activities.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "With this feature, you can now view the Planned Cost directly in the header page of the Find Maintenance Order app. This enhancement provides immediate visibility into cost information without requiring you to navigate to additional screens, enabling faster decision-making and improved cost monitoring for maintenance activities."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "This looks like an adoption/backlog item unless CFA wants the new capability immediately. Scope item(s): 4WM,4HI,4VT,4HH. Use affected app/technical object F2175."
        },
        {
          "heading": "How to test",
          "text": "Do a short demo or sandbox walkthrough rather than a regression test: open the affected app or feature, prove the new capability appears, and decide whether a process owner wants it added to the backlog."
        },
        {
          "heading": "Expected result",
          "text": "If not adopted now, no release-blocking test is required. If adopted, the feature is visible, usable with the right role/configuration, and has a named owner for follow-up."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Information Type New Functional Localization No localization Scope Item 4HI (Proactive Maintenance) 4HH (Reactive Maintenance) 4VT (Improvement Maintenance) 4WM (Operational and Overhead Maintenance) Technical Object Name App ID:F2175 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component PM-FIO (Fiori User Interface (UI) for PM) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the pre-upgrade screen or process where this new option is absent or not used by CFA.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the new 2608 capability visible in the app/process and record whether CFA will adopt it now, later, or mark it not relevant.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Planned Cost in Find Maintenance Order",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/ef2945c4f0524fd1b972dfc2e3f450c3?version=2608.00"
        }
      ],
      "media": []
    },
    "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/fddf5635ce294c499f4d5921f665f4f0?version=2608.00": {
      "title": "Payment Card Update Service - Expiration Dates Updated Automatically",
      "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/fddf5635ce294c499f4d5921f665f4f0?version=2608.00",
      "sourceStatus": "harvested",
      "sourceTitle": "Payment Card Update Service - Expiration Dates Updated Automatically | SAP Help Portal",
      "harvestedAt": "2026-06-28T11:27:48.734Z",
      "summary": "The Payment Card Update Service automatically updates the expiration dates of stored payment cards for business partners in SAP S/4HANA. The service retrieves updated payment card information from the SAP digital payments add-on and applies the new expiration dates to the corresponding payment cards. This helps prevent payment failures due to expired cards and reduces the need to manually request updated card details from customers. For more information, see Payment Card Update Service in the SAP digital payments add-on documentation.",
      "sections": [
        {
          "heading": "What SAP says changed",
          "text": "The Payment Card Update Service automatically updates the expiration dates of stored payment cards for business partners in SAP S/4HANA. The service retrieves updated payment card information from the SAP digital payments add-on and applies the new expiration dates to the corresponding payment cards. This helps prevent payment failures due to expired cards and reduces the need to manually request updated card details from customers. For more information, see Payment Card Update Service in the SAP digital payments add-on documentation."
        },
        {
          "heading": "Implementation details from SAP",
          "text": "The Payment Card Update Service runs as a technical background job in SAP S/4HANA. When enabled, the technical job periodically retrieves updated card expiration dates and updates the corresponding business partner payment cards in SAP S/4HANA. You can schedule the job in the communication arrangement based on the SAP_COM_0216 communication scenario, where you can define how often the job runs. For more information, see Setting Up Digital Payments (1S2), section Create Communication Arrangement. The service is enabled and controlled through the SAP digital payments add-on, based on whether the payment service provider (PSP) supports automatic payment card updates. Note If a PSP does not support the Payment Card Update Service, no action is required."
        },
        {
          "heading": "Business relevance for CFA",
          "text": "Treat this as release-readiness only if CFA uses the affected app, role, catalog, configuration, API, or process step. Scope item(s): 1S2."
        },
        {
          "heading": "How to test",
          "text": "Run a focused before/after check for Payment Card Update Service - Expiration Dates Updated Automatically: confirm the current behaviour before 2608 where possible, then test only the changed or replacement behaviour after upgrade with a real business role. Capture the object ID, user role, screenshot/log, and pass/fail evidence."
        },
        {
          "heading": "Expected result",
          "text": "The old behaviour is either safely replaced, blocked as SAP describes, or still available only where SAP says it should be. The user can complete the changed step without missing tiles, broken authorisation, unexpected field behaviour, or integration errors."
        },
        {
          "heading": "Technical details from SAP",
          "text": "Action Information Type New Functional Localization No localization Scope Item 1S2 Technical Object Name Report: RFDP_PAYMENT_CARD_UPDATE (Payment Cards: Update Expiration Date) Technical Job Definition: SAP_FAR_DP_PAYMENT_CARD_UPDATE Communication Scenario: SAP_COM_0216 Feature Requires Latest Reference Content Version Note This table row is only relevant if you use a 3-system landscape. For more information, see Overview of Software and Content Upgrade. No Application Component FIN-FSCM-DP-DP-2CL (SAP digital payments add-on) Valid as Of SAP S/4HANA Cloud Public Edition 2608"
        }
      ],
      "screenshots": [
        {
          "label": "Before upgrade evidence",
          "title": "What to capture before 2608",
          "text": "Capture the current app/process/config/API behaviour before upgrade for Payment Card Update Service - Expiration Dates Updated Automatically, including app ID/object, role, and any old tile, field, message, output, or payload.",
          "evidence": "Screenshot/log should include app ID/object, role, customer data key, and current result."
        },
        {
          "label": "After upgrade expected evidence",
          "title": "What to capture after 2608",
          "text": "Capture the 2608 result for the same scenario, showing the new/replacement/deprecated behaviour and the expected successful or blocked outcome.",
          "evidence": "Screenshot/log should prove the changed behaviour and expected result."
        }
      ],
      "references": [
        {
          "label": "SAP What's New - Payment Card Update Service - Expiration Dates Updated Automatically",
          "url": "https://help.sap.com/docs/SAP_S4HANA_CLOUD/ee9ee0ca4c3942068ea584d2f929b5b1/fddf5635ce294c499f4d5921f665f4f0?version=2608.00"
        }
      ],
      "media": []
    }
  },
  "byTitle": {}
};
