var  docRef = app.documents.add() ;
var  artLayers =  docRef.artLayers.add() ;
artLayers.name = "my text" ;
artLayers.kind = LayerKind.TEXT ;


var  textItemRef = docRef.artLayers["my text"].textItem  ;
textItemRef.contents = "you  are  welcom today " ;
textItemRef.justification = Justification.RIGHT









//  ADD    Document    to   app
//  ADD   ARTLAYER TO  DOCUMENT
//artLayers.name = "L2" ;

// APPLY   STYLE   TO   A  LAYER
//docRef.artLayers["L1"].applyStyle("Puzzle(Image)") ;
//L1.applyStyle("Puzzle(Image)") ;
//docRef.artLayers["L1"].applyStyle("Nebula") ;