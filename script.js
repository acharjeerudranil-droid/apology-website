/* PAGE NAVIGATION */

function showPage(pageId) {

    const pages = [
        "welcomePage",
        "apologyPage",
        "memoriesPage",
        "letterPage",
        "forgivenessPage"
    ];

    pages.forEach(function (id) {

        document.getElementById(id).classList.add("hidden");

    });

    document.getElementById(pageId).classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* PAGE 1 TO PAGE 2 */

function openHeart() {

    showPage("apologyPage");

}


/* PAGE 2 TO PAGE 3 */

function openMemories() {

    showPage("memoriesPage");

}


/* PAGE 3 TO PAGE 4 */

function openLetterPage() {

    showPage("letterPage");

}


/* PAGE 4 TO PAGE 5 */

function openForgivenessPage() {

    showPage("forgivenessPage");

}


/* ENVELOPE ANIMATION */

function toggleLetter() {

    const envelope = document.querySelector(".envelope");

    envelope.classList.toggle("open");

}


/* FORGIVENESS RESPONSE */

function showForgivenessResponse(choice) {

    const responseBox = document.getElementById("forgivenessResponse");

    const responseEmoji = document.getElementById("responseEmoji");

    const responseHeading = document.getElementById("responseHeading");

    const responseMessage = document.getElementById("responseMessage");

    const finalMessage = document.getElementById("finalMessage");


    responseBox.classList.remove("hidden");


    if (choice === "yes") {

        responseEmoji.innerHTML = "🥹❤️";

        responseHeading.innerHTML = "You Made My Day!";

        responseMessage.innerHTML =
            "Thank you for giving me a chance. " +
            "I promise to listen more, understand you better, " +
            "and learn from my mistakes. You mean so much to me. ❤️";

        // SHOW THE FINAL MESSAGE

        finalMessage.classList.remove("hidden");

        // HEART CONFETTI

        createHeartConfetti();

    }


    else if (choice === "shaggy") {

        responseEmoji.innerHTML = "🐶😂";

        responseHeading.innerHTML = "HAHAHA! SHAGGY?!";

        responseMessage.innerHTML =
            "Okay Shaggy! 😂 Looks like someone is in a funny mood. " +
            "But you still have to read my letter properly! ❤️";

        // HIDE THE FINAL MESSAGE

        finalMessage.classList.add("hidden");

    }


    responseBox.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


/* HEART CONFETTI EFFECT */

function createHeartConfetti() {

    const hearts = ["❤️", "💕", "💗", "💖", "💘", "💝"];

    for (let i = 0; i < 40; i++) {

        const heart = document.createElement("div");

        heart.classList.add("confetti-heart");

        heart.innerHTML = hearts[
            Math.floor(Math.random() * hearts.length)
        ];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        heart.style.fontSize =
            (Math.random() * 20 + 15) + "px";

        document.body.appendChild(heart);


        setTimeout(function () {

            heart.remove();

        }, 5000);

    }

}


/* FLOATING HEARTS BACKGROUND */

function createHeart() {

    const container = document.getElementById("hearts-container");

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 20 + 12) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    container.appendChild(heart);


    setTimeout(function () {

        heart.remove();

    }, 10000);

}


/* CREATE FLOATING HEARTS EVERY 500MS */

setInterval(createHeart, 500);