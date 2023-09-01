

//This function just to try how it is work using relative reference 

function FirstMacro() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveRangeList().setFontWeight('bold')
  .setFontColor('#ff0000')
  .setFontStyle('italic');
};

//convert all formulas to values in the active sheet

function formulasToValuesActiveSheet() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getDataRange();
  range.copyValuesToRange(sheet, 1, range.getLastColumn(), 1, range.getLastRow());
};

//This function just to try how it is work using absolute reference 

function SecondMacro() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('C1').activate();
  spreadsheet.getActiveRangeList().setFontWeight('bold')
  .setFontColor('#0000ff')
  .setFontStyle('italic');
};

//this is to give green color for the table with selctted range using absolute reference 

function greencolor() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getCurrentCell().offset(0, 0, 11, 5).activate();
  spreadsheet.getActiveRange().applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY);
  var banding = spreadsheet.getActiveRange().getBandings()[0];
  banding.setHeaderRowColor('#63d297')
  .setFirstRowColor('#ffffff')
  .setSecondRowColor('#e7f9ef')
  .setFooterRowColor(null);
};


//this is to give green color for the table with selctted range using relative reference 


function green() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getActiveRange().applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY);
  var banding = spreadsheet.getActiveRange().getBandings()[0];
  banding.setHeaderRowColor('#63d297')
  .setFirstRowColor('#ffffff')
  .setSecondRowColor('#e7f9ef')
  .setFooterRowColor(null);
};


//modification done to apply the changes for any size of table to be orange color table 

function Orange() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getDataRange().applyRowBanding(SpreadsheetApp.BandingTheme.ORANGE);
 
};


//here I have recoreded how to generate a chart using existing data table

function tobuildChart() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('D1:E11').activate();
  var sheet = spreadsheet.getActiveSheet();
  var chart = sheet.newChart()
  .asPieChart()
  .addRange(spreadsheet.getRange('D1:E11'))
  .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_COLUMNS)
  .setTransposeRowsAndColumns(false)
  .setNumHeaders(1)
  .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_BOTH)
  .setOption('useFirstColumnAsDomain', true)
  .setOption('isStacked', 'false')
  .setOption('title', 'Sales price')
  .setPosition(3, 3, 54, 10)
  .build();
  sheet.insertChart(chart);
  var charts = sheet.getCharts();
  chart = charts[charts.length - 1];
  sheet.removeChart(chart);
  chart = sheet.newChart()
  .asPieChart()
  .addRange(spreadsheet.getRange('D1:E11'))
  .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_COLUMNS)
  .setTransposeRowsAndColumns(false)
  .setNumHeaders(1)
  .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_BOTH)
  .setOption('bubble.stroke', '#000000')
  .setOption('useFirstColumnAsDomain', false)
  .setOption('isStacked', 'false')
  .setOption('title', 'Sales price')
  .setOption('annotations.domain.textStyle.color', '#808080')
  .setOption('textStyle.color', '#000000')
  .setOption('legend.textStyle.color', '#1a1a1a')
  .setOption('pieSliceTextStyle.color', '#000000')
  .setOption('titleTextStyle.color', '#757575')
  .setOption('annotations.total.textStyle.color', '#808080')
  .setPosition(3, 3, 54, 10)
  .build();
  sheet.insertChart(chart);
  charts = sheet.getCharts();
  chart = charts[charts.length - 1];
  sheet.removeChart(chart);
  chart = sheet.newChart()
  .asPieChart()
  .addRange(spreadsheet.getRange('D1:E11'))
  .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_COLUMNS)
  .setTransposeRowsAndColumns(false)
  .setNumHeaders(1)
  .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_BOTH)
  .setOption('applyAggregateData', 0)
  .setOption('bubble.stroke', '#000000')
  .setOption('useFirstColumnAsDomain', false)
  .setOption('isStacked', 'false')
  .setOption('title', 'Sales price')
  .setOption('annotations.domain.textStyle.color', '#808080')
  .setOption('textStyle.color', '#000000')
  .setOption('legend.textStyle.color', '#1a1a1a')
  .setOption('pieSliceTextStyle.color', '#000000')
  .setOption('titleTextStyle.color', '#757575')
  .setOption('annotations.total.textStyle.color', '#808080')
  .setPosition(3, 3, 54, 10)
  .build();
  sheet.insertChart(chart);
  charts = sheet.getCharts();
  chart = charts[charts.length - 1];
  sheet.removeChart(chart);
  chart = sheet.newChart()
  .asPieChart()
  .addRange(spreadsheet.getRange('D1:E11'))
  .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_COLUMNS)
  .setTransposeRowsAndColumns(false)
  .setNumHeaders(1)
  .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_BOTH)
  .setOption('applyAggregateData', 0)
  .setOption('bubble.stroke', '#000000')
  .setOption('useFirstColumnAsDomain', false)
  .setOption('isStacked', 'false')
  .setOption('title', 'Sales price')
  .setOption('annotations.domain.textStyle.color', '#808080')
  .setOption('textStyle.color', '#000000')
  .setOption('legend.textStyle.color', '#1a1a1a')
  .setOption('pieSliceTextStyle.color', '#000000')
  .setOption('titleTextStyle.color', '#757575')
  .setOption('annotations.total.textStyle.color', '#808080')
  .setPosition(2, 6, 15, 0)
  .build();
  sheet.insertChart(chart);
};

//convert all formulas to values in every sheet of the Google Sheet

function formulasToValuesGlobal() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  sheets.forEach(function(sheet) {
    var range = sheet.getDataRange();
    range.copyValuesToRange(sheet, 1, range.getLastColumn(), 1, range.getLastRow());
  });
};


// sort sheets alphabetically
function sortSheets() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = spreadsheet.getSheets();
  var sheetNames = [];
  sheets.forEach(function(sheet,i) {
    sheetNames.push(sheet.getName());
  });
  sheetNames.sort().forEach(function(sheet,i) {
    spreadsheet.getSheetByName(sheet).activate();
    spreadsheet.moveActiveSheet(i + 1);
  });
};

// unhide all rows and columns in current Sheet data range
function unhideRowsColumnsActiveSheet() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getDataRange();
  sheet.unhideRow(range);
  sheet.unhideColumn(range);
}


// unhide all rows and columns in data ranges of entire Google Sheet
function unhideRowsColumnsGlobal() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  sheets.forEach(function(sheet) {
    var range = sheet.getDataRange();
    sheet.unhideRow(range);
    sheet.unhideColumn(range);
  });
};

// set all Sheets tabs to red
function setTabColor() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  sheets.forEach(function(sheet) {
    sheet.setTabColor("ff0000");
  });
};

// remove all Sheets tabs color
function resetTabColor() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  sheets.forEach(function(sheet) {
    sheet.setTabColor(null);
  });
};

//Hide all sheets apart from the active one

function hideAllSheetsExceptActive() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  sheets.forEach(function(sheet) {
    if (sheet.getName() != SpreadsheetApp.getActiveSheet().getName()) 
      sheet.hideSheet();
  });
};

//Unhide all Sheets in your Sheet in one go

function unhideAllSheets() {
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  sheets.forEach(function(sheet) {
    sheet.showSheet();
  });
};

// reset all filters for a data range on current Sheet
function resetFilter() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getDataRange();
  range.getFilter().remove();
  range.createFilter();
}



