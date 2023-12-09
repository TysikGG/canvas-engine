import { Camera } from '../game/camera.js'
import { Rect } from '../game/rect.js'
import { Sprite } from '../game/sprite.js'
import { Animation } from '../game/animation.js';

export let objects = [
    new Rect(100, 1300, 1000, 100, false, null, 0),
    new Sprite("./animations/cat/1.png", {
        sx: null,
        sy: null,
        sWidth: null,
        sHeight: null,
        dx: canvas1.width/2-200,
        dy: canvas1.height/2-200,
        dWidth: 300,
        dHeight: 200,
    }, {isStatic: true}, {
        walk: new Animation("walk", "./animations/cat", 150, 4),
    }, 1)
]