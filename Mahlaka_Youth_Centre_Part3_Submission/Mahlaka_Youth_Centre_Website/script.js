// Mahlaka Youth Centre - Part 3 interactive enhancements
"use strict";

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
    mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    }));
}
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Dynamic programme search/filter
const programmeSearch = document.getElementById("programmeSearch");
if (programmeSearch) {
    const cards = [...document.querySelectorAll("#programmeList .programme-card")];
    const noResults = document.getElementById("noProgrammeResults");
    programmeSearch.addEventListener("input", () => {
        const term = programmeSearch.value.trim().toLowerCase();
        let visible = 0;
        cards.forEach(card => {
            const match = (card.dataset.search + " " + card.textContent).toLowerCase().includes(term);
            card.hidden = !match;
            if (match) visible++;
        });
        noResults.hidden = visible !== 0;
    });
}

// Accessible accordion
document.querySelectorAll(".accordion-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
        const panel = document.getElementById(trigger.getAttribute("aria-controls"));
        const expanded = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", String(!expanded));
        panel.hidden = expanded;
        const symbol = trigger.querySelector("span");
        if (symbol) symbol.textContent = expanded ? "+" : "−";
    });
});

// Gallery lightbox
const lightbox = document.getElementById("lightbox");
if (lightbox) {
    const lightboxImage = document.getElementById("lightboxImage");
    const caption = document.getElementById("lightboxCaption");
    document.querySelectorAll(".gallery-image").forEach(button => {
        button.addEventListener("click", () => {
            const image = button.querySelector("img");
            lightboxImage.src = button.dataset.full;
            lightboxImage.alt = image.alt;
            caption.textContent = button.querySelector("span").textContent;
            if (typeof lightbox.showModal === "function") lightbox.showModal();
            else lightbox.setAttribute("open", "");
        });
    });
    const close = lightbox.querySelector(".lightbox-close");
    close.addEventListener("click", () => lightbox.close());
    lightbox.addEventListener("click", event => {
        if (event.target === lightbox) lightbox.close();
    });
    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && lightbox.open) lightbox.close();
    });
}

// Prepare an email from validated contact/enquiry form data.
// A server-side email service is intentionally not claimed: mailto opens the visitor's email client.
function prepareEmail(form, recipient, subject, statusElement) {
    form.addEventListener("submit", event => {
        event.preventDefault();
        if (!form.checkValidity()) {
            form.reportValidity();
            statusElement.textContent = "Please correct the highlighted fields before continuing.";
            return;
        }
        const data = new FormData(form);
        const body = [...data.entries()].map(([key, value]) => `${key}: ${value}`).join("\n");
        const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        statusElement.textContent = "Your email application should open with the completed message. Please review and press Send.";
        window.location.href = mailto;
    });
}
const contactForm = document.getElementById("contactForm");
if (contactForm) prepareEmail(contactForm, "info@mahlakayouthcentre.org", "Mahlaka Youth Centre contact message", document.getElementById("formMessage"));
const enquiryForm = document.getElementById("enquiryForm");
if (enquiryForm) prepareEmail(enquiryForm, "info@mahlakayouthcentre.org", "Mahlaka Youth Centre programme enquiry", document.getElementById("enquiryMessage"));
