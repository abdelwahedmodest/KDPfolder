//Create  2   documents
var  docRef = app.documents.add(9,7) ;
var  otherDocRef = app.documents.add(8,6) ;

//make   docRef   the  active  document  
app.activeDocument = docRef ;
docRef.activeLayer = docRef.layers[0]  ;

theChannels =  new  Array(docRef.channels[0], docRef.channels[2] ) ;
docRef.activeChannels =  theChannels ;
app.activeDocument.activeChannels = activeDocument.componentChannels ; 