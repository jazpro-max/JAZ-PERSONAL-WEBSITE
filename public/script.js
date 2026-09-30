const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  formMessage.textContent = "Sending...";

  const data = Object.fromEntries(new FormData(form));

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) throw new Error(result.message || "Something went wrong.");

    formMessage.textContent = result.message;
    form.reset();
  } catch (error) {
    formMessage.textContent = error.message;
  }
});