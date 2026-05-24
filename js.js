// Gemmer den aktuelle sides filnavn i en variabel
// split("/") deler URL'en op ved hver skråstreg
// pop() tager den sidste del af URL'en
const currentPage = window.location.pathname.split("/").pop();

// Finder alle links inde i navigationen
document.querySelectorAll(".nav-links a").forEach(link => {

    // Henter linkets destination (href-attribut)
    const href = link.getAttribute("href");

    // Sammenligner linkets href med den aktuelle side
    if (href === currentPage) {

        // Tilføjer klassen "active", så CSS kan markere siden
        link.classList.add("active");
    }
});