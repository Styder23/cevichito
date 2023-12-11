document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let isPaused = false;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? 1 : 0;
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function togglePause() {
        isPaused = !isPaused;
    }

    function startSlider() {
        if (areImagesLoaded()) {
            showSlide(currentSlide);
            setInterval(function() {
                if (!isPaused) {
                    nextSlide();
                }
            }, 5000); // Cambia de imagen cada 5 segundos
        }
    }

    function areImagesLoaded() {
        let loaded = true;
        slides.forEach(slide => {
            if (!slide.complete) {
                loaded = false;
            }
        });
        return loaded;
    }

    window.addEventListener('load', startSlider);

    // Agregar eventos a los botones de flecha
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    prevButton.addEventListener('click', function() {
        prevSlide();
        togglePause(); // Pausar el slider cuando se cambia manualmente
    });

    nextButton.addEventListener('click', function() {
        nextSlide();
        togglePause(); // Pausar el slider cuando se cambia manualmente
    });
});