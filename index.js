document.addEventListener("DOMContentLoaded", () => {

  /* ---------------- THEME ---------------- */
  const darkToggle = document.getElementById("darkToggle");

  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  }

  if (darkToggle) {
    darkToggle.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");

      localStorage.setItem(
        "theme",
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    });
  }

  /* ---------------- YEAR ---------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------------- FOOTER LINK HOVER ---------------- */
  document.querySelectorAll("footer a").forEach(link => {
    link.addEventListener("mouseenter", () => link.classList.add("text-white"));
    link.addEventListener("mouseleave", () => link.classList.remove("text-white"));
  });

  /* ---------------- MOBILE MENU ---------------- */
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  /* ---------------- SCROLL FEATURES ---------------- */
  const scrollBtn = document.getElementById("scrollTop");
  const footer = document.querySelector("footer");

  window.addEventListener("scroll", () => {

    /* Scroll to top button */
    if (scrollBtn) {
      scrollBtn.classList.toggle("hidden", window.scrollY < 300);
    }

    /* Footer animation */
    if (footer && !footer.classList.contains("show")) {
      const footerTop = footer.getBoundingClientRect().top;
      if (footerTop < window.innerHeight - 100) {
        footer.classList.add("show");
      }
    }
  });

  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});
