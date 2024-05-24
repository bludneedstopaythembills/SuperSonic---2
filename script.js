document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-images img');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        const background = carousel.querySelector('.carousel-background');
        let currentIndex = 0;

        const updateCarousel = () => {
            images.forEach((img, index) => {
                img.classList.toggle('active', index === currentIndex);
            });

            const activeImage = images[currentIndex].src;
            background.style.backgroundImage = `url(${activeImage})`;
        };

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            updateCarousel();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        });

        updateCarousel(); // Initial update

        // Auto-scroll every 3 seconds
        setInterval(() => {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        }, 3000);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade');

    const elementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    };

    const checkElementsInViewport = () => {
        elements.forEach((el) => {
            if (elementInViewport(el)) {
                el.classList.add('in-viewport');
            }
        });
    };

    document.addEventListener('scroll', checkElementsInViewport);
    window.addEventListener('resize', checkElementsInViewport);

    // Initial check
    checkElementsInViewport();
});