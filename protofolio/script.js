// 1. إظهار الفوتر عند الطلوع
let lastScrollY = window.scrollY;
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;

  if (currentScroll < lastScrollY) {
    footer.style.bottom = "0"; // يطلع
  } else {
    footer.style.bottom = "-100px"; // ينزل
  }

  lastScrollY = currentScroll;
});

// 2. ظهور العناصر عند الوصول لها (بـ JavaScript بدون مكتبات)
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
