/* eslint-disable no-alert */
/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
/* eslint-disable import/extensions, no-undef, no-unused-vars */
import Sprite from './Sprite.js';
import Brick from './Brick.js';
import Ball from './Ball.js';
import Paddle from './Paddle.js';
import {
  canvas, ctx, brickHeight, brickWidth, brickRowCount, brickColumnCount,
  brickPadding, brickOffsetTop, brickOffsetLeft, bricks, paddleWidth,
  paddleHeight, ballRadius,
} from './Constants.js';

const ball = new Ball(canvas.width / 2, canvas.height - 30, ballRadius);
const paddle = new Paddle((canvas.width - paddleWidth) / 2, canvas.height - paddleHeight, paddleWidth, paddleHeight);

let score = 0;
let lives = 3;

for (let c = 0; c < brickColumnCount; c += 1) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r += 1) {
    const brickX = (r * (brickWidth + brickPadding)) + brickOffsetLeft;
    const brickY = (c * (brickHeight + brickPadding)) + brickOffsetTop;
    bricks[c][r] = new Brick(brickX, brickY, brickWidth, brickHeight);
  }
}

function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      const b = bricks[c][r];
      if (b.status === 1) {
        if (ball.x > b.x && ball.x < b.x + brickWidth && ball.y > b.y && ball.y < b.y + brickHeight) {
          ball.dy = -ball.dy;
          b.status = 0;
          score += 1;
          if (score === brickRowCount * brickColumnCount) {
            alert('YOU WIN, CONGRATS!');
            document.location.reload();
          }
        }
      }
    }
  }
}

function drawBricks() {
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      const brick = bricks[c][r];
      if (brick.status === 1) {
        brick.render(ctx);
      }
    }
  }
}

function drawScore() {
  ctx.font = '16px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText(`Score: ${score}`, 8, 20);
}

function drawLives() {
  ctx.font = '16px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.move();
  paddle.move();
  drawBricks();
  ball.render(ctx);
  paddle.render(ctx);
  drawScore();
  drawLives();
  collisionDetection();

  if (ball.x + ball.dx > canvas.width - ballRadius || ball.x + ball.dx < ballRadius) {
    ball.dx = -ball.dx;
  }
  if (ball.y + ball.dy < ballRadius) {
    ball.dy = -ball.dy;
  } else if (ball.y + ball.dy > canvas.height - ballRadius) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddleWidth) {
      ball.dy = -ball.dy;
    } else {
      lives -= 1;
      if (!lives) {
        alert('GAME OVER');
        document.location.reload();
      } else {
        ball.reset();
        paddle.x = (canvas.width - paddleWidth) / 2;
      }
    }
  }

  requestAnimationFrame(draw);
}

draw();
