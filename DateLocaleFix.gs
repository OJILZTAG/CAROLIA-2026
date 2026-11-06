/**
 * CAROLIA 2026 – Date display repair
 * Run fixCaroliaDateDisplay() ONCE from Apps Script.
 * It preserves actual Date values and registration records.
 */
function fixCaroliaDateDisplay() {
  const spreadsheet = SpreadsheetApp.openById('1w0uauTfDF_O7zCgx7DkWw8rfJ_931XjqYwsqAl_Cx10');
  spreadsheet.setSpreadsheetLocale('en_GB');
  const sheet = spreadsheet.getSheetByName('Registrations');
  if (!sheet) throw new Error('Registrations sheet was not found.');
  const lastRow = sheet.getLastRow();
  if (lastRow >= 2) {
    sheet.getRange(2, 2, lastRow - 1, 1).setNumberFormat('dd-mmm-yyyy hh:mm:ss');
  }
  return 'CAROLIA 2026 date display set to English. Existing registration records were preserved.';
}
