import { Camera } from '../game/camera.js'
import { Rect } from '../game/rect.js'
import { Sprite } from '../game/sprite.js'
import { Animation } from '../game/animation.js';

export let objects = [
    new Rect(-1000, -300, 1000, 100, true, null, 0),
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

/*     new Rect(100, 100, 100, 100, false, {fill: true, color: '#00FF00'}, 1),
    new Rect(canvas1.width/2 - 50 , canvas1.height/2 - 100, 100, 200, true, {fill: true, color: '#000000'}, 1),
    new Sprite("./animations/person/1.png", {
        sx: null,
        sy: null,
        sWidth: null,
        sHeight: null,
        dx: canvas1.width/2-200,
        dy: canvas1.height/2-200,
        dWidth: 400,
        dHeight: 400,
    }, {isStatic: true}, {
        walk: new Animation("walk", "./animations/person", 200, 6),
    }, 99),

    new Sprite("./animations/cat/1.png", {
        sx: null,
        sy: null,
        sWidth: null,
        sHeight: null,
        dx: 100,
        dy: 200,
        dWidth: 300,
        dHeight: 200,
    }, {isStatic: false}, {
        idle: new Animation("idle", "./animations/cat", 150, 4),
    }, 1)
*/