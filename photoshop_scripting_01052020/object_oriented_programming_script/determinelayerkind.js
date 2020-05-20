// Photoshop Script
// "Determine Layer Kind"
// Script by Mehmet Şensoy
 
#target photoshop  
app.bringToFront();
 
var doc = app.activeDocument;
var layer = doc.activeLayer;// Save selected layer to variable:
 
function determinelayerkind (layer) {
	
if(layer.kind == LayerKind.TEXT) {layerkind = "Text Layer";return layerkind;} // Text Layer

else if(layer.kind == LayerKind.SOLIDFILL) {layerkind = "Shape Layer";return layerkind; } /* Shape Layer */ 

else if(layer.kind == LayerKind.BLACKANDWHITE) {layerkind = "Black and White adjustment layer";return layerkind; } /* Black and White */ 

else if(layer.kind == LayerKind.BRIGHTNESSCONTRAST) {layerkind = "Brightness contrast adjustment layer";return layerkind; } /* Brightness contrast adjustment layer */ 

else if(layer.kind == LayerKind.CHANNELMIXER) {layerkind = "Channel mixer adjustment layer";return layerkind; } /* Channel mixer adjustment layer */ 

else if(layer.kind == LayerKind.COLORBALANCE) {layerkind = "Color balance adjustment layer";return layerkind; } /* Color balance adjustment layer */ 

else if(layer.kind == LayerKind.CURVES) {layerkind = "Curves adjustment layer";return layerkind; } /* Curves adjustment layer */

else if(layer.kind == LayerKind.EXPOSURE) {layerkind = "Exposure layer";return layerkind; } /* Exposure layer */ 

else if(layer.kind == LayerKind.GRADIENTFILL) {layerkind = "Gradient fill";return layerkind; } /* Gradient fill */ 

else if(layer.kind == LayerKind.GRADIENTMAP) {layerkind = "Gradient map adjustment layer";return layerkind; } /* Gradient map adjustment layer */ 

else if(layer.kind == LayerKind.HUESATURATION) {layerkind = "Hue saturation adjustment layer";return layerkind; } /* Hue saturation adjustment layer */ 

else if(layer.kind == LayerKind.INVERSION) {layerkind = "Invert adjustment layer";return layerkind; } /* Invert adjustment layer */ 

else if(layer.kind == LayerKind.LAYER3D) {layerkind = "3D layer";return layerkind; } /* 3D layer */

else if(layer.kind == LayerKind.LEVELS) {layerkind = "Levels adjustment layer";return layerkind; } /* Levels adjustment layer */ 

else if(layer.kind == LayerKind.NORMAL) {layerkind = "Normal layer";return layerkind; } /* Normal Layer */ 

else if(layer.kind == LayerKind.PATTERNFILL) {layerkind = "Pattern fill layer";return layerkind; } /* Pattern fill layer */ 

else if(layer.kind == LayerKind.PHOTOFILTER) {layerkind = "Photo filter layer";return layerkind; } /* Photo filter layer */ 

else if(layer.kind == LayerKind.POSTERIZE) {layerkind = "Posterize adjustment layer";return layerkind; } /* Posterize adjustment layer */ 

else if(layer.kind == LayerKind.SELECTIVECOLOR) {layerkind = "Selective color adjustment layer.";return layerkind; } /* Selective color adjustment layer */ 

else if(layer.kind == LayerKind.SMARTOBJECT) {layerkind = "Smart object layer";return layerkind; } /* Smart object layer */ 

else if(layer.kind == LayerKind.THRESHOLD) {layerkind = "Threshold adjustment layer";return layerkind; } /* Threshold adjustment layer */ 

else if(layer.kind == LayerKind.VIBRANCE) {layerkind = "Vibrance layer";return layerkind; } /* Vibrance layer */ 

else if(layer.kind == LayerKind.VIDEO) {layerkind = "Video layer";return layerkind; } /* Video layer */ 
}
 
alert ("Current Layer is a " + determinelayerkind(layer));