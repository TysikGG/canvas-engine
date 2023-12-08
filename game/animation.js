const canvas1 = document.getElementById('canvas1');
const ctx = canvas1.getContext("2d");

export class Animation {
    constructor (name, path, delay, frames) {
        this.name = name;
        this.path = path;
        this.delay = delay;
        this.frames = frames;
        this.frame = 1;
        this.interval = null;
        this.started = false;
    }
    start_changing_frames() {
        this.interval = setInterval(() => { // интервалы изменения анимации
            this.frame += 1;
            if (this.frame > this.frames) {
                this.frame = 1;
            }
        }, this.delay)
    }
    play() {
        if (!this.started) {
            this.start_changing_frames()
            this.started = true
        }
    }
    stop() {
        clearInterval(this.interval)
        this.frame = 1;
        this.started = false
    }
    get_sprite() {
        if (!document.getElementById(`${this.path}/${this.frame}.png`)) { // функция которая загружает изображение для анимаций
            var img = document.createElement('img');
            canvas1.appendChild(img);
            img.id = `${this.path}/${this.frame}.png`;
            img.crossOrigin = 'anonymous';
            img.src = `${this.path}/${this.frame}.png`;
        }
        img = document.getElementById(`${this.path}/${this.frame}.png`);
        return img
    }
}