// Mobile Navigation Toggle
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  // Toggle Navigation
  nav.classList.toggle("active");

  // Animate Burger
  burger.classList.toggle("active");
});

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    burger.classList.remove("active");
  });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
    return;
  }

  if (currentScroll > lastScroll) {
    // Scrolling down
    navbar.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up
    navbar.style.transform = "translateY(0)";
    navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.2)";
  }

  lastScroll = currentScroll;
});

// Intersection Observer for Fade-in Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all sections, project cards, and skill categories
document
  .querySelectorAll(".section, .project-card, .skill-category, .timeline-item")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Active Navigation Link on Scroll
const sections = document.querySelectorAll(".section");
const navLinkElements = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinkElements.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// Typing Effect for Hero Title (Optional Enhancement)
const heroTitle = document.querySelector(".hero-title");
if (heroTitle) {
  const originalText = heroTitle.innerHTML;
  heroTitle.innerHTML = "";
  let index = 0;

  function typeText() {
    if (index < originalText.length) {
      heroTitle.innerHTML += originalText.charAt(index);
      index++;
      setTimeout(typeText, 50);
    }
  }

  // Uncomment the line below to enable typing effect
  // setTimeout(typeText, 500);
}

// Add Animation Delay to Timeline Items
document.querySelectorAll(".timeline-item").forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.1}s`;
});

// Add Animation Delay to Skill Categories
document.querySelectorAll(".skill-category").forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.1}s`;
});

// Add Animation Delay to Project Cards
document.querySelectorAll(".project-card").forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.1}s`;
});

// Prevent downloading resume.pdf if it doesn't exist (for demo)
document
  .querySelector('a[href="resume.pdf"]')
  ?.addEventListener("click", function (e) {
    if (!document.querySelector('link[href="resume.pdf"]')) {
      console.log(
        "Resume PDF not found. Please add your resume.pdf file to the project.",
      );
    }
  });

// Print Page Functionality (Optional)
function printResume() {
  window.print();
}

// Add smooth reveal animation when scrolling to sections
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

console.log("Portfolio website loaded successfully! 🚀");
