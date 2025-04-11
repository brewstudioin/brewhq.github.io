document.addEventListener('DOMContentLoaded', function() {
    const text = "Use OTP for login instead of Password";
    const input = document.querySelector('.requirement-text');
    const impactColumns = document.querySelector('.impact-columns');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            input.value += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Show impact columns after typing is complete
            setTimeout(() => {
                impactColumns.classList.add('visible');
            }, 500);
        }
    }

    typeWriter();
}); 