//Documents and Layers
//Creating a document, using layers, using selections, using color objects.


var defaultRulerUnits=app.preferences.rulerUnits;
app.preferences.rulerUnits=Units.PIXELS;
for(a=1;a<=3;a++){
    var newDocumentRef=app.documents.add(200,200,72.0,"My New Doc N#"+a,DocumentMode.RGB,DocumentFill.WHITE);
    newDocumentRef=null;
    }
for(a=1;a<=3;a++){
    app.activeDocument=app.documents[app.documents.length-a];
    var curDoc=app.activeDocument;
    var newLayer=curDoc.artLayers.add();
    newLayer.name="Square Layer";
    var randomColor=new SolidColor;
    randomColor.rgb.red=Math.round(Math.random()*255);
    randomColor.rgb.green=Math.round(Math.random()*255);
    randomColor.rgb.blue=Math.round(Math.random()*255);
    var selectionBounds=[[75,75],[125,75],[125,125],[75,125]];
    curDoc.selection.select(selectionBounds,SelectionType.REPLACE,0,false);
    curDoc.selection.fill(randomColor);curDoc.selection.deselect();
    randomColor=null;for(b=0;b<=4;b++){curDoc.layers[0].duplicate() ;
        }
for(b=0;b<=5;b++){
    curDoc.layers[b].rotate((b+5)*8);
    curDoc.layers[b].opacity=100-b*15  ;
    curDoc.activeLayer=curDoc.layers[curDoc.layers.length-1];curDoc.flatten();
}
preferences.rulerUnits=defaultRulerUnits;