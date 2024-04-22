let hamburger = document.querySelector(".hamburger");
let closeBtn = document.querySelector("close-btn");

hamburger.addEventListener('click', () => {
    hamburger.parentElement.classList.toggle("menu-open");

});
closeBtn.addEventListener('click', () => {
    closeBtn.parentElement.classList.toggle("menu-close");
    hamburger.parentElement.classList.remove("menu-open");

});

