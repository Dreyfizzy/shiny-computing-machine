document.addEventListener("DOMContentLoaded", () => {
    const fill = document.getElementById("fill");
    const checkLoveBtn = document.getElementById("checkLoveBtn");
    const resultMessage = document.getElementById("resultMessage");
    const confettiCanvas = document.getElementById("confetti");
    const ctx = confettiCanvas.getContext("2d");

    checkLoveBtn.addEventListener("click", () => {
        fill.style.width = "100%";
        setTimeout(() => {
            resultMessage.classList.remove("hidden");
            startConfetti();
        }, 1200);
    });

    function startConfetti() {
        confettiCanvas.style.display = "block";
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;

        let confettiParticles = [];

        for (let i = 0; i < 100; i++) {
            confettiParticles.push({
                x: Math.random() * confettiCanvas.width,
                y: Math.random() * confettiCanvas.height - confettiCanvas.height,
                size: Math.random() * 10 + 2,
                speed: Math.random() * 5 + 2,
                color: `hsl(${Math.random() * 360}, 100%, 70%)`
            });
        }

        function drawConfetti() {
            ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
            confettiParticles.forEach(p => {
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });
        }

        function updateConfetti() {
            confettiParticles.forEach(p => {
                p.y += p.speed;
                if (p.y > confettiCanvas.height) p.y = 0;
            });
        }

        function animateConfetti() {
            drawConfetti();
            updateConfetti();
            requestAnimationFrame(animateConfetti);
        }

        animateConfetti();

        setTimeout(() => {
            confettiCanvas.style.display = "none";
        }, 5000);
    }
});