class Particle {
  constructor({ position, color }) {
    this.position = position;
    this.velocity = {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
    };
    this.radius = Math.random() * 3;
    this.color = color;
    this.opacity = 1;
  }
  draw() {
    ctx.save();
    ctx.globalAlph = this.opacity;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    this.opacity -= 0.02;
  }
}

//making particle objects in utilities.js
