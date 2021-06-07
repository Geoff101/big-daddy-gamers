// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000108080808080808080808080808080205090a0a0a0a0a09090909090909090705090a0a0b0a0a090a0a0a0a0b09090705090a0a0a0a0a090a0a0a0a0a09090705090a0a0a0a0a090a0a0a0a0a09090705090a0a0a0a0a090a0a0a0a0a09090705090909090909090a0a0a0a0a0909070509090909090909090909090909090705090b0a0a0a0a09090909090909090705090a0a0a0a0a0909090909090b090705090a0a0a0a0a0909090a0a0a0a0a0705090a0b0a0a0a0909090a0a0a0a0a0705090a0a0a0a0a090b090a0a0a0a0a07050909090909090909090a0a0a0a0a07050909090909090909090a0a0a0a0a0704060606060606060606060606060603`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
