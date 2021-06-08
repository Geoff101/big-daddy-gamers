// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000f0f101010101010110f110f0f100f0f0f01020202020201010101010101010f0f01020202020201020202030201010f0f01020202020202020202020208010f1001020308080808080202020208020f0f0202020e02020802020202020201110f010102080202020808020202020211110201020208010302010102020808111102020202020201020108080801020f1001030202020201010108020102010f1002080802020202080802030208080f1002080808020202020202020202080f0f0409050202080e020202080202020f0f0a0d0c0102020202010208020202110f060b070101030202020202020203110f0f100f1111110f100f0f11100f0f11`, img`
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
`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles0,sprites.builtin.forestTiles5,sprites.builtin.forestTiles7,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.castle.tileGrass2,sprites.builtin.forestTiles6,sprites.builtin.forestTiles9,sprites.builtin.forestTiles14,sprites.builtin.forestTiles11,sprites.builtin.forestTiles10,sprites.castle.rock1,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1], TileScale.Sixteen);
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
