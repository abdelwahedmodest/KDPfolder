
/*
for (var b=0 ;  b<9 ; b++){
    
var  a =  Math.floor(Math.random()*) ;
var astring = a.toString () ;
var bstring = b.toString () ;
alert(bstring + " " + " " +  astring)  ;
}
*/

function getRndInteger(min, max) {
  return  Math.floor(Math.random() * (max - min)) + min ;
 }

for (var b=0 ;  b<9 ; b++){
    
    var number = getRndInteger(255,245) ;
    alert(number) ;

}