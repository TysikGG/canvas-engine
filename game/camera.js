import { objects } from "../scene/scene.js";

export class Camera {
    constructor(x, y, fov) {
        this.x = x;
        this.y = y;
        this.fov = fov;
    }
    move(x, y) {
        this.dx += x
        this.dy += y
        for (const obj of objects) {

            if (!obj.isStatic) {
                obj.dx += x
                obj.dy += y
            }
        }
    }
    changeFov(fov) { // не работает
        for (const object of objects) {
            this.fov = this.fov + fov
        }
        this.fov = fov
    }
}
