//MAKE  A    NEW   DOCUMENT   AND  A  LAYER   IN  THE   DOCUMENT  
app.documents.add() ;
app.activeDocument.artLayers.add() ;

//GET   A   REFERENCE    TO   THE  FIRST   LAYER   IN  THE   DOCUMENT  
var  layerRef  =  app.activeDocument.layers[0] ;

//CREATE   A  NEW  LAYERSET    ( IT  WILL  BE  CREATED  AT   THE  BEGINNING  OF  THE   //DOCUMENT
var  newLayerSetRef = app.activeDocument.layerSets.add()  ;

//MOVE  THE  NEW   LAYER   TO  AFTER   THE  FIRST  LAYER
newLayerSetRef.move(layerRef,  ElementPlacement.PLACEAFTER) ;