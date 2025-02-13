/* eslint-disable import/extensions */
/* eslint-disable no-undef */
// eslint-disable-next-line import/extensions
import Sprite from './Sprite';
import { canvas } from './Constants';

class Ball extends Sprite {
  radius:number
  dx:number
  dy:number
  constructor(x:number, y:number, radius:number = 10, color:string = '#CFBAE1') {
    super(x, y, 0, 0, color); // Ball doesn't need width & height
    this.radius = radius;
    this.dx = 2; // Horizontal speed
    this.dy = -2; // Vertical speed
  }

  reset() {
    this.x = canvas.width / 2;
    this.y = canvas.height - 30;
    this.dx = 2;
    this.dy = -2;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  render(ctx:CanvasRenderingContext2D) { 
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Ball;
