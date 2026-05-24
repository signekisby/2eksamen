console.log("JS virker");




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