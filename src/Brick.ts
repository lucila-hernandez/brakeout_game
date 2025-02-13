/* eslint-disable import/extensions */
import Sprite from './Sprite';

class Brick extends Sprite {
  status:number
  constructor(x:number, y:number, width:number, height:number, color:string = '#C1E0F7') {
    super(x, y, width, height, color); // pass arguments to Sprite
    this.status = 1; // adds a new property
  }
}

export default Brick;
