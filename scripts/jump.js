import { objects } from "../scene/scene.js";

document.addEventListener("keypress" , function(event) {
    console.log(event.key )
    if (event.key === " "){
        jumped()
    }
    // camera.move(DirX, DirY)
})

function jumped() {
    const GRAVITY = 9.81; // м/с^2
    const JUMP_FORCE = -10; // м/с^2
    setInterval(() => {
        let dt = 1
        const gravity = GRAVITY * dt;
        const jumpForce = JUMP_FORCE * dt;
       
        objects[objects.length-1].dy += gravity;
      
        if (keys.isDown(KEY_SPACE)) {
            objects[objects.length-1].dx = jumpForce;
        } else {
            objects[objects.length-1].dx -= gravity;
        }
    }, 1)
}