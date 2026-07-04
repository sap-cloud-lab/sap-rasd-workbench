(function () {
  const originalData = window.RASD_SOURCE_DATA || {};
  const originalPublicCloudData = window.RASD_PUBLIC_CLOUD_DATA || {};
  const originalExtensibilityInventory = window.RASD_EXTENSIBILITY_INVENTORY || [];
  const originalHelpEnrichment = window.RASD_HELP_ENRICHMENT || {};
  const publicCloudKeys = [
    "communicationArrangements",
    "businessRoles",
    "roleCatalogAssignments",
    "roleSpaceAssignments",
    "businessCatalogs",
    "businessCatalogApps",
    "businessCatalogScopeItems",
    "businessCatalogSuccessors",
    "customCatalogExtensions",
    "launchpadPageTiles",
    "launchpadSpacePages",
    "launchpadApplications",
    "btpDestinations",
    "btpHtml5Applications",
    "btpServiceSubscriptions",
    "btpAccessGaps"
  ];
  let cloudEvidenceCache = new WeakMap();
  let publicCloudLoadPromise = null;
  let publicCloudLoadFailed = false;
  const progressStore = createProgressStore(window.RASD_PROGRESS_STORE);
  const progressSync = {
    status: progressStore ? "loading" : "local",
    label: progressStore?.label || "Local backup",
    detail: progressStore ? "Loading shared progress" : "Browser cache with recovered backup",
    lastSavedAt: ""
  };
  let sharedProgressSaveTimer = null;
  const customerProfile = {
    country: "Australia",
    countryAliases: ["Australia", "AU"],
    industry: "Public Sector Management",
    release: "2608.0",
    testUpgradeDate: "2026-07-18",
    productionUpgradeDate: "2026-08-18"
  };
  const state = {
    data: normalizeData(originalData),
    page: "overview",
    search: "",
    priority: "all",
    selected: {},
    testState: loadTestState(),
    reviewState: loadReviewState()
  };

  const pages = {
    overview: { title: "Choose a review area", kicker: "Home", icon: "1" },
    scope: { title: "Scope item impact", kicker: "Used scope first", icon: "2" },
    scopeReview: { title: "Scope item review", kicker: "Focused workspace", icon: "2" },
    whatsnew: { title: "What changed / what to do", kicker: "Practical actions", icon: "3" },
    apps: { title: "Apps, roles and catalogs", kicker: "Launchpad and security", icon: "4" },
    extensibility: { title: "Extensibility remediation", kicker: "Used objects only", icon: "5" },
    extReview: { title: "Extensibility fix plan", kicker: "What changed and what to test", icon: "5" },
    deprecated: { title: "Deprecated and successor objects", kicker: "No duplicate chasing", icon: "6" },
    newfeatures: { title: "New features explorer", kicker: "Useful opportunities", icon: "7" },
    publicsector: { title: "Public sector highlights", kicker: "Australia and PSM focus", icon: "8" },
    aiupdates: { title: "2608 AI updates", kicker: "What's New", icon: "10" },
    coverage: { title: "SAP test automation coverage", kicker: "RASD to SAP Automate", icon: "9" },
    testplan: { title: "Release test pack", kicker: "Cloud ALM upload", icon: "9" }
  };

  const aiWhatsNewFields = [
    "Title(Title)",
    "Description(Description)",
    "Category(Category)",
    "Solution Area(Solution Area)",
    "Solution Capability(Solution Capability)"
  ];
  const aiWhatsNewPattern = /Artificial Intelligence|SAP Document AI|\bAI[-\s]?(assisted|enhanced|generated|support)\b|\bAI\b|Joule|agentic AI|generative AI|machine learning|Intelligent Scenario|Intelligent Scenarios|ISLM|predictive scenario/i;

  const pageContent = document.querySelector("#pageContent");
  const viewTitle = document.querySelector("#viewTitle");
  const viewKicker = document.querySelector("#viewKicker");
  const viewActions = document.querySelector("#viewActions");
  const toast = document.querySelector("#toast");
  const searchInput = document.querySelector("#globalSearch");
  const priorityFilter = document.querySelector("#priorityFilter");
  const zipInput = document.querySelector("#zipInput");
  const stateInput = document.querySelector("#stateInput");
  const progressStatus = document.querySelector("#progressStatus");

  function normalizeData(input) {
    const data = {
      meta: input.meta || {},
      usedScopeImpact: input.usedScopeImpact || [],
      activatedScopeImpact: input.activatedScopeImpact || [],
      usedPersonalizedWhatsNew: input.usedPersonalizedWhatsNew || [],
      activatedPersonalizedWhatsNew: input.activatedPersonalizedWhatsNew || [],
      completeScopeImpact: input.completeScopeImpact || [],
      completeWhatsNew: input.completeWhatsNew || [],
      completeExtensibility: input.completeExtensibility || [],
      changedExtensibility: input.changedExtensibility || [],
      deletedDeprecatedExtensibility: input.deletedDeprecatedExtensibility || [],
      applications: input.applications || [],
      deletedDeprecatedBusinessCatalogs: input.deletedDeprecatedBusinessCatalogs || [],
      renamedAppTiles: input.renamedAppTiles || [],
      whereUsedAssociatedCatalogs: input.whereUsedAssociatedCatalogs || [],
      whereUsedCustomCds: input.whereUsedCustomCds || [],
      iamApps: input.iamApps || [],
      usedVsActivatedScopeItems: input.usedVsActivatedScopeItems || [],
      deprecatedObjects: input.deprecatedObjects || [],
      deprecatedAttributes: input.deprecatedAttributes || [],
      extensibilityInventory: input.extensibilityInventory || originalExtensibilityInventory,
      publicCloud: normalizePublicCloudData(input.publicCloud || originalPublicCloudData)
    };

    Object.keys(data).forEach((key) => {
      if (Array.isArray(data[key])) data[key] = data[key].map(cleanRow).filter(hasUsefulValues);
    });
    data.usedScopeImpact = mergeDuplicateScopeRows(data.usedScopeImpact);
    data.activatedScopeImpact = mergeDuplicateScopeRows(data.activatedScopeImpact);
    data.completeScopeImpact = mergeDuplicateScopeRows(data.completeScopeImpact);
    data.usedPersonalizedWhatsNew = mergeDuplicateChangeRows(data.usedPersonalizedWhatsNew);
    data.activatedPersonalizedWhatsNew = mergeDuplicateChangeRows(data.activatedPersonalizedWhatsNew);
    data.completeWhatsNew = mergeDuplicateChangeRows(data.completeWhatsNew);
    data.derived = deriveData(data);
    return data;
  }

  function normalizePublicCloudData(input = {}) {
    const output = {
      meta: input.meta || {}
    };
    publicCloudKeys.forEach((key) => {
      output[key] = Array.isArray(input[key]) ? input[key].map(cleanRow).filter(hasUsefulValues) : [];
    });
    output.loaded = publicCloudKeys.some((key) => output[key].length);
    output.indexes = buildPublicCloudIndexes(output);
    return output;
  }

  function buildPublicCloudIndexes(cloud) {
    const indexes = {
      catalogAppsByAppId: new Map(),
      catalogAppsByCatalog: new Map(),
      rolesByCatalog: new Map(),
      businessRolesByRole: new Map(),
      spacesByRole: new Map(),
      pagesBySpace: new Map(),
      tilesByCatalog: new Map(),
      tilesByAppId: new Map(),
      launchpadAppsById: new Map(),
      catalogsById: new Map(),
      scopeCatalogsByScope: new Map(),
      successorCatalogsByCatalog: new Map(),
      customExtensionsByCatalog: new Map()
    };

    cloud.businessCatalogApps.forEach((row) => {
      addToIndex(indexes.catalogAppsByCatalog, upperKey(get(row, "BusinessCatalogID")), row);
      [get(row, "AppID"), get(row, "FioriID"), get(row, "ChipID")].forEach((value) => addToIndex(indexes.catalogAppsByAppId, upperKey(value), row));
    });
    cloud.roleCatalogAssignments.forEach((row) => {
      addToIndex(indexes.rolesByCatalog, upperKey(get(row, "CatalogID")), row);
    });
    cloud.businessRoles.forEach((row) => {
      addToIndex(indexes.businessRolesByRole, tenantRoleKey(row), row);
    });
    cloud.roleSpaceAssignments.forEach((row) => {
      addToIndex(indexes.spacesByRole, tenantRoleKey(row), row);
    });
    cloud.launchpadSpacePages.forEach((row) => {
      addToIndex(indexes.pagesBySpace, tenantSpaceKey(row), row);
    });
    cloud.launchpadPageTiles.forEach((row) => {
      addToIndex(indexes.tilesByCatalog, upperKey(get(row, "CatalogID")), row);
      [get(row, "ChipID"), `${get(row, "SemanticObject")}-${get(row, "Action")}`].forEach((value) => addToIndex(indexes.tilesByAppId, upperKey(value), row));
    });
    cloud.launchpadApplications.forEach((row) => {
      [get(row, "ApplicationID"), `${get(row, "SemanticObject")}-${get(row, "Action")}`].forEach((value) => addToIndex(indexes.launchpadAppsById, upperKey(value), row));
    });
    cloud.businessCatalogs.forEach((row) => {
      addToIndex(indexes.catalogsById, upperKey(get(row, "BusinessCatalogID")), row);
    });
    cloud.businessCatalogScopeItems.forEach((row) => {
      addToIndex(indexes.scopeCatalogsByScope, upperKey(get(row, "ScopeItemID")), row);
    });
    cloud.businessCatalogSuccessors.forEach((row) => {
      addToIndex(indexes.successorCatalogsByCatalog, upperKey(get(row, "BusinessCatalogID")), row);
    });
    cloud.customCatalogExtensions.forEach((row) => {
      addToIndex(indexes.customExtensionsByCatalog, upperKey(get(row, "BusinessCatalogID")), row);
    });

    return indexes;
  }

  function cleanRow(row) {
    const output = {};
    Object.keys(row || {}).forEach((key) => {
      let value = row[key];
      if (value === null || value === undefined) value = "";
      value = String(value).replace(/\s+/g, " ").trim();
      if (value === "System.Xml.XmlElement") value = "";
      output[key] = value;
    });
    return output;
  }

  function hasUsefulValues(row) {
    return Object.values(row).some((value) => value && !String(value).startsWith("No records available"));
  }

  function deriveData(data) {
    const usedIds = new Set();
    data.usedScopeImpact.forEach((row) => usedIds.add(get(row, "Scope Item ID")));
    data.usedVsActivatedScopeItems
      .filter((row) => get(row, "Used") === "true")
      .forEach((row) => usedIds.add(get(row, "Scope Item ID")));

    const activatedOnly = data.usedVsActivatedScopeItems.filter((row) => get(row, "Used") === "false");
    const criticalUsed = data.usedPersonalizedWhatsNew.filter(isCritical);
    const actionUsed = data.usedPersonalizedWhatsNew.filter(isActionReview);
    const newUsed = data.usedPersonalizedWhatsNew.filter((row) => getType(row) === "New");
    const innovationUsed = data.usedPersonalizedWhatsNew.filter((row) => getAction(row) === "Innovation");
    const deprecatedUsed = data.usedPersonalizedWhatsNew.filter((row) => /Deleted|Deprecated/i.test(getType(row)));
    const appRemediation = data.applications.filter((row) => /Deleted|Deprecated/i.test(getType(row)) || get(row, "Successor Application(Successor Application)"));
    const extensibilityUsed = [...data.changedExtensibility, ...data.deletedDeprecatedExtensibility].filter(hasUsefulValues);
    const publicSectorHighlights = publicSectorRows(data);
    const tests = buildTests(data, { criticalUsed, actionUsed, newUsed, deprecatedUsed, appRemediation, extensibilityUsed });

    return {
      usedIds,
      activatedOnly,
      criticalUsed,
      actionUsed,
      newUsed,
      innovationUsed,
      deprecatedUsed,
      appRemediation,
      extensibilityUsed,
      publicSectorHighlights,
      tests
    };
  }

  function get(row, ...keys) {
    for (const key of keys) {
      if (row && Object.prototype.hasOwnProperty.call(row, key) && row[key] !== "" && row[key] !== null && row[key] !== undefined) return row[key];
    }
    return "";
  }

  function upperKey(value) {
    return String(value || "").trim().toUpperCase();
  }

  function addToIndex(index, key, row) {
    if (!key) return;
    if (!index.has(key)) index.set(key, []);
    index.get(key).push(row);
  }

  function indexedRows(index, key) {
    if (!index || !key) return [];
    return index.get(upperKey(key)) || [];
  }

  function tenantRoleKey(row) {
    const role = get(row, "BusinessRoleID");
    if (!role) return "";
    return `${upperKey(get(row, "Tenant"))}::${upperKey(role)}`;
  }

  function tenantSpaceKey(row) {
    const space = get(row, "FioriSpaceID", "SpaceID");
    if (!space) return "";
    return `${upperKey(get(row, "Tenant"))}::${upperKey(space)}`;
  }

  function uniqueRowsBy(rows, keyFn) {
    const seen = new Set();
    return (rows || []).filter((row) => {
      const key = keyFn(row);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function normalizedDuplicateText(value) {
    return String(value || "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function changeDuplicateKey(row) {
    const title = normalizedDuplicateText(getTitle(row));
    const description = normalizedDuplicateText(get(row, "Description(Description)", "Description", "Additional Information", "Technical Name", "Deprecated Object"));
    const scopes = getScopeItems(row).map((item) => item.toUpperCase()).sort().join(",");
    const parts = [getAction(row), getType(row), getCategory(row), title, description, scopes].map(normalizedDuplicateText);
    return parts.join("|");
  }

  function mergeDuplicateChangeRows(rows) {
    const merged = new Map();
    (rows || []).forEach((row) => {
      const key = changeDuplicateKey(row) || rowKey(row);
      if (!key) return;
      const existing = merged.get(key);
      if (!existing) {
        merged.set(key, { ...row, groupedRows: [row] });
        return;
      }
      existing.groupedRows.push(row);
      Object.keys(row).forEach((field) => {
        if (!existing[field] && row[field]) existing[field] = row[field];
      });
    });
    return [...merged.values()];
  }

  function mergeDuplicateScopeRows(rows) {
    const merged = new Map();
    (rows || []).forEach((row) => {
      const id = get(row, "Scope Item ID");
      if (!id) return;
      const key = id.toUpperCase();
      const existing = merged.get(key);
      if (!existing) {
        merged.set(key, { ...row, groupedRows: [row] });
        return;
      }
      existing.groupedRows.push(row);
      const currentDegree = Number(get(existing, "Degree of Change") || 0);
      const nextDegree = Number(get(row, "Degree of Change") || 0);
      if (nextDegree > currentDegree) existing["Degree of Change"] = get(row, "Degree of Change");
      const lobs = uniqueList([
        ...splitIds(get(existing, "Line of Business")),
        ...splitIds(get(row, "Line of Business"))
      ]);
      existing["Line of Business"] = lobs.join(", ");
      if (/changed/i.test(get(row, "Release Status"))) existing["Release Status"] = get(row, "Release Status");
      Object.keys(row).forEach((field) => {
        if (!existing[field] && row[field]) existing[field] = row[field];
      });
    });
    return [...merged.values()];
  }

  function getAction(row) {
    return get(row, "Action(Action)", "Action", "action");
  }

  function getType(row) {
    return get(row, "Type(Type)", "Type", "type");
  }

  function getCategory(row) {
    return get(row, "Category(Category)", "Category", "category");
  }

  function getTitle(row) {
    return get(row, "Title(Title)", "title", "What's New Document Title", "What\u0027s New Document Title", "What's New Title(What's New Title)", "What\u0027s New Title(What\u0027s New Title)", "Scope Item Title", "Technical Name", "Item Description", "Item ID", "Name", "ApplicationName", "ApplicationDisplayName", "ArrangementName", "Deprecated Object", "Business Catalog Title(Catalog Title)", "Application Title(Application Title)");
  }

  function getScopeItems(row) {
    return splitIds(get(row, "Used Scope Items(Used Scope Items)", "Activated Scope Items(Activated Scope Items)", "Scope Items(Scope Items)", "Scope Item ID"));
  }

  function splitIds(value) {
    if (!value) return [];
    return value.split(/[,\n;]/).map((item) => item.trim()).filter(Boolean);
  }

  function getLocalization(row) {
    return get(row, "Functional Localization(Functional Localization)", "Functional Localization", "Country/Region", "Country");
  }

  function countryFit(row) {
    const localization = getLocalization(row);
    if (!localization) return { status: "global", label: "Global", reason: "No country restriction supplied by RASD." };
    const locations = localization.split(/[,;]/).map((item) => item.trim()).filter(Boolean);
    const matches = locations.some((location) => customerProfile.countryAliases.some((alias) => location.toLowerCase() === alias.toLowerCase()));
    if (matches) return { status: "match", label: customerProfile.country, reason: `Functional localization includes ${customerProfile.country}.` };
    return { status: "mismatch", label: `Not ${customerProfile.country}`, reason: `Functional localization is ${localization}.` };
  }

  function publicSectorText(row) {
    return [
      getTitle(row),
      get(row, "Description(Description)", "Description", "Additional Information"),
      get(row, "Solution Area(Solution Area)", "Solution Area"),
      get(row, "Solution Capability(Solution Capability)", "Solution Capability"),
      get(row, "Line of Business(Line of Business)", "Line of Business"),
      get(row, "Scope Items(Scope Items)")
    ].join(" ").toLowerCase();
  }

  function publicSectorScore(row) {
    const text = publicSectorText(row);
    const terms = [
      "public sector", "budgetary", "budget", "earmarked", "funds management",
      "fund ", "commitment", "grant", "government", "appropriation", "financial plan"
    ];
    return terms.reduce((score, term) => score + (text.includes(term) ? 1 : 0), 0);
  }

  function publicSectorRows(data) {
    return dedupeRows(
      data.completeWhatsNew
        .filter((row) => countryFit(row).status !== "mismatch")
        .filter((row) => publicSectorScore(row) > 0),
      rowKey
    ).sort((a, b) => publicSectorScore(b) - publicSectorScore(a));
  }

  function scopeIsUsed(scopeId) {
    return state.data.derived.usedIds.has(scopeId);
  }

  function hasUsedScope(rowOrItem) {
    const scopes = scopeIdsForReview(rowOrItem);
    if (!scopes.length) return true;
    return scopes.some(scopeIsUsed);
  }

  function isBroadChange(row) {
    const scopes = getScopeItems(row);
    return scopes.length > 12;
  }

  function testRecommendation(rowOrItem, scopeRow = null) {
    const row = rowOrItem;
    const review = effectiveReviewEntry(row);
    if (review.status === "not-relevant") {
      return { level: "skip", label: "Not in test pack", reason: "Marked not relevant for this customer.", action: "No testing unless somebody reopens the relevance decision." };
    }
    const fit = countryFit(row);
    if (fit.status === "mismatch") {
      return { level: "skip", label: "No test", reason: fit.reason, action: "Keep as evidence only; do not ask Australian users to test this." };
    }
    if (!hasUsedScope(row)) {
      return { level: "skip", label: "No test", reason: "The impacted scope is not marked as used for this customer.", action: "Do not include in Cloud ALM unless the business confirms usage." };
    }
    if (isBroadChange(row)) {
      return { level: "review", label: "Review once", reason: "This is a broad SAP change linked to many scope items, not a scope-specific regression scenario.", action: "Review centrally and avoid duplicating it into every scope item test." };
    }
    const category = getCategory(row);
    const type = getType(row);
    const action = getAction(row);
    if (scopeRow && category === "Development" && type === "New") {
      return { level: "optional", label: "Optional adoption", reason: "New capability only matters if the process owner wants to adopt it.", action: "Demo only if the business wants the new capability; otherwise record not relevant." };
    }
    if (/Deleted|Deprecated/i.test(type) || isCritical(row)) {
      return { level: "required", label: "Test required", reason: "Deprecated/deleted or critical change can break access, tiles, or replacement process.", action: "Test successor path, role/catalog access, and user communication." };
    }
    if (/Extensibility/i.test(category) || category === "Integration" || category === "Configuration" || category === "Authorization") {
      return { level: "required", label: "Technical test", reason: `${category} changes can affect customer-specific setup or integrations.`, action: recommendedAction(row, state.data) };
    }
    if (action === "Innovation" || type === "New") {
      return { level: "optional", label: "Explore only", reason: "Innovation/new feature is not regression testing unless adopted.", action: "Show to the process owner and add to backlog or demo only if valuable." };
    }
    if (category === "App") {
      return { level: "targeted", label: "Targeted app check", reason: "App UI/tile behavior may change, but full scope script replay is not justified.", action: "Open the affected app with the real role, confirm tile visibility and the changed screen/action only." };
    }
    if (category === "Function" || category === "Business Process") {
      return { level: "targeted", label: "Targeted process check", reason: "Only the changed process behavior needs a business walkthrough.", action: "Run the changed step with realistic data and capture acceptance." };
    }
    return { level: "review", label: "Review", reason: "RASD indicates change, but no customer-specific test has been proven yet.", action: "Review with the process owner and only add a test if it affects used execution." };
  }

  function uniqueList(values) {
    return [...new Set(values.map((value) => String(value || "").trim()).filter(Boolean))];
  }

  function normalizeLookup(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/&amp;/g, "&")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function parseAppReference(value) {
    const text = String(value || "").trim();
    if (!text) return { id: "", title: "", raw: "" };
    const idPattern = /[A-Z][A-Z0-9]*\d[A-Z0-9]*/i;
    const start = text.match(new RegExp(`^(${idPattern.source})\\s*(?:\\((.*)\\))?$`, "i"));
    const paren = text.match(new RegExp(`\\((${idPattern.source})\\)`, "i"));
    const any = text.match(new RegExp(`\\b(${idPattern.source})\\b`, "i"));
    const id = (start && start[1]) || (paren && paren[1]) || (any && any[1]) || "";
    let title = "";
    if (start && start[2]) title = start[2];
    else if (id && text.startsWith(id)) title = text.slice(id.length).replace(/^\s*[-:]\s*/, "").trim();
    else title = text.replace(/\s*\([A-Z][A-Z0-9]*\d[A-Z0-9]*\)\s*/i, " ").trim();
    title = title.replace(/^\(|\)$/g, "").trim();
    return { id, title, raw: text };
  }

  function findRelatedAppRow(row, data = state.data) {
    const sourceTitle = normalizeLookup(getTitle(row));
    const parsedTitleApp = parseAppReference(getTitle(row));
    const sourceIds = uniqueList([
      get(row, "Application ID(Application ID)", "App ID(App ID)"),
      parsedTitleApp.id
    ]).map((id) => id.toUpperCase());

    return data.applications.find((candidate) => {
      const candidateId = get(candidate, "Application ID(Application ID)").toUpperCase();
      if (candidateId && sourceIds.includes(candidateId)) return true;
      const candidateTitle = normalizeLookup(getTitle(candidate));
      if (!sourceTitle || !candidateTitle) return false;
      return candidateTitle === sourceTitle || (sourceTitle.length > 14 && candidateTitle.includes(sourceTitle)) || (candidateTitle.length > 14 && sourceTitle.includes(candidateTitle));
    }) || null;
  }

  function findWhereUsedCatalogRows(row, relatedApp, data = state.data) {
    const oldAppId = getOldAppInfo(row, relatedApp).id.toUpperCase();
    const titles = uniqueList([getTitle(row), relatedApp && getTitle(relatedApp)]).map(normalizeLookup);
    return data.whereUsedAssociatedCatalogs.filter((candidate) => {
      const candidateAppId = get(candidate, "App ID(App ID)").toUpperCase();
      if (oldAppId && candidateAppId === oldAppId) return true;
      const candidateTitle = normalizeLookup(getTitle(candidate));
      return candidateTitle && titles.includes(candidateTitle);
    });
  }

  function getOldAppInfo(row, relatedApp = null) {
    const parsedTitle = parseAppReference(getTitle(row));
    const id = get(row, "Application ID(Application ID)", "App ID(App ID)") || get(relatedApp, "Application ID(Application ID)") || parsedTitle.id;
    const title = get(row, "Application Title(Application Title)") || get(relatedApp, "Application Title(Application Title)") || parsedTitle.title || getTitle(row);
    return { id, title };
  }

  function getSuccessorAppInfo(row, relatedApp = null) {
    const successor = get(row, "Successor Application(Successor Application)") || get(relatedApp, "Successor Application(Successor Application)");
    const parsed = parseAppReference(successor);
    return { id: parsed.id, title: parsed.title, raw: parsed.raw };
  }

  function publicCloudRows(data, key) {
    return data.publicCloud && Array.isArray(data.publicCloud[key]) ? data.publicCloud[key] : [];
  }

  function publicCloudIndexes(data) {
    return data.publicCloud?.indexes || {};
  }

  function targetSignature(target) {
    return [target?.id, target?.title, target?.raw].map((value) => String(value || "").trim()).filter(Boolean).join("|");
  }

  function appTargetData(targets) {
    const validTargets = (targets || []).filter(Boolean);
    return {
      ids: uniqueList(validTargets.map((target) => target.id).filter(Boolean)).map(upperKey),
      terms: uniqueList(validTargets.flatMap((target) => [target.title, target.raw]).map(normalizeLookup).filter((value) => value.length > 7))
    };
  }

  function cloudRowText(row, keys) {
    return normalizeLookup(keys.map((key) => get(row, key)).join(" "));
  }

  function cloudRowMatchesTargets(row, targets, keys) {
    const target = appTargetData(targets);
    const ids = [
      get(row, "AppID"),
      get(row, "FioriID"),
      get(row, "ChipID"),
      get(row, "ApplicationID"),
      get(row, "VizID"),
      `${get(row, "SemanticObject")}-${get(row, "Action")}`
    ].map(upperKey).filter(Boolean);
    if (target.ids.some((id) => ids.includes(id))) return true;
    if (!target.terms.length) return false;
    const text = cloudRowText(row, keys);
    return target.terms.some((term) => text.includes(term) || (text.length > 9 && term.includes(text)));
  }

  function cloudCatalogAppRows(data, targets) {
    const indexes = publicCloudIndexes(data);
    const target = appTargetData(targets);
    const exactRows = target.ids.flatMap((id) => indexedRows(indexes.catalogAppsByAppId, id));
    const fallbackRows = exactRows.length ? [] : publicCloudRows(data, "businessCatalogApps")
      .filter((row) => cloudRowMatchesTargets(row, targets, ["ApplicationText", "ApplicationSubTitle", "AppID", "FioriID", "ChipID"]));
    return uniqueRowsBy([...exactRows, ...fallbackRows], (row) => [get(row, "Tenant"), get(row, "BusinessCatalogID"), get(row, "AppID"), get(row, "FioriID"), get(row, "ChipID")].join("|"));
  }

  function cloudLaunchpadTileRows(data, targets, catalogIds = []) {
    const indexes = publicCloudIndexes(data);
    const target = appTargetData(targets);
    const exactRows = target.ids.flatMap((id) => indexedRows(indexes.tilesByAppId, id));
    const catalogRows = catalogIds.flatMap((id) => indexedRows(indexes.tilesByCatalog, id));
    const fallbackRows = exactRows.length ? [] : publicCloudRows(data, "launchpadPageTiles")
      .filter((row) => cloudRowMatchesTargets(row, targets, ["AppTitle", "AppSubtitle", "ChipID", "SemanticObject", "Action"]));
    return uniqueRowsBy([...exactRows, ...catalogRows, ...fallbackRows], (row) => [get(row, "Tenant"), get(row, "PageID"), get(row, "SectionTitle"), get(row, "CatalogID"), get(row, "ChipID"), get(row, "AppTitle")].join("|"));
  }

  function publicCloudAppEvidence(base, row, data = state.data) {
    if (!data.publicCloud?.indexes) return emptyPublicCloudEvidence();
    if (row && typeof row === "object" && cloudEvidenceCache.has(row)) return cloudEvidenceCache.get(row);

    const indexes = publicCloudIndexes(data);
    const oldTargets = [base.oldApp];
    const successorTargets = [base.successorApp];
    const allTargets = [...oldTargets, ...successorTargets].filter((target) => targetSignature(target));
    const oldAppRows = cloudCatalogAppRows(data, oldTargets);
    const successorAppRows = cloudCatalogAppRows(data, successorTargets);
    const initialCatalogIds = uniqueList([
      ...base.catalogs,
      ...base.successorCatalogs,
      ...oldAppRows.map((item) => get(item, "BusinessCatalogID")),
      ...successorAppRows.map((item) => get(item, "BusinessCatalogID"))
    ]).map(upperKey);
    const catalogSuccessorRows = uniqueRowsBy(
      initialCatalogIds.flatMap((id) => indexedRows(indexes.successorCatalogsByCatalog, id)),
      (item) => [get(item, "Tenant"), get(item, "BusinessCatalogID"), get(item, "SuccessorBusinessCatalogID")].join("|")
    );
    const catalogIds = uniqueList([
      ...initialCatalogIds,
      ...catalogSuccessorRows.map((item) => get(item, "SuccessorBusinessCatalogID"))
    ]).map(upperKey);
    const oldLaunchpadRows = cloudLaunchpadTileRows(data, oldTargets, initialCatalogIds);
    const successorLaunchpadRows = cloudLaunchpadTileRows(data, successorTargets, catalogIds);
    const catalogRows = uniqueRowsBy(
      catalogIds.flatMap((id) => indexedRows(indexes.catalogsById, id)),
      (item) => [get(item, "Tenant"), get(item, "BusinessCatalogID")].join("|")
    );
    const roleCatalogRows = uniqueRowsBy(
      catalogIds.flatMap((id) => indexedRows(indexes.rolesByCatalog, id)),
      (item) => [get(item, "Tenant"), get(item, "BusinessRoleID"), get(item, "CatalogID")].join("|")
    );
    const roleKeys = uniqueList(roleCatalogRows.map(tenantRoleKey));
    const roleRows = uniqueRowsBy(
      roleKeys.flatMap((key) => indexes.businessRolesByRole?.get(key) || []),
      tenantRoleKey
    );
    const roleSpaceRows = uniqueRowsBy(
      roleKeys.flatMap((key) => indexes.spacesByRole?.get(key) || []),
      (item) => [get(item, "Tenant"), get(item, "BusinessRoleID"), get(item, "FioriSpaceID")].join("|")
    );
    const launchpadSpacePages = uniqueRowsBy(
      roleSpaceRows.flatMap((item) => indexedRows(indexes.pagesBySpace, `${get(item, "Tenant")}::${get(item, "FioriSpaceID")}`)),
      (item) => [get(item, "Tenant"), get(item, "SpaceID"), get(item, "PageID")].join("|")
    );
    const customCatalogExtensions = uniqueRowsBy(
      [
        ...catalogIds.flatMap((id) => indexedRows(indexes.customExtensionsByCatalog, id)),
        ...publicCloudRows(data, "customCatalogExtensions").filter((item) => cloudRowMatchesTargets(item, allTargets, ["ApplicationID", "IAMAppDescription", "AssignmentID"]))
      ],
      (item) => [get(item, "Tenant"), get(item, "BusinessCatalogID"), get(item, "ApplicationID"), get(item, "AssignmentID")].join("|")
    );
    const cloud = {
      oldAppRows,
      successorAppRows,
      catalogIds,
      catalogRows,
      catalogSuccessorRows,
      roleCatalogRows,
      roleRows,
      roleSpaceRows,
      launchpadSpacePages,
      oldLaunchpadRows,
      successorLaunchpadRows,
      customCatalogExtensions
    };
    cloud.hasEvidence = Boolean(catalogIds.length || roleCatalogRows.length || launchpadSpacePages.length || oldLaunchpadRows.length || successorLaunchpadRows.length || customCatalogExtensions.length);
    cloud.summary = tenantEvidenceSummary(cloud);
    if (row && typeof row === "object") cloudEvidenceCache.set(row, cloud);
    return cloud;
  }

  function emptyPublicCloudEvidence() {
    return {
      oldAppRows: [],
      successorAppRows: [],
      catalogIds: [],
      catalogRows: [],
      catalogSuccessorRows: [],
      roleCatalogRows: [],
      roleRows: [],
      roleSpaceRows: [],
      launchpadSpacePages: [],
      oldLaunchpadRows: [],
      successorLaunchpadRows: [],
      customCatalogExtensions: [],
      hasEvidence: false,
      summary: ""
    };
  }

  function tenantEvidenceSummary(cloud) {
    if (!cloud?.hasEvidence) return "";
    const roleCount = uniqueRowsBy(cloud.roleCatalogRows, tenantRoleKey).length;
    const pageCount = uniqueRowsBy(cloud.launchpadSpacePages, (item) => [get(item, "Tenant"), get(item, "PageID")].join("|")).length;
    const tileCount = uniqueRowsBy([...cloud.oldLaunchpadRows, ...cloud.successorLaunchpadRows], (item) => [get(item, "Tenant"), get(item, "PageID"), get(item, "CatalogID"), get(item, "ChipID")].join("|")).length;
    const parts = [
      cloud.catalogIds.length ? `${cloud.catalogIds.length} catalog${cloud.catalogIds.length === 1 ? "" : "s"}` : "",
      roleCount ? `${roleCount} role${roleCount === 1 ? "" : "s"}` : "",
      pageCount ? `${pageCount} page${pageCount === 1 ? "" : "s"}` : "",
      tileCount ? `${tileCount} tile${tileCount === 1 ? "" : "s"}` : ""
    ].filter(Boolean);
    return parts.length ? parts.join(" / ") : "";
  }

  function evidenceMetric(label, value, detail = "") {
    return `
      <div class="evidence-metric">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
        ${detail ? `<small>${escapeHtml(detail)}</small>` : ""}
      </div>
    `;
  }

  function miniEvidenceTable(rows, columns, emptyText, limit = 8) {
    const uniqueRows = uniqueRowsBy(rows, (row) => columns.map((column) => column.value(row)).join("|"));
    if (!uniqueRows.length) return `<p class="muted">${escapeHtml(emptyText)}</p>`;
    const shown = uniqueRows.slice(0, limit);
    const more = Math.max(uniqueRows.length - shown.length, 0);
    return `
      <div class="mini-evidence-table-wrap">
        <table class="mini-evidence-table">
          <thead><tr>${columns.map((column) => `<th>${escapeHtml(column.label)}</th>`).join("")}</tr></thead>
          <tbody>
            ${shown.map((row) => `
              <tr>${columns.map((column) => `<td>${escapeHtml(column.value(row) || "-")}</td>`).join("")}</tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      ${more ? `<p class="muted compact-note">+${more} more in the extract.</p>` : ""}
    `;
  }

  function appTenantEvidencePanel(row) {
    const evidence = appEvidence(row);
    const cloud = evidence.cloud;
    const roleCount = uniqueRowsBy(cloud.roleCatalogRows, tenantRoleKey).length;
    const pageCount = uniqueRowsBy(cloud.launchpadSpacePages, (item) => [get(item, "Tenant"), get(item, "PageID")].join("|")).length;
    const successorTileCount = uniqueRowsBy(cloud.successorLaunchpadRows, (item) => [get(item, "Tenant"), get(item, "PageID"), get(item, "CatalogID"), get(item, "ChipID")].join("|")).length;
    const oldTileCount = uniqueRowsBy(cloud.oldLaunchpadRows, (item) => [get(item, "Tenant"), get(item, "PageID"), get(item, "CatalogID"), get(item, "ChipID")].join("|")).length;
    if (!cloud.hasEvidence) {
      return `
        <div class="detail-section tenant-evidence-panel">
          <p class="system-label">Tenant evidence from extracts</p>
          <p class="muted">No matching role, catalog, space/page, tile, or custom catalog-extension evidence was found in the Public Cloud extracts for this app/change.</p>
        </div>
      `;
    }
    return `
      <div class="detail-section tenant-evidence-panel">
        <p class="system-label">Tenant evidence from extracts</p>
        <div class="evidence-metric-grid">
          ${evidenceMetric("Catalogs", cloud.catalogIds.length || 0, "old + successor")}
          ${evidenceMetric("Business roles", roleCount || 0, "assigned catalogs")}
          ${evidenceMetric("Spaces/pages", pageCount || 0, "via assigned roles")}
          ${evidenceMetric("Tiles found", oldTileCount + successorTileCount, `${successorTileCount} successor`)}
        </div>
        <div class="evidence-subsection">
          <p class="system-label">Business roles to check</p>
          ${miniEvidenceTable(cloud.roleCatalogRows, [
            { label: "Tenant", value: (item) => get(item, "Tenant") },
            { label: "Role", value: (item) => get(item, "BusinessRoleID") },
            { label: "Role description", value: (item) => get(item, "BusinessRoleDescription") },
            { label: "Catalog", value: (item) => get(item, "CatalogID") }
          ], "No role assignment found for the matched catalogs.")}
        </div>
        <div class="evidence-subsection">
          <p class="system-label">Launchpad placement</p>
          ${miniEvidenceTable([...cloud.successorLaunchpadRows, ...cloud.oldLaunchpadRows], [
            { label: "Tenant", value: (item) => get(item, "Tenant") },
            { label: "Page", value: (item) => get(item, "PageTitle", "PageID") },
            { label: "Section", value: (item) => get(item, "SectionTitle") },
            { label: "Tile", value: (item) => get(item, "AppTitle", "ChipID") },
            { label: "Catalog", value: (item) => get(item, "CatalogID") }
          ], "No launchpad tile was found for the matched app/catalog.")}
        </div>
        ${cloud.customCatalogExtensions.length ? `
          <div class="evidence-subsection">
            <p class="system-label">Custom catalog extensions</p>
            ${miniEvidenceTable(cloud.customCatalogExtensions, [
              { label: "Tenant", value: (item) => get(item, "Tenant") },
              { label: "Catalog", value: (item) => get(item, "BusinessCatalogID") },
              { label: "App", value: (item) => get(item, "ApplicationID") },
              { label: "Description", value: (item) => get(item, "IAMAppDescription") }
            ], "No custom catalog extension found.")}
          </div>
        ` : ""}
      </div>
    `;
  }

  function appEvidence(row, data = state.data) {
    const relatedApp = findRelatedAppRow(row, data);
    const whereUsedRows = findWhereUsedCatalogRows(row, relatedApp, data);
    const oldApp = getOldAppInfo(row, relatedApp);
    const successorApp = getSuccessorAppInfo(row, relatedApp);
    const catalogs = uniqueList([
      ...whereUsedRows.flatMap((candidate) => splitIds(get(candidate, "Associated Business Catalogs(Associated Catalogs)"))),
      ...splitIds(get(row, "Associated Business Catalogs(Associated Catalogs)")),
      get(row, "Business Catalog ID(Catalog ID)")
    ]);
    const successorCatalogs = uniqueList([
      get(row, "Successor Business Catalog ID(Successor Catalog ID)"),
      ...splitIds(get(row, "Successor Business Catalogs(Successor Catalogs)"))
    ]);
    const tenants = uniqueList(whereUsedRows.flatMap((candidate) => splitIds(get(candidate, "Tenants(Tenants)"))));
    const cloud = publicCloudAppEvidence({ oldApp, successorApp, catalogs, successorCatalogs }, row, data);
    return { relatedApp, whereUsedRows, oldApp, successorApp, catalogs, successorCatalogs, tenants, cloud };
  }

  function formatAppLabel(app) {
    if (!app || (!app.id && !app.title)) return "Not supplied in this RASD export";
    if (app.id && app.title) return `${app.id} - ${app.title}`;
    return app.id || app.title;
  }

  function catalogSummary(catalogs) {
    if (!catalogs.length) return "Catalogs not supplied in this RASD export";
    const first = catalogs.slice(0, 4).join(", ");
    return catalogs.length > 4 ? `${first}, +${catalogs.length - 4} more` : first;
  }

  function appChangeMeta(row) {
    if (getCategory(row) !== "App") return `<span class="muted">${escapeHtml(getType(row))}</span>`;
    const evidence = appEvidence(row);
    const oldText = evidence.oldApp.id ? `Old app ${evidence.oldApp.id}` : "Old app not supplied";
    const successorText = evidence.successorApp.id ? `Successor ${evidence.successorApp.id}` : "Successor not supplied";
    const catalogCount = evidence.cloud.catalogIds.length || evidence.catalogs.length;
    const catalogText = catalogCount ? `${catalogCount} catalog${catalogCount === 1 ? "" : "s"} to review` : "Catalogs not supplied";
    return `
      <span class="muted">${escapeHtml(getType(row))}</span>
      <span class="row-meta">${escapeHtml(oldText)} -> ${escapeHtml(successorText)}</span>
      <span class="row-meta">${escapeHtml(catalogText)}</span>
      ${evidence.cloud.summary ? `<span class="row-meta">Tenant evidence: ${escapeHtml(evidence.cloud.summary)}</span>` : ""}
    `;
  }

  function appReplacementPanel(row) {
    if (getCategory(row) !== "App" && !get(row, "Application ID(Application ID)", "App ID(App ID)")) return "";
    const evidence = appEvidence(row);
    if (!evidence.oldApp.id && !evidence.successorApp.id && !evidence.catalogs.length && !evidence.cloud.catalogIds.length) return "";
    const catalogList = evidence.cloud.catalogIds.length ? evidence.cloud.catalogIds : evidence.catalogs;
    return `
      <div class="detail-section">
        <p class="system-label">App replacement map</p>
        <div class="fact-grid">
          <div class="fact-card">
            <span>Old app</span>
            <strong>${escapeHtml(evidence.oldApp.id || "Not supplied")}</strong>
            <p>${escapeHtml(evidence.oldApp.title || "Check SAP Help link")}</p>
          </div>
          <div class="fact-card">
            <span>Successor app</span>
            <strong>${escapeHtml(evidence.successorApp.id || "Not supplied")}</strong>
            <p>${escapeHtml(evidence.successorApp.title || "Not supplied in this export")}</p>
          </div>
        </div>
      </div>
      <div class="detail-section">
        <p class="system-label">Catalogs and launchpad follow-up</p>
        <p>${escapeHtml(catalogSummary(catalogList))}</p>
        ${evidence.cloud.summary ? `<p class="muted">Tenant extract evidence: ${escapeHtml(evidence.cloud.summary)}</p>` : ""}
        ${evidence.tenants.length ? `<p class="muted">Tenant evidence: ${escapeHtml(evidence.tenants.join(", "))}</p>` : ""}
        <ul class="detail-list">
          <li>Find business roles that contain the affected catalog IDs above.</li>
          <li>Confirm the successor app ${escapeHtml(evidence.successorApp.id || "from SAP Help")} is available in those roles after the catalog update.</li>
          <li>Check Manage Launchpad Spaces and Manage Launchpad Pages; SAP may remove the old tile without adding the new one to the page.</li>
          <li>If the tile is missing, search by successor app ID or title, add it to the relevant page, and test with a real business user role.</li>
        </ul>
      </div>
    `;
  }

  function isCritical(row) {
    return /^Critical/i.test(getAction(row));
  }

  function isActionReview(row) {
    return /Action\/Review/i.test(getAction(row));
  }

  function actionTone(row) {
    if (isCritical(row) || /Deleted/i.test(getType(row))) return "danger";
    if (isActionReview(row) || /Deprecated/i.test(getType(row))) return "warning";
    if (getAction(row) === "Innovation") return "green";
    return "teal";
  }

  function priorityOf(row) {
    if (isCritical(row) || /Deleted/i.test(getType(row))) return "critical";
    if (isActionReview(row) || /Deprecated/i.test(getType(row))) return "action";
    if (getType(row) === "New" || getAction(row) === "Innovation") return "new";
    return "info";
  }

  function haystack(row) {
    return Object.values(row || {}).join(" ").toLowerCase();
  }

  function applyGlobalFilters(rows, priorityAware = true) {
    const search = state.search.trim().toLowerCase();
    return rows.filter((row) => {
      const matchesSearch = !search || haystack(row).includes(search);
      const matchesPriority = !priorityAware || state.priority === "all" || priorityOf(row) === state.priority;
      return matchesSearch && matchesPriority;
    });
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function badge(label, tone = "") {
    if (!label) return "";
    return `<span class="badge ${tone}">${escapeHtml(label)}</span>`;
  }

  function recommendationTone(level) {
    if (level === "required") return "danger";
    if (level === "targeted" || level === "review") return "warning";
    if (level === "optional") return "green";
    if (level === "skip") return "neutral";
    return "teal";
  }

  function recommendationBadge(row, scopeRow = null) {
    const recommendation = testRecommendation(row, scopeRow);
    return badge(recommendation.label, recommendationTone(recommendation.level));
  }

  function recommendationPanel(row, scopeRow = null) {
    const recommendation = testRecommendation(row, scopeRow);
    const fit = countryFit(row);
    return `
      <div class="recommendation-panel ${recommendation.level}">
        <div class="badges">${badge(fit.label, fit.status === "mismatch" ? "neutral" : "teal")}${badge(recommendation.label, recommendationTone(recommendation.level))}</div>
        <strong>${escapeHtml(recommendation.reason)}</strong>
        <p>${escapeHtml(recommendation.action)}</p>
      </div>
    `;
  }

  function whatsNewLink(row) {
    return get(row, "sourceUrl", "What's New Document(What's New Document)", "What\u0027s New Document(What\u0027s New Document)", "What's New Document Title Url", "What\u0027s New Document Title Url", "Link(Link)");
  }

  function whatsNewSourceReferences(row, primaryLabel = "SAP What's New item") {
    const grouped = row?.groupedRows?.length ? row.groupedRows : [row];
    return dedupeReferences(grouped.map((item, index) => {
      const url = whatsNewLink(item);
      if (!url) return null;
      return {
        label: index === 0 ? primaryLabel : `${primaryLabel} source ${index + 1}`,
        url
      };
    }));
  }

  function dedupeReferences(references) {
    const seen = new Set();
    return (references || []).filter((reference) => {
      if (!reference?.url || seen.has(reference.url)) return false;
      seen.add(reference.url);
      return true;
    });
  }

  function officialReferenceLinks(row) {
    const title = getTitle(row).toLowerCase();
    const references = [];
    const add = (label, url) => references.push({ label, url });

    if (title.includes("negative posting check for posting apis")) {
      add("SAP KBA 3641505 - Negative posting API check", "https://userapps.support.sap.com/sap/support/knowledge/en/3641505");
      add("SAP Note 3157729 - Negative posting with SOAP APIs", "https://me.sap.com/notes/3157729");
      add("SAP Help - Negative postings", "https://help.sap.com/docs/SAP_S4HANA_CLOUD/0fa84c9d9c634132b7c4abb9ffdd8f06/8a5da6952ae44ea794d87d244c82fcb6.html");
      return dedupeReferences(references);
    }

    return [];
  }

  function genericGuidanceFor(row) {
    return null;
    const title = getTitle(row);
    const category = getCategory(row) || get(row, "Category") || "Change";
    const type = getType(row) || get(row, "Type") || "Changed";
    const scopes = getScopeItems(row);
    const fit = countryFit(row);
    const recommendation = testRecommendation(row);
    const evidence = appEvidence(row);
    const deletedOrDeprecated = /Deleted|Deprecated/i.test(type);
    const changed = /Changed/i.test(type);
    const newItem = /New/i.test(type);
    const affectedScope = scopes.length ? scopes.join(", ") : get(row, "scope") || "No used scope supplied";
    const locality = fit.status === "mismatch" ? `${fit.reason} Treat as evidence unless the customer also operates that localization.` : fit.reason;
    const lineOfBusiness = get(row, "Line of Business(Line of Business)", "Line of Business") || "the affected business area";

    const baseRelevance = [
      `Affected scope / area: ${affectedScope}.`,
      locality,
      hasUsedScope(row) ? "RASD indicates this is in or near the customer's used scope; review before deciding test effort." : "RASD does not show this in used scope; keep it low priority unless the business confirms usage."
    ];

    const commonEvidence = [
      "Record review status, owner, evidence screenshot or test result, and whether the item is relevant, future adoption, or not relevant.",
      "Attach the SAP What's New link or search result used for the decision."
    ];

    if (category === "App" || get(row, "Application ID(Application ID)", "App ID(App ID)")) {
      const oldLabel = formatAppLabel(evidence.oldApp);
      const successorLabel = formatAppLabel(evidence.successorApp);
      return {
        label: "RASD-backed app review guidance",
        sections: [
          {
            title: "What it means",
            text: deletedOrDeprecated
              ? `The impacted app or tile is being removed or deprecated. Do not treat this as a simple removal: identify the successor, catalogs, spaces/pages, and affected business roles before the upgrade.`
              : `The app experience may change: tile, page placement, fields, actions, output, or app behavior may need a focused business-role check.`
          },
          {
            title: "Business relevance",
            items: [
              ...baseRelevance,
              `Old app: ${oldLabel}.`,
              `Successor app: ${successorLabel}.`,
              `Catalogs to review: ${catalogSummary(evidence.catalogs)}.`
            ]
          },
          {
            title: "How to review / implement",
            items: [
              "Open the SAP What's New item and confirm the old app ID, successor app ID, and effective release.",
              "Check business roles and catalogs that expose the old app; update successor catalog assignment where needed.",
              "Check Manage Launchpad Spaces and Manage Launchpad Pages because SAP content can remove an old tile without placing the successor where users expect it.",
              "Search the successor app ID in the launchpad app finder and add it to the relevant page if it is missing."
            ]
          },
          {
            title: "How to test",
            items: [
              "Log in with a representative business role, not an admin role.",
              "Confirm old tile visibility/removal, successor tile visibility, app launch, and authorizations.",
              "Run only the changed or replacement user step, then capture screenshot evidence and the role/catalog changed."
            ]
          }
        ],
        references: officialReferenceLinks(row)
      };
    }

    if (category === "Authorization" || /role|catalog|iam/i.test(`${title} ${category}`)) {
      return {
        label: "RASD-backed authorization guidance",
        sections: [
          { title: "What it means", text: "This item can affect who can see or execute an app, catalog, restriction, or business role function after upgrade." },
          {
            title: "Business relevance",
            items: [
              ...baseRelevance,
              "Relevant when affected users rely on the app/process, or when company-code / plant / purchasing-organization restrictions are used."
            ]
          },
          {
            title: "How to review / implement",
            items: [
              "Identify impacted business catalog, business role template, restriction type, and real user groups.",
              "Compare current role assignment with the successor or changed catalog in the SAP What's New item.",
              "Update derived/customer roles only after confirming the business owner still needs access."
            ]
          },
          {
            title: "How to test",
            items: [
              "Test with one real representative user role and one restricted user.",
              "Confirm the app is visible, the action is available, and restricted data remains restricted.",
              "Capture role name, catalog, user, restriction value, and screenshot evidence."
            ]
          }
        ],
        references: officialReferenceLinks(row)
      };
    }

    if (category === "Configuration" || /configuration|customizing|setting|cbc|sscui/i.test(`${title} ${category}`)) {
      return {
        label: "RASD-backed configuration guidance",
        sections: [
          { title: "What it means", text: "A configuration activity, setting, or CBC/SSCUI option may have changed. This is not a full process replay item unless the setting is used by the customer." },
          { title: "Business relevance", items: [...baseRelevance, "Relevant when the changed configuration controls an active process, output, valuation, tax, payment, procurement, or integration rule."] },
          {
            title: "How to review / implement",
            items: [
              "Open the SAP What's New item and identify the exact configuration activity or setting ID.",
              "Check the customer's current setting in test after the preview upgrade.",
              "Decide whether the setting needs no change, a configuration change, or business sign-off."
            ]
          },
          {
            title: "How to test",
            items: [
              "Run one transaction that depends on the setting, using realistic master data.",
              "Compare expected output or accounting/process result before and after the upgrade.",
              "Record the setting value, transaction used, and business acceptance."
            ]
          }
        ],
        references: officialReferenceLinks(row)
      };
    }

    if (/Extensibility|API|CDS|Development/i.test(category) || /CDS|API|BAdI|custom field|custom logic|developer extensibility|key user extensibility/i.test(title)) {
      return {
        label: "RASD-backed extensibility guidance",
        sections: [
          { title: "What it means", text: "This item affects custom fields, custom logic, released APIs/CDS views, BAdIs, or side-by-side consumers. It matters only where the customer has built or plans to build something on top of the affected object." },
          {
            title: "Business relevance",
            items: [
              ...baseRelevance,
              "Functional consultants should identify the business use case and expected output; developers should validate released object usage, activation, syntax, authorization, and runtime behavior."
            ]
          },
          {
            title: "How to review / implement",
            items: [
              "List custom fields, custom CDS views, custom logic, APIs, integrations, reports, SAC models, and BTP services that touch this area.",
              "Use released SAP objects only; check SAP Help or Business Accelerator Hub for the supported object/API/CDS view.",
              "Validate activation in the upgraded test tenant before deciding business testing effort."
            ]
          },
          {
            title: "How to test",
            items: [
              "Run activation/syntax checks for the extension object.",
              "Execute the consuming report, API, app, or integration with a small but realistic dataset.",
              "Reconcile output against a standard SAP app or known production result, then record evidence."
            ]
          }
        ],
        references: officialReferenceLinks(row)
      };
    }

    if (/Integration|Workflow|Output|Event|Communication/i.test(category) || /integration|workflow|output|event|payload|communication arrangement/i.test(title)) {
      return {
        label: "RASD-backed integration/workflow guidance",
        sections: [
          { title: "What it means", text: "This may affect an interface, workflow, event, output, payload, or background processing step. It should be tested only where that flow is active for the customer." },
          { title: "Business relevance", items: [...baseRelevance, "Relevant when a connected system, bank, BTP service, supplier/customer channel, workflow approver, or output recipient depends on the changed process."] },
          {
            title: "How to review / implement",
            items: [
              "Identify the interface/job/workflow/output and the connected system or recipient.",
              "Review payload fields, communication arrangement, destination, schedule, and error handling.",
              "Confirm whether the change is mandatory before upgrade or optional adoption after upgrade."
            ]
          },
          {
            title: "How to test",
            items: [
              "Run one end-to-end message or workflow instance with realistic data.",
              "Check payload, status monitor, error log, receiving system, and business outcome.",
              "Capture message ID or workflow ID plus screenshots/log evidence."
            ]
          }
        ],
        references: officialReferenceLinks(row)
      };
    }

    if (/Launchpad Space|Space|Page/i.test(category) || /space|page|launchpad|tile/i.test(title)) {
      return {
        label: "RASD-backed launchpad guidance",
        sections: [
          { title: "What it means", text: "SAP-delivered space/page content may change. Users can lose, gain, or see moved tiles depending on whether the customer reuses SAP templates or copied/custom pages." },
          { title: "Business relevance", items: [...baseRelevance, "Relevant when users rely on SAP-delivered spaces/pages or when the affected app tile must be visible for upgrade testing."] },
          {
            title: "How to review / implement",
            items: [
              "Identify affected role template, space, page, and app tile from the SAP What's New item.",
              "Compare SAP-delivered template changes with customer copied/custom pages.",
              "Add missing successor tiles manually where the standard content does not place them where users work."
            ]
          },
          {
            title: "How to test",
            items: [
              "Log in with the business role and inspect the actual launchpad page.",
              "Confirm tile exists, opens, and points to the correct successor app.",
              "Record role, space/page, tile name, app ID, and screenshot."
            ]
          }
        ],
        references: officialReferenceLinks(row)
      };
    }

    if (/Data Management|Archiving|Mass/i.test(category) || /archive|mass|migration|load|data/i.test(title)) {
      return {
        label: "RASD-backed data management guidance",
        sections: [
          { title: "What it means", text: "This item affects data handling such as archiving, mass maintenance, upload, migration, or data retention. It is usually adoption/review unless an active job or compliance process uses it." },
          { title: "Business relevance", items: [...baseRelevance, "Relevant when the customer has active jobs, retention requirements, mass maintenance routines, audit obligations, or data-load processes in this area."] },
          {
            title: "How to review / implement",
            items: [
              "Identify whether the customer runs this data process today and who owns it.",
              "Check prerequisite configuration, object names, retention rules, authorizations, and job schedules.",
              "Decide whether to backlog as adoption or test before upgrade because an existing job depends on it."
            ]
          },
          {
            title: "How to test",
            items: [
              "Run a small controlled example in test, not a broad production-like mass run.",
              "Check logs, object counts, output file/job status, and downstream reporting.",
              "Capture job ID or object ID and owner acceptance."
            ]
          }
        ],
        references: officialReferenceLinks(row)
      };
    }

    return {
      label: "RASD-backed process guidance",
      sections: [
        {
          title: "What it means",
          text: newItem
            ? "This is a new SAP capability. Treat it as adoption/backlog unless the customer wants to use it immediately or it replaces something already used."
            : changed
              ? "This is a changed SAP capability. Review whether the changed step is actually used before creating a release test."
              : deletedOrDeprecated
                ? "This item is deleted or deprecated. Confirm the successor path before production upgrade."
                : "This RASD item needs customer relevance triage before it becomes a test case."
        },
        {
          title: "Business relevance",
          items: [
            ...baseRelevance,
            `Line of business: ${lineOfBusiness}.`,
            `Release decision: ${recommendation.label} - ${recommendation.reason}`
          ]
        },
        {
          title: "How to review / implement",
          items: [
            "Open the SAP What's New item and identify the exact process, app, field, output, or prerequisite affected.",
            "Ask the process owner whether this exact step is used by this customer.",
            "Mark as relevant, not relevant, or future adoption before adding anything to the test pack."
          ]
        },
        {
          title: "How to test",
          items: [
            recommendation.action,
            "Run only the changed step with realistic data instead of replaying the full SAP scope-item script.",
            ...commonEvidence
          ]
        }
      ],
      references: officialReferenceLinks(row)
    };
  }

  function sourceBackedGuidance(row) {
    const harvested = harvestedSapGuidance(row);
    if (harvested) return harvested;

    const title = getTitle(row).toLowerCase();
    const withSource = (guidance) => ({
      ...guidance,
      references: dedupeReferences([
        ...whatsNewSourceReferences(row),
        ...(guidance.references || [])
      ])
    });

    if (title.includes("negative posting check for posting apis")) {
      return withSource({
        label: "SAP-documented API test guidance",
        sections: [
          {
            title: "What it means",
            text: "A negative posting is an accounting posting that reduces the original debit/credit totals by posting negative values or a negative-posting indicator, instead of creating a normal reversal with opposite debit/credit lines. This release item adds a check for posting API payloads so negative postings can be blocked when they are not configured."
          },
          {
            title: "Business relevance",
            items: [
              "Relevant only if the customer has integrations, middleware, BTP services, or external systems posting journal entries through the affected SOAP APIs.",
              "Affected APIs from the RASD item: Journal Entry - Post (Synchronous) JournalEntryCreateRequestConfirmation_In, Journal Entry - Post (Asynchronous) JournalEntryBulkCreationRequest_In, and Journal Entry by Ledger - Post (Asynchronous) JournalEntryBulkLedgerCreationRequest_In.",
              "For functional consultants, this is not a broad J58 process retest. It is an integration/accounting control check: confirm whether negative postings are used or should be blocked for the company code and process.",
              "If no inbound journal-entry API payload uses negative postings, mark this as not relevant and keep the SAP KBA/What's New link as evidence."
            ]
          },
          {
            title: "How to review / implement",
            items: [
              "Use SAP KBA 3641505 and SAP Note 3157729 to confirm the exact configuration and payload fields for the tenant release.",
              "Identify each interface that calls the three affected journal-entry posting APIs and ask the integration owner whether it can send negative posting indicators or negative values.",
              "Confirm whether negative postings are configured for the company code / posting scenario. If they are not configured, the new check should reject negative-posting payloads when enabled.",
              "Update the interface mapping only if the current payload is wrong: for example, remove unintended negative posting indicators or align the payload with the SAP example before production upgrade."
            ]
          },
          {
            title: "Configuration / SSCUI",
            items: [
              "Check configuration activity Define Reasons for Reversal, ID 101039, when the test involves reversing a journal entry from Manage Journal Entries.",
              "For the reversal reason used by the business, check the Neg. Pstg / negative posting flag. SAP Note 3157729 references reversal reason field T041C-XNEGP for this setting.",
              "Important nuance from the SAP note: if the company code does not generally use negative postings, the reversal-reason negative posting indicator is ignored. Do not mark the API test relevant only because the flag exists."
            ]
          },
          {
            title: "Example",
            items: [
              "Normal posting example: post an expense journal with Dr Expense 100 and Cr Clearing 100. This increases the debit and credit totals in the usual way.",
              "Negative posting example: send the matching negative posting for the same accounting impact, such as Dr Expense -100 and Cr Clearing -100, or the SAP-supported negative posting indicator in the SOAP payload. The expected result is that the original totals are reduced rather than a normal reversal document flow being used.",
              "Use only a controlled test company code, period, and G/L accounts. The exact XML element names and payload structure should come from the SAP KBA/Note, not from a handwritten guess."
            ]
          },
          {
            title: "How to test",
            items: [
              "Test A - allowed/configured case: send one minimal journal-entry API payload with the SAP-supported negative posting input. Expected result: API success, accounting document created, document visible in Manage Journal Entries, and the balance impact matches the negative posting expectation.",
              "Test B - blocked case: send the same negative-posting payload where negative postings are not configured or the new check is enabled to block it. Expected result: API error/rejection and no accounting document created.",
              "Test C - normal posting regression: send one standard positive posting through the same API. Expected result: normal posting still succeeds, proving the change did not break ordinary API posting.",
              "Capture the API/message ID, request payload reference, response, accounting document number or error, Manage Journal Entries screenshot, and balance/result evidence."
            ]
          }
        ],
        references: officialReferenceLinks(row)
      });
    }

    if (title.includes("cds views released for developer extensibility")) {
      return withSource({
        label: "Source-backed implementation guidance",
        sections: [
          {
            title: "What it means",
            text: "This is not a normal finance regression item. SAP has released more finance CDS views for developer extensibility, which means technical teams can build upgrade-stable custom reports, RAP objects, embedded apps, BTP consumers, or analytical models using supported accounting data instead of unsupported tables or unreleased views."
          },
          {
            title: "Business relevance",
            items: [
              "Relevant if the customer has custom reports, integrations, SAC models, BTP apps, or ABAP Cloud extensions that need journal entry items, G/L balances, ledger/company-code settings, GR/IR history, or fiscal calendar logic.",
              "For functional consultants, the job is to identify the reporting or extension use case and reconcile the output against standard finance apps. It is not a business-user test unless an extension is adopted or already in use.",
              "For developers, this is a clean-core enablement item: use released APIs / released objects only, then validate syntax, authorization, and upgrade stability."
            ]
          },
          {
            title: "How to implement",
            items: [
              "Confirm the customer has a 3-system landscape and developer extensibility is enabled for the S/4HANA Cloud ABAP environment.",
              "Open SAP Business Accelerator Hub, View Browser, or ADT and validate the released CDS view named in the RASD description, for example I_JOURNALENTRYITEMCUBE, I_GLACCOUNTLINEITEMCUBE, I_GLAccountYearToDateBalanceC, or I_GRIRPROCESSHISTORY.",
              "Prototype the extension in development using the released view, then add customer authorization and data-restriction checks before transport.",
              "For external consumption, decide whether the need is a developer extension, custom CDS/API exposure, or side-by-side BTP consumer."
            ]
          },
          {
            title: "How to test",
            items: [
              "Do not ask finance users to replay J58 just because this item exists. First list existing or planned custom consumers of journal, G/L, ledger, GR/IR, or fiscal-calendar data.",
              "For each adopted CDS view, run ADT syntax/activation checks and compare totals or line counts against a standard SAP app such as Manage Journal Entries, Trial Balance, G/L line item reporting, or the relevant GR/IR report.",
              "Capture one evidence pack: CDS object used, consuming extension/report, sample company code/period, reconciliation result, and owner sign-off."
            ]
          }
        ],
        references: [
          { label: "SAP Help - Developer Extensibility", url: "https://help.sap.com/docs/SAP_S4HANA_CLOUD/6aa39f1ac05441e5a23f484f31e477e7/e1059ff581854a699f15734049f14293.html" },
          { label: "SAP Learning - Developer In-App Extensibility", url: "https://learning.sap.com/courses/implementing-sap-s-4hana-cloud-public-edition/using-developer-in-app-extensibility-in-sap-s-4hana-cloud-public-edition" },
          { label: "SAP Learning - Released APIs", url: "https://learning.sap.com/courses/practicing-clean-core-extensibility-for-sap-s-4hana-cloud/exploring-released-apis_d80ce197-097e-4e7b-8696-b960738089c7" },
          { label: "SAP Learning video - Developer Extensibility", url: "https://learning.sap.com/videos/exploring-developer-extensibility-in-sap-s-4hana-cloud-public-edition-3-system-landscape" },
          { label: "SAP Learning video - Custom CDS Views", url: "https://learning.sap.com/videos/creating-custom-cds-views-as-external-apis-sap-s-4hana-cloud-extensibility" },
          { label: "SAP Community - CDS Views on Business Accelerator Hub", url: "https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/sap-s-4hana-cloud-extensibility-for-cds-views-on-the-sap-business/ba-p/13551528" }
        ]
      });
    }

    if (title.includes("key user extensibility for simulating journal entries")) {
      return withSource({
        label: "Source-backed implementation guidance",
        sections: [
          {
            title: "What it means",
            text: "This means the Simulate Journal Entries dialog can be extended with key-user extensibility. For business users, the practical value is seeing or entering customer-specific accounting fields before posting, so simulation reflects the fields that matter to the organisation."
          },
          {
            title: "Business relevance",
            items: [
              "Relevant if accountants use custom journal-entry fields, extension fields, or validations and need those fields visible during simulation before the journal is posted.",
              "Not a broad J58 regression test by itself. If the customer has no custom journal-entry fields or does not use the simulation dialog, record it as not relevant.",
              "Functional consultants should confirm the exact app/dialog users rely on, the custom fields involved, and whether those fields influence approvals, reporting, substitution, validation, or downstream integration."
            ]
          },
          {
            title: "How to implement",
            items: [
              "In the test tenant, identify the custom field and its business context in the Custom Fields app.",
              "Publish or verify the field usage for the relevant journal-entry UI. If the field is supported but hidden, use UI adaptation / key-user extensibility to expose it in the simulation dialog.",
              "If custom logic exists, use tracing or a controlled test posting to prove the field is populated and handled correctly.",
              "Transport the published field/UI adaptation through the normal public-cloud extensibility transport path after validation."
            ]
          },
          {
            title: "How to test",
            items: [
              "Open the journal-entry app used by the accounting team and start the Simulate Journal Entries dialog.",
              "Confirm the custom field is visible where expected, can be populated or displayed correctly, and behaves the same before and after simulation.",
              "Run one journal-entry simulation with realistic company code, ledger, posting date, G/L account, amount, and the custom field value. If posting is part of the process, post one controlled document and check the value appears in the final journal-entry display/report.",
              "Capture screenshots of the dialog before/after simulation and record whether this should enter the release test pack or be treated as an adoption backlog item."
            ]
          }
        ],
        references: [
          { label: "SAP Help - Journal Entry App Extensibility", url: "https://help.sap.com/docs/SAP_S4HANA_CLOUD/0fa84c9d9c634132b7c4abb9ffdd8f06/723eadddb3da43d19c1e17cfe7ef4a76.html" },
          { label: "SAP Learning - Key-User In-App Extensibility", url: "https://learning.sap.com/courses/implementing-sap-s-4hana-cloud-public-edition/introducing-the-key-user-in-app-extensibility-tools" },
          { label: "SAP Learning - Extensibility Tools Overview", url: "https://learning.sap.com/courses/implementing-sap-s-4hana-cloud-public-edition/describing-the-extensibility-tools-for-customizations-in-sap-s-4hana-cloud-public-edition" },
          { label: "SAP Developers - Custom Logic and Tracing", url: "https://developers.sap.com/tutorials/abap-s4hcloud-procurement-po-customlogic-tracing..html" }
        ]
      });
    }

    return null;
  }

  function normalizeSourceUrl(value) {
    return String(value || "").trim().replace(/#.*$/, "");
  }

  function helpEnrichmentFor(row) {
    const source = normalizeSourceUrl(whatsNewLink(row));
    const title = getTitle(row);
    const byUrl = originalHelpEnrichment.byUrl || {};
    const byTitle = originalHelpEnrichment.byTitle || {};
    return byUrl[source] || originalHelpEnrichment[source] || byTitle[title] || null;
  }

  function extractSscuiDetails(text) {
    const details = [];
    const source = String(text || "");
    const activityMatches = source.match(/(?:configuration activity|SSCUI|activity)\s+[^.]{0,120}?\bID[:\s]+[0-9]{5,6}/gi) || [];
    activityMatches.forEach((item) => details.push(item.trim()));
    const idMatches = source.match(/\bID[:\s]+[0-9]{5,6}\b/g) || [];
    idMatches.forEach((item) => {
      if (!details.some((existing) => existing.includes(item))) details.push(item);
    });
    return uniqueList(details).slice(0, 4);
  }

  function harvestedSapGuidance(row) {
    const article = helpEnrichmentFor(row);
    if (!article || (!article.summary && !article.text && !article.sections?.length)) return null;
    const source = normalizeSourceUrl(whatsNewLink(row) || article.url);
    const articleText = [article.summary, article.text, ...(article.sections || []).flatMap((section) => [section.heading, section.text])].filter(Boolean).join(" ");
    const sscui = extractSscuiDetails(articleText);
    const category = getCategory(row) || "Change";
    const recommendation = testRecommendation(row);
    const sourceSections = [];
    const articleSectionHeadings = (article.sections || []).map((section) => String(section.heading || section.title || "").toLowerCase());
    const articleAlreadyExplainsChange = articleSectionHeadings.some((heading) => heading.includes("what sap says changed") || heading === "what changed");

    if (article.summary && !articleAlreadyExplainsChange) {
      sourceSections.push({
        title: "What this functionality is",
        text: article.summary
      });
    } else if (article.text) {
      sourceSections.push({
        title: "What this functionality is",
        text: shorten(article.text, 900)
      });
    }

    if (article.sections?.length) {
      article.sections.slice(0, 8).forEach((section) => {
        sourceSections.push({
          title: section.heading || "SAP Help detail",
          text: shorten(section.text || "", 900)
        });
      });
    }

    const sourceHeadings = sourceSections.map((section) => String(section.title || "").toLowerCase());
    const hasImpactGuidance = sourceHeadings.some((heading) => heading.includes("impact") || heading.includes("relevance"));
    const hasTestGuidance = sourceHeadings.some((heading) => heading.includes("test"));

    if (!hasImpactGuidance) {
      sourceSections.push({
        title: "Customer impact check",
        items: [
          `RASD category: ${category}. Scope item(s): ${getScopeItems(row).join(", ") || "not supplied"}.`,
          recommendation.reason,
          "Check whether this exact app, field, configuration, interface, or process step is used by CFA before adding a test case.",
          "If the change is only an optional new capability, mark it as future adoption unless a process owner wants to use it now."
        ]
      });
    }

    if (sscui.length) {
      sourceSections.push({
        title: "Configuration / SSCUI",
        items: sscui.map((item) => `Check ${item}.`)
      });
    }

    if (!hasTestGuidance) {
      sourceSections.push({
        title: "How to test",
        items: [
          recommendation.action,
          "Use the SAP Help detail above to identify the exact field, app action, config switch, API payload, or output that changed.",
          "Run the smallest realistic test that touches only that changed behaviour, then capture expected result, screenshot/log/message ID, owner, and relevance decision."
        ]
      });
    }

    return {
      label: "SAP Help source detail",
      sections: sourceSections,
      screenshots: article.screenshots || [],
      media: article.media || [],
      references: dedupeReferences([
        ...whatsNewSourceReferences(row, `SAP What's New - ${getTitle(row)}`),
        ...((article.references || []).map((reference) => typeof reference === "string" ? { label: "SAP reference", url: reference } : reference))
      ])
    };
  }

  function sourceBackedGuidancePanel(row, options = {}) {
    const guidance = sourceBackedGuidance(row);
    if (!guidance) return "";
    const open = options.open ? " open" : "";
    const compact = options.compact ? " action-compact" : "";
    const buttonLabel = options.buttonLabel || "Review guidance";
    const references = dedupeReferences(guidance.references || []);
    return `
      <details class="source-guidance${compact}" aria-label="${escapeHtml(guidance.label)}"${open}>
        <summary class="source-guidance-summary">
          <span>${escapeHtml(options.compact ? buttonLabel : guidance.label)}</span>
          ${options.compact ? "" : "<small>Review guidance and SAP references</small>"}
        </summary>
        <div class="source-guidance-grid">
          ${guidance.sections.map((section) => `
            <div class="source-guidance-section">
              <span>${escapeHtml(section.title)}</span>
              ${section.text ? `<p>${escapeHtml(section.text)}</p>` : ""}
              ${section.items ? `<ul>${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
            </div>
          `).join("")}
        </div>
        ${guidance.screenshots?.length ? `
          <div class="source-screenshot-grid" aria-label="Expected before and after screenshots">
            ${guidance.screenshots.map((shot) => `
              <div class="source-screenshot-card">
                <span>${escapeHtml(shot.label || "Screenshot")}</span>
                <strong>${escapeHtml(shot.title || "")}</strong>
                <p>${escapeHtml(shot.text || "")}</p>
                ${shot.evidence ? `<small>${escapeHtml(shot.evidence)}</small>` : ""}
              </div>
            `).join("")}
          </div>
        ` : ""}
        ${guidance.media?.length ? `
          <div class="source-media-grid" aria-label="SAP source media">
            ${guidance.media.map((item) => `
              <a class="source-media-card" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">
                <span>${escapeHtml(item.type === "video" ? "SAP video" : "SAP source media")}</span>
                <strong>${escapeHtml(item.label || "Open source media")}</strong>
                ${item.type === "image" ? `<img src="${escapeHtml(item.url)}" alt="${escapeHtml(item.label || "SAP source media")}" loading="lazy">` : ""}
              </a>
            `).join("")}
          </div>
        ` : ""}
        ${references.length ? `
          <div class="source-links">
            ${references.map((reference) => `<a href="${escapeHtml(reference.url)}" target="_blank" rel="noreferrer">${escapeHtml(reference.label)}</a>`).join("")}
          </div>
        ` : ""}
      </details>
    `;
  }

  function guidanceButtonLabel(row) {
    const category = getCategory(row);
    if (category === "App") return "App review guidance";
    if (/Extensibility|API|CDS/i.test(category)) return "Extensibility guidance";
    if (/Authorization|IAM|Role|Catalog/i.test(category)) return "Role review guidance";
    if (/Configuration/i.test(category)) return "Config review guidance";
    return "Review guidance";
  }

  function detailTitleRow(row, title) {
    return `
      <div class="detail-title-row">
        <h3>${escapeHtml(title)}</h3>
        ${reviewSelect(row, true)}
      </div>
    `;
  }

  function detailReviewActions(row) {
    return `
      <div class="review-action-row detail-review-actions">
        ${sourceBackedGuidancePanel(row, { compact: true, buttonLabel: guidanceButtonLabel(row) })}
        ${reviewNoteToggle(row)}
      </div>
    `;
  }

  function scopeReviewKey(scopeId) {
    return `scope:${scopeId}`;
  }

  function isScopeImpactRow(row) {
    return Boolean(get(row, "Scope Item ID") && get(row, "Scope Item Title"));
  }

  function reviewTitle(row) {
    return getTitle(row) || get(row, "Scope Item Title") || row?.title || row?.scope || "item";
  }

  function reviewKey(row) {
    if (typeof row === "string") return row;
    if (row?.reviewKey) return row.reviewKey;
    if (isScopeImpactRow(row)) return scopeReviewKey(get(row, "Scope Item ID"));
    return rowKey(row);
  }

  function encodedReviewKey(value) {
    const text = Array.isArray(value) ? value.filter(Boolean).join("|") : String(value || "");
    if (!text) return "";
    return btoa(unescape(encodeURIComponent(text))).slice(0, 32);
  }

  function reviewKeyAliases(rowOrKey) {
    if (!rowOrKey || typeof rowOrKey === "string") return [rowOrKey].filter(Boolean);
    const title = getTitle(rowOrKey);
    const description = get(rowOrKey, "Description(Description)", "Description", "Additional Information", "Technical Name", "Deprecated Object");
    const scopes = getScopeItems(rowOrKey).join(",");
    const aliases = [
      reviewKey(rowOrKey),
      rowKey(rowOrKey),
      rowOrKey.reviewKey,
      isScopeImpactRow(rowOrKey) ? scopeReviewKey(get(rowOrKey, "Scope Item ID")) : ""
    ];
    if (title) {
      aliases.push(encodedReviewKey(title));
      aliases.push(encodedReviewKey([title, description]));
      aliases.push(encodedReviewKey([title, description, scopes]));
    }
    if (rowOrKey.groupedRows?.length) {
      rowOrKey.groupedRows.forEach((item) => {
        aliases.push(reviewKey(item));
        aliases.push(rowKey(item));
      });
    }
    return uniqueList(aliases);
  }

  function defaultReviewEntry() {
    return { status: "review-needed", note: "" };
  }

  function getReviewEntry(rowOrKey) {
    const aliases = typeof rowOrKey === "string" ? [rowOrKey] : reviewKeyAliases(rowOrKey);
    for (const key of aliases) {
      const stored = state.reviewState[key];
      if (stored) return { ...defaultReviewEntry(), ...stored };
    }
    return defaultReviewEntry();
  }

  function scopeIdsForReview(rowOrItem) {
    if (!rowOrItem || typeof rowOrItem === "string") return [];
    if (Array.isArray(rowOrItem.scopeIds)) return rowOrItem.scopeIds.filter(Boolean);
    const scopeItems = getScopeItems(rowOrItem);
    if (scopeItems.length) return scopeItems;
    if (rowOrItem.scope) return splitIds(rowOrItem.scope);
    const scopeId = get(rowOrItem, "Scope Item ID");
    return scopeId ? [scopeId] : [];
  }

  function inheritedScopeReview(rowOrItem) {
    const scopeIds = scopeIdsForReview(rowOrItem);
    if (!scopeIds.length) return null;
    const scopeEntries = scopeIds.map((scopeId) => ({ scopeId, entry: getReviewEntry(scopeReviewKey(scopeId)) }));
    if (scopeEntries.every(({ entry }) => entry.status === "not-relevant")) {
      return {
        status: "not-relevant",
        note: `Inherited from scope item ${scopeIds.join(", ")} marked not relevant.`,
        inherited: true,
        inheritedFrom: scopeIds
      };
    }
    return null;
  }

  function effectiveReviewEntry(rowOrKey) {
    const direct = getReviewEntry(rowOrKey);
    if (typeof rowOrKey === "string" || direct.status !== "review-needed") return { ...direct, inherited: false };
    const inherited = inheritedScopeReview(rowOrKey);
    if (inherited) return { ...direct, ...inherited, note: direct.note || inherited.note };
    return { ...direct, inherited: false };
  }

  function sortByReview(rows, compareFn = null) {
    return [...rows]
      .map((row, index) => ({ row, index }))
      .sort((left, right) => {
        const leftNotRelevant = effectiveReviewEntry(left.row).status === "not-relevant";
        const rightNotRelevant = effectiveReviewEntry(right.row).status === "not-relevant";
        if (leftNotRelevant !== rightNotRelevant) return leftNotRelevant ? 1 : -1;
        if (compareFn) {
          const result = compareFn(left.row, right.row);
          if (result) return result;
        }
        return left.index - right.index;
      })
      .map(({ row }) => row);
  }

  function reviewLabel(status) {
    if (status === "relevant") return "Relevant";
    if (status === "not-relevant") return "Not relevant";
    return "Review needed";
  }

  function reviewTone(status) {
    if (status === "relevant") return "green";
    if (status === "not-relevant") return "neutral";
    return "teal";
  }

  function reviewRowClass(row) {
    const status = effectiveReviewEntry(row).status;
    if (status === "not-relevant") return "review-not-relevant";
    if (status === "relevant") return "review-relevant";
    return "";
  }

  function reviewSelect(row, compact = false) {
    const key = reviewKey(row);
    const status = effectiveReviewEntry(row).status;
    const options = [
      ["review-needed", "Review needed"],
      ["relevant", "Relevant"],
      ["not-relevant", "Not relevant"]
    ];
    return `
      <label class="${compact ? "review-control compact" : "review-control"}">
        ${compact ? "" : "<span>Customer relevance</span>"}
        <select data-review-status="${escapeHtml(key)}" aria-label="Customer relevance for ${escapeHtml(reviewTitle(row))}">
          ${options.map(([value, label]) => `<option value="${value}" ${status === value ? "selected" : ""}>${label}</option>`).join("")}
        </select>
      </label>
    `;
  }

  function reviewNoteToggle(rowOrKey, placeholder = "Reason, owner, evidence, or why this is not relevant") {
    const key = typeof rowOrKey === "string" ? rowOrKey : reviewKey(rowOrKey);
    const direct = getReviewEntry(rowOrKey);
    const open = direct.note ? " open" : "";
    return `
      <details class="review-note-toggle"${open}>
        <summary>${direct.note ? "Review note added" : "Add review note"}</summary>
        <textarea data-review-note="${escapeHtml(key)}" rows="3" placeholder="${escapeHtml(placeholder)}">${escapeHtml(direct.note || "")}</textarea>
      </details>
    `;
  }

  function reviewSummary(rows) {
    const counts = rows.reduce((acc, row) => {
      const status = effectiveReviewEntry(row).status || "review-needed";
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, { "review-needed": 0, relevant: 0, "not-relevant": 0 });
    return `
      <div class="review-summary" aria-label="Customer relevance summary">
        <span>${counts["review-needed"]} review needed</span>
        <span>${counts.relevant} relevant</span>
        <span>${counts["not-relevant"]} not relevant</span>
      </div>
    `;
  }

  function reviewProgress(rows) {
    const counts = rows.reduce((acc, row) => {
      const status = effectiveReviewEntry(row).status || "review-needed";
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, { "review-needed": 0, relevant: 0, "not-relevant": 0 });
    const total = rows.length;
    const reviewed = (counts.relevant || 0) + (counts["not-relevant"] || 0);
    return {
      total,
      reviewed,
      remaining: Math.max(total - reviewed, 0),
      relevant: counts.relevant || 0,
      notRelevant: counts["not-relevant"] || 0
    };
  }

  function progressText(progress) {
    if (!progress || !progress.total) return "";
    return `${progress.reviewed} reviewed, ${progress.remaining} yet`;
  }

  function completionSummaryText(summary) {
    if (!summary || !summary.total) return "";
    const parts = [
      `${summary.completed} completed`,
      `${summary.inProgress} in progress`,
      `${summary.notStarted} not started`
    ];
    if (summary.noChange) parts.push(`${summary.noChange} no direct changes`);
    return parts.join(", ");
  }

  function completionSummary(page, rows, data = state.data) {
    if (page === "scope") {
      return scopeCompletionSummary(rows, data);
    }
    if (page === "aiupdates") {
      return { total: 0, completed: 0, inProgress: 0, notStarted: 0 };
    }
    if (page === "testplan") {
      return rows.reduce((acc, item) => {
        const saved = state.testState[item.id] || {};
        if (saved.status === "Done") acc.completed += 1;
        else if (saved.status === "In progress" || saved.status === "Blocked") acc.inProgress += 1;
        else acc.notStarted += 1;
        acc.total += 1;
        return acc;
      }, { total: 0, completed: 0, inProgress: 0, notStarted: 0 });
    }
    const progress = reviewProgress(rows);
    return {
      total: progress.total,
      completed: progress.reviewed,
      inProgress: 0,
      notStarted: progress.remaining
    };
  }

  function scopeCompletionSummary(rows, data = state.data) {
    return rows.reduce((acc, row) => {
      const progress = reviewProgress(scopeSpecificChanges(get(row, "Scope Item ID"), data));
      if (!progress.total) {
        acc.noChange += 1;
        acc.completed += 1;
      } else if (progress.remaining === 0) {
        acc.completed += 1;
      } else if (progress.reviewed > 0) {
        acc.inProgress += 1;
      } else {
        acc.notStarted += 1;
      }
      acc.total += 1;
      return acc;
    }, { total: 0, completed: 0, inProgress: 0, notStarted: 0, noChange: 0 });
  }

  function completionSummaryMarkup(summary, compact = false) {
    if (!summary || !summary.total) return "";
    if (compact) {
      return `
        <span class="home-status-summary compact" aria-label="${escapeHtml(completionSummaryText(summary))}">
          <span class="complete"><strong>${escapeHtml(summary.completed)}</strong> completed</span>
          <span class="progress"><strong>${escapeHtml(summary.inProgress)}</strong> in progress</span>
          <span class="todo"><strong>${escapeHtml(summary.notStarted)}</strong> not started</span>
          ${summary.noChange ? `<span class="todo"><strong>${escapeHtml(summary.noChange)}</strong> no direct changes</span>` : ""}
        </span>
      `;
    }
    return `
      <span class="home-status-summary" aria-label="Completion summary">
        <span class="complete"><strong>${escapeHtml(summary.completed)}</strong> completed</span>
        <span class="progress"><strong>${escapeHtml(summary.inProgress)}</strong> in progress</span>
        <span class="todo"><strong>${escapeHtml(summary.notStarted)}</strong> not started</span>
        ${summary.noChange ? `<span class="todo"><strong>${escapeHtml(summary.noChange)}</strong> no direct changes</span>` : ""}
      </span>
    `;
  }

  function scopeProgressDetail(progress) {
    if (!progress.total) return "No linked changes";
    return `${progress.reviewed} reviewed / ${progress.remaining} yet to review`;
  }

  function scopeProgressStatus(progress) {
    if (!progress.total) return { label: "No changes", tone: "neutral" };
    if (progress.remaining === 0) return { label: "Complete", tone: "green" };
    if (progress.reviewed > 0) return { label: "In progress", tone: "warning" };
    return { label: "Not started", tone: "neutral" };
  }

  function homeCardBreakdown(page, rows) {
    if (page !== "whatsnew") return "";
    const timing = splitByReleaseTiming(rows);
    const parts = [
      ["Release readiness", completionSummary(page, timing.release), "release"],
      ["Good ideas for later", completionSummary(page, timing.future), "future"]
    ];
    if (timing.parked.length) parts.push(["Not relevant", completionSummary(page, timing.parked), "parked"]);
    return `
      <span class="home-card-breakdown" aria-label="Review changes split">
        ${parts.map(([label, summary, tone]) => `
          <span class="home-split ${tone}">
            <span>${escapeHtml(label)}</span>
            <strong>${escapeHtml(summary.total)}</strong>
            <small>${escapeHtml(completionSummaryText(summary))}</small>
          </span>
        `).join("")}
      </span>
    `;
  }

  function workstreamRows(data, page) {
    const rowSets = {
      scope: data.usedScopeImpact,
      whatsnew: data.usedPersonalizedWhatsNew,
      apps: [...data.applications, ...data.deletedDeprecatedBusinessCatalogs],
      extensibility: [...data.derived.extensibilityUsed, ...data.whereUsedCustomCds],
      deprecated: [...data.deprecatedObjects, ...data.derived.deprecatedUsed],
      newfeatures: data.derived.newUsed,
      publicsector: data.derived.publicSectorHighlights,
      aiupdates: aiUpdateRows(),
      coverage: targetedTestItems("", { includeFuture: true }),
      testplan: data.derived.tests
    };
    if (page === "scope") return scopeRowsWithDirectChanges(data.usedScopeImpact, data);
    return rowSets[page] || [];
  }

  function releaseTiming(rowOrItem, scopeRow = null) {
    const level = testRecommendation(rowOrItem, scopeRow).level;
    if (level === "skip") return "parked";
    if (level === "optional") return "future";
    return "release";
  }

  function splitByReleaseTiming(rows, scopeRow = null) {
    return rows.reduce((acc, row) => {
      acc[releaseTiming(row, scopeRow)].push(row);
      return acc;
    }, { release: [], future: [], parked: [] });
  }

  function reviewDecisionPanel(row) {
    const key = reviewKey(row);
    const entry = effectiveReviewEntry(row);
    return `
      <div class="detail-section">
        <p class="system-label">Customer relevance</p>
        <div class="review-detail">
          ${reviewSelect(row)}
          ${badge(reviewLabel(entry.status), reviewTone(entry.status))}
        </div>
        ${entry.inherited ? `<p class="review-inherited">${escapeHtml(entry.note)}</p>` : ""}
        ${reviewNoteToggle(key, "Reason or evidence, e.g. not used by this customer")}
      </div>
    `;
  }

  function publicCloudLoaded() {
    return Boolean(state.data.publicCloud?.loaded);
  }

  function pageNeedsPublicCloud(page) {
    return ["apps", "extensibility", "extReview", "deprecated"].includes(page);
  }

  function ensurePublicCloudData() {
    if (publicCloudLoaded()) return Promise.resolve(true);
    if (publicCloudLoadFailed) return Promise.resolve(false);
    if (!publicCloudLoadPromise) {
      publicCloudLoadPromise = loadScript("public-cloud-data.js?v=20260703-pruned-targets")
        .then(() => {
          state.data.publicCloud = normalizePublicCloudData(window.RASD_PUBLIC_CLOUD_DATA || {});
          cloudEvidenceCache = new WeakMap();
          migrateReviewState();
          return publicCloudLoaded();
        })
        .catch((error) => {
          console.error(error);
          publicCloudLoadFailed = true;
          return false;
        });
    }
    return publicCloudLoadPromise;
  }

  function render() {
    if (state.page === "testplan") state.page = "scope";
    const page = pages[state.page];
    document.body.dataset.page = state.page;
    viewTitle.textContent = page.title;
    viewKicker.textContent = page.kicker;
    document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("active", button.dataset.page === state.page || (state.page === "scopeReview" && button.dataset.page === "scope") || (state.page === "extReview" && button.dataset.page === "extensibility")));
    updateSummary();
    renderWorkstreams();
    viewActions.innerHTML = pageActions();

    if (pageNeedsPublicCloud(state.page) && !publicCloudLoaded() && !publicCloudLoadFailed) {
      pageContent.innerHTML = `<div class="empty-state">Loading customer role, catalog, integration and BTP evidence...</div>`;
      ensurePublicCloudData().then(() => {
        if (pageNeedsPublicCloud(state.page)) render();
      });
      return;
    }

    if (state.page === "overview") renderOverview();
    if (state.page === "scope") renderScopeImpact();
    if (state.page === "scopeReview") renderScopeReview();
    if (state.page === "whatsnew") renderWhatsNew();
    if (state.page === "apps") renderAppsRoles();
    if (state.page === "extensibility") renderExtensibility();
    if (state.page === "extReview") renderExtensibilityReview();
    if (state.page === "deprecated") renderDeprecated();
    if (state.page === "newfeatures") renderNewFeatures();
    if (state.page === "publicsector") renderPublicSector();
    if (state.page === "aiupdates") renderAiUpdates();
    if (state.page === "coverage") renderCoverageBuilder();
    if (state.page === "testplan") renderTestPlan();
  }

  function captureScrollState(options = {}) {
    const includeDetail = options.includeDetail !== false;
    return {
      table: document.querySelector(".table-panel")?.scrollTop || 0,
      detail: includeDetail ? document.querySelector(".detail-card")?.scrollTop || 0 : 0,
      content: pageContent?.scrollTop || 0,
      windowY: window.scrollY || document.documentElement.scrollTop || 0
    };
  }

  function restoreScrollState(scrollState) {
    if (!scrollState) return;
    requestAnimationFrame(() => {
      const tablePanel = document.querySelector(".table-panel");
      const detailCard = document.querySelector(".detail-card");
      if (tablePanel) tablePanel.scrollTop = scrollState.table;
      if (detailCard) detailCard.scrollTop = scrollState.detail;
      if (pageContent) pageContent.scrollTop = scrollState.content;
      window.scrollTo(0, scrollState.windowY);
    });
  }

  function renderWithScrollRestore(options = {}) {
    const scrollState = captureScrollState(options);
    render();
    restoreScrollState(scrollState);
  }

  function resetPageScroll() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (pageContent) pageContent.scrollTop = 0;
    window.scrollTo(0, 0);
  }

  function updateSummary() {
    const data = state.data;
    document.querySelector("#criticalCount").textContent = data.derived.criticalUsed.length;
    document.querySelector("#actionCount").textContent = data.derived.actionUsed.length;
    document.querySelector("#usedScopeCount").textContent = data.usedScopeImpact.length;
    document.querySelector("#activatedOnlyCount").textContent = data.derived.activatedOnly.length;
    document.querySelector("#customerName").textContent = data.meta.customer || "Customer";
    document.querySelector("#loadedSource").textContent = data.meta.generatedFrom || "RASD ZIP";
    document.querySelector("#sourceLabel").textContent = `RASD ${data.meta.release || "release"} export`;
  }

  function pageActions() {
    const actions = {
      overview: [],
      scope: [["whatsnew", "Open linked changes"]],
      scopeReview: [["scope", "Back to scope items"]],
      whatsnew: [["apps", "Apps & catalogs"], ["newfeatures", "New features"]],
      apps: [["deprecated", "Deprecated objects"]],
      extensibility: [["whatsnew", "What changed"]],
      extReview: [["extensibility", "Back to extensibility"]],
      deprecated: [["apps", "Apps & catalogs"]],
      newfeatures: [["scope", "Scope context"]],
      publicsector: [["newfeatures", "New features"]],
      aiupdates: [["whatsnew", "Open all 2608 changes"]],
      coverage: [["whatsnew", "Review source changes"]],
      testplan: [["overview", "Back to overview"]]
    };
    const search = state.page === "overview" ? "" : `
      <label class="page-search" aria-label="Search this page">
        <span>Search</span>
        <input type="search" data-page-search value="${escapeHtml(state.search)}" placeholder="Search this page" autocomplete="off" />
      </label>
    `;
    const buttons = (actions[state.page] || [])
      .map(([page, label]) => page === "suite"
        ? `<a class="secondary-action" href="suite/" target="_blank" rel="noopener">${escapeHtml(label)}</a>`
        : `<button class="secondary-action" type="button" data-jump="${page}">${escapeHtml(label)}</button>`)
      .join("");
    return `${search}${buttons}`;
  }

  function renderWorkstreams() {
    const streams = workstreamDefinitions(state.data, true);
    document.querySelector("#workstreamList").innerHTML = streams.map(([page, title, sub, count, icon]) => `
      <button class="workstream ${page === state.page ? "active" : ""}" type="button" data-jump="${page}">
        ${pageIcon(page, icon)}
        <span><strong>${escapeHtml(title)}</strong><small>${escapeHtml(sub)}</small></span>
        ${count !== "" ? `<span class="count">${escapeHtml(count)}</span>` : ""}
      </button>
    `).join("");
  }

  function workstreamDefinitions(data, includeHome = false) {
    const item = (page, title, sub, icon, tone) => {
      const rows = workstreamRows(data, page);
      return [page, title, sub, rows.length, icon, tone, reviewProgress(rows), completionSummary(page, rows, data), homeCardBreakdown(page, rows)];
    };
    const streams = [
      item("scope", "Review scope items", "Used scope items with direct change detail", "1", "blue"),
      item("whatsnew", "Review changes", "Action list and next steps", "2", "warning"),
      item("apps", "Review apps", "Roles, catalogs, spaces and pages", "3", "danger"),
      item("extensibility", "Review extensibility", "APIs, CDS and custom usage", "4", "teal"),
      item("deprecated", "Review deprecated items", "Old objects and successors", "5", "warning"),
      item("newfeatures", "Review new features", "Optional items worth exploring", "6", "green"),
      item("publicsector", "Public sector highlights", `${customerProfile.country} and PSM release items`, "7", "teal"),
      item("aiupdates", "AI updates", "2608 What's New only", "10", "green"),
      item("coverage", "Build automation coverage", "Automate, manual, owner, evidence", "8", "blue")
    ];
    return includeHome ? [["overview", "Home", "Choose a review area", "", "0"], ...streams] : streams;
  }

  function renderOverview() {
    const data = state.data;
    const streams = workstreamDefinitions(data, false);
    pageContent.innerHTML = `
      <div class="home-card-grid">
        ${streams.map((stream) => {
          const [page, title, sub, count, icon, tone, progress, completion] = stream;
          return page === "whatsnew"
            ? reviewChangesCard(stream)
            : homeCard(page, title, sub, count, icon, tone, progress, completion);
        }).join("")}
      </div>
    `;
  }

  function homeCard(page, title, sub, count, icon, tone, progress, completion) {
    return `
      <button class="home-card ${escapeHtml(tone)}" type="button" data-jump="${page}">
        ${pageIcon(page, icon)}
        <span class="home-card-copy">
          <strong>${escapeHtml(title)}</strong>
          <small>${escapeHtml(sub)}</small>
        </span>
        <span class="home-card-count">
          <span class="count">${escapeHtml(count)}</span>
          ${completionSummaryMarkup(completion, true)}
        </span>
      </button>
    `;
  }

  function reviewChangesCard(stream) {
    const [page, title, sub, count, icon, tone, progress, completion, breakdown] = stream;
    return `
      <button class="review-feature-card ${escapeHtml(tone)}" type="button" data-jump="${page}">
        <span class="feature-title">
          ${pageIcon(page, icon)}
          <span>
            <strong>${escapeHtml(title)}</strong>
            <small>${escapeHtml(sub)}</small>
          </span>
        </span>
        <span class="feature-total">
          <span class="count">${escapeHtml(count)}</span>
          <small>${escapeHtml(completionSummaryText(completion))}</small>
        </span>
        ${breakdown}
        <span class="feature-open">Open</span>
      </button>
    `;
  }

  function pageIcon(page, fallback) {
    const icons = {
      overview: '<path d="M4 10h6V4H4v6Zm10 0h6V4h-6v6ZM4 20h6v-6H4v6Zm10 0h6v-6h-6v6Z" />',
      scope: '<path d="M5 5h14v14H5z" /><path d="M8 9h8M8 13h8M8 17h5" />',
      whatsnew: '<path d="M12 3v18" /><path d="m7 8 5-5 5 5" /><path d="M5 15h14" />',
      apps: '<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />',
      extensibility: '<path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />',
      deprecated: '<path d="M12 3 2 21h20L12 3Z" /><path d="M12 9v5M12 17h.01" />',
      newfeatures: '<path d="M12 3l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9 6.6 19.8l1-6.1-4.4-4.3 6.1-.9L12 3Z" />',
      publicsector: '<path d="M4 20h16" /><path d="M6 10v8M10 10v8M14 10v8M18 10v8" /><path d="M3 10h18L12 4 3 10Z" />',
      aiupdates: '<path d="M12 3l1.7 4.5L18 9.2l-4.3 1.7L12 15l-1.7-4.1L6 9.2l4.3-1.7L12 3Z" /><path d="M5 15l.9 2.1L8 18l-2.1.9L5 21l-.9-2.1L2 18l2.1-.9L5 15Z" /><path d="M19 14l.7 1.7 1.8.8-1.8.8L19 19l-.7-1.7-1.8-.8 1.8-.8L19 14Z" />',
      coverage: '<path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /><path d="m7 5 2 2 4-4" /><path d="m7 12 2 2 4-4" /><path d="M7 19h.01" />',
      testplan: '<path d="M9 4h6l1 2h3v15H5V6h3l1-2Z" /><path d="M9 12l2 2 4-4M9 18h6" />'
    };
    return `<span class="workstream-icon" aria-hidden="true"><svg viewBox="0 0 24 24">${icons[page] || `<text x="12" y="16" text-anchor="middle">${escapeHtml(fallback)}</text>`}</svg></span>`;
  }

  function focusItem(row) {
    return `
      <article class="focus-item">
        <div>
          <div class="badges">${badge(getAction(row), actionTone(row))}${badge(getType(row))}${badge(getCategory(row), "teal")}</div>
          <h3>${escapeHtml(getTitle(row))}</h3>
          <p>${escapeHtml(shorten(get(row, "Description(Description)", "Description"), 170))}</p>
        </div>
        <button class="table-action" type="button" data-open-change="${escapeHtml(rowKey(row))}">Open</button>
      </article>
    `;
  }

  function insight(title, value, text) {
    return `
      <article class="insight-card">
        <span class="metric-label">${escapeHtml(title)}</span>
        <strong>${escapeHtml(value)}</strong>
        <p>${escapeHtml(text)}</p>
      </article>
    `;
  }

  function statusInsight(title, status, text) {
    return `
      <article class="insight-card status-insight">
        <span class="metric-label">${escapeHtml(title)}</span>
        ${badge(status.label, status.tone)}
        <p>${escapeHtml(text)}</p>
      </article>
    `;
  }

  function renderScopeImpact() {
    const data = state.data;
    const mode = state.selected.scopeMode || "used";
    const rows = scopeRowsForMode(mode);
    const filtered = [...applyGlobalFilters(rows, false)].sort((a, b) => Number(get(b, "Degree of Change") || 0) - Number(get(a, "Degree of Change") || 0));
    pageContent.innerHTML = `
      <div class="filter-row">
        <button class="primary-action" type="button" id="downloadScopeAlmZip">Download reviewed scope ALM ZIP</button>
        ${filterButton("scopeMode", "used", "Used with changes", mode)}
        ${filterButton("scopeMode", "usedNoDetail", "Used - no direct detail", mode)}
        ${filterButton("scopeMode", "activated", "Activated only", mode)}
        ${filterButton("scopeMode", "all", "All impacted", mode)}
        ${scopeCompletionPills(filtered)}
      </div>
      <div class="scope-list-main">
        <div class="table-panel">
          ${scopeTable(filtered, null)}
        </div>
      </div>
    `;
  }

  function scopeRowsForMode(mode) {
    if (mode === "usedNoDetail") return scopeRowsWithoutDirectChanges(state.data.usedScopeImpact, state.data);
    if (mode === "activated") return state.data.derived.activatedOnly;
    if (mode === "all") return state.data.completeScopeImpact;
    return scopeRowsWithDirectChanges(state.data.usedScopeImpact, state.data);
  }

  function scopeHasDirectChanges(row, data = state.data) {
    return scopeSpecificChanges(get(row, "Scope Item ID"), data).length > 0;
  }

  function scopeRowsWithDirectChanges(rows, data = state.data) {
    return rows.filter((row) => scopeHasDirectChanges(row, data));
  }

  function scopeRowsWithoutDirectChanges(rows, data = state.data) {
    return rows.filter((row) => !scopeHasDirectChanges(row, data));
  }

  function filterButton(key, value, label, active) {
    return `<button class="chip-button ${active === value ? "active" : ""}" type="button" data-filter-key="${key}" data-filter-value="${value}">${label}</button>`;
  }

  function scopeCompletionPills(rows) {
    const summary = scopeCompletionSummary(rows, state.data);
    if (!summary.total) return "";
    return `
      <div class="review-summary scope-completion-summary" aria-label="Scope review completion summary">
        <span class="complete">${summary.completed} completed</span>
        <span class="progress">${summary.inProgress} in progress</span>
        <span class="todo">${summary.notStarted} not started</span>
        ${summary.noChange ? `<span class="todo">${summary.noChange} no direct changes</span>` : ""}
      </div>
    `;
  }

  function scopeTable(rows, selected) {
    if (!rows.length) return empty("No matching scope items.");
    return `
      <table class="data-table scope-table">
        <colgroup>
          <col class="scope-col-degree" />
          <col class="scope-col-item" />
          <col class="scope-col-lob" />
          <col class="scope-col-reviewed" />
          <col class="scope-col-yet" />
          <col class="scope-col-status" />
          <col class="scope-col-detail" />
          <col class="scope-col-used" />
        </colgroup>
        <thead><tr><th>Degree</th><th>Scope item</th><th>Line of business</th><th class="count-column">Reviewed</th><th class="count-column">Yet to review</th><th>Status</th><th>Status detail</th><th>Used</th></tr></thead>
        <tbody>
          ${rows.map((row, index) => {
            const id = get(row, "Scope Item ID");
            const used = state.data.derived.usedIds.has(id) || get(row, "Used") === "true";
            const progress = reviewProgress(scopeSpecificChanges(id, state.data));
            const reviewStatus = scopeProgressStatus(progress);
            return `
              <tr class="${selected === row ? "selected" : ""}">
                <td><button class="degree" type="button" data-select-page="scope" data-select-index="${index}" data-scope-id="${escapeHtml(id)}" aria-label="Select ${escapeHtml(id)}">${escapeHtml(get(row, "Degree of Change") || "-")}</button></td>
                <td><button class="row-link" type="button" data-select-page="scope" data-select-index="${index}" data-scope-id="${escapeHtml(id)}">${escapeHtml(id)} - ${escapeHtml(get(row, "Scope Item Title"))}</button></td>
                <td>${escapeHtml(get(row, "Line of Business"))}</td>
                <td class="count-cell">${escapeHtml(progress.reviewed)}</td>
                <td class="count-cell">${escapeHtml(progress.remaining)}</td>
                <td class="review-status-cell">${badge(reviewStatus.label, reviewStatus.tone)}</td>
                <td class="status-detail-cell">${escapeHtml(scopeProgressDetail(progress))}</td>
                <td>${used ? badge("Used", "green") : badge("Activated only", "warning")}</td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    `;
  }

  function scopeDetail(row, data) {
    if (!row) return `<aside class="detail-card">${empty("Select a scope item to see linked changes and suggested tests.")}</aside>`;
    const scopeId = get(row, "Scope Item ID");
    const linked = sortByReview(scopeSpecificChanges(scopeId, data));
    return `
      <aside class="detail-card">
        <div class="detail-section">
          <div class="badges">${badge(scopeId, "teal")}${badge(get(row, "Release Status"))}${badge(`Degree ${get(row, "Degree of Change") || "-"}`, "warning")}</div>
          <h3>${escapeHtml(get(row, "Scope Item Title"))}</h3>
          <p>${escapeHtml(get(row, "Line of Business"))}</p>
          <div class="detail-actions">
            <button class="primary-action" type="button" data-open-scope-review="${escapeHtml(scopeId)}">Review full page</button>
          </div>
        </div>
        <div class="detail-section">
          <p class="system-label">What changed</p>
          <div class="linked-changes">
            ${linked.length ? linked.slice(0, 8).map((change) => linkedChange(change, row)).join("") : "<p class=\"muted\">No scope-specific change rows were supplied for this scope item.</p>"}
          </div>
        </div>
        <div class="detail-section">
          <p class="system-label">What to test</p>
          <ul class="detail-list">${scopeTestSteps(row, linked).map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ul>
          <div class="detail-actions">
            <button class="table-action" type="button" data-export-scope="${escapeHtml(scopeId)}">Download Cloud ALM workbook</button>
          </div>
        </div>
      </aside>
    `;
  }

  function scopeRowById(scopeId) {
    const candidates = [
      ...state.data.usedScopeImpact,
      ...state.data.derived.activatedOnly,
      ...state.data.completeScopeImpact,
      ...state.data.usedVsActivatedScopeItems
    ];
    return candidates.find((row) => get(row, "Scope Item ID") === scopeId) || null;
  }

  function currentScopeReviewRow() {
    if (state.selected.scopeReviewId) return scopeRowById(state.selected.scopeReviewId);
    return selectedRow("scope", scopeRowsForMode(state.selected.scopeMode || "used"));
  }

  function renderScopeReview() {
    const row = currentScopeReviewRow();
    if (!row) {
      pageContent.innerHTML = empty("Select a scope item first, then open the full-page review.");
      return;
    }
    const scopeId = get(row, "Scope Item ID");
    const scopeTitle = get(row, "Scope Item Title");
    const allLinked = scopeSpecificChanges(scopeId, state.data);
    const searchableLinked = sortByReview(applyGlobalFilters(allLinked, false));
    const reviewFilter = state.selected.scopeReviewFilter || "all";
    const linked = searchableLinked.filter((change) => reviewFilter === "all" || effectiveReviewEntry(change).status === reviewFilter);
    const timing = splitByReleaseTiming(linked, row);
    const tests = targetedTestItems(scopeId);
    const progress = reviewProgress(searchableLinked);
    const reviewStatus = scopeProgressStatus(progress);
    viewTitle.textContent = `${scopeId} - ${scopeTitle}`;
    viewKicker.textContent = "Scope item review";
    pageContent.innerHTML = `
      <div class="scope-review-page">
        <section class="scope-review-hero">
          <div>
            <div class="badges">${badge(scopeId, "teal")}${badge(get(row, "Release Status"))}${badge(`Degree ${get(row, "Degree of Change") || "-"}`, "warning")}${badge(state.data.derived.usedIds.has(scopeId) ? "Used" : "Activated only", state.data.derived.usedIds.has(scopeId) ? "green" : "warning")}</div>
            <h3>${escapeHtml(scopeTitle)}</h3>
            <p>${escapeHtml(get(row, "Line of Business") || "Scope item")}</p>
          </div>
          <div class="scope-review-actions">
            <button class="secondary-action" type="button" data-jump="scope">Back to scope list</button>
            <button class="primary-action" type="button" data-export-scope="${escapeHtml(scopeId)}">Download Cloud ALM workbook</button>
          </div>
        </section>

        <article class="scope-review-panel scope-review-metrics">
          ${insight("Linked changes", allLinked.length, "Only changes tied directly to this scope item are shown here.")}
          ${insight("Targeted test items", tests.length, "Generated test-pack rows connected to this scope item.")}
          ${statusInsight("Review status", reviewStatus, "Calculated from linked change review decisions.")}
          ${insight("Status detail", `${progress.reviewed} reviewed`, `${progress.remaining} yet to review`)}
        </article>

        <div class="filter-row scope-review-filter">
          ${filterButton("scopeReviewFilter", "all", "All linked changes", reviewFilter)}
          ${filterButton("scopeReviewFilter", "review-needed", "Review needed", reviewFilter)}
          ${filterButton("scopeReviewFilter", "relevant", "Relevant", reviewFilter)}
          ${filterButton("scopeReviewFilter", "not-relevant", "Not relevant", reviewFilter)}
            ${reviewSummary(searchableLinked)}
        </div>

        ${linked.length ? `
          <section class="scope-review-buckets" aria-label="Linked scope item changes by release timing">
            ${scopeReviewBucket("Test before upgrade", "Mandatory, critical, deprecated, app, role, config, integration, or used-process checks for the July/August release window.", timing.release, row, "release")}
            ${scopeReviewBucket("Future adoption / backlog", "New capabilities and innovation items. Demo or backlog these after production is stable unless the business chooses to adopt now.", timing.future, row, "future")}
            ${scopeReviewBucket("Not relevant / evidence", "Marked not relevant for this customer; kept as evidence but moved out of the active review queue.", timing.parked, row, "parked")}
          </section>
        ` : empty(state.search ? "No linked changes match this search." : "No linked changes match this review filter.")}
      </div>
    `;
  }

  function scopeReviewBucket(title, text, rows, scopeRow, tone) {
    const progress = reviewProgress(rows);
    const stillToReview = progress.remaining ? `${progress.remaining} still to review` : rows.length ? "All reviewed" : "No items";
    const open = tone === "parked" ? "" : " open";
    return `
      <details class="change-bucket ${escapeHtml(tone)}"${open}>
        <summary class="change-bucket-summary">
          <span class="bucket-title">
            <span class="bucket-toggle" aria-hidden="true"></span>
            <span>
              <strong>${escapeHtml(title)}</strong>
              <small>${escapeHtml(text)}</small>
            </span>
          </span>
          <span class="bucket-status">
            <strong>${rows.length}</strong>
            <small>${escapeHtml(stillToReview)}</small>
          </span>
        </summary>
        <div class="change-bucket-list">
          ${rows.length ? rows.map((change) => scopeReviewChangeCard(change, scopeRow)).join("") : '<p class="muted">No items.</p>'}
        </div>
      </details>
    `;
  }

  function scopeReviewChangeCard(row, scopeRow) {
    return `
      <article class="scope-review-card ${reviewRowClass(row)}">
        <div class="scope-review-card-head">
          <div class="badges">${badge(getAction(row), actionTone(row))}${badge(getType(row))}${badge(getCategory(row), "teal")}${badge(reviewLabel(effectiveReviewEntry(row).status), reviewTone(effectiveReviewEntry(row).status))}${recommendationBadge(row, scopeRow)}</div>
        </div>
        <div class="scope-review-card-title">
          <h3>${escapeHtml(getTitle(row))}</h3>
          ${reviewSelect(row, true)}
        </div>
        <p>${escapeHtml(shorten(get(row, "Description(Description)", "Description"), 520))}</p>
        <div class="review-action-row">
          ${sourceBackedGuidancePanel(row, { compact: true, buttonLabel: guidanceButtonLabel(row) })}
          ${reviewNoteToggle(row)}
        </div>
      </article>
    `;
  }

  function linkedChange(row, scopeRow = null) {
    if (scopeRow) {
      return `
        <article class="linked-change scope-change ${reviewRowClass(row)}">
          <div class="badges">${badge(getAction(row), actionTone(row))}${badge(getType(row))}${badge(getCategory(row), "teal")}${badge(reviewLabel(effectiveReviewEntry(row).status), reviewTone(effectiveReviewEntry(row).status))}${recommendationBadge(row, scopeRow)}</div>
          <div class="linked-change-review">${reviewSelect(row, true)}</div>
          <strong>${escapeHtml(getTitle(row))}</strong>
          <p>${escapeHtml(shorten(get(row, "Description(Description)", "Description"), 220))}</p>
          ${sourceBackedGuidancePanel(row)}
        </article>
      `;
    }
    return `
      <article class="linked-change ${reviewRowClass(row)}">
        <div class="badges">${badge(getAction(row), actionTone(row))}${badge(getType(row))}${badge(reviewLabel(effectiveReviewEntry(row).status), reviewTone(effectiveReviewEntry(row).status))}${recommendationBadge(row)}</div>
        <div class="linked-change-review">${reviewSelect(row, true)}</div>
        <strong>${escapeHtml(getTitle(row))}</strong>
        <span class="muted">${escapeHtml(shorten(get(row, "Description(Description)"), 140))}</span>
        ${sourceBackedGuidancePanel(row)}
      </article>
    `;
  }

  function scopeSpecificChanges(scopeId, data) {
    return data.usedPersonalizedWhatsNew.filter((change) => {
      const usedScopes = getScopeItems(change);
      if (!usedScopes.includes(scopeId)) return false;
      return usedScopes.length <= 3;
    });
  }

  function scopeProcessImpact(change, scopeRow) {
    const scopeTitle = get(scopeRow, "Scope Item Title") || "this process";
    const category = getCategory(change);
    const type = getType(change);
    if (category === "App" && /Deleted|Deprecated/i.test(type)) return `Users may need to move from the old app/tile to the successor app while running ${scopeTitle}.`;
    if (category === "App") return `The user app flow for ${scopeTitle} may show changed fields, actions, output, or tile behavior.`;
    if (category === "Authorization") return `Business roles for ${scopeTitle} may need catalog or authorization review before users can complete the process.`;
    if (category === "Configuration") return `Configuration behind ${scopeTitle} may need review before regression testing.`;
    if (category === "Development" && type === "New") return `New capability only affects ${scopeTitle} if the process owner wants to adopt it.`;
    if (category === "Function" || category === "Business Process") return `A functional step in ${scopeTitle} may behave differently and should be checked with the process owner.`;
    if (/Extensibility/i.test(category)) return `Custom fields, logic, APIs, or CDS consumers around ${scopeTitle} may need technical validation.`;
    return `Review with the ${get(scopeRow, "Line of Business") || "business"} process owner to confirm whether this change affects day-to-day execution.`;
  }

  function scopeTestFocus(change, scopeRow) {
    const category = getCategory(change);
    const type = getType(change);
    const scopeTitle = get(scopeRow, "Scope Item Title") || "the process";
    if (category === "App" && /Deleted|Deprecated/i.test(type)) return "Open the successor app with the real business role, confirm tile visibility, and complete the replaced user step.";
    if (category === "App") return "Open the affected app with a real user role and run the changed screen/action/output used by the process.";
    if (category === "Authorization") return "Test with a representative user role and confirm access is neither blocked nor too broad.";
    if (category === "Configuration") return "Check the configuration activity, then run one process transaction that depends on it.";
    if (category === "Development" && type === "New") return "Decide whether to adopt it; if yes, demo it and add a test only for the adopted scenario.";
    if (category === "Function" || category === "Business Process") return `Run a focused process walkthrough for ${scopeTitle} and compare expected business outcome before/after upgrade.`;
    if (/Extensibility/i.test(category)) return "Activate and run dependent custom logic, CDS, API, report, or side-by-side consumer.";
    return "Run a short business walkthrough and capture whether the process owner accepts the change as relevant.";
  }

  function scopeTestSteps(row, linked) {
    const steps = [];
    const degree = Number(get(row, "Degree of Change") || 0);
    if (degree >= 20) steps.push("Run an end-to-end process walkthrough with the process owner before customer sign-off.");
    if (degree >= 10 && degree < 20) steps.push("Run focused regression testing around the changed process step.");
    if (!linked.length) steps.push("No scope-specific change detail was supplied; use the degree of change to decide whether a process-owner review is still needed.");
    linked.slice(0, 4).forEach((change) => steps.push(scopeTestFocus(change, row)));
    return [...new Set(steps.length ? steps : ["Ask the process owner whether this scope item is used, then record relevant / not relevant."])];
  }

  function renderWhatsNew() {
    const rows = sortByReview(applyGlobalFilters(state.data.usedPersonalizedWhatsNew));
    const timing = splitByReleaseTiming(rows);
    const timingMode = state.selected.whatTiming || "release";
    const timingRows = sortByReview(filterByTiming(rows));
    const categoryRows = sortByReview(filterByCategory(timingRows));
    const selected = selectedRow("whatsnew", categoryRows);
    pageContent.innerHTML = `
      <div class="filter-row">
        ${filterButton("whatTiming", "release", `Release readiness (${timing.release.length})`, timingMode)}
        ${filterButton("whatTiming", "future", `Good ideas for later (${timing.future.length})`, timingMode)}
        ${timing.parked.length ? filterButton("whatTiming", "parked", `Not relevant (${timing.parked.length})`, timingMode) : ""}
        ${filterButton("whatTiming", "all", `All changes (${rows.length})`, timingMode)}
        ${reviewSummary(categoryRows)}
      </div>
      <div class="filter-row compact-filter-row">
        ${filterButton("whatType", "all", "All categories", state.selected.whatType || "all")}
        ${filterButton("whatType", "App", "Apps", state.selected.whatType || "all")}
        ${filterButton("whatType", "Function", "Functions", state.selected.whatType || "all")}
        ${filterButton("whatType", "Configuration", "Configuration", state.selected.whatType || "all")}
        ${filterButton("whatType", "Authorization", "Authorization", state.selected.whatType || "all")}
      </div>
      <div class="page-layout">
        <div class="table-panel">${changeTable(categoryRows, selected, "whatsnew")}</div>
        ${changeDetail(selected)}
      </div>
    `;
  }

  function filterByTiming(rows) {
    const timing = state.selected.whatTiming || "release";
    if (timing === "all") return rows;
    return rows.filter((row) => releaseTiming(row) === timing);
  }

  function filterByCategory(rows) {
    const category = state.selected.whatType || "all";
    if (category === "all") return rows;
    return rows.filter((row) => getCategory(row) === category);
  }

  function changeTable(rows, selected, pageKey) {
    if (!rows.length) return empty("No matching changes.");
    return `
      <table class="data-table change-table">
        <colgroup>
          <col class="change-col-action" />
          <col class="change-col-review" />
          <col class="change-col-change" />
          <col class="change-col-category" />
          <col class="change-col-scope" />
        </colgroup>
        <thead><tr><th>Action</th><th>Review</th><th>Change</th><th>Category</th><th>Used scope</th></tr></thead>
        <tbody>
          ${rows.map((row, index) => `
            <tr class="${[selected === row ? "selected" : "", reviewRowClass(row)].filter(Boolean).join(" ")}">
              <td class="action-cell">${badge(getAction(row), `${actionTone(row)} action-badge`)}</td>
              <td class="review-cell">${reviewSelect(row, true)}</td>
              <td class="change-cell"><button class="row-link" type="button" data-select-page="${pageKey}" data-select-index="${index}">${escapeHtml(getTitle(row))}</button><br>${appChangeMeta(row)}</td>
              <td class="category-cell">${escapeHtml(getCategory(row))}</td>
              <td class="scope-cell">${escapeHtml(getScopeItems(row).join(", "))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  }

  function changeDetail(row) {
    if (!row) return `<aside class="detail-card">${empty("Select a change to see the practical review steps.")}</aside>`;
    const link = get(row, "What's New Document(What's New Document)", "What\u0027s New Document(What\u0027s New Document)");
    return `
      <aside class="detail-card">
        <div class="detail-section">
          <div class="badges">${badge(getAction(row), actionTone(row))}${badge(getType(row))}${badge(getCategory(row), "teal")}</div>
          ${detailTitleRow(row, getTitle(row))}
          <p>${escapeHtml(get(row, "Description(Description)", "Description"))}</p>
        </div>
        <div class="detail-section">
          <p class="system-label">Affected used scope</p>
          <p>${escapeHtml(getScopeItems(row).join(", ") || "Not specified")}</p>
        </div>
        ${detailReviewActions(row)}
        ${appReplacementPanel(row)}
        ${getCategory(row) === "App" ? appTenantEvidencePanel(row) : ""}
        ${link ? `<div class="detail-section"><a class="secondary-action" href="${escapeHtml(link)}" target="_blank" rel="noreferrer">Open SAP What's New item</a></div>` : ""}
      </aside>
    `;
  }

  function actionSteps(row, data = state.data) {
    const steps = [recommendedAction(row, data)];
    const category = getCategory(row);
    const type = getType(row);
    if (category === "Authorization") steps.push("Identify business roles that grant this area and confirm company-code restrictions with representative users.");
    if (category === "App" && /Deleted|Deprecated/i.test(type)) {
      const evidence = appEvidence(row, data);
      if (evidence.catalogs.length) steps.push(`Update or validate roles containing these catalogs: ${catalogSummary(evidence.catalogs)}.`);
      else steps.push("Find the business catalogs behind the impacted app before changing roles.");
      steps.push(`Check spaces/pages manually: search for ${evidence.successorApp.id || "the successor app"} and add it to the relevant page if SAP content removed the old tile without adding the replacement.`);
      steps.push("Run a real-role launchpad test to confirm the old tile is gone, the successor tile is visible, and the app opens without authorization errors.");
    }
    if (category === "Configuration") steps.push("Review the configuration activity in CBC or SSCUI and decide whether the customer needs a change before regression testing.");
    if (category === "Integration") steps.push("Validate interface payloads, connected systems, background jobs, and error handling.");
    if (/Extensibility/i.test(category)) steps.push("Check custom logic, custom CDS views, APIs, and side-by-side consumers before upgrade sign-off.");
    steps.push("Record evidence and owner in the generated test plan.");
    return [...new Set(steps)];
  }

  function recommendedAction(row, data = state.data) {
    const category = getCategory(row);
    const type = getType(row);
    if (category === "App" && /Deleted|Deprecated/i.test(type)) {
      const evidence = appEvidence(row, data);
      const oldLabel = formatAppLabel(evidence.oldApp);
      const successorLabel = formatAppLabel(evidence.successorApp);
      if (evidence.successorApp.id || evidence.successorApp.title) return `Replace ${oldLabel} with successor app ${successorLabel}; then update catalogs, spaces, pages, and role tests.`;
      return `Do not just remove ${oldLabel}; confirm the successor from SAP Help first, then update catalogs, spaces, pages, and role tests.`;
    }
    if (/Deleted/i.test(type)) return "Replace the impacted item with its successor where supplied, then remove old usage before the release reaches production.";
    if (/Deprecated/i.test(type)) return "Plan migration to the successor and communicate the retirement path.";
    if (category === "Authorization") return "Review role/catalog access and test with affected business users.";
    if (category === "App") return "Open the app or successor app and test the changed user flow.";
    if (category === "Function" || category === "Business Process") return "Run a process-level regression test for the affected scope item.";
    if (category === "Configuration") return "Review configuration and confirm whether a customer setting must change.";
    if (category === "Integration") return "Run interface regression tests and confirm payload compatibility.";
    if (/Extensibility/i.test(category)) return "Review dependent custom objects and test activation/runtime behavior.";
    if (getAction(row) === "Innovation") return "Demo the feature and decide whether it belongs in the customer backlog.";
    return "Review the SAP change note and decide whether customer testing is required.";
  }

  function renderAppsRoles() {
    const rows = sortByReview(applyGlobalFilters([...state.data.derived.appRemediation, ...state.data.deletedDeprecatedBusinessCatalogs, ...state.data.whereUsedAssociatedCatalogs], false));
    const selected = selectedRow("apps", rows);
    pageContent.innerHTML = `
      <div class="filter-row">
        ${reviewSummary(rows)}
      </div>
      <div class="page-layout">
        <div class="table-panel">${appsTable(rows, selected)}</div>
        ${appsDetail(selected)}
      </div>
    `;
  }

  function appsTable(rows, selected) {
    if (!rows.length) return empty("No matching app, catalog, or role-impact rows.");
    return `
      <table class="data-table">
        <thead><tr><th>Type</th><th>Review</th><th>Object</th><th>Successor / catalog</th><th>Tenant evidence</th></tr></thead>
        <tbody>
          ${rows.map((row, index) => {
            const evidence = appEvidence(row);
            const object = get(row, "Application ID(Application ID)", "Business Catalog ID(Catalog ID)", "App ID(App ID)") || evidence.oldApp.id || getTitle(row);
            const successor = get(row, "Successor Application(Successor Application)", "Successor Business Catalog ID(Successor Catalog ID)") || formatAppLabel(evidence.successorApp);
            const catalogText = catalogSummary(evidence.catalogs);
            const tenantText = evidence.cloud.summary || get(row, "Tenants(Tenants)") || "-";
            return `
              <tr class="${[selected === row ? "selected" : "", reviewRowClass(row)].filter(Boolean).join(" ")}">
                <td>${badge(getType(row) || get(row, "Type(Type)") || "Catalog", actionTone(row))}</td>
                <td>${reviewSelect(row, true)}</td>
                <td><button class="row-link" type="button" data-select-page="apps" data-select-index="${index}">${escapeHtml(object)}</button><br><span class="muted">${escapeHtml(getTitle(row))}</span></td>
                <td>${escapeHtml(successor || "Not supplied")}<br><span class="muted">${escapeHtml(catalogText)}</span></td>
                <td>${escapeHtml(tenantText)}</td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    `;
  }

  function appsDetail(row) {
    if (!row) return `<aside class="detail-card">${empty("Select an app or catalog row to see the role/catalog action.")}</aside>`;
    const evidence = appEvidence(row);
    const catalogs = evidence.catalogs.length ? evidence.catalogs.join(", ") : get(row, "Associated Business Catalogs(Associated Catalogs)", "Business Catalog ID(Catalog ID)", "Associated Applications(Associated Applications)");
    const successorCatalog = get(row, "Successor Business Catalog ID(Successor Catalog ID)");
    return `
      <aside class="detail-card">
        <div class="detail-section">
          <div class="badges">${badge(getType(row) || get(row, "Type(Type)"), actionTone(row))}${badge(get(row, "Tenants(Tenants)"), "teal")}</div>
          ${detailTitleRow(row, getTitle(row))}
          <p>${escapeHtml(get(row, "Description(Description)", "Description") || get(row, "Application Title(Application Title)", "Business Catalog Title(Catalog Title)"))}</p>
        </div>
        ${detailReviewActions(row)}
        ${appReplacementPanel(row)}
        ${appTenantEvidencePanel(row)}
        <div class="detail-section">
          <p class="system-label">Catalogs to update or validate</p>
          <p>${escapeHtml(catalogs || "Not supplied by RASD")}</p>
          ${successorCatalog ? `<p class="muted">Successor catalog: ${escapeHtml(successorCatalog)}</p>` : ""}
        </div>
        <div class="detail-section">
          <p class="system-label">Recommended action</p>
          <ul class="detail-list">
            <li>Find business roles containing the impacted catalog or app ID.</li>
            <li>Replace deprecated/deleted app assignments with the successor app or successor catalog shown above.</li>
            <li>Open Manage Launchpad Spaces and Manage Launchpad Pages and confirm the successor tile is actually on the page.</li>
            <li>If the tile is missing, search for the successor app ID and add it to the relevant page before user testing.</li>
            <li>Test launchpad visibility and authorization with representative users.</li>
            <li>Communicate app tile rename, removal, or replacement before production upgrade.</li>
          </ul>
        </div>
      </aside>
    `;
  }

  function rowSearchTerms(row) {
    return uniqueList([
      getTitle(row),
      get(row, "Technical Name", "Custom CDS Views(Primary Data Source)", "Secondary CDS Views(Secondary CDS Views)"),
      get(row, "Change Detail", "Description", "Description(Description)"),
      get(row, "ScenarioID", "Scenario", "ArrangementName"),
      ...getScopeItems(row)
    ].map(normalizeLookup).filter((value) => value.length > 3));
  }

  function cloudTermsMatch(row, terms, keys) {
    if (!terms.length) return false;
    const text = cloudRowText(row, keys);
    return terms.some((term) => text.includes(term) || (text.length > 7 && term.includes(text)));
  }

  function extensibilityTenantEvidence(row, data = state.data) {
    const indexes = publicCloudIndexes(data);
    const scopes = uniqueList(scopeIdsForReview(row)).map(upperKey);
    const terms = rowSearchTerms(row);
    const scopeCatalogRows = uniqueRowsBy(
      scopes.flatMap((scopeId) => indexedRows(indexes.scopeCatalogsByScope, scopeId)),
      (item) => [get(item, "Tenant"), get(item, "BusinessCatalogID"), get(item, "ScopeItemID")].join("|")
    );
    const catalogIds = uniqueList(scopeCatalogRows.map((item) => get(item, "BusinessCatalogID"))).map(upperKey);
    const customCatalogExtensions = uniqueRowsBy(
      [
        ...catalogIds.flatMap((catalogId) => indexedRows(indexes.customExtensionsByCatalog, catalogId)),
        ...publicCloudRows(data, "customCatalogExtensions").filter((item) => cloudTermsMatch(item, terms, ["ApplicationID", "IAMAppDescription", "AssignmentID", "BusinessCatalogID"]))
      ],
      (item) => [get(item, "Tenant"), get(item, "BusinessCatalogID"), get(item, "ApplicationID"), get(item, "AssignmentID")].join("|")
    );
    const communicationArrangements = uniqueRowsBy(
      publicCloudRows(data, "communicationArrangements").filter((item) => cloudTermsMatch(item, terms, ["ArrangementName", "ScenarioID", "Scenario", "CommunicationSystem"])),
      (item) => [get(item, "Tenant"), get(item, "ArrangementName"), get(item, "ScenarioID"), get(item, "CommunicationSystem")].join("|")
    );
    const btpDestinations = uniqueRowsBy(
      publicCloudRows(data, "btpDestinations").filter((item) => cloudTermsMatch(item, terms, ["Name", "Description", "Authentication", "ProxyType"])),
      (item) => [get(item, "Subaccount"), get(item, "Name")].join("|")
    );
    const btpApplications = uniqueRowsBy(
      publicCloudRows(data, "btpHtml5Applications").filter((item) => cloudTermsMatch(item, terms, ["ApplicationName", "ApplicationURL", "Provider"])),
      (item) => [get(item, "Subaccount"), get(item, "ApplicationName")].join("|")
    );
    const btpServices = uniqueRowsBy(
      publicCloudRows(data, "btpServiceSubscriptions").filter((item) => cloudTermsMatch(item, terms, ["ApplicationName", "ApplicationDisplayName", "Provider"])),
      (item) => [get(item, "Subaccount"), get(item, "ApplicationName"), get(item, "ApplicationDisplayName")].join("|")
    );
    const roleCatalogRows = uniqueRowsBy(
      catalogIds.flatMap((catalogId) => indexedRows(indexes.rolesByCatalog, catalogId)),
      (item) => [get(item, "Tenant"), get(item, "BusinessRoleID"), get(item, "CatalogID")].join("|")
    );
    return {
      scopeCatalogRows,
      customCatalogExtensions,
      communicationArrangements,
      btpDestinations,
      btpApplications,
      btpServices,
      roleCatalogRows,
      hasDirectEvidence: Boolean(customCatalogExtensions.length || communicationArrangements.length || btpDestinations.length || btpApplications.length || btpServices.length),
      hasScopeEvidence: Boolean(scopeCatalogRows.length || roleCatalogRows.length)
    };
  }

  function extensibilityFootprintSummary() {
    const data = state.data;
    const customArrangements = publicCloudRows(data, "communicationArrangements").filter((item) => /^YY1/i.test(get(item, "ScenarioID")) || /^YY1/i.test(get(item, "ArrangementName")));
    return `
      <div class="evidence-strip" aria-label="Loaded extensibility and integration inventory">
        ${evidenceMetric("Custom catalog extensions", publicCloudRows(data, "customCatalogExtensions").length, "from Public Cloud")}
        ${evidenceMetric("Custom communication arrangements", customArrangements.length, "YY1 / custom scenarios")}
        ${evidenceMetric("BTP HTML5 apps", publicCloudRows(data, "btpHtml5Applications").length, "from cockpit")}
        ${evidenceMetric("BTP destinations", publicCloudRows(data, "btpDestinations").length, "available extract")}
        ${evidenceMetric("BTP access gaps", publicCloudRows(data, "btpAccessGaps").length, "captured limits")}
      </div>
    `;
  }

  function extTenantEvidencePanel(row) {
    const evidence = extensibilityTenantEvidence(row);
    if (!evidence.hasDirectEvidence && !evidence.hasScopeEvidence) {
      return `
        <div class="detail-section tenant-evidence-panel">
          <p class="system-label">Tenant evidence from extracts</p>
          <p class="muted">No direct custom field, custom catalog extension, communication arrangement, BTP app, destination, or service match was found for this RASD item. Keep it as SAP-delivered information unless the process or integration owner confirms a dependency.</p>
        </div>
      `;
    }
    return `
      <div class="detail-section tenant-evidence-panel">
        <p class="system-label">Tenant evidence from extracts</p>
        <div class="evidence-metric-grid">
          ${evidenceMetric("Custom extensions", evidence.customCatalogExtensions.length, "catalog/app")}
          ${evidenceMetric("Comm arrangements", evidence.communicationArrangements.length, "direct match")}
          ${evidenceMetric("BTP matches", evidence.btpDestinations.length + evidence.btpApplications.length + evidence.btpServices.length, "dest/app/service")}
          ${evidenceMetric("Scope-linked roles", uniqueRowsBy(evidence.roleCatalogRows, tenantRoleKey).length, "context")}
        </div>
        ${evidence.customCatalogExtensions.length ? `
          <div class="evidence-subsection">
            <p class="system-label">Custom catalog extensions</p>
            ${miniEvidenceTable(evidence.customCatalogExtensions, [
              { label: "Tenant", value: (item) => get(item, "Tenant") },
              { label: "Catalog", value: (item) => get(item, "BusinessCatalogID") },
              { label: "App", value: (item) => get(item, "ApplicationID") },
              { label: "Description", value: (item) => get(item, "IAMAppDescription") }
            ], "No custom catalog extension match found.")}
          </div>
        ` : ""}
        ${evidence.communicationArrangements.length ? `
          <div class="evidence-subsection">
            <p class="system-label">Communication arrangements</p>
            ${miniEvidenceTable(evidence.communicationArrangements, [
              { label: "Tenant", value: (item) => get(item, "Tenant") },
              { label: "Scenario", value: (item) => get(item, "ScenarioID") },
              { label: "Description", value: (item) => get(item, "Scenario") },
              { label: "System", value: (item) => get(item, "CommunicationSystem") }
            ], "No communication arrangement match found.")}
          </div>
        ` : ""}
        ${evidence.btpDestinations.length || evidence.btpApplications.length || evidence.btpServices.length ? `
          <div class="evidence-subsection">
            <p class="system-label">BTP matches</p>
            ${miniEvidenceTable([...evidence.btpDestinations, ...evidence.btpApplications, ...evidence.btpServices], [
              { label: "Subaccount", value: (item) => get(item, "Subaccount") },
              { label: "Object", value: (item) => get(item, "Name", "ApplicationName", "ApplicationDisplayName") },
              { label: "Type", value: (item) => get(item, "Type", "State", "Provider") },
              { label: "Description", value: (item) => get(item, "Description", "ApplicationURL", "Provider") }
            ], "No BTP object match found.")}
          </div>
        ` : ""}
        ${evidence.scopeCatalogRows.length ? `
          <div class="evidence-subsection">
            <p class="system-label">Scope-linked catalog and role context</p>
            ${miniEvidenceTable(evidence.roleCatalogRows, [
              { label: "Tenant", value: (item) => get(item, "Tenant") },
              { label: "Role", value: (item) => get(item, "BusinessRoleID") },
              { label: "Role description", value: (item) => get(item, "BusinessRoleDescription") },
              { label: "Catalog", value: (item) => get(item, "CatalogID") }
            ], "No role assignments found for scope-linked catalogs.")}
          </div>
        ` : ""}
      </div>
    `;
  }

  function extChangedRows() {
    return state.data.changedExtensibility.filter(hasUsefulValues);
  }

  function extObjectName(row) {
    return get(row, "Technical Name", "Technical Object Name", "Object Name", "Title(Title)");
  }

  function extObjectDescription(row) {
    return get(row, "Description", "Description(Description)", "Change Detail", "Title(Title)") || extObjectName(row);
  }

  function extObjectCategory(row) {
    return get(row, "Extensibility Type", "Category(Category)", "Category", "Type(Type)") || "Extensibility";
  }

  function splitCustomCdsNames(value) {
    return uniqueList(String(value || "")
      .split(/[,;\n]/)
      .map((item) => item.trim())
      .filter(Boolean));
  }

  function objectToken(value) {
    return upperKey(value).replace(/[^A-Z0-9]/g, "");
  }

  function objectTokens(values) {
    return uniqueList(values)
      .map(objectToken)
      .filter((value) => value.length >= 4);
  }

  function whereUsedRowsForChange(change) {
    const technical = objectToken(extObjectName(change));
    if (!technical) return [];
    return uniqueRowsBy(
      state.data.whereUsedCustomCds.filter((row) => objectToken(get(row, "Custom CDS Views(Primary Data Source)")) === technical),
      (row) => [get(row, "Custom CDS Views(Primary Data Source)"), get(row, "Secondary CDS Views(Secondary CDS Views)")].join("|")
    );
  }

  function customCdsNamesForChange(change) {
    return uniqueList(whereUsedRowsForChange(change).flatMap((row) => splitCustomCdsNames(get(row, "Secondary CDS Views(Secondary CDS Views)"))));
  }

  function inventoryRowsForObjectName(name) {
    const token = objectToken(name);
    if (!token) return [];
    return uniqueRowsBy(
      state.data.extensibilityInventory.filter((row) => {
        const id = objectToken(get(row, "Item ID"));
        const description = objectToken(get(row, "Item Description"));
        return id === token || description === token || id.includes(token) || token.includes(id);
      }),
      (row) => [get(row, "Item Type"), get(row, "Item ID"), get(row, "Item Description")].join("|")
    );
  }

  function directInventoryRowsForChange(change) {
    return inventoryRowsForObjectName(extObjectName(change));
  }

  function extChangeSourceText(change) {
    return [extObjectName(change), extObjectDescription(change), extObjectCategory(change)].filter(Boolean).join(" - ");
  }

  function integrationTermsForChange(change) {
    const technical = upperKey(extObjectName(change));
    const description = extObjectDescription(change);
    const baseTerms = [extObjectName(change), description];
    const mapped = {
      API_BUSINESS_PARTNER: ["SAP_COM_0008", "SAP_COM_0091", "Business Partner", "Customer and Supplier"],
      API_SALES_ORDER_SRV: ["SAP_COM_0109", "Sales Order Integration", "Sales Order"],
      API_SALES_ORDER_SIMULATION_SRV: ["SAP_COM_0109", "Sales Order Simulation", "Sales Order"],
      API_SLSPRICINGCONDITIONRECORD_SRV: ["SAP_COM_0294", "Pricing Data Integration", "Pricing"],
      APOC_ADD_EMAIL_RECIPIENTS: ["Output", "Email Recipients", "Output Management"],
      FBL_PAYM_ADV_PRINT_ITEM: ["Payment Advice", "Payment", "Printing"]
    };
    return uniqueList([...baseTerms, ...(mapped[technical] || [])]).filter((term) => normalizeLookup(term).length >= 3);
  }

  function customCdsIntegrationTerms(cdsName) {
    const raw = String(cdsName || "");
    const withoutPrefix = raw.replace(/^YY1[_-]?/i, "");
    const words = withoutPrefix.split(/[_\s-]+/).filter((part) => part.length >= 3);
    return uniqueList([raw, withoutPrefix, words.join(" "), ...words]).filter((term) => normalizeLookup(term).length >= 3);
  }

  function publicCloudMatchesForTerms(terms) {
    const matches = [];
    const addMatches = (rows, kind, titleKeys, searchKeys, keyFn) => {
      uniqueRowsBy(
        rows.filter((row) => strictExtCloudTermsMatch(row, terms, searchKeys)),
        keyFn
      ).forEach((row) => matches.push(btpReviewRow(row, kind, get(row, ...titleKeys))));
    };
    addMatches(
      currentPublicCloudRows("communicationArrangements"),
      "Communication arrangement",
      ["ArrangementName", "ScenarioID", "Scenario"],
      ["ArrangementName", "ScenarioID", "Scenario", "CommunicationSystem"],
      (row) => [get(row, "Tenant"), get(row, "ArrangementName"), get(row, "ScenarioID"), get(row, "CommunicationSystem")].join("|")
    );
    addMatches(
      currentPublicCloudRows("btpHtml5Applications"),
      "BTP HTML5 app",
      ["ApplicationName", "ApplicationDisplayName"],
      ["ApplicationName", "ApplicationURL", "Provider"],
      (row) => [get(row, "Subaccount"), get(row, "ApplicationName")].join("|")
    );
    addMatches(
      currentPublicCloudRows("btpDestinations"),
      "BTP destination",
      ["Name"],
      ["Name", "Description", "Authentication", "ProxyType"],
      (row) => [get(row, "Subaccount"), get(row, "Name")].join("|")
    );
    addMatches(
      currentPublicCloudRows("btpServiceSubscriptions"),
      "BTP service subscription",
      ["ApplicationDisplayName", "ApplicationName"],
      ["ApplicationName", "ApplicationDisplayName", "Provider"],
      (row) => [get(row, "Subaccount"), get(row, "ApplicationName"), get(row, "ApplicationDisplayName")].join("|")
    );
    return uniqueRowsBy(matches, (row) => [get(row, "btpKind"), getTitle(row), get(row, "Tenant", "Subaccount"), get(row, "ScenarioID")].join("|"));
  }

  function strictExtCloudTermsMatch(row, terms, keys) {
    const rawText = keys.map((key) => get(row, key)).join(" ");
    const text = normalizeLookup(rawText);
    const compactText = objectToken(rawText);
    const customScenario = /^YY1/i.test(get(row, "ScenarioID", "ArrangementName", "Name", "ApplicationName"));
    return terms.some((term) => {
      const raw = String(term || "").trim();
      const normalized = normalizeLookup(raw);
      const compact = objectToken(raw);
      if (!normalized || normalized.length < 3) return false;
      if (/^(SAP_COM_\d+|API_|I_|APOC_|FBL_)/i.test(raw)) return compact && compactText.includes(compact);
      if (customScenario && /^YY1/i.test(raw)) {
        const words = normalized
          .split(" ")
          .filter((word) => word.length >= 3 && !["yy1", "cds", "data", "view", "custom", "com", "scen"].includes(word));
        const hits = words.filter((word) => text.includes(word)).length;
        if (words.length >= 2 && hits >= 2) return true;
        if (words.length === 1 && words[0].length >= 5 && text.includes(words[0])) return true;
      }
      const specificPhrases = [
        "business partner",
        "customer and supplier",
        "sales order integration",
        "sales order simulation",
        "pricing data integration",
        "payment advice",
        "email recipients",
        "output management",
        "printing"
      ];
      return normalized.length >= 8 && specificPhrases.includes(normalized) && text.includes(normalized);
    });
  }

  function testActionForExtChange(change, objectName = "") {
    const category = extObjectCategory(change);
    const technical = extObjectName(change);
    const label = objectName || technical;
    if (/API|Integration|Side-by-side/i.test(category) || /^API_/i.test(technical)) {
      return `Run one realistic payload through the consumer of ${technical}; confirm success/error handling, payload fields, and response after upgrade.`;
    }
    if (/BAdI|Output|Recipient|Payment Advice|Adaptation/i.test(`${category} ${technical} ${extObjectDescription(change)}`)) {
      return `Trigger the business process that uses ${technical}; confirm the adapted output/recipient/print item still appears as expected.`;
    }
    if (/CDS|Developer/i.test(category) || /^I_/i.test(technical)) {
      return `Activate and preview ${label}; reconcile the consuming report, SAC/PBI model, or custom app output against a known result.`;
    }
    return `Review ${technical}; test only if CFA has a custom object, integration, or process owner using it.`;
  }

  function inAppImpactReviewRow(baseRow, change, options = {}) {
    const title = options.title || get(baseRow, "Item Description") || get(baseRow, "Item ID") || extObjectName(change);
    const objectId = get(baseRow, "Item ID") || options.objectId || title;
    const objectType = get(baseRow, "Item Type") || options.objectType || "SAP changed extensibility object";
    const usage = [
      `SAP change: ${extObjectName(change)}`,
      options.match || "RASD change signal",
      options.customerObject ? `Customer object: ${options.customerObject}` : ""
    ].filter(Boolean).join(" | ");
    return {
      ...baseRow,
      reviewKey: `inapp-impact:${extObjectName(change)}:${objectId}`,
      "Title(Title)": title,
      "Description(Description)": `${extChangeSourceText(change)} ${usage}`,
      "Item Description": title,
      "Item ID": objectId,
      "Item Type": objectType,
      extChange: change,
      extImpactEvidence: {
        score: options.noCustomerMatch ? 58 : 100,
        label: options.noCustomerMatch ? "No CFA match found" : options.label || "CFA object impacted",
        tone: options.noCustomerMatch ? "neutral" : "danger",
        evidence: usage,
        next: options.noCustomerMatch
          ? `No customer inventory match found. Do not test unless an owner confirms CFA uses ${extObjectName(change)}.`
          : testActionForExtChange(change, objectId)
      }
    };
  }

  function inAppImpactRows() {
    const rows = [];
    extChangedRows().forEach((change) => {
      const directRows = directInventoryRowsForChange(change);
      directRows.forEach((row) => rows.push(inAppImpactReviewRow(row, change, { label: "Direct object match", match: "Customer inventory directly matches changed SAP object" })));
      const cdsNames = customCdsNamesForChange(change);
      cdsNames.forEach((cdsName) => {
        const inventoryRows = inventoryRowsForObjectName(cdsName);
        if (inventoryRows.length) {
          inventoryRows.forEach((row) => rows.push(inAppImpactReviewRow(row, change, {
            label: "Custom CDS dependency",
            match: `Uses changed SAP CDS ${extObjectName(change)}`,
            customerObject: cdsName
          })));
        } else {
          rows.push(inAppImpactReviewRow({}, change, {
            label: "Custom CDS dependency",
            title: cdsName,
            objectId: cdsName,
            objectType: "Custom CDS View",
            match: `Where-used says this custom CDS uses changed SAP CDS ${extObjectName(change)}`,
            customerObject: cdsName
          }));
        }
      });
    });
    return uniqueRowsBy(rows, (row) => reviewKey(row)).filter(hasUsefulValues);
  }

  function unmatchedInAppExtChanges() {
    return extChangedRows().filter((change) => {
      if (/^API_/i.test(extObjectName(change))) return false;
      return !directInventoryRowsForChange(change).length && !customCdsNamesForChange(change).length;
    });
  }

  function btpTouchpointName(row) {
    return get(row, "ArrangementName", "Name", "ApplicationName", "ApplicationDisplayName") || getTitle(row);
  }

  function btpTouchpointSystem(row) {
    return get(row, "CommunicationSystem", "Subaccount", "Tenant", "Provider", "Authentication") || "Not supplied";
  }

  function btpGroupScenario(row) {
    const kind = get(row, "btpKind");
    if (/Communication arrangement/i.test(kind)) return get(row, "ScenarioID") || get(row, "Scenario") || btpTouchpointName(row);
    return btpTouchpointName(row);
  }

  function btpGroupTitle(row) {
    const kind = get(row, "btpKind");
    if (/Communication arrangement/i.test(kind)) {
      const scenarioId = get(row, "ScenarioID");
      const scenario = get(row, "Scenario");
      return [scenarioId, scenario].filter(Boolean).join(" - ") || btpTouchpointName(row);
    }
    return btpTouchpointName(row);
  }

  function btpGroupKey(row) {
    return [
      extObjectName(row.extChange || {}),
      get(row, "btpKind"),
      btpGroupScenario(row),
      row.extCustomerDependency || "",
      extEvidence(row).label
    ].join("|");
  }

  function groupedTouchpoints(row) {
    return row.groupedRows?.length ? row.groupedRows : [row];
  }

  function groupedTouchpointSummary(row) {
    const rows = groupedTouchpoints(row);
    const systems = uniqueList(rows.map(btpTouchpointSystem).filter(Boolean));
    if (rows.length <= 1) return "";
    return `${rows.length} extracted touchpoints / ${systems.length} distinct system${systems.length === 1 ? "" : "s"}`;
  }

  function btpGroupedEvidence(row, rows) {
    const technical = extObjectName(row.extChange || {});
    const signal = extEvidence(row);
    const summary = groupedTouchpointSummary({ groupedRows: rows }) || `${get(row, "btpKind")} matched`;
    return {
      ...signal,
      evidence: `${summary} for ${technical}`,
      next: rows.length > 1
        ? `Treat as one ${technical} validation pack. Test separate rows only where the consumer system, payload, or business use is different.`
        : signal.next
    };
  }

  function groupBtpImpactRows(rows) {
    const grouped = new Map();
    rows.forEach((row) => {
      const key = btpGroupKey(row);
      if (!grouped.has(key)) grouped.set(key, []);
      grouped.get(key).push(row);
    });
    return [...grouped.entries()].map(([key, groupRows]) => {
      const first = groupRows[0];
      const evidence = btpGroupedEvidence(first, groupRows);
      const title = btpGroupTitle(first);
      return {
        ...first,
        groupedRows: groupRows,
        reviewKey: `btp-group:${key}`,
        "Title(Title)": title,
        "Description(Description)": groupRows.map((row) => Object.values(row || {}).join(" ")).join(" "),
        extImpactEvidence: evidence,
        groupTitle: title
      };
    });
  }

  function btpImpactRows() {
    const rows = [];
    extChangedRows().forEach((change) => {
      publicCloudMatchesForTerms(integrationTermsForChange(change)).forEach((row) => {
        rows.push({
          ...row,
          reviewKey: `btp-impact:${extObjectName(change)}:${get(row, "btpKind")}:${getTitle(row)}:${get(row, "Tenant", "Subaccount")}`,
          extChange: change,
          extImpactEvidence: {
            score: /^API_/i.test(extObjectName(change)) ? 100 : 82,
            label: /^API_/i.test(extObjectName(change)) ? "API consumer match" : "Integration touchpoint",
            tone: /^API_/i.test(extObjectName(change)) ? "danger" : "warning",
            evidence: `${get(row, "btpKind")} matched to SAP change ${extObjectName(change)}`,
            next: testActionForExtChange(change, getTitle(row))
          }
        });
      });
      customCdsNamesForChange(change).forEach((cdsName) => {
        publicCloudMatchesForTerms(customCdsIntegrationTerms(cdsName)).forEach((row) => {
          rows.push({
            ...row,
          reviewKey: `btp-cds-impact:${cdsName}:${get(row, "btpKind")}:${getTitle(row)}:${get(row, "Tenant", "Subaccount")}`,
          extCustomerDependency: cdsName,
          extChange: change,
          "Description(Description)": `${get(row, "Description(Description)") || ""} ${cdsName} ${extObjectName(change)}`,
          extImpactEvidence: {
            score: 92,
            label: "Custom CDS consumer",
              tone: "warning",
              evidence: `${get(row, "btpKind")} appears connected to ${cdsName}, which uses changed SAP CDS ${extObjectName(change)}`,
              next: testActionForExtChange(change, cdsName)
            }
          });
        });
      });
    });
    return uniqueRowsBy(groupBtpImpactRows(rows), (row) => reviewKey(row)).filter(hasUsefulValues);
  }

  function extImpactExplanation(inAppRows, btpRows) {
    const hiddenInventory = state.data.extensibilityInventory.length + currentPublicCloudRows("communicationArrangements").length + currentPublicCloudRows("btpHtml5Applications").length + currentPublicCloudRows("btpDestinations").length + currentPublicCloudRows("btpServiceSubscriptions").length;
    return `
      <section class="validation-map ext-impact-map">
        <div>
          <p class="system-label">Release-impact logic</p>
          <h3>Only show customer objects touched by SAP release changes.</h3>
          <p>SAP did not change the full inventory. RASD supplied ${escapeHtml(extChangedRows().length)} changed extensibility/API/CDS objects. This page now shows only CFA in-app or BTP/integration objects that match those changes or a custom CDS where-used dependency.</p>
        </div>
        <div class="validation-steps">
          <span><strong>1</strong> Start with ${escapeHtml(extChangedRows().length)} RASD changed extensibility objects</span>
          <span><strong>2</strong> Link ${escapeHtml(state.data.whereUsedCustomCds.length)} custom CDS where-used rows</span>
          <span><strong>3</strong> Show ${escapeHtml(inAppRows.length)} in-app actions and ${escapeHtml(btpRows.length)} BTP/integration actions</span>
          <span><strong>4</strong> Keep ${escapeHtml(hiddenInventory)} inventory records hidden as evidence only</span>
        </div>
      </section>
    `;
  }

  function allExtImpactRows() {
    return uniqueRowsBy([...inAppImpactRows(), ...btpImpactRows()], (row) => reviewKey(row));
  }

  function extReviewRowByKey(key) {
    const rows = allExtImpactRows();
    return rows.find((row) => reviewKeyAliases(row).includes(key)) || rows[0] || null;
  }

  function extCustomerObjectLabel(row) {
    return get(row, "Item Description") || get(row, "Item ID") || getTitle(row) || "Customer object";
  }

  function extCustomerObjectId(row) {
    return get(row, "Item ID", "ScenarioID", "ApplicationName", "Name", "ArrangementName") || getTitle(row);
  }

  function extCustomerObjectType(row) {
    return get(row, "Item Type") || get(row, "btpKind") || "Customer footprint";
  }

  function knownApiGuidance(technicalName) {
    const technical = upperKey(technicalName);
    const guides = {
      API_BUSINESS_PARTNER: {
        label: "SAP Business Partner API guidance",
        title: "Business Partner (A2X)",
        summary: "API_BUSINESS_PARTNER is the SAP S/4HANA Cloud OData API used by external consumers to read and maintain business partner, customer, and supplier master data. Treat this as an integration-contract check, not a full functional retest of business partner processing.",
        sourceStatus: "Source-backed API notes",
        whatChanged: [
          "RASD flags Business Partner (A2X) as a changed/release-relevant API object.",
          "CFA has communication arrangements or BTP destinations that can call this API, most commonly through SAP_COM_0008 Business Partner, Customer and Supplier Integration.",
          "The risk is not that all business partners changed. The risk is API contract compatibility: metadata, mandatory fields, authorisation, payload mapping, and downstream handling for the consumers that actually use the API."
        ],
        test: [
          "Start with the grouped touchpoint list. Identify the real consuming system for each distinct payload, for example MDI, SAP Build, supplier/customer blocking, or another middleware consumer.",
          "Run one read-only GET for a known business partner used by the interface. Expected result: HTTP 200, expected BP/customer/supplier fields returned, no authorisation or metadata error.",
          "If CFA creates or updates business partners through this interface, run one controlled create/update payload in the upgraded test tenant. Expected result: the intended BP/customer/supplier view is created or updated, no duplicate BP is created, and address/tax/bank/sales/company-code fields map correctly.",
          "Check the consumer log as well as the S/4 result. A successful business document is not enough if the middleware shows metadata, warning, or retry errors."
        ],
        fix: [
          "If metadata changed, refresh the OData/API metadata in the consumer, BTP destination, SAP Build app, iFlow, or middleware adapter.",
          "If payload validation fails, adjust only the failed mandatory field, enum value, filter, expand/select clause, or response parser. Do not rebuild the full integration.",
          "If authorisation fails, check SAP_COM_0008 communication user, communication arrangement, OAuth/certificate setup, and business partner API authorisations before changing mappings.",
          "Rerun the exact same read/update payload and capture request ID, response, affected BP number, and consumer log."
        ],
        references: [
          { label: "SAP Business Accelerator Hub - Business Partner API", url: "https://api.sap.com/api/API_BUSINESS_PARTNER/overview" },
          { label: "SAP Help - Business Partner, Customer and Supplier Integration", url: "https://help.sap.com/docs/SAP_S4HANA_CLOUD/0fa84c9d9c634132b7c4abb9ffdd8f06/fab3fd449cf74c6384622b98831e989e.html" }
        ]
      },
      API_SALES_ORDER_SIMULATION_SRV: {
        label: "SAP Sales Order Simulation API guidance",
        title: "Sales Order Simulation",
        summary: "API_SALES_ORDER_SIMULATION_SRV simulates a sales order request and returns pricing, availability, credit, or validation results without creating a sales order. RASD describes this release item as a performance improvement, so the useful validation is a focused response/performance check for real consumers.",
        sourceStatus: "Source-backed API notes",
        whatChanged: [
          "RASD flags Sales Order Simulation Performance for API_SALES_ORDER_SIMULATION_SRV.",
          "CFA has a BTP destination or app footprint named Sales_Order_Simulation, so the relevant question is whether anything uses that destination to call the simulation API.",
          "The risk is timeout, changed response shape, metadata refresh, or response parsing in the consuming BTP app/integration, not sales-order processing generally."
        ],
        test: [
          "Confirm the owner of the Sales_Order_Simulation destination/app and whether it is still used.",
          "Run one representative simulation payload with sold-to party, sales area, material, quantity, plant, and requested delivery date used by CFA. Expected result: simulation response succeeds and no sales order is created.",
          "Compare response time with the current baseline if available. Because SAP marks this as performance-related, record duration as part of evidence.",
          "Confirm the consumer can still parse pricing, availability, item messages, and error responses."
        ],
        fix: [
          "If the call times out, review destination timeout, payload size, expand/select usage, and middleware retry settings.",
          "If parsing fails, refresh metadata and adjust response-field mapping for the changed response structure.",
          "If authentication fails, fix the BTP destination or S/4 communication arrangement before changing the app logic.",
          "Rerun the same simulation payload and capture response time, response payload sample, and consumer log."
        ],
        references: [
          { label: "SAP Business Accelerator Hub - Sales Order Simulation API", url: "https://api.sap.com/api/API_SALES_ORDER_SIMULATION_SRV/overview" }
        ]
      },
      API_SALES_ORDER_SRV: {
        label: "SAP Sales Order API guidance",
        title: "Sales Order (A2X)",
        summary: "API_SALES_ORDER_SRV is used by external consumers to create, read, or change sales orders. Validate only the real CFA payload variants and consumers that call this API.",
        sourceStatus: "Source-backed API notes",
        whatChanged: [
          "RASD flags the Sales Order API as changed or release-relevant.",
          "CFA has an integration/BTP footprint matching this API. This should become one API contract test per distinct consumer payload, not one test for every extracted arrangement."
        ],
        test: [
          "Run one read or create/change payload used by the actual consumer in the upgraded test tenant.",
          "Confirm HTTP response, sales order result, item/pricing/partner fields, and middleware logs.",
          "If the interface only reads orders, do not create a dummy order just to test the API."
        ],
        fix: [
          "Refresh metadata and adjust only the failed payload mapping or response parser.",
          "Check communication arrangement, destination, and communication user if the failure is authentication or authorisation.",
          "Rerun the same payload and capture request/response evidence."
        ],
        references: [
          { label: "SAP Business Accelerator Hub - Sales Order API", url: "https://api.sap.com/api/API_SALES_ORDER_SRV/overview" }
        ]
      }
    };
    return guides[technical] || null;
  }

  function extRelatedWhatsNewItems(change) {
    const technical = extObjectName(change);
    const compactTechnical = objectToken(technical);
    const description = extObjectDescription(change);
    const descriptionWords = normalizeLookup(description)
      .split(" ")
      .filter((word) => word.length >= 5 && !["changed", "released", "views", "extensibility", "object"].includes(word));
    const candidates = [
      ...state.data.usedPersonalizedWhatsNew,
      ...state.data.activatedPersonalizedWhatsNew,
      ...state.data.completeWhatsNew,
      ...state.data.completeExtensibility
    ];

    return uniqueRowsBy(
      candidates.filter((row) => {
        const text = [
          getTitle(row),
          get(row, "Description(Description)", "Description"),
          get(row, "Impacted Artifacts(Impacted Artifacts)", "Impacted Artifacts"),
          get(row, "Category(Category)", "Category")
        ].join(" ");
        const compactText = objectToken(text);
        const normalizedText = normalizeLookup(text);
        if (compactTechnical && compactText.includes(compactTechnical)) return true;
        const wordHits = descriptionWords.filter((word) => normalizedText.includes(word)).length;
        return descriptionWords.length >= 3 && wordHits >= Math.min(4, descriptionWords.length);
      }),
      (row) => whatsNewLink(row) || getTitle(row)
    ).slice(0, 6);
  }

  function extSourceLinksForChange(change) {
    const known = knownApiGuidance(extObjectName(change));
    return [
      ...(known?.references || []),
      ...extRelatedWhatsNewItems(change)
      .map((row) => ({ label: `SAP What's New - ${getTitle(row)}`, url: whatsNewLink(row) }))
      .filter((link) => link.url)
    ];
  }

  function extPrimarySourcePanel(row) {
    const known = knownApiGuidance(extObjectName(row.extChange || {}));
    if (known) {
      return `
        <div class="source-empty source-api-note">
          <strong>${escapeHtml(known.title)}</strong>
          <p>${escapeHtml(known.summary)}</p>
          <div class="source-guidance-grid compact-source-grid">
            <div class="source-guidance-section">
              <span>What to validate</span>
              <ul>${known.test.slice(0, 3).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </div>
            <div class="source-guidance-section">
              <span>If it fails</span>
              <ul>${known.fix.slice(0, 3).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </div>
          </div>
          <div class="source-links">${known.references.map((reference) => `<a href="${escapeHtml(reference.url)}" target="_blank" rel="noreferrer">${escapeHtml(reference.label)}</a>`).join("")}</div>
        </div>
      `;
    }
    const related = extRelatedWhatsNewItems(row.extChange || {});
    const primary = related[0];
    if (!primary) {
      return `
        <div class="source-empty">
          <strong>No source article matched in the loaded RASD/SAP Help extract.</strong>
          <p>The fix plan below is based on the RASD changed object plus CFA inventory evidence. Add a SAP Note / Help URL later if the reviewer finds one.</p>
        </div>
      `;
    }
    const guidance = sourceBackedGuidancePanel(primary, { open: true, buttonLabel: "SAP source detail" });
    if (guidance) return guidance;
    return `
      <div class="source-empty">
        <strong>${escapeHtml(getTitle(primary))}</strong>
        <p>${escapeHtml(shorten(get(primary, "Description(Description)", "Description"), 900))}</p>
        ${whatsNewLink(primary) ? `<div class="source-links"><a href="${escapeHtml(whatsNewLink(primary))}" target="_blank" rel="noreferrer">Open SAP What's New item</a></div>` : ""}
      </div>
    `;
  }

  function extImpactType(row) {
    const change = row.extChange || {};
    const signal = extEvidence(row);
    const text = `${signal.label} ${row.extGroup || ""} ${extCustomerObjectType(row)} ${get(row, "btpKind")} ${extObjectCategory(change)} ${extObjectName(change)} ${extObjectDescription(change)}`;
    if (/Custom CDS consumer/i.test(text)) return "btp-cds-consumer";
    if (/Custom CDS dependency|Custom CDS View|CDS/i.test(text)) return "custom-cds";
    if (/API consumer|^API_|Integration/i.test(text)) return "api";
    if (/Output|Recipient|Payment Advice|Printing|BAdI/i.test(text)) return "output";
    if (/BTP|HTML5|Destination|Service subscription|Communication arrangement/i.test(text)) return "btp";
    return "generic";
  }

  function extValidationPlan(row) {
    const change = row.extChange || {};
    const technical = extObjectName(change) || "changed SAP object";
    const sapDescription = extObjectDescription(change);
    const customerTitle = extCustomerObjectLabel(row);
    const customerId = extCustomerObjectId(row);
    const customerType = extCustomerObjectType(row);
    const signal = extEvidence(row);
    const type = extImpactType(row);
    const knownApi = knownApiGuidance(technical);
    const touchpoints = groupedTouchpoints(row);
    const groupedSummary = groupedTouchpointSummary(row);
    const touchpointList = uniqueList(touchpoints.map((item) => {
      const name = btpTouchpointName(item);
      const systemName = btpTouchpointSystem(item);
      const scenarioName = get(item, "ScenarioID", "Scenario", "ApplicationName", "Name");
      return [name, scenarioName && scenarioName !== name ? scenarioName : "", systemName].filter(Boolean).join(" / ");
    })).slice(0, 6);
    const collection = get(row, "Software Collection", "Software Collection 2");
    const system = get(row, "CommunicationSystem", "Subaccount", "Tenant", "Provider", "Authentication");
    const scenario = get(row, "ScenarioID", "Scenario", "ApplicationName", "Name");
    const usage = [
      collection ? `Software collection: ${collection}` : "",
      system ? `System/subaccount: ${system}` : "",
      scenario ? `Scenario/object key: ${scenario}` : ""
    ].filter(Boolean);

    const base = {
      whatChanged: knownApi?.whatChanged || [
        `${technical} is the SAP object RASD flagged for this release.`,
        sapDescription && sapDescription !== technical ? `RASD description: ${sapDescription}.` : "",
        `CFA evidence: ${signal.evidence}.`
      ].filter(Boolean),
      whyItMatters: [
        knownApi
          ? `${customerTitle} appears because CFA has an extracted consumer that can call ${technical}. Validate the API contract only for actual consumer systems and payload variants.`
          : `${customerTitle} appears because it directly matches the RASD changed object or a custom CDS where-used dependency.`,
        groupedSummary ? `${groupedSummary}. Grouped because this is the same validation pattern; split only if owner, payload, or business outcome differs.` : "",
        ...touchpointList.map((item) => `Touchpoint: ${item}.`),
        ...(touchpointList.length ? [] : usage)
      ].filter(Boolean),
      test: [],
      fix: [],
      evidence: [
        "Review decision: relevant, not relevant, or owner follow-up needed.",
        "Actual owner/consumer confirmed for each distinct payload or destination used.",
        "Request/response, application log, activation result, report reconciliation, or screenshot proving the changed object still works.",
        "If not relevant: record the system/destination/arrangement that is no longer used and who confirmed it."
      ]
    };

    if (type === "custom-cds") {
      base.test = [
        `Open the Custom CDS Views app in the upgraded test tenant and search for ${customerId || customerTitle}.`,
        `Open the data source / dependency section and confirm it uses or is linked to ${technical}.`,
        "Run Check / Preview / Publish validation for the custom CDS. Do not run a full scope-item script unless the custom view feeds a business process that changed.",
        "Preview with a small realistic filter, such as company code, ledger, fiscal year/period, supplier/customer, or plant depending on the view.",
        "Open the consuming report, SAC/PBI model, custom analytical query, custom app, or integration that uses this CDS and reconcile one known result against a standard SAP app or a known production output."
      ];
      base.fix = [
        "If activation fails, open the error and identify whether SAP removed, renamed, restricted, or changed a field/data source used by the custom CDS.",
        "Replace unsupported fields with released alternatives, adjust joins/filters/parameters, then check and publish the custom CDS again.",
        "If the consuming SAC/PBI/report model fails, refresh metadata and remap changed fields before rerunning the report.",
        "Move the corrected object through the normal public-cloud software collection route only after the preview and consumer output reconcile."
      ];
    } else if (type === "btp-cds-consumer") {
      base.test = [
        `Confirm which consumer calls ${customerId || customerTitle}; this row indicates it is connected to a custom CDS that depends on ${technical}.`,
        "Run the consuming app, report refresh, SAC/PBI import, or API call with one small data selection.",
        "Check for metadata/schema errors first, then compare the returned totals/row count/field values with a known result.",
        "If the consumer is a BTP app or destination, confirm the destination still points to the correct S/4 tenant and authentication still works."
      ];
      base.fix = [
        "Refresh the OData/API metadata in the consuming model or BTP app.",
        "Remap renamed or removed fields, redeploy the app/flow/model, then rerun the same small test.",
        "If authentication or destination fails, correct the BTP destination or S/4 communication arrangement before changing business logic.",
        "Record the exact consumer owner because this cannot be closed by the SAP functional team alone."
      ];
    } else if (type === "api") {
      base.test = knownApi?.test || [
        `Identify the interface, BTP app, destination, or communication arrangement that consumes ${technical}.`,
        "Run one realistic payload in the upgraded test tenant, not a dummy ping. Include the minimum business fields used by CFA.",
        "Confirm the response status, error handling, returned payload fields, and the created/changed SAP business document or API result.",
        "Check the middleware/BTP monitor for warnings even if the business document was created successfully."
      ];
      base.fix = knownApi?.fix || [
        "If the payload fails, compare the failed field or response with the SAP API metadata and RASD change text.",
        "Adjust mapping, mandatory fields, enum values, filters, or response parsing in the BTP app/iFlow/consumer.",
        "If the communication arrangement or destination is the issue, fix credentials, certificate, URL, OAuth scope, or communication user first.",
        "Redeploy the integration and rerun the same payload so the evidence proves the fix."
      ];
    } else if (type === "output") {
      base.test = [
        `Trigger the business process that uses ${technical}, such as output, print item, payment advice, or recipient determination.`,
        "Confirm the expected form/output/recipient appears for the same business role and company code used by CFA.",
        "Check the output log or application monitor for warnings, not just the UI result."
      ];
      base.fix = [
        "If the output is missing, check the custom logic/BAdI/adaptation first, then the communication arrangement or print destination.",
        "Update recipient or output rules only for the changed object; avoid rebuilding the full output setup.",
        "Retest with the same document and capture output log evidence."
      ];
    } else {
      base.test = [
        `Open or run the CFA object ${customerTitle} and confirm whether it calls ${technical}.`,
        "If there is no actual call, owner, report, or process use, mark it not relevant and keep the match evidence.",
        "If it is used, run the smallest real business check and capture result evidence."
      ];
      base.fix = [
        "If it fails, isolate whether the issue is activation, authorization, metadata, payload mapping, or business output.",
        "Fix the smallest broken dependency and rerun the same validation step.",
        "Assign an owner if the object still exists but nobody can explain its use."
      ];
    }

    return base;
  }

  function extSameChangeRows(row) {
    const technical = extObjectName(row.extChange || {});
    if (!technical) return [];
    return allExtImpactRows().filter((item) => extObjectName(item.extChange || {}) === technical);
  }

  function extInfoList(items) {
    return `<ul class="fix-step-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  }

  function extSourceList(row) {
    const links = extSourceLinksForChange(row.extChange || {});
    if (!links.length) return `<p class="muted">No SAP What&apos;s New source link matched this extensibility row in the loaded extract.</p>`;
    return `<div class="source-links">${links.map((link) => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`).join("")}</div>`;
  }

  function renderExtensibilityReview() {
    const row = extReviewRowByKey(state.selected.extReviewKey);
    if (!row) {
      pageContent.innerHTML = empty("No extensibility fix plan is available.");
      return;
    }
    state.selected.extReviewKey = reviewKey(row);
    const change = row.extChange || {};
    const signal = extEvidence(row);
    const plan = extValidationPlan(row);
    const relatedRows = extSameChangeRows(row);
    const otherRows = relatedRows.filter((item) => reviewKey(item) !== reviewKey(row)).slice(0, 8);
    const title = extCustomerObjectLabel(row);
    const sourceRows = extRelatedWhatsNewItems(change);
    const knownApi = knownApiGuidance(extObjectName(change));
    const sourceCount = sourceRows.length + (knownApi?.references?.length || 0);
    const groupedCount = Math.max(groupedTouchpoints(row).length - 1, 0);
    pageContent.innerHTML = `
      <div class="scope-review-page ext-review-page">
        <section class="scope-review-hero ext-review-hero">
          <div>
            <div class="badges">
              ${badge(signal.label, signal.tone)}
              ${badge(extObjectCategory(change), "teal")}
              ${badge(extObjectName(change), "blue")}
            </div>
            <div class="scope-review-title-row">
              <h3>${escapeHtml(title)}</h3>
              ${reviewSelect(row, true)}
            </div>
            <p>${escapeHtml(signal.next)}</p>
            <div class="review-action-row">
              ${reviewNoteToggle(row, "Evidence, owner, or why this extension is not relevant")}
            </div>
          </div>
        </section>

        <section class="scope-review-metrics ext-review-metrics">
          ${evidenceMetric("SAP changed object", extObjectName(change) || "-", extObjectDescription(change))}
          ${evidenceMetric("CFA object", extCustomerObjectId(row) || title, extCustomerObjectType(row))}
          ${evidenceMetric("Grouped touchpoints", groupedCount, groupedCount ? "Same validation pack" : "Single consumer row")}
          ${evidenceMetric("SAP sources", sourceCount, sourceCount ? "Matched API / SAP source links" : "No source link loaded")}
        </section>

        <section class="ext-fix-layout">
          <article class="scope-review-panel ext-fix-main">
            <p class="system-label">What changed</p>
            <h3>Release impact and CFA footprint</h3>
            ${extInfoList(plan.whatChanged)}
            <p class="system-label ext-section-label">Why this matters for CFA</p>
            ${extInfoList(plan.whyItMatters)}
            ${extSourceList(row)}
          </article>
          <article class="scope-review-panel ext-fix-main">
            <p class="system-label">SAP source detail</p>
            ${extPrimarySourcePanel(row)}
          </article>
        </section>

        <section class="scope-review-list ext-fix-panels">
          <article class="scope-review-panel">
            <p class="system-label">Exact validation steps</p>
            <h3>What to test</h3>
            ${extInfoList(plan.test)}
          </article>
          <article class="scope-review-panel">
            <p class="system-label">If the test fails</p>
            <h3>How to fix</h3>
            ${extInfoList(plan.fix)}
          </article>
        </section>

        <section class="scope-review-panel">
          <p class="system-label">Evidence to capture</p>
          ${extInfoList(plan.evidence)}
        </section>

        ${otherRows.length ? `
          <section class="scope-review-panel">
            <p class="system-label">Other CFA rows touched by the same SAP change</p>
            <div class="mini-table-wrap">
              <table class="mini-table">
                <thead><tr><th>Object</th><th>Type</th><th>Signal</th><th>Next step</th></tr></thead>
                <tbody>
                  ${otherRows.map((item) => {
                    const itemSignal = extEvidence(item);
                    return `
                      <tr>
                        <td><button class="row-link" type="button" data-open-ext-review="${escapeHtml(reviewKey(item))}">${escapeHtml(extCustomerObjectLabel(item))}</button><span class="row-meta">${escapeHtml(extCustomerObjectId(item))}</span></td>
                        <td>${escapeHtml(extCustomerObjectType(item))}</td>
                        <td>${badge(itemSignal.label, itemSignal.tone)}</td>
                        <td>${escapeHtml(itemSignal.next)}</td>
                      </tr>
                    `;
                  }).join("")}
                </tbody>
              </table>
            </div>
          </section>
        ` : ""}
      </div>
    `;
  }

  function renderExtensibility() {
    const inAppRows = sortByReview(applyGlobalFilters(inAppImpactRows(), false), extRiskSort);
    const btpRows = sortByReview(applyGlobalFilters(btpImpactRows(), false), extRiskSort);
    const rasdExtCount = state.data.changedExtensibility.length;
    const customCdsWhereUsedCount = state.data.whereUsedCustomCds.length;
    const hiddenInventoryCount = state.data.extensibilityInventory.length;
    const loadedIntegrationFootprint = currentPublicCloudRows("communicationArrangements").length + currentPublicCloudRows("btpHtml5Applications").length + currentPublicCloudRows("btpDestinations").length + currentPublicCloudRows("btpServiceSubscriptions").length;
    pageContent.innerHTML = `
      <div class="filter-row">
        ${reviewSummary([...inAppRows, ...btpRows])}
      </div>
      ${extImpactExplanation(inAppRows, btpRows)}
      <div class="evidence-strip ext-evidence-strip">
        ${evidenceMetric("RASD extensibility changes", rasdExtCount, "APIs/CDS/functions changed by SAP")}
        ${evidenceMetric("RASD custom CDS where-used", customCdsWhereUsedCount, "Customer CDS views linked to SAP CDS changes")}
        ${evidenceMetric("In-app actions", inAppRows.length, "Objects that need a validation decision")}
        ${evidenceMetric("BTP / integration actions", btpRows.length, "Matched touchpoints only")}
        ${evidenceMetric("No in-app match", unmatchedInAppExtChanges().length, "Changed SAP objects with no CFA in-app object found")}
        ${evidenceMetric("Inventory hidden", hiddenInventoryCount + loadedIntegrationFootprint, "Loaded as evidence, not a worklist")}
      </div>
      <div class="ext-two-part">
        <section class="ext-section">
          <div class="ext-section-heading">
            <div>
              <p class="system-label">Part 1</p>
              <h3>In-app extensibility to validate</h3>
              <p>Only custom CDS, custom logic/BAdIs, custom fields, forms, or SAP extension points that match a RASD changed object or custom CDS where-used dependency.</p>
              <span class="source-row section-sources">${extSourceLinks("inapp")}</span>
            </div>
            <div class="review-summary">${extGroupSummary(inAppRows)}</div>
          </div>
          <div class="table-panel ext-table-panel">${inAppExtTable(inAppRows)}</div>
        </section>
        <section class="ext-section">
          <div class="ext-section-heading">
            <div>
              <p class="system-label">Part 2</p>
              <h3>BTP, side-by-side and integrations to validate</h3>
              <p>Only BTP apps, destinations, services, and S/4 communication arrangements that match a changed API/CDS object or a CFA custom CDS consumer.</p>
              <span class="source-row section-sources">${extSourceLinks("btp")}</span>
            </div>
            <div class="review-summary">${extGroupSummary(btpRows)}</div>
          </div>
          <div class="table-panel ext-table-panel">${btpExtTable(btpRows)}</div>
        </section>
      </div>
    `;
  }

  function currentPublicCloudRows(key) {
    return state.data.publicCloud?.[key] || [];
  }

  function numericValue(row, key) {
    const value = Number(get(row, key));
    return Number.isFinite(value) ? value : 0;
  }

  function inAppReviewRow(row) {
    return {
      ...row,
      reviewKey: `inapp-ext:${get(row, "Item Type")}:${get(row, "Item ID") || get(row, "Item Description")}`,
      "Title(Title)": get(row, "Item Description") || get(row, "Item ID"),
      "Description(Description)": [
        get(row, "Item ID"),
        get(row, "Item Type"),
        get(row, "Software Collection"),
        get(row, "Rework Priority"),
        get(row, "Rework Required")
      ].filter(Boolean).join(" ")
    };
  }

  function inAppExtensibilityRows() {
    return state.data.extensibilityInventory.map(inAppReviewRow).filter(hasUsefulValues);
  }

  function textIncludesAny(text, terms) {
    const hay = String(text || "").toLowerCase();
    return terms.some((term) => term && hay.includes(String(term).toLowerCase()));
  }

  function inventoryTerms(row) {
    return uniqueList([
      get(row, "Item ID")
    ]).filter(Boolean);
  }

  function rasdExtText(row) {
    return [
      get(row, "Technical Name"),
      get(row, "Description"),
      get(row, "Extensibility Type"),
      get(row, "Application Component"),
      get(row, "Change Type"),
      get(row, "Change Detail"),
      get(row, "Additional Information")
    ].join(" ");
  }

  function inventoryRasdHits(row) {
    const itemId = upperKey(get(row, "Item ID"));
    if (!itemId || itemId.length < 5) return [];
    return state.data.changedExtensibility.filter((item) => {
      const technical = upperKey(get(item, "Technical Name"));
      return technical && (technical === itemId || itemId.includes(technical) || technical.includes(itemId));
    });
  }

  function inventoryWhereUsedHits(row) {
    const terms = inventoryTerms(row).map(upperKey);
    return state.data.whereUsedCustomCds.filter((item) => {
      const text = upperKey([
        get(item, "Custom CDS Views(Primary Data Source)"),
        get(item, "Secondary CDS Views(Secondary CDS Views)")
      ].join(" "));
      return terms.some((term) => term && text.includes(term));
    });
  }

  function inAppExtEvidence(row) {
    const rasdHits = inventoryRasdHits(row);
    const cdsHits = inventoryWhereUsedHits(row);
    const type = get(row, "Item Type");
    const usesSapObjects = numericValue(row, "Uses SAP Objects");
    const usedBy = numericValue(row, "Used By");
    const uses = numericValue(row, "Uses");
    const rework = get(row, "Rework Required") || get(row, "Rework Priority");
    if (rasdHits.length) {
      return {
        score: 100,
        label: "RASD direct hit",
        tone: "danger",
        evidence: `${rasdHits.length} RASD changed object match`,
        next: "Open the object and test the consuming app/API/report before upgrade."
      };
    }
    if (cdsHits.length) {
      return {
        score: 90,
        label: "RASD CDS dependency",
        tone: "warning",
        evidence: `${cdsHits.length} custom CDS where-used match`,
        next: "Activate the custom CDS and reconcile the consuming report/output."
      };
    }
    if (/high|medium|x|yes|true/i.test(String(rework))) {
      return {
        score: 82,
        label: "Rework flagged",
        tone: "warning",
        evidence: `Inventory rework priority: ${rework}`,
        next: "Check the Extensibility Inventory dependency and close the rework item."
      };
    }
    if (usesSapObjects > 0) {
      return {
        score: 70,
        label: "SAP object dependency",
        tone: "teal",
        evidence: `${usesSapObjects} SAP object dependency`,
        next: "Check whether any referenced SAP object appears in RASD changed APIs/CDS or app changes."
      };
    }
    if (/Business Role|Custom Catalog Extension|UI Flexibility|Form Template/i.test(type)) {
      return {
        score: 45,
        label: "Access/UI footprint",
        tone: "green",
        evidence: `${type}; uses ${uses}, used by ${usedBy}`,
        next: "Validate only if the linked app/catalog/page is in the release change list."
      };
    }
    return {
      score: 20,
      label: "Inventory only",
      tone: "neutral",
      evidence: "No current RASD match found in the loaded data",
      next: "Keep visible for audit; mark not relevant if no owner or used process."
    };
  }

  function extRiskSort(a, b) {
    return extEvidence(a).score === extEvidence(b).score
      ? getTitle(a).localeCompare(getTitle(b))
      : extEvidence(b).score - extEvidence(a).score;
  }

  function extEvidence(row) {
    if (row.extImpactEvidence) return row.extImpactEvidence;
    return row.extGroup === "btp" ? btpEvidence(row) : inAppExtEvidence(row);
  }

  function extGroupSummary(rows) {
    const progress = reviewProgress(rows);
    const highSignal = rows.filter((row) => extEvidence(row).score >= 80).length;
    return `
      <span>${escapeHtml(progressText(progress))}</span>
      <span>${escapeHtml(highSignal)} high signal</span>
      <span>${escapeHtml(rows.length)} total</span>
    `;
  }

  function extSourceLinks(type = "inapp") {
    const common = [
      { label: "SAP Help - Extensibility Inventory", url: "https://help.sap.com/docs/SAP_S4HANA_CLOUD/0f69f8fb28ac4bf48d2b57b9637e81fa/fcf72df4f7c245f1bfea123dbec0613d.html" },
      { label: "SAP Help - Custom Logic", url: "https://help.sap.com/docs/SAP_S4HANA_CLOUD/0f69f8fb28ac4bf48d2b57b9637e81fa/3aa57e5b9a9f46218ef8cc38d703c8f4.html" },
      { label: "SAP Help - Communication Arrangements", url: "https://help.sap.com/docs/SAP_S4HANA_CLOUD/0f69f8fb28ac4bf48d2b57b9637e81fa/fab3fd449cf74c6384622b98831e989e.html" }
    ];
    const btp = [
      { label: "SAP Help - BTP Destinations", url: "https://help.sap.com/docs/connectivity/sap-btp-connectivity-cf/http-destinations" },
      { label: "SAP Help - HTML5 Application Repository", url: "https://help.sap.com/docs/btp/sap-business-technology-platform/html5-application-repository" },
      { label: "SAP Help - Cloud Integration", url: "https://help.sap.com/docs/integration-suite/sap-integration-suite/ci" }
    ];
    return (type === "btp" ? btp : common).map((link) => `<a class="source-chip" href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`).join("");
  }

  function inAppExtTable(rows) {
    if (!rows.length) return empty("No matching extensibility objects.");
    return `
      <table class="data-table ext-table">
        <thead><tr><th>Signal</th><th>Review</th><th>Object</th><th>Type</th><th>Usage / collection</th><th>Evidence and next action</th></tr></thead>
        <tbody>
          ${rows.map((row) => {
            const signal = extEvidence(row);
            const collection = get(row, "Software Collection") || get(row, "Software Collection 2");
            const key = reviewKey(row);
            const usage = [
              `Uses ${numericValue(row, "Uses")}`,
              `Used by ${numericValue(row, "Used By")}`,
              `SAP objects ${numericValue(row, "Uses SAP Objects")}`
            ].join(" / ");
            return `
              <tr class="${reviewRowClass(row)}">
                <td>${badge(signal.label, signal.tone)}</td>
                <td>${reviewSelect(row, true)}</td>
                <td><button class="row-link" type="button" data-open-ext-review="${escapeHtml(key)}">${escapeHtml(get(row, "Item Description") || get(row, "Item ID"))}</button><span class="row-meta">${escapeHtml(get(row, "Item ID"))}</span></td>
                <td>${escapeHtml(get(row, "Item Type") || "-")}</td>
                <td>${escapeHtml(usage)}<span class="row-meta">${escapeHtml(collection || "No software collection supplied")}</span></td>
                <td>
                  <strong>${escapeHtml(signal.evidence)}</strong>
                  <span class="row-meta">${escapeHtml(signal.next)}</span>
                  <button class="table-action compact" type="button" data-open-ext-review="${escapeHtml(key)}">Fix plan</button>
                </td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    `;
  }

  function btpReviewRow(row, kind, title, meta = {}) {
    return {
      ...row,
      ...meta,
      extGroup: "btp",
      reviewKey: `btp-ext:${kind}:${title}`,
      "Title(Title)": title,
      "Description(Description)": Object.values(row || {}).join(" "),
      btpKind: kind
    };
  }

  function btpExtensibilityRows() {
    const rows = [];
    currentPublicCloudRows("btpHtml5Applications").forEach((row) => rows.push(btpReviewRow(row, "HTML5 app", get(row, "ApplicationName"))));
    currentPublicCloudRows("btpDestinations").forEach((row) => rows.push(btpReviewRow(row, "Destination", get(row, "Name"))));
    currentPublicCloudRows("btpServiceSubscriptions").forEach((row) => rows.push(btpReviewRow(row, "Service subscription", get(row, "ApplicationDisplayName", "ApplicationName"))));
    currentPublicCloudRows("communicationArrangements").forEach((row) => rows.push(btpReviewRow(row, "Communication arrangement", get(row, "ArrangementName"), { scenario: get(row, "ScenarioID") })));
    currentPublicCloudRows("btpAccessGaps").forEach((row, index) => rows.push(btpReviewRow(row, "Access gap", get(row, "Subaccount") || `Access gap ${index + 1}`, { accessGapIndex: index + 1 })));
    return rows.filter((row) => getTitle(row));
  }

  function btpText(row) {
    return [
      getTitle(row),
      get(row, "Subaccount"),
      get(row, "Name"),
      get(row, "ApplicationName"),
      get(row, "ApplicationDisplayName"),
      get(row, "ArrangementName"),
      get(row, "ScenarioID"),
      get(row, "Scenario"),
      get(row, "CommunicationSystem"),
      get(row, "Description"),
      get(row, "Provider")
    ].join(" ");
  }

  function btpRasdHits(row) {
    const text = btpText(row);
    return state.data.changedExtensibility.filter((item) => textIncludesAny(text, [get(item, "Technical Name"), get(item, "Description")]));
  }

  function btpEvidence(row) {
    const kind = get(row, "btpKind");
    const hits = btpRasdHits(row);
    const text = btpText(row).toLowerCase();
    if (hits.length) {
      return {
        score: 95,
        label: "RASD API/CDS match",
        tone: "danger",
        evidence: `${hits.length} changed RASD API/CDS term matched`,
        next: "Find the consuming app/flow and run payload or UI regression for the changed object."
      };
    }
    if (/access gap/i.test(kind)) {
      return {
        score: 88,
        label: "Data gap",
        tone: "warning",
        evidence: "Integration Suite cockpit was not accessible",
        next: "Treat Integration Suite as not yet validated; export packages/iFlows when access is available."
      };
    }
    if (/integration_suite|sap_cpi|cpi|sap_com/i.test(text)) {
      return {
        score: 76,
        label: "Integration bridge",
        tone: "warning",
        evidence: get(row, "ScenarioID") || get(row, "CommunicationSystem") || "S/4 integration object",
        next: "Map the scenario to interface owner, payload, destination, and changed RASD API/app."
      };
    }
    if (/build|html5|destination|repo/i.test(text)) {
      return {
        score: 60,
        label: "BTP extension footprint",
        tone: "teal",
        evidence: `${kind} in ${get(row, "Subaccount") || "BTP"}`,
        next: "Confirm whether this app/destination calls S/4 public APIs impacted by RASD."
      };
    }
    return {
      score: 30,
      label: "Inventory only",
      tone: "neutral",
      evidence: `${kind} extracted, no RASD term match`,
      next: "Keep for completeness; mark not relevant if no S/4 dependency or business owner."
    };
  }

  function btpExtTable(rows) {
    if (!rows.length) return empty("No matching BTP or integration evidence.");
    return `
      <table class="data-table ext-table">
        <thead><tr><th>Signal</th><th>Review</th><th>Object</th><th>Type</th><th>System / subaccount</th><th>Evidence and next action</th></tr></thead>
        <tbody>
          ${rows.map((row) => {
            const signal = extEvidence(row);
            const key = reviewKey(row);
            const grouped = groupedTouchpoints(row);
            const groupSummary = groupedTouchpointSummary(row);
            return `
              <tr class="${reviewRowClass(row)}">
                <td>${badge(signal.label, signal.tone)}</td>
                <td>${reviewSelect(row, true)}</td>
                <td><button class="row-link" type="button" data-open-ext-review="${escapeHtml(key)}">${escapeHtml(getTitle(row))}</button><span class="row-meta">${escapeHtml(get(row, "ScenarioID", "ApplicationName", "Name") || "")}</span>${grouped.length > 1 ? `<span class="row-meta">${escapeHtml(groupSummary)}</span>` : ""}</td>
                <td>${escapeHtml(get(row, "btpKind") || "-")}</td>
                <td>${escapeHtml(get(row, "Subaccount", "Tenant") || "-")}<span class="row-meta">${escapeHtml(get(row, "CommunicationSystem", "State", "Authentication", "Provider") || "")}</span></td>
                <td>
                  <strong>${escapeHtml(signal.evidence)}</strong>
                  <span class="row-meta">${escapeHtml(signal.next)}</span>
                  ${grouped.length > 1 ? `<span class="grouped-preview">${grouped.slice(0, 3).map((item) => escapeHtml([btpTouchpointName(item), btpTouchpointSystem(item)].filter(Boolean).join(" / "))).join("<br>")}${grouped.length > 3 ? `<br>+ ${grouped.length - 3} more` : ""}</span>` : ""}
                  <button class="table-action compact" type="button" data-open-ext-review="${escapeHtml(key)}">Fix plan</button>
                </td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    `;
  }

  function renderDeprecated() {
    const merged = dedupeRows([...state.data.deprecatedObjects, ...state.data.deprecatedAttributes, ...state.data.derived.deprecatedUsed, ...state.data.deletedDeprecatedBusinessCatalogs], deprecatedKey);
    const rows = sortByReview(applyGlobalFilters(merged, false));
    const selected = selectedRow("deprecated", rows);
    pageContent.innerHTML = `
      <div class="filter-row">
        ${reviewSummary(rows)}
      </div>
      <div class="page-layout">
        <div class="table-panel">${deprecatedTable(rows, selected)}</div>
        ${deprecatedDetail(selected)}
      </div>
    `;
  }

  function deprecatedKey(row) {
    return [
      get(row, "Deprecated Object", "Deprecated Attribute", "Application ID(Application ID)", "Business Catalog ID(Catalog ID)", "Title(Title)"),
      get(row, "Successor Object", "Successor Attribute", "Successor Application(Successor Application)", "Successor Business Catalog ID(Successor Catalog ID)")
    ].join("|").toLowerCase();
  }

  function dedupeRows(rows, keyFn) {
    const map = new Map();
    rows.filter(hasUsefulValues).forEach((row) => {
      const key = keyFn(row) || rowKey(row);
      if (!map.has(key)) map.set(key, row);
    });
    return [...map.values()];
  }

  function deprecatedTable(rows, selected) {
    if (!rows.length) return empty("No matching deprecated or successor rows.");
    return `
      <table class="data-table">
        <thead><tr><th>Type</th><th>Review</th><th>Deprecated object</th><th>Successor</th><th>Area</th></tr></thead>
        <tbody>
          ${rows.map((row, index) => `
            <tr class="${[selected === row ? "selected" : "", reviewRowClass(row)].filter(Boolean).join(" ")}">
              <td>${badge(getType(row) || get(row, "Type"), "warning")}</td>
              <td>${reviewSelect(row, true)}</td>
              <td><button class="row-link" type="button" data-select-page="deprecated" data-select-index="${index}">${escapeHtml(get(row, "Deprecated Object", "Deprecated Attribute", "Application ID(Application ID)", "Business Catalog ID(Catalog ID)") || getTitle(row))}</button><br><span class="muted">${escapeHtml(getTitle(row))}</span></td>
              <td>${escapeHtml(get(row, "Successor Object", "Successor Attribute", "Successor Application(Successor Application)", "Successor Business Catalog ID(Successor Catalog ID)") || "Not supplied")}</td>
              <td>${escapeHtml(get(row, "Line of Business", "Line of Business(Line of Business)", "Category", "Category(Category)") || "-")}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    `;
  }

  function deprecatedDetail(row) {
    if (!row) return `<aside class="detail-card">${empty("Select a deprecated item to see the next action.")}</aside>`;
    const link = get(row, "What's New Document Title Url", "What\u0027s New Document Title Url", "What\u0027s New Document(What\u0027s New Document)", "What's New Document(What's New Document)", "Link(Link)");
    return `
      <aside class="detail-card">
        <div class="detail-section">
          <div class="badges">${badge(getType(row) || get(row, "Type"), "warning")}${badge(getCategory(row) || get(row, "Category"), "teal")}</div>
          ${detailTitleRow(row, getTitle(row))}
          <p>${escapeHtml(get(row, "Additional Information", "Description(Description)", "Description"))}</p>
        </div>
        ${detailReviewActions(row)}
        <div class="detail-section">
          <p class="system-label">Successor</p>
          <p>${escapeHtml(get(row, "Successor Object", "Successor Attribute", "Successor Application(Successor Application)", "Successor Business Catalog ID(Successor Catalog ID)") || "Not supplied")}</p>
        </div>
        ${appReplacementPanel(row)}
        ${getCategory(row) === "App" || get(row, "Application ID(Application ID)", "App ID(App ID)") ? appTenantEvidencePanel(row) : ""}
        <div class="detail-section">
          <p class="system-label">Next action</p>
          <ul class="detail-list">
            <li>Confirm whether the deprecated item is used by this customer.</li>
            <li>Map the successor object/app/catalog and assign an owner.</li>
            <li>Test the successor path and update roles, catalogs, documentation, and user comms.</li>
            <li>Close only when old object usage is removed or formally accepted as risk.</li>
          </ul>
        </div>
        ${link ? `<div class="detail-section"><a class="secondary-action" href="${escapeHtml(link)}" target="_blank" rel="noreferrer">Open source</a></div>` : ""}
      </aside>
    `;
  }

  function renderNewFeatures() {
    const rows = sortByReview(applyGlobalFilters(dedupeRows([...state.data.derived.newUsed, ...state.data.derived.innovationUsed], rowKey), false));
    pageContent.innerHTML = `
      <div class="filter-row">
        ${reviewSummary(rows)}
      </div>
      <div class="action-list">
        ${rows.length ? rows.map((row) => `
          <article class="action-row ${reviewRowClass(row)}">
            <div>
              <div class="badges">${badge(getAction(row), "green")}${badge(getType(row))}${badge(getCategory(row), "teal")}${badge(reviewLabel(effectiveReviewEntry(row).status), reviewTone(effectiveReviewEntry(row).status))}</div>
              <h3>${escapeHtml(getTitle(row))}</h3>
              <p>${escapeHtml(shorten(get(row, "Description(Description)", "Description"), 260))}</p>
              <p class="muted">Used scope: ${escapeHtml(getScopeItems(row).join(", ") || "Not specified")}</p>
              ${sourceBackedGuidancePanel(row)}
            </div>
            <div class="card-actions">
              ${reviewSelect(row, true)}
              <button class="table-action" type="button" data-add-test="${escapeHtml(rowKey(row))}">Add explore task</button>
            </div>
          </article>
        `).join("") : empty("No matching new-feature items.")}
      </div>
    `;
  }

  function renderPublicSector() {
    const rows = sortByReview(applyGlobalFilters(state.data.derived.publicSectorHighlights, false), (a, b) => publicSectorScore(b) - publicSectorScore(a));
    pageContent.innerHTML = `
      <div class="filter-row">
        <button class="primary-action" type="button" id="downloadPublicSector">Export public sector highlights</button>
        ${reviewSummary(rows)}
        <div class="review-summary" aria-label="Customer profile">
          <span>${escapeHtml(customerProfile.country)}</span>
          <span>${escapeHtml(customerProfile.industry)}</span>
          <span>Test ${escapeHtml(customerProfile.testUpgradeDate)}</span>
          <span>Prod ${escapeHtml(customerProfile.productionUpgradeDate)}</span>
        </div>
      </div>
      <div class="action-list">
        ${rows.length ? rows.map((row) => {
          const fit = countryFit(row);
          const recommendation = testRecommendation(row);
          return `
            <article class="action-row ${reviewRowClass(row)}">
              <div>
                <div class="badges">${badge(getAction(row), actionTone(row))}${badge(getType(row))}${badge(getCategory(row), "teal")}${badge(fit.label, fit.status === "mismatch" ? "neutral" : "teal")}${badge(recommendation.label, recommendationTone(recommendation.level))}${badge(reviewLabel(effectiveReviewEntry(row).status), reviewTone(effectiveReviewEntry(row).status))}</div>
                <h3>${escapeHtml(getTitle(row))}</h3>
                <p>${escapeHtml(shorten(get(row, "Description(Description)", "Description"), 300))}</p>
                <p class="muted">Scope: ${escapeHtml(getScopeItems(row).join(", ") || "Not specified")} | ${escapeHtml(get(row, "Solution Area(Solution Area)", "Solution Area") || "Public sector / finance")}</p>
                <div class="recommendation-panel ${recommendation.level}">
                  <strong>${escapeHtml(recommendation.reason)}</strong>
                  <p>${escapeHtml(recommendation.action)}</p>
                </div>
                ${sourceBackedGuidancePanel(row)}
              </div>
              <div class="card-actions">
                ${reviewSelect(row, true)}
                <button class="table-action" type="button" data-add-test="${escapeHtml(rowKey(row))}">Add to test review</button>
              </div>
            </article>
          `;
        }).join("") : empty("No public-sector highlights matched this RASD export.")}
      </div>
    `;
  }

  function isAiWhatsNewRow(row) {
    const text = aiWhatsNewFields.map((field) => get(row, field)).join(" ");
    return aiWhatsNewPattern.test(text);
  }

  function aiUpdateRows(data = state.data) {
    const sources = [
      ["used", "Used scope", 0, data.usedPersonalizedWhatsNew],
      ["activated", "Activated scope", 1, data.activatedPersonalizedWhatsNew],
      ["complete", "Complete What's New", 2, data.completeWhatsNew]
    ];
    const rows = sources.flatMap(([sourceKey, sourceLabel, rank, list]) =>
      (list || [])
        .filter(isAiWhatsNewRow)
        .map((row) => ({
          ...row,
          aiSourceKey: sourceKey,
          aiSourceBucket: sourceLabel,
          aiSourceRank: rank,
          reviewKey: `ai-whats-new:${rowKey(row)}`
        }))
    );
    return mergeAiUpdateRows(rows)
      .map((row) => {
        const grouped = row.groupedRows?.length ? row.groupedRows : [row];
        const buckets = uniqueList(grouped.map((item) => item.aiSourceBucket).filter(Boolean));
        const ranks = grouped.map((item) => Number(item.aiSourceRank)).filter((rank) => Number.isFinite(rank));
        return {
          ...row,
          aiSourceBuckets: buckets,
          aiSourceBucket: buckets.join(", "),
          aiSourceRank: ranks.length ? Math.min(...ranks) : 9,
          reviewKey: `ai-whats-new:${rowKey(row)}`
        };
      })
      .sort(aiWhatsNewSort);
  }

  function aiDuplicateKey(row) {
    return [
      normalizedDuplicateText(getTitle(row)),
      normalizedDuplicateText(get(row, "Description(Description)", "Description"))
    ].join("|");
  }

  function mergeAiUpdateRows(rows) {
    const merged = new Map();
    (rows || []).forEach((row) => {
      const key = aiDuplicateKey(row) || rowKey(row);
      if (!key) return;
      const existing = merged.get(key);
      if (!existing) {
        merged.set(key, { ...row, groupedRows: [row] });
        return;
      }
      existing.groupedRows.push(row);
      const scopes = uniqueList([...getScopeItems(existing), ...getScopeItems(row)]);
      if (scopes.length) existing["Scope Items(Scope Items)"] = scopes.join(",");
      Object.keys(row).forEach((field) => {
        if (!existing[field] && row[field]) existing[field] = row[field];
      });
    });
    return [...merged.values()];
  }

  function aiWhatsNewSort(left, right) {
    const leftRank = Number(left.aiSourceRank ?? 9);
    const rightRank = Number(right.aiSourceRank ?? 9);
    if (leftRank !== rightRank) return leftRank - rightRank;
    const leftPriority = aiReleasePriority(left);
    const rightPriority = aiReleasePriority(right);
    if (leftPriority !== rightPriority) return leftPriority - rightPriority;
    return getTitle(left).localeCompare(getTitle(right));
  }

  function aiReleasePriority(row) {
    if (/Deprecated|Deleted/i.test(getType(row))) return 0;
    if (isActionReview(row)) return 1;
    if (getAction(row) === "Innovation" || getType(row) === "New") return 2;
    return 3;
  }

  function aiSourceIncludes(row, label) {
    return (row.aiSourceBuckets || [row.aiSourceBucket]).some((bucket) => bucket === label);
  }

  function aiAreaSummary(row) {
    return [
      get(row, "Line of Business(Line of Business)", "Line of Business"),
      get(row, "Solution Area(Solution Area)", "Solution Area"),
      get(row, "Solution Capability(Solution Capability)", "Solution Capability")
    ].filter(Boolean).join(" / ") || "Cross-application";
  }

  function aiScopeSummary(row) {
    const scopes = getScopeItems(row);
    return scopes.length ? scopes.join(", ") : "No scope item supplied by SAP for this row";
  }

  function aiReleaseSignal(row) {
    return [
      getAction(row) ? `Action: ${getAction(row)}` : "",
      getType(row) ? `Type: ${getType(row)}` : "",
      getCategory(row) ? `Category: ${getCategory(row)}` : "",
      get(row, "Valid as of(Valid as of)") || state.data.meta.release ? `Release: ${get(row, "Valid as of(Valid as of)") || state.data.meta.release}` : ""
    ].filter(Boolean).join(" | ");
  }

  function aiWhatToNote(row) {
    if (/Deprecated|Deleted/i.test(getType(row))) {
      return "SAP has marked this AI or intelligent-scenario capability as deprecated or removed. For CFA this is awareness only unless the scenario, app, or integration was actually enabled or consumed.";
    }
    if (isActionReview(row)) {
      return "SAP flags this release item for customer attention. Since CFA has no deployed AI footprint, keep this as information unless a process owner plans to enable it.";
    }
    if (getAction(row) === "Innovation" || getType(row) === "New") {
      return "SAP lists this as a new AI capability or innovation in public cloud. Treat it as release awareness, not a CFA test item.";
    }
    return "SAP lists this as an informational AI-related release item. No CFA test action is expected unless the capability is adopted later.";
  }

  function aiSourceLinks(row) {
    const references = whatsNewSourceReferences(row, "SAP What's New item");
    if (!references.length) return `<p class="row-meta">No SAP source URL was supplied in this RASD row.</p>`;
    return `
      <div class="source-links">
        ${references.map((reference) => `<a href="${escapeHtml(reference.url)}" target="_blank" rel="noreferrer">${escapeHtml(reference.label)}</a>`).join("")}
      </div>
    `;
  }

  function renderAiUpdates() {
    const allRows = aiUpdateRows();
    const rows = sortByReview(applyGlobalFilters(allRows, false));
    const usedRows = allRows.filter((row) => aiSourceIncludes(row, "Used scope"));
    const actionRows = allRows.filter((row) => isActionReview(row) || /Deprecated|Deleted/i.test(getType(row)));
    const sourceRows = allRows.filter((row) => whatsNewSourceReferences(row).length);
    pageContent.innerHTML = `
      <section class="ai-updates-layout">
        <div class="coverage-hero-card ai-hero-card">
          <div>
            <p class="system-label">SAP S/4HANA Cloud Public Edition ${escapeHtml(state.data.meta.release || "2608.0")}</p>
            <h3>What's new with AI in the 2608 release</h3>
            <p>Information-only view filtered from the RASD What's New export. CFA has not deployed these AI capabilities, so this page is for awareness of SAP-published AI, Joule, SAP Document AI, agentic AI, AI-assisted, and Intelligent Scenario/ISLM release items.</p>
          </div>
          <div class="coverage-flow" aria-label="AI update information flow">
            <span>2608 What's New</span>
            <span>AI/Joule signal</span>
            <span>Used or complete scope</span>
            <span>SAP source</span>
            <span>Information only</span>
          </div>
        </div>

        <div class="coverage-kpis ai-kpis">
          ${coverageKpi("AI What's New rows", allRows.length, "Source-driven rows from the 2608 RASD Complete What's New and personalized views.", "green")}
          ${coverageKpi("Rows near used scope", usedRows.length, "RASD linked the underlying app or process to CFA used scope; this does not mean AI is deployed.", "blue")}
          ${coverageKpi("SAP flagged rows", actionRows.length, "Rows SAP flagged, deprecated, or deleted in the release notes.", "warning")}
          ${coverageKpi("SAP source links", sourceRows.length, "Rows with a direct SAP What's New URL from the export.", "teal")}
        </div>

        <div class="ai-main-grid">
          <section class="ai-update-list">
            ${rows.map(aiUpdateCard).join("") || empty("No 2608 AI What's New rows match the current search.")}
          </section>
          <aside class="coverage-panel ai-side-panel">
            <div class="coverage-panel-heading">
              <div>
                <p class="system-label">How rows are included</p>
                <h3>Release-note filter, not a review queue</h3>
              </div>
            </div>
            <ul class="coverage-evidence-list">
              <li>Category or description mentions Artificial Intelligence, SAP Document AI, AI-assisted features, Joule, agentic AI, or generative AI.</li>
              <li>Deprecated Intelligent Scenario / ISLM rows are included because they are SAP machine-learning lifecycle changes.</li>
              <li>Rows are grouped so the same SAP item is not repeated just because it appears in used, activated, and complete views.</li>
              <li>Use the SAP source link on each card as the authority for release wording, demos, screenshots, and enablement notes if someone wants to explore later.</li>
            </ul>
          </aside>
        </div>
      </section>
    `;
  }

  function aiUpdateCard(row) {
    const sourceBuckets = row.aiSourceBuckets?.length ? row.aiSourceBuckets.join(", ") : row.aiSourceBucket || "RASD";
    const localization = getLocalization(row);
    return `
      <article class="ai-update-card">
        <div class="ai-card-top">
          <div>
            <div class="badges">
              ${badge(aiActionLabel(row), actionTone(row))}
              ${badge(getType(row), "teal")}
              ${badge(getCategory(row), "green")}
              ${badge(sourceBuckets, "blue")}
              ${badge("Information only", "neutral")}
            </div>
            <h3>${escapeHtml(getTitle(row))}</h3>
          </div>
        </div>
        <p>${escapeHtml(get(row, "Description(Description)", "Description"))}</p>
        <div class="ai-detail-grid">
          ${aiDetail("Affected area", aiAreaSummary(row))}
          ${aiDetail("Scope items", aiScopeSummary(row))}
          ${aiDetail("Release signal", aiReleaseSignal(row))}
          ${localization ? aiDetail("Localization", localization) : ""}
          ${aiDetail("What to note for 2608", aiWhatToNote(row))}
        </div>
        <div class="ai-card-actions">
          ${aiSourceLinks(row)}
        </div>
      </article>
    `;
  }

  function aiDetail(label, text) {
    if (!text) return "";
    return `
      <div class="ai-detail-box">
        <span>${escapeHtml(label)}</span>
        <p>${escapeHtml(text)}</p>
      </div>
    `;
  }

  function aiActionLabel(row) {
    const action = getAction(row);
    if (/Action\/Review/i.test(action)) return "SAP flagged";
    if (/Information/i.test(action)) return "SAP info";
    if (/Innovation/i.test(action)) return "SAP innovation";
    return action;
  }

  function renderCoverageBuilder() {
    const rows = coverageRows();
    const releaseRows = rows.filter((row) => row.timing === "release");
    const futureRows = rows.filter((row) => row.timing === "future");
    const fitSummary = coverageFitSummary(rows);
    const ownerSummary = coverageOwnerSummary(rows);
    const status = coverageStatusSummary(rows);
    const sampleRows = sortCoverageRows(releaseRows).slice(0, 14);
    pageContent.innerHTML = `
      <div class="filter-row">
        <button class="primary-action" type="button" id="downloadScopeAlmZip">Download reviewed scope ALM ZIP</button>
        <button class="secondary-action" type="button" id="downloadTests">Download single Cloud ALM workbook</button>
        <button class="secondary-action" type="button" id="downloadCoverageOwners">Download owner list</button>
        <div class="review-summary" aria-label="Coverage summary">
          <span>${releaseRows.length} run before upgrade</span>
          <span>${futureRows.length} future adoption</span>
          <span>${status.done} done</span>
          <span>${status.blocked} blocked</span>
        </div>
      </div>
      <section class="coverage-builder">
        <div class="coverage-hero-card">
          <div>
            <p class="system-label">SAP automation fit</p>
            <h3>Use SAP automates where they fit. Keep the rest targeted.</h3>
            <p>This page turns reviewed RASD impacts into a practical automation plan: SAP automate candidate, manual business check, role/catalog check, integration/API check, or extensibility validation.</p>
          </div>
          <div class="coverage-flow" aria-label="Coverage flow">
            <span>RASD impact</span>
            <span>Automation fit</span>
            <span>SAP automate or manual</span>
            <span>Cloud ALM execution</span>
            <span>Evidence</span>
          </div>
        </div>

        <div class="coverage-kpis">
          ${coverageKpi("Run before upgrade", releaseRows.length, "Mandatory, critical, deprecated, role, integration, and targeted process checks.", "blue")}
          ${coverageKpi("SAP automate candidates", fitSummary.sapAutomate || 0, "Check SAP S/4HANA Cloud Test Automation Tool, Process Navigator scripts, or Cloud ALM automated imports first.", "green")}
          ${coverageKpi("Manual / business checks", fitSummary.manual || 0, "Changed screens, apps, fields, or process behavior where a short walkthrough is enough.", "warning")}
          ${coverageKpi("Technical checks", (fitSummary.integration || 0) + (fitSummary.extensibility || 0), "API, BTP, communication arrangement, custom CDS, custom logic, and extension validations.", "teal")}
        </div>

        <div class="coverage-main-grid">
          <section class="coverage-panel coverage-wide">
            <div class="coverage-panel-heading">
              <div>
                <p class="system-label">Test pack preview</p>
                <h3>Automation and manual test scenarios</h3>
              </div>
              <span>${sampleRows.length} shown</span>
            </div>
            <div class="coverage-table-wrap">
              <table class="data-table coverage-table">
                <thead><tr><th>Test scenario</th><th>Owner</th><th>Automation / manual</th><th>How to run</th><th>Resources</th><th>Evidence</th><th>Status</th></tr></thead>
                <tbody>${sampleRows.map(coverageTableRow).join("")}</tbody>
              </table>
            </div>
          </section>

          <section class="coverage-panel">
            <div class="coverage-panel-heading">
              <div>
                <p class="system-label">Owner list</p>
                <h3>Who needs to act</h3>
              </div>
            </div>
            <div class="owner-list">
              ${ownerSummary.map((owner) => `
                <article>
                  <strong>${escapeHtml(owner.owner)}</strong>
                  <span>${owner.count} tests</span>
                  <small>${owner.notStarted} not started, ${owner.blocked} blocked</small>
                </article>
              `).join("")}
            </div>
          </section>

          <section class="coverage-panel">
            <div class="coverage-panel-heading">
              <div>
                <p class="system-label">Automation fit</p>
                <h3>How each test should run</h3>
              </div>
            </div>
            <div class="fit-grid">
              ${coverageFitCards(fitSummary)}
            </div>
          </section>

          <section class="coverage-panel">
            <div class="coverage-panel-heading">
              <div>
                <p class="system-label">Pass / fail dashboard</p>
                <h3>Execution status</h3>
              </div>
            </div>
            ${coverageStatusDashboard(status)}
          </section>

          <section class="coverage-panel">
            <div class="coverage-panel-heading">
              <div>
                <p class="system-label">Evidence checklist</p>
                <h3>What must be attached</h3>
              </div>
            </div>
            <ul class="coverage-evidence-list">
              <li>Screenshot before and after upgrade for changed app, field, tile, or page behavior.</li>
              <li>Role/catalog evidence for deprecated apps, successor apps, spaces, and pages.</li>
              <li>Payload, response, document number, or message ID for API and integration checks.</li>
              <li>Activation and reconciliation evidence for CDS, custom logic, BTP, and extensibility checks.</li>
              <li>SAP automate run result, Cloud ALM manual result, or reason why the scenario stayed manual.</li>
            </ul>
          </section>
        </div>
      </section>
    `;
  }

  function coverageRows() {
    return targetedTestItems("", { includeFuture: true }).map((item) => {
      const recommendation = testRecommendation(item);
      const fit = coverageFit(item, recommendation);
      const owner = coverageOwner(item, fit);
      const saved = state.testState[item.id] || {};
      return {
        item,
        recommendation,
        fit,
        automation: coverageAutomationProfile(item, fit, recommendation),
        owner,
        status: saved.status || "Not started",
        timing: recommendation.level === "optional" ? "future" : "release",
        evidence: coverageEvidence(item, fit)
      };
    });
  }

  function coverageKpi(label, value, text, tone) {
    return `
      <article class="coverage-kpi ${escapeHtml(tone)}">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
        <p>${escapeHtml(text)}</p>
      </article>
    `;
  }

  function sortCoverageRows(rows) {
    const rank = { required: 0, targeted: 1, review: 2, optional: 3, skip: 4 };
    return [...rows].sort((left, right) => {
      const level = (rank[left.recommendation.level] ?? 9) - (rank[right.recommendation.level] ?? 9);
      if (level) return level;
      const status = left.status.localeCompare(right.status);
      if (status) return status;
      return left.item.title.localeCompare(right.item.title);
    });
  }

  function coverageFit(item, recommendation) {
    const text = [item.type, item.title, item.scenario, item.source, item.scope].join(" ").toLowerCase();
    if (/extensibility|custom cds|custom logic|badi|released cds|developer/.test(text)) {
      return { key: "extensibility", label: "Extensibility check", tone: "teal", detail: "Manual technical validation" };
    }
    if (/api|integration|payload|communication arrangement|btp|destination|iflow/.test(text)) {
      return { key: "integration", label: "Integration/API check", tone: "teal", detail: "Payload or interface proof" };
    }
    if (/role|catalog|iam|authorization|successor|deprecated|deleted|tile|space|page/.test(text)) {
      return { key: "role", label: "Role/catalog check", tone: "warning", detail: "Access and launchpad proof" };
    }
    if (/configuration|sscui|customizing/.test(text)) {
      return { key: "manual", label: "Manual targeted", tone: "warning", detail: "Config plus one process check" };
    }
    if (recommendation.level === "optional") {
      return { key: "manual", label: "Adoption demo", tone: "green", detail: "Demo only if adopted" };
    }
    if (scopeIdsForReview(item).length) {
      return { key: "sapAutomate", label: "SAP automate candidate", tone: "green", detail: "Compare with SAP automate/script" };
    }
    return { key: "manual", label: "Manual targeted", tone: "warning", detail: "Small focused walkthrough" };
  }

  function coverageOwner(item, fit) {
    if (fit.key === "integration") return /btp|destination|iflow/i.test([item.title, item.scenario, item.scope].join(" ")) ? "BTP / Integration" : "Integration";
    if (fit.key === "extensibility") return "Extensibility";
    if (fit.key === "role") return "Security / IAM";
    const lobs = scopeIdsForReview(item).map(scopeRowById).filter(Boolean).map((row) => get(row, "Line of Business")).join(", ");
    const text = [lobs, item.scope, item.title].join(" ").toLowerCase();
    if (/finance|account|cash|asset|journal|tax/.test(text)) return "Finance";
    if (/sourcing|procurement|supplier|purchase|ariba/.test(text)) return "Procurement";
    if (/supply chain|inventory|warehouse|manufacturing|maintenance|asset management/.test(text)) return "Operations";
    return "Process owner";
  }

  function coverageEvidence(item, fit) {
    if (fit.key === "integration") return "Payload, response, message ID";
    if (fit.key === "extensibility") return "Activation and output reconcile";
    if (fit.key === "role") return "Tile, role, catalog, launch";
    if (fit.key === "sapAutomate") return "Script step result and screenshot";
    return "Before/after result and sign-off";
  }

  function coverageAutomationProfile(item, fit, recommendation) {
    const guidance = sourceBackedGuidance(item);
    const sapSources = dedupeReferences([
      ...(guidance?.references || []),
      ...(item.sourceUrl ? [{ label: "SAP What's New source", url: item.sourceUrl }] : [])
    ]).slice(0, 4);
    const resources = (items) => dedupeReferences([...items, ...sapSources]).slice(0, 6);
    const commonManual = "If no delivered automate exists, keep this as a small Cloud ALM manual test with screenshot, document number, payload, or role evidence.";

    if (fit.key === "sapAutomate") {
      return {
        label: "Automation candidate",
        tone: "green",
        mode: "Try SAP automate first",
        summary: "Search SAP S/4HANA Cloud Test Automation Tool, Process Navigator, and Cloud ALM libraries for the matching standard script before writing manual steps.",
        automate: [
          "Open SAP Signavio Process Navigator for the scope item and identify the standard test script or process activity that matches the RASD change.",
          "Check SAP S/4HANA Cloud Test Automation Tool / Test Your Processes for a pre-delivered automate covering the same business step.",
          "If available, parameterise the automate with the customer's test data and execute it in the upgraded test tenant.",
          "Attach the automation execution result in Cloud ALM and add a short note explaining which RASD change it proves."
        ],
        fallback: commonManual,
        resources: resources([
          { label: "SAP S/4HANA Cloud automation testing", url: "https://pages.community.sap.com/topics/s4hana-cloud/automation-testing" },
          { label: "SAP Learning - Test Automation Tool", url: "https://learning.sap.com/courses/implementing-sap-s-4hana-cloud-public-edition/using-the-test-automation-tool-for-automated-testing" },
          { label: "SAP Signavio Process Navigator", url: "https://me.sap.com/processnavigator" },
          { label: "SAP Help - Import automated test cases into Cloud ALM", url: "https://help.sap.com/docs/cloud-alm/applicationhelp/importing-automated-test-cases" }
        ])
      };
    }

    if (fit.key === "role") {
      return {
        label: "Manual role/catalog",
        tone: "warning",
        mode: "Manual access proof",
        summary: "This is usually not worth automating first; prove the old tile, successor app, catalog, role, space, and page behavior with a real business role.",
        automate: [
          "Optional automation is limited to a launch/access smoke test after the role/catalog setup is known.",
          "Do not rely on automation to decide the correct catalog or page placement; that needs launchpad and security review."
        ],
        fallback: "Use Cloud ALM manual steps: confirm successor app ID, business catalog, business role, space/page tile, and real user access.",
        resources: resources([
          { label: "SAP Help - Create manual test cases in Cloud ALM", url: "https://help.sap.com/docs/cloud-alm/applicationhelp/creating-manual-test-cases" },
          { label: "SAP Signavio Process Navigator", url: "https://me.sap.com/processnavigator" }
        ])
      };
    }

    if (fit.key === "integration") {
      return {
        label: "API/integration automation",
        tone: "teal",
        mode: "Automate outside UI",
        summary: "Automate this as a payload or interface smoke test, not as a screen-clicking automate.",
        automate: [
          "Identify the communication arrangement, BTP destination, API, iFlow, job, or connected system that uses the changed object.",
          "Replay one realistic request or message in the upgraded test tenant and compare the response, monitor status, and business document/result.",
          "Where possible, run it through existing Postman, CI, Integration Suite, BTP job, or automated interface test tooling.",
          "Attach request ID, response, message ID, payload reference, and receiving-system proof in Cloud ALM."
        ],
        fallback: "If the interface cannot be automated yet, execute one controlled end-to-end message manually and capture logs plus business outcome.",
        resources: resources([
          { label: "SAP Cloud ALM overview", url: "https://support.sap.com/en/alm/sap-cloud-alm.html" },
          { label: "SAP Business Accelerator Hub", url: "https://api.sap.com" },
          { label: "SAP Help - Import automated test cases into Cloud ALM", url: "https://help.sap.com/docs/cloud-alm/applicationhelp/importing-automated-test-cases" }
        ])
      };
    }

    if (fit.key === "extensibility") {
      return {
        label: "Technical validation",
        tone: "teal",
        mode: "Activation and reconciliation",
        summary: "Run activation, syntax, and consuming-output checks for custom CDS, custom logic, APIs, BTP, or side-by-side objects.",
        automate: [
          "List the customer extension object, consuming app/report/integration, and SAP object changed by RASD.",
          "Run activation/syntax checks in the upgraded test tenant.",
          "Execute the consuming report, API, BTP app, SAC model, or integration with a small realistic dataset.",
          "Reconcile the output with a standard SAP app or known production result and attach evidence in Cloud ALM."
        ],
        fallback: "If no automated technical check exists, keep a manual technical test with activation result, sample input, output reconciliation, and owner sign-off.",
        resources: resources([
          { label: "SAP Business Accelerator Hub", url: "https://api.sap.com" },
          { label: "SAP Help - Create manual test cases in Cloud ALM", url: "https://help.sap.com/docs/cloud-alm/applicationhelp/creating-manual-test-cases" },
          { label: "SAP Cloud ALM overview", url: "https://support.sap.com/en/alm/sap-cloud-alm.html" }
        ])
      };
    }

    return {
      label: recommendation.level === "optional" ? "Manual adoption demo" : "Manual business check",
      tone: recommendation.level === "optional" ? "green" : "warning",
      mode: recommendation.level === "optional" ? "Demo only if adopted" : "Manual targeted check",
      summary: recommendation.level === "optional"
        ? "Do not create upgrade regression automation unless the business chooses to adopt this new capability now."
        : "Run the changed business step only; do not replay the entire SAP scope item.",
      automate: [
        "Use SAP Process Navigator to locate the matching process activity or standard test script if the change belongs to a standard process.",
        "Only automate it if the activity is repeated, stable, data-driven, and valuable for future releases.",
        "For one-off field/screen/output checks, a short Cloud ALM manual test is usually cheaper and clearer."
      ],
      fallback: commonManual,
      resources: resources([
        { label: "SAP Help - Create manual test cases in Cloud ALM", url: "https://help.sap.com/docs/cloud-alm/applicationhelp/creating-manual-test-cases" },
        { label: "SAP Help - Getting started with Process Navigator", url: "https://help.sap.com/docs/cloud-alm/getting-started-process-navigator/overview" },
        { label: "SAP Signavio Process Navigator", url: "https://me.sap.com/processnavigator" }
      ])
    };
  }

  function coverageFitSummary(rows) {
    return rows.reduce((acc, row) => {
      acc[row.fit.key] = (acc[row.fit.key] || 0) + 1;
      return acc;
    }, {});
  }

  function coverageOwnerSummary(rows) {
    const byOwner = new Map();
    rows.filter((row) => row.timing === "release").forEach((row) => {
      const current = byOwner.get(row.owner) || { owner: row.owner, count: 0, notStarted: 0, blocked: 0 };
      current.count += 1;
      if (row.status === "Not started") current.notStarted += 1;
      if (row.status === "Blocked") current.blocked += 1;
      byOwner.set(row.owner, current);
    });
    return [...byOwner.values()].sort((a, b) => b.count - a.count || a.owner.localeCompare(b.owner));
  }

  function coverageStatusSummary(rows) {
    return rows.reduce((acc, row) => {
      if (row.status === "Done") acc.done += 1;
      else if (row.status === "In progress") acc.inProgress += 1;
      else if (row.status === "Blocked") acc.blocked += 1;
      else acc.notStarted += 1;
      acc.total += 1;
      return acc;
    }, { total: 0, done: 0, inProgress: 0, blocked: 0, notStarted: 0 });
  }

  function coverageFitCards(summary) {
    const cards = [
      ["sapAutomate", "SAP automate candidate", "Look for a delivered automate or Process Navigator/Cloud ALM script before creating manual steps.", "green"],
      ["manual", "Manual business check", "Run only the changed step with a real role and realistic data.", "warning"],
      ["role", "Role/catalog check", "Manual access proof for successor apps, catalogs, spaces, pages, and real roles.", "warning"],
      ["integration", "API/integration automation", "Automate via API smoke, payload replay, Integration Suite, or BTP job checks where possible.", "teal"],
      ["extensibility", "Extensibility validation", "Run activation/syntax/reconciliation checks for CDS, logic, BTP, or side-by-side usage.", "teal"]
    ];
    return cards.map(([key, label, text, tone]) => `
      <article class="${escapeHtml(tone)}">
        <strong>${escapeHtml(summary[key] || 0)}</strong>
        <span>${escapeHtml(label)}</span>
        <p>${escapeHtml(text)}</p>
      </article>
    `).join("");
  }

  function coverageStatusDashboard(status) {
    const rows = [
      ["Done", status.done, "green"],
      ["In progress", status.inProgress, "warning"],
      ["Blocked", status.blocked, "danger"],
      ["Not started", status.notStarted, "neutral"]
    ];
    return `
      <div class="status-bars">
        ${rows.map(([label, value, tone]) => {
          const width = status.total ? Math.max(4, Math.round((value / status.total) * 100)) : 0;
          return `
            <div class="status-bar-row ${tone}">
              <span>${escapeHtml(label)}</span>
              <div><i style="width:${width}%"></i></div>
              <strong>${escapeHtml(value)}</strong>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  function coverageTableRow(row) {
    const item = row.item;
    const automation = row.automation;
    return `
      <tr class="coverage-summary-row">
        <td>
          <strong>${escapeHtml(item.title)}</strong>
          <span class="row-meta">${escapeHtml(item.scope || "General")}</span>
        </td>
        <td>${escapeHtml(row.owner)}</td>
        <td>${badge(automation.label, automation.tone)}<span class="row-meta">${escapeHtml(automation.mode)}</span></td>
        <td>${escapeHtml(shorten(automation.summary, 150))}</td>
        <td>${coverageResourceLinks(automation.resources, 2)}</td>
        <td>${escapeHtml(row.evidence)}</td>
        <td>
          <select data-test-status="${escapeHtml(item.id)}" aria-label="Status for ${escapeHtml(item.title)}">
            ${["Not started", "In progress", "Blocked", "Done"].map((status) => `<option ${row.status === status ? "selected" : ""}>${status}</option>`).join("")}
          </select>
        </td>
      </tr>
      <tr class="coverage-drill-row">
        <td colspan="7">
          <details>
            <summary>Drill down: how this scenario can be automated or tested manually</summary>
            <div class="coverage-drill-grid">
              <div>
                <span class="system-label">Automation approach</span>
                <ul>${automation.automate.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ul>
              </div>
              <div>
                <span class="system-label">Manual fallback / evidence</span>
                <p>${escapeHtml(automation.fallback)}</p>
                <p><strong>Why this test exists:</strong> ${escapeHtml(row.recommendation.reason)}</p>
              </div>
              <div>
                <span class="system-label">Resources</span>
                <div class="coverage-resource-list">${coverageResourceLinks(automation.resources, 6)}</div>
              </div>
            </div>
          </details>
        </td>
      </tr>
    `;
  }

  function coverageResourceLinks(resources, limit) {
    const links = dedupeReferences(resources || []).slice(0, limit);
    if (!links.length) return `<span class="row-meta">No source link loaded</span>`;
    return links.map((resource) => `<a class="mini-link" href="${escapeHtml(resource.url)}" target="_blank" rel="noreferrer">${escapeHtml(resource.label || "SAP source")}</a>`).join("");
  }

  function exportCoverageOwners() {
    const allRows = coverageRows();
    const rows = [["Owner", "Test Count", "Not Started", "Blocked", "Sample Tests"]];
    coverageOwnerSummary(allRows).forEach((owner) => {
      const samples = allRows
        .filter((row) => row.timing === "release" && row.owner === owner.owner)
        .slice(0, 5)
        .map((row) => row.item.title)
        .join("; ");
      rows.push([owner.owner, owner.count, owner.notStarted, owner.blocked, samples]);
    });
    downloadCsv(`rasd-${state.data.meta.release || "release"}-coverage-owner-list.csv`, rows);
    showToast("Coverage owner list downloaded");
  }

  function renderTestPlan() {
    const tests = sortByReview(applyGlobalFilters(state.data.derived.tests, false));
    const included = tests.filter((item) => testRecommendation(item).level !== "skip");
    const timing = splitByReleaseTiming(included);
    const releaseGrouped = [
      ["required", "Must test", sortByReview(timing.release.filter((item) => testRecommendation(item).level === "required"))],
      ["targeted", "Targeted checks", sortByReview(timing.release.filter((item) => testRecommendation(item).level === "targeted"))],
      ["review", "Triage before adding", sortByReview(timing.release.filter((item) => testRecommendation(item).level === "review"))]
    ];
    const futureGrouped = [
      ["optional", "Future / adoption backlog", sortByReview(timing.future)]
    ];
    pageContent.innerHTML = `
      <div class="filter-row">
        <button class="primary-action" type="button" id="downloadTests">Download Cloud ALM workbook</button>
        <button class="secondary-action" type="button" id="resetTests">Reset local statuses</button>
        <button class="secondary-action" type="button" id="downloadFutureBacklog">Download future Cloud ALM workbook</button>
        <div class="review-summary" aria-label="Targeted test pack summary">
          <span>${timing.release.length} release tests</span>
          <span>${timing.future.length} future backlog</span>
          <span>${tests.length - included.length} excluded</span>
          <span>${customerProfile.country}</span>
          <span>${customerProfile.industry}</span>
        </div>
      </div>
      ${cloudAlmScopePackSection()}
      <div class="release-plan">
        <section class="release-lane">
          <div class="lane-heading">
            <h3>Test before upgrade<span>${timing.release.length}</span></h3>
            <p>Use this for the July 18 to August 18 readiness window: mandatory, technical, app, role, integration, and process checks.</p>
          </div>
          <div class="kanban release-kanban">
            ${releaseGrouped.map(([key, label, rows]) => testPlanColumn(label, rows)).join("")}
          </div>
        </section>
        <section class="release-lane future">
          <div class="lane-heading">
            <h3>Future / adoption backlog<span>${timing.future.length}</span></h3>
            <p>New features and innovation items. Review after production is stable unless the process owner wants to adopt during this release.</p>
          </div>
          <div class="kanban future-kanban">
            ${futureGrouped.map(([key, label, rows]) => testPlanColumn(label, rows)).join("")}
          </div>
        </section>
      </div>
    `;
  }

  function officialCloudAlmScopePacks() {
    return [
      {
        scopeId: "J58",
        title: "Accounting and Financial Close",
        file: "exports/2608-upgrade-J58-cloud-alm-targeted.xlsx",
        sourceFile: "J58_S4CLD2602_BPD_EN_AU.xlsx",
        fullRows: 743,
        fullActivities: 112,
        targetedRows: 97,
        rasdChanges: 22,
        includedChanges: 12,
        description: "One Cloud ALM test case for J58, cut down from the official SAP Process Navigator workbook to reviewed RASD release changes only."
      }
    ];
  }

  function cloudAlmScopePackSection() {
    const packs = officialCloudAlmScopePacks();
    if (!packs.length) return "";
    return `
      <section class="cloud-alm-packs" aria-label="Upload-ready Cloud ALM scope scripts">
        <div class="lane-heading compact">
          <h3>Cloud ALM upload workbooks<span>${packs.length}</span></h3>
          <p>One test case per scope item. These use SAP Process Navigator workbook columns, then remove unrelated best-practice rows.</p>
        </div>
        <div class="cloud-alm-pack-grid">
          ${packs.map((pack) => `
            <article class="cloud-alm-pack-card">
              <div>
                <div class="badges">${badge(pack.scopeId, "teal")}${badge("Upload workbook", "green")}</div>
                <h3>${escapeHtml(pack.scopeId)} - ${escapeHtml(pack.title)}</h3>
                <p>${escapeHtml(pack.description)}</p>
              </div>
              <dl class="pack-metrics">
                <div><dt>RASD changes</dt><dd>${escapeHtml(pack.rasdChanges)}</dd></div>
                <div><dt>Included</dt><dd>${escapeHtml(pack.includedChanges)}</dd></div>
                <div><dt>SAP full script</dt><dd>${escapeHtml(pack.fullActivities)} activities</dd></div>
                <div><dt>Target workbook</dt><dd>${escapeHtml(pack.targetedRows)} rows</dd></div>
              </dl>
              <div class="pack-actions">
                <a class="primary-action" href="${escapeHtml(pack.file)}" download>Download workbook</a>
                <span class="row-meta">Source: ${escapeHtml(pack.sourceFile)}</span>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function testPlanColumn(label, rows) {
    return `
      <section class="kanban-column">
        <h3>${escapeHtml(label)}<span class="count">${rows.length}</span></h3>
        ${rows.map((item) => taskCard(item)).join("") || '<p class="muted">No items.</p>'}
      </section>
    `;
  }

  function taskCard(item) {
    const saved = state.testState[item.id] || {};
    const review = item.reviewKey ? effectiveReviewEntry(item) : null;
    const recommendation = testRecommendation(item);
    return `
      <article class="task-card ${review ? reviewRowClass(item) : ""}">
        <div class="badges">${badge(item.type, item.priority === "critical" ? "danger" : item.priority === "action" ? "warning" : item.priority === "ext" ? "teal" : "green")}${badge(item.scope)}${badge(recommendation.label, recommendationTone(recommendation.level))}${review ? badge(reviewLabel(review.status), reviewTone(review.status)) : ""}</div>
        <strong>${escapeHtml(item.title)}</strong>
        <span class="muted">${escapeHtml(item.scenario)}</span>
        <span class="row-meta">${escapeHtml(recommendation.reason)}</span>
        ${sourceBackedGuidancePanel(item)}
        ${item.reviewKey ? reviewSelect(item, true) : ""}
        <select data-test-status="${escapeHtml(item.id)}" aria-label="Status for ${escapeHtml(item.title)}">
          ${["Not started", "In progress", "Blocked", "Done"].map((status) => `<option ${saved.status === status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
        <input data-test-owner="${escapeHtml(item.id)}" value="${escapeHtml(saved.owner || "")}" placeholder="Owner" aria-label="Owner for ${escapeHtml(item.title)}" />
      </article>
    `;
  }

  function buildTests(data, derived) {
    const tests = [];
    const push = (item) => {
      if (!tests.some((test) => test.id === item.id)) tests.push(item);
    };
    [...derived.criticalUsed, ...derived.actionUsed, ...derived.deprecatedUsed].forEach((row) => {
      const evidence = appEvidence(row, data);
      const key = rowKey(row);
      const scopeIds = getScopeItems(row);
      push({
        id: `change-${key}`,
        reviewKey: key,
        scopeIds,
        priority: isCritical(row) || /Deleted/i.test(getType(row)) ? "critical" : "action",
        type: getType(row) || getCategory(row),
        scope: scopeIds.join(", "),
        title: getTitle(row),
        scenario: recommendedAction(row, data),
        source: "Used Scope What\u0027s New",
        sourceUrl: whatsNewLink(row),
        oldAppId: evidence.oldApp.id,
        successorAppId: evidence.successorApp.id,
        catalogs: evidence.catalogs.join(", ")
      });
    });
    derived.extensibilityUsed.forEach((row) => {
      const key = rowKey(row);
      push({
        id: `ext-${key}`,
        reviewKey: key,
        priority: "ext",
        type: get(row, "Extensibility Type") || "Extensibility",
        scope: get(row, "Application Component") || "Technical",
        title: get(row, "Technical Name") || getTitle(row),
        scenario: "Review, activate, and regression test the used extensibility object or integration consumer.",
        source: "Used Objects",
        sourceUrl: whatsNewLink(row)
      });
    });
    derived.newUsed.slice(0, 50).forEach((row) => {
      const key = rowKey(row);
      const scopeIds = getScopeItems(row);
      push({
        id: `explore-${key}`,
        reviewKey: key,
        scopeIds,
        priority: "explore",
        type: getCategory(row) || "New",
        scope: scopeIds.join(", "),
        title: getTitle(row),
        scenario: "Review as a new-feature opportunity and decide whether to demo or backlog.",
        source: "Used Scope What\u0027s New",
        sourceUrl: whatsNewLink(row)
      });
    });
    return tests;
  }

  function selectedRow(key, rows) {
    const index = Number(state.selected[`${key}Index`] || 0);
    return rows[index] || rows[0] || null;
  }

  function selectedScopeRow(rows) {
    const scopeId = state.selected.scopeId || state.selected.scopeReviewId;
    const existing = scopeId ? rows.find((row) => get(row, "Scope Item ID") === scopeId) : null;
    const fallback = existing || selectedRow("scope", rows);
    if (fallback) {
      state.selected.scopeId = get(fallback, "Scope Item ID");
      state.selected.scopeReviewId = state.selected.scopeId;
    }
    return fallback;
  }

  function rowKey(row) {
    return btoa(unescape(encodeURIComponent([getTitle(row), get(row, "Description(Description)", "Technical Name", "Deprecated Object"), getScopeItems(row).join(",")].join("|")))).slice(0, 32);
  }

  function shorten(value, max) {
    const text = String(value || "");
    return text.length > max ? `${text.slice(0, max - 1)}...` : text;
  }

  function empty(text) {
    return `<div class="empty-state">${escapeHtml(text)}</div>`;
  }

  function showToast(message) {
    clearTimeout(showToast.timer);
    toast.textContent = message;
    toast.classList.add("visible");
    showToast.timer = setTimeout(() => toast.classList.remove("visible"), 2500);
  }

  function downloadCsv(filename, rows) {
    const csv = rows.map((row) => row.map((cell) => `"${String(cell ?? "").replaceAll('"', '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    downloadBlob(filename, blob);
  }

  function downloadBlob(filename, blob) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function downloadJson(filename, payload) {
    downloadBlob(filename, new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" }));
  }

  const CLOUD_ALM_HEADERS = [
    "Test Case GUID",
    "Test Case Name*",
    "[Scope GUID]",
    "[Scope Name]",
    "[Solution Process GUID]",
    "[Solution Process Name]",
    "[Solution Process Flow GUID]",
    "[Solution Process Flow Name]",
    "[Solution Process Flow Diagram GUID]",
    "[Solution Process Flow Diagram Name]",
    "[Test Case Priority]",
    "[Test Case Owner]",
    "Test Case Status",
    "Activity GUID",
    "Activity Title*",
    "Activity Target Name",
    "Activity Target URL",
    "Action GUID",
    "Action Title*",
    "Action Instructions*",
    "Action Expected Result"
  ];

  function sectionForCloudAlm(section) {
    if (!section) return "";
    const lines = [];
    if (section.title) lines.push(String(section.title).toUpperCase());
    if (section.text) lines.push(String(section.text).trim());
    (section.items || []).forEach((item) => {
      if (item) lines.push(`- ${String(item).trim()}`);
    });
    return lines.filter(Boolean).join("\n");
  }

  function referencesForCloudAlm(guidance, item) {
    const references = dedupeReferences([
      ...(guidance?.references || []),
      ...(item.sourceUrl ? [{ label: "RASD / SAP What's New source", url: item.sourceUrl }] : [])
    ]);
    return references.length
      ? ["SAP SOURCE LINKS", ...references.map((reference) => `- ${reference.label || "SAP source"}: ${reference.url}`)].join("\n")
      : "";
  }

  function mediaForCloudAlm(guidance) {
    const media = [
      ...(guidance?.media || []).map((item) => `${item.label || item.type || "SAP media"}: ${item.url}`),
      ...(guidance?.screenshots || []).map((shot) => [shot.label || "Screenshot/evidence", shot.title, shot.text, shot.evidence].filter(Boolean).join(" - "))
    ].filter(Boolean);
    return media.length ? ["SAP MEDIA / SCREENSHOT NOTES", ...media.map((item) => `- ${item}`)].join("\n") : "";
  }

  function evidenceForCloudAlmExpected(guidance) {
    const screenshots = guidance?.screenshots || [];
    if (!screenshots.length) return "";
    return [
      "EVIDENCE TO ATTACH IN CLOUD ALM",
      ...screenshots.map((shot) => {
        const title = [shot.label, shot.title].filter(Boolean).join(" - ");
        const detail = [shot.text, shot.evidence].filter(Boolean).join(" ");
        return `- ${[title, detail].filter(Boolean).join(": ")}`;
      })
    ].join("\n");
  }

  function cloudAlmCellText(parts, max = 30000) {
    return shorten(parts.filter(Boolean).join("\n\n").replace(/\n{3,}/g, "\n\n"), max);
  }

  function cloudAlmActionInstruction(item, recommendation, review, guidance) {
    const base = [
      `RELEASE CHANGE: ${item.title}`,
      `TEST RECOMMENDATION: ${recommendation.label} - ${recommendation.reason}`,
      `PRACTICAL ACTION: ${recommendation.action || item.scenario}`,
      item.oldAppId || item.successorAppId ? `APP REPLACEMENT: Old app ${item.oldAppId || "TBA"}; successor app ${item.successorAppId || "TBA"}.` : "",
      item.catalogs ? `CATALOGS / ROLES TO VALIDATE: ${item.catalogs}.` : "",
      review ? `CUSTOMER RELEVANCE: ${reviewLabel(review.status)}.` : "",
      review?.note ? `REVIEWER NOTE: ${review.note}` : ""
    ];
    const sections = guidance?.sections || [];
    const expectedTitles = /expected result|after upgrade/i;
    const instructionSections = sections
      .filter((section) => !expectedTitles.test(section.title || ""))
      .map(sectionForCloudAlm);
    return cloudAlmCellText([
      ...base,
      ...instructionSections,
      referencesForCloudAlm(guidance, item),
      mediaForCloudAlm(guidance)
    ]);
  }

  function cloudAlmExpectedResult(item, recommendation, guidance) {
    const sections = guidance?.sections || [];
    const expectedSections = sections
      .filter((section) => /expected result|after upgrade/i.test(section.title || ""))
      .map(sectionForCloudAlm);
    const beforeEvidence = sections
      .filter((section) => /before upgrade/i.test(section.title || ""))
      .map(sectionForCloudAlm);
    const fallback = [
      "EXPECTED RESULT",
      "The changed app, process, integration, API, configuration, role, or extension behaves exactly as SAP describes and as CFA expects after the upgrade.",
      "No missing tile, broken authorization, unexpected field behavior, payload failure, output mismatch, or integration error is found.",
      `Evidence is attached in Cloud ALM for: ${item.title}.`
    ].join("\n");
    return cloudAlmCellText([
      expectedSections.length ? expectedSections.join("\n\n") : fallback,
      beforeEvidence.length ? ["BEFORE UPGRADE BASELINE TO COMPARE", ...beforeEvidence].join("\n") : "",
      evidenceForCloudAlmExpected(guidance),
      recommendation.level === "optional" ? "If the business does not adopt this capability now, expected result is a documented not-relevant or future-adoption decision." : ""
    ]);
  }

  function cloudAlmTemplateRows(scopeId = "", options = {}) {
    const packLabel = options.packLabel || "targeted Cloud ALM upload";
    const rows = [
      ["#", "This file follows the SAP Cloud ALM manual test case upload structure. GUID columns are intentionally blank for now and can be filled by Cloud ALM or updated later.", ...Array(19).fill("")],
      ["#", "Columns marked with [---] in SAP's original template are kept for structural compatibility.", ...Array(19).fill("")],
      ["#", `RASD ${state.data.meta.release || "release"} ${packLabel} generated ${new Date().toLocaleString()}`, ...Array(19).fill("")],
      Array(21).fill(""),
      CLOUD_ALM_HEADERS
    ];
    const items = options.items || (scopeId ? targetedTestItems(scopeId, options) : targetedTestItems("", options));
    const grouped = new Map();
    items.forEach((item) => {
      const scopes = scopeIdsForReview(item);
      const keys = scopeId ? [scopeId] : (scopes.length ? scopes : ["General"]);
      keys.forEach((key) => {
        if (!grouped.has(key)) grouped.set(key, []);
        grouped.get(key).push(item);
      });
    });
    if (!grouped.size && scopeId) grouped.set(scopeId, []);
    grouped.forEach((groupItems, key) => {
      const scopeRow = scopeRowById(key);
      const scopeTitle = scopeRow ? get(scopeRow, "Scope Item Title") : key;
      const testCaseName = key === "General"
        ? `2608 Upgrade - General Release Checks`
        : `2608 Upgrade - ${key} ${scopeTitle}`;
      const testRows = groupItems.length ? groupItems : [{
        title: `${key} - ${scopeTitle}`,
        scenario: "Review RASD-linked release changes for this scope item.",
        source: "RASD",
        priority: "action",
        type: "Scope item",
        reviewKey: ""
      }];
      testRows.forEach((item, index) => {
        const recommendation = testRecommendation(item);
        const review = item.reviewKey ? effectiveReviewEntry(item) : null;
        const saved = state.testState[item.id] || {};
        const guidance = sourceBackedGuidance(item);
        const actionInstruction = cloudAlmActionInstruction(item, recommendation, review, guidance);
        const expectedResult = cloudAlmExpectedResult(item, recommendation, guidance);
        const row = Array(21).fill("");
        row[0] = "";
        row[1] = index === 0 ? testCaseName : "";
        row[2] = "";
        row[3] = key === "General" ? "" : key;
        row[4] = "";
        row[5] = key === "General" ? "" : `${key} - ${scopeTitle}`;
        row[6] = "";
        row[7] = "";
        row[8] = "";
        row[9] = "";
        row[10] = recommendation.level === "required" ? "High" : recommendation.level === "targeted" ? "Medium" : "Low";
        row[11] = saved.owner || "";
        row[12] = index === 0 ? "In Preparation" : "";
        row[13] = "";
        row[14] = `RASD change - ${item.title}`;
        row[15] = "";
        row[16] = "";
        row[17] = "";
        row[18] = "Validate release change";
        row[19] = actionInstruction || "Review the RASD change and validate the impacted app, role, process, integration, or extensibility object with representative data.";
        row[20] = expectedResult;
        rows.push(row);
      });
    });
    return rows;
  }

  function xmlEscape(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&apos;");
  }

  function columnName(index) {
    let name = "";
    let n = index;
    while (n > 0) {
      const mod = (n - 1) % 26;
      name = String.fromCharCode(65 + mod) + name;
      n = Math.floor((n - mod) / 26);
    }
    return name;
  }

  function sheetXml(rows) {
    const body = rows.map((row, rowIndex) => {
      const r = rowIndex + 1;
      const cells = row.map((value, colIndex) => {
        if (value === "" || value == null) return "";
        const ref = `${columnName(colIndex + 1)}${r}`;
        return `<c r="${ref}" t="inlineStr"><is><t xml:space="preserve">${xmlEscape(value)}</t></is></c>`;
      }).join("");
      return `<row r="${r}">${cells}</row>`;
    }).join("");
    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><dimension ref="A1:U${rows.length}"/><sheetViews><sheetView workbookViewId="0"/></sheetViews><sheetFormatPr defaultRowHeight="15"/><sheetData>${body}</sheetData><pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/></worksheet>`;
  }

  const crcTable = (() => {
    const table = new Uint32Array(256);
    for (let n = 0; n < 256; n += 1) {
      let c = n;
      for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      table[n] = c >>> 0;
    }
    return table;
  })();

  function crc32(bytes) {
    let crc = 0xffffffff;
    for (let i = 0; i < bytes.length; i += 1) crc = crcTable[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
    return (crc ^ 0xffffffff) >>> 0;
  }

  function concatBytes(parts) {
    const total = parts.reduce((sum, part) => sum + part.length, 0);
    const out = new Uint8Array(total);
    let offset = 0;
    parts.forEach((part) => {
      out.set(part, offset);
      offset += part.length;
    });
    return out;
  }

  function u16(value) {
    return new Uint8Array([value & 0xff, (value >>> 8) & 0xff]);
  }

  function u32(value) {
    return new Uint8Array([value & 0xff, (value >>> 8) & 0xff, (value >>> 16) & 0xff, (value >>> 24) & 0xff]);
  }

  function dosDateTime(date = new Date()) {
    const time = (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
    const day = ((date.getFullYear() - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
    return { time, day };
  }

  function makeZip(files) {
    const encoder = new TextEncoder();
    const now = dosDateTime();
    const localParts = [];
    const centralParts = [];
    let offset = 0;
    files.forEach((file) => {
      const nameBytes = encoder.encode(file.name);
      const dataBytes = file.content instanceof Uint8Array ? file.content : encoder.encode(file.content);
      const crc = crc32(dataBytes);
      const local = concatBytes([
        u32(0x04034b50), u16(20), u16(0), u16(0), u16(now.time), u16(now.day), u32(crc), u32(dataBytes.length), u32(dataBytes.length), u16(nameBytes.length), u16(0), nameBytes, dataBytes
      ]);
      localParts.push(local);
      centralParts.push(concatBytes([
        u32(0x02014b50), u16(20), u16(20), u16(0), u16(0), u16(now.time), u16(now.day), u32(crc), u32(dataBytes.length), u32(dataBytes.length), u16(nameBytes.length), u16(0), u16(0), u16(0), u16(0), u32(0), u32(offset), nameBytes
      ]));
      offset += local.length;
    });
    const central = concatBytes(centralParts);
    const end = concatBytes([u32(0x06054b50), u16(0), u16(0), u16(files.length), u16(files.length), u32(central.length), u32(offset), u16(0)]);
    return concatBytes([...localParts, central, end]);
  }

  function xlsxBytes(filename, rows) {
    const created = new Date().toISOString().replace(/\.\d{3}Z$/, "Z");
    const files = [
      { name: "[Content_Types].xml", content: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>' },
      { name: "_rels/.rels", content: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/></Relationships>' },
      { name: "xl/workbook.xml", content: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Test Cases" sheetId="1" r:id="rId1"/></sheets></workbook>' },
      { name: "xl/_rels/workbook.xml.rels", content: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>' },
      { name: "xl/worksheets/sheet1.xml", content: sheetXml(rows) },
      { name: "docProps/app.xml", content: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>RASD Workbench</Application></Properties>' },
      { name: "docProps/core.xml", content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>${xmlEscape(filename)}</dc:title><dc:creator>RASD Workbench</dc:creator><cp:lastModifiedBy>RASD Workbench</cp:lastModifiedBy><dcterms:created xsi:type="dcterms:W3CDTF">${created}</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">${created}</dcterms:modified></cp:coreProperties>` }
    ];
    return makeZip(files);
  }

  function downloadXlsx(filename, rows) {
    const blob = new Blob([xlsxBytes(filename, rows)], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function targetedTestItems(scopeId = "", options = {}) {
    const includeFuture = Boolean(options.includeFuture);
    return sortByReview(state.data.derived.tests.filter((item) => {
      const recommendation = testRecommendation(item);
      if (recommendation.level === "skip") return false;
      if (!includeFuture && recommendation.level === "optional") return false;
      if (!scopeId) return true;
      return scopeIdsForReview(item).includes(scopeId);
    }));
  }

  function futureBacklogItems(scopeId = "") {
    return sortByReview(state.data.derived.tests.filter((item) => {
      const recommendation = testRecommendation(item);
      if (recommendation.level !== "optional") return false;
      if (!scopeId) return true;
      return scopeIdsForReview(item).includes(scopeId);
    }));
  }

  function exportTests() {
    const rows = cloudAlmTemplateRows();
    downloadXlsx(`rasd-${state.data.meta.release || "release"}-cloud-alm-upload.xlsx`, rows);
    showToast("Cloud ALM upload workbook downloaded");
  }

  function exportFutureBacklog() {
    const rows = cloudAlmTemplateRows("", {
      items: futureBacklogItems(),
      packLabel: "future adoption Cloud ALM upload"
    });
    downloadXlsx(`rasd-${state.data.meta.release || "release"}-future-adoption-cloud-alm-upload.xlsx`, rows);
    showToast("Future Cloud ALM workbook downloaded");
  }

  function exportCloudAlmStaging(scopeId = "") {
    const rows = cloudAlmTemplateRows(scopeId, { packLabel: scopeId ? `${scopeId} Cloud ALM upload` : "targeted Cloud ALM upload" });
    downloadXlsx(`rasd-${state.data.meta.release || "release"}-${scopeId || "all"}-cloud-alm-upload.xlsx`, rows);
    showToast("Cloud ALM upload workbook downloaded");
  }

  function safeFilePart(value) {
    return String(value || "")
      .replace(/[<>:"/\\|?*\x00-\x1f]/g, "-")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 90) || "scope";
  }

  function releaseScopeIdsForCloudAlm() {
    const scopeIds = scopeRowsWithDirectChanges(state.data.usedScopeImpact, state.data)
      .map((row) => get(row, "Scope Item ID"))
      .filter(Boolean);
    return [...new Set(scopeIds)]
      .filter((scopeId) => targetedTestItems(scopeId, { includeFuture: false }).length);
  }

  function csvText(rows) {
    return rows.map((row) => row.map((cell) => `"${String(cell ?? "").replaceAll('"', '""')}"`).join(",")).join("\n");
  }

  function exportScopeCloudAlmZip() {
    const release = state.data.meta.release || customerProfile.release || "release";
    const scopeIds = releaseScopeIdsForCloudAlm();
    const files = [];
    const manifest = [["Scope Item", "Scope Title", "Workbook", "Included Test Rows"]];

    scopeIds.forEach((scopeId) => {
      const items = targetedTestItems(scopeId, { includeFuture: false });
      if (!items.length) return;
      const scopeRow = scopeRowById(scopeId);
      const scopeTitle = scopeRow ? get(scopeRow, "Scope Item Title") : scopeId;
      const workbookName = `${safeFilePart(scopeId)}-${safeFilePart(scopeTitle)}-cloud-alm-upload.xlsx`;
      const rows = cloudAlmTemplateRows(scopeId, {
        items,
        packLabel: `${scopeId} reviewed scope Cloud ALM upload`
      });
      files.push({ name: workbookName, content: xlsxBytes(workbookName, rows) });
      manifest.push([scopeId, scopeTitle, workbookName, items.length]);
    });

    if (!files.length) {
      showToast("No relevant release test rows to export");
      return;
    }

    files.unshift({
      name: "manifest.csv",
      content: csvText(manifest)
    });
    files.push({
      name: "README.txt",
      content: [
        `RASD ${release} Cloud ALM scope upload pack`,
        "",
        "One XLSX workbook is generated per scope item with at least one included release test row.",
        "Rows marked not relevant/skipped and future/adoption backlog items are not included in this ZIP.",
        "GUID columns are intentionally blank/TBA-ready so Cloud ALM can accept the manual-test-case upload structure.",
        "Upload the workbooks in SAP Cloud ALM Test Preparation, then assign the created test cases to a Cloud ALM Test Plan if you need an execution cycle."
      ].join("\n")
    });

    downloadBlob(`rasd-${release}-reviewed-scope-cloud-alm-pack.zip`, new Blob([makeZip(files)], { type: "application/zip" }));
    showToast(`${files.length - 2} scope Cloud ALM workbooks downloaded`);
  }

  function exportScopeTestPack(scopeId) {
    const officialPack = officialCloudAlmScopePacks().find((pack) => pack.scopeId === scopeId);
    if (officialPack) {
      const link = document.createElement("a");
      link.href = officialPack.file;
      link.download = officialPack.file.split("/").pop();
      document.body.appendChild(link);
      link.click();
      link.remove();
      showToast(`${scopeId} Cloud ALM workbook downloaded`);
      return;
    }
    exportCloudAlmStaging(scopeId);
  }

  function exportPublicSectorHighlights() {
    const rows = [["Title", "Scope", "Category", "Type", "Action", "Country Fit", "Recommendation", "Customer Relevance", "Why It Matters", "Next Action", "Source"]];
    sortByReview(state.data.derived.publicSectorHighlights, (a, b) => publicSectorScore(b) - publicSectorScore(a)).forEach((row) => {
      const recommendation = testRecommendation(row);
      const review = effectiveReviewEntry(row);
      rows.push([
        getTitle(row),
        getScopeItems(row).join(", "),
        getCategory(row),
        getType(row),
        getAction(row),
        countryFit(row).label,
        recommendation.label,
        reviewLabel(review.status),
        recommendation.reason,
        recommendation.action,
        get(row, "What's New Document(What's New Document)", "What\u0027s New Document(What\u0027s New Document)")
      ]);
    });
    downloadCsv(`rasd-${state.data.meta.release || "release"}-public-sector-highlights.csv`, rows);
    showToast("Public sector highlights exported");
  }

  function createProgressStore(config) {
    if (!config || config.enabled === false) return null;
    const endpoint = config.endpoint || config.url || config.loadUrl || config.saveUrl;
    if (!endpoint) return null;
    const label = config.label || "Shared progress";
    const baseHeaders = config.headers || {};
    return {
      label,
      async load() {
        const response = await fetch(config.loadUrl || endpoint, {
          method: config.loadMethod || "GET",
          headers: baseHeaders,
          cache: "no-store"
        });
        if (response.status === 404 || response.status === 204) return {};
        if (!response.ok) throw new Error(`Progress load failed (${response.status})`);
        return response.json();
      },
      async save(payload) {
        const response = await fetch(config.saveUrl || endpoint, {
          method: config.saveMethod || "PUT",
          headers: { "Content-Type": "application/json", ...baseHeaders },
          body: JSON.stringify(payload)
        });
        if (!response.ok) throw new Error(`Progress save failed (${response.status})`);
      }
    };
  }

  function progressPayload(sourceUrl = window.location.href) {
    return {
      schema: "rasd-workbench-progress",
      version: 1,
      updatedAt: new Date().toISOString(),
      release: state.data.meta.release || customerProfile.release,
      customer: document.querySelector("#customerName")?.textContent?.trim() || "Customer",
      sourceUrl,
      reviewState: state.reviewState,
      testState: state.testState
    };
  }

  function exportProgressState() {
    const payload = progressPayload();
    downloadJson(`rasd-${payload.release || "release"}-review-progress.json`, payload);
    showToast("Review progress exported");
  }

  function progressStateFromPayload(payload) {
    const reviewState = payload.reviewState || payload["rasd-review-state"] || {};
    const testState = payload.testState || payload["rasd-test-state"] || {};
    if (!reviewState || typeof reviewState !== "object" || Array.isArray(reviewState)) {
      throw new Error("Review state missing");
    }
    if (!testState || typeof testState !== "object" || Array.isArray(testState)) {
      throw new Error("Test state missing");
    }
    return { reviewState, testState };
  }

  async function importProgressState(file) {
    const { reviewState, testState } = progressStateFromPayload(JSON.parse(await file.text()));
    state.reviewState = mergeReviewStates(state.reviewState, reviewState);
    state.testState = mergeTestStates(state.testState, testState);
    saveReviewState();
    saveTestState();
    migrateReviewState();
    render();
    showToast("Review progress imported");
  }

  function loadTestState() {
    try {
      return JSON.parse(localStorage.getItem("rasd-test-state") || "{}");
    } catch {
      return {};
    }
  }

  function saveTestState(options = {}) {
    localStorage.setItem("rasd-test-state", JSON.stringify(state.testState));
    if (options.sync !== false) queueSharedProgressSave("test update");
  }

  function entryTime(entry) {
    const timestamp = Date.parse(entry?.reviewedAt || "");
    return Number.isFinite(timestamp) ? timestamp : 0;
  }

  function mergeReviewStates(...sources) {
    return sources.reduce((merged, source) => {
      Object.entries(source || {}).forEach(([key, entry]) => {
        if (!entry || typeof entry !== "object") return;
        const existing = merged[key];
        if (!existing) {
          merged[key] = { ...entry };
          return;
        }
        const incomingTime = entryTime(entry);
        const existingTime = entryTime(existing);
        if (incomingTime && existingTime && incomingTime < existingTime) return;
        if (entry.status === "review-needed" && existing.status !== "review-needed") return;
        merged[key] = { ...existing, ...entry };
      });
      return merged;
    }, {});
  }

  function mergeTestStates(...sources) {
    return sources.reduce((merged, source) => {
      Object.entries(source || {}).forEach(([key, entry]) => {
        if (!entry || typeof entry !== "object") return;
        merged[key] = { ...(merged[key] || {}), ...entry };
      });
      return merged;
    }, {});
  }

  function updateProgressStatus() {
    if (!progressStatus) return;
    progressStatus.className = `progress-status ${progressSync.status}`;
    const suffix = progressSync.lastSavedAt ? ` - ${progressSync.lastSavedAt}` : "";
    progressStatus.textContent = `Progress: ${progressSync.label}${suffix}`;
    progressStatus.title = progressSync.detail || "";
  }

  async function hydrateProgressStore() {
    if (!progressStore) {
      progressSync.status = "local";
      progressSync.label = "local backup";
      progressSync.detail = "Shared progress store is not configured yet. The recovered backup and browser cache are being used.";
      updateProgressStatus();
      return;
    }
    progressSync.status = "loading";
    progressSync.label = progressStore.label;
    progressSync.detail = "Loading shared progress state";
    updateProgressStatus();
    try {
      const payload = await progressStore.load();
      const { reviewState, testState } = progressStateFromPayload(payload);
      state.reviewState = mergeReviewStates(state.reviewState, reviewState);
      state.testState = mergeTestStates(testState, state.testState);
      saveReviewState({ sync: false });
      saveTestState({ sync: false });
      migrateReviewState({ sync: false });
      render();
      progressSync.status = "synced";
      progressSync.detail = "Shared progress loaded and merged with recovered local state";
      updateProgressStatus();
      queueSharedProgressSave("merge");
    } catch (error) {
      console.error(error);
      progressSync.status = "error";
      progressSync.detail = "Shared progress failed to load. Local recovered backup is still available.";
      updateProgressStatus();
      showToast("Shared progress unavailable; using local backup");
    }
  }

  function queueSharedProgressSave(reason = "change") {
    if (!progressStore) {
      updateProgressStatus();
      return;
    }
    clearTimeout(sharedProgressSaveTimer);
    progressSync.status = "saving";
    progressSync.label = progressStore.label;
    progressSync.detail = `Saving shared progress after ${reason}`;
    updateProgressStatus();
    sharedProgressSaveTimer = setTimeout(async () => {
      try {
        await progressStore.save(progressPayload("shared-progress-sync"));
        progressSync.status = "synced";
        progressSync.lastSavedAt = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        progressSync.detail = "Shared progress saved";
      } catch (error) {
        console.error(error);
        progressSync.status = "error";
        progressSync.detail = "Shared progress failed to save. Local browser cache still has the change.";
        showToast("Shared progress save failed");
      }
      updateProgressStatus();
    }, 700);
  }

  function loadReviewState() {
    const backup = window.RASD_REVIEW_STATE_BACKUP || {};
    try {
      const stored = JSON.parse(localStorage.getItem("rasd-review-state") || "{}");
      const merged = mergeReviewStates(backup, stored);
      if (Object.keys(merged).length !== Object.keys(stored).length) {
        localStorage.setItem("rasd-review-state", JSON.stringify(merged));
      }
      return merged;
    } catch {
      return mergeReviewStates(backup);
    }
  }

  function saveReviewState(options = {}) {
    localStorage.setItem("rasd-review-state", JSON.stringify(state.reviewState));
    if (options.sync !== false) queueSharedProgressSave("review update");
  }

  function reviewableRowsForMigration() {
    const data = state.data;
    return [
      ...data.usedScopeImpact,
      ...data.activatedScopeImpact,
      ...data.completeScopeImpact,
      ...data.usedPersonalizedWhatsNew,
      ...data.activatedPersonalizedWhatsNew,
      ...data.completeWhatsNew,
      ...data.completeExtensibility,
      ...data.changedExtensibility,
      ...data.deletedDeprecatedExtensibility,
      ...data.applications,
      ...data.deletedDeprecatedBusinessCatalogs,
      ...data.renamedAppTiles,
      ...data.whereUsedAssociatedCatalogs,
      ...data.whereUsedCustomCds,
      ...data.iamApps,
      ...data.deprecatedObjects,
      ...data.deprecatedAttributes,
      ...data.derived.publicSectorHighlights,
      ...data.derived.tests
    ].filter(hasUsefulValues);
  }

  function migrateReviewState(options = {}) {
    let changed = false;
    reviewableRowsForMigration().forEach((row) => {
      const primary = reviewKey(row);
      if (!primary || state.reviewState[primary]) return;
      const alias = reviewKeyAliases(row).find((key) => key !== primary && state.reviewState[key]);
      if (!alias) return;
      state.reviewState[primary] = { ...state.reviewState[alias] };
      changed = true;
    });
    if (changed) saveReviewState(options);
    return changed;
  }

  async function importZip(file) {
    await ensureImportLibraries();
    const zip = await JSZip.loadAsync(file);
    const readWorkbook = async (name) => {
      const zipFile = Object.values(zip.files).find((entry) => entry.name.endsWith(name));
      if (!zipFile) return null;
      const buffer = await zipFile.async("arraybuffer");
      return XLSX.read(buffer, { type: "array" });
    };
    const rows = (workbook, sheet) => {
      if (!workbook || !workbook.Sheets[sheet]) return [];
      return XLSX.utils.sheet_to_json(workbook.Sheets[sheet], { defval: "" }).map(cleanRow).filter(hasUsefulValues);
    };
    const usedScope = await readWorkbook("Used Scope Items.xlsx");
    const activatedScope = await readWorkbook("Activated Scope Items.xlsx");
    const complete = await readWorkbook("Complete What's New Information.xlsx");
    const usedObjects = await readWorkbook("Used Objects.xlsx");
    const successor = await readWorkbook("Successor Companion.xlsx");
    state.data = normalizeData({
      meta: { release: "Imported", customer: "Imported customer", generatedFrom: file.name, generatedOn: new Date().toLocaleString() },
      usedScopeImpact: rows(usedScope, "Scope Item Impact"),
      activatedScopeImpact: rows(activatedScope, "Scope Item Impact"),
      usedPersonalizedWhatsNew: rows(usedScope, "Personalized Whats New"),
      activatedPersonalizedWhatsNew: rows(activatedScope, "Personalized Whats New"),
      completeScopeImpact: rows(complete, "Scope Item Impact"),
      completeWhatsNew: rows(complete, "Complete Whats New"),
      completeExtensibility: rows(complete, "Extensibility Objects"),
      changedExtensibility: rows(usedObjects, "Changed Extensibility"),
      deletedDeprecatedExtensibility: rows(usedObjects, "Del_Dep Extensibility"),
      applications: rows(usedObjects, "Applications"),
      deletedDeprecatedBusinessCatalogs: rows(usedObjects, "Del_Dep Business Catalogs"),
      renamedAppTiles: rows(usedObjects, "Renamed App Tiles"),
      whereUsedAssociatedCatalogs: rows(usedObjects, "WhereUsed_Assoc. Bus. Catalogs"),
      whereUsedCustomCds: rows(usedObjects, "WhereUsed_Custom CDS Views"),
      iamApps: rows(usedObjects, "IAM Apps"),
      usedVsActivatedScopeItems: rows(successor, "Used VS Activated Scope Items"),
      deprecatedObjects: rows(successor, "Deprecated Objects"),
      deprecatedAttributes: rows(successor, "Deprecated Attributes_Entities")
    });
    state.selected = {};
    migrateReviewState();
    showToast(`${file.name} imported`);
    render();
  }

  async function ensureImportLibraries() {
    if (window.JSZip && window.XLSX) return;
    document.querySelector("#importNote").textContent = "Loading ZIP parser...";
    await loadScript("https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js");
    await loadScript("https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js");
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        existing.addEventListener("load", resolve, { once: true });
        existing.addEventListener("error", reject, { once: true });
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  document.addEventListener("click", (event) => {
    const jump = event.target.closest("[data-jump]");
    if (jump) {
      state.page = jump.dataset.jump;
      if (jump.dataset.jumpFilterKey) state.selected[jump.dataset.jumpFilterKey] = jump.dataset.jumpFilterValue;
      if (jump.dataset.jumpPriority) {
        state.priority = jump.dataset.jumpPriority;
        priorityFilter.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item.dataset.priority === state.priority));
      }
      render();
      return;
    }
    const nav = event.target.closest(".nav-link");
    if (nav) {
      state.page = nav.dataset.page;
      render();
      return;
    }
    const filter = event.target.closest("[data-filter-key]");
    if (filter) {
      state.selected[filter.dataset.filterKey] = filter.dataset.filterValue;
      state.selected[`${state.page}Index`] = 0;
      render();
      return;
    }
    const select = event.target.closest("[data-select-page]");
    if (select) {
      state.selected[`${select.dataset.selectPage}Index`] = Number(select.dataset.selectIndex);
      if (select.dataset.selectPage === "scope") {
        state.selected.scopeId = select.dataset.scopeId || state.selected.scopeId;
        state.selected.scopeReviewId = state.selected.scopeId;
        state.page = "scopeReview";
        select.blur();
        render();
        requestAnimationFrame(() => {
          resetPageScroll();
          setTimeout(resetPageScroll, 0);
        });
        return;
      }
      renderWithScrollRestore({ includeDetail: false });
      return;
    }
    const openScopeReview = event.target.closest("[data-open-scope-review]");
    if (openScopeReview) {
      state.selected.scopeReviewId = openScopeReview.dataset.openScopeReview;
      state.selected.scopeId = state.selected.scopeReviewId;
      state.page = "scopeReview";
      openScopeReview.blur();
      render();
      requestAnimationFrame(() => {
        resetPageScroll();
        setTimeout(resetPageScroll, 0);
      });
      return;
    }
    const openExtReview = event.target.closest("[data-open-ext-review]");
    if (openExtReview) {
      state.selected.extReviewKey = openExtReview.dataset.openExtReview;
      state.page = "extReview";
      openExtReview.blur();
      render();
      requestAnimationFrame(() => {
        resetPageScroll();
        setTimeout(resetPageScroll, 0);
      });
      return;
    }
    const openChange = event.target.closest("[data-open-change]");
    if (openChange) {
      state.page = "whatsnew";
      render();
      return;
    }
    const addTest = event.target.closest("[data-add-test]");
    if (addTest) {
      showToast("Relevant release rows are included in the Scope Items Cloud ALM ZIP");
      return;
    }
    const exportScope = event.target.closest("[data-export-scope]");
    if (exportScope) {
      exportScopeTestPack(exportScope.dataset.exportScope);
      return;
    }
    if (event.target.id === "downloadTests") exportTests();
    if (event.target.id === "downloadScopeAlmZip") exportScopeCloudAlmZip();
    if (event.target.id === "downloadCoverageOwners") exportCoverageOwners();
    if (event.target.id === "downloadCloudAlm") exportCloudAlmStaging();
    if (event.target.id === "downloadFutureBacklog") exportFutureBacklog();
    if (event.target.id === "downloadPublicSector") exportPublicSectorHighlights();
    if (event.target.id === "exportProgress") exportProgressState();
    if (event.target.id === "importProgress") stateInput?.click();
    if (event.target.id === "resetTests") {
      state.testState = {};
      saveTestState();
      render();
      showToast("Local test statuses reset");
    }
  });

  document.addEventListener("change", (event) => {
    const reviewStatus = event.target.closest("[data-review-status]");
    if (reviewStatus) {
      const key = reviewStatus.dataset.reviewStatus;
      state.reviewState[key] = { ...(state.reviewState[key] || {}), status: reviewStatus.value, reviewedAt: new Date().toISOString() };
      saveReviewState();
      renderWithScrollRestore();
      showToast(`Marked ${reviewLabel(reviewStatus.value).toLowerCase()}`);
      return;
    }
    const status = event.target.closest("[data-test-status]");
    if (status) {
      const id = status.dataset.testStatus;
      state.testState[id] = { ...(state.testState[id] || {}), status: status.value };
      saveTestState();
      if (state.page === "coverage") renderWithScrollRestore();
    }
    const owner = event.target.closest("[data-test-owner]");
    if (owner) {
      const id = owner.dataset.testOwner;
      state.testState[id] = { ...(state.testState[id] || {}), owner: owner.value };
      saveTestState();
    }
  });

  document.addEventListener("input", (event) => {
    const pageSearch = event.target.closest("[data-page-search]");
    if (pageSearch) {
      const cursor = pageSearch.selectionStart ?? pageSearch.value.length;
      state.search = pageSearch.value;
      if (searchInput) searchInput.value = state.search;
      state.selected[`${state.page}Index`] = 0;
      render();
      requestAnimationFrame(() => {
        const nextSearch = document.querySelector("[data-page-search]");
        if (!nextSearch) return;
        nextSearch.focus();
        nextSearch.setSelectionRange?.(cursor, cursor);
      });
      return;
    }

    const reviewNote = event.target.closest("[data-review-note]");
    if (reviewNote) {
      const key = reviewNote.dataset.reviewNote;
      state.reviewState[key] = { ...(state.reviewState[key] || { status: "review-needed" }), note: reviewNote.value, reviewedAt: new Date().toISOString() };
      saveReviewState();
      return;
    }
    const owner = event.target.closest("[data-test-owner]");
    if (owner) {
      const id = owner.dataset.testOwner;
      state.testState[id] = { ...(state.testState[id] || {}), owner: owner.value };
      saveTestState();
    }
  });

  searchInput.addEventListener("input", () => {
    state.search = searchInput.value;
    state.selected[`${state.page}Index`] = 0;
    render();
  });

  priorityFilter.addEventListener("click", (event) => {
    const button = event.target.closest("[data-priority]");
    if (!button) return;
    state.priority = button.dataset.priority;
    priorityFilter.querySelectorAll("button").forEach((item) => item.classList.toggle("active", item === button));
    state.selected[`${state.page}Index`] = 0;
    render();
  });

  zipInput.addEventListener("change", async () => {
    const file = zipInput.files && zipInput.files[0];
    if (!file) return;
    document.querySelector("#importNote").textContent = "Importing ZIP...";
    try {
      await importZip(file);
      document.querySelector("#importNote").textContent = `Imported ${file.name}.`;
    } catch (error) {
      console.error(error);
      document.querySelector("#importNote").textContent = "Import failed. Using preloaded data.";
      showToast("Import failed. Check the ZIP structure.");
    }
  });

  stateInput?.addEventListener("change", async () => {
    const file = stateInput.files?.[0];
    if (!file) return;
    try {
      await importProgressState(file);
    } catch (error) {
      console.error(error);
      showToast("Progress import failed");
    } finally {
      stateInput.value = "";
    }
  });

  migrateReviewState({ sync: false });
  render();
  hydrateProgressStore();
})();
