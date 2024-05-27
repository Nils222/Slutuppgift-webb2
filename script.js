var navCollapseButton = document.getElementById("nav-toggle");
var navigation = document.getElementById("navigation");

navCollapseButton.addEventListener("mousedown", () => {
    navigation.classList.toggle("open");
})