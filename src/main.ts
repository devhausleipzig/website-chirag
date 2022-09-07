////////// Toggle Menu Button //////
const menu = document.querySelector(".menu") as HTMLElement;
const menuItems = document.querySelectorAll(
	".menu-item"
) as NodeListOf<Element>;
const hamburger = document.querySelector(".hamburger") as HTMLElement;
const closeIcon = document.querySelector("#icon-after") as HTMLElement;
const menuIcon = document.querySelector("#icon-before") as HTMLElement;

menuIcon.addEventListener("click", () => {
	menu.classList.toggle("showMenu");
	document.body.style.overflowY = "hidden";
});
closeIcon.addEventListener("click", () => {
	menu.classList.toggle("showMenu");
	document.body.style.overflowY = "visible";
});

///////Piano Keys////////////

const keyPressMap: Record<string, string> = {
	KeyM: "m",
	KeyB: "b",
	KeyA: "a",
	KeyI: "i",
	KeyC: "c",
};

const mSound = new Audio("https://oimachi.cloud/clients/mubasic/m.mp3");
const bSound = new Audio("https://oimachi.cloud/clients/mubasic/b.mp3");
const aSound = new Audio("https://oimachi.cloud/clients/mubasic/a.mp3");
const iSound = new Audio("https://oimachi.cloud/clients/mubasic/i.mp3");
const cSound = new Audio("https://oimachi.cloud/clients/mubasic/c.mp3");

document.addEventListener("keydown", function (e) {
	if (e.code == "KeyM") {
		mSound.play();
	}
	if (e.code == "KeyB") {
		bSound.play();
	}
	if (e.code == "KeyA") {
		aSound.play();
	}
	if (e.code == "KeyI") {
		iSound.play();
	}
	if (e.code == "KeyC") {
		cSound.play();
	}
});

const btnM = document.getElementById("btn-m") as HTMLElement;
const btnB = document.getElementById("btn-b") as HTMLElement;
const btnA = document.getElementById("btn-a") as HTMLElement;
const btnI = document.getElementById("btn-i") as HTMLElement;
const btnC = document.getElementById("btn-c") as HTMLElement;

btnM.addEventListener("click", function (m) {
	mSound.play();
});
btnB.addEventListener("click", function (b) {
	bSound.play();
});
btnA.addEventListener("click", function (a) {
	aSound.play();
});
btnI.addEventListener("click", function (i) {
	iSound.play();
});
btnC.addEventListener("click", function (c) {
	cSound.play();
});

/////////////////need to make it more clean/////////////////

/////menu-tabs/////

const quirky = document.getElementById("music-quirky") as HTMLElement;
const quirkyIcon = document.getElementById("quirky-icon") as HTMLElement;
const quirkyGif = document.getElementById("quirky-gif") as any; //find out the type

const sleep = document.getElementById("music-sleep") as HTMLElement;
const sleepIcon = document.getElementById("sleep-icon") as HTMLElement;
const sleepGif = document.getElementById("sleep-gif") as any;

const characters = document.getElementById("music-characters") as HTMLElement;
const charactersIcon = document.getElementById(
	"characters-icon"
) as HTMLElement;
const charactersGif = document.getElementById("characters-gif") as any;

const movement = document.getElementById("music-movement") as HTMLElement;
const movementIcon = document.getElementById("movement-icon") as HTMLElement;
const movementGif = document.getElementById("movement-gif") as any;

const celebrations = document.getElementById(
	"music-celebrations"
) as HTMLElement;
const celebrationsIcon = document.getElementById(
	"celebrations-icon"
) as HTMLElement;
const celebrationsGif = document.getElementById("celebrations-gif") as any;

const playtime = document.getElementById("music-playtime") as HTMLElement;
const playtimeIcon = document.getElementById("playtime-icon") as HTMLElement;
const playtimeGif = document.getElementById("playtime-gif") as any;

const education = document.getElementById("music-education") as HTMLElement;
const educationIcon = document.getElementById("education-icon") as HTMLElement;
const educationGif = document.getElementById("education-gif") as any;

//sounds//
const quirkySound = new Audio(
	"https://oimachi.cloud/clients/mubasic/Quirky.mp3"
);

const sleepSound = new Audio("https://oimachi.cloud/clients/mubasic/Sleep.mp3");

const charactersSound = new Audio(
	"https://oimachi.cloud/clients/mubasic/Characters.mp3"
);

const movementSound = new Audio(
	"https://oimachi.cloud/clients/mubasic/Movement.mp3"
);

const celebrationsSound = new Audio(
	"https://oimachi.cloud/clients/mubasic/Holidays.mp3"
);

const playtimeSound = new Audio(
	"https://oimachi.cloud/clients/mubasic/PartyPlaytime.mp3"
);

const educationSound = new Audio(
	"https://oimachi.cloud/clients/mubasic/Educational.mp3"
);

//adding event listeners//
let isPlaying = false;

quirky.addEventListener("click", function (quirkY) {
	if (!isPlaying) {
		isPlaying = true;
		quirkySound.play();
		quirkyIcon.classList.remove("opacity-0");
		quirkyGif.trigger = "loop";
	} else {
		quirkySound.pause();
		quirkyIcon.classList.add("opacity-0");
		isPlaying = false;
		quirkyGif.trigger = "hover";
	}
});

sleep.addEventListener("click", function (sleeP) {
	if (!isPlaying) {
		isPlaying = true;
		sleepSound.play();
		sleepIcon.classList.remove("opacity-0");
		sleepGif.trigger = "loop";
	} else {
		sleepSound.pause();
		sleepIcon.classList.add("opacity-0");
		isPlaying = false;
		sleepGif.trigger = "hover";
	}
});

characters.addEventListener("click", function (characterS) {
	if (!isPlaying) {
		isPlaying = true;
		charactersSound.play();
		charactersIcon.classList.remove("opacity-0");
		charactersGif.trigger = "loop";
	} else {
		charactersSound.pause();
		charactersIcon.classList.add("opacity-0");
		isPlaying = false;
		charactersGif.trigger = "hover";
	}
});

movement.addEventListener("click", function (movemenT) {
	if (!isPlaying) {
		isPlaying = true;
		movementSound.play();
		movementIcon.classList.remove("opacity-0");
		movementGif.trigger = "loop";
	} else {
		movementSound.pause();
		movementIcon.classList.add("opacity-0");
		isPlaying = false;
		movementGif.trigger = "hover";
	}
});

celebrations.addEventListener("click", function (celebrationS) {
	if (!isPlaying) {
		isPlaying = true;
		celebrationsSound.play();
		celebrationsIcon.classList.remove("opacity-0");
		celebrationsGif.trigger = "loop";
	} else {
		celebrationsSound.pause();
		celebrationsIcon.classList.add("opacity-0");
		isPlaying = false;
		celebrationsGif.trigger = "hover";
	}
});

playtime.addEventListener("click", function (playtimE) {
	if (!isPlaying) {
		isPlaying = true;
		playtimeSound.play();
		playtimeIcon.classList.remove("opacity-0");
		playtimeGif.trigger = "loop";
	} else {
		playtimeSound.pause();
		playtimeIcon.classList.add("opacity-0");
		isPlaying = false;
		playtimeGif.trigger = "hover";
	}
});

education.addEventListener("click", function (educatioN) {
	if (!isPlaying) {
		isPlaying = true;
		educationSound.play();
		educationIcon.classList.remove("opacity-0");
		educationGif.trigger = "loop";
	} else {
		educationSound.pause();
		educationIcon.classList.add("opacity-0");
		isPlaying = false;
		educationGif.trigger = "hover";
	}
});
