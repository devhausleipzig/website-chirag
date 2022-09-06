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
