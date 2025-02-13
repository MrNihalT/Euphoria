const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let index = 0;

function showSlide(i) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

prevBtn.addEventListener("click", () => {
    index = index === 0 ? slides.length - 1 : index - 1;
    showSlide(index);
});

nextBtn.addEventListener("click", () => {
    index = index === slides.length - 1 ? 0 : index + 1;
    showSlide(index);
});

// Auto slide (Optional)
setInterval(() => {
    index = index === slides.length - 1 ? 0 : index + 1;
    showSlide(index);
}, 3000);


