document.addEventListener("scroll", function () {
    let elements = document.querySelectorAll(".scroll-text");
    let windowHeight = window.innerHeight;

    elements.forEach(element => {
        let rect = element.getBoundingClientRect();

        if (rect.top < windowHeight * 0.9) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
});
