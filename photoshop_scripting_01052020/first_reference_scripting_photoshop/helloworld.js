



for ( var i=1 ;  i <6 ; i++) {
    var    OriginalUnit = preferences.rulerUnits 
    preferences.rulerUnits = Units.INCHES 

    var  docRef = app.documents.add( 2, 4 ) 


    var  artLayerRef = docRef.artLayers.add() 
    artLayerRef.kind = LayerKind.TEXT 


    var textItemRef = artLayerRef.textItem 
    textItemRef.contents = "Bonjour abdelwahed " 


    docRef = null 
    artLayerRef = null 
    textItemRef = null 

    app.preferences.rulerUnits = OriginalUnit 
    
 }