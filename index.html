document.addEventListener("DOMContentLoaded", () => {

  // MOBILE MENU
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");
  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });

  // MODAL
  const modal = document.getElementById("modal");
  const testDriveBtn = document.getElementById("testDriveBtn");
  const testDriveBtn2 = document.getElementById("testDriveBtn2");
  const closeModal = document.getElementById("closeModal");

  testDriveBtn.addEventListener("click", () => modal.style.display = "flex");
  testDriveBtn2.addEventListener("click", () => modal.style.display = "flex");
  closeModal.addEventListener("click", () => modal.style.display = "none");

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // LUXURY SCROLL
  const fadeElems = document.querySelectorAll(".luxury-section");

  function showOnScroll() {
    fadeElems.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 150) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", showOnScroll);
  showOnScroll();

  // STYLE CREATOR
  const brightness = document.getElementById("brightness");
  const saturation = document.getElementById("saturation");
  const previewCar = document.getElementById("previewCar");
  const randomColor = document.getElementById("randomColor");

  function applyColor() {
    const bright = brightness.value;
    const sat = saturation.value;
    previewCar.style.filter = brightness(${bright}%) saturate(${sat}%);
  }

  brightness.addEventListener("input", applyColor);
  saturation.addEventListener("input", applyColor);

  randomColor.addEventListener("click", () => {
    const randomHex = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("colorWheel").value = randomHex;
    applyColor();
  });

  applyColor();

  // TIMER
  const timer = document.getElementById("timer");
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);

  function updateTimer() {
    const now = new Date();
    const diff = endDate - now;
    if (diff <= 0) {
      timer.innerText = "Серия завершена";
      return;
    }
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff / (1000*60*60)) % 24);
    const m = Math.floor((diff / (1000*60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    timer.innerText = ${d}д ${h}ч ${m}м ${s}с;
  }
  setInterval(updateTimer, 1000);
  updateTimer();

});