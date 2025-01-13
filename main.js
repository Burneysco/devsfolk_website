// Animated Logo
document.addEventListener('DOMContentLoaded', function() {
    anime.timeline({loop: true})
        .add({
            targets: '.ml8 .circle-white',
            scale: [0, 3],
            opacity: [1, 0],
            easing: "easeInOutExpo",
            rotateZ: 360,
            duration: 1100
        }).add({
            targets: '.ml8 .circle-container',
            scale: [0, 1],
            duration: 1100,
            easing: "easeInOutExpo",
            offset: '-=1000'
        }).add({
            targets: '.ml8 .circle-dark',
            scale: [0, 1],
            duration: 1100,
            easing: "easeOutExpo",
            offset: '-=600'
        }).add({
            targets: '.ml8 .letters-left',
            scale: [0, 1],
            duration: 1200,
            offset: '-=550'
        }).add({
            targets: '.ml8 .bang',
            scale: [0, 1],
            rotateZ: [45, 15],
            duration: 1200,
            offset: '-=1000'
        }).add({
            targets: '.ml8',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1400
        });

    anime({
        targets: '.ml8 .circle-dark-dashed',
        rotateZ: 360,
        duration: 8000,
        easing: "linear",
        loop: true
    });
});

// Initialize Portfolio Slider
document.addEventListener('DOMContentLoaded', function() {
    const portfolioSwiper = new Swiper('.portfolioSwiper', {
        effect: window.innerWidth <= 768 ? 'fade' : 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        speed: 600,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        coverflowEffect: {
            rotate: 30,
            stretch: 80,
            depth: 300,
            modifier: 1,
            slideShadows: false
        },
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                spaceBetween: 0
            },
            768: {
                effect: 'coverflow',
                spaceBetween: 30
            }
        },
        on: {
            init: function() {
                // Add touch feedback
                const slides = document.querySelectorAll('.swiper-slide');
                slides.forEach(slide => {
                    // Prevent default touch behavior inside scrollable areas
                    const scrollableAreas = slide.querySelectorAll('.custom-scrollbar');
                    scrollableAreas.forEach(area => {
                        area.addEventListener('touchmove', (e) => {
                            e.stopPropagation();
                        }, { passive: true });
                    });

                    // Add active state feedback
                    slide.addEventListener('touchstart', () => {
                        slide.style.transform = 'scale(0.98)';
                    }, { passive: true });
                    
                    slide.addEventListener('touchend', () => {
                        slide.style.transform = '';
                    }, { passive: true });
                });

                // Handle navigation visibility
                const updateNavigation = () => {
                    const nav = document.querySelector('.swiper-navigation');
                    if (nav) {
                        if (window.innerWidth <= 768) {
                            nav.style.opacity = '0';
                            nav.style.pointerEvents = 'none';
                        } else {
                            nav.style.opacity = '1';
                            nav.style.pointerEvents = 'auto';
                        }
                    }
                };

                updateNavigation();
                window.addEventListener('resize', updateNavigation);
            }
        }
    });
});

// Form Submission Handler
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to your server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
} 