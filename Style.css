* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html,
body {
    width: 100%;
    min-height: 100%;
}

body {
    overflow: hidden;
    background: #4b0712;
    color: #f7eee0;
    font-family: Georgia, "Times New Roman", serif;
}

.page {
    position: relative;
    width: 100vw;
    height: 100vh;
    min-height: 600px;
    overflow: hidden;
    background:
        radial-gradient(circle at 78% 18%, rgba(116, 25, 38, 0.28), transparent 28%),
        radial-gradient(circle at 20% 80%, rgba(112, 17, 32, 0.2), transparent 30%),
        #4b0712;
}

/* =========================
   MAIN MESSAGE
========================= */

.message {
    position: absolute;
    left: 8%;
    top: 29%;
    z-index: 5;
    max-width: 520px;
}

.message p {
    font-size: clamp(28px, 3.2vw, 49px);
    line-height: 1.2;
    letter-spacing: -0.5px;
    color: #f8efe1;
    text-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
}

/* =========================
   MOON + STARS
========================= */

.moon {
    position: absolute;
    top: 7%;
    right: 8%;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: #f4e6c9;
    box-shadow: 0 0 30px rgba(248, 226, 185, 0.16);
    opacity: 0.9;
}

.moon::after {
    content: "";
    position: absolute;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: #4b0712;
    left: 17px;
    top: -7px;
}

.stars span {
    position: absolute;
    color: #f6dfb5;
    opacity: 0.7;
    animation: twinkle 3s ease-in-out infinite;
}

.stars span:nth-child(1) {
    top: 13%;
    right: 25%;
}

.stars span:nth-child(2) {
    top: 20%;
    right: 14%;
    font-size: 13px;
    animation-delay: 1s;
}

.stars span:nth-child(3) {
    top: 8%;
    left: 42%;
    font-size: 11px;
    animation-delay: 1.7s;
}

.stars span:nth-child(4) {
    bottom: 17%;
    left: 8%;
    font-size: 12px;
    animation-delay: 0.6s;
}

.stars span:nth-child(5) {
    bottom: 10%;
    right: 35%;
    font-size: 10px;
    animation-delay: 2s;
}

@keyframes twinkle {
    0%,
    100% {
        opacity: 0.25;
        transform: scale(0.8);
    }

    50% {
        opacity: 0.9;
        transform: scale(1.25);
    }
}

/* =========================
   FLOATING LEAVES
========================= */

.leaves span {
    position: absolute;
    z-index: 2;
    font-size: clamp(22px, 2.5vw, 38px);
    opacity: 0.8;
    pointer-events: none;
    animation: floatLeaf linear infinite;
}

.leaves span:nth-child(1) {
    left: 4%;
    top: 8%;
    animation-duration: 11s;
}

.leaves span:nth-child(2) {
    left: 19%;
    top: 4%;
    animation-duration: 14s;
    animation-delay: -4s;
}

.leaves span:nth-child(3) {
    left: 34%;
    top: 15%;
    animation-duration: 12s;
    animation-delay: -7s;
}

.leaves span:nth-child(4) {
    left: 51%;
    top: 5%;
    animation-duration: 15s;
    animation-delay: -2s;
}

.leaves span:nth-child(5) {
    right: 5%;
    top: 29%;
    animation-duration: 10s;
    animation-delay: -5s;
}

.leaves span:nth-child(6) {
    right: 27%;
    top: 42%;
    animation-duration: 13s;
    animation-delay: -8s;
}

.leaves span:nth-child(7) {
    left: 2%;
    top: 48%;
    animation-duration: 12s;
    animation-delay: -3s;
}

.leaves span:nth-child(8) {
    left: 22%;
    bottom: 7%;
    animation-duration: 15s;
    animation-delay: -6s;
}

.leaves span:nth-child(9) {
    left: 42%;
    bottom: 17%;
    animation-duration: 11s;
    animation-delay: -1s;
}

.leaves span:nth-child(10) {
    right: 7%;
    bottom: 8%;
    animation-duration: 14s;
    animation-delay: -9s;
}

