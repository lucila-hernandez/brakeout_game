/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import Sprite from './Sprite.js';

class Score {
  x:number
  y:number
  score:number
  color:string
  font:string
  constructor(x:number, y:number, color:string = '#0095DD', font:string = '16px Arial') {
    this.x = x;
    this.y = y;
    this.score = 0;
    this.color = color;
    this.font = font;
  }

  increment() {
    this.score += 1;
  }

  draw(ctx:CanvasRenderingContext2D) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Score: ${this.score}`, this.x, this.y);
  }
}

export default Score;
