namespace SpriteKind {
    export const Spike = SpriteKind.create()
    export const Text = SpriteKind.create()
    export const Crumbler = SpriteKind.create()
    export const Gem = SpriteKind.create()
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
    if (currentLocationRow == 0) {
        if (currentLocationCol == 0) {
        	
        } else if (currentLocationCol == 1) {
        	
        } else if (currentLocationCol == 2) {
        	
        } else if (currentLocationCol == 3) {
        	
        } else if (currentLocationCol == 4) {
        	
        } else if (currentLocationCol == 5) {
            tiles.setSmallTilemap(tilemap`level5`)
        } else if (currentLocationCol == 6) {
            tiles.setSmallTilemap(tilemap`level6`)
        } else if (currentLocationCol == 7) {
        	
        } else {
        	
        }
    } else if (currentLocationRow == 1) {
        if (currentLocationCol == 0) {
        	
        } else if (currentLocationCol == 1) {
        	
        } else if (currentLocationCol == 2) {
        	
        } else if (currentLocationCol == 3) {
        	
        } else if (currentLocationCol == 4) {
        	
        } else if (currentLocationCol == 5) {
        	
        } else if (currentLocationCol == 6) {
            tiles.setSmallTilemap(tilemap`level11`)
        } else if (currentLocationCol == 7) {
        	
        } else {
        	
        }
    } else {
    	
    }
    scene.centerCameraAt(88, 68)
    tiles.coverAllTiles(assets.tile`myTile10`, assets.tile`myTile`)
    tiles.coverAllTiles(assets.tile`myTile7`, assets.tile`myTile6`)
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
    if (enteringFrom == CollisionDirection.Right) {
        thePlayer.x = 152
    } else if (enteringFrom == CollisionDirection.Bottom) {
        thePlayer.y = 152
        doAJump(thePlayer, jumpHeight)
    } else if (enteringFrom == CollisionDirection.Left) {
        thePlayer.x = 24
    } else if (enteringFrom == CollisionDirection.Top) {
        thePlayer.y = 24
    }
}
sprites.onDestroyed(SpriteKind.Crumbler, function (sprite) {
    tiles.setWallAt(tiles.locationOfSprite(sprite), false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (thePlayer.isHittingTile(CollisionDirection.Bottom)) {
        doAJump(thePlayer, jumpHeight)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    doAJump(sprite, 20)
    life += -1
    thePlayer.setKind(SpriteKind.Food)
    setTimeout(function(){
        thePlayer.setKind(SpriteKind.Player)
    }, 300)
})
sprites.onDestroyed(SpriteKind.Spike, function (sprite) {
    tiles.setTileAt(tiles.locationOfSprite(sprite), assets.tile`myTile9`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile`)
    tileSprite = sprites.create(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . b b b b b b . 
        `, SpriteKind.Spike)
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
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
let newCover: Sprite = null
let tileSprite: Sprite = null
let gem: Sprite = null
let currentLocationRow = 0
let currentLocationCol = 0
let GRAVITY = 0
let jumpHeight = 0
let enteringFrom: CollisionDirection = null
let timerColor:color = null
let str:string = null
let thePlayer: Sprite = null
let isTimerOn = false
let bottomTile: tiles.Location = null
let life = 5
jumpHeight = 25
GRAVITY = 400
let timerRunning = true
let minutesLeft = 4
let secondsLeft = 59
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
[img`
    . . 7 . . . . . 
    . . 7 7 . 7 . . 
    . . . 7 7 7 . . 
    . . . 9 4 4 . . 
    . . . 4 4 2 . . 
    . . . 5 2 5 . . 
    . . . 2 5 5 . . 
    . . . 9 . 9 . . 
    `],
500,
character.rule(Predicate.FacingLeft)
)
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
})
game.onUpdate(function () {
    if (thePlayer.tileKindAt(TileDirection.Center, assets.tile`myTile2`) || thePlayer.tileKindAt(TileDirection.Center, assets.tile`myTile0`)) {
        controller.moveSprite(thePlayer, 75, 75)
    } else {
        controller.moveSprite(thePlayer, 75, 0)
    }
})
game.onUpdate(function () {
    bottomTile = tiles.locationInDirection(tiles.locationOfSprite(thePlayer), CollisionDirection.Bottom)
    if (tiles.tileIs(bottomTile, assets.tile`myTile7`)) {
        newCover = sprites.create(assets.image`myTile`, SpriteKind._TileSprite)
        tiles.placeOnTile(newCover, bottomTile)
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
        setTimeout(function(){
            tiles.setWallAt(bottomTile, false)
        }, 1000)
    }
})
game.onUpdate(function () {
    for (let value2 of passableTiles) {
        for (let loc of tiles.getTilesByType(value2)) {
            if (thePlayer.tileKindAt(TileDirection.Bottom, value2) && !(controller.down.isPressed())) {
                tiles.setWallAt(loc, true)
            } else if (controller.down.isPressed()) {
                tiles.setWallAt(loc, false)
            } else {
                tiles.setWallAt(loc, false)
            }
        }
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
        if (secondsLeft <= 0) {
            minutesLeft += -1
            secondsLeft = 59
            music.playTone(440, music.beat(BeatFraction.Eighth))
            if (minutesLeft < 0) {
                game.over(false)
            }
        }
    }
})
game.onUpdateInterval(1500, function () {
    for (let value3 of tiles.getTilesByType(assets.tile`myTile14`)) {
        arrow = sprites.create(img`
            . . . . . . . 6 
            . 9 . . . 6 6 . 
            9 7 7 7 7 7 7 . 
            . 9 . . . 6 6 . 
            . . . . . . . 6 
            `, SpriteKind.Projectile)
        tiles.placeOnTile(arrow, value3)
        arrow.vx = -100
    }
    for (let value4 of tiles.getTilesByType(assets.tile`myTile15`)) {
        arrow2 = sprites.create(img`
            6 . . . . . . . 
            . 6 6 . . . 9 . 
            . 7 7 7 7 7 7 9 
            . 6 6 . . . 9 . 
            6 . . . . . . . 
            `, SpriteKind.Projectile)
        tiles.placeOnTile(arrow2, value4)
        arrow2.vx = 100
    }
})
forever(function () {
    if (isTimerOn) {
        music.playTone(440, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(440, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(311, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(466, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Eighth))
    }
})
