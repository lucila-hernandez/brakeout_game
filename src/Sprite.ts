// Sprite draws a rectangle of color at x, y with and width and height
class Sprite {
  x:number
  y:number
  width:number
  height:number
  color:string
  constructor(x:number, y:number, width:number, height:number, color:string = '#f00') {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  // render the sprite (like drawing the rectangle)
  render(ctx:CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Sprite;
