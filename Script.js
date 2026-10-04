const secretLeaf = document.getElementById("secretLeaf");
const letterOverlay = document.getElementById("letterOverlay");
const phrases = document.querySelectorAll(".phrase");
const signature = document.querySelector(".signature");

let opened = false;

secretLeaf.addEventListener("click", () => {
    if (opened) return;

    opened = true;

    // Show the envelope
    letterOverlay.classList.add("show");

    // Give the envelope a moment to appear,
    // then open the flap.
    setTimeout(() => {
        letterOverlay.classList.add("open");
    }, 600);

    // First phrase
    setTimeout(() => {
        phrases[0].classList.add("visible");
    }, 1500);

    // Second phrase
    setTimeout(() => {
        phrases[1].classList.add("visible");
    }, 3300);

    // Third phrase
    setTimeout(() => {
        phrases[2].classList.add("visible");
    }, 5100);

    // Signature
    setTimeout(() => {
        signature.classList.add("visible");
    }, 6900);
});
