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
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();  // Current sheet
  var events = [];                                                     // Event names from GitHub
  
    // Get sheet-relevant event list from GitHub
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
  
  var startRow = (sheet.getLastRow() + 1);  // Row to append events names to
  var currentEvents = [];                   // Hold all events on the sheet
  
    // Get list of events currently on the sheet to diff with GitHub events
  for (var i = 2, len = sheet.getLastRow(); i <= len; ++i)
  {
    currentEvents.push(sheet.getRange(i, 1).getValue());
  }
  
    // Compare each item on the spreadsheet
    // If there is a match, remove it from the incoming list
  for (var i = 0, len = currentEvents.length; i < len; ++i)
  {
    for (var j = 0, len2 = events.length; j < len2; ++j)
    {
      if (currentEvents[i] == events[j])
      {
        events.splice(j, 1);
      }
    }
  }
  
    // Append the new events to the spreadsheet
  for (var i = 0, len = events.length; i < len; ++i)
  {
    sheet.getRange((startRow+i), 1).setValue(events[i]);
  }
}
