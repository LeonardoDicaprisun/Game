document.addEventListener("DOMContentLoaded", function() {
    const ball = document.getElementById('ball');
    const goal = document.getElementById('goal');
    const gameContainer = document.getElementById('game-container');
    const gameContainerRect = gameContainer.getBoundingClientRect(); 

    let ballLeft = 0; 
    let ballTop = 0; 

    // Plaats de bal linksboven in het game-container
    ball.style.left = ballLeft + 'px'; 
    ball.style.top = ballTop + 'px'; 

    // Genereer willekeurige coördinaten voor het doel
    const goalLeft = Math.random() * (gameContainerRect.width - goal.offsetWidth);
    const goalTop = Math.random() * (gameContainerRect.height - goal.offsetHeight);

    // Stel de positie van het doel in op de willekeurige coördinaten
    goal.style.left = goalLeft + 'px';
    goal.style.top = goalTop + 'px';

    // Beweging van de bal
    document.addEventListener('keydown', function(event) {
        const key = event.key;

        // Aanpassingen om te voorkomen dat de bal buiten het game-container gaat
        const step = 10;
        switch (key) {
            case 'ArrowUp':
                if (ballTop - step >= 0) {
                    ballTop -= step;
                }
                break;
            case 'ArrowDown':
                if (ballTop + step <= gameContainerRect.height - ball.offsetHeight) {
                    ballTop += step;
                }
                break;
            case 'ArrowLeft':
                if (ballLeft - step >= 0) {
                    ballLeft -= step;
                }
                break;
            case 'ArrowRight':
                if (ballLeft + step <= gameContainerRect.width - ball.offsetWidth) {
                    ballLeft += step;
                }
                break;
        }

        // Pas de positie van de bal aan
        ball.style.left = ballLeft + 'px';
        ball.style.top = ballTop + 'px';

        // Controleer winvoorwaarde
        if (checkCollision(ball, goal)) {
            alert('Oh nee bakker heeft jou gensapt met jou telefoon, ga je maar melden');
        }
    });

    // Controleer of de bal het doel bereikt
    function checkCollision(ball, goal) {
        const ballRect = ball.getBoundingClientRect();
        const goalRect = goal.getBoundingClientRect();
        return !(ballRect.right < goalRect.left || 
                 ballRect.left > goalRect.right || 
                 ballRect.bottom < goalRect.top || 
                 ballRect.top > goalRect.bottom);
    }
});

