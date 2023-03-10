//preloader
bgImg.onload = () => {
  gsap.to(".loader p", {
    opacity: 0,
  });

  gsap.to(".loader", {
    scale: 0,
  });

  // openning screen
  let tl = new gsap.timeline({
    defaults: { duration: 1, ease: Elastic.easeOut.config(1, 0.3) },
    onStart: function () {
      pigSound.muted = false;
      pigSound.play();
    },
    onComplete: function () {
      introSound.muted = false;
      introSound.play();
    },
  });

  tl.from(".piggy", {
    delay: 1,
    duration: 1.5,
    y: 265,
    ease: Elastic.easeOut.config(1, 0.6),
  })
    .from(".header", { fontSize: 0, transformOrigin: "center" }, "=.2")
    .from(".logo", { scale: 0, transformOrigin: "center" });

  let tl2 = new gsap.timeline({
    defaults: { delay: 3.9, duration: 1, ease: Power2.easeOut },
  });

  tl2
    .from(".spinner", { scale: 0 })
    .from(
      ".spinner",
      { rotation: 360, duration: 20, repeat: -1, ease: "linear" },
      "-=4"
    );

  let tl3 = new gsap.timeline({
    defaults: { delay: 4, duration: 1, ease: Power0.easeNone },
  });

  tl3.from("#btnContainer", { display: "none" });
};

function playGame() {
  document.getElementById("opening-screen").style.display = "none";
  document.getElementById("canvas").style.display = "block";
  document.getElementById("inside-game").style.display = "block";
  click.play();
  introSound.pause();

  gameStatus = "play";
  animate();
  openModal();
}

let tl4 = new gsap.timeline({
  delay: 0.2,
  ease: Power0.easeNone,
  repeat: -1,
  repeatDelay: 0.1,
});

function openModal() {
  click.play();

  pause();
  document.getElementById("tutorial-modal").style.display = "flex";
  document.getElementById("page1").style.display = "flex";
  document.getElementById("page2").style.display = "none";
  document.getElementById("page3").style.display = "none";
  document.getElementById("page4").style.display = "none";
  tl4
    .to("#keypad4", { delay: 0.01, y: 3, boxShadow: "0 4px 0 #9f51fe" })
    .to("#keypad4", { delay: 0.1, y: 0, boxShadow: "0 7px 0 #9f51fe" })
    .to("#keypad2", { delay: 0.01, y: 3, boxShadow: "0 4px 0 #9f51fe" })
    .to("#keypad2", { delay: 0.1, y: 0, boxShadow: "0 7px 0 #9f51fe" })
    .to("#keypad3", { delay: 0.01, y: 3, boxShadow: "0 4px 0 #9f51fe" })
    .to("#keypad3", { delay: 0.1, y: 0, boxShadow: "0 7px 0 #9f51fe" })
    .to("#keypad1", { y: 3, boxShadow: "0 4px 0 #9f51fe" })
    .to("#keypad1", { delay: 0.1, y: 0, boxShadow: "0 7px 0 #9f51fe" });
}

function closeModal() {
  click.play();

  resume();
  document.getElementById("tutorial-modal").style.display = "none";
}

function nextModal(page) {
  click.play();

  switch (page) {
    case 1:
      document.getElementById("page1").style.display = "none";
      document.getElementById("page2").style.display = "flex";
      break;
    case 2:
      document.getElementById("page2").style.display = "none";
      document.getElementById("page3").style.display = "flex";
      break;
    case 3:
      document.getElementById("page3").style.display = "none";
      document.getElementById("page4").style.display = "flex";
      break;
    case 4:
      closeModal();
      break;
  }
}

function controlSound() {
  if (click.muted && eatSound.muted) {
    click.muted = false;
    eatSound.muted = false;
    document.getElementById("sound-btn").style.background = "#6302bd93";
  } else {
    click.muted = true;
    eatSound.muted = true;
    document.getElementById("sound-btn").style.background = "gray";
  }
}

function controlMusic() {
  if (levelSound.paused) {
    levelSound.play();
    document.getElementById("music-btn").style.background = "#6302bd93";
  } else {
    levelSound.pause();
    document.getElementById("music-btn").style.background = "gray";
  }
}

function timeoutWarning() {
  let tl5 = new gsap.timeline({
    defaults: { ease: Power1.easeOut, repeat: -1 },
  });

  tl5
    .to("#timer", {
      duration: 0.8,
      background: "#9f51fe",
    })
    .to("#timer", { duration: 0.5, background: "red" });
}

function endGameAnimations(scale) {
  let tl6 = new gsap.timeline({
    defaults: { ease: Power1.easeOut },
  });
  tl6
    .to(".starFill", {
      duration: 2,
      delay: 0.8,
      scaleX: scale,
      transformOrigin: "left",
    })
    .from(".piggy-status", {
      duration: 0.8,
      scale: 0,
      transformOrigin: "center",
      ease: Elastic.easeOut.config(1, 0.5),
    })
    .from(
      ".pink-spin",
      {
        duration: 0.5,
        scale: 0,
        transformOrigin: "center",
      },
      "-=.7"
    )
    .from(".pink-spin", {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "linear",
    })
    .from(
      "#replay-btn",
      {
        duration: 1,
        scale: 0,
        transformOrigin: "center",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      "-=10"
    );
}

function resume() {
  gameStatus = "play";
  levelSound.play();
  animate();
  timerStart();
}

function pause() {
  gameStatus = "pause";
  eatSound.pause();
  timeoutSound.pause();
  levelSound.pause();
  timerStop();
}
