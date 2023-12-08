import { objects } from "./scene.js";
import { Camera } from '../game/camera.js'
import { Rect } from '../game/rect.js'
import { Sprite } from '../game/sprite.js'
import { Animation } from '../game/animation.js';

export let camera = new Camera(0, 0, 100)

export function load_content() {
    objects[3].animations.idle.play();
    
}
