

var  originalRulerUnits  =  app.preferences.rulerUnits ;
var  fileRef = new  File("E:/KDP_Project/cover_baseballcap.pdf") ;
var  pdfOpenOptions = new  PDFOpenOptions ;
pdfOpenOptions.antiAlias  =  true ;
pdfOpenOptions.mode = OpenDocumentMode.RGB ;
pdfOpenOptions.resolution = 72  ;
pdfOpenOptions.page = 3

app.open(fileRef, pdfOpenOptions ) ;

app.preferences.rulerUnits = originalRulerUnits ;

//E:/KDP_Project/cover_baseballcap.pdf