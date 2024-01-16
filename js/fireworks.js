//https://github.com/PixxxeL/js-fireworks/blob/master/js/fireworks.js

class JS_FIREWORKS {

  _constructor() {
    const canvas = document.createElement('canvas');
    canvas.id = "fireworks-canvas";

    this._canvas = canvas;
    document.body.appendChild(this._canvas);
    this.tmp = 5000
    this._ctx = this._canvas.getContext('2d');
    this._width = window.innerWidth;
    this._height = window.innerHeight;
    this._hue = 120;
    this._particleCount = 50;
    this._tick = 0;
    this._fps = 30;
    this._minDelay = 30;
    this._maxDelay = 90;
    this._boundaries = {
      top: 50,
      bottom: this._height * 0.5,
      left: 50,
      right: this._width - 50
    };
  }

  start() {
      console.log("gh")
      this._isRunning = true;
      this._constructor();
      while (this._isRunning){
          console.log("][[]]")
          this._render();
      }
  }

  stop() {
      console.error("w")
      this._isRunning = false;
      this._canvas.remove();
  }

  _render() {
      var tmp;
      this._render;
      this._hue += 0.5;
      this._ctx.globalCompositeOperation = 'destination-out';
      this._ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      this._ctx.fillRect(0, 0, this._width, this._height);
      this._ctx.globalCompositeOperation = 'lighter';

      for (var i = 0; i < this.tmp.length; i++) {
        this.tmp[i].draw();
        this.tmp[i].update(function () {
          this.tmp.splice(i, 1);
        });
      }

      if (this._tick === this._fps) {
          console.log("op")
          this._width / 2,
          this._height,
          this._randIntRange(this._boundaries.left, this._boundaries.right),
          this._randIntRange(this._boundaries.top, this._boundaries.bottom),
          this._ctx,
          this._hue
          this._tick = 0;
      }
      this._tick++;
  };



  _randIntRange(min, max) {
    var cached = {};

    return function () {
      if (cached[min] === undefined) {
        cached[min] = _randomIntRange(min, max);
      }
      return cached[min];
    };
  }


  _distance(x1, y1, x2, y2) {
    var dx = x2 - x1,
      dy = y2 - y1;

    return Math.sqrt(dx * dx + dy * dy);
  }
}

window.JS_FIREWORKS = new JS_FIREWORKS
