if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

document.getElementById("year").textContent = new Date().getFullYear();
document.querySelectorAll("footer a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.classList.add("text-white");
  });

  link.addEventListener("mouseleave", () => {
    link.classList.remove("text-white");
  });
});
const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop < windowHeight - 100) {
    footer.classList.add("show");
  }
});
const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  // Save preference
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
