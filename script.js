// House Dimensions — edit the settings below before publishing.
const HOUSE_DIMENSIONS = {
  // Replace this with the email address that should receive website enquiries.
  contactEmail: "YOUR-EMAIL@example.com"
};

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent("Website enquiry — House Dimensions");
  const body = encodeURIComponent(
    `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nInterested in: ${form.get("interest")}\n\nProject details:\n${form.get("message") || "(Not provided)"}`
  );
  if (!HOUSE_DIMENSIONS.contactEmail || HOUSE_DIMENSIONS.contactEmail.includes("YOUR-EMAIL")) {
    document.getElementById("formStatus").textContent =
      "Before publishing, add your business email address in script.js (contactEmail).";
    return;
  }
  window.location.href = `mailto:${HOUSE_DIMENSIONS.contactEmail}?subject=${subject}&body=${body}`;
});
