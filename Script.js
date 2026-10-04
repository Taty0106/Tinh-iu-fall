/* =====================================================
   FOR MY TÌNH IU — INTERACTIONS
   ===================================================== */

const secretLeaf = document.getElementById("secretLeaf");
const surprise = document.getElementById("surprise");
const vinyl = document.getElementById("vinyl");
const hint = document.getElementById("hint");

const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");
const line3 = document.querySelector(".line-3");
const signature = document.getElementById("signature");


/* =====================================================
   SECRET LEAF
   ===================================================== */

secretLeaf.addEventListener("click", () => {

  /* Hide the clickable leaf */
  secretLeaf.style.display = "none";
  hint.style.opacity = "0";

  /* Open surprise */
  surprise.classList.add("show");

  /* Stop vinyl rotation */
  vinyl.style.animationPlayState = "paused";


  /* ===================================================
     MESSAGE 1
     =================================================== */

  setTimeout(() => {
    line1.classList.add("active");
  }, 500);


  /* ===================================================
     MESSAGE 2
     =================================================== */

  setTimeout(() => {

    line1.classList.remove("active");

    line2.classList.add("active");

  }, 2600);


  /* ===================================================
     MESSAGE 3
     =================================================== */

  setTimeout(() => {

    line2.classList.remove("active");

    line3.classList.add("active");

  }, 4700);


  /* ===================================================
     SIGNATURE
     =================================================== */

  setTimeout(() => {

    signature.classList.add("show");

  }, 6800);


  /* ===================================================
     FINAL TRANSFORMATION
     =================================================== */

  setTimeout(() => {

    surprise.classList.add("final");

  }, 7900);

});
