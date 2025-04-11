// Animation configuration
const ANIMATION_CONFIG = {
    timeline: {
        delayBetweenItems: 300,
        threshold: 0.1
    },
    requirementPreview: {
        initialDelay: 800,
        riskDelay: 300
    }
};

// Timeline animations
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const timelineNumber = entry.target.querySelector('.timeline-number').textContent;
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, (timelineNumber - 1) * ANIMATION_CONFIG.timeline.delayBetweenItems);
        }
    });
}, {
    threshold: ANIMATION_CONFIG.timeline.threshold
});

// Observe all timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    timelineObserver.observe(item);
});

// Header visibility on scroll
const header = document.querySelector('header');
const heroSection = document.querySelector('section:first-of-type');

const handleScroll = () => {
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    if (window.scrollY > heroBottom - 100) {
        header.classList.add('visible');
    } else {
        header.classList.remove('visible');
    }
};

// Sequential animation for requirement preview
const requirementInput = document.querySelector('.requirement-input');
const riskHighlight = document.querySelector('.risk-highlight');
const impactColumns = document.querySelector('.impact-columns');
const codeBlock = document.querySelector('.code-citation');

// Initialize animations
const initializeAnimations = () => {
    // Set initial state for impact columns
    impactColumns.style.opacity = '0';
    impactColumns.style.transform = 'translateY(20px)';
    impactColumns.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

    // Animate elements in sequence
    setTimeout(() => {
        // Show risk highlight after requirement input
        riskHighlight.classList.add('visible');

        // Show impact columns after risk highlight
        setTimeout(() => {
            impactColumns.style.opacity = '1';
            impactColumns.style.transform = 'translateY(0)';
            setTimeout(() => {
                codeBlock.classList.add('auto-hover');
                setTimeout(() => {
                    codeBlock.classList.remove('auto-hover');
                }, 2000);
            }, 800);
        }, ANIMATION_CONFIG.requirementPreview.riskDelay);
    }, ANIMATION_CONFIG.requirementPreview.initialDelay);
};

// Start animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // initializeAnimations();
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
}); 