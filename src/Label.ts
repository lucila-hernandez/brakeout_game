/* eslint-disable import/extensions */
import Sprite from './Sprite';

class Label extends Sprite {
  text:any
  font:string
  constructor(x:number, y:number, text:any, color:string = '#0095DD', font:string = '16px Arial') {
    super(x, y, 0, 0, color);
    this.text = text;
    this.font = font;
  }

  render(ctx:CanvasRenderingContext2D) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(this.text, this.x, this.y);
  }
}

export default Label;
