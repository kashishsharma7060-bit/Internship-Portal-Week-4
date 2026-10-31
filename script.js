// Week 4: Performance and Accessibility Improvements

document.addEventListener("DOMContentLoaded", function () {

    // 1. Welcome Message
    console.log("Internship Portal is ready!");

    // 2. Smooth Navigation
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId.length > 1) {

                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    event.preventDefault();

                    targetSection.scrollIntoView({
                        behavior: window.matchMedia(
                            "(prefers-reduced-motion: reduce)"
                        ).matches ? "auto" : "smooth"
                    });
                }
            }
        });
    });

    // 3. Apply Now Buttons
    document.querySelectorAll(".card-button").forEach(function (button) {

        button.addEventListener("click", function (event) {
            event.preventDefault();

            const card = this.closest(".card");
            const internshipName = card.querySelector("h3").textContent;

            alert(
                "Thank you for your interest in " +
                internshipName +
                "!\n\nYour application process will begin soon."
            );
        });
    });

    // 4. Interactive Steps
    document.querySelectorAll(".step").forEach(function (step) {

        step.style.cursor = "pointer";

        step.addEventListener("click", function () {

            const heading = this.querySelector("h3").textContent;
            const description = this.querySelector("p").textContent;

            alert(heading + "\n\n" + description);
        });
    });

    // 5. Explore Button
    const exploreButton = document.querySelector(".hero .button");

    if (exploreButton) {
        exploreButton.addEventListener("click", function () {
            console.log("Explore Internships button clicked!");
        });
    }

});