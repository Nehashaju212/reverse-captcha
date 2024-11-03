document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('captchaForm');
    const messageDiv = document.getElementById('message');
    const timerElement = document.getElementById('time');
    
    let timeLeft = 30; // 30 seconds for the timer
    const timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            messageDiv.textContent = "Time's up! Please try again.";
            form.reset();
        }
    }, 1000);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const selectedImages = document.querySelectorAll('input[name="catImage"]:checked');
        const correctCount = Array.from(selectedImages).filter(input => input.value === 'cat').length;

        // Check if the user has selected all cat images
        if (selectedImages.length === 2 && correctCount === 2) {
            clearInterval(timer);
            messageDiv.textContent = "Success! You're identified as a robot.";
        } else {
            messageDiv.textContent = "Failed! Please prove you're a robot by selecting the correct images.";
        }
    });
});
