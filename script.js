const form = document.querySelector(".contact__form");
const formUserName = document.getElementById("name");
const formUserEmail = document.getElementById("email");

// Reveal-on-scroll (content stays visible if JS is off)
document.documentElement.classList.add("js");
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach((el, i) => {
        el.style.transitionDelay = `${(i % 4) * 80}ms`;
        io.observe(el);
    });
} else {
    revealEls.forEach((el) => el.classList.add("in"));
}
