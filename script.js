document.addEventListener("DOMContentLoaded", function () {
    // Check if the user wants sound
    const urlParams = new URLSearchParams(window.location.search);
    const soundPreference = urlParams.get("sound"); // Get 'sound' from URL

    if (soundPreference === "on") {
        // Play background music
        const audio = document.createElement("audio");
        audio.src = "audio/drake.mp3";
        audio.autoplay = true;
        audio.loop = true;
        audio.volume = 0.5;
        document.body.appendChild(audio);
    }

    // Birthday message animation
    const message = `Happy Birthday, Brenda! BIG 21!!!🎂✨  

    Wishing you a year filled with happiness, success, and unforgettable memories. You are truly amazing, and today is all about celebrating you!  

    Enjoy your special day! 💖`;

    const textElement = document.getElementById("birthday-message");
    textElement.innerHTML = message.replace(/\n/g, "<br>");
    textElement.style.opacity = 0;
    textElement.style.transition = "opacity 2s ease-in-out";
    setTimeout(() => textElement.style.opacity = 1, 500);

    // Confetti effect
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
    script.onload = () => {
        let count = 0;
        const confettiInterval = setInterval(() => {
            confetti({
                particleCount: 150,
                spread: 180,
                origin: { y: 0.6 }
            });
            count++;
            if (count === 4) clearInterval(confettiInterval);
        }, 2000);
    };
    document.body.appendChild(script);
});
