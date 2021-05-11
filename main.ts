namespace SpriteKind {
    export const Spike = SpriteKind.create()
    export const Text = SpriteKind.create()
    export const Crumbler = SpriteKind.create()
    export const Gem = SpriteKind.create()
    export const ScreenCover = SpriteKind.create()
    export const Boulder = SpriteKind.create()
}
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
    if (currentLocationRow == 0) {
        if (currentLocationCol == 0) {
        	
        } else if (currentLocationCol == 1) {
        	
        } else if (currentLocationCol == 2) {
        	
        } else if (currentLocationCol == 3) {
        	
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
        	
        } else if (currentLocationCol == 7) {
        	
        } else {
            tiles.setSmallTilemap(tilemap`level26`)
        }
    } else if (currentLocationRow == 3) {
        if (currentLocationCol == 0) {
        	
        } else if (currentLocationCol == 1) {
        	
        } else if (currentLocationCol == 2) {
            tiles.setSmallTilemap(tilemap`level40`)
        } else if (currentLocationCol == 3) {
            tiles.setSmallTilemap(tilemap`level38`)
        } else if (currentLocationCol == 4) {
        	
        } else if (currentLocationCol == 5) {
        	
        } else if (currentLocationCol == 6) {
        	
        } else if (currentLocationCol == 7) {
        	
        } else {
        	
        }
    } else {
    	
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
    if (bouldersFallen) {
        tiles.coverAllTiles(assets.tile`myTile12`, assets.tile`myTile17`)
        for (let value3 of tiles.getTilesByType(assets.tile`myTile12`)) {
            tiles.setWallAt(value3, true)
        }
    }
    if (collapseCracks) {
        for (let value32 of tiles.getTilesByType(assets.tile`myTile19`)) {
            tiles.setTileAt(value32, assets.tile`myTile`)
            tiles.setWallAt(value32, false)
        }
    }
    thePlayer.setKind(SpriteKind.Player)
}
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
    game.over(false)
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
    life += -1
    thePlayer.setKind(SpriteKind.Food)
    setTimeout(function(){
        thePlayer.setKind(SpriteKind.Player)
    }, 300)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    takeDamage()
})
function gameOver (won: boolean) {
    if (won) {
        game.pushScene()
newCover = sprites.create(img`
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
            `, SpriteKind.Food)
        animation.runImageAnimation(
        newCover,
        [img`
            9999999999999999999999999999999999999999999999999999999999999999999299299999999929999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999999299299999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999992999229999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999998899999999999999992999929999992999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999999999999999999999999999999988899999999999999992999929999922999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999999999999999999999999999999888899899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999999989999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999998899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999899999988889999999999998999999999999988899888999999999999229992299999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999988999899998899999999998999988899999989999999888899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999898999999988888888998999989988999899999999998899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999999999999999899999998998999999999889999999992999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999998999899999998999999999999899999989989999999988999999999929999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999988889899999998999999999999899999989988888888899999999999929999992999999299999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899998889999998999999999999989999899999999999988899999999929999992999999229999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999899999999999998998999998888898899988999999929999992999999929999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999989999999999998998999989999899999999889999929999992999999929999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999899999999998999998889999889999899999899999999998999992999992999999992999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999899889999999999988888889988899999998888889999999999998999929999929999999992999992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999988999999999999989999999999999999998999999999999999988999929999929999999992999992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999989999999999999999989999999999999998899999922999929999999999299992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999988999999999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999899889999999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999989999899999999999889988999998899999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888999999989999899999999999998899899999989999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998889998999999999999899999999998899998999999989999999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999889999999999989999999999999998999999998999999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999988889999999989999999999999998999999999899999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999989999999999999998999999999989999999299929999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999998999999999998999999299929999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999998889999999999999999999999999998999999999998999922299229999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999889998999999999999999999999999989999999999999999229999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999998999999999999999999999999989999999999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989999998999999999999999999999999899999998999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999998999999998999999998999999999999989999998889999999992999992999999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999889999989998999999999889999999999989999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999998998889998998999999999989999999999899999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989998989998999889999999999989999999999899999989998899999992999999229999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998998999899988999999999889999999988899999998888998889999299999992999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998989999899989999999999899999999999999999998998899889999299999992999999999299992299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999899999899989999999999899999999999999999998999999899999929999992999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888888889899999999999998899999999999999999998999998999999929999992999999999999999229999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989899999999999998999999999999999999998889888888899922999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988899999999999989999999998999999999999988899999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999999999999989899999999899999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999988999999999989999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999998899999999999999999999992999922999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999899999999999999999999922999929999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999299999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999998888889999929999999999999999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999999999999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999988899999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999999988899999999999999999999999998999989999299999999899988999999992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999889999999999999999999988899999999999999999999998899989999299999999899999899999992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999988999999999999999999989899989999299999998999999899999929999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999998899999999999929999989899989999299999998999999899999299999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999998999999989989999999999999929999899899989999299999999899999989999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999889999988899999999999999929999899899989999299999999989999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99989999888899999999998899899999999999999999929999899988989999229999999998999998899999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999988999999999999999999229999899999889999929999999999899989999999989999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999989999999999999999999999999999999299999899999998899992999999999899899999998899999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999999999999999999999992999999899999998888999999999999999889999989999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999998999999999999999999999999999999992999999899999899988889999999999999989998899999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888889999999999999999999999999999999992999999899999899999999999999999999998889999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999999999929999999899999899999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299999999992999999989999989999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999299999999992999999998888998888899999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999998889999999999299999999922999999999999888899988888999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999888999999929999999992999999999999999998899999899999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999998999999929999999929999999999999999999988988899999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999929999999999999999999999989999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999998999899999992999999299999999999999999999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999899999992999999299999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989998999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999998999999999299992999999999999999999999998999999989999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998988889998999999999299929999999999999999999999998999999988999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888889998999999999299929999999999999999999999998999999988999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999998999999999299922999999999999999999999998999999989899999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999989999999999299992299999999999999999999999899999899989999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999899999999999299999229999999999999999999999899999899998899999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999998999999999999299999922999999999999999999999899999899999988999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999889999999999999299999992999999999999999999999899998999999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999989999999999899999999999929999999299999999999999999999989999899999998999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999989999999999899999999999929999999299999999999999999999989998999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999998999999999989999999999929999999299999999999999999999998998999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998999999999899999999999299999992999999999999999999999998899999998999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998999999988999999999999299999992999999999992999999999999999999989999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999998999988999999999999992999999929999999999929999999999999999999899999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988889999999999999992299899992999999999992999999999999999999989999999989999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899929999999999929999999999999999999899999999899999999899998899ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999999899889899cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999989992999999999992999999999999999999899999999899999999998999989899ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899992999999999929999999999999988889999999998999999999998999998999ccccc999cccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999999999999999999299999899929999999999929999999999999999999999999899999999999998999989999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998899999999999999992999999899929999999999929999999999999999999999999989999999999999889899999999ddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999998999999999999999299999988992999999999992999999999999999999999999999899999999999999889999999dddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999998899999999999992999999989929999999999929999999999999999999999999999899999999999999999999dddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998888899999999889999999999299999999899299999999999299999999999999999999999999999899999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998989989999999998999999999299999999992999999999999299999999999999999999999999999988999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898989999999999989999999929999999999299999999999929999999998999999999999999999999988999999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898899999999999999999999929999999999299999999999929999999999899999999999999999999999888999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999992999999999999992999999999989999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999929999999999999992999999999998999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888888899999999999299999999299999999999999992999999999999999999998888888999989998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999989999999999299999999299999999999999929999999999999999999999899999888889998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999992299999999998992229999999999999999999999989989999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999922999999999998929999999999999999999999999998999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888999998999999999922299299999999999998929999999999999999999999999999889999999998999999999ddddddddddddcccccccccccccccccccccccccc66666ccccccccccccccccc
            9999898888989999998999999999999299299999999989998929999999999999999999999999999998999999998999999999ddddddddddddcccccccccccccccccc6666666666666cccc66ccccccccccc
            9999889999998999989999999999999299299999999989998929999999999999999999999999999999899999989999999999ddddddddddddccccccccccccccc66666666666666666666666666ccccccc
            9999999999999889899999999999999299299999999998998929999999998999998999988899999999988888899999999999ddddddddddddcccccccccccccccc666666666666666666666666666ccccc
            9999999999999998999999999999992999299999999999888929999999999899988888899988899999999999999999999999ddddddddddddcccccccccccccc66666666666666666666666666666666cc
            99999999999999999999999999999229992299999999999999929999999998988999999999999889999999999999999999999dddddddddddccccccccccc6666666666666666666666666666666666666
            99999999999999999999999999992299999299999999999999929999999999899999999999999998999999999999999999999dddddddddddcccccc666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999992999999999999999999999999999999999999999999999999999dddddddddc66666666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999999299999999999999999999999999999999999999999999999999999dddddd666666666666666666666666666666666666666666666666
            `,img`
            9999999999999999999999999999999999999999999999999999999999999999999299299999999929999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999999299299999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999992999229999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999998899999999999999992999929999992999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999999999999999999999999999999988899999999999999992999929999922999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999999999999999999999999999999888899899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999999989999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999998899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999899999988889999999999998999999999999988899888999999999999229992299999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999988999899998899999999998999988899999989999999888899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999898999999988888888998999989988999899999999998899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999999999999999899999998998999999999889999999992999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999998999899999998999999999999899999989989999999988999999999929999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999988889899999998999999999999899999989988888888899999999999929999992999999299999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899998889999998999999999999989999899999999999988899999999929999992999999229999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999899999999999998998999998888898899988999999929999992999999929999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999989999999999998998999989999899999999889999929999992999999929999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999899999999998999998889999889999899999899999999998999992999992999999992999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999899889999999999988888889988899999998888889999999999998999929999929999999992999992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999988999999999999989999999999999999998999999999999999988999929999929999999992999992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999989999999999999999989999999999999998899999922999929999999999299992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999988999999999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999899889999999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999989999899999999999889988999998899999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888999999989999899999999999998899899999989999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998889998999999999999899999999998899998999999989999999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999889999999999989999999999999998999999998999999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999988889999999989999999999999998999999999899999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999989999999999999998999999999989999999299929999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999998999999999998999999299929999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999998889999999999999999999999999998999999999998999922299229999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999889998999999999999999999999999989999999999999999229999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999998999999999999999999999999989999999999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989999998999999999999999999999999899999998999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999998999999998999999998999999999999989999998889999999992999992999999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999889999989998999999999889999999999989999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999998998889998998999999999989999999999899999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989998989998999889999999999989999999999899999989998899999992999999229999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998998999899988999999999889999999988899999998888998889999299999992999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998989999899989999999999899999999999999999998998899889999299999992999999999299992299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999899999899989999999999899999999999999999998999999899999929999992999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888888889899999999999998899999999999999999998999998999999929999992999999999999999229999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989899999999999998999999999999999999998889888888899922999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988899999999999989999999998999999999999988899999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999999999999989899999999899999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999988999999999989999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999998899999999999999999999992999922999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999899999999999999999999922999929999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999299999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999998888889999929999999999999999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999999999999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999988899999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999999988899999999999999999999999998999989999299999999899988999999992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999889999999999999999999988899999999999999999999998899989999299999999899999899999992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999988999999999999999999989899989999299999998999999899999929999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999998899999999999929999989899989999299999998999999899999299999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999998999999989989999999999999929999899899989999299999999899999989999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999889999988899999999999999929999899899989999299999999989999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99989999888899999999998899899999999999999999929999899988989999229999999998999998899999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999988999999999999999999229999899999889999929999999999899989999999989999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999989999999999999999999999999999999299999899999998899992999999999899899999998899999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999999999999999999999992999999899999998888999999999999999889999989999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999998999999999999999999999999999999992999999899999899988889999999999999989998899999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888889999999999999999999999999999999992999999899999899999999999999999999998889999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999999999929999999899999899999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299999999992999999989999989999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999299999999992999999998888998888899999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999998889999999999299999999922999999999999888899988888999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999888999999929999999992999999999999999998899999899999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999998999999929999999929999999999999999999988988899999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999929999999999999999999999989999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999998999899999992999999299999999999999999999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999899999992999999299999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989998999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999998999999999299992999999999999999999999998999999989999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998988889998999999999299929999999999999999999999998999999988999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888889998999999999299929999999999999999999999998999999988999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999998999999999299922999999999999999999999998999999989899999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999989999999999299992299999999999999999999999899999899989999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999899999999999299999229999999999999999999999899999899998899999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999998999999999999299999922999999999999999999999899999899999988999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999889999999999999299999992999999999999999999999899998999999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999989999999999899999999999929999999299999999999999999999989999899999998999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999989999999999899999999999929999999299999999999999999999989998999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999998999999999989999999999929999999299999999999999999999998998999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998999999999899999999999299999992999999999999999999999998899999998999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998999999988999999999999299999992999999999992999999999999999999989999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999998999988999999999999992999999929999999999929999999999999999999899999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988889999999999999992299899992999999999992999999999999999999989999999989999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899929999999999929999999999999999999899999999899999999899998899ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999999899889899cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999989992999999999992999999999999999999899999999899999999998999989899ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899992999999999929999999999999988889999999998999999999998999998999ccccc999cccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999999999999999999299999899929999999999929999999999999999999999999899999999999998999989999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998899999999999999992999999899929999999999929999999999999999999999999989999999999999889899999999ddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999998999999999999999299999988992999999999992999999999999999999999999999899999999999999889999999dddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999998899999999999992999999989929999999999929999999999999999999999999999899999999999999999999dddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998888899999999889999999999299999999899299999999999299999999999999999999999999999899999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998989989999999998999999999299999999992999999999999299999999999999999999999999999988999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898989999999999989999999929999999999299999999999929999999998999999999999999999999988999999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898899999999999999999999929999999999299999999999929999999999899999999999999999999999888999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999992999999999999992999999999989999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999929999999999999992999999999998999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998999998888888999999999992999999992999999999999999929999999999999999999988888889999899989999999999552477dddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999989999999999299999999299999999999999929999999999999999999999899999888889998999999999d52447ddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999989999999999299999922999999999989922299999999999999999999999899899999999989999999999254977dddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999922999999999998929999999999999999999999999998999999999998999999999dddddd77ddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888999998999999999922299299999999999998929999999999999999999999999999889999999998999999999ddddddddddddcccccccccccccccccccccccccc66666ccccccccccccccccc
            9999898888989999998999999999999299299999999989998929999999999999999999999999999998999999998999999999ddddddddddddcccccccccccccccccc6666666666666cccc66ccccccccccc
            9999889999998999989999999999999299299999999989998929999999999999999999999999999999899999989999999999ddddddddddddccccccccccccccc66666666666666666666666666ccccccc
            9999999999999889899999999999999299299999999998998929999999998999998999988899999999988888899999999999ddddddddddddcccccccccccccccc666666666666666666666666666ccccc
            9999999999999998999999999999992999299999999999888929999999999899988888899988899999999999999999999999ddddddddddddcccccccccccccc66666666666666666666666666666666cc
            99999999999999999999999999999229992299999999999999929999999998988999999999999889999999999999999999999dddddddddddccccccccccc6666666666666666666666666666666666666
            99999999999999999999999999992299999299999999999999929999999999899999999999999998999999999999999999999dddddddddddcccccc666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999992999999999999999999999999999999999999999999999999999dddddddddc66666666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999999299999999999999999999999999999999999999999999999999999dddddd666666666666666666666666666666666666666666666666
            `,img`
            9999999999999999999999999999999999999999999999999999999999999999999299299999999929999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999999299299999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999992999229999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999998899999999999999992999929999992999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999999999999999999999999999999988899999999999999992999929999922999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999999999999999999999999999999888899899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999999989999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999998899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999899999988889999999999998999999999999988899888999999999999229992299999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999988999899998899999999998999988899999989999999888899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999898999999988888888998999989988999899999999998899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999999999999999899999998998999999999889999999992999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999998999899999998999999999999899999989989999999988999999999929999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999988889899999998999999999999899999989988888888899999999999929999992999999299999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899998889999998999999999999989999899999999999988899999999929999992999999229999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999899999999999998998999998888898899988999999929999992999999929999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999989999999999998998999989999899999999889999929999992999999929999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999899999999998999998889999889999899999899999999998999992999992999999992999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999899889999999999988888889988899999998888889999999999998999929999929999999992999992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999988999999999999989999999999999999998999999999999999988999929999929999999992999992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999989999999999999999989999999999999998899999922999929999999999299992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999988999999999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999899889999999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999989999899999999999889988999998899999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888999999989999899999999999998899899999989999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998889998999999999999899999999998899998999999989999999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999889999999999989999999999999998999999998999999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999988889999999989999999999999998999999999899999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999989999999999999998999999999989999999299929999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999998999999999998999999299929999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999998889999999999999999999999999998999999999998999922299229999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999889998999999999999999999999999989999999999999999229999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999998999999999999999999999999989999999999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989999998999999999999999999999999899999998999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999998999999998999999998999999999999989999998889999999992999992999999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999889999989998999999999889999999999989999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999998998889998998999999999989999999999899999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989998989998999889999999999989999999999899999989998899999992999999229999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998998999899988999999999889999999988899999998888998889999299999992999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998989999899989999999999899999999999999999998998899889999299999992999999999299992299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999899999899989999999999899999999999999999998999999899999929999992999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888888889899999999999998899999999999999999998999998999999929999992999999999999999229999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989899999999999998999999999999999999998889888888899922999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988899999999999989999999998999999999999988899999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999999999999989899999999899999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999988999999999989999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999998899999999999999999999992999922999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999899999999999999999999922999929999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999299999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999998888889999929999999999999999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999999999999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999988899999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999999988899999999999999999999999998999989999299999999899988999999992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999889999999999999999999988899999999999999999999998899989999299999999899999899999992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999988999999999999999999989899989999299999998999999899999929999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999998899999999999929999989899989999299999998999999899999299999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999998999999989989999999999999929999899899989999299999999899999989999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999889999988899999999999999929999899899989999299999999989999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99989999888899999999998899899999999999999999929999899988989999229999999998999998899999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999988999999999999999999229999899999889999929999999999899989999999989999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999989999999999999999999999999999999299999899999998899992999999999899899999998899999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999999999999999999999992999999899999998888999999999999999889999989999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999998999999999999999999999999999999992999999899999899988889999999999999989998899999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888889999999999999999999999999999999992999999899999899999999999999999999998889999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999999999929999999899999899999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299999999992999999989999989999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999299999999992999999998888998888899999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999998889999999999299999999922999999999999888899988888999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999888999999929999999992999999999999999998899999899999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999998999999929999999929999999999999999999988988899999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999929999999999999999999999989999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999998999899999992999999299999999999999999999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999899999992999999299999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989998999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999998999999999299992999999999999999999999998999999989999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998988889998999999999299929999999999999999999999998999999988999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888889998999999999299929999999999999999999999998999999988999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999998999999999299922999999999999999999999998999999989899999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999989999999999299992299999999999999999999999899999899989999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999899999999999299999229999999999999999999999899999899998899999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999998999999999999299999922999999999999999999999899999899999988999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999889999999999999299999992999999999999999999999899998999999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999989999999999899999999999929999999299999999999999999999989999899999998999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999989999999999899999999999929999999299999999999999999999989998999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999998999999999989999999999929999999299999999999999999999998998999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998999999999899999999999299999992999999999999999999999998899999998999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998999999988999999999999299999992999999999992999999999999999999989999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999998999988999999999999992999999929999999999929999999999999999999899999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988889999999999999992299899992999999999992999999999999999999989999999989999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899929999999999929999999999999999999899999999899999999899998899ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999999899889899cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999989992999999999992999999999999999999899999999899999999998999989899ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899992999999999929999999999999988889999999998999999999998999998999ccccc999cccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999999999999999999299999899929999999999929999999999999999999999999899999999999998999989999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998899999999999999992999999899929999999999929999999999999999999999999989999999999999889899999999ddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999998999999999999999299999988992999999999992999999999999999999999999999899999999999999889999999dddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999998899999999999992999999989929999999999929999999999999999999999999999899999999999999999999dddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998888899999999889999999999299999999899299999999999299999999999999999999999999999899999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998989989999999998999999999299999999992999999999999299999999999999999999999999999988999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898989999999999989999999929999999999299999999999929999999998999999999999999999999988999999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898899999999999999999999929999999999299999999999929999999999899999999999999999999999888999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999992999999999999992999999999989999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999929999999999999992999999999998999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888888899999999999299999999299999999999999992999999999999999999998888888999989998999999999ddd9552477ddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999989999999999299999999299999999999999929999999999999999999999899999888889998999999999dddd52447dddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999992299999999998992229999999999999999999999989989999999998999999999ddd9254977ddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999922999999999998929999999999999999999999999998999999999998999999999ddddddddd77dcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888999998999999999922299299999999999998929999999999999999999999999999889999999998999999999ddddddddddddcccccccccccccccccccccccccc66666ccccccccccccccccc
            9999898888989999998999999999999299299999999989998929999999999999999999999999999998999999998999999999ddddddddddddcccccccccccccccccc6666666666666cccc66ccccccccccc
            9999889999998999989999999999999299299999999989998929999999999999999999999999999999899999989999999999ddddddddddddccccccccccccccc66666666666666666666666666ccccccc
            9999999999999889899999999999999299299999999998998929999999998999998999988899999999988888899999999999ddddddddddddcccccccccccccccc666666666666666666666666666ccccc
            9999999999999998999999999999992999299999999999888929999999999899988888899988899999999999999999999999ddddddddddddcccccccccccccc66666666666666666666666666666666cc
            99999999999999999999999999999229992299999999999999929999999998988999999999999889999999999999999999999dddddddddddccccccccccc6666666666666666666666666666666666666
            99999999999999999999999999992299999299999999999999929999999999899999999999999998999999999999999999999dddddddddddcccccc666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999992999999999999999999999999999999999999999999999999999dddddddddc66666666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999999299999999999999999999999999999999999999999999999999999dddddd666666666666666666666666666666666666666666666666
            `,img`
            9999999999999999999999999999999999999999999999999999999999999999999299299999999929999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999999299299999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999992999229999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999998899999999999999992999929999992999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999999999999999999999999999999988899999999999999992999929999922999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999999999999999999999999999999888899899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999999989999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999998899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999899999988889999999999998999999999999988899888999999999999229992299999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999988999899998899999999998999988899999989999999888899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999898999999988888888998999989988999899999999998899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999999999999999899999998998999999999889999999992999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999998999899999998999999999999899999989989999999988999999999929999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999988889899999998999999999999899999989988888888899999999999929999992999999299999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899998889999998999999999999989999899999999999988899999999929999992999999229999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999899999999999998998999998888898899988999999929999992999999929999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999989999999999998998999989999899999999889999929999992999999929999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999899999999998999998889999889999899999899999999998999992999992999999992999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999899889999999999988888889988899999998888889999999999998999929999929999999992999992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999988999999999999989999999999999999998999999999999999988999929999929999999992999992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999989999999999999999989999999999999998899999922999929999999999299992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999988999999999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999899889999999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999989999899999999999889988999998899999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888999999989999899999999999998899899999989999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998889998999999999999899999999998899998999999989999999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999889999999999989999999999999998999999998999999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999988889999999989999999999999998999999999899999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999989999999999999998999999999989999999299929999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999998999999999998999999299929999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999998889999999999999999999999999998999999999998999922299229999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999889998999999999999999999999999989999999999999999229999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999998999999999999999999999999989999999999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989999998999999999999999999999999899999998999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999998999999998999999998999999999999989999998889999999992999992999999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999889999989998999999999889999999999989999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999998998889998998999999999989999999999899999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989998989998999889999999999989999999999899999989998899999992999999229999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998998999899988999999999889999999988899999998888998889999299999992999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998989999899989999999999899999999999999999998998899889999299999992999999999299992299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999899999899989999999999899999999999999999998999999899999929999992999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888888889899999999999998899999999999999999998999998999999929999992999999999999999229999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989899999999999998999999999999999999998889888888899922999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988899999999999989999999998999999999999988899999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999999999999989899999999899999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999988999999999989999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999998899999999999999999999992999922999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999899999999999999999999922999929999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999299999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999998888889999929999999999999999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999999999999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999988899999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999999988899999999999999999999999998999989999299999999899988999999992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999889999999999999999999988899999999999999999999998899989999299999999899999899999992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999988999999999999999999989899989999299999998999999899999929999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999998899999999999929999989899989999299999998999999899999299999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999998999999989989999999999999929999899899989999299999999899999989999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999889999988899999999999999929999899899989999299999999989999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99989999888899999999998899899999999999999999929999899988989999229999999998999998899999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999988999999999999999999229999899999889999929999999999899989999999989999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999989999999999999999999999999999999299999899999998899992999999999899899999998899999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999999999999999999999992999999899999998888999999999999999889999989999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999998999999999999999999999999999999992999999899999899988889999999999999989998899999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888889999999999999999999999999999999992999999899999899999999999999999999998889999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999999999929999999899999899999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299999999992999999989999989999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999299999999992999999998888998888899999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999998889999999999299999999922999999999999888899988888999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999888999999929999999992999999999999999998899999899999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999998999999929999999929999999999999999999988988899999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999929999999999999999999999989999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999998999899999992999999299999999999999999999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999899999992999999299999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989998999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999998999999999299992999999999999999999999998999999989999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998988889998999999999299929999999999999999999999998999999988999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888889998999999999299929999999999999999999999998999999988999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999998999999999299922999999999999999999999998999999989899999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999989999999999299992299999999999999999999999899999899989999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999899999999999299999229999999999999999999999899999899998899999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999998999999999999299999922999999999999999999999899999899999988999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999889999999999999299999992999999999999999999999899998999999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999989999999999899999999999929999999299999999999999999999989999899999998999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999989999999999899999999999929999999299999999999999999999989998999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999998999999999989999999999929999999299999999999999999999998998999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998999999999899999999999299999992999999999999999999999998899999998999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998999999988999999999999299999992999999999992999999999999999999989999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999998999988999999999999992999999929999999999929999999999999999999899999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988889999999999999992299899992999999999992999999999999999999989999999989999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899929999999999929999999999999999999899999999899999999899998899ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999999899889899cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999989992999999999992999999999999999999899999999899999999998999989899ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899992999999999929999999999999988889999999998999999999998999998999ccccc999cccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999999999999999999299999899929999999999929999999999999999999999999899999999999998999989999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998899999999999999992999999899929999999999929999999999999999999999999989999999999999889899999999ddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999998999999999999999299999988992999999999992999999999999999999999999999899999999999999889999999dddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999998899999999999992999999989929999999999929999999999999999999999999999899999999999999999999dddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998888899999999889999999999299999999899299999999999299999999999999999999999999999899999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998989989999999998999999999299999999992999999999999299999999999999999999999999999988999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898989999999999989999999929999999999299999999999929999999998999999999999999999999988999999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898899999999999999999999929999999999299999999999929999999999899999999999999999999999888999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999992999999999999992999999999989999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999929999999999999992999999999998999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888888899999999999299999999299999999999999992999999999999999999998888888999989998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999989999999999299999999299999999999999929999999999999999999999899999888889998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999992299999999998992229999999999999999999999989989999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999922999999999998929999999999999999999999999998999999999998999999999dddddddd9552477ccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888999998999999999922299299999999999998929999999999999999999999999999889999999998999999999ddddddddd52447cccccccccccccccccccccccc66666ccccccccccccccccc
            9999898888989999998999999999999299299999999989998929999999999999999999999999999998999999998999999999dddddddd9254977ccccccccccccccc6666666666666cccc66ccccccccccc
            9999889999998999989999999999999299299999999989998929999999999999999999999999999999899999989999999999ddddddddddddcc77ccccccccccc66666666666666666666666666ccccccc
            9999999999999889899999999999999299299999999998998929999999998999998999988899999999988888899999999999ddddddddddddcccccccccccccccc666666666666666666666666666ccccc
            9999999999999998999999999999992999299999999999888929999999999899988888899988899999999999999999999999ddddddddddddcccccccccccccc66666666666666666666666666666666cc
            99999999999999999999999999999229992299999999999999929999999998988999999999999889999999999999999999999dddddddddddccccccccccc6666666666666666666666666666666666666
            99999999999999999999999999992299999299999999999999929999999999899999999999999998999999999999999999999dddddddddddcccccc666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999992999999999999999999999999999999999999999999999999999dddddddddc66666666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999999299999999999999999999999999999999999999999999999999999dddddd666666666666666666666666666666666666666666666666
            `,img`
            9999999999999999999999999999999999999999999999999999999999999999999299299999999929999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999999299299999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999992999229999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999998899999999999999992999929999992999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999999999999999999999999999999988899999999999999992999929999922999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999999999999999999999999999999888899899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999999989999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999998899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999899999988889999999999998999999999999988899888999999999999229992299999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999988999899998899999999998999988899999989999999888899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999898999999988888888998999989988999899999999998899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999999999999999899999998998999999999889999999992999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999998999899999998999999999999899999989989999999988999999999929999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999988889899999998999999999999899999989988888888899999999999929999992999999299999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899998889999998999999999999989999899999999999988899999999929999992999999229999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999899999999999998998999998888898899988999999929999992999999929999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999989999999999998998999989999899999999889999929999992999999929999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999899999999998999998889999889999899999899999999998999992999992999999992999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999899889999999999988888889988899999998888889999999999998999929999929999999992999992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999988999999999999989999999999999999998999999999999999988999929999929999999992999992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999989999999999999999989999999999999998899999922999929999999999299992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999988999999999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999899889999999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999989999899999999999889988999998899999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888999999989999899999999999998899899999989999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998889998999999999999899999999998899998999999989999999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999889999999999989999999999999998999999998999999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999988889999999989999999999999998999999999899999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999989999999999999998999999999989999999299929999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999998999999999998999999299929999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999998889999999999999999999999999998999999999998999922299229999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999889998999999999999999999999999989999999999999999229999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999998999999999999999999999999989999999999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989999998999999999999999999999999899999998999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999998999999998999999998999999999999989999998889999999992999992999999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999889999989998999999999889999999999989999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999998998889998998999999999989999999999899999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989998989998999889999999999989999999999899999989998899999992999999229999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998998999899988999999999889999999988899999998888998889999299999992999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998989999899989999999999899999999999999999998998899889999299999992999999999299992299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999899999899989999999999899999999999999999998999999899999929999992999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888888889899999999999998899999999999999999998999998999999929999992999999999999999229999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989899999999999998999999999999999999998889888888899922999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988899999999999989999999998999999999999988899999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999999999999989899999999899999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999988999999999989999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999998899999999999999999999992999922999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999899999999999999999999922999929999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999299999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999998888889999929999999999999999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999999999999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999988899999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999999988899999999999999999999999998999989999299999999899988999999992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999889999999999999999999988899999999999999999999998899989999299999999899999899999992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999988999999999999999999989899989999299999998999999899999929999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999998899999999999929999989899989999299999998999999899999299999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999998999999989989999999999999929999899899989999299999999899999989999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999889999988899999999999999929999899899989999299999999989999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99989999888899999999998899899999999999999999929999899988989999229999999998999998899999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999988999999999999999999229999899999889999929999999999899989999999989999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999989999999999999999999999999999999299999899999998899992999999999899899999998899999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999999999999999999999992999999899999998888999999999999999889999989999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999998999999999999999999999999999999992999999899999899988889999999999999989998899999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888889999999999999999999999999999999992999999899999899999999999999999999998889999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999999999929999999899999899999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299999999992999999989999989999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999299999999992999999998888998888899999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999998889999999999299999999922999999999999888899988888999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999888999999929999999992999999999999999998899999899999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999998999999929999999929999999999999999999988988899999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999929999999999999999999999989999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999998999899999992999999299999999999999999999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999899999992999999299999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989998999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999998999999999299992999999999999999999999998999999989999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998988889998999999999299929999999999999999999999998999999988999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888889998999999999299929999999999999999999999998999999988999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999998999999999299922999999999999999999999998999999989899999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999989999999999299992299999999999999999999999899999899989999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999899999999999299999229999999999999999999999899999899998899999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999998999999999999299999922999999999999999999999899999899999988999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999889999999999999299999992999999999999999999999899998999999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999989999999999899999999999929999999299999999999999999999989999899999998999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999989999999999899999999999929999999299999999999999999999989998999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999998999999999989999999999929999999299999999999999999999998998999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998999999999899999999999299999992999999999999999999999998899999998999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998999999988999999999999299999992999999999992999999999999999999989999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999998999988999999999999992999999929999999999929999999999999999999899999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988889999999999999992299899992999999999992999999999999999999989999999989999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899929999999999929999999999999999999899999999899999999899998899ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999999899889899cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999989992999999999992999999999999999999899999999899999999998999989899ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899992999999999929999999999999988889999999998999999999998999998999ccccc999cccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999999999999999999299999899929999999999929999999999999999999999999899999999999998999989999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998899999999999999992999999899929999999999929999999999999999999999999989999999999999889899999999ddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999998999999999999999299999988992999999999992999999999999999999999999999899999999999999889999999dddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999998899999999999992999999989929999999999929999999999999999999999999999899999999999999999999dddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998888899999999889999999999299999999899299999999999299999999999999999999999999999899999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998989989999999998999999999299999999992999999999999299999999999999999999999999999988999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898989999999999989999999929999999999299999999999929999999998999999999999999999999988999999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898899999999999999999999929999999999299999999999929999999999899999999999999999999999888999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999992999999999999992999999999989999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999929999999999999992999999999998999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888888899999999999299999999299999999999999992999999999999999999998888888999989998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999989999999999299999999299999999999999929999999999999999999999899999888889998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999992299999999998992229999999999999999999999989989999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999922999999999998929999999999999999999999999998999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888999998999999999922299299999999999998929999999999999999999999999999889999999998999999999ddddddddddddcccccccccccccccccccccccccc66666ccccccccccccccccc
            9999898888989999998999999999999299299999999989998929999999999999999999999999999998999999998999999999ddddddddddddc9552477cccccccccc6666666666666cccc66ccccccccccc
            9999889999998999989999999999999299299999999989998929999999999999999999999999999999899999989999999999ddddddddddddcc52447cccccccc66666666666666666666666666ccccccc
            9999999999999889899999999999999299299999999998998929999999998999998999988899999999988888899999999999ddddddddddddc9254977cccccccc666666666666666666666666666ccccc
            9999999999999998999999999999992999299999999999888929999999999899988888899988899999999999999999999999ddddddddddddcc9c9cc77ccccc66666666666666666666666666666666cc
            99999999999999999999999999999229992299999999999999929999999998988999999999999889999999999999999999999dddddddddddccccccccccc6666666666666666666666666666666666666
            99999999999999999999999999992299999299999999999999929999999999899999999999999998999999999999999999999dddddddddddcccccc666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999992999999999999999999999999999999999999999999999999999dddddddddc66666666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999999299999999999999999999999999999999999999999999999999999dddddd666666666666666666666666666666666666666666666666
            `,img`
            9999999999999999999999999999999999999999999999999999999999999999999299299999999929999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999999299299999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999992999229999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999998899999999999999992999929999992999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999999999999999999999999999999988899999999999999992999929999922999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999999999999999999999999999999888899899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999999989999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999998899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999899999988889999999999998999999999999988899888999999999999229992299999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999988999899998899999999998999988899999989999999888899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999898999999988888888998999989988999899999999998899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999999999999999899999998998999999999889999999992999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999998999899999998999999999999899999989989999999988999999999929999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999988889899999998999999999999899999989988888888899999999999929999992999999299999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899998889999998999999999999989999899999999999988899999999929999992999999229999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999899999999999998998999998888898899988999999929999992999999929999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999989999999999998998999989999899999999889999929999992999999929999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999899999999998999998889999889999899999899999999998999992999992999999992999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999899889999999999988888889988899999998888889999999999998999929999929999999992999992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999988999999999999989999999999999999998999999999999999988999929999929999999992999992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999989999999999999999989999999999999998899999922999929999999999299992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999988999999999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999899889999999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999989999899999999999889988999998899999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888999999989999899999999999998899899999989999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998889998999999999999899999999998899998999999989999999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999889999999999989999999999999998999999998999999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999988889999999989999999999999998999999999899999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999989999999999999998999999999989999999299929999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999998999999999998999999299929999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999998889999999999999999999999999998999999999998999922299229999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999889998999999999999999999999999989999999999999999229999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999998999999999999999999999999989999999999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989999998999999999999999999999999899999998999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999998999999998999999998999999999999989999998889999999992999992999999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999889999989998999999999889999999999989999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999998998889998998999999999989999999999899999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989998989998999889999999999989999999999899999989998899999992999999229999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998998999899988999999999889999999988899999998888998889999299999992999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998989999899989999999999899999999999999999998998899889999299999992999999999299992299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999899999899989999999999899999999999999999998999999899999929999992999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888888889899999999999998899999999999999999998999998999999929999992999999999999999229999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989899999999999998999999999999999999998889888888899922999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988899999999999989999999998999999999999988899999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999999999999989899999999899999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999988999999999989999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999998899999999999999999999992999922999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999899999999999999999999922999929999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999299999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999998888889999929999999999999999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999999999999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999988899999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999999988899999999999999999999999998999989999299999999899988999999992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999889999999999999999999988899999999999999999999998899989999299999999899999899999992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999988999999999999999999989899989999299999998999999899999929999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999998899999999999929999989899989999299999998999999899999299999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999998999999989989999999999999929999899899989999299999999899999989999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999889999988899999999999999929999899899989999299999999989999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99989999888899999999998899899999999999999999929999899988989999229999999998999998899999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999988999999999999999999229999899999889999929999999999899989999999989999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999989999999999999999999999999999999299999899999998899992999999999899899999998899999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999999999999999999999992999999899999998888999999999999999889999989999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999998999999999999999999999999999999992999999899999899988889999999999999989998899999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888889999999999999999999999999999999992999999899999899999999999999999999998889999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999999999929999999899999899999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299999999992999999989999989999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999299999999992999999998888998888899999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999998889999999999299999999922999999999999888899988888999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999888999999929999999992999999999999999998899999899999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999998999999929999999929999999999999999999988988899999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999929999999999999999999999989999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999998999899999992999999299999999999999999999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999899999992999999299999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989998999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999998999999999299992999999999999999999999998999999989999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998988889998999999999299929999999999999999999999998999999988999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888889998999999999299929999999999999999999999998999999988999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999998999999999299922999999999999999999999998999999989899999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999989999999999299992299999999999999999999999899999899989999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999899999999999299999229999999999999999999999899999899998899999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999998999999999999299999922999999999999999999999899999899999988999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999889999999999999299999992999999999999999999999899998999999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999989999999999899999999999929999999299999999999999999999989999899999998999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999989999999999899999999999929999999299999999999999999999989998999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999998999999999989999999999929999999299999999999999999999998998999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998999999999899999999999299999992999999999999999999999998899999998999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998999999988999999999999299999992999999999992999999999999999999989999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999998999988999999999999992999999929999999999929999999999999999999899999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988889999999999999992299899992999999999992999999999999999999989999999989999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899929999999999929999999999999999999899999999899999999899998899ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999999899889899cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999989992999999999992999999999999999999899999999899999999998999989899ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899992999999999929999999999999988889999999998999999999998999998999ccccc999cccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999999999999999999299999899929999999999929999999999999999999999999899999999999998999989999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998899999999999999992999999899929999999999929999999999999999999999999989999999999999889899999999ddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999998999999999999999299999988992999999999992999999999999999999999999999899999999999999889999999dddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999998899999999999992999999989929999999999929999999999999999999999999999899999999999999999999dddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998888899999999889999999999299999999899299999999999299999999999999999999999999999899999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998989989999999998999999999299999999992999999999999299999999999999999999999999999988999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898989999999999989999999929999999999299999999999929999999998999999999999999999999988999999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898899999999999999999999929999999999299999999999929999999999899999999999999999999999888999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999992999999999999992999999999989999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999929999999999999992999999999998999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888888899999999999299999999299999999999999992999999999999999999998888888999989998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999989999999999299999999299999999999999929999999999999999999999899999888889998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999992299999999998992229999999999999999999999989989999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999922999999999998929999999999999999999999999998999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888999998999999999922299299999999999998929999999999999999999999999999889999999998999999999ddddddddddddcccccccccccccccccccccccccc66666ccccccccccccccccc
            9999898888989999998999999999999299299999999989998929999999999999999999999999999998999999998999999999ddddddddddddcccccccccccccccccc6666666666666cccc66ccccccccccc
            9999889999998999989999999999999299299999999989998929999999999999999999999999999999899999989999999999ddddddddddddccccc9552477ccc66666666666666666666666666ccccccc
            9999999999999889899999999999999299299999999998998929999999998999998999988899999999988888899999999999ddddddddddddcccccc52447ccccc666666666666666666666666666ccccc
            9999999999999998999999999999992999299999999999888929999999999899988888899988899999999999999999999999ddddddddddddccccc9254977cc66666666666666666666666666666666cc
            99999999999999999999999999999229992299999999999999929999999998988999999999999889999999999999999999999dddddddddddcccccc9c9cc7766666666666666666666666666666666666
            99999999999999999999999999992299999299999999999999929999999999899999999999999998999999999999999999999dddddddddddcccccc666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999992999999999999999999999999999999999999999999999999999dddddddddc66666666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999999299999999999999999999999999999999999999999999999999999dddddd666666666666666666666666666666666666666666666666
            `,img`
            9999999999999999999999999999999999999999999999999999999999999999999299299999999929999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999999299299999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999992999229999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999998899999999999999992999929999992999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999999999999999999999999999999988899999999999999992999929999922999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999999999999999999999999999999888899899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999999989999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999998899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999899999988889999999999998999999999999988899888999999999999229992299999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999988999899998899999999998999988899999989999999888899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999898999999988888888998999989988999899999999998899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999999999999999899999998998999999999889999999992999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999998999899999998999999999999899999989989999999988999999999929999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999988889899999998999999999999899999989988888888899999999999929999992999999299999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899998889999998999999999999989999899999999999988899999999929999992999999229999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999899999999999998998999998888898899988999999929999992999999929999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999989999999999998998999989999899999999889999929999992999999929999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999899999999998999998889999889999899999899999999998999992999992999999992999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999899889999999999988888889988899999998888889999999999998999929999929999999992999992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999988999999999999989999999999999999998999999999999999988999929999929999999992999992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999989999999999999999989999999999999998899999922999929999999999299992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999988999999999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999899889999999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999989999899999999999889988999998899999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888999999989999899999999999998899899999989999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998889998999999999999899999999998899998999999989999999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999889999999999989999999999999998999999998999999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999988889999999989999999999999998999999999899999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999989999999999999998999999999989999999299929999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999998999999999998999999299929999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999998889999999999999999999999999998999999999998999922299229999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999889998999999999999999999999999989999999999999999229999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999998999999999999999999999999989999999999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989999998999999999999999999999999899999998999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999998999999998999999998999999999999989999998889999999992999992999999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999889999989998999999999889999999999989999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999998998889998998999999999989999999999899999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989998989998999889999999999989999999999899999989998899999992999999229999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998998999899988999999999889999999988899999998888998889999299999992999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998989999899989999999999899999999999999999998998899889999299999992999999999299992299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999899999899989999999999899999999999999999998999999899999929999992999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888888889899999999999998899999999999999999998999998999999929999992999999999999999229999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989899999999999998999999999999999999998889888888899922999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988899999999999989999999998999999999999988899999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999999999999989899999999899999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999988999999999989999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999998899999999999999999999992999922999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999899999999999999999999922999929999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999299999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999998888889999929999999999999999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999999999999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999988899999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999999988899999999999999999999999998999989999299999999899988999999992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999889999999999999999999988899999999999999999999998899989999299999999899999899999992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999988999999999999999999989899989999299999998999999899999929999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999998899999999999929999989899989999299999998999999899999299999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999998999999989989999999999999929999899899989999299999999899999989999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999889999988899999999999999929999899899989999299999999989999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99989999888899999999998899899999999999999999929999899988989999229999999998999998899999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999988999999999999999999229999899999889999929999999999899989999999989999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999989999999999999999999999999999999299999899999998899992999999999899899999998899999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999999999999999999999992999999899999998888999999999999999889999989999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999998999999999999999999999999999999992999999899999899988889999999999999989998899999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888889999999999999999999999999999999992999999899999899999999999999999999998889999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999999999929999999899999899999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299999999992999999989999989999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999299999999992999999998888998888899999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999998889999999999299999999922999999999999888899988888999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999888999999929999999992999999999999999998899999899999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999998999999929999999929999999999999999999988988899999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999929999999999999999999999989999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999998999899999992999999299999999999999999999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999899999992999999299999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989998999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999998999999999299992999999999999999999999998999999989999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998988889998999999999299929999999999999999999999998999999988999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888889998999999999299929999999999999999999999998999999988999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999998999999999299922999999999999999999999998999999989899999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999989999999999299992299999999999999999999999899999899989999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999899999999999299999229999999999999999999999899999899998899999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999998999999999999299999922999999999999999999999899999899999988999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999889999999999999299999992999999999999999999999899998999999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999989999999999899999999999929999999299999999999999999999989999899999998999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999989999999999899999999999929999999299999999999999999999989998999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999998999999999989999999999929999999299999999999999999999998998999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998999999999899999999999299999992999999999999999999999998899999998999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998999999988999999999999299999992999999999992999999999999999999989999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999998999988999999999999992999999929999999999929999999999999999999899999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988889999999999999992299899992999999999992999999999999999999989999999989999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899929999999999929999999999999999999899999999899999999899998899ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999999899889899cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999989992999999999992999999999999999999899999999899999999998999989899ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899992999999999929999999999999988889999999998999999999998999998999ccccc999cccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999999999999999999299999899929999999999929999999999999999999999999899999999999998999989999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998899999999999999992999999899929999999999929999999999999999999999999989999999999999889899999999ddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999998999999999999999299999988992999999999992999999999999999999999999999899999999999999889999999dddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999998899999999999992999999989929999999999929999999999999999999999999999899999999999999999999dddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998888899999999889999999999299999999899299999999999299999999999999999999999999999899999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998989989999999998999999999299999999992999999999999299999999999999999999999999999988999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898989999999999989999999929999999999299999999999929999999998999999999999999999999988999999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898899999999999999999999929999999999299999999999929999999999899999999999999999999999888999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999992999999999999992999999999989999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999929999999999999992999999999998999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888888899999999999299999999299999999999999992999999999999999999998888888999989998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999989999999999299999999299999999999999929999999999999999999999899999888889998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999992299999999998992229999999999999999999999989989999999998999999999ddddddddddddcccccccccc7ccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999922999999999998929999999999999999999999999998999999999998999999999ddddddddddddccccccc7c77ccccccccccccccccccccccccccccccccccccc
            9999899999888999998999999999922299299999999999998929999999999999999999999999999889999999998999999999ddddddddddddccccccc777cccccccccccccccc66666ccccccccccccccccc
            9999898888989999998999999999999299299999999989998929999999999999999999999999999998999999998999999999ddddddddddddccccccc449cccccccc6666666666666cccc66ccccccccccc
            9999889999998999989999999999999299299999999989998929999999999999999999999999999999899999989999999999ddddddddddddccccccc244ccccc66666666666666666666666666ccccccc
            9999999999999889899999999999999299299999999998998929999999998999998999988899999999988888899999999999ddddddddddddccccccc525cccccc666666666666666666666666666ccccc
            9999999999999998999999999999992999299999999999888929999999999899988888899988899999999999999999999999ddddddddddddccccccc552cccc66666666666666666666666666666666cc
            99999999999999999999999999999229992299999999999999929999999998988999999999999889999999999999999999999dddddddddddccccccc9c9c6666666666666666666666666666666666666
            99999999999999999999999999992299999299999999999999929999999999899999999999999998999999999999999999999dddddddddddcccccc666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999992999999999999999999999999999999999999999999999999999dddddddddc66666666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999999299999999999999999999999999999999999999999999999999999dddddd666666666666666666666666666666666666666666666666
            `,img`
            9999999999999999999999999999999999999999999999999999999999999999999299299999999929999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999999299299999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999992999229999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999998899999999999999992999929999992999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999999999999999999999999999999988899999999999999992999929999922999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999999999999999999999999999999888899899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999999989999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999998899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999899999988889999999999998999999999999988899888999999999999229992299999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999988999899998899999999998999988899999989999999888899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999898999999988888888998999989988999899999999998899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999999999999999899999998998999999999889999999992999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999998999899999998999999999999899999989989999999988999999999929999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999988889899999998999999999999899999989988888888899999999999929999992999999299999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899998889999998999999999999989999899999999999988899999999929999992999999229999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999899999999999998998999998888898899988999999929999992999999929999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999989999999999998998999989999899999999889999929999992999999929999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999899999999998999998889999889999899999899999999998999992999992999999992999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999899889999999999988888889988899999998888889999999999998999929999929999999992999992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999988999999999999989999999999999999998999999999999999988999929999929999999992999992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999989999999999999999989999999999999998899999922999929999999999299992999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999988999999999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999899889999999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999989999899999999999889988999998899999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888999999989999899999999999998899899999989999999999929999299999999992999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998889998999999999999899999999998899998999999989999999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999889999999999989999999999999998999999998999999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999988889999999989999999999999998999999999899999999299992999999999929999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999989999999999999998999999999989999999299929999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999998999999999998999999299929999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999998889999999999999999999999999998999999999998999922299229999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999889998999999999999999999999999989999999999999999229999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999998999999999999999999999999989999999999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989999998999999999999999999999999899999998999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999998999999998999999998999999999999989999998889999999992999992999999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999889999989998999999999889999999999989999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999998998889998998999999999989999999999899999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989998989998999889999999999989999999999899999989998899999992999999229999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998998999899988999999999889999999988899999998888998889999299999992999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998989999899989999999999899999999999999999998998899889999299999992999999999299992299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999899999899989999999999899999999999999999998999999899999929999992999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888888889899999999999998899999999999999999998999998999999929999992999999999999999229999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989899999999999998999999999999999999998889888888899922999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988899999999999989999999998999999999999988899999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999999999999989899999999899999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999988999999999989999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999998899999999999999999999992999922999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999899999999999999999999922999929999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999299999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999998888889999929999999999999999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999999999999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999988899999999999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999999988899999999999999999999999998999989999299999999899988999999992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999889999999999999999999988899999999999999999999998899989999299999999899999899999992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999988999999999999999999989899989999299999998999999899999929999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999998899999999999929999989899989999299999998999999899999299999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999998999999989989999999999999929999899899989999299999999899999989999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999889999988899999999999999929999899899989999299999999989999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99989999888899999999998899899999999999999999929999899988989999229999999998999998899999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999988999999999999999999229999899999889999929999999999899989999999989999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999989999999999999999999999999999999299999899999998899992999999999899899999998899999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999999999999999999999992999999899999998888999999999999999889999989999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999998999999999999999999999999999999992999999899999899988889999999999999989998899999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888889999999999999999999999999999999992999999899999899999999999999999999998889999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999999999929999999899999899999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299999999992999999989999989999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999299999999992999999998888998888899999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999998889999999999299999999922999999999999888899988888999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999888999999929999999992999999999999999998899999899999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999998999999929999999929999999999999999999988988899999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999929999999999999999999999989999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999998999899999992999999299999999999999999999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999899999992999999299999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989998999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999998999999999299992999999999999999999999998999999989999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998988889998999999999299929999999999999999999999998999999988999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888889998999999999299929999999999999999999999998999999988999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999998999999999299922999999999999999999999998999999989899999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999989999999999299992299999999999999999999999899999899989999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999899999999999299999229999999999999999999999899999899998899999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999998999999999999299999922999999999999999999999899999899999988999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999889999999999999299999992999999999999999999999899998999999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999989999999999899999999999929999999299999999999999999999989999899999998999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999989999999999899999999999929999999299999999999999999999989998999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999998999999999989999999999929999999299999999999999999999998998999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998999999999899999999999299999992999999999999999999999998899999998999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998999999988999999999999299999992999999999992999999999999999999989999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999998999988999999999999992999999929999999999929999999999999999999899999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988889999999999999992299899992999999999992999999999999999999989999999989999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899929999999999929999999999999999999899999999899999999899998899ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999999899889899cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999989992999999999992999999999999999999899999999899999999998999989899ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899992999999999929999999999999988889999999998999999999998999998999ccccc999cccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999999999999999999299999899929999999999929999999999999999999999999899999999999998999989999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998899999999999999992999999899929999999999929999999999999999999999999989999999999999889899999999ddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999998999999999999999299999988992999999999992999999999999999999999999999899999999999999889999999dddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999998899999999999992999999989929999999999929999999999999999999999999999899999999999999999999dddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998888899999999889999999999299999999899299999999999299999999999999999999999999999899999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998989989999999998999999999299999999992999999999999299999999999999999999999999999988999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898989999999999989999999929999999999299999999999929999999998999999999999999999999988999999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898899999999999999999999929999999999299999999999929999999999899999999999999999999999888999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999992999999999999992999999999989999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999929999999999999992999999999998999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888888899999999999299999999299999999999999992999999999999999999998888888999989998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999989999999999299999999299999999999999929999999999999999999999899999888889998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999992299999999998992229999999999999999999999989989999999998999999999ddddddddddddcccccccccc7ccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999922999999999998929999999999999999999999999998999999999998999999999ddddddddddddccccccc7c77ccccccccccccccccccccccccccccccccccccc
            9999899999888999998999999999922299299999999999998929999999999999999999999999999889999999998999999999ddddddddddddccccccc777cccccccccccccccc66666ccccccccccccccccc
            9999898888989999998999999999999299299999999989998929999999999999999999999999999998999999998999999999ddddddddddddccccccc449cccccccc6666666666666cccc66ccccccccccc
            9999889999998999989999999999999299299999999989998929999999999999999999999999999999899999989999999999ddddddddddddccccccc244ccccc66666666666666666666666666ccccccc
            9999999999999889899999999999999299299999999998998929999999998999998999988899999999988888899999999999ddddddddddddccccccc525cccccc666666666666666666666666666ccccc
            9999999999999998999999999999992999299999999999888929999999999899988888899988899999999999999999999999ddddddddddddccccccc552cccc66666666666666666666666666666666cc
            99999999999999999999999999999229992299999999999999929999999998988999999999999889999999999999999999999dddddddddddccccccc9c9c6666666666666666666666666666666666666
            99999999999999999999999999992299999299999999999999929999999999899999999999999998999999999999999999999dddddddddddcccccc666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999992999999999999999999999999999999999999999999999999999dddddddddc66666666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999999299999999999999999999999999999999999999999999999999999dddddd666666666666666666666666666666666666666666666666
            `,img`
            9999999999999999999999999999999999999999999999999999999999999999999299299999999929999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999999299299999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999992999229999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999998899999999999999992999929999992999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999999999999999999999999999999988899999999999999992999929999922999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999999999999999999999999999999888899899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999999989999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999998899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999899999988889999999999998999999999999988899888999999999999229992299999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999988999899998899999999998999988899999989999999888899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999898999999988888888998999989988999899999999998899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999999999999999899999998998999999999889999999992999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999998999899999998999999999999899999989989999999988999999999929999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998888989999999899999999999989999998998888888889999999999992999999299999929999999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999988899999989999999999999899998999999999999888999999999299999929999992299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999899999998999999999999989989999988888988999889999999299999929999999299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999989999999999998998999989999899999999889999929999992999999929999999299ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999989999999999899999888999988999989999989999999999899999299999299999999299999929cccc999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998998899999999999888888899888999999988888899999999999989999299999299999999929999929ccc999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999889999999999999899999999999999999989999999999999999889999299999299999999929999929cc99999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999999999999988999999229999299999999992999929cc999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999988999999999999999929999299999999992999929cc9999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999899889999999999999929999299999999992999929cc9999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999989999899999999999889988999998899999999999929999299999999992999929cc99999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888999999989999899999999999998899899999989999999999929999299999999992999929cc999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999888999899999999999989999999999889999899999998999999999929999299999999992999929ccc99999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999988999999999998999999999999999899999999899999999929999299999999992999929ccc999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999998888999999998999999999999999899999999989999999929999299999999992999929c9cc99999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999899999999999999989999999999899999992999299999999992999992999cc99999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999989999999999989999992999299999999992999929999cc9999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999988899999999999999999999999999989999999999989999222992299999999992999929999ccc999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999988999899999999999999999999999998999999999999999922999929999999999929999299999cccc9999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999998999999999999999999999999989999999999999999299999299999999999299992999999ccccc999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998999999899999999999999999999999989999999899999999929999929999999999929999299999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999899999999899999999999998999999888999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999889999989998999999999889999999999989999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999998998889998998999999999989999999999899999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989998989998999889999999999989999999999899999989998899999992999999229999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998998999899988999999999889999999988899999998888998889999299999992999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998989999899989999999999899999999999999999998998899889999299999992999999999299992299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999899999899989999999999899999999999999999998999999899999929999992999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888888889899999999999998899999999999999999998999998999999929999992999999999999999229999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989899999999999998999999999999999999998889888888899922999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988899999999999989999999998999999999999988899999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999999999999989899999999899999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999988999999999989999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999998899999999999999999999992999922999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999899999999999999999999922999929999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999999999999999299992999999999999999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999992999999999999999999999992999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999988888899999299999999999999999999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999999999999999999299999ccccc999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999988899999999999299999ccc999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999999988899999999999999999999999998999989999299999999899988999999992999999cc999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999889999999999999999999988899999999999999999999998899989999299999999899999899999992999999cc999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999988999999999999999999989899989999299999998999999899999929999999cc9999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999998899999999999929999989899989999299999998999999899999299999999cc9999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999899899999999999999299998998999899992999999998999999899999999999999c9999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989999999999999998899999888999999999999999299998998999899992999999999899999989999999999999c9999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999899998888999999999988998999999999999999999299998999889899992299999999989999988999999999999c9999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999988999999999999999999229999899999889999929999999999899989999999989999999c99999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999989999999999999999999999999999999299999899999998899992999999999899899999998899999999cc999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999999999999999999999992999999899999998888999999999999999889999989999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999998999999999999999999999999999999992999999899999899988889999999999999989998899999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888889999999999999999999999999999999992999999899999899999999999999999999998889999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999999999929999999899999899999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299999999992999999989999989999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999992999999999929999999988889988888999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999998889999999999299999999922999999999999888899988888999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999888999999929999999992999999999999999998899999899999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999992999999999999999999998898889999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999929999999999999999999999989999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999998999899999992999999299999999999999999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999899999992999999299999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989998999999899999999299992999999999999999999999989999999999999999999999999999c999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999c99999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999c999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999998999999999299992999999999999999999999998999999989999999999999999999c9999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998988889998999999999299929999999999999999999999998999999988999999999999999999cc999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888889998999999999299929999999999999999999999998999999988999999999999999999ccc999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999989999999992999229999999999999999999999989999999898999999999999999999cccc9999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999998999999999929999229999999999999999999999989999989998999999999999999999cccc9999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999999929999922999999999999999999999989999989999889999999999999999cccc9999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999998999999999999299999922999999999999999999999899999899999988999999999999999cccc999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999889999999999999299999992999999999999999999999899998999999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999989999999999899999999999929999999299999999999999999999989999899999998999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999989999999999899999999999929999999299999999999999999999989998999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999998999999999989999999999929999999299999999999999999999998998999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999899999999989999999999929999999299999999999999999999999889999999899999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999998999999988999999999999299999992999999999992999999999999999999989999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899998899999999999999299999992999999999992999999999999999999989999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998888999999999999999229989999299999999999299999999999999999998999999998999999999999c99999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999998999ccc99999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899929999999999929999999999999999999899999999899999999989999ccc999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999989999999989999999999899999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899992999999999929999999999999988889999999998999999999998999999999ccccc999cccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999999999999999999299999899929999999999929999999999999999999999999899999999999998999989999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998899999999999999992999999899929999999999929999999999999999999999999989999999999999889899999999ddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999998999999999999999299999988992999999999992999999999999999999999999999899999999999999889999999dddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999998899999999999992999999989929999999999929999999999999999999999999999899999999999999999999dddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998888899999999889999999999299999999899299999999999299999999999999999999999999999899999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998989989999999998999999999299999999992999999999999299999999999999999999999999999988999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898989999999999989999999929999999999299999999999929999999998999999999999999999999988999999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898899999999999999999999929999999999299999999999929999999999899999999999999999999999888999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999992999999999999992999999999989999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999929999999999999992999999999998999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888888899999999999299999999299999999999999992999999999999999999998888888999989998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999989999999999299999999299999999999999929999999999999999999999899999888889998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999992299999999998992229999999999999999999999989989999999998999999999ddddddddddddcccccc7ccccccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999922999999999998929999999999999999999999999998999999999998999999999ddddddddddddcccccc77c7cccccccccccccccccccccccccccccccccccccc
            9999899999888999998999999999922299299999999999998929999999999999999999999999999889999999998999999999ddddddddddddccccccc777cccccccccccccccc66666ccccccccccccccccc
            9999898888989999998999999999999299299999999989998929999999999999999999999999999998999999998999999999ddddddddddddccccccc944cccccccc6666666666666cccc66ccccccccccc
            9999889999998999989999999999999299299999999989998929999999999999999999999999999999899999989999999999ddddddddddddccccccc442ccccc66666666666666666666666666ccccccc
            9999999999999889899999999999999299299999999998998929999999998999998999988899999999988888899999999999ddddddddddddccccccc525cccccc666666666666666666666666666ccccc
            9999999999999998999999999999992999299999999999888929999999999899988888899988899999999999999999999999ddddddddddddccccccc255cccc66666666666666666666666666666666cc
            99999999999999999999999999999229992299999999999999929999999998988999999999999889999999999999999999999dddddddddddccccccc9c9c6666666666666666666666666666666666666
            99999999999999999999999999992299999299999999999999929999999999899999999999999998999999999999999999999dddddddddddcccccc666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999992999999999999999999999999999999999999999999999999999dddddddddc66666666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999999299999999999999999999999999999999999999999999999999999dddddd666666666666666666666666666666666666666666666666
            `,img`
            9999999999999999999999999999999999999999999999999999999999999999999299299999999929999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999999299299999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999992999229999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999998899999999999999992999929999992999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999999999999999999999999999999988899999999999999992999929999922999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999999999999999999999999999999888899899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999999989999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999998899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999899999988889999999999998999999999999988899888999999999999229992299999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999988999899998899999999998999988899999989999999888899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999898999999988888888998999989988999899999999998899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999999999999999899999998998999999999889999999992999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999998999899999998999999999999899999989989999999988999999999929999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998888989999999899999999999989999998998888888889999999999992999999299999929999999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999988899999989999999999999899998999999999999888999999999299999929999992299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999899999998999999999999989989999988888988999889999999299999929999999299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999989999999999998998999989999899999999889999929999992999999929999999299ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999989999999999899999888999988999989999989999999999899999299999299999999299999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998998899999999999888888899888999999988888899999999999989999299999299999999929999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999889999999999999899999999999999999989999999999999999889999299999299999999929999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999999999999988999999229999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999988999999999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999899889999999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999989999899999999999889988999998899999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888999999989999899999999999998899899999989999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999888999899999999999989999999999889999899999998999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999988999999999998999999999999999899999999899999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999998888999999998999999999999999899999999989999999929999299999999992999929c9cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999899999999999999989999999999899999992999299999999992999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999989999999999989999992999299999999992999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999988899999999999999999999999999989999999999989999222992299999999992999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999988999899999999999999999999999998999999999999999922999929999999999929999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999899999899999999999999999999999998999999999999999929999929999999999929999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998999999899999999999999999999999989999999899999999929999929999999999929999299999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999899999999899999999999998999999888999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999889999989998999999999889999999999989999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999998998889998998999999999989999999999899999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989998989998999889999999999989999999999899999989998899999992999999229999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998998999899988999999999889999999988899999998888998889999299999992999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998989999899989999999999899999999999999999998998899889999299999992999999999299992299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999899999899989999999999899999999999999999998999999899999929999992999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888888889899999999999998899999999999999999998999998999999929999992999999999999999229999999ccccccccc999999cccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989899999999999998999999999999999999998889888888899922999992999999999999999929999999cccccccc999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988899999999999989999999998999999999999988899999999992999992999999999999999929999999ccccccc99999999999ccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999999999999989899999999899999999999999999999999992999992999999999999999929999999ccccccc999999999999cccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999988999999999989999999999999999999999992999992999999999999999929999999ccccccc9999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999998899999999999999999999992999922999999999999999929999999ccccccc9999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999899999999999999999999922999929999999999999999929999999ccccccc99999999999999cccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999999999999999299992999999999999999999299999ccccccccc999999999999999ccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999ccccccccccc99999999999999ccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999992999999999999999999999992999cccccccccccc999999999999999cccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999988888899999299999999999999999999992999cccccccccccccc99999999999999cccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999999999999999999299999cccccccccccc99999999999999cccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999988899999999999299999cccccccccccc9999999999999ccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999999988899999999999999999999999998999989999299999999899988999999992999999ccccccccccccc999999999999ccccccccccccccccccccccccccccccccccccccccccc
            99999889999999999999999999988899999999999999999999998899989999299999999899999899999992999999ccccccccccccccc9999999999ccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999988999999999999999999989899989999299999998999999899999929999999ccccccccccccccccc999999ccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999998899999999999929999989899989999299999998999999899999299999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999899899999999999999299998998999899992999999998999999899999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989999999999999998899999888999999999999999299998998999899992999999999899999989999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999899998888999999999988998999999999999999999299998999889899992299999999989999988999999999999c9ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999988999999999999999999229999899999889999929999999999899989999999989999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999989999999999999999999999999999999299999899999998899992999999999899899999998899999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999999999999999999999992999999899999998888999999999999999889999989999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999998999999999999999999999999999999992999999899999899988889999999999999989998899999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888889999999999999999999999999999999992999999899999899999999999999999999998889999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999999999929999999899999899999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299999999992999999989999989999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999992999999999929999999988889988888999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999998889999999999299999999922999999999999888899988888999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999888999999929999999992999999999999999998899999899999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999992999999999999999999998898889999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999929999999999999999999999989999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999998999899999992999999299999999999999999999999999999999999999999999999999ccccccccccccccccc999cccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999899999992999999299999999999999999999989999999999999999999999999999ccccccccccccccc999999ccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989998999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccc999999999ccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccc999999999ccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccc9999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999998999999999299992999999999999999999999998999999989999999999999999999cccccccccccccc9999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998988889998999999999299929999999999999999999999998999999988999999999999999999cccccccccccccc9999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888889998999999999299929999999999999999999999998999999988999999999999999999cccccccccccccc9999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999989999999992999229999999999999999999999989999999898999999999999999999cccccccccccccc999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999998999999999929999229999999999999999999999989999989998999999999999999999cccccccccccccc99999999cccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999999929999922999999999999999999999989999989999889999999999999999ccccccccccccccc999999ccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999998999999999999299999922999999999999999999999899999899999988999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999889999999999999299999992999999999999999999999899998999999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999989999999999899999999999929999999299999999999999999999989999899999998999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999989999999999899999999999929999999299999999999999999999989998999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999998999999999989999999999929999999299999999999999999999998998999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999899999999989999999999929999999299999999999999999999999889999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999899999998899999999999929999999299999999999299999999999999999998999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999999999999929999999299999999999299999999999999999998999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998888999999999999999229989999299999999999299999999999999999998999999998999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999998999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999999899cccccccc999999cccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999989999999989999999999899999ccccc9999999ccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999929999999999299999999999999888899999999989999999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999999999999999999299999899929999999999929999999999999999999999999899999999999998999989999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988999999999999999929999998999299999999999299999999999999999999999999899999999999998898999999999999ddcccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999998999999999999999299999988992999999999992999999999999999999999999999899999999999999889999999dd999ddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999998899999999999992999999989929999999999929999999999999999999999999999899999999999999999999dd9ddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998888899999999889999999999299999999899299999999999299999999999999999999999999999899999999999999999dd9d9ddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998989989999999998999999999299999999992999999999999299999999999999999999999999999988999999999999999dd999ddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898989999999999989999999929999999999299999999999929999999998999999999999999999999988999999999999ddd9999dddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898899999999999999999999929999999999299999999999929999999999899999999999999999999999888999999999dd999999ddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999992999999999999992999999999989999999999999999999999998999999999dd999999ddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999929999999999999992999999999998999999999999999999999998999999999ddd999999dddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888888899999999999299999999299999999999999992999999999999999999998888888999989998999999999ddd9999999ddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999989999999999299999999299999999999999929999999999999999999999899999888889998999999999ddd9999999ddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999992299999999998992229999999999999999999999989989999999998999999999dddd999999ddcccccc7ccccccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999922999999999998929999999999999999999999999998999999999998999999999dddd9999ddddcccccc77c7cccccccccccccccccccccccccccccccccccccc
            9999899999888999998999999999922299299999999999998929999999999999999999999999999889999999998999999999dddd9999ddddccccccc777cccccccccccccccc66666ccccccccccccccccc
            9999898888989999998999999999999299299999999989998929999999999999999999999999999998999999998999999999dddd9999ddddccccccc944cccccccc6666666666666cccc66ccccccccccc
            9999889999998999989999999999999299299999999989998929999999999999999999999999999999899999989999999999ddddd999ddddccccccc442ccccc66666666666666666666666666ccccccc
            9999999999999889899999999999999299299999999998998929999999998999998999988899999999988888899999999999dddddd99ddddccccccc525cccccc666666666666666666666666666ccccc
            9999999999999998999999999999992999299999999999888929999999999899988888899988899999999999999999999999ddddddd9ddddccccccc255cccc66666666666666666666666666666666cc
            99999999999999999999999999999229992299999999999999929999999998988999999999999889999999999999999999999dddddddddddccccccc9c9c6666666666666666666666666666666666666
            99999999999999999999999999992299999299999999999999929999999999899999999999999998999999999999999999999dddddddddddcccccc666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999992999999999999999999999999999999999999999999999999999dddddddddc66666666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999999299999999999999999999999999999999999999999999999999999dddddd666666666666666666666666666666666666666666666666
            `,img`
            9999999999999999999999999999999999999999999999999999999999999999999299299999999929999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999999299299999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999992999229999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999998899999999999999992999929999992999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999999999999999999999999999999988899999999999999992999929999922999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999999999999999999999999999999888899899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999999989999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999998899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999899999988889999999999998999999999999988899888999999999999229992299999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999988999899998899999999998999988899999989999999888899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999898999999988888888998999989988999899999999998899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999999999999999899999998998999999999889999999992999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999998999899999998999999999999899999989989999999988999999999929999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998888989999999899999999999989999998998888888889999999999992999999299999929999999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999988899999989999999999999899998999999999999888999999999299999929999992299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999899999998999999999999989989999988888988999889999999299999929999999299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999989999999999998998999989999899999999889999929999992999999929999999299ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999989999999999899999888999988999989999989999999999899999299999299999999299999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998998899999999999888888899888999999988888899999999999989999299999299999999929999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999889999999999999899999999999999999989999999999999999889999299999299999999929999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999999999999988999999229999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999988999999999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999899889999999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999989999899999999999889988999998899999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888999999989999899999999999998899899999989999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999888999899999999999989999999999889999899999998999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999988999999999998999999999999999899999999899999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999998888999999998999999999999999899999999989999999929999299999999992999929c9cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999899999999999999989999999999899999992999299999999992999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999989999999999989999992999299999999992999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999988899999999999999999999999999989999999999989999222992299999999992999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999988999899999999999999999999999998999999999999999922999929999999999929999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999899999899999999999999999999999998999999999999999929999929999999999929999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998999999899999999999999999999999989999999899999999929999929999999999929999299999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999899999999899999999999998999999888999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999889999989998999999999889999999999989999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999998998889998998999999999989999999999899999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989998989998999889999999999989999999999899999989998899999992999999229999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998998999899988999999999889999999988899999998888998889999299999992999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998989999899989999999999899999999999999999998998899889999299999992999999999299992299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999899999899989999999999899999999999999999998999999899999929999992999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888888889899999999999998899999999999999999998999998999999929999992999999999999999229999999ccccccccc999999cccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989899999999999998999999999999999999998889888888899922999992999999999999999929999999cccccccc999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988899999999999989999999998999999999999988899999999992999992999999999999999929999999ccccccc99999999999ccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999999999999989899999999899999999999999999999999992999992999999999999999929999999ccccccc999999999999cccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999988999999999989999999999999999999999992999992999999999999999929999999ccccccc9999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999998899999999999999999999992999922999999999999999929999999ccccccc9999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999899999999999999999999922999929999999999999999929999999ccccccc99999999999999cccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999999999999999299992999999999999999999299999ccccccccc999999999999999ccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999ccccccccccc99999999999999ccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999992999999999999999999999992999cccccccccccc999999999999999cccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999988888899999299999999999999999999992999cccccccccccccc99999999999999cccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999999999999999999299999cccccccccccc99999999999999cccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999988899999999999299999cccccccccccc9999999999999ccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999999988899999999999999999999999998999989999299999999899988999999992999999ccccccccccccc999999999999ccccccccccccccccccccccccccccccccccccccccccc
            99999889999999999999999999988899999999999999999999998899989999299999999899999899999992999999ccccccccccccccc9999999999ccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999988999999999999999999989899989999299999998999999899999929999999ccccccccccccccccc999999ccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999998899999999999929999989899989999299999998999999899999299999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999899899999999999999299998998999899992999999998999999899999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989999999999999998899999888999999999999999299998998999899992999999999899999989999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999899998888999999999988998999999999999999999299998999889899992299999999989999988999999999999c9ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999988999999999999999999229999899999889999929999999999899989999999989999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999989999999999999999999999999999999299999899999998899992999999999899899999998899999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999999999999999999999992999999899999998888999999999999999889999989999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999998999999999999999999999999999999992999999899999899988889999999999999989998899999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888889999999999999999999999999999999992999999899999899999999999999999999998889999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999999999929999999899999899999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299999999992999999989999989999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999992999999999929999999988889988888999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999998889999999999299999999922999999999999888899988888999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999888999999929999999992999999999999999998899999899999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999992999999999999999999998898889999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999929999999999999999999999989999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999998999899999992999999299999999999999999999999999999999999999999999999999ccccccccccccccccc999cccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999899999992999999299999999999999999999989999999999999999999999999999ccccccccccccccc999999ccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989998999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccc999999999ccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccc999999999ccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccc9999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999998999999999299992999999999999999999999998999999989999999999999999999cccccccccccccc9999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998988889998999999999299929999999999999999999999998999999988999999999999999999cccccccccccccc9999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888889998999999999299929999999999999999999999998999999988999999999999999999cccccccccccccc9999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999989999999992999229999999999999999999999989999999898999999999999999999cccccccccccccc999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999998999999999929999229999999999999999999999989999989998999999999999999999cccccccccccccc99999999cccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999999929999922999999999999999999999989999989999889999999999999999ccccccccccccccc999999ccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999998999999999999299999922999999999999999999999899999899999988999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999889999999999999299999992999999999999999999999899998999999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999989999999999899999999999929999999299999999999999999999989999899999998999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999989999999999899999999999929999999299999999999999999999989998999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999998999999999989999999999929999999299999999999999999999998998999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999899999999989999999999929999999299999999999999999999999889999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999899999998899999999999929999999299999999999299999999999999999998999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999999999999929999999299999999999299999999999999999998999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998888999999999999999229989999299999999999299999999999999999998999999998999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999998999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999999899cccccccc999999cccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999989999999989999999999899999ccccc9999999ccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999929999999999299999999999999888899999999989999999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999999999999999999299999899929999999999929999999999999999999999999899999999999998999989999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988999999999999999929999998999299999999999299999999999999999999999999899999999999998898999999999999ddcccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999998999999999999999299999988992999999999992999999999999999999999999999899999999999999889999999dd999ddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999998899999999999992999999989929999999999929999999999999999999999999999899999999999999999999dd9ddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998888899999999889999999999299999999899299999999999299999999999999999999999999999899999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998989989999999998999999999299999999992999999999999299999999999999999999999999999988999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898989999999999989999999929999999999299999999999929999999998999999999999999999999988999999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898899999999999999999999929999999999299999999999929999999999899999999999999999999999888999999999dddddddd9dddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999992999999999999992999999999989999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999929999999999999992999999999998999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888888899999999999299999999299999999999999992999999999999999999998888888999989998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999989999999999299999999299999999999999929999999999999999999999899999888889998999999999dddddd9dddddcccccccccccccccccccccccccccccccccccccccccccccccc
            999989999999999999899999999992999999229999999999899222999999999999999999999998998999999999899999999999ddddddddddcccccc7ccccccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999922999999999998929999999999999999999999999998999999999998999999999999dddddddddcccccc77c7cccccccccccccccccccccccccccccccccccccc
            999989999988899999899999999992229929999999999999892999999999999999999999999999988999999999899999999999999dddddddccccccc777cccccccccccccccc66666ccccccccccccccccc
            999989888898999999899999999999929929999999998999892999999999999999999999999999999899999999899999999999999dddddddccccccc944cccccccc6666666666666cccc66ccccccccccc
            999988999999899998999999999999929929999999998999892999999999999999999999999999999989999998999999999999999999ddddccccccc442ccccc66666666666666666666666666ccccccc
            9999999999999889899999999999999299299999999998998929999999998999998999988899999999988888899999999999999999999dddccccccc525cccccc666666666666666666666666666ccccc
            9999999999999998999999999999992999299999999999888929999999999899988888899988899999999999999999999999999999999dddccccccc255cccc66666666666666666666666666666666cc
            99999999999999999999999999999229992299999999999999929999999998988999999999999889999999999999999999999999999999ddccccccc9c9c6666666666666666666666666666666666666
            99999999999999999999999999992299999299999999999999929999999999899999999999999998999999999999999999999999999999ddcccccc666666666666666666666666666666666666666666
            999999999999999999999999999929999992999999999999999299999999999999999999999999999999999999999999999999999999999dc66666666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999999299999999999999999999999999999999999999999999999999999999999666666666666666666666666666666666666666666666666
            `,img`
            9999999999999999999999999999999999999999999999999999999999999999999299299999999929999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999999299299999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999992999229999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999998899999999999999992999929999992999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999999999999999999999999999999988899999999999999992999929999922999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999999999999999999999999999999888899899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999999989999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999998899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999899999988889999999999998999999999999988899888999999999999229992299999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999988999899998899999999998999988899999989999999888899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999898999999988888888998999989988999899999999998899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999999999999999899999998998999999999889999999992999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999998999899999998999999999999899999989989999999988999999999929999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998888989999999899999999999989999998998888888889999999999992999999299999929999999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999988899999989999999999999899998999999999999888999999999299999929999992299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999899999998999999999999989989999988888988999889999999299999929999999299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999989999999999998998999989999899999999889999929999992999999929999999299ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999989999999999899999888999988999989999989999999999899999299999299999999299999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998998899999999999888888899888999999988888899999999999989999299999299999999929999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999889999999999999899999999999999999989999999999999999889999299999299999999929999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999999999999988999999229999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999988999999999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999899889999999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999989999899999999999889988999998899999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888999999989999899999999999998899899999989999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999888999899999999999989999999999889999899999998999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999988999999999998999999999999999899999999899999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999998888999999998999999999999999899999999989999999929999299999999992999929c9cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999899999999999999989999999999899999992999299999999992999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999989999999999989999992999299999999992999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999988899999999999999999999999999989999999999989999222992299999999992999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999988999899999999999999999999999998999999999999999922999929999999999929999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999899999899999999999999999999999998999999999999999929999929999999999929999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998999999899999999999999999999999989999999899999999929999929999999999929999299999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999899999999899999999999998999999888999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999889999989998999999999889999999999989999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999998998889998998999999999989999999999899999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989998989998999889999999999989999999999899999989998899999992999999229999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998998999899988999999999889999999988899999998888998889999299999992999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998989999899989999999999899999999999999999998998899889999299999992999999999299992299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999899999899989999999999899999999999999999998999999899999929999992999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888888889899999999999998899999999999999999998999998999999929999992999999999999999229999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989899999999999998999999999999999999998889888888899922999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988899999999999989999999998999999999999988899999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999999999999989899999999899999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999988999999999989999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999998899999999999999999999992999922999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999899999999999999999999922999929999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999999999999999299992999999999999999999299999cccccccccccccc999999ccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999cccccccccccccc999999999ccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999992999999999999999999999992999cccccccccccccc99999999999cccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999988888899999299999999999999999999992999ccccccccccccccc999999999999ccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999999999999999999299999ccccccccccccc9999999999999cccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999988899999999999299999ccccccccccccc9999999999999cccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999999988899999999999999999999999998999989999299999999899988999999992999999ccccccccccccc99999999999999ccccccccccccccccccccccccccccccccccccccccc
            99999889999999999999999999988899999999999999999999998899989999299999999899999899999992999999ccccccccccccc999999999999999cccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999988999999999999999999989899989999299999998999999899999929999999cccccccccccccc99999999999999cccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999998899999999999929999989899989999299999998999999899999299999999cccccccccccccc999999999999999ccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999899899999999999999299998998999899992999999998999999899999999999999cccccccccccccc99999999999999ccccccccccccccccccccccccccccccccccccccc
            999989999999999999998899999888999999999999999299998998999899992999999999899999989999999999999cccccccccccccc99999999999999ccccccccccccccccccccccccccccccccccccccc
            999899998888999999999988998999999999999999999299998999889899992299999999989999988999999999999c9cccccccccccc9999999999999cccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999988999999999999999999229999899999889999929999999999899989999999989999999ccccccccccccc999999999999cccccccccccccccccccccccccccccccccccccccc
            99998999999989999999999999999999999999999999299999899999998899992999999999899899999998899999999ccccccccccccccc9999999999cccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999999999999999999999992999999899999998888999999999999999889999989999999999ccccccccccccccccc999999cccccccccccccccccccccccccccccccccccccccccc
            99998999998999999999999999999999999999999992999999899999899988889999999999999989998899999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888889999999999999999999999999999999992999999899999899999999999999999999998889999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999999999929999999899999899999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299999999992999999989999989999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999992999999999929999999988889988888999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999998889999999999299999999922999999999999888899988888999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999888999999929999999992999999999999999998899999899999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999992999999999999999999998898889999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999929999999999999999999999989999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999998999899999992999999299999999999999999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999899999992999999299999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989998999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999998999999999299992999999999999999999999998999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998988889998999999999299929999999999999999999999998999999988999999999999999999cccccccccccccccccc999ccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888889998999999999299929999999999999999999999998999999988999999999999999999cccccccccccccccc999999cccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999989999999992999229999999999999999999999989999999898999999999999999999cccccccccccccc999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999998999999999929999229999999999999999999999989999989998999999999999999999ccccccccccccc999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999999929999922999999999999999999999989999989999889999999999999999ccccccccccccc9999999999ccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999998999999999999299999922999999999999999999999899999899999988999999999999999cccccccccccc9999999999ccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999889999999999999299999992999999999999999999999899998999999998999999999999999cccccccccccc9999999999ccccccccccccccccccccccccccccccccccccccccccccccc
            999999989999999999899999999999929999999299999999999999999999989999899999998999999999999999999cccccccccc9999999999ccccccccccccccccccccccccccccccccccccccccccccccc
            9999999989999999999899999999999929999999299999999999999999999989998999999989999999999999999999cccccccccc999999999ccccccccccccccccccccccccccccccccccccccccccccccc
            9999999998999999999989999999999929999999299999999999999999999998998999999899999999999999999999ccccccccccc99999999ccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999899999999989999999999929999999299999999999999999999999889999999899999999999999999999cccccccccccc999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999899999998899999999999929999999299999999999299999999999999999998999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999999999999929999999299999999999299999999999999999998999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998888999999999999999229989999299999999999299999999999999999998999999998999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999998999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999999899cccccccc999999cccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999989999999989999999999899999ccccc9999999ccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999929999999999299999999999999888899999999989999999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999999999999999999299999899929999999999929999999999999999999999999899999999999998999989999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988999999999999999929999998999299999999999299999999999999999999999999899999999999998898999999999999ddcccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999998999999999999999299999988992999999999992999999999999999999999999999899999999999999889999999dd999ddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999998899999999999992999999989929999999999929999999999999999999999999999899999999999999999999dd9ddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998888899999999889999999999299999999899299999999999299999999999999999999999999999899999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998989989999999998999999999299999999992999999999999299999999999999999999999999999988999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898989999999999989999999929999999999299999999999929999999998999999999999999999999988999999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898899999999999999999999929999999999299999999999929999999999899999999999999999999999888999999999dddddddd9dddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999992999999999999992999999999989999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999929999999999999992999999999998999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888888899999999999299999999299999999999999992999999999999999999998888888999989998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999989999999999299999999299999999999999929999999999999999999999899999888889998999999999dddddd9dddddcccccccccccccccccccccccccccccccccccccccccccccccc
            999989999999999999899999999992999999229999999999899222999999999999999999999998998999999999899999999999ddddddddddcccccc7ccccccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999922999999999998929999999999999999999999999998999999999998999999999999dddddddddcccccc77c7cccccccccccccccccccccccccccccccccccccc
            999989999988899999899999999992229929999999999999892999999999999999999999999999988999999999899999999999999dddddddccccccc777cccccccccccccccc66666ccccccccccccccccc
            999989888898999999899999999999929929999999998999892999999999999999999999999999999899999999899999999999999dddddddccccccc944cccccccc6666666666666cccc66ccccccccccc
            999988999999899998999999999999929929999999998999892999999999999999999999999999999989999998999999999999999999ddddccccccc442ccccc66666666666666666666666666ccccccc
            9999999999999889899999999999999299299999999998998929999999998999998999988899999999988888899999999999999999999dddccccccc525cccccc666666666666666666666666666ccccc
            9999999999999998999999999999992999299999999999888929999999999899988888899988899999999999999999999999999999999dddccccccc255cccc66666666666666666666666666666666cc
            99999999999999999999999999999229992299999999999999929999999998988999999999999889999999999999999999999999999999ddccccccc9c9c6666666666666666666666666666666666666
            99999999999999999999999999992299999299999999999999929999999999899999999999999998999999999999999999999999999999ddcccccc666666666666666666666666666666666666666666
            999999999999999999999999999929999992999999999999999299999999999999999999999999999999999999999999999999999999999dc66666666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999999299999999999999999999999999999999999999999999999999999999999666666666666666666666666666666666666666666666666
            `,img`
            9999999999999999999999999999999999999999999999999999999999999999999299299999999929999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999999299299999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999992999229999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999998899999999999999992999929999992999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999999999999999999999999999999988899999999999999992999929999922999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999999999999999999999999999999888899899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999999989999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999998899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999899999988889999999999998999999999999988899888999999999999229992299999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999988999899998899999999998999988899999989999999888899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999898999999988888888998999989988999899999999998899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999999999999999899999998998999999999889999999992999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999998999899999998999999999999899999989989999999988999999999929999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998888989999999899999999999989999998998888888889999999999992999999299999929999999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999988899999989999999999999899998999999999999888999999999299999929999992299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999899999998999999999999989989999988888988999889999999299999929999999299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999989999999999998998999989999899999999889999929999992999999929999999299ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999989999999999899999888999988999989999989999999999899999299999299999999299999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998998899999999999888888899888999999988888899999999999989999299999299999999929999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999889999999999999899999999999999999989999999999999999889999299999299999999929999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999999999999988999999229999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999988999999999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999899889999999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999989999899999999999889988999998899999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888999999989999899999999999998899899999989999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999888999899999999999989999999999889999899999998999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999988999999999998999999999999999899999999899999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999998888999999998999999999999999899999999989999999929999299999999992999929c9cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999899999999999999989999999999899999992999299999999992999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999989999999999989999992999299999999992999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999988899999999999999999999999999989999999999989999222992299999999992999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999988999899999999999999999999999998999999999999999922999929999999999929999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999899999899999999999999999999999998999999999999999929999929999999999929999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998999999899999999999999999999999989999999899999999929999929999999999929999299999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999899999999899999999999998999999888999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999889999989998999999999889999999999989999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999998998889998998999999999989999999999899999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989998989998999889999999999989999999999899999989998899999992999999229999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998998999899988999999999889999999988899999998888998889999299999992999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998989999899989999999999899999999999999999998998899889999299999992999999999299992299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999899999899989999999999899999999999999999998999999899999929999992999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888888889899999999999998899999999999999999998999998999999929999992999999999999999229999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989899999999999998999999999999999999998889888888899922999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988899999999999989999999998999999999999988899999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999999999999989899999999899999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999988999999999989999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999998899999999999999999999992999922999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999899999999999999999999922999929999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999999999999999299992999999999999999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999992999999999999999999999992999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999988888899999299999999999999999999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999999999999999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999988899999999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999999988899999999999999999999999998999989999299999999899988999999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999889999999999999999999988899999999999999999999998899989999299999999899999899999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999988999999999999999999989899989999299999998999999899999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999998899999999999929999989899989999299999998999999899999299999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999899899999999999999299998998999899992999999998999999899999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989999999999999998899999888999999999999999299998998999899992999999999899999989999999999999cccccccccccc999999ccccccccccccccccccccccccccccccccccccccccccccccccc
            999899998888999999999988998999999999999999999299998999889899992299999999989999988999999999999c9ccccccccc999999999ccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999988999999999999999999229999899999889999929999999999899989999999989999999cccccccc99999999999cccccccccccccccccccccccccccccccccccccccccccccc
            99998999999989999999999999999999999999999999299999899999998899992999999999899899999998899999999cccccccc999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999999999999999999999992999999899999998888999999999999999889999989999999999cccccccc9999999999999cccccccccccccccccccccccccccccccccccccccccccc
            99998999998999999999999999999999999999999992999999899999899988889999999999999989998899999999999cccccccc9999999999999cccccccccccccccccccccccccccccccccccccccccccc
            99999888889999999999999999999999999999999992999999899999899999999999999999999998889999999999999cccccccc99999999999999ccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999999999929999999899999899999999999999999999999999999999999999cccccccc999999999999999cccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299999999992999999989999989999999999999999999999999999999999999cccccccccc99999999999999cccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999992999999999929999999988889988888999999999999999999999999999999ccccccccccccc999999999999999ccccccccccccccccccccccccccccccccccccccccc
            999999999999999998889999999999299999999922999999999999888899988888999999999999999999999999ccccccccccccccc99999999999999ccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999888999999929999999992999999999999999998899999899999999999999999999999cccccccccccccccc99999999999999ccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999992999999999999999999998898889999999999999999999999ccccccccccccccccc9999999999999cccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999929999999999999999999999989999999999999999999999999cccccccccccccccccc999999999999cccccccccccccccccccccccccccccccccccccccccc
            9999999999989999998999899999992999999299999999999999999999999999999999999999999999999999cccccccccccccccccccc9999999999cccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999899999992999999299999999999999999999989999999999999999999999999999cccccccccccccccccccccc999999cccccccccccccccccccccccccccccccccccccccccccc
            9999999999989998999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999998999999999299992999999999999999999999998999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998988889998999999999299929999999999999999999999998999999988999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888889998999999999299929999999999999999999999998999999988999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999989999999992999229999999999999999999999989999999898999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999998999999999929999229999999999999999999999989999989998999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999999929999922999999999999999999999989999989999889999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999998999999999999299999922999999999999999999999899999899999988999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999889999999999999299999992999999999999999999999899998999999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999989999999999899999999999929999999299999999999999999999989999899999998999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999989999999999899999999999929999999299999999999999999999989998999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999998999999999989999999999929999999299999999999999999999998998999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999899999999989999999999929999999299999999999999999999999889999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999899999998899999999999929999999299999999999299999999999999999998999999999999999999999cccccccccc999ccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999999999999929999999299999999999299999999999999999998999999999999999999999cccccccc999999cccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998888999999999999999229989999299999999999299999999999999999998999999998999999999999ccccccc999999999cccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999998999ccccccc999999999cccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999999899ccccccc9999999999ccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999989999999989999999999899999cccc9999999999ccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999929999999999299999999999999888899999999989999999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999999999999999999299999899929999999999929999999999999999999999999899999999999998999989999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999889999999999999999299999989992999999999992999999999999999999999999998999999999999988989999999999999dcccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999998999999999999999299999988992999999999992999999999999999999999999999899999999999999889999999999999dcccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999998899999999999992999999989929999999999929999999999999999999999999999899999999999999999999d999999ddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998888899999999889999999999299999999899299999999999299999999999999999999999999999899999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998989989999999998999999999299999999992999999999999299999999999999999999999999999988999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898989999999999989999999929999999999299999999999929999999998999999999999999999999988999999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898899999999999999999999929999999999299999999999929999999999899999999999999999999999888999999999dddddddd9dddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999992999999999999992999999999989999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999929999999999999992999999999998999999999999999999999998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888888899999999999299999999299999999999999992999999999999999999998888888999989998999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999989999999999299999999299999999999999929999999999999999999999899999888889998999999999dddddd9dddddcccccccccccccccccccccccccccccccccccccccccccccccc
            999989999999999999899999999992999999229999999999899222999999999999999999999998998999999999899999999999ddddddddddcccccc7ccccccccccccccccccccccccccccccccccccccccc
            9999899999999999998999999999929999922999999999998929999999999999999999999999998999999999998999999999999dddddddddcccccc77c7cccccccccccccccccccccccccccccccccccccc
            999989999988899999899999999992229929999999999999892999999999999999999999999999988999999999899999999999999dddddddccccccc777cccccccccccccccc66666ccccccccccccccccc
            999989888898999999899999999999929929999999998999892999999999999999999999999999999899999999899999999999999dddddddccccccc944cccccccc6666666666666cccc66ccccccccccc
            999988999999899998999999999999929929999999998999892999999999999999999999999999999989999998999999999999999999ddddccccccc442ccccc66666666666666666666666666ccccccc
            9999999999999889899999999999999299299999999998998929999999998999998999988899999999988888899999999999999999999dddccccccc525cccccc666666666666666666666666666ccccc
            9999999999999998999999999999992999299999999999888929999999999899988888899988899999999999999999999999999999999dddccccccc255cccc66666666666666666666666666666666cc
            99999999999999999999999999999229992299999999999999929999999998988999999999999889999999999999999999999999999999ddccccccc9c9c6666666666666666666666666666666666666
            99999999999999999999999999992299999299999999999999929999999999899999999999999998999999999999999999999999999999ddcccccc666666666666666666666666666666666666666666
            999999999999999999999999999929999992999999999999999299999999999999999999999999999999999999999999999999999999999dc66666666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999999299999999999999999999999999999999999999999999999999999999999666666666666666666666666666666666666666666666666
            `,img`
            9999999999999999999999999999999999999999999999999999999999999999999299299999999929999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999999299299999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999992999229999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999998899999999999999992999929999992999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999999999999999999999999999999988899999999999999992999929999922999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999999999999999999999999999999888899899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999999989999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999998899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999899999988889999999999998999999999999988899888999999999999229992299999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999988999899998899999999998999988899999989999999888899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999898999999988888888998999989988999899999999998899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999999999999999899999998998999999999889999999992999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999998999899999998999999999999899999989989999999988999999999929999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998888989999999899999999999989999998998888888889999999999992999999299999929999999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999988899999989999999999999899998999999999999888999999999299999929999992299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999899999998999999999999989989999988888988999889999999299999929999999299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999989999999999998998999989999899999999889999929999992999999929999999299ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999989999999999899999888999988999989999989999999999899999299999299999999299999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998998899999999999888888899888999999988888899999999999989999299999299999999929999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999889999999999999899999999999999999989999999999999999889999299999299999999929999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999999999999988999999229999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999988999999999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999899889999999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999989999899999999999889988999998899999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888999999989999899999999999998899899999989999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999888999899999999999989999999999889999899999998999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999988999999999998999999999999999899999999899999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999998888999999998999999999999999899999999989999999929999299999999992999929c9cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999899999999999999989999999999899999992999299999999992999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999989999999999989999992999299999999992999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999988899999999999999999999999999989999999999989999222992299999999992999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999988999899999999999999999999999998999999999999999922999929999999999929999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999899999899999999999999999999999998999999999999999929999929999999999929999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998999999899999999999999999999999989999999899999999929999929999999999929999299999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999899999999899999999999998999999888999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999889999989998999999999889999999999989999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999998998889998998999999999989999999999899999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989998989998999889999999999989999999999899999989998899999992999999229999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998998999899988999999999889999999988899999998888998889999299999992999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998989999899989999999999899999999999999999998998899889999299999992999999999299992299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999899999899989999999999899999999999999999998999999899999929999992999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888888889899999999999998899999999999999999998999998999999929999992999999999999999229999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989899999999999998999999999999999999998889888888899922999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988899999999999989999999998999999999999988899999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999999999999989899999999899999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999988999999999989999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999998899999999999999999999992999922999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999899999999999999999999922999929999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999999999999999299992999999999999999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999992999999999999999999999992999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999988888899999299999999999999999999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999999999999999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999988899999999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999999988899999999999999999999999998999989999299999999899988999999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999889999999999999999999988899999999999999999999998899989999299999999899999899999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999988999999999999999999989899989999299999998999999899999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999998899999999999929999989899989999299999998999999899999299999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999899899999999999999299998998999899992999999998999999899999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989999999999999998899999888999999999999999299998998999899992999999999899999989999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999899998888999999999988998999999999999999999299998999889899992299999999989999988999999999999c9ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999988999999999999999999229999899999889999929999999999899989999999989999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999989999999999999999999999999999999299999899999998899992999999999899899999998899999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999999999999999999999992999999899999998888999999999999999889999989999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999998999999999999999999999999999999992999999899999899988889999999999999989998899999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888889999999999999999999999999999999992999999899999899999999999999999999998889999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999999999929999999899999899999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299999999992999999989999989999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999992999999999929999999988889988888999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999998889999999999299999999922999999999999888899988888999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999888999999929999999992999999999999999998899999899999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999992999999999999999999998898889999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999929999999999999999999999989999999999999999999999999cccccccccccccccc999999cccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999998999899999992999999299999999999999999999999999999999999999999999999999ccccccccccccccc999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999899999992999999299999999999999999999989999999999999999999999999999cccccccccccccc99999999999ccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989998999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccc999999999999cccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccc9999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccc9999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999998999999999299992999999999999999999999998999999989999999999999999999cccccccccccccc99999999999999cccccccccccccccccccccccccccccccccccccccccccc
            9999999999998988889998999999999299929999999999999999999999998999999988999999999999999999cccccccccccccc999999999999999ccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888889998999999999299929999999999999999999999998999999988999999999999999999ccccccccccccccc99999999999999ccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999989999999992999229999999999999999999999989999999898999999999999999999cccccccccccccc999999999999999cccccccccccccccccccccccccccccccccccccccccc
            999999999999999999998999999999929999229999999999999999999999989999989998999999999999999999cccccccccccccc99999999999999cccccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999999929999922999999999999999999999989999989999889999999999999999cccccccccccccc99999999999999cccccccccccccccccccccccccccccccccccccccccc
            9999998999999999998999999999999299999922999999999999999999999899999899999988999999999999999ccccccccccccc9999999999999ccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999889999999999999299999992999999999999999999999899998999999998999999999999999cccccccccccccc999999999999ccccccccccccccccccccccccccccccccccccccccccc
            999999989999999999899999999999929999999299999999999999999999989999899999998999999999999999999cccccccccccccc9999999999ccccccccccccccccccccccccccccccccccccccccccc
            9999999989999999999899999999999929999999299999999999999999999989998999999989999999999999999999ccccccccccccccc999999ccccccccccccccccccccccccccccccccccccccccccccc
            9999999998999999999989999999999929999999299999999999999999999998998999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999899999999989999999999929999999299999999999999999999999889999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999899999998899999999999929999999299999999999299999999999999999998999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999999999999929999999299999999999299999999999999999998999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998888999999999999999229989999299999999999299999999999999999998999999998999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999998999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999999899cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999989999999989999999999899999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899992999999999929999999999999988889999999998999999999998999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999998999999999999999999929999989992999999999992999999999999999999999999989999999999999899998999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988999999999999999929999998999299999999999299999999999999999999999999899999999999998898999999999999cccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999998999999999999999299999988992999999999992999999999999999999999999999899999999999999889999999dddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999998899999999999992999999989929999999999929999999999999999999999999999899999999999999999999dddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998888899999999889999999999299999999899299999999999299999999999999999999999999999899999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998989989999999998999999999299999999992999999999999299999999999999999999999999999988999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898989999999999989999999929999999999299999999999929999999998999999999999999999999988999999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898899999999999999999999929999999999299999999999929999999999899999999999999999999999888999999999dddddd999dddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999992999999999999992999999999989999999999999999999999998999999999ddddd999ddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999929999999999999992999999999998999999999999999999999998999999999dddd99999dddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888888899999999999299999999299999999999999992999999999999999999998888888999989998999999999d99999999dddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999989999999999299999999299999999999999929999999999999999999999899999888889998999999999999999999dddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999989999999999299999922999999999989922299999999999999999999999899899999999989999999999999999999ddcccccc7ccccccccccccccccccccccccccccccccccccccccc
            999989999999999999899999999992999992299999999999892999999999999999999999999999899999999999899999999999999999999dcccccc77c7cccccccccccccccccccccccccccccccccccccc
            999989999988899999899999999992229929999999999999892999999999999999999999999999988999999999899999999999999999999999ccccc777cccccccccccccccc66666ccccccccccccccccc
            999989888898999999899999999999929929999999998999892999999999999999999999999999999899999999899999999999999999999999ccccc944cccccccc6666666666666cccc66ccccccccccc
            999988999999899998999999999999929929999999998999892999999999999999999999999999999989999998999999999999999999999999ccccc442ccccc66666666666666666666666666ccccccc
            999999999999988989999999999999929929999999999899892999999999899999899998889999999998888889999999999999999999999999ccccc525cccccc666666666666666666666666666ccccc
            99999999999999989999999999999929992999999999998889299999999998999888888999888999999999999999999999999999999999999cccccc255cccc66666666666666666666666666666666cc
            99999999999999999999999999999229992299999999999999929999999998988999999999999889999999999999999999999999999999999cccccc9c9c6666666666666666666666666666666666666
            9999999999999999999999999999229999929999999999999992999999999989999999999999999899999999999999999999999999999999cccccc666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999992999999999999999999999999999999999999999999999999999999999999c66666666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999999299999999999999999999999999999999999999999999999999999999999666666666666666666666666666666666666666666666666
            `,img`
            9999999999999999999999999999999999999999999999999999999999999999999299299999999929999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999999299299999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999992999229999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999998899999999999999992999929999992999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999999999999999999999999999999988899999999999999992999929999922999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999999999999999999999999999999888899899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999999989999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999998899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999899999988889999999999998999999999999988899888999999999999229992299999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999988999899998899999999998999988899999989999999888899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999898999999988888888998999989988999899999999998899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999999999999999899999998998999999999889999999992999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999998999899999998999999999999899999989989999999988999999999929999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998888989999999899999999999989999998998888888889999999999992999999299999929999999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999988899999989999999999999899998999999999999888999999999299999929999992299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999899999998999999999999989989999988888988999889999999299999929999999299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999989999999999998998999989999899999999889999929999992999999929999999299ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999989999999999899999888999988999989999989999999999899999299999299999999299999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998998899999999999888888899888999999988888899999999999989999299999299999999929999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999889999999999999899999999999999999989999999999999999889999299999299999999929999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999999999999988999999229999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999988999999999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999899889999999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999989999899999999999889988999998899999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888999999989999899999999999998899899999989999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999888999899999999999989999999999889999899999998999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999988999999999998999999999999999899999999899999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999998888999999998999999999999999899999999989999999929999299999999992999929c9cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999899999999999999989999999999899999992999299999999992999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999989999999999989999992999299999999992999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999988899999999999999999999999999989999999999989999222992299999999992999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999988999899999999999999999999999998999999999999999922999929999999999929999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999899999899999999999999999999999998999999999999999929999929999999999929999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998999999899999999999999999999999989999999899999999929999929999999999929999299999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999899999999899999999999998999999888999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999889999989998999999999889999999999989999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999998998889998998999999999989999999999899999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989998989998999889999999999989999999999899999989998899999992999999229999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998998999899988999999999889999999988899999998888998889999299999992999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998989999899989999999999899999999999999999998998899889999299999992999999999299992299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999899999899989999999999899999999999999999998999999899999929999992999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888888889899999999999998899999999999999999998999998999999929999992999999999999999229999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989899999999999998999999999999999999998889888888899922999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988899999999999989999999998999999999999988899999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999999999999989899999999899999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999988999999999989999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999998899999999999999999999992999922999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999899999999999999999999922999929999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999999999999999299992999999999999999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999992999999999999999999999992999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999988888899999299999999999999999999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999999999999999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999988899999999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999999988899999999999999999999999998999989999299999999899988999999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999889999999999999999999988899999999999999999999998899989999299999999899999899999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999988999999999999999999989899989999299999998999999899999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999998899999999999929999989899989999299999998999999899999299999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999899899999999999999299998998999899992999999998999999899999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989999999999999998899999888999999999999999299998998999899992999999999899999989999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999899998888999999999988998999999999999999999299998999889899992299999999989999988999999999999c9ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999988999999999999999999229999899999889999929999999999899989999999989999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999989999999999999999999999999999999299999899999998899992999999999899899999998899999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999999999999999999999992999999899999998888999999999999999889999989999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999998999999999999999999999999999999992999999899999899988889999999999999989998899999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888889999999999999999999999999999999992999999899999899999999999999999999998889999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999999999929999999899999899999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299999999992999999989999989999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999992999999999929999999988889988888999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999998889999999999299999999922999999999999888899988888999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999888999999929999999992999999999999999998899999899999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999992999999999999999999998898889999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999929999999999999999999999989999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999998999899999992999999299999999999999999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999899999992999999299999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989998999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999ccccccccccccc999999ccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccc999999999ccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999998999999999299992999999999999999999999998999999989999999999999999999ccccccccccc99999999999cccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998988889998999999999299929999999999999999999999998999999988999999999999999999ccccccccccc999999999999ccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888889998999999999299929999999999999999999999998999999988999999999999999999ccccccccccc9999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999989999999992999229999999999999999999999989999999898999999999999999999cccccccccc9999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999998999999999929999229999999999999999999999989999989998999999999999999999ccccccccc99999999999999ccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999999929999922999999999999999999999989999989999889999999999999999ccccccccc999999999999999cccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999998999999999999299999922999999999999999999999899999899999988999999999999999ccccccccc99999999999999cccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999889999999999999299999992999999999999999999999899998999999998999999999999999ccccccccc999999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            999999989999999999899999999999929999999299999999999999999999989999899999998999999999999999999cccccccc99999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            9999999989999999999899999999999929999999299999999999999999999989998999999989999999999999999999ccccccc99999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            9999999998999999999989999999999929999999299999999999999999999998998999999899999999999999999999ccccccc9999999999999cccccccccccccccccccccccccccccccccccccccccccccc
            9999999999899999999989999999999929999999299999999999999999999999889999999899999999999999999999cccccccc999999999999cccccccccccccccccccccccccccccccccccccccccccccc
            9999999999899999998899999999999929999999299999999999299999999999999999998999999999999999999999cccccccccc9999999999cccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999999999999929999999299999999999299999999999999999998999999999999999999999cccccccccccc999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998888999999999999999229989999299999999999299999999999999999998999999998999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999998999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999999899cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999989999999989999999999899999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899992999999999929999999999999988889999999998999999999998999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999998999999999999999999929999989992999999999992999999999999999999999999989999999999999899998999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988999999999999999929999998999299999999999299999999999999999999999999899999999999998898999999999999cccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999998999999999999999299999988992999999999992999999999999999999999999999899999999999999889999999dddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999998899999999999992999999989929999999999929999999999999999999999999999899999999999999999999dddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998888899999999889999999999299999999899299999999999299999999999999999999999999999899999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998989989999999998999999999299999999992999999999999299999999999999999999999999999988999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898989999999999989999999929999999999299999999999929999999998999999999999999999999988999999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898899999999999999999999929999999999299999999999929999999999899999999999999999999999888999999999dddddd999dddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999992999999999999992999999999989999999999999999999999998999999999ddddd999ddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999929999999999999992999999999998999999999999999999999998999999999dddd99999dddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888888899999999999299999999299999999999999992999999999999999999998888888999989998999999999d99999999dddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999989999999999299999999299999999999999929999999999999999999999899999888889998999999999999999999dddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999989999999999299999922999999999989922299999999999999999999999899899999999989999999999999999999ddcccccc7ccccccccccccccccccccccccccccccccccccccccc
            999989999999999999899999999992999992299999999999892999999999999999999999999999899999999999899999999999999999999dcccccc77c7cccccccccccccccccccccccccccccccccccccc
            999989999988899999899999999992229929999999999999892999999999999999999999999999988999999999899999999999999999999999ccccc777cccccccccccccccc66666ccccccccccccccccc
            999989888898999999899999999999929929999999998999892999999999999999999999999999999899999999899999999999999999999999ccccc944cccccccc6666666666666cccc66ccccccccccc
            999988999999899998999999999999929929999999998999892999999999999999999999999999999989999998999999999999999999999999ccccc442ccccc66666666666666666666666666ccccccc
            999999999999988989999999999999929929999999999899892999999999899999899998889999999998888889999999999999999999999999ccccc525cccccc666666666666666666666666666ccccc
            99999999999999989999999999999929992999999999998889299999999998999888888999888999999999999999999999999999999999999cccccc255cccc66666666666666666666666666666666cc
            99999999999999999999999999999229992299999999999999929999999998988999999999999889999999999999999999999999999999999cccccc9c9c6666666666666666666666666666666666666
            9999999999999999999999999999229999929999999999999992999999999989999999999999999899999999999999999999999999999999cccccc666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999992999999999999999999999999999999999999999999999999999999999999c66666666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999999299999999999999999999999999999999999999999999999999999999999666666666666666666666666666666666666666666666666
            `,img`
            9999999999999999999999999999999999999999999999999999999999999999999299299999999929999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999999299299999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999992999229999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999998899999999999999992999929999992999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999999999999999999999999999999988899999999999999992999929999922999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999999999999999999999999999999888899899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999999989999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999998899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999899999988889999999999998999999999999988899888999999999999229992299999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999988999899998899999999998999988899999989999999888899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999898999999988888888998999989988999899999999998899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999999999999999899999998998999999999889999999992999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999998999899999998999999999999899999989989999999988999999999929999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998888989999999899999999999989999998998888888889999999999992999999299999929999999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999988899999989999999999999899998999999999999888999999999299999929999992299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999899999998999999999999989989999988888988999889999999299999929999999299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999989999999999998998999989999899999999889999929999992999999929999999299ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999989999999999899999888999988999989999989999999999899999299999299999999299999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998998899999999999888888899888999999988888899999999999989999299999299999999929999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999889999999999999899999999999999999989999999999999999889999299999299999999929999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999999999999988999999229999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999988999999999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999899889999999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999989999899999999999889988999998899999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888999999989999899999999999998899899999989999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999888999899999999999989999999999889999899999998999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999988999999999998999999999999999899999999899999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999998888999999998999999999999999899999999989999999929999299999999992999929c9cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999899999999999999989999999999899999992999299999999992999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999989999999999989999992999299999999992999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999988899999999999999999999999999989999999999989999222992299999999992999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999988999899999999999999999999999998999999999999999922999929999999999929999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999899999899999999999999999999999998999999999999999929999929999999999929999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998999999899999999999999999999999989999999899999999929999929999999999929999299999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999899999999899999999999998999999888999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999889999989998999999999889999999999989999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999998998889998998999999999989999999999899999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989998989998999889999999999989999999999899999989998899999992999999229999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998998999899988999999999889999999988899999998888998889999299999992999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998989999899989999999999899999999999999999998998899889999299999992999999999299992299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999899999899989999999999899999999999999999998999999899999929999992999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888888889899999999999998899999999999999999998999998999999929999992999999999999999229999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989899999999999998999999999999999999998889888888899922999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988899999999999989999999998999999999999988899999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999999999999989899999999899999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999988999999999989999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999998899999999999999999999992999922999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999899999999999999999999922999929999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999999999999999299992999999999999999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999992999999999999999999999992999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999988888899999299999999999999999999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999999999999999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999988899999999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999999988899999999999999999999999998999989999299999999899988999999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999889999999999999999999988899999999999999999999998899989999299999999899999899999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999988999999999999999999989899989999299999998999999899999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999998899999999999929999989899989999299999998999999899999299999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999899899999999999999299998998999899992999999998999999899999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989999999999999998899999888999999999999999299998998999899992999999999899999989999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999899998888999999999988998999999999999999999299998999889899992299999999989999988999999999999c9ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999988999999999999999999229999899999889999929999999999899989999999989999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999989999999999999999999999999999999299999899999998899992999999999899899999998899999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999999999999999999999992999999899999998888999999999999999889999989999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999998999999999999999999999999999999992999999899999899988889999999999999989998899999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888889999999999999999999999999999999992999999899999899999999999999999999998889999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999999999929999999899999899999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299999999992999999989999989999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999992999999999929999999988889988888999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999998889999999999299999999922999999999999888899988888999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999888999999929999999992999999999999999998899999899999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999992999999999999999999998898889999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999929999999999999999999999989999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999998999899999992999999299999999999999999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999899999992999999299999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989998999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999998999999999299992999999999999999999999998999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998988889998999999999299929999999999999999999999998999999988999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888889998999999999299929999999999999999999999998999999988999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999989999999992999229999999999999999999999989999999898999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999998999999999929999229999999999999999999999989999989998999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999999929999922999999999999999999999989999989999889999999999999999cccccccccccc999999cccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999998999999999999299999922999999999999999999999899999899999988999999999999999cccccccccc999999999cccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999889999999999999299999992999999999999999999999899998999999998999999999999999ccccccccc99999999999ccccccccccccccccccccccccccccccccccccccccccccccccc
            999999989999999999899999999999929999999299999999999999999999989999899999998999999999999999999ccccccc999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            9999999989999999999899999999999929999999299999999999999999999989998999999989999999999999999999cccccc9999999999999ccccccccccccccccccccccccccccccccccccccccccccccc
            9999999998999999999989999999999929999999299999999999999999999998998999999899999999999999999999cccccc9999999999999ccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999899999999989999999999929999999299999999999999999999999889999999899999999999999999999cccccc99999999999999cccccccccccccccccccccccccccccccccccccccccccccc
            9999999999899999998899999999999929999999299999999999299999999999999999998999999999999999999999cccccc999999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999999999999929999999299999999999299999999999999999998999999999999999999999ccccccc99999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998888999999999999999229989999299999999999299999999999999999998999999998999999999999ccccccc999999999999999cccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999998999cccccccc99999999999999cccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999999899cccccccc99999999999999cccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999989999999989999999999899999ccccc9999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899992999999999929999999999999988889999999998999999999998999999999c999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            999999999998999999999999999999929999989992999999999992999999999999999999999999989999999999999899998999ccc9999999999ccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988999999999999999929999998999299999999999299999999999999999999999999899999999999998898999999999999999ccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999998999999999999999299999988992999999999992999999999999999999999999999899999999999999889999999dddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999998899999999999992999999989929999999999929999999999999999999999999999899999999999999999999dddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998888899999999889999999999299999999899299999999999299999999999999999999999999999899999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998989989999999998999999999299999999992999999999999299999999999999999999999999999988999999999999999dddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898989999999999989999999929999999999299999999999929999999998999999999999999999999988999999999999ddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999898899999999999999999999929999999999299999999999929999999999899999999999999999999999888999999999dddddd999dddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999992999999999999992999999999989999999999999999999999998999999999ddddd999ddddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999929999999999999992999999999998999999999999999999999998999999999dddd99999dddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888888899999999999299999999299999999999999992999999999999999999998888888999989998999999999d99999999dddcccccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999989999999999299999999299999999999999929999999999999999999999899999888889998999999999999999999dddcccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999989999999999299999922999999999989922299999999999999999999999899899999999989999999999999999999ddcccccc7ccccccccccccccccccccccccccccccccccccccccc
            999989999999999999899999999992999992299999999999892999999999999999999999999999899999999999899999999999999999999dcccccc77c7cccccccccccccccccccccccccccccccccccccc
            999989999988899999899999999992229929999999999999892999999999999999999999999999988999999999899999999999999999999999ccccc777cccccccccccccccc66666ccccccccccccccccc
            999989888898999999899999999999929929999999998999892999999999999999999999999999999899999999899999999999999999999999ccccc944cccccccc6666666666666cccc66ccccccccccc
            999988999999899998999999999999929929999999998999892999999999999999999999999999999989999998999999999999999999999999ccccc442ccccc66666666666666666666666666ccccccc
            999999999999988989999999999999929929999999999899892999999999899999899998889999999998888889999999999999999999999999ccccc525cccccc666666666666666666666666666ccccc
            99999999999999989999999999999929992999999999998889299999999998999888888999888999999999999999999999999999999999999cccccc255cccc66666666666666666666666666666666cc
            99999999999999999999999999999229992299999999999999929999999998988999999999999889999999999999999999999999999999999cccccc9c9c6666666666666666666666666666666666666
            9999999999999999999999999999229999929999999999999992999999999989999999999999999899999999999999999999999999999999cccccc666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999992999999999999999999999999999999999999999999999999999999999999c66666666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999999299999999999999999999999999999999999999999999999999999999999666666666666666666666666666666666666666666666666
            `,img`
            9999999999999999999999999999999999999999999999999999999999999999999299299999999929999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999999299299999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999992999229999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999998899999999999999992999929999992999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999999999999999999999999999999988899999999999999992999929999922999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999999999999999999999999999999888899899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999999989999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999998899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999899999988889999999999998999999999999988899888999999999999229992299999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999988999899998899999999998999988899999989999999888899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999898999999988888888998999989988999899999999998899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999999999999999899999998998999999999889999999992999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999998999899999998999999999999899999989989999999988999999999929999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998888989999999899999999999989999998998888888889999999999992999999299999929999999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999988899999989999999999999899998999999999999888999999999299999929999992299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999899999998999999999999989989999988888988999889999999299999929999999299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999989999999999998998999989999899999999889999929999992999999929999999299ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999989999999999899999888999988999989999989999999999899999299999299999999299999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998998899999999999888888899888999999988888899999999999989999299999299999999929999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999889999999999999899999999999999999989999999999999999889999299999299999999929999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999999999999988999999229999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999988999999999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999899889999999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999989999899999999999889988999998899999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888999999989999899999999999998899899999989999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999888999899999999999989999999999889999899999998999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999988999999999998999999999999999899999999899999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999998888999999998999999999999999899999999989999999929999299999999992999929c9cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999899999999999999989999999999899999992999299999999992999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999989999999999989999992999299999999992999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999988899999999999999999999999999989999999999989999222992299999999992999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999988999899999999999999999999999998999999999999999922999929999999999929999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999899999899999999999999999999999998999999999999999929999929999999999929999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998999999899999999999999999999999989999999899999999929999929999999999929999299999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999899999999899999999999998999999888999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999889999989998999999999889999999999989999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999998998889998998999999999989999999999899999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989998989998999889999999999989999999999899999989998899999992999999229999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998998999899988999999999889999999988899999998888998889999299999992999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998989999899989999999999899999999999999999998998899889999299999992999999999299992299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999899999899989999999999899999999999999999998999999899999929999992999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888888889899999999999998899999999999999999998999998999999929999992999999999999999229999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989899999999999998999999999999999999998889888888899922999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988899999999999989999999998999999999999988899999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999999999999989899999999899999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999988999999999989999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999998899999999999999999999992999922999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999899999999999999999999922999929999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999999999999999299992999999999999999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999992999999999999999999999992999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999988888899999299999999999999999999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999999999999999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999988899999999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999999988899999999999999999999999998999989999299999999899988999999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999889999999999999999999988899999999999999999999998899989999299999999899999899999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999988999999999999999999989899989999299999998999999899999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999998899999999999929999989899989999299999998999999899999299999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999899899999999999999299998998999899992999999998999999899999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989999999999999998899999888999999999999999299998998999899992999999999899999989999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999899998888999999999988998999999999999999999299998999889899992299999999989999988999999999999c9ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999988999999999999999999229999899999889999929999999999899989999999989999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999989999999999999999999999999999999299999899999998899992999999999899899999998899999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999999999999999999999992999999899999998888999999999999999889999989999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999998999999999999999999999999999999992999999899999899988889999999999999989998899999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888889999999999999999999999999999999992999999899999899999999999999999999998889999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999999999929999999899999899999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299999999992999999989999989999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999992999999999929999999988889988888999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999998889999999999299999999922999999999999888899988888999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999888999999929999999992999999999999999998899999899999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999992999999999999999999998898889999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999929999999999999999999999989999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999998999899999992999999299999999999999999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999899999992999999299999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989998999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999998999999999299992999999999999999999999998999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998988889998999999999299929999999999999999999999998999999988999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888889998999999999299929999999999999999999999998999999988999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999989999999992999229999999999999999999999989999999898999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999998999999999929999229999999999999999999999989999989998999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999999929999922999999999999999999999989999989999889999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999998999999999999299999922999999999999999999999899999899999988999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999889999999999999299999992999999999999999999999899998999999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999989999999999899999999999929999999299999999999999999999989999899999998999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999989999999999899999999999929999999299999999999999999999989998999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999998999999999989999999999929999999299999999999999999999998998999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999899999999989999999999929999999299999999999999999999999889999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999899999998899999999999929999999299999999999299999999999999999998999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999999999999929999999299999999999299999999999999999998999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998888999999999999999229989999299999999999299999999999999999998999999998999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999998999cccccccc999999cccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999999899ccccccc999999999cccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999989999999989999999999899999ccc99999999999ccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999929999999999299999999999999888899999999989999999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999999999999992999998999299999999999299999999999999999999999998999999999999989999899999999999999ccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988999999999999999929999998999299999999999299999999999999999999999999899999999999998898999999999999999ccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999998999999999999999299999988992999999999992999999999999999999999999999899999999999999889999999999999999cccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999998899999999999992999999989929999999999929999999999999999999999999999899999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            9999888889999999988999999999929999999989929999999999929999999999999999999999999999989999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            99998989989999999998999999999299999999992999999999999299999999999999999999999999999988999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccc
            9999898989999999999989999999929999999999299999999999929999999998999999999999999999999988999999999999dd99999999999999cccccccccccccccccccccccccccccccccccccccccccc
            9999898899999999999999999999929999999999299999999999929999999999899999999999999999999999888999999999dd99999999999999cccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999992999999999999992999999999989999999999999999999999998999999999dd9999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999999999999999299999999929999999999999992999999999998999999999999999999999998999999999ddd999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            9999899999888888899999999999299999999299999999999999992999999999999999999998888888999989998999999999d99999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999899999999992999999992999999999999999299999999999999999999998999998888899989999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999989999999999299999922999999999989922299999999999999999999999899899999999989999999999999999999ddcccccc7ccccccccccccccccccccccccccccccccccccccccc
            999989999999999999899999999992999992299999999999892999999999999999999999999999899999999999899999999999999999999dcccccc77c7cccccccccccccccccccccccccccccccccccccc
            999989999988899999899999999992229929999999999999892999999999999999999999999999988999999999899999999999999999999999ccccc777cccccccccccccccc66666ccccccccccccccccc
            999989888898999999899999999999929929999999998999892999999999999999999999999999999899999999899999999999999999999999ccccc944cccccccc6666666666666cccc66ccccccccccc
            999988999999899998999999999999929929999999998999892999999999999999999999999999999989999998999999999999999999999999ccccc442ccccc66666666666666666666666666ccccccc
            999999999999988989999999999999929929999999999899892999999999899999899998889999999998888889999999999999999999999999ccccc525cccccc666666666666666666666666666ccccc
            99999999999999989999999999999929992999999999998889299999999998999888888999888999999999999999999999999999999999999cccccc255cccc66666666666666666666666666666666cc
            99999999999999999999999999999229992299999999999999929999999998988999999999999889999999999999999999999999999999999cccccc9c9c6666666666666666666666666666666666666
            9999999999999999999999999999229999929999999999999992999999999989999999999999999899999999999999999999999999999999cccccc666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999992999999999999999999999999999999999999999999999999999999999999c66666666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999999299999999999999999999999999999999999999999999999999999999999666666666666666666666666666666666666666666666666
            `,img`
            9999999999999999999999999999999999999999999999999999999999999999999299299999999929999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999999299299999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999992999229999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999998899999999999999992999929999992999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999999999999999999999999999999988899999999999999992999929999922999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999999999999999999999999999999888899899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999999989999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999998899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999899999988889999999999998999999999999988899888999999999999229992299999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999988999899998899999999998999988899999989999999888899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999898999999988888888998999989988999899999999998899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999999999999999899999998998999999999889999999992999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999998999899999998999999999999899999989989999999988999999999929999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998888989999999899999999999989999998998888888889999999999992999999299999929999999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999988899999989999999999999899998999999999999888999999999299999929999992299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999899999998999999999999989989999988888988999889999999299999929999999299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999989999999999998998999989999899999999889999929999992999999929999999299ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999989999999999899999888999988999989999989999999999899999299999299999999299999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998998899999999999888888899888999999988888899999999999989999299999299999999929999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999889999999999999899999999999999999989999999999999999889999299999299999999929999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999999999999988999999229999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999988999999999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999899889999999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999989999899999999999889988999998899999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888999999989999899999999999998899899999989999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999888999899999999999989999999999889999899999998999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999988999999999998999999999999999899999999899999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999998888999999998999999999999999899999999989999999929999299999999992999929c9cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999899999999999999989999999999899999992999299999999992999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999989999999999989999992999299999999992999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999988899999999999999999999999999989999999999989999222992299999999992999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999988999899999999999999999999999998999999999999999922999929999999999929999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999899999899999999999999999999999998999999999999999929999929999999999929999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998999999899999999999999999999999989999999899999999929999929999999999929999299999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999899999999899999999999998999999888999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999889999989998999999999889999999999989999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999998998889998998999999999989999999999899999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989998989998999889999999999989999999999899999989998899999992999999229999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998998999899988999999999889999999988899999998888998889999299999992999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998989999899989999999999899999999999999999998998899889999299999992999999999299992299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999899999899989999999999899999999999999999998999999899999929999992999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888888889899999999999998899999999999999999998999998999999929999992999999999999999229999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989899999999999998999999999999999999998889888888899922999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988899999999999989999999998999999999999988899999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999999999999989899999999899999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999988999999999989999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999998899999999999999999999992999922999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999899999999999999999999922999929999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999999999999999299992999999999999999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999992999999999999999999999992999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999988888899999299999999999999999999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999999999999999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999988899999999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999999988899999999999999999999999998999989999299999999899988999999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999889999999999999999999988899999999999999999999998899989999299999999899999899999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999988999999999999999999989899989999299999998999999899999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999998899999999999929999989899989999299999998999999899999299999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999899899999999999999299998998999899992999999998999999899999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989999999999999998899999888999999999999999299998998999899992999999999899999989999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999899998888999999999988998999999999999999999299998999889899992299999999989999988999999999999c9ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999988999999999999999999229999899999889999929999999999899989999999989999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999989999999999999999999999999999999299999899999998899992999999999899899999998899999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999999999999999999999992999999899999998888999999999999999889999989999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999998999999999999999999999999999999992999999899999899988889999999999999989998899999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888889999999999999999999999999999999992999999899999899999999999999999999998889999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999999999929999999899999899999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299999999992999999989999989999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999992999999999929999999988889988888999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999998889999999999299999999922999999999999888899988888999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999888999999929999999992999999999999999998899999899999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999992999999999999999999998898889999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999929999999999999999999999989999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999998999899999992999999299999999999999999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999899999992999999299999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989998999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999998999999999299992999999999999999999999998999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998988889998999999999299929999999999999999999999998999999988999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888889998999999999299929999999999999999999999998999999988999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999989999999992999229999999999999999999999989999999898999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999998999999999929999229999999999999999999999989999989998999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999999929999922999999999999999999999989999989999889999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999998999999999999299999922999999999999999999999899999899999988999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999889999999999999299999992999999999999999999999899998999999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999989999999999899999999999929999999299999999999999999999989999899999998999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999989999999999899999999999929999999299999999999999999999989998999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999998999999999989999999999929999999299999999999999999999998998999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999899999999989999999999929999999299999999999999999999999889999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999899999998899999999999929999999299999999999299999999999999999998999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999999999999929999999299999999999299999999999999999998999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998888999999999999999229989999299999999999299999999999999999998999999998999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999998999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999999899cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999989999999989999999999899999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899992999999999929999999999999988889999999998999999999998999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999998999999999999999999929999989992999999999992999999999999999999999999989999999999999899998999c999999ccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999889999999999999999299999989992999999999992999999999999999999999999998999999999999988989999999999999ccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999989999999999999992999999889929999999999929999999999999999999999999998999999999999998899999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999988999999999999929999999899299999999999299999999999999999999999999998999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccc
            999988888999999998899999999992999999998992999999999992999999999999999999999999999998999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccc
            999989899899999999989999999992999999999929999999999992999999999999999999999999999999889999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccc
            9999898989999999999989999999929999999999299999999999929999999998999999999999999999999988999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            99998988999999999999999999999299999999992999999999999299999999998999999999999999999999998889999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999999999992999999999929999999999999929999999999899999999999999999999999989999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccc
            999989999999999999999999999929999999992999999999999999299999999999899999999999999999999999899999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccc
            999989999988888889999999999929999999929999999999999999299999999999999999999888888899998999899999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccc
            999989999999999998999999999929999999929999999999999992999999999999999999999989999988888999899999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999989999999999299999922999999999989922299999999999999999999999899899999999989999999999999999999999999cc7ccccccccccccccccccccccccccccccccccccccccc
            99998999999999999989999999999299999229999999999989299999999999999999999999999989999999999989999999999999999999999999cc77c7cccccccccccccccccccccccccccccccccccccc
            99998999998889999989999999999222992999999999999989299999999999999999999999999998899999999989999999999999999999999999ccc777cccccccccccccccc66666ccccccccccccccccc
            999989888898999999899999999999929929999999998999892999999999999999999999999999999899999999899999999999999999999999ccccc944cccccccc6666666666666cccc66ccccccccccc
            999988999999899998999999999999929929999999998999892999999999999999999999999999999989999998999999999999999999999999ccccc442ccccc66666666666666666666666666ccccccc
            999999999999988989999999999999929929999999999899892999999999899999899998889999999998888889999999999999999999999999ccccc525cccccc666666666666666666666666666ccccc
            99999999999999989999999999999929992999999999998889299999999998999888888999888999999999999999999999999999999999999cccccc255cccc66666666666666666666666666666666cc
            99999999999999999999999999999229992299999999999999929999999998988999999999999889999999999999999999999999999999999cccccc9c9c6666666666666666666666666666666666666
            9999999999999999999999999999229999929999999999999992999999999989999999999999999899999999999999999999999999999999cccccc666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999992999999999999999999999999999999999999999999999999999999999999c66666666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999999299999999999999999999999999999999999999999999999999999999999666666666666666666666666666666666666666666666666
            `,img`
            9999999999999999999999999999999999999999999999999999999999999999999299299999999929999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999999299299999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999999992999229999999299999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999998899999999999999992999929999992999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999999999999999999999999999999999999999988899999999999999992999929999922999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999999999999999999999999999999888899899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999999989999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999999999999999999999999999999999998899999999999999992999929999929999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999899999988889999999999998999999999999988899888999999999999229992299999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999988999899998899999999998999988899999989999999888899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999898999999988888888998999989988999899999999998899999999299992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999999999999999899999998998999999999889999999992999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999998999899999998999999999999899999989989999999988999999999929999992999999299999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998888989999999899999999999989999998998888888889999999999992999999299999929999999929999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999988899999989999999999999899998999999999999888999999999299999929999992299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999899999998999999999999989989999988888988999889999999299999929999999299999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999989999999989999999999998998999989999899999999889999929999992999999929999999299ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999989999989999999999899999888999988999989999989999999999899999299999299999999299999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998998899999999999888888899888999999988888899999999999989999299999299999999929999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999889999999999999899999999999999999989999999999999999889999299999299999999929999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999999999999988999999229999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999988999999999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999999999999999899999899889999999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999989999899999999999889988999998899999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888999999989999899999999999998899899999989999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999888999899999999999989999999999889999899999998999999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999988999999999998999999999999999899999999899999999929999299999999992999929cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999998888999999998999999999999999899999999989999999929999299999999992999929c9cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999899999999999999989999999999899999992999299999999992999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999989999999999989999992999299999999992999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999988899999999999999999999999999989999999999989999222992299999999992999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999988999899999999999999999999999998999999999999999922999929999999999929999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999899999899999999999999999999999998999999999999999929999929999999999929999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998999999899999999999999999999999989999999899999999929999929999999999929999299999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999899999999899999999899999999999998999999888999999999299999299999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999889999989998999999999889999999999989999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999998998889998998999999999989999999999899999989989999999992999999299999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989998989998999889999999999989999999999899999989998899999992999999229999999992999929999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998998999899988999999999889999999988899999998888998889999299999992999999999299992999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998998989999899989999999999899999999999999999998998899889999299999992999999999299992299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999899999899989999999999899999999999999999998999999899999929999992999999999299999299999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888888889899999999999998899999999999999999998999998999999929999992999999999999999229999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999989899999999999998999999999999999999998889888888899922999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988899999999999989999999998999999999999988899999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999998999999999999989899999999899999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999988999999999989999999999999999999999992999992999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999998899999999999999999999992999922999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999899999999999999999999922999929999999999999999929999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999999999999999299992999999999999999999299999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999999999929999999999999999999999929999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999999999999999999999999999999999992999999999999999999999992999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999999999999999999999999988888899999299999999999999999999992999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999999999999999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999999999999999999999999999999989999299999999988899999999999299999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999999988899999999999999999999999998999989999299999999899988999999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999889999999999999999999988899999999999999999999998899989999299999999899999899999992999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999988999999999999999999989899989999299999998999999899999929999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999899999999999999999999999998899999999999929999989899989999299999998999999899999299999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999899899999999999999299998998999899992999999998999999899999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999989999999999999998899999888999999999999999299998998999899992999999999899999989999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999899998888999999999988998999999999999999999299998999889899992299999999989999988999999999999c9ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999988999999999999999999229999899999889999929999999999899989999999989999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999989999999999999999999999999999999299999899999998899992999999999899899999998899999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999999899999999999999999999999999999992999999899999998888999999999999999889999989999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99998999998999999999999999999999999999999992999999899999899988889999999999999989998899999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999888889999999999999999999999999999999992999999899999899999999999999999999998889999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999999999999992999999999929999999899999899999999999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299999999992999999989999989999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999992999999999929999999988889988888999999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999998889999999999299999999922999999999999888899988888999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999888999999929999999992999999999999999998899999899999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999992999999999999999999998898889999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999899999992999999929999999999999999999999989999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999998999899999992999999299999999999999999999999999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999899999992999999299999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989998999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999999899999999299992999999999999999999999989999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989989999998999999999299992999999999999999999999998999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998988889998999999999299929999999999999999999999998999999988999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999888889998999999999299929999999999999999999999998999999988999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999999999989999999992999229999999999999999999999989999999898999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999998999999999929999229999999999999999999999989999989998999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999998999999999999989999999999929999922999999999999999999999989999989999889999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999998999999999998999999999999299999922999999999999999999999899999899999988999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999899999999889999999999999299999992999999999999999999999899998999999998999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999989999999999899999999999929999999299999999999999999999989999899999998999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999989999999999899999999999929999999299999999999999999999989998999999989999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999998999999999989999999999929999999299999999999999999999998998999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999899999999989999999999929999999299999999999999999999999889999999899999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999899999998899999999999929999999299999999999299999999999999999998999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999989999889999999999999929999999299999999999299999999999999999998999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999998888999999999999999229989999299999999999299999999999999999998999999998999999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999998999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999998999999998999999999899cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999999999999999999999299998999299999999999299999999999999999989999999989999999999899999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999999999999999999999999929999899992999999999929999999999999988889999999998999999999998999999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            999999999998999999999999999999929999989992999999999992999999999999999999999999989999999999999899998999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999988999999999999999929999998999299999999999299999999999999999999999999899999999999998898999999999999cccccccccccccccccccccccccccccccccccccccccccccccccc
            99999999999999899999999999999929999998899299999999999299999999999999999999999999989999999999999988999999999999cccccccccccccccccccccccccccccccccccccccccccccccccc
            9999999999999998899999999999992999999989929999999999929999999999999999999999999999899999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccccc
            99998888899999999889999999999299999999899299999999999299999999999999999999999999999899999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccccc
            999989899899999999989999999992999999999929999999999992999999999999999999999999999999889999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccccc
            9999898989999999999989999999929999999999299999999999929999999998999999999999999999999988999999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            9999898899999999999999999999929999999999299999999999929999999999899999999999999999999999888999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccccc
            99998999999999999999999999992999999999929999999999999929999999999899999999999999999999999989999999999999999999999999cccccccccccccccccccccccccccccccccccccccccccc
            999989999999999999999999999929999999992999999999999999299999999999899999999999999999999999899999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccc
            999989999988888889999999999929999999929999999999999999299999999999999999999888888899998999899999999999999999999999999ccccccccccccccccccccccccccccccccccccccccccc
            9999899999999999989999999999299999999299999999999999929999999999999999999999899999888889998999999999999999999999999999cccccccccccccccccccccccccccccccccccccccccc
            99998999999999999989999999999299999922999999999989922299999999999999999999999899899999999989999999999999999999999999997ccccccccccccccccccccccccccccccccccccccccc
            999989999999999999899999999992999992299999999999892999999999999999999999999999899999999999899999999999999999999999999977c7cccccccccccccccccccccccccccccccccccccc
            999989999988899999899999999992229929999999999999892999999999999999999999999999988999999999899999999999999999999999999cc777cccccccccccccccc66666ccccccccccccccccc
            999989888898999999899999999999929929999999998999892999999999999999999999999999999899999999899999999999999999999999999cc944cccccccc6666666666666cccc66ccccccccccc
            999988999999899998999999999999929929999999998999892999999999999999999999999999999989999998999999999999999999999999999cc442ccccc66666666666666666666666666ccccccc
            9999999999999889899999999999999299299999999998998929999999998999998999988899999999988888899999999999999999999999999cccc525cccccc666666666666666666666666666ccccc
            99999999999999989999999999999929992999999999998889299999999998999888888999888999999999999999999999999999999999999cccccc255cccc66666666666666666666666666666666cc
            99999999999999999999999999999229992299999999999999929999999998988999999999999889999999999999999999999999999999999cccccc9c9c6666666666666666666666666666666666666
            9999999999999999999999999999229999929999999999999992999999999989999999999999999899999999999999999999999999999999cccccc666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999992999999999999999999999999999999999999999999999999999999999999c66666666666666666666666666666666666666666666666
            9999999999999999999999999999299999929999999999999999299999999999999999999999999999999999999999999999999999999999666666666666666666666666666666666666666666666666
            `],
        100,
        false
        )
        setTimeout(function(){
            game.reset()
        }, 1900)
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
let arrow2: Sprite = null
let arrow: Sprite = null
let bottomTile: tiles.Location = null
let tileSprite: Sprite = null
let newCover: Sprite = null
let fallingBlock: Sprite = null
let boulder: Sprite = null
let foundString = ""
let gem: Sprite = null
let currentLocationRow = 0
let currentLocationCol = 0
let gemsFound: string[] = []
let canMove = false
let timerRunning = false
let GRAVITY = 0
let jumpHeight = 0
let secondsLeft = 0
let enteringFrom: CollisionDirection = null
let timerColor:color = null
let str:string = null
let thePlayer: Sprite = null
let isTimerOn = false
let bouldersFallen = false
let collapseCracks = false
let grappling = false
function addTimerEvent(seconds:number, event:() => void){
    control.onEvent(TIMER_EVENT_ID, seconds, event)
}
let cover = sprites.create(assets.image`starting_screen`, SpriteKind.ScreenCover)
controller.pauseUntilAnyButtonIsPressed()
cover.destroy()
let TIMER_EVENT_ID = 1008
let life = 5
jumpHeight = 25
GRAVITY = 400
timerRunning = true
canMove = true
collapseCracks = false
let minutesLeft = 4
thePlayer = sprites.create(assets.image`player`, SpriteKind.Player)
controller.moveSprite(thePlayer, 75, 0)
thePlayer.ay = GRAVITY
gemsFound = ["5,0"]
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
    for (let index = 0; index <= 4; index++) {
        if (index > life - 1) {
            target.drawTransparentImage(assets.image`heart_empty`, 2 + index * 8, 3)
        }
        else {
            target.drawTransparentImage(assets.image`heart_full`, 2 + index * 8, 3)
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

    if(grappling){
        let grappleTarget = tiles.getTilesByType(assets.tile`myTile22`)
        if(true){}
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
        game.over(false)
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
                game.over(false)
            }
        }
        control.raiseEvent(TIMER_EVENT_ID, secondsLeft + (minutesLeft * 60))
    }
})
game.onUpdateInterval(1500, function () {
    for (let value322 of tiles.getTilesByType(assets.tile`myTile14`)) {
        arrow = sprites.create(assets.image`arrow_right`, SpriteKind.Projectile)
        tiles.placeOnTile(arrow, value322)
        arrow.vx = -100
        arrow.setFlag(SpriteFlag.DestroyOnWall, true)
    }
    for (let value4 of tiles.getTilesByType(assets.tile`myTile15`)) {
        arrow2 = sprites.create(assets.image`arrow_left`, SpriteKind.Projectile)
        tiles.placeOnTile(arrow2, value4)
        arrow2.vx = 100
        arrow2.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
