document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");
  const openButtons = [
    document.getElementById("openModal"),
    document.getElementById("openModal2"),
    document.getElementById("openModal3"),
    document.getElementById("openModal4"),
    document.getElementById("openModal5")
  ];

  openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // smooth scroll for menu links
  document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Burger menu
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  // close menu on click link
  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      burger.classList.remove("active");
      mobileMenu.classList.remove("active");
    });
  });

  // button up
  const upBtn = document.getElementById("upBtn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      upBtn.style.display = "block";
    } else {
      upBtn.style.display = "none";
    }
  });

  upBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});