//save original  ruler  units, then  assign  it  to  inches
//startRulerUnits = app.preferences.rulerUnits ;
//app.preferences.rulerUnits = Units.INCHES ;

var   docRef  =  app.documents.add(50, 50) ;
var shapeRef = [ 
       [0,0], 
       [0,160],
       [160,160],
       [160,0]
       ]  ;


var shapeRef2 = [ 
       [120,120], 
       [0,160],
       [160,160],
       [160,0]
       ]  ;
var  fillColor2 = new  SolidColor() ;
fillColor2.rgb.red = 255 ;
fillColor2.rgb.green = 0 ;
fillColor2.rgb.blue = 0 ;
       
var  fillColor = new  SolidColor() ;
fillColor.rgb.red = 0 ;
fillColor.rgb.green = 255 ;
fillColor.rgb.blue = 0 ;

docRef.selection.select(shapeRef) ;   
docRef.selection.fill(fillColor )  ;
docRef.selection.select(shapeRef2) ;   
docRef.selection.fill(fillColor2 )  ;
docRef.selection.deselect() ;


//app.activeDocument.selection.fill( fillColor,  ColorBlendMode.VIVIDLIGHT,  25,  false  )  ;
//docRef.selection.fill(fillColor, ColorBlendMode.VIVIDLIGHT, 25,  false )  ;
/*
strokeColor = new SolidColor  ;
strokeColor.cmyk.cyan  =  20  ;
strokeColor.cmyk.magenta = 50 ;
strokeColor.cmyk.yellow = 30 ;
strokeColor.cmyk.black = 0 ;
docRef.selection.stroke(strokeColor, 2, StrokeLocation.OUTSIDE, ColorBlendMode.VIVIDLIGHT,75, false )  ;
*/
