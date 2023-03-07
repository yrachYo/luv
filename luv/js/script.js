let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector("nav");
menuBtn.addEventListener("click", function () {
	menuBtn.classList.toggle("active");
	menu.classList.toggle("active");
});	
window.addEventListener("keydown", (e)=> {
	if(e.key=== 'Escape'){
		menuBtn.classList.remove("active")
		menu.classList.remove("active")
	}
});

menuBtn.addEventListener("click", (event) => {
  event._isClickWithInMenu = true;
});
menu.addEventListener("click", (event) => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener("click", (event) => {
  if (event._isClickWithInMenu) return;
	menuBtn.classList.remove("active")
	menu.classList.remove("active")
});
