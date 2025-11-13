def on_on_overlap(sprite, otherSprite):
    info.change_life_by(-1)
    scene.camera_shake(4, 500)
    otherSprite.destroy(effects.bubbles)
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    info.change_score_by(1)
    otherSprite2.destroy()
    sprite2.start_effect(effects.hearts, 100)
    music.ba_ding.play()
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap2)

projectile: Sprite = None
choice = 0
scene.set_background_color(8)
mySprite = sprites.create(img("""
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
        """),
    SpriteKind.player)
controller.move_sprite(mySprite, 100, 100)
mySprite.set_stay_in_screen(True)
info.set_life(5)

def on_update_interval():
    global choice, projectile
    choice = randint(1, 3)
    if choice == 1:
        projectile = sprites.create_projectile_from_side(img("""
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
                """),
            -60,
            0)
    elif choice == 2:
        projectile = sprites.create_projectile_from_side(img("""
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
                """),
            60,
            0)
    else:
        projectile = sprites.create_projectile_from_side(img("""
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
                """),
            55,
            0)
        projectile.set_kind(SpriteKind.food)
    projectile.y = randint(10, 110)
game.on_update_interval(500, on_update_interval)
