// scene.createRenderable(0, function(target: Image, camera: scene.Camera) {
//     if(isHookshotActive && closestTarget){
//             target.drawLine(thePlayer.x, thePlayer.y, tiles.locationXY(closestTarget, tiles.XY.x), tiles.locationXY(closestTarget, tiles.XY.y), 12)
//         }
//         controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
//     if (hasHookshot) {
//         isHookshotActive = true
//         for (let value4 of tiles.getTilesByType(assets.tile`myTile26`)) { 
//             targetSprite = sprites.create(img`
//                 . . . . . . . .
//                 . . . . . . . .
//                 . . . . . . . .
//                 . . . . . . . .
//                 . . . . . . . .
//                 . . . . . . . .
//                 . . . . . . . .
//                 . . . . . . . .
//             `, SpriteKind.Target)
//             distances.push(distanceBetween(targetSprite, thePlayer))
//             targetList.push(targetSprite)
//             tiles.placeOnTile(targetSprite, value4)
//         }
//         for (let value5 of tiles.getTilesByType(assets.tile`myTile25`)) {
//         	targetSprite = sprites.create(img`
//                 . . . . . . . .
//                 . . . . . . . .
//                 . . . . . . . .
//                 . . . . . . . .
//                 . . . . . . . .
//                 . . . . . . . .
//                 . . . . . . . .
//                 . . . . . . . .
//             `, SpriteKind.Target)
//             distances.push(distanceBetween(targetSprite, thePlayer))
//             targetList.push(targetSprite)
//             tiles.placeOnTile(targetSprite, value5)        
//         }
//         for(let value of distances){
//             if(shortestDistance == null){
//                 shortestDistance = value
//             }
//             if(value < shortestDistance){
//                 shortestDistance = value
//             }
//             closestTarget = tiles.locationOfSprite(targetList[distances.indexOf(shortestDistance)])
//         }
//     }
// })
//})