


 /*   
function getRndInteger(ma) {
  //return  Math.floor(Math.random() * (max - min)) + min ;
    return  Math.floor(Math.random() * ma) ;

 }

for (var b=0 ;  b<5 ; b++){
var number = getRndInteger(255,245) ;
var number1 = getRndInteger(255,235) ;
var number2 = getRndInteger(255,225) ;
//var number3 = getRndInteger(255,215) ;
//alert(number ) ;
*/



for (var b=0 ;  b<3 ; b++){
//make  new  document 
app.documents.add() ;

//create  new  art  layer  at   the  beginning   of  the  current   document
var   layerRef  =  app.activeDocument.artLayers.add() ;
layerRef.name = "MYBLENDERLAYER" ;
layerRef.blendMode  = BlendMode.NORMAL  ;

//select   all   so  you   can  apply   fill  to   the  Selection
app.activeDocument.selection.selectAll  ;

//Create  a  color   to   be  used   with   the  fill   command
var ColorRef  =  SolidColor  ;
ColorRef.rgb.red = Math.floor(Math.random()* 255) ;
//ColorRef.rgb.green = number1 ;
ColorRef.rgb.green = Math.floor(Math.random()* 255);
ColorRef.rgb.blue = Math.floor(Math.random() * 255) ;


//Now  apply    fill   to  the  current   selection
app.activeDocument.selection.fill(ColorRef) ;
}
