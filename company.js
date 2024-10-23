// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change slide every 4 seconds
}

// Carousel functionality
let carouselIndex = 0;

function carouselNext() {
    const items = document.querySelectorAll('.carousel-item');
    carouselIndex = (carouselIndex + 1) % items.length;
    items.forEach((item, index) => {
        item.style.display = (index === carouselIndex) ? 'block' : 'none';
    });
}

function carouselPrev() {
    const items = document.querySelectorAll('.carousel-item');
    carouselIndex = (carouselIndex - 1 + items.length) % items.length;
    items.forEach((item, index) => {
        item.style.display = (index === carouselIndex) ? 'block' : 'none';
    });
}
