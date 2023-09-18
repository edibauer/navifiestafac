function doGet(request) {
  
    var template = HtmlService.createTemplateFromFile('indexEnd')
    var html = template.evaluate();
    
    var htmlOutput = HtmlService.createHtmlOutput(html);
    htmlOutput.addMetaTag('viewport', 'width=device-width, user-scalable=no');
    return htmlOutput;
  }
  
  function include(filename){
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
  }
  
  