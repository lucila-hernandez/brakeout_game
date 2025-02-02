// eslint-disable-next-line import/extensions
import Sprite from './Sprite.js';

class Ball extends Sprite {
  constructor(x, y, radius = 10, color = '#0095DD') {
    super(x, y, 0, 0, color); // Ball doesn't need width & height
    this.radius = radius;
    this.dx = 2; // Horizontal speed
    this.dy = -2; // Vertical speed
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  render(ctx) { // Overrides Sprite's render method
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Ball;
