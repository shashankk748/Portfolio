// toggle menu
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
  // reset: true ,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .portfolio-box, .contact form, .languages ", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1,.about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p,.about-content", { origin: "right" });

////////////////////////typedd js//////////////////////////
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Web Enthusiast"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

function fillUp() {
  const barFills = document.querySelectorAll(".bar-fill");
  barFills.forEach((barFill) => {
    const percent = barFill.getAttribute("data-percent");
    barFill.style.width = 0;
    setTimeout(() => {
      barFill.style.width = percent + "%";
    }, 600);
  });
}

fillUp();
document.getElementById("Skills").addEventListener("click", fillUp);

const contact = document.querySelector("#contact-form");
contact.onsubmit = (e) => {
  e.preventDefault();
  const formFields = new FormData(contact);
  const fullName = formFields.get("full-name");
  const email = formFields.get("email");
  const mobileNumber = formFields.get("mobile-number");
  const message = formFields.get("message");
  const emailSubject = formFields.get("email-subject");
  const emailBody = `Full Name: ${fullName}
  Mobile Number: ${mobileNumber}\n
  Message: ${message}\n`;
  window.location.href = `mailto:shashank.m748@gmail.com?subject=${emailSubject}&body=${emailBody}`;
};
