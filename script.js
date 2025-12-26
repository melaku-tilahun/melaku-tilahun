document.addEventListener("DOMContentLoaded", () => {
  // Reveal on scroll animation
  const reveals = document.querySelectorAll(
    ".reveal, .reveal-delay-1, .reveal-delay-2"
  );

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    reveals.forEach((reveal) => {
      const revealTop = reveal.getBoundingClientRect().top;

      if (revealTop < triggerBottom) {
        reveal.classList.add("active");
      }
    });
  };

  // Initial check on load
  revealOnScroll();

  // Check on scroll
  window.addEventListener("scroll", revealOnScroll);

  // Current Year for Footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Cursor Follower (Optional micro-interaction)
  const cursor = document.querySelector(".cursor-follower");
  document.addEventListener("mousemove", (e) => {
    if (cursor) {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
  });

  // Smooth Scroll for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for fixed nav
          behavior: "smooth",
        });
      } else if (targetId === "") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    });
  });
});
