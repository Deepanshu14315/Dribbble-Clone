let hamburger = document.querySelector(".hamburger");
let closeBtn = document.querySelector(".close-btn");
let header = document.querySelector("header");

hamburger.addEventListener('click', () => {
    hamburger.parentElement.classList.add("menu-open");
    header.classList.add("bgwhite");
    closeBtn.parentElement.classList.add("menu-close");
});
closeBtn.addEventListener('click', ()=> {
    closeBtn.parentElement.classList.remove("menu-close");
    hamburger.parentElement.classList.remove("menu-open");
    header.classList.remove("bgwhite");

});
