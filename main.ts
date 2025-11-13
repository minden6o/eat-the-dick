sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite.sayText("szar", 5000, false)
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.bubbles)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite.sayText("fasz", 5000, false)
    otherSprite.destroy()
    sprite.startEffect(effects.hearts, 100)
    music.baDing.play()
})
let projectile: Sprite = null
let choice = 0
let mySprite: Sprite = null
scene.setBackgroundColor(8)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . f f . . . f . . . f f . . . 
    . . . . f f . f . f f . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f d f . . . . . . . 
    . . . . . f . d . f . . . . . . 
    . . . . . f . d . f . . . . . . 
    . . . . f . . d . . f . . . . . 
    . . . . f . . d . . f . . . . . 
    . . . f . . . . . . . f . . . . 
    . . . f . . . . . . . f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(500, function () {
    choice = randint(1, 3)
    if (choice == 1) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . d d d d d d d . . . . . . 
            . . d d d d d d d d d . . . . . 
            . d d d d d d d d d d d . . . . 
            d d d d e e e e e d d d d . . . 
            d d d e 3 3 3 3 3 e d d d . . . 
            d d d e 3 3 3 3 3 e d d d . . . 
            d d d e 3 3 e 3 3 e d d d . . . 
            d d d e 3 3 3 3 3 e d d d . . . 
            d d d e 3 3 3 3 3 e d d d . . . 
            d d d d e e e e e d d d d . . . 
            . d d d d d d d d d d d . . . . 
            . . d d d d d d d d d . . . . . 
            . . . d d d d d d d . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, -60, 0)
    } else if (choice == 2) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . 3 . . . . . . . . 
            . . . . . . 3 d 3 . . . . . . . 
            . . . . . 3 d d d 3 . . . . . . 
            . . . . 3 d d d d d 3 . . . . . 
            . . . . 3 d d d d d 3 . . . . . 
            . . . . 3 d d 3 d d 3 . . . . . 
            . . . . 3 d d 3 d d 3 . . . . . 
            . . . . 3 d d 3 d d 3 . . . . . 
            . . . . 3 d d 3 d d 3 . . . . . 
            . . . . 3 d d 3 d d 3 . . . . . 
            . . . . 3 d d 3 d d 3 . . . . . 
            . . . . 3 d d d d d 3 . . . . . 
            . . . . 3 d d d d d 3 . . . . . 
            . . . . . 3 d d d 3 . . . . . . 
            . . . . . . 3 d 3 . . . . . . . 
            . . . . . . . 3 . . . . . . . . 
            `, 60, 0)
    } else {
        projectile = sprites.createProjectileFromSide(img`
            . . . . 3 3 e 3 3 . . . . . . . 
            . . . . 3 3 e 3 3 . . . . . . . 
            . . . . 3 3 e 3 3 . . . . . . . 
            . . . . e e e e e . . . . . . . 
            . . . . e e e e e . . . . . . . 
            . . . . e e e e e . . . . . . . 
            . . . . e e e e e . . . . . . . 
            . . . . e e e e e . . . . . . . 
            . . . . e e e e e . . . . . . . 
            . . . . e e e e e . . . . . . . 
            . . . . e e e e e . . . . . . . 
            . . . . e e e e e . . . . . . . 
            . e e e e e e e e e e e . . . . 
            . e e e e . . . e e e e . . . . 
            . e e e e . . . e e e e . . . . 
            . e e e e . . . e e e e . . . . 
            `, 55, 0)
        projectile.setKind(SpriteKind.Food)
    }
    projectile.y = randint(10, 110)
})
