/////////////////////////////
  // 
  //  This code was written as an example code, modify it your needs !
  //  This code is explained in the tutorials over at [http://www.kirupa.com] look for the 'scripting' tutorials
  //  Written by mlk over at www.kirupaforum.com, post over there for help !
  //
  //  [mlkdesign@online.fr]
  //  july 2004
  //
/*
    You cannot position a layer directly in Photoshop (ie you cannot tell it to go to coordinates x,y) 
    even though you can tell it to move to a certain number of pixels right and left and up and down. 
    However, you can tell text layer to take a special position, the coordinates must be placed in an array.
    
    'var textPosition = [   0      ,     Math.round(Math.random()*880)+10   ]' 
    
    https://www.kirupa.com
    
    */
  var defaultRulerUnits = app.preferences.rulerUnits;
  app.preferences.rulerUnits = Units.PIXELS;
	
  
  bgGrey = new SolidColor();
  var lightness = 255 - Math.round(Math.random()*100);
	bgGrey.rgb.red = lightness;
	bgGrey.rgb.green = lightness;
	bgGrey.rgb.blue = lightness;
	
  backgroundColor = bgGrey;

  var newDocumentRef = app.documents.add(600, 900, 72.0, "Working With Text") ;
  newDocumentRef = null;

  var textArray = [
			"Silence prevailed as",
			"those mochi balls",
			"screamed in agony",
			"and unbearable disbelief",
			"at the big",
			"rusted sledgehammer that",
			"was named timothy.",
			"that came crashing",
			"from the frontyard",
			"on to the",
			"the pentagon building",
			"at warpspeed 28",
			"this collision created",
			"a hell of an earthshock",
			"it even shook",
			"my grandmother",
			"who hates to be shaken",
			"by her hairy",
			"son in law",
			"who, by the way",
			"doesnt like to shave",
			"Vanila contains 30%",
			"seeweed and 70%",
			"Pubic Elephant Hair.(pr)",
			"Some might even say",
			"that the average elephant consumes",
			"much more peanuts",
			"Than a monkey",
			"can comsume of",
			"cans of baked beans",
			"that are old",
			"-er than Bigfoot's",
			"hairy",
			", yet locally shaven",
			"in wierd places",
			"like his armpits",
			"and nose because",
			"he hides",
			"his grandma in a closet",
			"where the",
			"sheriff can't find",
			"her hairy arse.",
			"That arse being not so",
			"hairy, but very",
			"not smooth",
			". Meanwhile on the the international space station",
			"where aliens were eloping",
			"while looking down",
			"to their",
			"Marklar, Marklar Marklar",
 			",queen of chanting",
			"the enchantment codes",
			"A new kind of",
			"warrior monkey was",
			"arosen from the dead",
			"in a pet cemetary.",
			"Haunted with all kinds of",
			"ghoulies and boogers",
			"not to mention",
			"Aqua Teen Hunger Force",
			"with its unbeaten",
			"Ping-Pong record",
			"obtained by a flawless winning streak",
			"while eating tacos",
			". Those warrior monkeys were",
			"lookin to buy",
			"AK 47's and plasma-phaser-riotguns",
			"to wipe out",
			"the alien dune-bugs",
			"who had taken over"

		  ]

  var AD = app.activeDocument

  for(a=1;a<=textArray.length;a++){
  
	
		var TextLayer = AD.artLayers.add();
		TextLayer.kind = LayerKind.TEXT;
		TextLayer.opacity = Math.round(Math.random()*50)+50;
		//TextLayer.name = textArray[a-1];
		
		var txtRef = TextLayer.textItem;
		txtRef.font = "Impact";
		txtRef.contents = textArray[a-1];
		txtRef.size = Math.round(1/(Math.random()*0.2+0.02))+10;
		var textPosition = [0,Math.round(Math.random()*880)+10];
		txtRef.position = textPosition;
		TextLayer.rotate(-45)

  }

  	AD.flatten();
  	app.activeDocument.crop(new Array(25,25,600,800), 0, 600-25, 800-25, 72)

	//saving as jpg - check out other example scripts / reference to check out other file formats
  
	saveFile = new File("//scriptingTest.jpg");
	saveOptions = new JPEGSaveOptions();
	saveOptions.embedColorProfile = true;
	saveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
	saveOptions.matte = MatteType.NONE;
	saveOptions.quality = 9;                                                 //ranges from 1 to 12
	AD.saveAs(saveFile, saveOptions);
	AD.close(SaveOptions.DONOTSAVECHANGES)
	


	app.preferences.rulerUnits = defaultRulerUnits;
