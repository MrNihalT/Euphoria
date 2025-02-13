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

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 5000);
});
