//LINKING  LAYERS  
var docRef  = app.documents.add() ;
var  layerRef1 = docRef.artLayers.add() ;
var  layerRef2 = docRef.artLayers.add() ;
layerRef1.link(layerRef2) ;