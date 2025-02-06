/* eslint-disable import/extensions */
import Sprite from './Sprite.js';

class Label extends Sprite {
  constructor(x, y, text, color = '#0095DD', font = '16px Arial') {
    super(x, y, 0, 0, color);
    this.text = text;
    this.font = font;
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(this.text, this.x, this.y);
  }
}

export default Label;
