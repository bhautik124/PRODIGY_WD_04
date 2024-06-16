document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll
  const scrollLinks = document.querySelectorAll(".scroll-link");

  for (const link of scrollLinks) {
      link.addEventListener("click", (event) => {
          event.preventDefault();
          const targetId = event.target.getAttribute("href").substring(1);
          document.getElementById(targetId).scrollIntoView({
              behavior: "smooth"
          });
      });
  }
});