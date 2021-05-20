
// Image sizes
var emoteWidth;
var emoteHeight;

// Emote pictures
var emotePicture;
var emote;
var emoteBlob;
var emoteDesk;
var emotePosters;
var emoteTV;
var emoteCards;
var emoteSplash;
var emoteScreen;

// Clickables
var arrow;
var back;
var backBlack;
var dot;
var dotWhite;
var computerButton;
var websiteButton;
var cardsButton;
var tvButton;
var posterButton;
var projectionButton;
var computerButtonPressed;


function setup() {
 	createCanvas(windowWidth, windowHeight);
 	imageMode(CENTER);

 	setupButtons();

	//emoteSplash = createVideo(['img/emotesplash.mov']);
	//emoteSplash.loop();
  emotePicture = emote;

  emoteWidth = emote.width;
  emoteHeight = emote.height;
 }

 function preload() {
 	emote = loadImage("img/emote1.jpg");
 	back = loadImage("img/back.png");
 	backBlack = loadImage("img/backblack.png");
 	dot = loadImage("img/dot.png");
 	dotWhite = loadImage("img/dotwhite.png");
 	emoteBlob = loadImage("img/emoteblob.jpg");
 	emoteDesk = loadImage("img/emotedesk.jpg");
 	emotePosters = loadImage("img/emoteposters.jpg");
 	emoteTV = loadImage("img/emotetv.jpg");
 	emoteCards = loadImage("img/emote3.jpg");
 }

function draw() {
  background(0);

  image(emotePicture, width/2, height/2, emoteWidth, emoteHeight);

  computerButton.locate(width/2, height/2 + emoteHeight/15);
  computerButton.width = dot.width;
  computerButton.height = dot.height;
  computerButton.onPress = computerButtonPressed;
  computerButton.onHover = computerButtonHover;
  computerButton.onOutside = computerButtonOnOutside;

  posterButton.locate(width/2 + emoteHeight/3, height/2 - emoteHeight/4.5);
  posterButton.width = dot.width;
  posterButton.height = dot.height;
  posterButton.onPress = posterButtonPressed;
  posterButton.onHover = posterButtonHover;
  posterButton.onOutside = posterButtonOnOutside;

  tvButton.locate(width/2 - emoteHeight/2.2, height/2 - emoteHeight/15);
  tvButton.width = dot.width;
  tvButton.height = dot.height;
  tvButton.onPress = tvButtonPressed;
  tvButton.onHover = tvButtonHover;
  tvButton.onOutside = tvButtonOnOutside;

  cardsButton.locate(width/2 - emoteHeight/4, height/2 + emoteHeight/15);
  cardsButton.width = dot.width;
  cardsButton.height = dot.height;
  cardsButton.onPress = cardsButtonPressed;
  cardsButton.onHover = cardsButtonHover;
  cardsButton.onOutside = cardsButtonOnOutside;

  websiteButton.locate(width/2 + emoteHeight/15, height/2 - emoteHeight/7);
  websiteButton.width = dot.width;
  websiteButton.height = dot.height;
  websiteButton.onPress = websiteButtonPressed;
  websiteButton.onHover = websiteButtonHover;
  websiteButton.onOutside = websiteButtonOnOutside;

  backButton.locate(width/2 - emoteWidth/2 + back.width, height/2);
  backButton.width = back.width;
  backButton.height = back.height;
  backButton.onPress = backButtonPressed;

  if (emotePicture === emote) {
  	computerButton.draw();
  	posterButton.draw();
  	tvButton.draw();
  }

  if (emotePicture === emoteDesk) {
  	backButton.image = back;
  	backButton.width = back.width;
  	backButton.height = back.height;
  	backButton.draw();
  	cardsButton.draw();
  	websiteButton.draw();
  }

  if (emotePicture === emotePosters) {
  	backButton.image = backBlack;
  	backButton.width = backBlack.width;
  	backButton.height = backBlack.height;
  	backButton.draw();
  }

  if (emotePicture === emoteCards) {
  	backButton.image = backBlack;
  	backButton.width = backBlack.width;
  	backButton.height = backBlack.height;
  	backButton.draw();
  }

  if (emotePicture === emoteTV) {
  	backButton.image = back;
  	backButton.width = back.width;
  	backButton.height = back.height;
  	backButton.draw();
  }

  if (windowWidth < 950) {
  	emoteWidth = emote.width/1.5;
  	emoteHeight = emote.height/1.5;
  }
  if (windowWidth < 620) {
  	emoteWidth = emote.width/2;
  	emoteHeight = emote.height/2;
  }
  if (windowWidth > 950) {
  	emoteWidth = emote.width;
  	emoteHeight = emote.height;
  }
}

function windowResized() {
 	resizeCanvas(windowWidth, windowHeight);
}

function setupButtons() {
	backButton = new Clickable();
	computerButton = new Clickable();
	cardsButton = new Clickable();
	websiteButton = new Clickable();
	tvButton = new Clickable();
	projectionButton = new Clickable();
	posterButton = new Clickable();

	backButton.image = back;
	computerButton.image = dot;
	cardsButton.image = dot;
	websiteButton.image = dot;
}

backButtonPressed = function() {
	if (emotePicture === emoteDesk) {
		emotePicture = emote;
	}

	if (emotePicture === emoteCards) {
		emotePicture = emoteDesk;
	}

	if (emotePicture === emotePosters) {
		emotePicture = emote;
	}

	if (emotePicture === emoteTV) {
		emotePicture = emote;
	}
}

computerButtonHover = function() {
	computerButton.image = dotWhite;
}

computerButtonOnOutside = function() {
	computerButton.image = dot;
}

computerButtonPressed = function() {
	emotePicture = emoteDesk;
}

tvButtonHover = function() {
	tvButton.image = dotWhite;
}

tvButtonOnOutside = function() {
	tvButton.image = dot;
}

tvButtonPressed = function() {
	emotePicture = emoteTV;
}

posterButtonHover = function() {
	posterButton.image = dotWhite;
}

posterButtonOnOutside = function() {
	posterButton.image = dot;
}

posterButtonPressed = function() {
	emotePicture = emotePosters;
}

websiteButtonHover = function() {
	websiteButton.image = dotWhite;
}

websiteButtonOnOutside = function() {
	websiteButton.image = dot;
}

websiteButtonPressed = function() {
	window.open("../");
}

cardsButtonHover = function() {
	cardsButton.image = dotWhite;
}

cardsButtonOnOutside = function() {
	cardsButton.image = dot;
}

cardsButtonPressed = function() {
	emotePicture = emoteCards;
}