.leaves span:nth-child(11) {
    right: 42%;
    top: 73%;
    animation-duration: 13s;
    animation-delay: -4s;
}

.leaves span:nth-child(12) {
    left: 11%;
    top: 72%;
    animation-duration: 16s;
    animation-delay: -10s;
}

@keyframes floatLeaf {
    0% {
        transform: translate3d(0, -20px, 0) rotate(0deg);
    }

    25% {
        transform: translate3d(25px, 25vh, 0) rotate(90deg);
    }

    50% {
        transform: translate3d(-15px, 50vh, 0) rotate(180deg);
    }

    75% {
        transform: translate3d(30px, 75vh, 0) rotate(270deg);
    }

    100% {
        transform: translate3d(-10px, 105vh, 0) rotate(360deg);
    }
}

/* =========================
   VINYL
========================= */

.record-area {
    position: absolute;
    top: 17%;
    right: 8%;
    width: min(360px, 38vw);
    z-index: 6;
}

.record {
    position: relative;
    width: min(330px, 35vw);
    aspect-ratio: 1;
    margin-left: auto;
    border-radius: 50%;
    background:
        repeating-radial-gradient(
            circle,
            #111 0px,
            #111 2px,
            #181818 3px,
            #080808 5px
        );
    box-shadow:
        0 18px 45px rgba(0, 0, 0, 0.45),
        inset 0 0 20px rgba(255, 255, 255, 0.04);
}

.record::after {
    content: "";
    position: absolute;
    inset: 7%;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.06);
}

.record-label {
    position: absolute;
    width: 42%;
    height: 42%;
    left: 29%;
    top: 29%;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #191919;
    z-index: 2;
}

.record-label img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: 62% center;
}

.record-hole {
    position: absolute;
    z-index: 3;
    width: 10px;
    height: 10px;
    left: calc(50% - 5px);
    top: calc(50% - 5px);
    border-radius: 50%;
    background: #111;
}

/* Tonearm */

.tonearm {
    position: absolute;
    width: 120px;
    height: 145px;
    right: -22px;
    top: -18px;
    z-index: 10;
    pointer-events: none;
}

.tonearm-base {
    position: absolute;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    right: 2px;
    top: 0;
    background: #202020;
    border: 4px solid #383838;
}

.arm {
    position: absolute;
    width: 9px;
    height: 105px;
    right: 17px;
    top: 20px;
    background: #777;
    border-radius: 10px;
    transform: rotate(23deg);
    transform-origin: top center;
}

.headshell {
    position: absolute;
    width: 42px;
    height: 17px;
    right: 49px;
    bottom: 6px;
    background: #333;
    border-radius: 3px 9px 9px 3px;
    transform: rotate(23deg);
}

.needle {
    position: absolute;
    width: 3px;
    height: 17px;
    right: 47px;
    bottom: -6px;
    background: #bbb;
    transform: rotate(23deg);
}

/* Song text */

.song-info {
    text-align: right;
    margin-top: 14px;
    padding-right: 8px;
    color: #f3e8d8;
    font-size: 15px;
    letter-spacing: 0.4px;
}

.song-info small {
    display: block;
    margin-top: 3px;
    opacity: 0.65;
    font-size: 12px;
}

/* =========================
   SECRET LEAF
========================= */

.secret-leaf {
    position: absolute;
    left: 47%;
    bottom: 10%;
    z-index: 20;
    border: none;
    background: transparent;
    font-size: 42px;
    cursor: pointer;
    filter:
        drop-shadow(0 0 7px rgba(255, 215, 130, 0.8))
        drop-shadow(0 0 18px rgba(255, 185, 80, 0.45));
    animation: glowingLeaf 1.8s ease-in-out infinite;
    transition: transform 0.3s ease;
}

.secret-leaf:hover {
    transform: scale(1.15) rotate(-8deg);
}

.secret-leaf:active {
    transform: scale(0.9);
}

