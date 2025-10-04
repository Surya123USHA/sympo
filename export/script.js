// ESPERANZA ONE PIECE SYMPOSIUM JAVASCRIPT

document.addEventListener('DOMContentLoaded', function() {
    // Music Toggle Functionality
    const musicToggle = document.getElementById('music-toggle');
    let backgroundAudio = null;
    let isPlaying = false;
    
    // Initialize audio only if music toggle exists
    if (musicToggle) {
        backgroundAudio = new Audio('drums-of-liberation.mp3');
        backgroundAudio.loop = true;
        backgroundAudio.volume = 0.3;
        
        musicToggle.addEventListener('click', function() {
            if (isPlaying) {
                backgroundAudio.pause();
                musicToggle.classList.remove('playing');
                isPlaying = false;
            } else {
                backgroundAudio.play().catch(error => {
                    console.log('Audio playback failed:', error);
                });
                musicToggle.classList.add('playing');
                isPlaying = true;
            }
            
            // Add click animation
            musicToggle.style.transform = 'scale(0.95)';
            setTimeout(() => {
                musicToggle.style.transform = 'scale(1)';
            }, 100);
        });
    }

    // Theme Toggle Functionality
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        htmlElement.classList.add('dark');
        themeToggle.classList.add('dark');
    }
    
    themeToggle.addEventListener('click', function() {
        htmlElement.classList.toggle('dark');
        themeToggle.classList.toggle('dark');
        
        // Save theme preference
        const theme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        
        // Add a little animation feedback
        themeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 100);
    });
    
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Wanted Poster Hover Effects
    const wantedPosters = document.querySelectorAll('.wanted-poster');
    
    wantedPosters.forEach(poster => {
        poster.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(1deg)';
            this.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.3)';
        });
        
        poster.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(-1deg)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
        });
    });
    
    // Button Click Effects
    const buttons = document.querySelectorAll('.btn-treasure, .btn-adventure');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 600ms linear;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.session-card, .about-card, .day-header');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Floating elements animation on scroll
    let floatingElements = document.querySelectorAll('.floating-anchor, .floating-compass');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.3;
            element.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.02}deg)`;
        });
    });
    
    // Video loading and error handling
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
        video.addEventListener('loadstart', function() {
            console.log('Video loading started');
        });
        
        video.addEventListener('error', function() {
            console.log('Video failed to load, using fallback');
            // Create a fallback gradient background
            const fallback = document.createElement('div');
            fallback.style.cssText = `
                position: absolute;
                inset: 0;
                background: linear-gradient(135deg, 
                    hsl(220, 70%, 50%), 
                    hsl(200, 100%, 40%), 
                    hsl(220, 60%, 30%)
                );
                opacity: 0.3;
            `;
            this.parentNode.appendChild(fallback);
            this.style.display = 'none';
        });
    });
    
    // Registration button functionality
    const registerButtons = document.querySelectorAll('.btn-treasure');
    
    registerButtons.forEach(button => {
        if (button.textContent.includes('Register')) {
            button.addEventListener('click', function() {
                // Show registration modal or redirect to registration page
                alert('Ahoy! Registration functionality would be implemented here. Set sail for adventure!');
            });
        }
    });
    
    // Dynamic year update
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('.footer-bottom p');
    yearElements.forEach(el => {
        el.textContent = el.textContent.replace('2024', currentYear);
    });
    
    // Performance optimization: Lazy load heavy animations
    function startHeavyAnimations() {
        const heavyElements = document.querySelectorAll('.wanted-poster');
        heavyElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.animation = `wanted-swing ${8 + index}s ease-in-out infinite`;
            }, index * 200);
        });
    }
    
    // Start heavy animations after page load
    window.addEventListener('load', startHeavyAnimations);
    
    // Console Easter Egg
    console.log(`
    ⚓ AHOY THERE, BRAVE DEVELOPER! ⚓
    
    Welcome to the Esperanza One Piece Symposium website!
    
    You've discovered the developer console - a true adventurer's spirit!
    
    This website was built with:
    🏴‍☠️ Pure HTML, CSS, and JavaScript
    🌊 One Piece anime inspiration
    ⚓ Lots of adventure and passion
    
    Set sail for more adventures at your next event!
    
    - The Esperanza Development Crew
    `);
});

// CSS Animation keyframes for ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);