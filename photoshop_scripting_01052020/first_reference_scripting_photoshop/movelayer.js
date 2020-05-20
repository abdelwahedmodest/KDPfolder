//******************************************
// MOVE LAYER TO
// Author: Max Kielland
//
// Moves layer fLayer to the absolute
// position fX,fY. The unit of fX and fY are
// the same as the ruler setting. 

function MoveLayerTo(fLayer,fX,fY) {

  var Position = fLayer.bounds;
  Position[0] = fX - Position[0];
  Position[1] = fY - Position[1];

  fLayer.translate(-Position[0],-Position[1]);
}