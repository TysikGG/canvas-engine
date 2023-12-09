import { camera } from "../scene/loader.js";
import { objects } from "../scene/scene.js";

function gravity_check(step) {
    let person = objects[objects.length-1];
    person.dy += step;

    for (let object of objects) {
        if (!object.isStatic) {
            console.log(object.collideWith(person))
            if (object.collideWith(person)) {
                person.dy -= step;
                return true; // true - твёрдая поверхность под обьектом
            } else {
                console.log(person.dy)
            }
        }
    }
    person.dy -= step;
    return false; // false - свободное падение
}

export function change_via_gravity() {
    for (let i = 0; i < 30; i++) {
        if (!gravity_check(30-i)) {
            camera.move(0, -(30-i));
            break;
        }
    }
}