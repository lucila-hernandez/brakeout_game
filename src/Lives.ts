class Lives {
  x:number
  y:number
  lives:number
  color:string
  font:string
  constructor(x:number, y:number, initialLives:number = 3, color:string = '#0095DD', font:string = '16px Arial') {
    this.x = x;
    this.y = y;
    this.lives = initialLives;
    this.color = color;
    this.font = font;
  }

  decrement() {
    this.lives -= 1;
  }

  draw(ctx:CanvasRenderingContext2D) {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Lives: ${this.lives}`, this.x, this.y);
  }
}

export default Lives;
