let hdbutton = document.querySelectorAll(".nav-links li a");

hdbutton.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("nav-links-active");
    });
});

let navbar = document.querySelector(".hide");
let MenuButton = document.getElementById("menu-button");

MenuButton.addEventListener("click", () => {
    navbar.classList.add("menu-list");
});
