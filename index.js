import { objects } from './scene/scene.js';
import { load_content } from './scene/loader.js';
import { standart_functions } from "./scripting.js";

const canvas1 = document.getElementById('canvas1');
const ctx = canvas1.getContext("2d");
load_content()

function render() {
    ctx.clearRect(0, 0, canvas1.width, canvas1.height); // очищение поля
    objects.sort(function(a, b) {return a.position - b.position}); // сортировка по позициям
    // console.log(objects[0].collideWith(objects[1]))
    for (const object of objects) object.draw(); // отрисовка
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
    for (let f of standart_functions) f() // выполнение скриптовых функций
    render();
    QueueNewFrame();
};
renderingLoop()
// document.addEventListener('DOMContentLoaded',()=>setInterval(render, 0));