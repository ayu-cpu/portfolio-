document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Copyright Year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Mobile Navigation Hamburger Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        // Close menu when clicking links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            });
        });
    }

    // Active Navigation Highlight on Scroll
    const sections = document.querySelectorAll('section[id]');
    
    const highlightNavOnScroll = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navTarget = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

            if (navTarget) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navTarget.classList.add('active');
                } else {
                    navTarget.classList.remove('active');
                }
            }
        });
    };

    window.addEventListener('scroll', highlightNavOnScroll);

    // Testimonial Carousel Functionality
    const slides = document.querySelectorAll('.testimonial-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));

        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        if (slides[currentSlide]) slides[currentSlide].classList.add('active');
        if (indicators[currentSlide]) indicators[currentSlide].classList.add('active');
    };

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
        nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => showSlide(index));
    });
});