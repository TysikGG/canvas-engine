import { Camera } from './game/camera.js'
import { Rect } from './game/rect.js'
import { Sprite } from './game/sprite.js'
import { Animation } from './game/animation.js';
import { objects } from './scene/scene.js';
import { load_content, camera } from './scene/loader.js';
import "./scripts/walk.js";
// import "./scripts/jump.js";

const canvas1 = document.getElementById('canvas1');
const ctx = canvas1.getContext("2d");

load_content()

function render() {
    ctx.clearRect(0, 0, canvas1.width, canvas1.height); // очищение поля
    objects.sort(function(a, b) {return a.position - b.position}); // сортировка по позициям

    for (const object of objects) object.draw() // отрисовка

}



var intervalID = -1;
var QueueNewFrame = function () {
    if (window.requestAnimationFrame)
        window.requestAnimationFrame(renderingLoop);
    else if (window.msRequestAnimationFrame)
        window.msRequestAnimationFrame(renderingLoop);
    else if (window.webkitRequestAnimationFrame)
        window.webkitRequestAnimationFrame(renderingLoop);
    else if (window.mozRequestAnimationFrame)
        window.mozRequestAnimationFrame(renderingLoop);
    else if (window.oRequestAnimationFrame)
        window.oRequestAnimationFrame(renderingLoop);
    else {
        QueueNewFrame = function () {};
        intervalID = window.setInterval(renderingLoop, 1);
    }
};

var renderingLoop = function () {
    render();
    QueueNewFrame();
};
renderingLoop()
// document.addEventListener('DOMContentLoaded',()=>setInterval(render, 0));