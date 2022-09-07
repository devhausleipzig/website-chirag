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
});
closeIcon.addEventListener("click", () => {
	menu.classList.toggle("showMenu");
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
