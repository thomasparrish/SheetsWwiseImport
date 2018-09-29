function GetSFXEvents()
{
  var url = "https://raw.githubusercontent.com/thomasparrish/SheetsWwiseImport/master/WwiseSFX.txt";
  var events = UrlFetchApp.fetch(url);  
  var arr = events.toString().split("\n");
  return arr;
}

function GetMUSEvents()
{
  var url = "https://raw.githubusercontent.com/thomasparrish/SheetsWwiseImport/master/WwiseMUS.txt";
  var events = UrlFetchApp.fetch(url).getContentText();
  var arr = events.toString().split("\n");
  return arr;
}

function GetVOEvents()
{
  var url = "https://raw.githubusercontent.com/thomasparrish/SheetsWwiseImport/master/WwiseVO.txt";
  var events = UrlFetchApp.fetch(url).getContentText();
  var arr = events.toString().split("\n");
  return arr;
}

function AppendEvents()
{
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var events = [];
  switch (sheet.getName())
  {
    case "SFX":
      events = GetSFXEvents();
      break;
    case "MUS":
      events = GetMUSEvents();
      break;
    case "VO":
      events = GetVOEvents();
      break;
    default:
      return;
  }

  var startRow = (sheet.getLastRow() + 1);
  for (var i = 0, len = events.length; i < len; ++i) 
  {
    sheet.getRange(startRow+i, 1).setValue(events[i]);
  }
}
