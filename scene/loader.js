import { objects } from "./scene.js";
import { Camera } from '../game/camera.js'
import { Rect } from '../game/rect.js'
import { Sprite } from '../game/sprite.js'
import { Animation } from '../game/animation.js';

const canvas1 = document.getElementById('canvas1');

export let camera = new Camera(canvas1.width/2, canvas1.height/2, 100)

export function load_content() {
    objects[objects.length-1].animations.walk.play();
}
