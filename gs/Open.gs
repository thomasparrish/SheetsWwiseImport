function onOpen()
{
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Options")
    .addItem("Add events from GitHub", "AppendEvents")
    .addToUi();
}
