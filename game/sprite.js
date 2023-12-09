const canvas1 = document.getElementById('canvas1');
const ctx = canvas1.getContext("2d");

export class Sprite {
    constructor(image, coordinates, config, animations, position) {

        this.sx = coordinates.sx;
        this.sy = coordinates.sy;
        this.sWidth = coordinates.sWidth;
        this.sHeight = coordinates.sHeight;
        this.dx = coordinates.dx;
        this.dy = coordinates.dy;
        this.dWidth = coordinates.dWidth;
        this.dHeight = coordinates.dHeight;

        this.isStatic = config.isStatic;
        this.image = image;

        this.animations = animations;
        this.first_start = true;

        this.temp_dx = coordinates.dx;
        this.position = position;
    }

    draw() {
        if (!document.getElementById(this.image)) { // функция которая загружает изображение
            var img = document.createElement('img');
            canvas1.appendChild(img);
            img.id = this.image;
            img.crossOrigin = 'anonymous';
            img.src = this.image;
        }

        img = document.getElementById(this.image);
        if (this.isStatic) { // пока что флип не поддерживается для нестатичных обьектов
            if (this.flipped) { // если флипнуто то переворачивать
                if (this.dx >= 0) this.dx = -this.dx - this.dWidth;
                ctx.save();
                ctx.scale(-1, 1);
            } else {
                this.dx = this.temp_dx;
            }
        }

        var arr = [];
        for (var key in this.animations) {
            if (this.animations.hasOwnProperty(key)) {
                arr.push([this.animations[key]]);
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0].started == true) {
                img = arr[i][0].get_sprite()
            }
        }

        ctx.drawImage(img, this.dx, this.dy, this.dWidth, this.dHeight) // this.sx, this.sy, this.sWidth, this.sHeight, 

        if (this.flipped) ctx.restore()
    }

    flip(bool) {
        this.flipped = bool
    }

    collideWith(object) {
        let x = this.temp_dx
        let y = this.dy
        let w = this.dWidth
        let h = this.dHeight
        let x1 = object.dx
        let y1 = object.dy
        let w1 = object.dWidth
        let h1 = object.dHeight

        if (this.isStatic && this.temp_dx != undefined) x = this.temp_dx
        if (object.isStatic && object.temp_dx != undefined) x1 = object.temp_dx
        // if (object.flipped == true) x1 = object.temp_dx
        // if (this.flipped == true) x = this.temp_dx

        if (
            x < x1 + w1 &&
            x + w > x1 &&
            y < y1 + h1 &&
            y + h > y
        ) return true
        else return false
    }
}