//save original  ruler  units, then  assign  it  to  inches
startRulerUnits = app.preferences.rulerUnits ;
app.preferences.rulerUnits = Units.INCHES ;

//get a reference  to  the file ,  and  open  it  
var  fileRef = new  File(app.path + "C://user..//file.tif") ;
var docRef = app.open(fileRef) ;



//this  sample   script   assumes   the  ruler   units  have   been  set  to   inches
docRef.resizeImage(4, 4) ;
docRef.resizeCanvas(4, 4) ;
docRef.trim(TrimType.TOPLEFT,  true, false, true, false ) ;

// the  crop  command   uses  unit  values 
//so  change  the  ruler  units   to  pixels  
app.preferences.rulerUnits = Units.PIXELS  ;
docRef.crop(new Array(100,200,400,500), 45, 20,200) ;
docRef.flipCanvas(Direction.HORIZONTAL) ;

//restore  original   preferences
app.preferences.rulerUnits = startRulerUnits