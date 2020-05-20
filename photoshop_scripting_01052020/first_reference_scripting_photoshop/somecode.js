
  /////////////////////////////
  // 
  //  This code was written as an example code, modify it your needs !
  //  This code is explained in the tutorials over at [http://www.kirupa.com] look for the 'scripting' tutorials
  //  Written by mlk over at www.kirupaforum.com, post over there for help !
  //
  //  [mlkdesign@online.fr]
  //  july 2004
  //



  var defaultRulerUnits = app.preferences.rulerUnits;
  app.preferences.rulerUnits = Units.PIXELS;

	
  
  var newDocumentRef = app.documents.add(200, 200, 72.0, "bigref");
  var hugeOne = newDocumentRef;


  for(a=1; a<=15; a++){

		var bgColor = new SolidColor;
		bgColor.rgb.red = Math.round(Math.random()*255);
		bgColor.rgb.green = Math.round(Math.random()*255);
		bgColor.rgb.blue = Math.round(Math.random()*255);

		backgroundColor = bgColor

	var newDocumentRef = app.documents.add(200, 200, 72.0, "My New Doc N#");
	newDocumentRef = null;

  }


  for(a=1; a<=15; a++){
	
	app.activeDocument=app.documents[app.documents.length-1];
	var curDoc = app.activeDocument;
	var newLayer = curDoc.artLayers.add();
	newLayer.name = "Square Layer";

	var randomColor = new SolidColor;
		randomColor.rgb.red = Math.round(Math.random()*255);
		randomColor.rgb.green = Math.round(Math.random()*255);
		randomColor.rgb.blue = Math.round(Math.random()*255);



	var selectionBounds = [[75,75],[125,75],[125,125],[75,125]];
	curDoc.selection.select(selectionBounds, SelectionType.REPLACE, 0, false);

	curDoc.selection.fill(randomColor);
	curDoc.selection.deselect();

	randomColor = null;

	for(b=0;b<=4;b++){
		
		curDoc.layers[0].duplicate()

	}

	for(b=0;b<=5;b++){
		
		curDoc.layers[b].rotate((b+5)*8)
		curDoc.layers[b].opacity = 100-b*15

	}
	
	
	curDoc.activeLayer = curDoc.layers[curDoc.layers.length-1];
	//curDoc.activeLayer.remove();

	curDoc.flatten();
	//curDoc.mergeVisibleLayers();

	curDoc.selection.selectAll();
	curDoc.selection.copy();

	app.activeDocument = hugeOne;
	app.activeDocument.paste();
	
	curDoc.close(SaveOptions.DONOTSAVECHANGES);

  }

 app.activeDocument.resizeCanvas(3*200,5*200,AnchorPosition.TOPLEFT)

  var layerNumber = -1
  for(a=0;a<=23;a++){
 	for(b=0;b<=4;b++){
		layerNumber+=1
		app.activeDocument.layers[layerNumber].translate(a*200,b*200);

	}
}

  app.preferences.rulerUnits = defaultRulerUnits;