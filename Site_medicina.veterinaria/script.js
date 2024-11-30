document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".container, .gallery img, .details, .moral-story");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, index * 200);
    });
});