namespace SpriteKind {
    export const Spike = SpriteKind.create()
    export const Text = SpriteKind.create()
    export const Crumbler = SpriteKind.create()
    export const Gem = SpriteKind.create()
    export const ScreenCover = SpriteKind.create()
    export const Boulder = SpriteKind.create()
    export const Ghost = SpriteKind.create()
    export const Heart = SpriteKind.create()
}
// To-do:
// 
// - Fix room skips
// 
// - Add recovery hearts
// 
// - Add detail to maps
function initTimer () {
    isTimerOn = true
}
function doAJump (sprite: Sprite, height: number) {
    sprite.vy = 0 - Math.sqrt(2 * (height * GRAVITY))
}
function loadMap () {
    for (let sprite of sprites.allOfKind(SpriteKind.Crumbler)) {
        sprite.setKind(SpriteKind._TileSprite)
    }
    tiles.destroySpritesOfKind(SpriteKind._TileSprite)
    tiles.destroySpritesOfKind(SpriteKind.Projectile)
    tiles.destroySpritesOfKind(SpriteKind.Gem)
    tiles.destroySpritesOfKind(SpriteKind.Boulder)
    tiles.destroySpritesOfKind(SpriteKind.Ghost)
    if (currentLocationRow == 0) {
        if (currentLocationCol == 0) {
        	
        } else if (currentLocationCol == 1) {
        	
        } else if (currentLocationCol == 2) {
        	
        } else if (currentLocationCol == 3) {
            tiles.setSmallTilemap(tilemap`level111`)
        } else if (currentLocationCol == 4) {
            tiles.setSmallTilemap(tilemap`level18`)
        } else if (currentLocationCol == 5) {
            tiles.setSmallTilemap(tilemap`level5`)
        } else if (currentLocationCol == 6) {
            tiles.setSmallTilemap(tilemap`level6`)
        } else if (currentLocationCol == 7) {
            tiles.setSmallTilemap(tilemap`level13`)
        } else {
            tiles.setSmallTilemap(tilemap`level53`)
        }
    } else if (currentLocationRow == 1) {
        if (currentLocationCol == 0) {
        	
        } else if (currentLocationCol == 1) {
            tiles.setSmallTilemap(tilemap`level31`)
        } else if (currentLocationCol == 2) {
            tiles.setSmallTilemap(tilemap`level30`)
        } else if (currentLocationCol == 3) {
            tiles.setSmallTilemap(tilemap`level29`)
        } else if (currentLocationCol == 4) {
            tiles.setSmallTilemap(tilemap`level17`)
        } else if (currentLocationCol == 5) {
            tiles.setSmallTilemap(tilemap`level15`)
        } else if (currentLocationCol == 6) {
            tiles.setSmallTilemap(tilemap`level11`)
        } else if (currentLocationCol == 7) {
            tiles.setSmallTilemap(tilemap`level24`)
        } else {
            tiles.setSmallTilemap(tilemap`level25`)
        }
    } else if (currentLocationRow == 2) {
        if (currentLocationCol == 0) {
        	
        } else if (currentLocationCol == 1) {
            tiles.setSmallTilemap(tilemap`level32`)
        } else if (currentLocationCol == 2) {
            tiles.setSmallTilemap(tilemap`level39`)
        } else if (currentLocationCol == 3) {
            tiles.setSmallTilemap(tilemap`level28`)
        } else if (currentLocationCol == 4) {
            tiles.setSmallTilemap(tilemap`level27`)
        } else if (currentLocationCol == 5) {
            tiles.setSmallTilemap(tilemap`level19`)
        } else if (currentLocationCol == 6) {
            tiles.setSmallTilemap(tilemap`level76`)
        } else if (currentLocationCol == 7) {
            tiles.setSmallTilemap(tilemap`level75`)
        } else {
            tiles.setSmallTilemap(tilemap`level26`)
        }
    } else if (currentLocationRow == 3) {
        if (currentLocationCol == 0) {
        	
        } else if (currentLocationCol == 1) {
            tiles.setSmallTilemap(tilemap`level141`)
        } else if (currentLocationCol == 2) {
            tiles.setSmallTilemap(tilemap`level40`)
        } else if (currentLocationCol == 3) {
            tiles.setSmallTilemap(tilemap`level38`)
        } else if (currentLocationCol == 4) {
            tiles.setSmallTilemap(tilemap`level107`)
        } else if (currentLocationCol == 5) {
            tiles.setSmallTilemap(tilemap`level106`)
        } else if (currentLocationCol == 6) {
            tiles.setSmallTilemap(tilemap`level82`)
        } else if (currentLocationCol == 7) {
            tiles.setSmallTilemap(tilemap`level77`)
        } else {
        	
        }
    } else if (currentLocationRow == 4) {
        if (currentLocationCol == 0) {
        	
        } else if (currentLocationCol == 1) {
        	
        } else if (currentLocationCol == 2) {
            tiles.setSmallTilemap(tilemap`level140`)
        } else if (currentLocationCol == 3) {
            tiles.setSmallTilemap(tilemap`level112`)
        } else if (currentLocationCol == 4) {
            tiles.setSmallTilemap(tilemap`level110`)
        } else if (currentLocationCol == 5) {
            tiles.setSmallTilemap(tilemap`level109`)
        } else if (currentLocationCol == 6) {
            tiles.setSmallTilemap(tilemap`level108`)
        } else if (currentLocationCol == 7) {
            tiles.setSmallTilemap(tilemap`level81`)
        } else {
        	
        }
    }
    scene.centerCameraAt(88, 68)
    if (enteringFrom == CollisionDirection.Right) {
        thePlayer.x = 152
    } else if (enteringFrom == CollisionDirection.Bottom) {
        thePlayer.y = 118
        doAJump(thePlayer, jumpHeight)
    } else if (enteringFrom == CollisionDirection.Left) {
        thePlayer.x = 24
    } else if (enteringFrom == CollisionDirection.Top) {
        thePlayer.y = 24
    }
    tiles.coverAllTiles(assets.tile`myTile10`, assets.tile`myTile`)
    tiles.coverAllTiles(assets.tile`myTile7`, assets.tile`myTile6`)
    tiles.coverAllTiles(assets.tile`myTile12`, assets.tile`myTile`)
    for (let value of tiles.getTilesByType(assets.tile`myTile13`)) {
        gem = sprites.create(img`
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
            `, SpriteKind.Gem)
        tiles.placeOnTile(gem, value)
        animation.runImageAnimation(
        gem,
        [img`
            . . . . . . . . . 
            . . . . e . . . . 
            . . . e 3 3 . . . 
            . . e 3 3 3 3 . . 
            . . 3 3 3 2 2 . . 
            . . 3 2 2 3 3 . . 
            . . . 3 3 3 . . . 
            . . . . 2 . . . . 
            . . . . . . . . . 
            `,img`
            . . . . . . . . . 
            . . . . . . . . . 
            . . . . e . . . . 
            . . . . e . . . . 
            . . . e 3 3 . . . 
            . . . 3 3 2 . . . 
            . . . 3 2 3 . . . 
            . . . . 3 . . . . 
            . . . . 2 . . . . 
            `,img`
            . . . . . . . . . 
            . . . . . . . . . 
            . . . . e . . . . 
            . . . . e . . . . 
            . . . . e . . . . 
            . . . . 3 . . . . 
            . . . . 3 . . . . 
            . . . . 3 . . . . 
            . . . . 2 . . . . 
            `,img`
            . . . . . . . . . 
            . . . . . . . . . 
            . . . . e . . . . 
            . . . . e . . . . 
            . . . e 3 3 . . . 
            . . . 3 3 2 . . . 
            . . . 3 2 3 . . . 
            . . . . 3 . . . . 
            . . . . 2 . . . . 
            `,img`
            . . . . . . . . . 
            . . . . . . . . . 
            . . . . e . . . . 
            . . . e 3 3 . . . 
            . . e 3 3 3 3 . . 
            . . 3 3 3 2 2 . . 
            . . 3 2 2 3 3 . . 
            . . . 3 3 3 . . . 
            . . . . 2 . . . . 
            `,img`
            . . . . . . . . . 
            . . . . e . . . . 
            . . . . e . . . . 
            . . . e 3 3 . . . 
            . . . 3 3 2 . . . 
            . . . 3 2 3 . . . 
            . . . . 3 . . . . 
            . . . . 2 . . . . 
            . . . . . . . . . 
            `,img`
            . . . . . . . . . 
            . . . . e . . . . 
            . . . . e . . . . 
            . . . . e . . . . 
            . . . . 3 . . . . 
            . . . . 3 . . . . 
            . . . . 3 . . . . 
            . . . . 2 . . . . 
            . . . . . . . . . 
            `,img`
            . . . . . . . . . 
            . . . . e . . . . 
            . . . . e . . . . 
            . . . e 3 3 . . . 
            . . . 3 3 2 . . . 
            . . . 3 2 3 . . . 
            . . . . 3 . . . . 
            . . . . 2 . . . . 
            . . . . . . . . . 
            `,img`
            . . . . . . . . . 
            . . . . e . . . . 
            . . . e 3 3 . . . 
            . . e 3 3 3 3 . . 
            . . 3 3 3 2 2 . . 
            . . 3 2 2 3 3 . . 
            . . . 3 3 3 . . . 
            . . . . 2 . . . . 
            . . . . . . . . . 
            `,img`
            . . . . e . . . . 
            . . . . e . . . . 
            . . . e 3 3 . . . 
            . . . 3 3 2 . . . 
            . . . 3 2 3 . . . 
            . . . . 3 . . . . 
            . . . . 2 . . . . 
            . . . . . . . . . 
            . . . . . . . . . 
            `,img`
            . . . . e . . . . 
            . . . . e . . . . 
            . . . . e . . . . 
            . . . . 3 . . . . 
            . . . . 3 . . . . 
            . . . . 3 . . . . 
            . . . . 2 . . . . 
            . . . . . . . . . 
            . . . . . . . . . 
            `,img`
            . . . . e . . . . 
            . . . . e . . . . 
            . . . e 3 3 . . . 
            . . . 3 3 2 . . . 
            . . . 3 2 3 . . . 
            . . . . 3 . . . . 
            . . . . 2 . . . . 
            . . . . . . . . . 
            . . . . . . . . . 
            `],
        100,
        true
        )
        gem.x += 3
        tiles.setTileAt(value, assets.tile`myTile`)
    }
    foundString = "" + currentLocationCol + "," + currentLocationRow
    for (let value2 of gemsFound) {
        if (value2 == foundString) {
            tiles.destroySpritesOfKind(SpriteKind.Gem)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile34`)) {
        heart = sprites.create(assets.image`heart_full`, SpriteKind.Heart)
        animation.runMovementAnimation(
        heart,
        "l 0 -8, l 0 8",
        2000,
        true
        )
        tiles.placeOnTile(heart, value)
        tiles.setTileAt(value, assets.tile`myTile`)
    }
    foundString = "" + currentLocationCol + "," + currentLocationRow
    for (let value2 of heartsFound) {
        if (value2 == foundString) {
            tiles.destroySpritesOfKind(SpriteKind.Heart)
        }
    }
    if (bouldersFallen) {
        tiles.coverAllTiles(assets.tile`myTile12`, assets.tile`myTile17`)
        for (let value3 of tiles.getTilesByType(assets.tile`myTile12`)) {
            tiles.setWallAt(value3, true)
        }
    }
    if (hasHookshot) {
        tiles.replaceAllTiles(assets.tile`myTile21`, assets.tile`myTile`)
    }
    if (collapseCracks) {
        for (let value32 of tiles.getTilesByType(assets.tile`myTile19`)) {
            tiles.setTileAt(value32, assets.tile`myTile`)
            tiles.setWallAt(value32, false)
        }
    }
    thePlayer.setKind(SpriteKind.Player)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ghost, function (sprite, otherSprite) {
    takeDamage()
})
sprites.onDestroyed(SpriteKind.Crumbler, function (sprite) {
    tiles.setWallAt(tiles.locationOfSprite(sprite), false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gem, function (sprite, otherSprite) {
    otherSprite.setKind(SpriteKind.Food)
    timerRunning = false
    character.setCharacterAnimationsEnabled(thePlayer, false)
    thePlayer.setImage(assets.image`player_item_get`)
    canMove = false
    animation.stopAnimation(animation.AnimationTypes.All, otherSprite)
    otherSprite.bottom = thePlayer.top
    otherSprite.x = thePlayer.x
    gemsFound.push("" + currentLocationCol + "," + currentLocationRow)
    music.playMelody("D E F G - - - - ", 120)
    pause(1000)
    otherSprite.destroy()
    character.setCharacterAnimationsEnabled(thePlayer, true)
    thePlayer.setImage(assets.image`player_right`)
    timerRunning = true
    canMove = true
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
    boulder = sprites.create(img`
        . . b b d d . . 
        . b d d d d d . 
        b d b d d d d d 
        d b d d d d d d 
        d d d d d d d d 
        d d d b d d d d 
        . d d d d b d . 
        . . d d d d . . 
        `, SpriteKind.Boulder)
    tiles.placeOnTile(boulder, tiles.getTileLocation(2, 5))
    tiles.setTileAt(tiles.getTileLocation(2, 5), assets.tile`myTile`)
    boulder.vx = 72
    boulder.ay = GRAVITY
    animation.runImageAnimation(
    boulder,
    [img`
        . . b b d d . . 
        . b d d d d d . 
        b d b d d d d d 
        d b d d d d d d 
        d d d d d d d d 
        d d d b d d d d 
        . d d d d b d . 
        . . d d d d . . 
        `,img`
        . . d d d b . . 
        . d d d b d b . 
        d d d d d b d b 
        d d b d d d d b 
        d d d d d d d d 
        d b d d d d d d 
        . d d d d d d . 
        . . d d d d . . 
        `,img`
        . . d d d d . . 
        . d b d d d d . 
        d d d d b d d d 
        d d d d d d d d 
        d d d d d d b d 
        d d d d d b d b 
        . d d d d d b . 
        . . d d b b . . 
        `,img`
        . . d d d d . . 
        . d d d d d d . 
        d d d d d d b d 
        d d d d d d d d 
        b d d d d b d d 
        b d b d d d d d 
        . b d b d d d . 
        . . b d d d . . 
        `],
    100,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (canMove) {
        if (thePlayer.isHittingTile(CollisionDirection.Bottom)) {
            music.thump.play()
            doAJump(thePlayer, jumpHeight)
        }
    }
})
scene.onHitWall(SpriteKind.Boulder, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = 77
    } else if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = -77
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    takeDamage()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boulder, function (sprite, otherSprite) {
    gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Heart, function (sprite, otherSprite) {
    heartsFound.push("" + currentLocationCol + "," + currentLocationRow)
    if (life < 7) {
        life += 1
    }
    otherSprite.destroy()
})
sprites.onDestroyed(SpriteKind.Spike, function (sprite) {
    tiles.setTileAt(tiles.locationOfSprite(sprite), assets.tile`myTile9`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile20`)
    fallingBlock = sprites.create(assets.image`spike_falling`, SpriteKind.Projectile)
    fallingBlock.y = thePlayer.y + 8
    if (thePlayer.vx < 0) {
        fallingBlock.x = thePlayer.x - 15
    } else {
        fallingBlock.x = thePlayer.x + 15
    }
    fallingBlock.setFlag(SpriteFlag.GhostThroughWalls, true)
    fallingBlock.vy = -100
    fallingBlock.lifespan = 500
})
function takeDamage () {
    doAJump(thePlayer, 20)
    music.knock.play()
    life += -1
    thePlayer.setKind(SpriteKind.Food)
    setTimeout(function(){
        thePlayer.setKind(SpriteKind.Player)
    }, 300)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
    hasHookshot = true
    timerRunning = false
    character.setCharacterAnimationsEnabled(thePlayer, false)
    thePlayer.setImage(assets.image`player_item_get`)
    canMove = false
    hookshot = sprites.create(img`
        . . . b . . . . 
        . . b b b . . . 
        . . 6 7 6 . . . 
        . . 7 4 7 . . . 
        . . 6 7 6 . . . 
        . . 6 6 6 . . . 
        . . 7 . 7 . . . 
        . . 7 7 7 . . . 
        `, SpriteKind.Food)
    hookshot.bottom = thePlayer.top
    story.startCutscene(function () {
        story.printDialog("YOU FOUND THE HOOKSHOT!", 80, 20, 40, 120, 15, 10)
        story.printDialog("PRESS 'B' TO AIM, THEN PRESS 'B' AGAIN TO PULL YOURSELF TO A TARGET.", 80, 20, 40, 120, 15, 10)
        story.printDialog("IT WILL ONLY WORK IN SOME PLACES, THOUGH.", 80, 20, 40, 120, 15, 10)
        hookshot.destroy()
        character.setCharacterAnimationsEnabled(thePlayer, true)
        thePlayer.setImage(assets.image`player_right`)
        timerRunning = true
        canMove = true
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    takeDamage()
})
function gameOver (won: boolean) {
    canMove = false
    timerRunning = false
    if (won) {
        totalSeconds = 240 - (minutesLeft * 60 + secondsLeft)
        story.startCutscene(function () {
            story.printDialog("You escaped with 1 ancient idol and " + gemsFound.length + " gems!", 80, 20, 40, 120, 15, 10)
            story.printDialog("You took " + totalSeconds + " seconds total!", 80, 20, 40, 120, 15, 10)
            if (!(blockSettings.exists("highGemScore"))) {
                blockSettings.writeNumber("highGemScore", gemsFound.length)
            }
            if (gemsFound.length > blockSettings.readNumber("highGemScore")) {
                blockSettings.writeNumber("highGemScore", gemsFound.length)
                story.printDialog("New high score!", 80, 20, 40, 120, 15, 10)
            } else {
                story.printDialog("High score: " + blockSettings.readNumber("highGemScore") + " gems.", 80, 20, 40, 120, 15, 10)
            }
            if (!(blockSettings.exists("bestTime"))) {
                blockSettings.writeNumber("bestTime", totalSeconds)
            }
            if (totalSeconds < blockSettings.readNumber("bestTime")) {
                blockSettings.writeNumber("bestTime", totalSeconds)
                story.printDialog("New best time!", 80, 20, 40, 120, 15, 10)
            } else {
                story.printDialog("Best time: " + blockSettings.readNumber("bestTime") + " total seconds.", 80, 20, 40, 120, 15, 10)
            }
            music.powerUp.playUntilDone()
            game.reset()
        })
    } else {
        story.startCutscene(function () {
            story.printDialog("You got trapped in the collapsing temple :(", 80, 20, 40, 120, 15, 10)
            music.wawawawaa.playUntilDone()
            game.reset()
        })
    }
}
function makeSkellabones (col: number, row: number) {
    music.sonar.play()
    for (let index = 0; index < randint(2, 4); index++) {
        skull = sprites.create(img`
            . a 8 8 . 
            a 9 8 9 8 
            8 8 8 8 a 
            . a 8 a . 
            . 8 . a . 
            `, SpriteKind.Ghost)
        skull.setBounceOnWall(true)
        skull.setVelocity(randint(-100, 100), randint(-100, 100))
        tiles.placeOnTile(skull, tiles.getTileLocation(col, row))
        skull.lifespan = 3000
        doAJump(thePlayer, jumpHeight)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
    tileSprite = sprites.create(assets.image`myTile2`, SpriteKind.Spike)
    tiles.placeOnTile(tileSprite, location)
    animation.runImageAnimation(
    tileSprite,
    [img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . b . . . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . b . . . . 
        . . . b . . . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . b . . . . 
        . . . b . . . . 
        . . b c b . . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . b . . . . 
        . . . b . . . . 
        . . b c b . . . 
        . . c b c . . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . b . . . . 
        . . . b . . . . 
        . . b c b . . . 
        . . c b c . . . 
        . c b c b c . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . b . . . . 
        . . . b . . . . 
        . . b c b . . . 
        . . c b c . . . 
        . c b c b c . . 
        . b c b c b . . 
        `,img`
        . . . . . . . . 
        . . . b . . . . 
        . . . b . . . . 
        . . b c b . . . 
        . . c b c . . . 
        . c b c b c . . 
        . b c b c b . . 
        b c b c b c b . 
        `,img`
        . . . b . . . . 
        . . . b . . . . 
        . . b c b . . . 
        . . c b c . . . 
        . c b c b c . . 
        . b c b c b . . 
        b c b c b c b . 
        c b c b c b c . 
        `],
    50,
    false
    )
    tileSprite.lifespan = 450
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    loadMap()
    initTimer()
})
// img`
// 9999999999999999999999999999999999999999999999999999999999999999998888889999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// ................................................................................................................................................................
// `
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    tiles.replaceAllTiles(assets.tile`myTile10`, assets.tile`myTile`)
    sprite.setKind(SpriteKind.Food)
    if (tiles.tileIs(tiles.locationInDirection(location, CollisionDirection.Left), assets.tile`myTile11`)) {
        currentLocationCol += -1
        enteringFrom = CollisionDirection.Right
    } else if (tiles.tileIs(tiles.locationInDirection(location, CollisionDirection.Top), assets.tile`myTile11`)) {
        currentLocationRow += -1
        enteringFrom = CollisionDirection.Bottom
    } else if (tiles.tileIs(tiles.locationInDirection(location, CollisionDirection.Right), assets.tile`myTile11`)) {
        currentLocationCol += 1
        enteringFrom = CollisionDirection.Left
    } else if (tiles.tileIs(tiles.locationInDirection(location, CollisionDirection.Bottom), assets.tile`myTile11`)) {
        currentLocationRow += 1
        enteringFrom = CollisionDirection.Top
    }
    loadMap()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    takeDamage()
    sprite.vy = 0
})
function distanceBetween (sprite: Sprite, otherSprite: Sprite) {
    return Math.sqrt((sprite.x - otherSprite.x) ** 2 + (sprite.x - otherSprite.x) ** 2)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
    gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile32`)
    makeSkellabones(tiles.locationXY(location, tiles.XY.column), tiles.locationXY(location, tiles.XY.row))
})
let arrow2: Sprite = null
let arrow: Sprite = null
let newCover: Sprite = null
let bottomTile: tiles.Location = null
let tileSprite: Sprite = null
let skull: Sprite = null
let hookshot: Sprite = null
let fallingBlock: Sprite = null
let boulder: Sprite = null
let hasHookshot = false
let heart: Sprite = null
let gemsFound: string[] = []
let foundString = ""
let gem: Sprite = null
let currentLocationRow = 0
let currentLocationCol = 0
let heartsFound: string[] = []
let canMove = false
let timerRunning = false
let GRAVITY = 0
let jumpHeight = 0
let life = 0
let collapseCracks = false
let bouldersFallen = false
let isTimerOn = false
let thePlayer: Sprite = null
let str:string = null
let timerColor:color = null
let enteringFrom: CollisionDirection = null
let secondsLeft = 0
let minutesLeft = 0
let totalSeconds:number
function addTimerEvent(seconds:number, event:() => void){
    control.onEvent(TIMER_EVENT_ID, seconds, event)
}
let cover = sprites.create(assets.image`starting_screen`, SpriteKind.ScreenCover)
controller.pauseUntilAnyButtonIsPressed()
cover.destroy()
let TIMER_EVENT_ID = 1008
life = 7
jumpHeight = 25
GRAVITY = 400
timerRunning = true
canMove = true
collapseCracks = false
minutesLeft = 4
heartsFound = []
thePlayer = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(thePlayer, 75, 0)
thePlayer.ay = GRAVITY
currentLocationCol = 5
currentLocationRow = 0
character.loopFrames(
thePlayer,
assets.animation`player_right_anim`,
500,
character.rule(Predicate.FacingRight)
)
character.loopFrames(
thePlayer,
assets.animation`player_left_anim`,
500,
character.rule(Predicate.FacingLeft)
)
addTimerEvent(180, function(){
    bouldersFallen = true
})
addTimerEvent(120, function(){
    collapseCracks = true
})
tiles.setSmallTilemap(tilemap`level2`)
tiles.placeOnTile(thePlayer, tiles.getTileLocation(4, 13))
let passableTiles = [assets.tile`myTile1`, assets.tile`myTile2`, assets.tile`myTile3`]
scene.createRenderable(5, function(target: Image, camera: scene.Camera) {
    for (let index2 = 0; index2 <= 6; index2++) {
        if (index2 > life - 1) {
            target.drawTransparentImage(assets.image`heart_empty`, 2 + index2 * 8, 3)
        }
        else {
            target.drawTransparentImage(assets.image`heart_full`, 2 + index2 * 8, 3)
        }
    }

    if(isTimerOn){
        str = ":"
        if(secondsLeft < 10){
            str = ":0"
        }
        timerColor = 15
        if(secondsLeft % 2 == 1 && minutesLeft == 0 && secondsLeft < 30){
            timerColor = 7
        }
        target.print(minutesLeft + str + secondsLeft, 4, 11, timerColor, image.font8)
    }
})
game.onUpdate(function () {
    bottomTile = tiles.locationInDirection(tiles.locationOfSprite(thePlayer), CollisionDirection.Bottom)
    if (tiles.tileIs(bottomTile, assets.tile`myTile7`)) {
        newCover = sprites.create(assets.image`myTile`, SpriteKind._TileSprite)
        tiles.placeOnTile(newCover, bottomTile)
        newCover.z = -1
        tileSprite = sprites.create(assets.tile`myTile6`, SpriteKind.Crumbler)
        animation.runImageAnimation(
        tileSprite,
        [img`
            7 7 7 7 7 7 7 9 . . 
            9 7 7 7 7 7 9 7 . . 
            7 9 7 7 7 9 7 7 . . 
            9 7 9 7 9 7 7 7 . . 
            7 9 7 9 7 7 7 7 . . 
            9 7 9 9 9 7 7 7 . . 
            7 9 9 9 9 9 7 7 . . 
            9 9 9 9 9 9 9 7 . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `,img`
            . . . . . . . . . . 
            . 7 7 7 7 7 7 7 9 . 
            . 9 7 7 7 7 7 9 7 . 
            . 7 9 7 7 7 9 7 7 . 
            . 9 7 9 7 9 7 7 7 . 
            . 7 9 7 9 7 7 7 7 . 
            . 9 7 9 9 9 7 7 7 . 
            . 7 9 9 9 9 9 7 7 . 
            . 9 9 9 9 9 9 9 7 . 
            . . . . . . . . . . 
            `,img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . 7 7 7 7 7 7 7 9 
            . . 9 7 7 7 7 7 9 7 
            . . 7 9 7 7 7 9 7 7 
            . . 9 7 9 7 9 7 7 7 
            . . 7 9 7 9 7 7 7 7 
            . . 9 7 9 9 9 7 7 7 
            . . 7 9 9 9 9 9 7 7 
            . . 9 9 9 9 9 9 9 7 
            `,img`
            . . . . . . . . . . 
            7 7 7 7 7 7 7 9 . . 
            9 7 7 7 7 7 9 7 . . 
            7 9 7 7 7 9 7 7 . . 
            9 7 9 7 9 7 7 7 . . 
            7 9 7 9 7 7 7 7 . . 
            9 7 9 9 9 7 7 7 . . 
            7 9 9 9 9 9 7 7 . . 
            9 9 9 9 9 9 9 7 . . 
            . . . . . . . . . . 
            `,img`
            . 7 7 7 7 7 7 7 9 . 
            . 9 7 7 7 7 7 9 7 . 
            . 7 9 7 7 7 9 7 7 . 
            . 9 7 9 7 9 7 7 7 . 
            . 7 9 7 9 7 7 7 7 . 
            . 9 7 9 9 9 7 7 7 . 
            . 7 9 9 9 9 9 7 7 . 
            . 9 9 9 9 9 9 9 7 . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `],
        100,
        true
        )
        tileSprite.lifespan = 1000
        tiles.placeOnTile(tileSprite, bottomTile)
        tiles.setTileAt(bottomTile, assets.tile`myTile`)
    }
    if (tiles.tileIs(bottomTile, assets.tile`myTile28`)) {
        tiles.setTileAt(bottomTile, assets.tile`myTile6`)
        makeSkellabones(tiles.locationXY(bottomTile, tiles.XY.column), tiles.locationXY(bottomTile, tiles.XY.row))
    }
    if (tiles.tileIs(bottomTile, assets.tile`myTile29`)) {
        doAJump(thePlayer, 48)
    }
})
game.onUpdate(function () {
    for (let value22 of passableTiles) {
        for (let loc of tiles.getTilesByType(value22)) {
            if (thePlayer.tileKindAt(TileDirection.Bottom, value22) && !(controller.down.isPressed()) || !(canMove)) {
                tiles.setWallAt(loc, true)
            } else if (controller.down.isPressed()) {
                tiles.setWallAt(loc, false)
            } else {
                tiles.setWallAt(loc, false)
            }
        }
    }
})
game.onUpdate(function () {
    if (life <= 0) {
        gameOver(false)
    }
})
game.onUpdate(function () {
    if (canMove) {
        if (thePlayer.tileKindAt(TileDirection.Center, assets.tile`myTile2`) || thePlayer.tileKindAt(TileDirection.Center, assets.tile`myTile0`)) {
            controller.moveSprite(thePlayer, 75, 75)
        } else {
            controller.moveSprite(thePlayer, 75, 0)
        }
    } else {
        controller.moveSprite(thePlayer, 0, 0)
    }
})
game.onUpdateInterval(2000, function () {
    if (sprites.allOfKind(SpriteKind.Ghost).length > 0) {
        music.sonar.play()
    }
})
game.onUpdateInterval(1000, function () {
    if (timerRunning && isTimerOn) {
        secondsLeft += -1
        if (minutesLeft == 0 && (secondsLeft < 30 && secondsLeft % 2 == 1)) {
            music.playTone(349, music.beat(BeatFraction.Eighth))
        } else if (minutesLeft == 0 && (secondsLeft < 30 && secondsLeft % 2 == 0)) {
            music.playTone(294, music.beat(BeatFraction.Eighth))
        }
        if (secondsLeft < 0) {
            minutesLeft += -1
            secondsLeft = 59
            music.playTone(440, music.beat(BeatFraction.Eighth))
            if (minutesLeft < 0) {
                gameOver(false)
            }
        }
        control.raiseEvent(TIMER_EVENT_ID, secondsLeft + (minutesLeft * 60))
    }
})
game.onUpdateInterval(1500, function () {
    let isHookshotActive = 0
    if (!(isHookshotActive)) {
        for (let value322 of tiles.getTilesByType(assets.tile`myTile14`)) {
            arrow = sprites.create(assets.image`arrow_right`, SpriteKind.Projectile)
            tiles.placeOnTile(arrow, value322)
            arrow.vx = -100
            arrow.setFlag(SpriteFlag.DestroyOnWall, true)
        }
        for (let value42 of tiles.getTilesByType(assets.tile`myTile15`)) {
            arrow2 = sprites.create(assets.image`arrow_left`, SpriteKind.Projectile)
            tiles.placeOnTile(arrow2, value42)
            arrow2.vx = 100
            arrow2.setFlag(SpriteFlag.DestroyOnWall, true)
        }
    }
})