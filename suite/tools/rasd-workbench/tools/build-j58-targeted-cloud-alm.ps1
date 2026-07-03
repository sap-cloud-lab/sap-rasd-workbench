param(
  [string]$Source = "C:\Users\f617820\Downloads\J58_S4CLD2602_BPD_EN_AU.xlsx",
  [string]$Output = "C:\Users\f617820\OneDrive - Fortescue Metals Group\Documents\Day to Day tasks\sap-rasd-tool-site\exports\2608-upgrade-J58-cloud-alm-targeted.xlsx"
)

$ErrorActionPreference = "Stop"

function New-Row {
  $row = New-Object string[] 21
  for ($i = 0; $i -lt 21; $i++) { $row[$i] = "" }
  return $row
}

function Set-Col {
  param($row, [int]$col, [string]$value)
  $row[$col - 1] = $value
}

function Add-Row {
  param([System.Collections.Generic.List[string[]]]$rows, [string[]]$row)
  $rows.Add($row)
}

function Add-CustomRow {
  param(
    [System.Collections.Generic.List[string[]]]$rows,
    [string]$testCaseName,
    [string]$activity,
    [string]$action,
    [string]$instruction,
    [string]$expected
  )
  $row = New-Row
  if ($rows.Count -eq 5) {
    Set-Col $row 2 $testCaseName
    Set-Col $row 13 "In Preparation"
  }
  Set-Col $row 15 $activity
  Set-Col $row 19 $action
  Set-Col $row 20 $instruction
  Set-Col $row 21 $expected
  Add-Row $rows $row
}

function Add-RasdChange {
  param(
    [System.Collections.Generic.List[string[]]]$rows,
    [string]$testCaseName,
    [string]$title,
    [string]$why,
    [string]$what,
    [string]$expected
  )
  $instruction = "<h2>RASD release change</h2><p><b>What changed:</b> $what</p><p><b>Why this is in the J58 upgrade pack:</b> $why</p><p><b>How to test:</b> Run only the activity below with a real business role and capture evidence of the changed behaviour. Do not replay the full J58 script.</p>"
  Add-CustomRow $rows $testCaseName "RASD change - $title" "Release-specific validation" $instruction $expected
}

function Convert-ToColumnName {
  param([int]$index)
  $name = ""
  while ($index -gt 0) {
    $mod = ($index - 1) % 26
    $name = [char](65 + $mod) + $name
    $index = [math]::Floor(($index - $mod) / 26)
  }
  return $name
}

function Escape-XmlText {
  param([string]$text)
  if ($null -eq $text) { return "" }
  return [System.Security.SecurityElement]::Escape($text)
}

