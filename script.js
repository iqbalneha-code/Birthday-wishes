
// PAGE 2: BLOW CANDLES

function blowCandles() {
    const flames = document.getElementById("flames");
    const result = document.getElementById("cake-result");

    if (flames) {
        flames.innerHTML = "💨";
        result.innerHTML =
            "✨ Wish made! May all your dreams come true! ❤️";
    }
}

// PAGE 2: CAKE CUTTING

function cutBirthdayCake() {
    const result = document.getElementById("cake-result");

    if (result) {
        result.innerHTML =
            "🎂 Yay! The cake is cut! Let the celebration begin! 🎉";
    }

    launchConfetti();
}

// PAGE 3: OPEN GIFTS

function openGift(number) {
    const gift = document.getElementById("gift" + number);

    const messages = {
        1: "💖 A box full of love!",
        2: "✨ A lifetime of happiness!",
        3: "🌸 Endless beautiful memories!"
    };

    if (gift) {
        gift.innerHTML = messages[number];
    }
}

// PAGE 5: FINAL SURPRISE

function showSurprise() {
    const message = document.getElementById("final-message");

    if (message) {
        message.innerHTML =
            "🎉 HAPPY BIRTHDAY! 🎉<br><br>" +
            "You are special, you are amazing, " +
            "and you deserve all the happiness in the world! 💗<br><br>" +
            "Keep smiling and shining forever! 🌸";
    }

    launchConfetti();
}

// CONFETTI ANIMATION

function launchConfetti() {
    const emojis = ["🎉", "✨", "💖", "🎊", "🌸"];

    for (let i = 0; i < 40; i++) {
        const item = document.createElement("span");

        item.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        item.style.position = "fixed";
        item.style.left = Math.random() * 100 + "vw";
        item.style.top = "-30px";
        item.style.fontSize = "25px";
        item.style.zIndex = "9999";
        item.style.pointerEvents = "none";

        document.body.appendChild(item);

        let position = -30;

        const speed = 3 + Math.random() * 5;

        const animation = setInterval(() => {
            position += speed;
            item.style.top = position + "px";

            if (position > window.innerHeight) {
                clearInterval(animation);
                item.remove();
            }
        }, 25);
    }
}

