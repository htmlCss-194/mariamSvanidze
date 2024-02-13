function displayMenu() {
    let menuLinks = document.querySelector(".firstnav");

    if (menuLinks.style.display === "block") {
        menuLinks.style.display = "none";
    } else {
        menuLinks.style.display = "block";
    }
}
