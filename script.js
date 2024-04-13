let toggle = document.querySelector("#toggle");
let navlink = document.querySelector(".nav-link ul");

toggle.addEventListener("click", function (){
    toggle.append(navlink);

});