document.addEventListener('DOMContentLoaded', function() {
    const text = "Use OTP for login instead of Password";
    const input = document.querySelector('.requirement-text');
    const impactColumns = document.querySelector('.impact-columns');
    if (!input) {
        return;
    }
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            input.value += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            if (typeof initializeAnimations === 'function') {
                initializeAnimations();
            }
        }
    }

    typeWriter();
}); 