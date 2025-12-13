// Main script file for any page-specific functionality
document.addEventListener('DOMContentLoaded', function() {
    // Counter animation
    const counterElement = document.getElementById('counter');
    
    if (counterElement) {
        const targetNumber = 650;
        const startNumber = 1;
        const duration = 2000; // 2 seconds
        const increment = (targetNumber - startNumber) / (duration / 16); // 60fps
        let currentNumber = startNumber;
        let hasAnimated = false;

        function animateCounter() {
            if (hasAnimated) return;
            
            const heroSection = document.querySelector('.hero');
            if (!heroSection) {
                // Fallback: start immediately if no hero section
                hasAnimated = true;
                startCounter();
                return;
            }

            // Start counter when page loads (hero is always visible)
            hasAnimated = true;
            // Small delay for better visual effect
            setTimeout(startCounter, 300);
        }

        function startCounter() {
            const timer = setInterval(function() {
                currentNumber += increment;
                
                if (currentNumber >= targetNumber) {
                    currentNumber = targetNumber;
                    counterElement.textContent = Math.floor(currentNumber);
                    clearInterval(timer);
                } else {
                    counterElement.textContent = Math.floor(currentNumber);
                }
            }, 16); // ~60fps
        }

        // Initialize counter animation
        animateCounter();
    }

    console.log('NCI Website loaded successfully');
});

