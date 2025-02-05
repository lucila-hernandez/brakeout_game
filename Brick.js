/* eslint-disable import/extensions */
import Sprite from './Sprite.js';

class Brick extends Sprite {
  constructor(x, y, width, height, color = '#C1E0F7') {
    super(x, y, width, height, color); // pass arguments to Sprite
    this.status = 1; // adds a new property
  }
}

export default Brick;
