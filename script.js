document.addEventListener("DOMContentLoaded", function() {
    const nameRevealBtn = document.getElementById("name-reveal-btn");
    const nameHideBtn = document.getElementById("name-hide-btn");
    const landingUnexpanded = document.getElementById("landing-unexpanded");
    const landingExpanded = document.getElementById("landing-expanded");

    setTimeout(() => {
        landingUnexpanded.classList.add("no-animation")
        landingUnexpanded.style.opacity = 1;
    }, 5500)

    nameRevealBtn.addEventListener("click", function() {
        landingUnexpanded.style.opacity = 0;
        landingUnexpanded.style.visibility = "hidden";
        setTimeout(() => {
            landingExpanded.style.opacity = 1;
            landingExpanded.style.visibility = "visible";
        }, 500)
        
    });

    nameHideBtn.addEventListener("click", function() {
        landingExpanded.style.opacity = 0;
        landingExpanded.style.visibility = "hidden";
        setTimeout(() => {
            landingUnexpanded.style.opacity = 1;
            landingUnexpanded.style.visibility = "visible";
        }, 500)
    });
});