document.addEventListener("DOMContentLoaded", () => {
    const ctaButtons = document.querySelectorAll(".cta-button");
  
    ctaButtons.forEach(button => {
      button.addEventListener("click", () => {
        alert("Thank you for your interest in Gradboss!");
      });
    });
  });
  