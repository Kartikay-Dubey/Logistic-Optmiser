document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        document.querySelectorAll(".service-card").forEach((otherCard) => {
            if (otherCard !== card) {
                otherCard.style.filter = "blur(2px)";
            }
        });
    });

    card.addEventListener("mouseleave", () => {
        document.querySelectorAll(".service-card").forEach((otherCard) => {
            otherCard.style.filter = "none";
        });
    });
});