function New-SheetXml {
  param([System.Collections.Generic.List[string[]]]$rows)
  $lastRow = $rows.Count
  $dimension = "A1:U$lastRow"
  $sb = [System.Text.StringBuilder]::new()
  [void]$sb.Append('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>')
  [void]$sb.Append('<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">')
  [void]$sb.Append("<dimension ref=`"$dimension`"/><sheetViews><sheetView workbookViewId=`"0`"/></sheetViews><sheetFormatPr defaultRowHeight=`"15`"/><sheetData>")
  for ($r = 1; $r -le $rows.Count; $r++) {
    [void]$sb.Append("<row r=`"$r`">")
    $row = $rows[$r - 1]
    for ($c = 1; $c -le 21; $c++) {
      $value = $row[$c - 1]
      if ([string]::IsNullOrWhiteSpace($value)) { continue }
      $cell = "$(Convert-ToColumnName $c)$r"
      $escaped = Escape-XmlText $value
      [void]$sb.Append("<c r=`"$cell`" t=`"inlineStr`"><is><t xml:space=`"preserve`">$escaped</t></is></c>")
    }
    [void]$sb.Append("</row>")
  }
  [void]$sb.Append('</sheetData><pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/></worksheet>')
  return $sb.ToString()
}

function Write-TextFile {
  param([string]$path, [string]$content)
  $dir = Split-Path -Parent $path
  if (!(Test-Path -LiteralPath $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
  [System.IO.File]::WriteAllText($path, $content, [System.Text.UTF8Encoding]::new($false))
}

function Copy-SourceRange {
  param(
    $sheet,
    [System.Collections.Generic.List[string[]]]$rows,
    [int]$start,
    [int]$end
  )
  for ($r = $start; $r -le $end; $r++) {
    $row = New-Row
    for ($c = 1; $c -le 21; $c++) {
      if ($c -eq 2 -or $c -eq 13) { continue }
      $value = $sheet.Cells.Item($r, $c).Value2
      if ($null -ne $value) { Set-Col $row $c ([string]$value) }
    }
    Add-Row $rows $row
  }
}

$outputDir = Split-Path -Parent $Output
if (!(Test-Path -LiteralPath $outputDir)) { New-Item -ItemType Directory -Force -Path $outputDir | Out-Null }
if (Test-Path -LiteralPath $Output) { Remove-Item -LiteralPath $Output -Force }

$excel = $null
$sourceWb = $null
$sourceWs = $null
$rows = [System.Collections.Generic.List[string[]]]::new()

try {
  $excel = New-Object -ComObject Excel.Application
  $excel.Visible = $false
  $excel.DisplayAlerts = $false
  $sourceWb = $excel.Workbooks.Open($Source, $null, $true)
  $sourceWs = $sourceWb.Worksheets.Item("Test Cases")

  for ($r = 1; $r -le 5; $r++) {
    $row = New-Row
    for ($c = 1; $c -le 21; $c++) {
      $value = $sourceWs.Cells.Item($r, $c).Value2
      if ($null -ne $value) { Set-Col $row $c ([string]$value) }
    }
    Add-Row $rows $row
  }
  $rows[2][1] = "2608 Upgrade - J58 Accounting and Financial Close - targeted Cloud ALM script generated from RASD + SAP Process Navigator"

  $testCaseName = "2608 Upgrade - J58 Accounting and Financial Close"
  $summary = "<h2>Purpose</h2><p>This targeted Cloud ALM test case is for SAP S/4HANA Cloud Public Edition 2608 upgrade testing of scope item J58 only.</p><p>It was built from RASD used-scope changes and the official Process Navigator Cloud ALM workbook J58_S4CLD2602_BPD_EN_AU. The full SAP workbook has 743 rows and 112 activity groups; this file keeps only the rows that match reviewed J58 release changes, plus custom rows where the official script has no direct activity.</p><p>Excluded examples from the reviewed J58 list include not-relevant or future-adoption items such as Manage Posting Periods AFC integration, Bills of Exchange in Manage Journal Entries, Line Item Withholding Tax configuration, Tax Reallocation archiving, Alternative Chart of Accounts, and IFRS 18 advanced valuation where the customer review marked them out of release testing.</p>"
  Add-CustomRow $rows $testCaseName "Upgrade release focus for J58" "Confirm targeted scope" $summary "Tester understands that this is a release-specific J58 pack, not the full best-practice regression script."

  Add-RasdChange $rows $testCaseName "Removal of Display Profit Center (KE53)" "The old KE53 app is deprecated/deleted and users must move to Manage Profit Centers (New Version) F3516A." "Old app KE53 / Display Profit Center is removed. Successor app is F3516A / Manage Profit Centers (New Version). Validate launchpad tile, role/catalog access, and basic display/edit path." "F3516A is visible to the right business role, opens successfully, and supports the replacement profit-center display path."
  Copy-SourceRange $sourceWs $rows 165 170
  Copy-SourceRange $sourceWs $rows 192 193

  Add-RasdChange $rows $testCaseName "Comments in Manage Profit Centers" "The same successor app now contains comments on profit center validity periods, so it can be tested together with the KE53 replacement path." "Manage Profit Centers (New Version) now supports comments on the profit center detail page at validity-period level." "A reviewer can create, view, and delete a comment on a test profit center where the business role is authorized."

  Add-RasdChange $rows $testCaseName "Changes in Manage Operating G/L Accounts App" "RASD says the Mass Change action has moved/changed. This is a visible app behaviour change for G/L master-data users." "The Mass Change action item in Manage Operating G/L Accounts is now presented as the Mass Change action group." "Business user can locate the Mass Change action group and complete the same G/L account change flow as before."
  Copy-SourceRange $sourceWs $rows 136 136
  Copy-SourceRange $sourceWs $rows 149 152

  Add-RasdChange $rows $testCaseName "Changed Report: G/L Accounts Blocked in P System Until Transport of Changes" "This is a release-readiness report check for pending transported G/L changes, not a full finance regression." "The report lists G/L accounts blocked for posting in production until transport of changes, including open transport requests." "Report opens and shows expected blocked G/L account / transport information, or returns a clean no-data result with no runtime issue."

  Add-RasdChange $rows $testCaseName "Clear G/L Accounts - Manual Clearing: Enhanced Simulate Button" "This is a direct J58 process step in the SAP script and the changed behaviour is limited to the simulate action." "The Simulate button in Clear G/L Accounts - Manual Clearing has been enhanced." "User can run manual clearing simulation and compare the proposed clearing result before posting."
  Copy-SourceRange $sourceWs $rows 432 444

  Add-RasdChange $rows $testCaseName "Negative Posting Check for Posting APIs" "This is a technical/API release change. It matters if integrations post journal entries through the affected APIs or use reversal negative posting." "SAP introduced an optional check that blocks negative postings in Journal Entry APIs when negative posting is not configured. Validate SSCUI 101039 Define Reasons for Reversal and one API payload or representative reversal case." "Configured reversal reason / API payload behaves as expected: negative posting is accepted only when configured, otherwise the API or reversal is blocked with the expected message."
  Add-CustomRow $rows $testCaseName "RASD change - Negative Posting Check for Posting APIs" "Check configuration SSCUI 101039" "<p>Open configuration activity <b>Define Reasons for Reversal</b> (SSCUI <b>101039</b>). Confirm whether the reversal reason used by CFA is configured for negative posting. Then run a small reversal/API test with a known posted document.</p><p>Use SAP Note 3157729 / KBA 3641505 as reference when validating behaviour.</p>" "Negative posting behaviour matches the configured reversal reason and no unexpected API posting failure occurs."
  Copy-SourceRange $sourceWs $rows 331 343

  Add-RasdChange $rows $testCaseName "Key User Extensibility for Simulating Journal Entries" "This affects the simulation dialog, so the test should be a focused journal-entry simulation with any CFA-relevant custom fields." "The Simulate Journal Entries dialog can be extended with key-user extensibility." "A test journal entry simulation displays the expected standard/custom fields and the result can be reviewed before posting."
  Copy-SourceRange $sourceWs $rows 208 219

  Add-RasdChange $rows $testCaseName "Refactoring of Display Tax Information Report" "RASD names a changed report, so this is a targeted report-launch/output check." "The report Display Tax Information for Country/Region (S_ALR_87012365) has been refactored." "Report opens for Australia and returns expected output or controlled no-data result without layout/runtime issues."
  Copy-SourceRange $sourceWs $rows 701 704

  Add-RasdChange $rows $testCaseName "Valuation of Parallel Currencies in Advanced Valuation" "This is a configuration and process check in J58 advanced valuation, relevant only if advanced valuation is used." "A valuation approach can be selected per accounting principle for parallel-currency processing in Advanced Foreign Currency Valuation. Configuration activity ID 107185." "Configuration is reviewed and one advanced valuation run confirms expected valuation postings/output for parallel currencies."
  Copy-SourceRange $sourceWs $rows 26 27
  Copy-SourceRange $sourceWs $rows 546 553

  Add-RasdChange $rows $testCaseName "Cash Flow Statement Based on Reporting Rules" "This is an adoption/review item, but it is linked to financial statement output and can be checked without replaying all J58." "Cash flow statements can be generated using reporting rules instead of semantic tags assigned to G/L accounts." "Reviewer confirms whether reporting-rule based cash flow is adopted; if adopted, statement output is generated and compared to expected finance reporting."
  Copy-SourceRange $sourceWs $rows 637 644

  Add-RasdChange $rows $testCaseName "Financial Statements Review Booklet" "This is directly represented in the J58 script and affects reporting output/review." "Financial Statements Review Booklet is automatically available and supports netting partner shifts and standard commenting." "Review booklet opens, expected reporting data is visible, and comments/netting partner shift behaviour is reviewed if used."
  Copy-SourceRange $sourceWs $rows 645 649

  Add-RasdChange $rows $testCaseName "CDS Views Released for Developer Extensibility" "This is not a business process replay. It is a clean-core extensibility check for custom CDS/API/BTP consumers." "Several accounting CDS views are released for developer extensibility, including I_JOURNALENTRYITEMCUBE, I_GLACCOUNTLINEITEMCUBE, I_GLACCOUNTYEARTODATEBALANCEC and related fiscal-period views." "Technical owner confirms whether CFA uses any listed CDS/API views; impacted custom CDS, reports, SAC/Power BI models, or BTP consumers activate and reconcile output after upgrade."
}
finally {
  if ($sourceWb) { $sourceWb.Close($false) }
  if ($excel) { $excel.Quit() }
  foreach ($obj in @($sourceWs, $sourceWb, $excel)) {
    if ($obj) { [System.Runtime.InteropServices.Marshal]::ReleaseComObject($obj) | Out-Null }
  }
  [GC]::Collect()
  [GC]::WaitForPendingFinalizers()
}

$tempRoot = Join-Path $env:TEMP ("rasd-cloud-alm-pack-" + [guid]::NewGuid().ToString("N"))
New-Item -ItemType Directory -Path $tempRoot | Out-Null

try {
  Write-TextFile (Join-Path $tempRoot "[Content_Types].xml") '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>'
  Write-TextFile (Join-Path $tempRoot "_rels/.rels") '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/></Relationships>'
  Write-TextFile (Join-Path $tempRoot "xl/workbook.xml") '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Test Cases" sheetId="1" r:id="rId1"/></sheets></workbook>'
  Write-TextFile (Join-Path $tempRoot "xl/_rels/workbook.xml.rels") '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/></Relationships>'
  Write-TextFile (Join-Path $tempRoot "docProps/app.xml") '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>RASD Workbench</Application></Properties>'
  $created = (Get-Date).ToUniversalTime().ToString("yyyy-MM-ddTHH:mm:ssZ")
  Write-TextFile (Join-Path $tempRoot "docProps/core.xml") "<?xml version=`"1.0`" encoding=`"UTF-8`" standalone=`"yes`"?><cp:coreProperties xmlns:cp=`"http://schemas.openxmlformats.org/package/2006/metadata/core-properties`" xmlns:dc=`"http://purl.org/dc/elements/1.1/`" xmlns:dcterms=`"http://purl.org/dc/terms/`" xmlns:dcmitype=`"http://purl.org/dc/dcmitype/`" xmlns:xsi=`"http://www.w3.org/2001/XMLSchema-instance`"><dc:title>2608 Upgrade - J58 Accounting and Financial Close</dc:title><dc:creator>RASD Workbench</dc:creator><cp:lastModifiedBy>RASD Workbench</cp:lastModifiedBy><dcterms:created xsi:type=`"dcterms:W3CDTF`">$created</dcterms:created><dcterms:modified xsi:type=`"dcterms:W3CDTF`">$created</dcterms:modified></cp:coreProperties>"
  Write-TextFile (Join-Path $tempRoot "xl/worksheets/sheet1.xml") (New-SheetXml $rows)

  Add-Type -AssemblyName System.IO.Compression.FileSystem
  if (Test-Path -LiteralPath $Output) { Remove-Item -LiteralPath $Output -Force }
  [System.IO.Compression.ZipFile]::CreateFromDirectory($tempRoot, $Output)
}
finally {
  $resolvedTemp = [System.IO.Path]::GetFullPath($tempRoot)
  $resolvedBase = [System.IO.Path]::GetFullPath($env:TEMP)
  if ($resolvedTemp.StartsWith($resolvedBase, [System.StringComparison]::OrdinalIgnoreCase) -and (Test-Path -LiteralPath $resolvedTemp)) {
    Remove-Item -LiteralPath $resolvedTemp -Recurse -Force
  }
}

Get-Item -LiteralPath $Output | Select-Object FullName, Length, LastWriteTime
