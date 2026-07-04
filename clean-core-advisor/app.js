(function () {
  const seed = window.CLEAN_CORE_ADVISOR_SEED;
  const storageKey = "clean-core-advisor-history-v1";

  const state = {
    history: loadHistory(),
    result: null,
    liveErrors: [],
    groupBy: "need"
  };

  const els = {
    mainStage: document.querySelector("#mainStage"),
    homeLink: document.querySelector("#homeLink"),
    landingView: document.querySelector("#landingView"),
    resultView: document.querySelector("#resultView"),
    resultTabs: document.querySelector("#resultTabs"),
    promptForm: document.querySelector("#promptForm"),
    promptInput: document.querySelector("#promptInput"),
    askButton: document.querySelector("#askButton"),
    newPrompt: document.querySelector("#newPrompt"),
    savePrompt: document.querySelector("#savePrompt"),
    logQuestion: document.querySelector("#logQuestion"),
    clearHistory: document.querySelector("#clearHistory"),
    copyAnswer: document.querySelector("#copyAnswer"),
    exportAnswer: document.querySelector("#exportAnswer"),
    historyList: document.querySelector("#historyList"),
    exampleList: document.querySelector("#exampleList"),
    hubStatus: document.querySelector("#hubStatus"),
    userBubble: document.querySelector("#userBubble"),
    answerModeLabel: document.querySelector("#answerModeLabel"),
    scoreRing: document.querySelector("#scoreRing"),
    scoreValue: document.querySelector("#scoreValue"),
    routeGrid: document.querySelector("#routeGrid"),
    recommendationTitle: document.querySelector("#recommendationTitle"),
    recommendationSummary: document.querySelector("#recommendationSummary"),
    rationaleList: document.querySelector("#rationaleList"),
    stepsList: document.querySelector("#stepsList"),
    optionGrid: document.querySelector("#optionGrid"),
    implementationFlow: document.querySelector("#implementationFlow"),
    cdsPanelEyebrow: document.querySelector("#cdsPanelEyebrow"),
    cdsPanelTitle: document.querySelector("#cdsPanelTitle"),
    candidateList: document.querySelector("#candidateList"),
    groupBy: document.querySelector("#groupBy"),
    btpFields: document.querySelector("#btpFields"),
    developerChecklist: document.querySelector("#developerChecklist"),
    guardrailList: document.querySelector("#guardrailList"),
    toast: document.querySelector("#toast")
  };

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    renderExamples();
    renderHistory();
    bindEvents();
    resizePrompt();
    const sharedPrompt = new URLSearchParams(window.location.search).get("q");
    if (sharedPrompt) {
      els.promptInput.value = sharedPrompt;
      resizePrompt();
      analysePrompt(sharedPrompt, { save: false });
    } else {
      showHome();
    }
  }

  function bindEvents() {
    els.promptForm.addEventListener("submit", (event) => {
      event.preventDefault();
      analysePrompt(els.promptInput.value, { save: true });
    });

    els.promptInput.addEventListener("input", resizePrompt);
    els.promptInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        els.promptForm.requestSubmit();
      }
    });

    els.newPrompt.addEventListener("click", () => {
      els.promptInput.value = "";
      resizePrompt();
      showHome();
      els.promptInput.focus();
    });

    els.homeLink.addEventListener("click", (event) => {
      event.preventDefault();
      showHome();
    });

    els.savePrompt.addEventListener("click", () => saveCurrentQuestion());
    els.logQuestion.addEventListener("click", openSharedQuestionLog);

    els.clearHistory.addEventListener("click", () => {
      state.history = [];
      saveHistory();
      renderHistory();
      showToast("History cleared.");
    });

    els.copyAnswer.addEventListener("click", copyAnswer);
    els.exportAnswer.addEventListener("click", exportAnswer);

    els.groupBy.addEventListener("change", () => {
      state.groupBy = els.groupBy.value;
      renderCandidates();
    });

    els.resultTabs.querySelectorAll("[data-tab]").forEach((button) => {
      button.addEventListener("click", () => selectTab(button.dataset.tab));
    });
  }

  function showHome() {
    state.result = null;
    state.liveErrors = [];
    els.mainStage.classList.add("is-home");
    els.mainStage.classList.remove("has-result");
    els.resultView.hidden = true;
    els.landingView.hidden = false;
    els.hubStatus.textContent = "Ready";
    els.copyAnswer.disabled = true;
    els.exportAnswer.disabled = true;
    updateSharedLogButton("");
    renderHistory();
  }

  function showResult() {
    els.mainStage.classList.remove("is-home");
    els.mainStage.classList.add("has-result");
    els.landingView.hidden = true;
    els.resultView.hidden = false;
    els.copyAnswer.disabled = !state.result;
    els.exportAnswer.disabled = !state.result;
    updateSharedLogButton(state.result ? state.result.question : "");
  }

  function selectTab(tabId) {
    document.querySelectorAll(".result-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.id === tabId);
    });
    els.resultTabs.querySelectorAll("[data-tab]").forEach((button) => {
      button.classList.toggle("active", button.dataset.tab === tabId);
    });
  }

  function configureResultMode(mode) {
    els.resultView.dataset.mode = mode;
    const cdsOnly = mode === "cdsOnly";
    els.scoreRing.hidden = cdsOnly;
    els.routeGrid.hidden = cdsOnly;
    els.resultTabs.hidden = cdsOnly;
    document.querySelector("#decisionPanel").hidden = cdsOnly;
    document.querySelector("#implementationPanel").hidden = cdsOnly;
    selectTab(cdsOnly ? "cdsPanel" : "decisionPanel");
  }

  async function analysePrompt(prompt, options = {}) {
    const question = clean(prompt || "");
    if (!question) {
      showToast("Enter a requirement first.");
      return;
    }

    const mode = detectRequestMode(question);
    state.liveErrors = [];
    els.promptInput.value = question;
    resizePrompt();
    showLoading(question, mode);

    const needs = mode === "cdsOnly" ? parseCdsLookupNeeds(question) : parseNeeds(question);
    if (options.save) saveQuestion(question, { showToast: false });
    updateSharedLogButton(question);
    const routeScores = scoreRoutes(question, needs);
    const resultMap = new Map();
    const promises = [];

    needs.forEach((need) => {
      need.terms.forEach((term) => promises.push(loadHubTerm(need, term, resultMap)));
    });

    await Promise.allSettled(promises);

    needs.forEach((need) => {
      const hasLive = Array.from(resultMap.values()).some((candidate) => candidate.needIds.includes(need.id));
      if (need.id === "purchase-order-budget-period-check" || need.id === "purchase-requisition-budget-period-check" || !hasLive || state.liveErrors.length) addSeedResults(need, resultMap);
    });

    const candidates = Array.from(resultMap.values())
      .map(enrichCandidate)
      .filter((candidate) => candidate.type === "CDS View" || candidate.type === "OData API" || candidate.type === "Extensibility Point")
      .filter((candidate) => isRelevantCandidate(candidate, needs))
      .filter((candidate) => mode !== "cdsOnly" || matchesLookupKind(candidate, question))
      .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));

    const refinedScores = adjustRouteScores(routeScores, question, needs, candidates);
    const recommendation = buildRecommendation(question, needs, refinedScores, candidates);

    state.result = {
      id: createId(),
      mode,
      question,
      createdAt: new Date().toISOString(),
      needs,
      routeScores: refinedScores,
      candidates,
      recommendation
    };

    els.hubStatus.textContent = state.liveErrors.length ? "Live + seed" : "Live";
    if (options.save) saveCurrentQuestion(false);
    renderAll();
    showResult();
    const requestedTab = new URLSearchParams(window.location.search).get("tab");
    if (mode !== "cdsOnly" && requestedTab) selectTab(requestedTab);
  }

  function showLoading(question, mode) {
    els.hubStatus.textContent = "Searching";
    els.userBubble.textContent = question;
    els.answerModeLabel.textContent = mode === "cdsOnly" ? "CDS/API lookup" : "Recommendation";
    els.recommendationTitle.textContent = mode === "cdsOnly" ? "Finding released CDS/API objects" : "Searching official SAP surfaces";
    els.recommendationSummary.textContent = mode === "cdsOnly"
      ? "Only CDS/API candidates will be shown for this request."
      : "Checking SAP Business Accelerator Hub first, then falling back to seeded official patterns if needed.";
    els.scoreValue.textContent = "...";
    els.scoreRing.dataset.status = "medium";
    els.routeGrid.innerHTML = seed.routes.map((route) => routeChip(route, 0, "")).join("");
    els.rationaleList.innerHTML = "<li>Looking for released CDS views and APIs.</li>";
    els.stepsList.innerHTML = "<li>Classifying whether this should be standard, in-app/developer extensibility, or side-by-side.</li>";
    els.optionGrid.innerHTML = "";
    els.implementationFlow.innerHTML = "";
    els.candidateList.innerHTML = `<div class="empty-cell">Searching SAP Business Accelerator Hub...</div>`;
    els.developerChecklist.innerHTML = "";
    els.btpFields.innerHTML = "";
    els.guardrailList.innerHTML = "";
    state.result = null;
    configureResultMode(mode);
    showResult();
  }

  async function loadHubTerm(need, term, resultMap) {
    try {
      const payload = await fetchSapHub(term, 10);
      const hits = payload && payload.hits && payload.hits.hits ? payload.hits.hits : [];
      hits.forEach((hit) => addCandidate(resultMap, hit._source || {}, need, "SAP Business Accelerator Hub", term, false));
    } catch (error) {
      state.liveErrors.push(`${term}: ${error.message || error}`);
    }
  }

  async function fetchSapHub(term, top) {
    const params = new URLSearchParams();
    params.set("searchterm", term);
    params.set("tab", "All");
    params.set("$scope", "all");
    params.set("$top", String(top));

    const urls = location.protocol.startsWith("http")
      ? [`/api/sap-search?${params.toString()}`, `https://api.sap.com/api/1.0/searchservice?${params.toString()}`]
      : [`https://api.sap.com/api/1.0/searchservice?${params.toString()}`];

    let lastError;
    for (const url of urls) {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 12000);
      try {
        const response = await fetch(url, { headers: { Accept: "application/json" }, signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      } catch (error) {
        lastError = error;
      } finally {
        window.clearTimeout(timeout);
      }
    }
    throw lastError || new Error("SAP Hub search unavailable");
  }

  function parseNeeds(prompt) {
    const normalized = normalize(prompt);
    const matched = seed.needs.filter((need) => {
      return need.aliases.some((alias) => normalized.includes(normalize(alias))) || normalized.includes(normalize(need.label));
    });

    const inferred = [...matched];
    addInferredNeed(inferred, normalized, "purchase-order-budget-period-check", /\b(po|purchase order|purchasing document)\b/.test(normalized) && /\bbudget period\b/.test(normalized));
    addInferredNeed(inferred, normalized, "purchase-requisition-budget-period-check", /\b(pr|purchase requisition|purchase requisitions|requisition)\b/.test(normalized) && /\bbudget period\b/.test(normalized));

    if (inferred.length) return inferred.map((need) => ({ ...need }));

    return prompt
      .split(/,|;|\band\b|\n/i)
      .map((part) => clean(part))
      .filter(Boolean)
      .slice(0, 6)
      .map((part, index) => ({
        id: `custom-${index}`,
        label: titleCase(part),
        terms: [part],
        aliases: [normalize(part)],
        routeHint: guessRouteHint(part),
        mustVerify: ["No seeded pattern exists yet. Validate released objects, fields, authorization, and product fit."],
        nextChecks: ["Search SAP Business Accelerator Hub, then confirm released CDS/API status in View Browser or Help Portal."]
      }));
  }

  function addInferredNeed(list, normalizedPrompt, needId, shouldAdd) {
    if (!shouldAdd || list.some((need) => need.id === needId)) return;
    const need = seed.needs.find((item) => item.id === needId);
    if (need) list.push(need);
  }

  function detectRequestMode(prompt) {
    const text = normalize(prompt);
    const asksForObjects = /\b(cds|api|odata|view browser|released object|released objects|views)\b/.test(text);
    const implementationIntent = /\b(implement|implementation|build|enhancement|extend|extension|custom field|clean core|clean-core|btp|side by side|side-by-side|developer|dev extensibility|in app|in-app|recommend|approach|architecture|integration|workflow)\b/.test(text);
    const lookupIntent = /\b(show|find|list|get|search|what|which)\b/.test(text) && asksForObjects;
    return lookupIntent && !implementationIntent ? "cdsOnly" : "solution";
  }

  function parseCdsLookupNeeds(prompt) {
    const lookupTerm = extractCdsLookupTerm(prompt);
    const normalizedTerm = normalize(lookupTerm);
    const matched = seed.needs.filter((need) => {
      return need.aliases.some((alias) => normalizedTerm.includes(normalize(alias))) || normalizedTerm.includes(normalize(need.label));
    });

    if (matched.length) return matched.map((need) => ({ ...need }));

    return [{
      id: `lookup-${Math.abs(hashText(normalizedTerm))}`,
      label: titleCase(lookupTerm),
      terms: [lookupTerm],
      aliases: [normalizedTerm],
      routeHint: "standard",
      mustVerify: ["Confirm public-cloud release state, fields, filters, authorization, and tenant availability."],
      nextChecks: ["Open the candidate in SAP Business Accelerator Hub and confirm fields in View Browser."]
    }];
  }

  function lookupKind(prompt) {
    const text = normalize(prompt);
    const asksCds = /\b(cds|view|views|view browser)\b/.test(text);
    const asksApi = /\b(api|apis|odata)\b/.test(text);
    if (asksCds && !asksApi) return "cds";
    if (asksApi && !asksCds) return "api";
    return "both";
  }

  function matchesLookupKind(candidate, prompt) {
    const kind = lookupKind(prompt);
    if (kind === "cds") return candidate.type === "CDS View";
    if (kind === "api") return candidate.type === "OData API";
    return true;
  }

  function lookupTitle(prompt, part) {
    const kind = lookupKind(prompt);
    const titles = {
      cds: {
        label: "CDS view lookup",
        title: "CDS view lookup",
        panel: "Relevant released CDS views",
        summary: "Showing released CDS view candidates only."
      },
      api: {
        label: "API lookup",
        title: "API lookup",
        panel: "Relevant released APIs",
        summary: "Showing released API candidates only."
      },
      both: {
        label: "CDS/API lookup",
        title: "CDS/API object lookup",
        panel: "Relevant released objects and gaps",
        summary: "Showing released CDS/API candidates only."
      }
    };
    return titles[kind][part];
  }

  function extractCdsLookupTerm(prompt) {
    let text = normalize(prompt)
      .replace(/\b(please|can you|could you|me|the|all|released|relevant|available|public cloud|s\/4hana cloud|s4hana cloud)\b/g, " ")
      .replace(/\b(show|find|list|get|search|what|which)\b/g, " ")
      .replace(/\b(cds views|cds view|cds|odata apis|odata api|apis|api|views|view|objects|object|details|for|of|on|related to|specific)\b/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (!text) text = prompt;
    return clean(text);
  }

  function isMassWriteRequirement(prompt, needs) {
    const text = normalize(prompt);
    const hasMassSignal = /\b(mass|bulk|multiple|load multiple|upload|spreadsheet|csv|file upload|batch)\b/.test(text);
    const hasWriteSignal = /\b(create|creation|change|update|post|posting|load|upload|import|maintain|write|submit)\b/.test(text);
    const hasBusinessObject = /\b(sto|stock transport|stock transfer|purchase order|asset|goods movement|journal entr|material document|sales order|supplier invoice|bank statement)\b/.test(text);
    return needs.some((need) => need.id === "stock-transport-order-load") || (hasMassSignal && hasWriteSignal && hasBusinessObject);
  }

  function isPurchaseOrderBudgetCheck(prompt, needs) {
    const text = normalize(prompt);
    const matchedNeed = needs.some((need) => need.id === "purchase-order-budget-period-check");
    const mentionsPo = /\b(po|purchase order|purchasing document)\b/.test(text);
    const mentionsBudgetPeriod = /\bbudget period\b/.test(text);
    const wantsBlockOrValidation = /\b(restrict|block|prevent|validate|validation|check|error|creation|create|change|save)\b/.test(text);
    return matchedNeed || (mentionsPo && mentionsBudgetPeriod && wantsBlockOrValidation);
  }

  function isPurchaseRequisitionBudgetCheck(prompt, needs) {
    const text = normalize(prompt);
    const matchedNeed = needs.some((need) => need.id === "purchase-requisition-budget-period-check");
    const mentionsPr = /\b(pr|purchase requisition|purchase requisitions|requisition)\b/.test(text);
    const mentionsBudgetPeriod = /\bbudget period\b/.test(text);
    const wantsBlockOrValidation = /\b(restrict|block|prevent|validate|validation|check|error|creation|create|change|save|allow)\b/.test(text);
    return matchedNeed || (mentionsPr && mentionsBudgetPeriod && wantsBlockOrValidation);
  }

  function isProcurementBudgetValidation(prompt, needs) {
    return isPurchaseOrderBudgetCheck(prompt, needs) || isPurchaseRequisitionBudgetCheck(prompt, needs);
  }

  function isMixedProcurementBudgetValidation(prompt, needs) {
    return isPurchaseOrderBudgetCheck(prompt, needs) && isPurchaseRequisitionBudgetCheck(prompt, needs);
  }

  function isRelevantCandidate(candidate, needs) {
    if (needs.some((need) => need.id === "purchase-order-budget-period-check") && candidate.needIds.includes("purchase-order-budget-period-check")) {
      return candidate.name === "BD_MMPUR_FINAL_CHECK_PO" || candidate.name === "I_PURORDACCOUNTASSIGNMENTAPI01";
    }
    if (needs.some((need) => need.id === "purchase-requisition-budget-period-check") && candidate.needIds.includes("purchase-requisition-budget-period-check")) {
      return candidate.name === "MM_PUR_S4_PR_CHECK" || candidate.name === "I_PURCHASEREQUISITIONITEMAPI01";
    }
    return true;
  }

  function scoreRoutes(prompt, needs) {
    const text = normalize(prompt);
    const scores = {};

    seed.routes.forEach((route) => {
      scores[route.id] = {
        ...route,
        score: 0,
        evidence: []
      };
      route.signals.forEach((signal) => {
        if (text.includes(normalize(signal))) {
          scores[route.id].score += route.id === "notClean" ? 5 : 2;
          scores[route.id].evidence.push(`Prompt mentions "${signal}".`);
        }
      });
    });

    needs.forEach((need) => {
      if (scores[need.routeHint]) {
        scores[need.routeHint].score += need.verifyByDefault ? 2 : 3;
        scores[need.routeHint].evidence.push(`${need.label} usually starts on the ${scores[need.routeHint].short} path.`);
      }
    });

    if (!Object.values(scores).some((route) => route.score > 0)) {
      scores.developer.score = 1;
      scores.developer.evidence.push("No seeded SAP pattern matched, so do not assume standard configuration; verify official extension points and released objects first.");
    }

    if (isProcurementBudgetValidation(prompt, needs)) {
      scores.standard.score = 0;
      scores.keyUser.score += 12;
      scores.developer.score += 4;
      scores.sideBySide.score = Math.max(0, scores.sideBySide.score - 2);
      scores.keyUser.evidence.push("PR/PO budget-period save validation belongs in SAP Custom Logic or released BAdIs for each object.");
      scores.developer.evidence.push("Use developer extensibility only if the key-user BAdI cannot access the required Budget Period or fiscal-year derivation.");
      if (isMixedProcurementBudgetValidation(prompt, needs)) {
        scores.keyUser.evidence.push("Multi-object prompt detected: purchase requisition and purchase order need separate checks and separate BAdIs.");
      }
    }

    if (isMassWriteRequirement(prompt, needs)) {
      scores.standard.score = 0;
      scores.keyUser.score = 0;
      scores.sideBySide.score += 10;
      scores.developer.score += 3;
      scores.sideBySide.evidence.push("Mass load/write into SAP requires a released API or migration/upload object; do not treat it as in-app extensibility by default.");
    }

    return scores;
  }

  function adjustRouteScores(routeScores, prompt, needs, candidates) {
    const scores = { ...routeScores };
    const hasReleased = candidates.some((candidate) => candidate.verdict === "available");
    const hasExternal = /external|btp|api|integration|third party|sac|datasphere|replicate|side-by-side|side by side/i.test(prompt);
    const hasCustomFields = /custom field|extend .*field|ui adaptation|form template/i.test(prompt);
    const hasMassWrite = isMassWriteRequirement(prompt, needs);
    const hasPoBudgetCheck = isPurchaseOrderBudgetCheck(prompt, needs);
    const hasPrBudgetCheck = isPurchaseRequisitionBudgetCheck(prompt, needs);
    const hasProcurementBudgetCheck = hasPoBudgetCheck || hasPrBudgetCheck;
    const uncertainNeeds = needs.filter((need) => need.verifyByDefault);
    const gapLike = !hasReleased || candidates.every((candidate) => candidate.verdict !== "available");

    if (hasReleased && !hasMassWrite && !hasProcurementBudgetCheck) {
      scores.standard.score += 3;
      scores.standard.evidence.push("Released CDS/API candidates were found.");
    }
    if (hasCustomFields) {
      scores.keyUser.score += 5;
      scores.keyUser.evidence.push("Requirement sounds like a supported key user extension.");
    }
    if (uncertainNeeds.length) {
      scores.developer.score += 3;
      scores.developer.evidence.push(`${uncertainNeeds.map((need) => need.label).join(", ")} needs field-level confirmation and may need a custom CDS/service shape.`);
    }
    if (hasExternal) {
      scores.sideBySide.score += 5;
      scores.sideBySide.evidence.push("Prompt includes external integration or BTP-style consumption.");
    }
    if (hasMassWrite) {
      scores.standard.score = 0;
      scores.keyUser.score = 0;
      scores.sideBySide.score += 8;
      scores.developer.score += 3;
      scores.sideBySide.evidence.push("Bulk create/update/upload is an integration pattern, not a key-user or standard-configuration extension.");
    }
    if (gapLike && !hasExternal) {
      scores.developer.score += 2;
      scores.developer.evidence.push("No strong released object match was found, so an in-app custom object/view may be required.");
    }
    if (hasProcurementBudgetCheck) {
      scores.standard.score = 0;
      scores.keyUser.score += 8;
      scores.developer.score += 2;
      if (!hasExternal) scores.sideBySide.score = 0;
      scores.keyUser.evidence.push("SAP provides object-specific PR/PO BAdI patterns; this is not a reporting CDS/API lookup.");
    }
    if (scores.notClean.score > 0) {
      scores.standard.score = Math.max(0, scores.standard.score - 3);
      scores.developer.score = Math.max(0, scores.developer.score - 2);
      scores.sideBySide.score = Math.max(0, scores.sideBySide.score - 2);
    }

    return scores;
  }

  function buildRecommendation(prompt, needs, routeScores, candidates) {
    const routeList = Object.values(routeScores).sort((a, b) => b.score - a.score);
    const primary = routeList[0];
    const available = candidates.filter((candidate) => candidate.verdict === "available");
    const verify = candidates.filter((candidate) => candidate.verdict === "verify");
    const coverage = coverageByNeed(needs, candidates);
    const cleanScore = calculateCleanCoreScore(primary, routeScores, coverage);

    return {
      primary,
      routeList,
      coverage,
      cleanScore,
      status: cleanScore >= 80 ? "High" : cleanScore >= 60 ? "Medium" : "Risky",
      title: `${primary.label} first`,
      summary: buildSummary(primary, coverage, needs),
      rationale: buildRationale(primary, available, verify, needs),
      steps: buildSteps(primary, needs, available, verify),
      btp: buildBtpChecklist(primary, needs, candidates),
      developer: buildDeveloperChecklist(primary, needs, candidates),
      guardrails: buildGuardrails(prompt, primary, candidates)
    };
  }

  function coverageByNeed(needs, candidates) {
    const rows = needs.map((need) => {
      const matches = candidates.filter((candidate) => candidate.needIds.includes(need.id));
      const hasAvailable = matches.some((candidate) => candidate.verdict === "available");
      const hasVerify = matches.some((candidate) => candidate.verdict === "verify") || need.verifyByDefault;
      return {
        need,
        matches,
        status: hasAvailable && !need.verifyByDefault ? "available" : hasVerify ? "verify" : "gap"
      };
    });

    return {
      rows,
      available: rows.filter((row) => row.status === "available").length,
      verify: rows.filter((row) => row.status === "verify").length,
      gap: rows.filter((row) => row.status === "gap").length,
      total: rows.length
    };
  }

  function hasNeed(needs, id) {
    return needs.some((need) => need.id === id);
  }

  function buildSummary(primary, coverage, needs) {
    if (hasNeed(needs, "purchase-order-budget-period-check") && hasNeed(needs, "purchase-requisition-budget-period-check")) {
      return "Multi-object requirement detected: validate Purchase Requisition and Purchase Order separately. Use MM_PUR_S4_PR_CHECK for PR items and BD_MMPUR_FINAL_CHECK_PO for PO save; do not collapse both objects into one PO-only answer.";
    }
    if (hasNeed(needs, "purchase-requisition-budget-period-check")) {
      return "Use in-app Custom Logic or the released PR BAdI for Check of Purchase Requisition Item / MM_PUR_S4_PR_CHECK. Raise an error when Budget Period is earlier than the derived fiscal year.";
    }
    if (hasNeed(needs, "purchase-order-budget-period-check")) {
      return "Use in-app Custom Logic for the purchase-order before-save check. Block the save with an error when Budget Period is earlier than the derived fiscal year; do not enforce this only in BTP or with a CDS view.";
    }
    if (needs.some((need) => need.id === "stock-transport-order-load")) {
      return "For STO mass load/update, use the released Stock Transport Order OData V4 API through a BTP or integration layer. Do not classify this as in-app extensibility.";
    }
    if (primary.id === "notClean") {
      return "This contains clean-core risk signals. Reframe around released APIs/CDS, key user tools, ABAP Cloud, or BTP.";
    }
    if (primary.id === "sideBySide") {
      return "Use side-by-side when an external system, orchestration layer, or non-core app is involved. Keep SAP access behind released APIs/events.";
    }
    if (primary.id === "developer") {
      return "Start with released CDS/API checks, then use ABAP Cloud developer extensibility only for missing logic or a custom service shape.";
    }
    if (primary.id === "keyUser") {
      return "Use key user tools when the requirement is field, UI, simple logic, form, or analytical-query shaping.";
    }
    return `${coverage.available} of ${coverage.total || needs.length} need area${(coverage.total || needs.length) === 1 ? "" : "s"} have released candidates; ${coverage.verify} need field-level or tenant verification.`;
  }

  function buildRationale(primary, available, verify, needs) {
    const bullets = [...primary.evidence.slice(0, 3)];
    if (hasNeed(needs, "purchase-order-budget-period-check") && hasNeed(needs, "purchase-requisition-budget-period-check")) {
      bullets.unshift("The prompt mentions both Purchase Requisition and Purchase Order; these are different procurement objects and need separate validation hooks.");
      bullets.unshift("Use MM_PUR_S4_PR_CHECK for PR item checks and BD_MMPUR_FINAL_CHECK_PO for PO save checks.");
    } else if (hasNeed(needs, "purchase-requisition-budget-period-check")) {
      bullets.unshift("SAP documents MM_PUR_S4_PR_CHECK as the BAdI definition for checking Purchase Requisition items and returning errors.");
      bullets.unshift("This is a PR save-time validation, so enforce it in the PR object path rather than only in BTP.");
    } else if (hasNeed(needs, "purchase-order-budget-period-check")) {
      bullets.unshift("SAP KBA guidance points to Custom Logic and Check of Purchase Order before Saving for raising an error during PO save.");
      bullets.unshift("This is a core save-time validation, so the control must run inside S/4HANA Cloud, not only in a side-by-side app.");
    }
    if (needs.some((need) => need.id === "stock-transport-order-load")) {
      bullets.unshift("STO mass load is a write/integration requirement, so in-app/key-user extensibility is not the right route.");
      bullets.unshift("Use Stock Transport Order (OData V4) / API_STOCKTRANSPORTORDER and communication scenario SAP_COM_0A80.");
    }
    if (available.length) bullets.push(`${available.length} released public-cloud CDS/API candidate${available.length === 1 ? "" : "s"} found.`);
    if (verify.length) bullets.push(`${verify.length} candidate${verify.length === 1 ? "" : "s"} need View Browser, field, or communication scenario verification.`);
    needs.forEach((need) => {
      if (need.verifyByDefault) bullets.push(`${need.label} should not be assumed available until WBS/project fields and granularity are checked.`);
    });
    if (!bullets.length) bullets.push("Start with released SAP content before proposing an extension.");
    return unique(bullets).slice(0, 5);
  }

  function buildSteps(primary, needs, available, verify) {
    const steps = [...primary.steps];
    if (hasNeed(needs, "purchase-order-budget-period-check") && hasNeed(needs, "purchase-requisition-budget-period-check")) {
      return [
        "Split the rule by business object: Purchase Requisition item validation and Purchase Order save validation.",
        "For Purchase Requisition, implement Check of Purchase Requisition Item / MM_PUR_S4_PR_CHECK.",
        "For Purchase Order, implement Check of Purchase Order before Saving / BD_MMPUR_FINAL_CHECK_PO.",
        "Use the same Budget Period versus fiscal-year rule in both checks, but test each object path separately.",
        "Raise an error message in each BAdI to block create/change when Budget Period is earlier than fiscal year.",
        "Verify field availability for Budget Period and fiscal-year derivation in each BAdI context before build."
      ];
    }
    if (hasNeed(needs, "purchase-requisition-budget-period-check")) {
      return [
        "Confirm the fiscal-year basis for the PR: requested date, delivery date, account-assignment date, or a PSM-specific rule.",
        "Implement Check of Purchase Requisition Item / MM_PUR_S4_PR_CHECK.",
        "Loop through PR item data and account assignment if exposed, read or derive Budget Period, and compare against fiscal year.",
        "Raise an error message to block PR create/change when Budget Period is earlier than fiscal year.",
        "Test My Purchase Requisitions, Manage Purchase Requisitions - Professional, copied PRs, and follow-on conversion behavior.",
        "Use PR CDS/API objects only for field confirmation/reporting; they are not the enforcement point."
      ];
    }
    if (hasNeed(needs, "purchase-order-budget-period-check")) {
      return [
        "Confirm the fiscal-year basis: document date, posting/consumption date, account-assignment date, or a PSM-specific rule.",
        "Create an implementation in the Custom Logic app for Check of Purchase Order before Saving / BD_MMPUR_FINAL_CHECK_PO.",
        "Loop through PO items and account assignments, read Budget Period, derive the fiscal year, and compare the values.",
        "Raise an error message to block save when Budget Period is earlier than the fiscal year.",
        "Test create, change, copy, API-created PO, and multi-account-assignment cases.",
        "Use the Account Assignment in Purchase Order CDS only for field confirmation/reporting; it is not the enforcement point."
      ];
    }
    if (needs.some((need) => need.id === "stock-transport-order-load")) {
      return [
        "Use the Stock Transport Order OData V4 API, not the generic Purchase Order API and not key-user extensibility.",
        "Ask Basis/Security to enable SAP_COM_0A80 - Stock Transport Order Integration.",
        "Create communication user, communication system, and communication arrangement for API_STOCKTRANSPORTORDER.",
        "Build upload validation, mapping, batching, retry, monitoring, and error handling in BTP or the integration layer.",
        "Verify create/update entities, mandatory fields, and authorizations in the $metadata endpoint before build."
      ];
    }
    if (available.length) steps.push("Shortlist the best released object per need and confirm fields in View Browser or API metadata.");
    if (verify.length) steps.push("For verify rows, inspect fields, filters, authorization, and communication scenario before committing to build.");
    needs.forEach((need) => {
      if (need.nextChecks) steps.push(...need.nextChecks.slice(0, 1));
    });
    return unique(steps).slice(0, 6);
  }

  function buildBtpChecklist(primary, needs, candidates) {
    if (hasNeed(needs, "purchase-order-budget-period-check") || hasNeed(needs, "purchase-requisition-budget-period-check")) {
      return [
        { label: "Recommendation", value: "Do not use BTP as the only enforcement layer for this control." },
        { label: "Reason", value: "Users and integrations can create or change PRs/POs directly in S/4HANA Cloud, so the save checks must run in the core object paths." },
        { label: "Allowed BTP role", value: "Use BTP only for upstream request capture, exception workflow, monitoring, or analytics around rejected attempts." },
        { label: "PR enforcement", value: hasNeed(needs, "purchase-requisition-budget-period-check") ? "Implement Check of Purchase Requisition Item / MM_PUR_S4_PR_CHECK." : "Not in this prompt." },
        { label: "PO enforcement", value: hasNeed(needs, "purchase-order-budget-period-check") ? "Implement Check of Purchase Order before Saving / BD_MMPUR_FINAL_CHECK_PO." : "Not in this prompt." },
        { label: "API path", value: "If PRs/POs are created through APIs, test that the same in-core validations are triggered for API-created or API-changed documents." }
      ];
    }
    const apiCandidates = candidates.filter((candidate) => candidate.type === "OData API");
    const bestApi = apiCandidates[0] || candidates.find((candidate) => candidate.verdict === "available") || candidates[0];
    const scenario = tidyCommunicationScenario(bestApi && bestApi.communicationScenario ? bestApi.communicationScenario : inferCommunicationScenario(needs, bestApi));

    return [
      { label: "Communication user", value: "Create or reuse a named inbound communication user; prefer certificate/OAuth where supported." },
      { label: "Communication system", value: "Maintain host, authentication, inbound/outbound users, and BTP destination mapping." },
      { label: "Communication arrangement", value: scenario ? `Create arrangement for ${scenario}.` : "Select the scenario from API Hub/Help for the chosen API." },
      { label: "Scenario", value: scenario || "Verify in SAP Business Accelerator Hub and tenant Communication Arrangements app." },
      { label: "API / service", value: bestApi ? `${bestApi.name} - ${bestApi.displayName}` : "No released API candidate yet; search API Hub and document the gap." },
      { label: "BTP setup", value: "Create destination, connectivity/auth handling, monitoring, retries, and error queue." }
    ];
  }

  function buildDeveloperChecklist(primary, needs, candidates) {
    if (hasNeed(needs, "purchase-order-budget-period-check") || hasNeed(needs, "purchase-requisition-budget-period-check")) {
      return [
        {
          title: "Use object-specific BAdIs first",
          body: hasNeed(needs, "purchase-order-budget-period-check") && hasNeed(needs, "purchase-requisition-budget-period-check")
            ? "Implement PR validation with MM_PUR_S4_PR_CHECK and PO validation with BD_MMPUR_FINAL_CHECK_PO. Do not use one BAdI for both objects."
            : hasNeed(needs, "purchase-requisition-budget-period-check")
              ? "Implement PR item validation with MM_PUR_S4_PR_CHECK."
              : "Implement PO save validation with BD_MMPUR_FINAL_CHECK_PO.",
          link: hasNeed(needs, "purchase-requisition-budget-period-check") ? seed.officialLinks.purchaseRequisitionCheckTutorial : seed.officialLinks.purchaseOrderSaveCheckKba
        },
        {
          title: "Developer alternative",
          body: "Use ABAP Cloud developer extensibility only if the key-user BAdI cannot access the required Budget Period, fiscal-year derivation, or supporting lookup.",
          link: seed.officialLinks.extensibility
        },
        {
          title: "CDS support only",
          body: "Use PR/PO CDS or API objects only to inspect/report fields such as Budget Period. Do not rely on a CDS view to block save.",
          link: hasNeed(needs, "purchase-order-budget-period-check") ? seed.officialLinks.purchaseOrderAccountAssignmentCds : seed.officialLinks.apiHub
        },
        {
          title: "Do not move the control outside core",
          body: "BTP can orchestrate an upstream request, but the blocking rule must still execute in S/4HANA Cloud to cover direct UI and API changes for each object.",
          link: seed.officialLinks.cleanCore
        }
      ];
    }
    const releasedCds = candidates.filter((candidate) => candidate.type === "CDS View" && candidate.verdict === "available");
    const verifyCds = candidates.filter((candidate) => candidate.type === "CDS View" && candidate.verdict === "verify");
    const best = releasedCds[0] || verifyCds[0] || candidates[0];
    const hasKeyUserFieldNeed = primary.id === "keyUser" || needs.some((need) => need.id === "sales-order-extension");
    const hasDefaultReportingSet = primary.id === "standard" && needs.length > 1;
    const firstBody = hasKeyUserFieldNeed
      ? "Start with the Custom Fields app and the relevant business context; enable only the required UIs, APIs, reports, forms, or search."
      : hasDefaultReportingSet
        ? "Use the released CDS/API candidates per need first; only create a custom CDS view when a required field set or consumption shape is missing."
        : best ? `Start with ${best.name} (${best.displayName}) and confirm fields in View Browser.` : "No strong released object yet. Search SAP Hub and View Browser before building.";

    return [
      {
        title: "Use released CDS / APIs first",
        body: firstBody,
        link: seed.officialLinks.apiHub
      },
      {
        title: "Custom CDS only when needed",
        body: "Shape released/whitelisted sources for the exact field set, filters, and consumption contract.",
        link: seed.officialLinks.customCds
      },
      {
        title: "Custom API for external consumption",
        body: "Expose the custom CDS/service through a custom communication scenario and communication arrangement.",
        link: seed.officialLinks.customCommunication
      },
      {
        title: "Avoid copied standard objects",
        body: "Prefer released interface/consumption CDS and extension points. Copying standard CDS/services is a clean-core warning sign.",
        link: seed.officialLinks.cleanCore
      }
    ];
  }

  function buildGuardrails(prompt, primary, candidates) {
    const list = [...seed.guardrails];
    if (/purchase order|purchase requisition|budget period/i.test(prompt)) {
      list.unshift("For PR/PO save validation, do not give a standard-config answer unless a concrete SAP configuration object covers the rule.");
      list.unshift("Do not enforce PR/PO Budget Period controls only in BTP; direct S/4HANA Cloud UI/API changes must be blocked in the relevant core save path.");
      if (/purchase order/i.test(prompt) && /purchase requisition/i.test(prompt)) list.unshift("When a prompt mixes PR and PO, split the answer by object and list separate BAdIs for each.");
    }
    if (primary.id === "notClean") list.unshift("This requirement contains explicit not-clean-core signals. Reframe before implementation.");
    if (!candidates.length) {
      list.unshift("No candidate found yet. Do not build against unreleased internals to close the gap.");
    } else if (!candidates.some((candidate) => candidate.verdict === "available")) {
      list.unshift("Candidate objects were found, but they need release, field, or scenario verification before build.");
    }
    if (/copy standard|clone standard|modify standard/i.test(prompt)) list.unshift("Avoid copying or modifying standard SAP content. Use extension points, custom CDS, RAP, or BTP instead.");
    return unique(list).slice(0, 5);
  }

  function calculateCleanCoreScore(primary, routeScores, coverage) {
    let score = 70;
    if (primary.id === "standard") score += 10;
    if (primary.id === "keyUser") score += 8;
    if (primary.id === "developer") score += 2;
    if (primary.id === "notClean") score -= 35;
    if (coverage.available + coverage.verify === coverage.total) score += 6;
    score += Math.min(9, coverage.available * 3);
    score -= Math.min(12, coverage.verify * 4);
    score -= coverage.gap * 8;
    score -= routeScores.notClean.score * 4;
    return Math.max(10, Math.min(98, score));
  }

  function inferCommunicationScenario(needs, candidate) {
    if (candidate && candidate.communicationScenario) return candidate.communicationScenario;
    if (needs.some((need) => need.id === "bank-balances")) return "SAP_COM_0388";
    if (candidate && /trialbalance|trial balance/i.test(`${candidate.name} ${candidate.displayName}`)) return "Confirm Trial Balance API scenario in API Hub";
    return "";
  }

  function tidyCommunicationScenario(value) {
    const text = clean(value);
    if (!text) return "";
    const match = text.match(/([^.]*(SAP_COM_\d+)[^.]*)/);
    if (match) return clean(match[1]).replace(/\s+Agent and Tool.*$/i, "");
    return text.length > 120 ? `${text.slice(0, 117)}...` : text;
  }

  function addSeedResults(need, resultMap) {
    (seed.seedResults[need.id] || []).forEach((row) => addCandidate(resultMap, row, need, "Seeded official example", need.label, true));
  }

  function addCandidate(resultMap, row, need, source, term, seeded) {
    if (!row || !row.Name) return;
    const normalizedType = normalizeType(row.Type);
    const key = `${row.Name}::${normalizedType || "UNKNOWN"}`;
    const existing = resultMap.get(key);

    if (existing) {
      if (!existing.needIds.includes(need.id)) existing.needIds.push(need.id);
      if (!existing.needs.includes(need.label)) existing.needs.push(need.label);
      if (!existing.sourceTerms.includes(term)) existing.sourceTerms.push(term);
      if (!existing.sources.includes(source)) existing.sources.push(source);
      existing.seeded = existing.seeded && seeded;
      return;
    }

    resultMap.set(key, {
      key,
      raw: row,
      name: clean(row.Name),
      displayName: clean(row.DisplayName || row.ShortText || row.Description || row.Name),
      type: normalizedType,
      apiState: clean(row.APIState || ""),
      keyUserRelease: clean(row.ReleaseStateKeyUserExtensibility || ""),
      developerRelease: clean(row.ReleaseStateDeveloperExtensibility || ""),
      products: clean(row.Products || row.ParentDisplayName || ""),
      parent: clean(row.ParentDisplayName || row.ParentTechnicalName || ""),
      description: clean(row.Description || row.ShortText || ""),
      serviceUrl: clean(row.ServiceUrl || ""),
      communicationScenario: clean(row.CommunicationScenario || (row.additionalAttributeMap && row.additionalAttributeMap.CommunicationScenario) || ""),
      rank: Number(row.Rank || 0),
      needsVerification: Boolean(row.NeedsVerification),
      needIds: [need.id],
      needs: [need.label],
      sourceTerms: [term],
      sources: [source],
      seeded
    });
  }

  function enrichCandidate(candidate) {
    const releaseState = releaseStatus(candidate);
    const productFit = productFitStatus(candidate);
    const exactness = exactnessStatus(candidate);
    const confidence = confidenceLevel(candidate, releaseState, productFit, exactness);
    const verdict = verdictFor(releaseState, productFit, exactness, confidence);
    const route = routeForCandidate(candidate, verdict);

    return {
      ...candidate,
      releaseState,
      productFit,
      exactness,
      confidence,
      verdict,
      route,
      score: candidateScore(candidate, releaseState, productFit, exactness, confidence, verdict)
    };
  }

  function releaseStatus(candidate) {
    const text = `${candidate.apiState} ${candidate.keyUserRelease} ${candidate.developerRelease}`.toLowerCase();
    if (/deprecated|obsolete|retired/.test(text)) return "deprecated";
    if (/released|active/.test(text)) return "released";
    if (/unreleased|not released/.test(text)) return "unreleased";
    return "verify";
  }

  function productFitStatus(candidate) {
    const product = normalize(`${candidate.products} ${candidate.parent}`);
    if (candidate.name.startsWith("PCE_") || product.includes("private edition")) return "private";
    if (product.includes("public edition") || product.includes("saps4hanacloud")) return "public";
    return "verify";
  }

  function exactnessStatus(candidate) {
    if (candidate.needsVerification) return "verify";
    const fit = intentFit(candidate);
    if (fit >= 2) return "exact";
    if (fit <= -2) return "mismatch";
    return "nearby";
  }

  function intentFit(candidate) {
    const text = normalize(`${candidate.name} ${candidate.displayName} ${candidate.description}`);
    let score = 0;

    candidate.needIds.forEach((id) => {
      if (id === "ar-aging") {
        if (/\b(ar|receivable|receivables|customer)\b/.test(text)) score += 3;
        if (/\b(ap|payable|payables|supplier)\b/.test(text)) score -= 5;
      }
      if (id === "ap-aging") {
        if (/\b(ap|payable|payables|supplier)\b/.test(text)) score += 3;
        if (/\b(ar|receivable|receivables|customer)\b/.test(text)) score -= 5;
      }
      if (id === "cost-center-actuals") {
        if (text.includes("cost center") && text.includes("actual")) score += 4;
        if (text.includes("sap build") || text.includes("ecc")) score -= 3;
      }
      if (id === "wbs-actuals") {
        if (candidate.name === "C_PROJECTQ2201") score += 8;
        if (/\bwbs\b|wbs element/.test(text)) score += 3;
        if (text.includes("project actual")) score += 4;
        if (/revenue recognition|revrec|marketing cloud|demand plan/.test(text)) score -= 8;
      }
      if (id === "gl-balances") {
        if (/trial balance|trialbalance|g\/l account|gl account|glaccount/.test(text)) score += 4;
        if (text.includes("bank reconciliation")) score -= 3;
      }
      if (id === "bank-balances" && /bank account|bank balance|bank reconciliation|house bank/.test(text)) score += 4;
      if (id === "sales-order-extension" && /sales order|custom field|extension/.test(text)) score += 2;
      if (id === "purchase-order-budget-period-check") {
        if (/purchase order|purchasing document|bd_mmpur_final_check_po|before saving|save/.test(text)) score += 5;
        if (/budget period|account assignment|fiscal year/.test(text)) score += 4;
      }
      if (id === "purchase-requisition-budget-period-check") {
        if (/purchase requisition|requisition item|mm_pur_s4_pr_check|purreq|pr check/.test(text)) score += 5;
        if (/budget period|account assignment|fiscal year/.test(text)) score += 4;
      }
    });

    return score;
  }

  function confidenceLevel(candidate, releaseState, productFit, exactness) {
    if (releaseState === "released" && productFit === "public" && exactness === "exact") return "high";
    if (releaseState === "released" && productFit === "public" && exactness !== "mismatch") return "medium";
    if (releaseState === "deprecated" || releaseState === "unreleased" || productFit === "private") return "low";
    return "medium";
  }

  function verdictFor(releaseState, productFit, exactness, confidence) {
    if (releaseState === "deprecated" || releaseState === "unreleased") return "gap";
    if (exactness === "mismatch") return "verify";
    if (releaseState === "released" && productFit === "public" && confidence === "high" && exactness === "exact") return "available";
    return "verify";
  }

  function routeForCandidate(candidate, verdict) {
    if (candidate.type === "OData API") return "sideBySide";
    if (candidate.type === "Extensibility Point") return "keyUser";
    if (candidate.type === "CDS View" && verdict === "available") return "standard";
    return "developer";
  }

  function candidateScore(candidate, releaseState, productFit, exactness, confidence, verdict) {
    let score = candidate.rank || 0;
    if (releaseState === "released") score += 4;
    if (productFit === "public") score += 4;
    if (productFit === "private") score -= 3;
    if (confidence === "high") score += 3;
    if (confidence === "medium") score += 1;
    if (exactness === "exact") score += 2;
    if (verdict === "available") score += 3;
    if (candidate.type === "CDS View") score += 0.5;
    if (candidate.needsVerification) score -= 1;
    score += intentFit(candidate);
    return score;
  }

  function solutionOptions() {
    return [
      {
        id: "inApp",
        label: "In-app",
        tone: "good",
        where: "S/4HANA Cloud configuration, standard apps, View Browser, Custom Fields, Custom Logic, Custom CDS Views, and Custom Analytical Queries.",
        when: "The requirement is covered by standard capability, simple field/UI/form changes, workflow rules, or analytical shaping on released objects.",
        score: (recommendation) => isMassWriteRequirement(state.result ? state.result.question : "", state.result ? state.result.needs : []) ? 0 : Math.max(routeScore(recommendation, "standard"), routeScore(recommendation, "keyUser")),
        summary: (recommendation) => recommendedOptionId(recommendation.primary.id) === "inApp"
          ? isProcurementBudgetValidation(state.result ? state.result.question : "", state.result ? state.result.needs : [])
            ? "Recommended: implement the blocking rule in the relevant PR/PO Custom Logic or BAdI save path."
            : "Best first path because it keeps the solution closest to standard public-cloud capability."
          : isMassWriteRequirement(state.result ? state.result.question : "", state.result ? state.result.needs : [])
            ? "Not recommended for mass create/update/upload. In-app extensibility is not a bulk integration mechanism."
            : "Still check first for simple field, UI, report, or configuration coverage before building more."
      },
      {
        id: "developer",
        label: "Developer Extensibility",
        tone: "warn",
        where: "ABAP Cloud developer extensibility, RAP objects/services, released CDS views, released APIs, and custom communication scenarios.",
        when: "The need requires custom logic, a custom service shape, RAP behavior, or a custom CDS/API that cannot be delivered by key user tools alone.",
        score: (recommendation) => Math.max(routeScore(recommendation, "developer"), recommendation.primary.id === "keyUser" ? 1 : 0),
        summary: (recommendation) => recommendedOptionId(recommendation.primary.id) === "developer"
          ? "Recommended when released content exists but the consumption shape or logic needs ABAP Cloud extension."
          : isProcurementBudgetValidation(state.result ? state.result.question : "", state.result ? state.result.needs : [])
            ? "Alternative only if Custom Logic cannot access the fields or derivation needed for the Budget Period rule."
          : isMassWriteRequirement(state.result ? state.result.question : "", state.result ? state.result.needs : [])
            ? "Use developer skills for the BTP/integration build, validation, mapping, or wrapper service if needed."
            : "Use only after standard and key-user paths cannot satisfy the requirement cleanly."
      },
      {
        id: "btp",
        label: "BTP Side-by-side",
        tone: "btp",
        where: "SAP BTP app or integration layer, destinations, communication arrangements, released APIs/events, monitoring, retries, and error handling.",
        when: "The process involves external systems, orchestration, non-core UI, heavy integration, AI, replication, or asynchronous processing.",
        score: (recommendation) => routeScore(recommendation, "sideBySide"),
        summary: (recommendation) => recommendedOptionId(recommendation.primary.id) === "btp"
          ? "Recommended because the requirement has external integration or side-by-side orchestration signals."
          : isProcurementBudgetValidation(state.result ? state.result.question : "", state.result ? state.result.needs : [])
            ? "Not recommended for enforcement. BTP cannot be the only place where a PR or PO save is blocked."
          : isMassWriteRequirement(state.result ? state.result.question : "", state.result ? state.result.needs : [])
            ? "Recommended for mass load/write scenarios because the upload orchestration should call released APIs from an integration layer."
            : "Useful only when the requirement genuinely crosses the S/4HANA boundary or needs a separate app/integration layer."
      }
    ];
  }

  function implementationSections(recommendation) {
    const recommended = recommendedOptionId(recommendation.primary.id);
    const procurementBudgetCheck = isProcurementBudgetValidation(state.result ? state.result.question : "", state.result ? state.result.needs : []);
    const mixedProcurementBudgetCheck = isMixedProcurementBudgetValidation(state.result ? state.result.question : "", state.result ? state.result.needs : []);
    if (procurementBudgetCheck) {
      return [
        {
          id: "inApp",
          title: mixedProcurementBudgetCheck ? "In-app Custom Logic paths" : "In-app Custom Logic path",
          recommended: recommended === "inApp",
          summary: mixedProcurementBudgetCheck
            ? "Recommended because PR and PO each need their own save-time validation."
            : "Recommended because the rule must block save inside S/4HANA Cloud.",
          steps: mixedProcurementBudgetCheck
            ? [
                "Implement PR item validation with MM_PUR_S4_PR_CHECK.",
                "Implement PO save validation with BD_MMPUR_FINAL_CHECK_PO.",
                "Apply the same Budget Period versus fiscal-year rule in both implementations.",
                "Raise an error message in each object path to block create/change.",
                "Test PR create/change and PO create/change separately, including API-created documents where relevant."
              ]
            : isPurchaseRequisitionBudgetCheck(state.result ? state.result.question : "", state.result ? state.result.needs : [])
              ? [
                  "Use Check of Purchase Requisition Item / MM_PUR_S4_PR_CHECK.",
                  "Read or derive Budget Period from the PR item/account-assignment context.",
                  "Derive the fiscal year from the agreed date basis.",
                  "Raise an error message when Budget Period is earlier than fiscal year.",
                  "Test PR create/change in relevant PR apps and API paths."
                ]
              : [
                  "Use Custom Logic for Check of Purchase Order before Saving / BD_MMPUR_FINAL_CHECK_PO.",
                  "Read Budget Period from the PO item/account assignment data exposed by the BAdI.",
                  "Derive the fiscal year from the agreed date basis.",
                  "Raise an error message when Budget Period is earlier than fiscal year.",
                  "Test create, change, copy, API-created PO, and multi-account-assignment cases."
                ]
        },
        {
          id: "developer",
          title: "Developer extensibility alternative",
          recommended: recommended === "developer",
          summary: "Use only if key-user Custom Logic cannot access the fields or supporting derivation.",
          steps: [
            "Confirm the missing field or lookup gap in the Custom Logic BAdI first.",
            "Use ABAP Cloud released objects only for any supporting logic.",
            "Keep the final blocking control in the S/4HANA Cloud save path.",
            "Do not read unreleased tables or copy standard logic."
          ]
        },
        {
          id: "btp",
          title: "BTP side-by-side path",
          recommended: false,
          summary: "Not recommended for enforcement; use only for upstream workflow, exception handling, or monitoring.",
          steps: [
            "Do not rely on BTP alone to block PR or PO creation/change.",
            "If a BTP app submits PR/PO changes, call released APIs and verify the in-core save checks block invalid records.",
            "Use BTP for request capture, approvals outside SAP, notifications, or analytics only."
          ]
        }
      ];
    }
    return [
      {
        id: "inApp",
        title: "In-app path",
        recommended: recommended === "inApp",
        summary: "Use this for standard configuration, key user extensibility, and analytical views inside S/4HANA Cloud.",
        steps: [
          "Check the standard app, analytical query, or configuration object first.",
          "If a field/UI/form/report gap remains, use Custom Fields, Custom Logic, Custom CDS Views, or Custom Analytical Queries.",
          "Validate every field and filter in View Browser or app metadata before promising the design.",
          "Use released CDS/API candidates from the CDS/API tab as the source list."
        ]
      },
      {
        id: "developer",
        title: "Developer extensibility path",
        recommended: recommended === "developer",
        summary: "Use this when ABAP Cloud is needed for logic, a RAP object, or a controlled custom service.",
        steps: [
          "Start from released CDS views and released APIs only.",
          "Create a custom CDS view if the standard released view does not expose the required consumption shape.",
          "Create a custom API or RAP service only when the solution must expose custom behavior externally.",
          "Expose external access through a custom communication scenario and arrangement; do not copy standard CDS/services by default."
        ]
      },
      {
        id: "btp",
        title: "BTP side-by-side path",
        recommended: recommended === "btp",
        summary: "Use this when the requirement belongs outside the core or involves external integration.",
        steps: [
          "Find the released SAP API/event/CDS source in SAP Business Accelerator Hub.",
          "Create or reuse communication user, communication system, and communication arrangement for the chosen scenario.",
          "Create a BTP destination and handle authentication, retries, monitoring, and error queues.",
          "Write back to S/4HANA Cloud only through released APIs or events."
        ]
      }
    ];
  }

  function routeScore(recommendation, routeId) {
    const route = recommendation.routeList.find((item) => item.id === routeId);
    return route ? route.score : 0;
  }

  function recommendedOptionId(routeId) {
    if (routeId === "standard" || routeId === "keyUser") return "inApp";
    if (routeId === "developer") return "developer";
    if (routeId === "sideBySide") return "btp";
    return "developer";
  }

  function renderAll() {
    renderHistory();
    renderAnswer();
    renderOptions();
    renderCandidates();
    renderImplementation();
    renderChecklists();
  }

  function renderAnswer() {
    if (!state.result) return;
    const { recommendation } = state.result;
    const cdsOnly = state.result.mode === "cdsOnly";

    configureResultMode(state.result.mode);
    els.userBubble.textContent = state.result.question;
    els.answerModeLabel.textContent = cdsOnly ? lookupTitle(state.result.question, "label") : "Recommendation";
    els.scoreValue.textContent = String(recommendation.cleanScore);
    els.scoreRing.dataset.status = recommendation.status.toLowerCase();
    els.routeGrid.innerHTML = solutionOptions().map((option) => optionChip(option, recommendation)).join("");
    els.recommendationTitle.textContent = cdsOnly ? lookupTitle(state.result.question, "title") : recommendation.title;
    els.recommendationSummary.textContent = cdsOnly
      ? `${lookupTitle(state.result.question, "summary")} No in-app, developer, or BTP recommendation is generated for this lookup request.`
      : recommendation.summary;
    els.rationaleList.innerHTML = recommendation.rationale.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    els.stepsList.innerHTML = recommendation.steps.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  }

  function routeChip(route, score, extraClass) {
    return `
      <div class="route-chip ${route.tone} ${extraClass || ""}">
        <span>${escapeHtml(route.short)}</span>
        <strong>${score}</strong>
      </div>
    `;
  }

  function optionChip(option, recommendation) {
    const score = option.score(recommendation);
    const active = option.id === recommendedOptionId(recommendation.primary.id);
    const label = active ? "Best" : score > 0 ? "Check" : "Low";
    return `
      <div class="route-chip ${option.tone} ${active ? "active" : ""}">
        <span>${escapeHtml(option.label)}</span>
        <strong>${escapeHtml(label)}</strong>
      </div>
    `;
  }

  function renderCandidates() {
    if (!state.result) return;
    const cdsOnly = state.result.mode === "cdsOnly";
    els.cdsPanelEyebrow.textContent = cdsOnly ? lookupTitle(state.result.question, "label") : "CDS/API finder";
    els.cdsPanelTitle.textContent = cdsOnly ? lookupTitle(state.result.question, "panel") : "Relevant released objects and gaps";
    const groups = groupCandidates(state.result.candidates);

    if (!groups.length) {
      els.candidateList.innerHTML = `<div class="empty-cell">No released CDS/API candidates found yet. Treat this as a gap until View Browser and Help Portal prove otherwise.</div>`;
      return;
    }

    els.candidateList.innerHTML = groups
      .map((group) => `
        <div class="candidate-group">
          <h3>${escapeHtml(group.label)}</h3>
          ${group.rows.slice(0, 6).map(candidateRow).join("")}
        </div>
      `)
      .join("");
  }

  function groupCandidates(candidates) {
    if (!candidates.length) return [];

    if (state.groupBy === "need") {
      return state.result.needs
        .map((need) => ({
          label: need.label,
          rows: candidates.filter((candidate) => candidate.needIds.includes(need.id))
        }))
        .filter((group) => group.rows.length);
    }

    const map = new Map();
    candidates.forEach((candidate) => {
      const label = state.groupBy === "type" ? candidate.type : routeLabel(candidate.route);
      if (!map.has(label)) map.set(label, []);
      map.get(label).push(candidate);
    });

    return Array.from(map.entries()).map(([label, rows]) => ({ label, rows }));
  }

  function candidateRow(candidate) {
    return `
      <article class="candidate-row">
        <div class="candidate-object">
          <strong>${escapeHtml(candidate.name)}</strong>
          <span>${escapeHtml(candidate.needs.join(", "))}</span>
        </div>
        <div class="candidate-desc">${escapeHtml(candidate.displayName)}</div>
        <span class="type-pill">${escapeHtml(candidate.type)}</span>
        <span class="status ${candidate.verdict}">${escapeHtml(statusLabel(candidate))}</span>
        ${confidenceHtml(candidate.confidence)}
      </article>
    `;
  }

  function renderOptions() {
    if (!state.result || state.result.mode === "cdsOnly") return;
    const { recommendation } = state.result;
    els.optionGrid.innerHTML = solutionOptions()
      .map((option) => {
        const active = option.id === recommendedOptionId(recommendation.primary.id);
        const viable = option.score(recommendation) > 0;
        const status = active ? "Recommended" : viable ? "Alternative" : "Not recommended";
        return `
          <article class="option-card ${active ? "recommended" : ""}">
            <div class="option-title">
              <h3>${escapeHtml(option.label)}</h3>
              <span>${escapeHtml(status)}</span>
            </div>
            <p>${escapeHtml(option.summary(recommendation))}</p>
            <dl>
              <div>
                <dt>Where</dt>
                <dd>${escapeHtml(option.where)}</dd>
              </div>
              <div>
                <dt>Use when</dt>
                <dd>${escapeHtml(option.when)}</dd>
              </div>
            </dl>
          </article>
        `;
      })
      .join("");
  }

  function renderImplementation() {
    if (!state.result || state.result.mode === "cdsOnly") return;
    const { recommendation } = state.result;
    const sections = implementationSections(recommendation);

    els.implementationFlow.innerHTML = sections
      .map((section) => `
        <article class="flow-card ${section.recommended ? "recommended" : ""}">
          <div>
            <h3>${escapeHtml(section.title)}</h3>
            <p>${escapeHtml(section.summary)}</p>
          </div>
          <ol>
            ${section.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
          </ol>
        </article>
      `)
      .join("");
  }

  function renderChecklists() {
    if (!state.result) return;
    const { recommendation } = state.result;

    els.btpFields.innerHTML = recommendation.btp
      .map((item) => `
        <div class="field-card">
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.value)}</strong>
        </div>
      `)
      .join("");

    els.developerChecklist.innerHTML = recommendation.developer
      .map((item) => `
        <article class="check-item">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.body)}</p>
          <a href="${escapeHtml(item.link)}" target="_blank" rel="noreferrer">Open official source</a>
        </article>
      `)
      .join("");

    els.guardrailList.innerHTML = recommendation.guardrails
      .map((item) => `<div class="guardrail">${escapeHtml(item)}</div>`)
      .join("");
  }

  function renderExamples() {
    els.exampleList.innerHTML = seed.examples
      .map((example) => `<button type="button" data-example="${escapeHtml(example)}">${escapeHtml(example)}</button>`)
      .join("");

    els.exampleList.querySelectorAll("[data-example]").forEach((button) => {
      button.addEventListener("click", () => {
        els.promptInput.value = button.dataset.example;
        resizePrompt();
        analysePrompt(button.dataset.example, { save: true });
      });
    });
  }

  function renderHistory() {
    if (!state.history.length) {
      els.historyList.innerHTML = `<div class="empty-history">Saved questions will appear here.</div>`;
      return;
    }

    els.historyList.innerHTML = state.history
      .map((item) => `
        <button class="history-item ${state.result && state.result.id === item.id ? "active" : ""}" type="button" data-id="${escapeHtml(item.id)}">
          <span>${escapeHtml(item.question)}</span>
          <small>${escapeHtml(formatDate(item.createdAt))}</small>
        </button>
      `)
      .join("");

    els.historyList.querySelectorAll("[data-id]").forEach((button) => {
      button.addEventListener("click", () => {
        const item = state.history.find((entry) => entry.id === button.dataset.id);
        if (item) analysePrompt(item.question, { save: false });
      });
    });
  }

  function saveCurrentQuestion(showSavedToast = true) {
    const question = state.result ? state.result.question : clean(els.promptInput.value);
    if (!question) {
      showToast("Enter a requirement first.");
      return;
    }

    saveQuestion(question, { showToast: showSavedToast });
  }

  function saveQuestion(question, options = {}) {
    const existing = state.history.filter((item) => normalize(item.question) !== normalize(question));
    const entry = {
      id: state.result ? state.result.id : createId(),
      question,
      createdAt: state.result ? state.result.createdAt : new Date().toISOString()
    };

    state.history = [entry, ...existing].slice(0, 30);
    saveHistory();
    renderHistory();
    if (options.showToast !== false) showToast("Question saved in this browser.");
  }

  function updateSharedLogButton(question) {
    if (!els.logQuestion) return;
    const cleanQuestion = clean(question || "");
    els.logQuestion.disabled = !cleanQuestion;
    els.logQuestion.dataset.issueUrl = cleanQuestion ? buildSharedIssueUrl(cleanQuestion) : "";
  }

  function openSharedQuestionLog() {
    const question = state.result ? state.result.question : clean(els.promptInput.value);
    if (!question) {
      showToast("Enter a requirement first.");
      return;
    }
    const url = buildSharedIssueUrl(question);
    window.open(url, "_blank", "noopener");
    showToast("Review and submit the GitHub issue to add it to the shared backlog.");
  }

  function buildSharedIssueUrl(question) {
    const title = `[Clean Core Advisor Question] ${question.slice(0, 80)}`;
    const body = [
      "Question:",
      "",
      question,
      "",
      "Source:",
      window.location.href,
      "",
      "Submitted:",
      new Date().toISOString(),
      "",
      "Note:",
      "Generated from the Clean Core Advisor shared backlog button."
    ].join("\n");
    const params = new URLSearchParams({
      title,
      body
    });
    return `https://github.com/sap-cloud-lab/sap-rasd-workbench/issues/new?${params.toString()}`;
  }

  function copyAnswer() {
    if (!state.result) return;
    navigator.clipboard.writeText(answerText())
      .then(() => showToast("Answer copied."))
      .catch(() => showToast("Copy failed."));
  }

  function exportAnswer() {
    if (!state.result) return;
    const blob = new Blob([answerText()], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `clean-core-advisor-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    showToast("Answer exported.");
  }

  function answerText() {
    const result = state.result;
    if (result.mode === "cdsOnly") {
      return [
        "Clean Core Advisor",
        "",
        `Question: ${result.question}`,
        "Mode: CDS/API lookup only",
        "",
        "CDS/API candidates:",
        ...result.candidates.slice(0, 30).map((candidate) => `- ${candidate.name} | ${candidate.displayName} | ${candidate.type} | ${statusLabel(candidate)} | ${candidate.confidence}`)
      ].join("\n");
    }

    const lines = [
      "Clean Core Advisor",
      "",
      `Question: ${result.question}`,
      `Recommendation: ${result.recommendation.title}`,
      `Clean Core Score: ${result.recommendation.cleanScore}`,
      "",
      "Rationale:",
      ...result.recommendation.rationale.map((item) => `- ${item}`),
      "",
      "Implementation steps:",
      ...result.recommendation.steps.map((item) => `- ${item}`),
      "",
      "CDS/API candidates:",
      ...result.candidates.slice(0, 20).map((candidate) => `- ${candidate.name} | ${candidate.displayName} | ${candidate.type} | ${statusLabel(candidate)} | ${candidate.confidence}`),
      "",
      "Guardrails:",
      ...result.recommendation.guardrails.map((item) => `- ${item}`)
    ];
    return lines.join("\n");
  }

  function resizePrompt() {
    els.promptInput.style.height = "auto";
    els.promptInput.style.height = `${Math.min(170, Math.max(40, els.promptInput.scrollHeight))}px`;
  }

  function loadHistory() {
    try {
      const parsed = JSON.parse(localStorage.getItem(storageKey) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  function saveHistory() {
    localStorage.setItem(storageKey, JSON.stringify(state.history));
  }

  function normalizeType(type) {
    const value = clean(type).toUpperCase();
    if (value === "CDSVIEW" || value === "CDS VIEWS") return "CDS View";
    if (value === "API" || value.includes("ODATA")) return "OData API";
    if (value === "EXTENSIBILITY_POINT" || value === "BADI" || value.includes("BUSINESS ADD-IN")) return "Extensibility Point";
    if (!value) return "Object";
    return titleCase(value.toLowerCase());
  }

  function statusLabel(candidate) {
    if (candidate.verdict === "available") return "Released";
    if (candidate.verdict === "verify") return "Verify";
    if (candidate.releaseState === "deprecated") return "Deprecated";
    if (candidate.releaseState === "unreleased") return "Unreleased";
    return "Gap";
  }

  function routeLabel(routeId) {
    const route = seed.routes.find((item) => item.id === routeId);
    return route ? route.short : "Verify";
  }

  function confidenceHtml(value) {
    const count = value === "high" ? 5 : value === "medium" ? 3 : 1;
    const dots = Array.from({ length: 5 }, (_, index) => `<b class="${index < count ? "on" : ""}"></b>`).join("");
    return `<span class="confidence ${escapeHtml(value)}"><span>${escapeHtml(titleCase(value))}</span><i>${dots}</i></span>`;
  }

  function guessRouteHint(text) {
    const normalized = normalize(text);
    if (/external|btp|api|integration|third party/.test(normalized)) return "sideBySide";
    if (/\b(restrict|block|prevent|validate|validation|check)\b/.test(normalized) && /\b(create|creation|change|save|post|submit|purchase order|sales order|journal|asset|goods movement)\b/.test(normalized)) return "keyUser";
    if (/custom field|ui|form|logic/.test(normalized)) return "keyUser";
    if (/abap|rap|custom service|complex/.test(normalized)) return "developer";
    if (/modify standard|unreleased|direct table|copy standard/.test(normalized)) return "notClean";
    return "developer";
  }

  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add("show");
    window.clearTimeout(showToast.timeout);
    showToast.timeout = window.setTimeout(() => els.toast.classList.remove("show"), 2200);
  }

  function formatDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  }

  function createId() {
    return `q-${Date.now()}-${Math.round(Math.random() * 100000)}`;
  }

  function hashText(value) {
    return clean(value).split("").reduce((hash, char) => ((hash << 5) - hash) + char.charCodeAt(0), 0);
  }

  function clean(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function normalize(value) {
    return clean(value).toLowerCase().replace(/centre/g, "center").replace(/ageing/g, "aging");
  }

  function titleCase(value) {
    return clean(value).replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  }

  function unique(items) {
    return Array.from(new Set(items.filter(Boolean)));
  }

  function escapeHtml(value) {
    return clean(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
})();
