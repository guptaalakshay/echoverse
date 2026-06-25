console.log("EchoVerse Loaded");

document.querySelectorAll(".feature-card")
.forEach(card => {

card.addEventListener("mouseenter", () => {
card.style.transform = "translateY(-8px)";
});

card.addEventListener("mouseleave", () => {
card.style.transform = "translateY(0px)";
});

});
