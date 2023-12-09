const canvas1 = document.getElementById('canvas1');
const ctx = canvas1.getContext("2d");

export class Rect {
    constructor(dx, dy, wight, height, isStatic, config, position) {
        this.dx = dx;
        this.dy = dy;
        this.width = wight;
        this.height = height;
        this.position = position
        if (!config?.fill) this.fill = false;
        else {
            this.fill = config.fill;
            this.color = config.color;
        }

        this.isStatic = isStatic;
    }

    draw() {
        if (this.fill) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.dx, this.dy, this.width, this.height)
        } else {
            ctx.strokeRect(this.dx, this.dy, this.width, this.height)
        }
    }

    collideWith(object) {
        let x = this.dx
        let y = this.dy
        let w = this.width
        let h = this.height
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
