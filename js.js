




// Gemmer den aktuelle sides filnavn
const currentPage = window.location.pathname.split("/").pop();

// Finder alle links i navigationen
document.querySelectorAll(".nav-links a").forEach(link => {

    // Henter href-attributten
    const href = link.getAttribute("href");

    // Hvis href matcher den aktuelle side,
    // tilføjes klassen "active"
    if (href === currentPage) {
        link.classList.add("active");
    }
});









/* jeg laver en liste med alle billederne i galleriet

   hvert element er stien til et billede

   JavaScript bruger listen til at vide,
   hvilket billede der skal vises næste gang
   brugeren klikker på pilene
*/

const billeder = [
    "index-scroll-section/bane.png",
    "index-scroll-section/banemedmennesker.png",
    "index-scroll-section/bar.png",
    "index-scroll-section/bil.png",
    "index-scroll-section/bordtennis.png",
    "index-scroll-section/cafe1.png",
    "index-scroll-section/cafemedmennesker.png",
    "index-scroll-section/dandelion.png",
    "index-scroll-section/entrance.png",
    "index-scroll-section/hestesko.png",
    "index-scroll-section/hus.png",
    "index-scroll-section/IMG_0516.jpg",
    "index-scroll-section/mark2.png",
    "index-scroll-section/menneskerderspiller.png",
    "index-scroll-section/minihus.png",
    "index-scroll-section/minihus2.png",
    "index-scroll-section/skak.png",
    "index-scroll-section/spilaften.png",
    "index-scroll-section/traktor.png",
    "index-scroll-section/vand.png"
];


/* jeg starter på det første billede i listen */
let currentIndex = 0;


/* jeg finder billedet og pilene i HTML */
const image = document.getElementById("slider-image");
const prevBtn = document.querySelector(".index-gallery-prev");
const nextBtn = document.querySelector(".index-gallery-next");


/* jeg laver en funktion som viser billedet,
   der svarer til currentIndex */
function showImage() {
    image.src = billeder[currentIndex];
}


/* når jeg klikker på højre pil,
   går jeg videre til næste billede */
nextBtn.addEventListener("click", () => {

    currentIndex++;

    /* hvis jeg er nået til sidste billede,
       starter jeg forfra */
    if (currentIndex >= billeder.length) {
        currentIndex = 0;
    }

    showImage();
});


/* når jeg klikker på venstre pil,
   går jeg tilbage til forrige billede */
prevBtn.addEventListener("click", () => {

    currentIndex--;

    /* hvis jeg går længere tilbage end første billede,
       hopper jeg til det sidste billede */
    if (currentIndex < 0) {
        currentIndex = billeder.length - 1;
    }

    showImage();
});


/* jeg sørger for at det første billede vises,
   når siden åbnes */
showImage();









/* ==========================================
   DARK MODE TOGGLE
========================================== */

const themeToggle =
    document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {

        document.documentElement.setAttribute(
            "data-theme",
            "light"
        );

    } else {

        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );
    }
});















