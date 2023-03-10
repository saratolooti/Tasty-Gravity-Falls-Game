class Target extends Sprite {
  constructor({ position, image, width, height, frame, color }) {
    super({ position, image, width, height });
    this.frame = frame;
    this.color = color;
  }

  draw() {
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.frame * this.width,
      0,
      this.width,
      this.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

const targets = [
  //1
  new Target({
    position: {
      x: 700,
      y: 950,
    },
    image: polariod1Img,
    width: 370,
    height: 386,
    frame: 0,
    color: "#F7EFE7",
  }),
  //2
  new Target({
    position: {
      x: -700,
      y: 50,
    },
    image: polariod2Img,
    width: 370,
    height: 374,
    frame: 0,
    color: "#F7EFE7",
  }),
  //3
  new Target({
    position: {
      x: -100,
      y: 550,
    },
    image: polariod3Img,
    width: 370,
    height: 374,
    frame: 0,
    color: "#F7EFE7",
  }),
  //4
  new Target({
    position: {
      x: -250,
      y: 350,
    },
    image: polariod4Img,
    width: 370,
    height: 374,
    frame: 0,
    color: "#F7EFE7",
  }),
  //5
  new Target({
    position: {
      x: -50,
      y: 200,
    },
    image: polariod5Img,
    width: 370,
    height: 374,
    frame: 0,
    color: "#F7EFE7",
  }),
  //6
  new Target({
    position: {
      x: 550,
      y: 850,
    },
    image: polariod6Img,
    width: 370,
    height: 386,
    frame: 0,
    color: "#F7EFE7",
  }),
  //7
  new Target({
    position: {
      x: 400,
      y: -90,
    },
    image: pinsImg,
    width: 214,
    height: 216,
    frame: 0,
    color: "#F8AF1C",
  }),
  //8
  new Target({
    position: {
      x: 1500,
      y: 550,
    },
    image: pinsImg,
    width: 214,
    height: 216,
    frame: 1,
    color: "#7F394B",
  }),
  //9
  new Target({
    position: {
      x: -250,
      y: 1050,
    },
    image: pinsImg,
    width: 214,
    height: 216,
    frame: 2,
    color: "#244D8F",
  }),
  //10
  new Target({
    position: {
      x: -247,
      y: 700,
    },
    image: patchsImg,
    width: 181,
    height: 178,
    frame: 0,
    color: "#244D8F",
  }),
  //11
  new Target({
    position: {
      x: 300,
      y: 1100,
    },
    image: patchsImg,
    width: 181,
    height: 178,
    frame: 1,
    color: "#244D8F",
  }),
  //12
  new Target({
    position: {
      x: 1580,
      y: 190,
    },
    image: patchsImg,
    width: 181,
    height: 178,
    frame: 2,
    color: "#34C633",
  }),
  //13
  new Target({
    position: {
      x: 700,
      y: 550,
    },
    image: badgesImg,
    width: 123,
    height: 127,
    frame: 0,
    color: "#82618C",
  }),
  //14
  new Target({
    position: {
      x: 800,
      y: 850,
    },
    image: badgesImg,
    width: 123,
    height: 127,
    frame: 1,
    color: "#BA353F",
  }),
  //15
  new Target({
    position: {
      x: -700,
      y: 550,
    },
    image: badgesImg,
    width: 123,
    height: 127,
    frame: 3,
    color: "#BAB3C0",
  }),
  //16
  new Target({
    position: {
      x: 1200,
      y: 450,
    },
    image: felt1Img,
    width: 214,
    height: 216,
    frame: 0,
    color: "#E5CD05",
  }),
  //17
  new Target({
    position: {
      x: 955,
      y: 150,
    },
    image: felt2Img,
    width: 305,
    height: 319,
    frame: 0,
    color: "#D452E9",
  }),
  //18
  new Target({
    position: {
      x: 1100,
      y: 100,
    },
    image: felt3Img,
    width: 325,
    height: 357,
    frame: 0,
    color: "#DD345B",
  }),
  //19
  new Target({
    position: {
      x: 950,
      y: 100,
    },
    image: badgesImg,
    width: 123,
    height: 127,
    frame: 2,
    color: "#347E35",
  }),
  //20
  new Target({
    position: {
      x: -100,
      y: 100,
    },
    image: embroidsImg,
    width: 79,
    height: 81,
    frame: 0,
    color: "#285292",
  }),
  //21
  new Target({
    position: {
      x: 950,
      y: 300,
    },
    image: embroidsImg,
    width: 79,
    height: 81,
    frame: 1,
    color: "#285292",
  }),
  //22
  new Target({
    position: {
      x: 1200,
      y: 950,
    },
    image: money1Img,
    width: 409,
    height: 319,
    frame: 0,
    color: "#569A6B",
  }),
  //23
  new Target({
    position: {
      x: 1150,
      y: 850,
    },
    image: money2Img,
    width: 402,
    height: 374,
    frame: 0,
    color: "#569A6B",
  }),
  //24
  new Target({
    position: {
      x: 1120,
      y: 750,
    },
    image: money3Img,
    width: 407,
    height: 315,
    frame: 0,
    color: "#569A6B",
  }),
  //25
  new Target({
    position: {
      x: 1220,
      y: 850,
    },
    image: money3Img,
    width: 407,
    height: 315,
    frame: 0,
    color: "#569A6B",
  }),
  //26
  new Target({
    position: {
      x: 100,
      y: 100,
    },
    image: macaronis1Img,
    width: 85,
    height: 89,
    frame: 0,
    color: "#F2C846",
  }),
  //27
  new Target({
    position: {
      x: -150,
      y: 870,
    },
    image: macaronis1Img,
    width: 85,
    height: 89,
    frame: 1,
    color: "#F2C846",
  }),
  //28
  new Target({
    position: {
      x: -350,
      y: 450,
    },
    image: macaronis2Img,
    width: 92,
    height: 76,
    frame: 0,
    color: "#F2C846",
  }),
  //29
  new Target({
    position: {
      x: 400,
      y: 400,
    },
    image: macaronis2Img,
    width: 92,
    height: 76,
    frame: 1,
    color: "#F2C846",
  }),
  //30
  new Target({
    position: {
      x: -760,
      y: 650,
    },
    image: macaronis1Img,
    width: 85,
    height: 89,
    frame: 0,
    color: "#F2C846",
  }),
  //31
  new Target({
    position: {
      x: -200,
      y: -50,
    },
    image: macaronis1Img,
    width: 85,
    height: 89,
    frame: 1,
    color: "#F2C846",
  }),
  //32
  new Target({
    position: {
      x: 300,
      y: 750,
    },
    image: macaronis2Img,
    width: 92,
    height: 76,
    frame: 0,
    color: "#F2C846",
  }),
  //33
  new Target({
    position: {
      x: 1000,
      y: 800,
    },
    image: macaronis2Img,
    width: 92,
    height: 76,
    frame: 1,
    color: "#F2C846",
  }),
  //34
  new Target({
    position: {
      x: 1100,
      y: 1150,
    },
    image: macaronis1Img,
    width: 85,
    height: 89,
    frame: 0,
    color: "#F2C846",
  }),
  //35
  new Target({
    position: {
      x: 900,
      y: -80,
    },
    image: macaronis1Img,
    width: 85,
    height: 89,
    frame: 1,
    color: "#F2C846",
  }),
  //36
  new Target({
    position: {
      x: 1400,
      y: 10,
    },
    image: macaronis2Img,
    width: 92,
    height: 76,
    frame: 0,
    color: "#F2C846",
  }),
  //37
  new Target({
    position: {
      x: -700,
      y: 800,
    },
    image: gumImg,
    width: 380,
    height: 452,
    frame: 0,
    color: "#B4679F",
  }),
  //38
  new Target({
    position: {
      x: 110,
      y: 480,
    },
    image: heart1Img,
    width: 43,
    height: 49,
    frame: 0,
    color: "#E61449",
  }),
  //39
  new Target({
    position: {
      x: -100,
      y: 200,
    },
    image: heart1Img,
    width: 43,
    height: 49,
    frame: 0,
    color: "#E61449",
  }),
  //40
  new Target({
    position: {
      x: -250,
      y: 500,
    },
    image: heart1Img,
    width: 43,
    height: 49,
    frame: 1,
    color: "#E61449",
  }),
  //41
  new Target({
    position: {
      x: 250,
      y: 1000,
    },
    image: heart2Img,
    width: 43,
    height: 49,
    frame: 0,
    color: "#E61449",
  }),
  //42
  new Target({
    position: {
      x: 150,
      y: 800,
    },
    image: heart2Img,
    width: 43,
    height: 49,
    frame: 1,
    color: "#E61449",
  }),
  //43
  new Target({
    position: {
      x: 50,
      y: 700,
    },
    image: heart2Img,
    width: 43,
    height: 49,
    frame: 0,
    color: "#E61449",
  }),
  //44
  new Target({
    position: {
      x: 0,
      y: 1000,
    },
    image: heart2Img,
    width: 43,
    height: 49,
    frame: 1,
    color: "#E61449",
  }),
  //45
  new Target({
    position: {
      x: 1200,
      y: 100,
    },
    image: heart2Img,
    width: 43,
    height: 49,
    frame: 1,
    color: "#E61449",
  }),
  //46
  new Target({
    position: {
      x: 1500,
      y: 300,
    },
    image: heart1Img,
    width: 43,
    height: 49,
    frame: 0,
    color: "#E61449",
  }),
  //47
  new Target({
    position: {
      x: 1300,
      y: 600,
    },
    image: heart2Img,
    width: 43,
    height: 49,
    frame: 1,
    color: "#E61449",
  }),
  //48
  new Target({
    position: {
      x: 350,
      y: 650,
    },
    image: star1Img,
    width: 48,
    height: 53,
    frame: 1,
    color: "#8ACACA",
  }),
  //49
  new Target({
    position: {
      x: 250,
      y: 750,
    },
    image: star1Img,
    width: 48,
    height: 53,
    frame: 0,
    color: "#8ACACA",
  }),
  //50
  new Target({
    position: {
      x: 280,
      y: 680,
    },
    image: star2Img,
    width: 46,
    height: 49,
    frame: 0,
    color: "#EFAC32",
  }),
  //51
  new Target({
    position: {
      x: 250,
      y: 600,
    },
    image: heart1Img,
    width: 43,
    height: 49,
    frame: 0,
    color: "#E61449",
  }),
  //52
  new Target({
    position: {
      x: 230,
      y: 580,
    },
    image: eye1Img,
    width: 21,
    height: 27,
    frame: 0,
    color: "#FFFFFF",
  }),
  //53
  new Target({
    position: {
      x: 250,
      y: 680,
    },
    image: eye1Img,
    width: 21,
    height: 27,
    frame: 1,
    color: "#FFFFFF",
  }),
  //54
  new Target({
    position: {
      x: 280,
      y: 650,
    },
    image: eye2Img,
    width: 21,
    height: 27,
    frame: 1,
    color: "#FFFFFF",
  }),
  //55
  new Target({
    position: {
      x: 295,
      y: 550,
    },
    image: eye2Img,
    width: 21,
    height: 27,
    frame: 0,
    color: "#FFFFFF",
  }),
  //56
  new Target({
    position: {
      x: 10,
      y: 10,
    },
    image: eye2Img,
    width: 21,
    height: 27,
    frame: 1,
    color: "#FFFFFF",
  }),
  //57
  new Target({
    position: {
      x: -20,
      y: 2,
    },
    image: eye2Img,
    width: 21,
    height: 27,
    frame: 0,
    color: "#FFFFFF",
  }),
  //58
  new Target({
    position: {
      x: 1243,
      y: 260,
    },
    image: eye1Img,
    width: 21,
    height: 27,
    frame: 0,
    color: "#FFFFFF",
  }),
  //59
  new Target({
    position: {
      x: 1285,
      y: 235,
    },
    image: eye1Img,
    width: 21,
    height: 27,
    frame: 1,
    color: "#FFFFFF",
  }),
  //60
  new Target({
    position: {
      x: 285,
      y: 435,
    },
    image: star3Img,
    width: 66,
    height: 39,
    frame: 1,
    color: "#EFAC32",
  }),
  //61
  new Target({
    position: {
      x: 150,
      y: 1050,
    },
    image: star3Img,
    width: 66,
    height: 39,
    frame: 0,
    color: "#EFAC32",
  }),
  //62
  new Target({
    position: {
      x: 1000,
      y: 1100,
    },
    image: star3Img,
    width: 66,
    height: 39,
    frame: 1,
    color: "#EFAC32",
  }),
  //63
  new Target({
    position: {
      x: 180,
      y: 1100,
    },
    image: star3Img,
    width: 66,
    height: 39,
    frame: 1,
    color: "#EFAC32",
  }),
  //64
  new Target({
    position: {
      x: 110,
      y: 980,
    },
    image: star2Img,
    width: 46,
    height: 49,
    frame: 0,
    color: "#EFAC32",
  }),
  //65
  new Target({
    position: {
      x: 120,
      y: 1080,
    },
    image: star2Img,
    width: 46,
    height: 49,
    frame: 1,
    color: "#EFAC32",
  }),
  //66
  new Target({
    position: {
      x: 522,
      y: 1080,
    },
    image: star4Img,
    width: 89,
    height: 74,
    frame: 0,
    color: "#FFED00",
  }),
  //67
  new Target({
    position: {
      x: 0,
      y: 250,
    },
    image: star4Img,
    width: 89,
    height: 74,
    frame: 1,
    color: "#FFED00",
  }),
  //68
  new Target({
    position: {
      x: 1600,
      y: 50,
    },
    image: star4Img,
    width: 89,
    height: 74,
    frame: 0,
    color: "#FFED00",
  }),
  //69
  new Target({
    position: {
      x: 1600,
      y: 800,
    },
    image: planet1Img,
    width: 105,
    height: 59,
    frame: 0,
    color: "#602C8B",
  }),
  //70
  new Target({
    position: {
      x: -500,
      y: 700,
    },
    image: planet2Img,
    width: 83,
    height: 82,
    frame: 0,
    color: "#602C8B",
  }),
  //71
  new Target({
    position: {
      x: 550,
      y: 950,
    },
    image: planet2Img,
    width: 83,
    height: 82,
    frame: 0,
    color: "#602C8B",
  }),
  //72
  new Target({
    position: {
      x: 150,
      y: 950,
    },
    image: planet2Img,
    width: 83,
    height: 82,
    frame: 0,
    color: "#602C8B",
  }),
  //73
  new Target({
    position: {
      x: 1500,
      y: 1100,
    },
    image: macaronis2Img,
    width: 92,
    height: 76,
    frame: 0,
    color: "#F2C846",
  }),
  //74
  new Target({
    position: {
      x: -200,
      y: 800,
    },
    image: macaronis2Img,
    width: 92,
    height: 76,
    frame: 1,
    color: "#F2C846",
  }),
  //75
  new Target({
    position: {
      x: -280,
      y: 900,
    },
    image: macaronis2Img,
    width: 92,
    height: 76,
    frame: 1,
    color: "#F2C846",
  }),
  //76
  new Target({
    position: {
      x: 150,
      y: 980,
    },
    image: macaronis1Img,
    width: 85,
    height: 89,
    frame: 1,
    color: "#F2C846",
  }),
  //77
  new Target({
    position: {
      x: 80,
      y: 1100,
    },
    image: macaronis1Img,
    width: 85,
    height: 89,
    frame: 0,
    color: "#F2C846",
  }),
  //78
  new Target({
    position: {
      x: 1180,
      y: 1100,
    },
    image: macaronis2Img,
    width: 92,
    height: 76,
    frame: 0,
    color: "#F2C846",
  }),
  //79
  new Target({
    position: {
      x: 1280,
      y: 900,
    },
    image: macaronis2Img,
    width: 92,
    height: 76,
    frame: 0,
    color: "#F2C846",
  }),
  //80
  new Target({
    position: {
      x: 1580,
      y: -30,
    },
    image: macaronis2Img,
    width: 92,
    height: 76,
    frame: 1,
    color: "#F2C846",
  }),
  //81
  new Target({
    position: {
      x: 1300,
      y: 600,
    },
    image: macaronis1Img,
    width: 85,
    height: 89,
    frame: 1,
    color: "#F2C846",
  }),
  //82
  new Target({
    position: {
      x: 1000,
      y: 500,
    },
    image: macaronis1Img,
    width: 85,
    height: 89,
    frame: 0,
    color: "#F2C846",
  }),
  //83
  new Target({
    position: {
      x: 1250,
      y: 300,
    },
    image: macaronis2Img,
    width: 92,
    height: 76,
    frame: 0,
    color: "#F2C846",
  }),
  //84
  new Target({
    position: {
      x: 300,
      y: 250,
    },
    image: badgesImg,
    width: 123,
    height: 127,
    frame: 3,
    color: "#BAB3C0",
  }),
  //85
  new Target({
    position: {
      x: -700,
      y: -10,
    },
    image: badgesImg,
    width: 123,
    height: 127,
    frame: 2,
    color: "#347E35",
  }),
  //86
  new Target({
    position: {
      x: -500,
      y: 300,
    },
    image: badgesImg,
    width: 123,
    height: 127,
    frame: 1,
    color: "#BA353F",
  }),
  //87
  new Target({
    position: {
      x: 1300,
      y: 1100,
    },
    image: badgesImg,
    width: 123,
    height: 127,
    frame: 0,
    color: "#82618C",
  }),
  //88
  new Target({
    position: {
      x: -550,
      y: 500,
    },
    image: patchs2Img,
    width: 179,
    height: 176,
    frame: 0,
    color: "#244D8F",
  }),
  //89
  new Target({
    position: {
      x: 450,
      y: 600,
    },
    image: patchs2Img,
    width: 179,
    height: 176,
    frame: 1,
    color: "#34C633",
  }),
  //90
  new Target({
    position: {
      x: 1600,
      y: 900,
    },
    image: patchs2Img,
    width: 179,
    height: 176,
    frame: 2,
    color: "#244D8F",
  }),
];

const obstacles = [
  targets[6],
  targets[7],
  targets[8],
  targets[12],
  targets[13],
  targets[14],
  targets[18],
  targets[25],
  targets[26],
  targets[27],
  targets[28],
  targets[29],
  targets[30],
  targets[31],
  targets[32],
  targets[33],
  targets[34],
  targets[35],
  targets[36],
  targets[72],
  targets[73],
  targets[74],
  targets[75],
  targets[76],
  targets[77],
  targets[78],
  targets[79],
  targets[80],
  targets[81],
  targets[82],
  targets[83],
  targets[84],
  targets[85],
  targets[86],
];
