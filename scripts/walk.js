import { objects } from "../scene/scene.js";
import { camera } from "../scene/loader.js";

document.addEventListener("keydown" , function(event) {
    const step = 30
    let DirX = 0
    let DirY = 0
    if (event.key === "w") {
        DirY = step;
        objects[objects.length-1].animations.walk.play()
    } if (event.key === "s"){
        DirY = -step;
        objects[objects.length-1].animations.walk.stop()
    } if (event.key === "a"){
        DirX = step;
        objects[objects.length-1].flip(false)
    } if (event.key === "d"){
        DirX = -step;
        objects[objects.length-1].flip(true)
    }
    camera.move(DirX, DirY)
})
