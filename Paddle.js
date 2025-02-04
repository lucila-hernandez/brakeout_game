/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import Sprite from './Sprite.js';
import { canvas, paddleHeight, paddleWidth } from './Constants.js';

class Paddle extends Sprite {
  constructor(x, y, width, height, color = '#0095DD') {
    super(x, y, width, height, color);
    this.dx = 7;
    this.rightPressed = false;
    this.leftPressed = false;

    document.addEventListener('keydown', this.keyDownHandler.bind(this), false);
    document.addEventListener('keyup', this.keyUpHandler.bind(this), false);
    document.addEventListener('mousemove', this.mouseMoveHandler.bind(this), false);
  }

  keyDownHandler(e) {
    if (e.code === 'ArrowRight') {
      this.rightPressed = true;
    } else if (e.code === 'ArrowLeft') {
      this.leftPressed = true;
    }
  }

  keyUpHandler(e) {
    if (e.code === 'ArrowRight') {
      this.rightPressed = false;
    } else if (e.code === 'ArrowLeft') {
      this.leftPressed = false;
    }
  }

  mouseMoveHandler(e) {
    const relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
      this.x = relativeX - this.width / 2;
    }
  }

  move() {
    if (this.rightPressed && this.x < canvas.width - this.width) {
      this.x += this.dx;
    } else if (this.leftPressed && this.x > 0) {
      this.x -= this.dx;
    }
  }

  render(ctx) {
    ctx.beginPath();
    ctx.rect(this.x, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Paddle;
