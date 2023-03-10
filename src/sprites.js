class Sprite {
  constructor({ position, image, width, height }) {
    this.position = position;
    this.image = image;
    this.width = width;
    this.height = height;
    this.size = this.calculateSize();
  }

  draw() {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  calculateSize() {
    return Math.sqrt(this.width * this.width + this.height * this.height);
  }
}

class Player extends Sprite {
  constructor({ position, image, width, height, frames }) {
    super({ position, image, width, height });
    this.size = this.calculateSize();
    this.frame = 0;
    this.frames = frames;
    this.sprites = {
      default: piggyImg,
      eat: piggyEatImg,
    };

    this.currentSprite = this.sprites.default;
  }

  draw() {
    ctx.drawImage(
      this.currentSprite,
      430 * this.frame,
      0,
      430,
      362,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update() {
    if (generalFrame % 5 === 0) this.frame++;
    if (this.frame >= this.frames) {
      this.currentSprite = this.sprites.default;
      this.frames = 1;
      this.frame = 0;
    }
    this.draw();
  }

  eat(add) {
    eatSound.play();
    this.currentSprite = this.sprites.eat;
    this.frames = 23;
    this.width += add;
    this.height += add;
    this.position.y -= 6;
    this.size = this.calculateSize();
  }
}

const background = new Sprite({
  position: {
    x: canvas.width / 2 - 1300,
    y: canvas.height / 2 - 392,
  },
  image: bgImg,
  width: 2600,
  height: 1384,
});

const piggy = new Player({
  position: {
    x: canvas.width / 2 - 40,
    y: canvas.height / 2 - 35,
  },
  image: piggyImg,
  width: 85,
  height: 71,
  frames: 1,
});
