const form = document.getElementById("contact-form");
const wrapper = document.getElementById("form-wrapper");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Remove previous message
    const oldMsg = document.querySelector(".form-message");
    if (oldMsg) oldMsg.remove();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate fields
    if (!name || !email || !subject || !message) {
        const error = document.createElement("p");
        error.className = "form-message error fade-in";
        error.textContent = "⚠ Please fill all fields.";
        form.appendChild(error);
        return;
    }

    // Success message replaces card content
    wrapper.innerHTML = `
        <h2>✅ Thank you!</h2>
        <p class="form-message success fade-in">Your message has been submitted successfully.</p>
    `;
});


// Animate cards on scroll
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("card-visible");
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => {
    card.classList.add("card-hidden");
    observer.observe(card);
  });
});

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const blogCards = document.querySelectorAll(".blog-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("card-visible", "blog-card-visible");
      }
    });
  }, { threshold: 0.2 });

  // Cards
  cards.forEach(card => {
    card.classList.add("card-hidden");
    observer.observe(card);
  });

  // Blog Cards (About)
  blogCards.forEach(blogCard => {
    blogCard.classList.add("blog-card-hidden");
    observer.observe(blogCard);
  });
});
