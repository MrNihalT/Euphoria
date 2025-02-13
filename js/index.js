let hdbutton = document.querySelectorAll(".nav-links li a");

hdbutton.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("nav-links-active");
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    const slidePercentage = document.querySelector(".slide-percentage");

    let currentIndex = 0;

    function updateSlidePercentage() {
        let percentage = ((currentIndex + 1) / slides.length) * 100;
        slidePercentage.style.width = `${percentage}%`;
    }

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
        updateSlidePercentage();
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

    updateSlidePercentage(); 
});
