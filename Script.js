const secretLeaf = document.getElementById("secretLeaf");
const letterOverlay = document.getElementById("letterOverlay");

const phrases = document.querySelectorAll(".phrase");
const signature = document.querySelector(".signature");

let opened = false;

function openLetter(event) {
    event.preventDefault();

    if (opened) return;

    opened = true;

    // Envelope appears
    letterOverlay.classList.add("show");

    // Envelope opens
    setTimeout(() => {
        letterOverlay.classList.add("open");
    }, 600);

    // Paper comes out first.
    // Then the phrases begin.
    setTimeout(() => {
        phrases[0].classList.add("visible");
    }, 2200);

    // 3 seconds later
    setTimeout(() => {
        phrases[1].classList.add("visible");
    }, 5200);

    // 3 seconds later
    setTimeout(() => {
        phrases[2].classList.add("visible");
    }, 8200);

    // 3 seconds later
    setTimeout(() => {
        signature.classList.add("visible");
    }, 11200);
}

secretLeaf.addEventListener("click", openLetter);
secretLeaf.addEventListener("touchend", openLetter);
