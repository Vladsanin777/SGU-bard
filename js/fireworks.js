class JS_FIREWORKS {

  constructor() {
    // Правила класса
    const canvas = document.createElement('canvas');
    canvas.id = "fireworks-canvas";
    this._canvas = canvas;
    this.fireworks = [];
    this.ctx = this.canvas.getContext('2d');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.hue = 120;
    this.particleCount = 50;
    this.tick = 0;
    this.fps = 30;
    this.minDelay = 30;
    this.maxDelay = 90;
    this.coordinates = [];
    this.particles = [];

    // Методы класса

    this._render();
  }

  stop() {
    // Правила метода

    this.isRunning = false;
    this.canvas.parentNode.removeChild(this.canvas);
  }

  draw() {
    // Правила метода

    var last = this.coordinates.length - 1;
    this.ctx.beginPath();
    this.ctx.moveTo(this.coordinates[last][0], this.coordinates[last][1]);
    this.ctx.lineTo(this.x, this.y);
    this.ctx.strokeStyle = `hsl(${this.hue}, 100%, ${this.brightness }%)`;
    this.ctx.stroke();
  };

  update(callback) {
    // Правила метода

    this.coordinates.pop();
    this.coordinates.unshift([this.x, this.y]);
    this.speed *= this.acceleration;
    var vx = Math.cos(this.angle) * this.speed,
      vy = Math.sin(this.angle) * this.speed;
    this.currentDistance = this.distance(this.sx, this.sy, this.x + vx, this.y + vy);
    if (this.currentDistance >= this.totalDistance) {
      callback(this.dx, this.dy, this.hue);
    } else {
      this.x += vx;
      this.y += vy;
    }
  };

  distance(x1, y1, x2, y2) {
    // Правила метода

    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  };

  _render() {
    // Правила метода

    this.hue += 0.5;
    this.ctx.globalCompositeOperation = 'destination-out';
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.globalCompositeOperation = 'lighter';
    var tmp = this.fireworks.length;
    while (tmp > 0) {
      tmp--;
      this.fireworks[tmp].draw();
      this.fireworks[tmp].update(function (x, y, hue) {
        count = _particleCount;
        while (count--) {
          this.particles.appendChild(this.Particle(x, y, this.ctx, hue));
        }
        this.fireworks.splice(tmp, 1);
      });
    }
    // ...
  }

  _randomRange(min, max) {
    // Правила метода

    return Math.random() * (max - min) + min;
  };

  _randomIntRange(min, max) {
    // Правила метода

    return this._randomRange(min, max)|0;
  };
}

window.JS_FIREWORKS = new JS_FIREWORKS;
