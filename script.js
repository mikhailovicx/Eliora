// =========================
// START STORY + MUSIC
// =========================

const startBtn = document.getElementById("startBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");
const bgMusic = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {

    opening.style.opacity = "0";
    opening.style.transition = "1s";

    setTimeout(() => {

        opening.style.display = "none";
        mainContent.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1000);

    bgMusic.volume = 0.2;

    bgMusic.play().catch(() => {
        console.log("Autoplay blocked");
    });

});

// =========================
// FADE IN ON SCROLL
// =========================

const fadeElements = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

fadeElements.forEach(section => {
    observer.observe(section);
});

// =========================
// GALLERY MODAL
// =========================

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const galleryImages = document.querySelectorAll(".gallery-item");
const closeModal = document.querySelector(".close-modal");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        modal.style.display = "flex";
        modalImage.src = img.src;

    });

});

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});

modal.addEventListener("click", (e) => {

    if (e.target === modal) {
        modal.style.display = "none";
    }

});

// =========================
// ACCORDION
// =========================

const accordionButtons =
    document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content =
            button.nextElementSibling;

        const isOpen =
            content.style.maxHeight;

        document
            .querySelectorAll(".accordion-content")
            .forEach(item => {

                item.style.maxHeight = null;

            });

        if (!isOpen) {

            content.style.maxHeight =
                content.scrollHeight + "px";

        }

    });

});

// =========================
// LOVE COUNTER
// =========================

const daysCount =
    document.getElementById("daysCount");

const monthsCount =
    document.getElementById("monthsCount");

// 14 Desember 2025

const relationshipDate =
    new Date("2025-12-14");

const today =
    new Date();

const diffTime =
    today - relationshipDate;

const totalDays =
    Math.floor(
        diffTime /
        (1000 * 60 * 60 * 24)
    );

let totalMonths =
    (today.getFullYear() - relationshipDate.getFullYear()) * 12;

totalMonths +=
    today.getMonth() -
    relationshipDate.getMonth();

if (
    today.getDate() <
    relationshipDate.getDate()
) {
    totalMonths--;
}

daysCount.textContent =
    totalDays > 0 ? totalDays : 0;

monthsCount.textContent =
    totalMonths > 0 ? totalMonths : 0;

// =========================
// TYPEWRITER EFFECT
// (Ending)
// =========================

const endingTitle =
    document.querySelector(".ending h2");

if (endingTitle) {

    const originalText =
        endingTitle.textContent;

    endingTitle.textContent = "";

    let index = 0;

    const typeWriter = () => {

        if (index < originalText.length) {

            endingTitle.textContent +=
                originalText.charAt(index);

            index++;

            setTimeout(typeWriter, 90);

        }

    };

    const endingObserver =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    typeWriter();
                    endingObserver.disconnect();

                }

            });

        });

    endingObserver.observe(endingTitle);

}

// =========================
// PARALLAX STARS
// =========================

window.addEventListener("scroll", () => {

    const stars =
        document.querySelector(".stars");

    const scrollY =
        window.pageYOffset;

    stars.style.transform =
        `translateY(${scrollY * 0.15}px)`;

});

// =========================
// CONSOLE MESSAGE
// =========================

console.log(`
==================================

Our First 6 Chapters ❤️

Eliora ❤️
Alexander Yugo Topshot Alex

==================================
`);