@keyframes glowingLeaf {
    0%,
    100% {
        filter:
            drop-shadow(0 0 5px rgba(255, 215, 130, 0.65))
            drop-shadow(0 0 12px rgba(255, 185, 80, 0.25));
    }

    50% {
        filter:
            drop-shadow(0 0 10px rgba(255, 225, 150, 1))
            drop-shadow(0 0 28px rgba(255, 185, 80, 0.7));
    }
}

/* =========================
   LETTER OVERLAY
========================= */

.letter-overlay {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(30, 0, 7, 0.72);
    backdrop-filter: blur(5px);
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.5s ease;
}

.letter-overlay.show {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
}

.envelope {
    position: relative;
    width: min(500px, 82vw);
    height: min(340px, 58vw);
    min-height: 280px;
    perspective: 1000px;
}

/* Envelope back */

.envelope-back {
    position: absolute;
    inset: 0;
    background: #e9d7b9;
    border-radius: 7px;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
}

/* Letter */

.letter {
    position: absolute;
    width: 88%;
    height: 86%;
    left: 6%;
    top: 5%;
    background: #fff7e8;
    z-index: 2;
    border-radius: 3px;
    transform: translateY(15px);
    transition: transform 1s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
    overflow: hidden;
}

.letter-content {
    padding: 30px 28px;
    text-align: center;
    color: #4d1a20;
    font-size: clamp(15px, 2vw, 19px);
    line-height: 1.45;
}

.phrase {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.8s ease, transform 0.8s ease;
    margin-bottom: 22px;
}

.phrase.visible,
.signature.visible {
    opacity: 1;
    transform: translateY(0);
}

.signature {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.8s ease, transform 0.8s ease;
    margin-top: 8px;
    font-style: italic;
}

/* Front pocket */

.envelope-front {
    position: absolute;
    inset: 0;
    z-index: 4;
    background: #dfc7a2;
    clip-path: polygon(
        0 38%,
        50% 72%,
        100% 38%,
        100% 100%,
        0 100%
    );
    border-radius: 0 0 7px 7px;
}

/* Flap */

.envelope-flap {
    position: absolute;
    z-index: 5;
    left: 0;
    top: 0;
    width: 100%;
    height: 58%;
    background: #ecd9ba;
    clip-path: polygon(0 0, 100% 0, 50% 78%);
    transform-origin: top center;
    transition: transform 1s ease;
    backface-visibility: hidden;
    border-radius: 7px 7px 0 0;
}

/* Open animation */

.letter-overlay.open .envelope-flap {
    transform: rotateX(180deg);
}

.letter-overlay.open .letter {
    transform: translateY(-20px);
}

/* =========================
   TABLET / MOBILE
========================= */

@media (max-width: 900px) {

    .message {
        left: 7%;
        top: 31%;
        max-width: 48%;
    }

    .message p {
        font-size: clamp(24px, 4vw, 38px);
    }

    .record-area {
        right: 5%;
        top: 15%;
        width: 38vw;
    }

    .record {
        width: 34vw;
    }

    .secret-leaf {
        left: 48%;
        bottom: 8%;
    }
}

@media (max-width: 650px) {

    .page {
        min-height: 100svh;
    }

    .message {
        left: 7%;
        top: 27%;
        max-width: 86%;
    }

    .message p {
        font-size: clamp(25px, 7vw, 34px);
    }

    .record-area {
        top: 5%;
        right: 7%;
        width: 155px;
    }

    .record {
        width: 145px;
    }

    .tonearm {
        transform: scale(0.75);
        transform-origin: top right;
    }

    .song-info {
        font-size: 10px;
        padding-right: 0;
    }

    .song-info small {
        font-size: 9px;
    }

    .moon {
        width: 35px;
        height: 35px;
        top: 5%;
        left: 7%;
    }

    .moon::after {
        width: 35px;
        height: 35px;
        left: 11px;
        top: -5px;
    }

    .secret-leaf {
        left: 45%;
        bottom: 7%;
        font-size: 38px;
    }

    .envelope {
        width: 88vw;
        height: 60vw;
        min-height: 250px;
    }

    .letter-content {
        padding: 23px 17px;
        font-size: 14px;
    }

    .phrase {
        margin-bottom: 15px;
    }
}
