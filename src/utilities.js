function animate() {
  if (targets.length === 0) {
    //when piggy eats all targets
    cancelAnimationFrame(animate);
    endGame();
  } else if (gameStatus === "play") {
    requestAnimationFrame(animate);
    generalFrame++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background.draw();

    targets.forEach((target) => {
      target.draw();
    });

    particlesArray.forEach((particle, i) => {
      if (particle.opacity <= 0) {
        particlesArray.splice(i, 1);
      } else {
        particle.update();
      }
    });

    piggy.update();

    moving = true;
    placeCharacter();
  }
}

//the position conditions based on the entered keys
function placeCharacter() {
  const dir = held_directions[0];
  if (dir === directions.up) {
    moving = !collisionDetection(0, speed);
    if (moving)
      if (piggy.position.y > 100) piggy.position.y -= speed;
      else if (background.position.y < 15) {
        background.position.y += speed;
        targets.forEach((target) => {
          target.position.y += speed;
        });
      }
    eatObjects(0, speed);
  }
  if (dir === directions.down) {
    moving = !collisionDetection(0, -speed);
    if (moving)
      if (piggy.position.y + piggy.height < 450) piggy.position.y += speed;
      else if (background.position.y + background.height > 460) {
        background.position.y -= speed;
        targets.forEach((target) => {
          target.position.y -= speed;
        });
      }
    eatObjects(0, -speed);
  }
  if (dir === directions.left) {
    moving = !collisionDetection(speed, 0);
    if (moving)
      if (piggy.position.x > 110) piggy.position.x -= speed;
      else if (background.position.x < 15) {
        background.position.x += speed;
        targets.forEach((target) => {
          target.position.x += speed;
        });
      }
    eatObjects(speed, 0);
  }
  if (dir === directions.right) {
    moving = !collisionDetection(-speed, 0);
    if (moving)
      if (piggy.position.x + piggy.width < 900) piggy.position.x += speed;
      else if (background.position.x + background.width > 1050) {
        background.position.x -= speed;
        targets.forEach((target) => {
          target.position.x -= speed;
        });
      }
    eatObjects(-speed, 0);
  }
}

//some targets are not crossable
function collisionDetection(velocityX, velocityY) {
  for (let i = 0; i < obstacles.length; i++) {
    if (
      piggy.position.x + piggy.width / 1.1 - 8 >=
        obstacles[i].position.x + velocityX &&
      piggy.position.x + 8 <=
        obstacles[i].position.x + velocityX + obstacles[i].width / 1.1 &&
      piggy.position.y + 8 <=
        obstacles[i].position.y + velocityY + obstacles[i].height / 1.1 &&
      piggy.position.y + piggy.height / 1.1 - 8 >=
        obstacles[i].position.y + velocityY
    )
      return true;
  }

  return false;
}

function eatObjects(velocityX, velocityY) {
  for (let i = 0; i < targets.length; i++) {
    if (
      targets[i].size / 1.2 <= piggy.size &&
      piggy.position.x + piggy.width / 1.1 - 10 >=
        targets[i].position.x + velocityX &&
      piggy.position.x + 10 <=
        targets[i].position.x + velocityX + targets[i].width / 1.1 &&
      piggy.position.y + 10 <=
        targets[i].position.y + velocityY + targets[i].height / 1.1 &&
      piggy.position.y + piggy.height / 1.1 - 10 >=
        targets[i].position.y + velocityY
    ) {
      for (let j = 0; j < 15; j++) {
        // Spreading colored particles after eating
        particlesArray.push(
          new Particle({
            position: {
              x: targets[i].position.x + targets[i].width / 2,
              y: targets[i].position.y + targets[i].height / 2,
            },
            color: targets[i].color,
          })
        );
      }
      setTimeout(() => {
        //using setTimeout to avoid flashing
        piggy.eat(targets[i].width / 30);
        let obstacleIndex = obstacles.indexOf(targets[i]);
        if (obstacleIndex > -1) obstacles.splice(obstacleIndex, 1);
        changeSetups(targets[i].size);
        targets.splice(i, 1);
      }, 0);
      break;
    }
  }
}

function changeSetups(targetSize) {
  speed -= targetSize / 5000;
  sizeLable.innerHTML = `${(piggy.size * 0.026).toFixed(2)}cm`;
  sizeBar.style.width = `${(piggy.size * 100) / 654}%`;
}

function endGame() {
  pause();
  let piggyImg = document.querySelector(".piggy-status");
  let modalHeader = document.querySelector(".modalContainer h1");
  score = ((90 - targets.length) / 90).toFixed(1);
  if (score < 0.7) {
    // Failed
    failedSound.play();
    modalHeader.innerHTML = "Level1<div>Failed!</div>";
    piggyImg.setAttribute("src", "img/sadPiggy.png");
  } else {
    // win
    levelUp.play();
    modalHeader.innerHTML = "Level1<div>Completed</div>";
    piggyImg.setAttribute("src", "img/piggyFull.png");
  }
  document.getElementById("endGame-modal").style.display = "flex";

  endGameAnimations(score);
}

addEventListener("keydown", (e) => {
  let dir = keys[e.key];
  if (dir && held_directions.indexOf(dir) === -1) held_directions.unshift(dir);
});

addEventListener("keyup", (e) => {
  let dir = keys[e.key],
    index = held_directions.indexOf(dir);

  if (index > -1) held_directions.splice(index, 1);
});
