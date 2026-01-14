window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true
    },
    options: {
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre']
    }
};

// Global function to trigger MathJax rendering
window.renderMath = function (elements) {
    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise(elements).catch(err => console.log('MathJax error:', err));
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Tab Switching Logic
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.content-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked
            tab.classList.add('active');

            // Show corresponding content
            const targetId = tab.dataset.target;
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Quiz Interaction (Simple Example)
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', function () {
            const parent = this.closest('.quiz-question');
            const isCorrect = this.dataset.correct === "true";

            // Reset styles
            parent.querySelectorAll('.quiz-option').forEach(opt => {
                opt.style.background = 'white';
                opt.style.borderColor = '#E2E8F0';
            });

            // Apply feedback
            if (isCorrect) {
                this.style.background = '#F0FDF4';
                this.style.borderColor = '#22C55E';
                // Optional: Show explanation
            } else {
                this.style.background = '#FEF2F2';
                this.style.borderColor = '#EF4444';
            }
        });
    });
});
