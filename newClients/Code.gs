//Show web app
function doGet(request) {
  
  var template = HtmlService.createTemplateFromFile('newIndex')
  var html = template.evaluate();
  
  var htmlOutput = HtmlService.createHtmlOutput(html);
  htmlOutput.addMetaTag('viewport', 'width=device-width, user-scalable=no');
  return htmlOutput;
}

//Filename
function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

//Put data on google sheets
function processForm(formObject){
  //Save the url google sheet locate
  var url = "https://docs.google.com/spreadsheets/d/1S2wNeAH0RzlMVssxo5I3mYb0gKKArRmLKjsN7SQT5u4/edit#gid=0";

  //Open spreadsheet by url
  var ss = SpreadsheetApp.openByUrl(url);
  //save in sheet
  var ws = ss.getSheetByName('Clientes Nuevos');

  //Put info in order
  ws.appendRow([
    formObject.razon_social,
    formObject.rfc,
    formObject.calle,
    formObject.numero_exterior,
    formObject.numero_interior,
    formObject.colonia,
    formObject.estado,
    formObject.del_mun,
    formObject.cp,
    formObject.telefono,
    formObject.email,
    formObject.numero_ticket,
    formObject.cfdi,
    formObject.pago,
    formObject.regimen
  ]);


}

