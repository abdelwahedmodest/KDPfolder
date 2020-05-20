//save  document   as  .jpeg  file

app.documents.add(4, 4 ) ;
//C:/Users/jannat/Desktop/flask/https _adjuntos.jpeg
jpegFile = new  File("C:/Users/jannat/Desktop/flask/https _adjuntos.jpeg") ;
jpegSaveOptions  = new  JPEGSaveOptions() ;
jpegSaveOptions.embedColorProfile = true ;
jpegSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE  ;
jpegSaveOptions.matte =MatteType.NONE  ;
jpegSaveOptions.quality = 1  ;
app.ActiveDocment.saveAs(jpegFile,  jpegSaveOptions,  true, Extension.LOWERCASE )  ;
