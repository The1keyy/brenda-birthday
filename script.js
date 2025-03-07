document.addEventListener("DOMContentLoaded", function () {
    // Check if the user wants sound
    const urlParams = new URLSearchParams(window.location.search);
    const soundPreference = urlParams.get("sound");

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
    const message = `Happy Birthday, Brenda! 
    Wishing you a birthday filled with love, joy, and all the happiness you bring to the people around you. I’m beyond grateful for our friendship, and I already know this next year is gonna be another unforgettable one.
First off, I hope you recieve all the love today because you deserve every bit of it. Just wanted to take a second to say thank you, not just for today, but for always being like a sister to me. From the late night FT calls to the funniest venting sessions, it’s always a vibe. You let me troll and not take things too seriously, and honestly, I appreciate that more than you know. The advice, the laughs, the support, it all means a lot.
And thank you for allowing me to be an uncle twice. Your bunny and kitten really made my resume go up. You already know I take my role seriously.
And because I truly value this friendship, I had to do something special. So, I coded this whole website just for you. That’s real love right there. Friendship on a different level twin.
Life be doing its thing, but through it all, I’m grateful for this bond we’ve built. No matter what, I got you, just like you’ve always had me.
So today, we celebrating, laughing, and making some more memories. Much love, fam. Get lit for me today🕺🏿🕺🏿 BIG 21 !!!!
;

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

    // Smooth scroll when clicking Yes/No buttons
    const responseMsg = document.getElementById("response-msg");

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
