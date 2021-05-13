function getAllSprites() {
    const allSprites: Sprite[] = [];

    for (const key of Object.keys(game.currentScene().spritesByKind)) {
        for (const sprite of game.currentScene().spritesByKind[parseInt(key)].sprites()) {
            allSprites.push(sprite);
        }
    }
    return allSprites;
}
scene.createRenderable(13, function(target: Image, camera: scene.Camera) {
    if(isHookshotActive){
        target.drawLine(thePlayer.x - 8, thePlayer.y - 8, targetSprite.x - 8, targetSprite.y - 8, 7)
    }
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function() {
    if(hasHookshot){
        if(isHookshotActive){
            isHookshotActive = false
            for(let sprite of getAllSprites()){
                sprite.setKind(sprite.data["prevKind"])
                sprite.setVelocity(sprite.data["prevVx"], sprite.data["prevVy"])
            }
            
            thePlayer.setVelocity(0, 0)
            if(tiles.tileIs(tiles.locationOfSprite(targetSprite), assets.image`myTile3`) || tiles.tileIs(tiles.locationOfSprite(targetSprite), assets.image`myTile25`)){
                controller.moveSprite(targetSprite, 0, 0)
                thePlayer.follow(targetSprite, 200, 200)
                setTimeout(function(){
                    targetSprite.destroy()
                    thePlayer.follow(null)
                    canMove = true
                    thePlayer.ay = GRAVITY
                    doAJump(thePlayer, 10)
                }, 250)
            }
            else{
                canMove = true
                thePlayer.ay = GRAVITY
                targetSprite.destroy()
            }
        }
        else {
            isHookshotActive = true
            canMove = false
            for(let sprite of getAllSprites()){
                sprite.data["prevKind"] = sprite.kind()
                sprite.data["prevVx"] = sprite.vx
                sprite.data["prevVy"] = sprite.vy
                sprite.setKind(SpriteKind.Food)
                sprite.setVelocity(0, 0)
            }
            targetSprite = sprites.create(img`
                . 7 7 7 .
                7 . . . 7
                7 . 7 . 7
                7 . . . 7
                . 7 7 7 .
            `, SpriteKind.ScreenCover)
            targetSprite.setPosition(thePlayer.x, thePlayer.y)
            controller.moveSprite(targetSprite, 75, 75)
            thePlayer.ay = 0
        }
    }
})

game.onUpdate(function(){
    if(isHookshotActive){
        targetSprite.x = Math.constrain(targetSprite.x, thePlayer.x - 24, thePlayer.x + 24)
        targetSprite.y = Math.constrain(targetSprite.y, thePlayer.y - 24, thePlayer.y + 24)
    }
})