//CREATE  A  DOCUMENT   AND  AN  INITIAL    LAYER
var  docRef  =  app.documents.add() ;
docRef.artLayers.add()  ;

var  layerSetRef = docRef.layerSets.add()  ;
var  layerRef = docRef.artLayers[0].duplicate(layerSetRef, ElementPlacement.PLACEATEND)  ;