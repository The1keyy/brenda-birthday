document.addEventListener("DOMContentLoaded", function () {
    // Birthday message
    const message = `Happy Birthday, Brenda! BIG 21!!!🎂✨  

Wishing you a year filled with happiness, success, and unforgettable memories. You are truly amazing, and today is all about celebrating you!  

Enjoy your special day! 💖`;

    const textElement = document.getElementById("birthday-message");
    textElement.innerHTML = message.replace(/\n/g, "<br>"); // Preserve new lines
    textElement.style.opacity = 0; // Start hidden
    textElement.style.transition = "opacity 2s ease-in-out"; // Smooth fade-in effect
    setTimeout(() => textElement.style.opacity = 1, 500); // Trigger fade-in

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
            if (count === 4) clearInterval(confettiInterval); // Stop after 4 bursts
        }, 2000); // Repeat every 2 seconds
    };
    document.body.appendChild(script);

    // Background music
    const audio = document.createElement("audio");
    audio.src = "audio/happy-birthday.mp3"; // Make sure the file exists
    audio.autoplay = true;
    audio.loop = true;
    audio.volume = 0.5;
    document.body.appendChild(audio);

    // Get response message element
    const responseMsg = document.getElementById("response-msg");

    // Gift response logic
    document.getElementById("yes-btn").addEventListener("click", function() {
        responseMsg.innerText = "Just text me and I'll have your gift ready!!! P.S. I don’t really be on my phone like that so just bear with me.";
        responseMsg.style.color = "gold";

        // Scroll to response message smoothly
        responseMsg.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    document.getElementById("no-btn").addEventListener("click", function() {
        responseMsg.innerText = "Stop being extra and pick Yes 😑";
        responseMsg.style.color = "lightcoral";

        // Scroll to response message smoothly
        responseMsg.scrollIntoView({ behavior: "smooth", block: "center" });
    });
});

