// scripts.js
document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const content = this.nextElementSibling;
      content.classList.toggle('active');
    });
  });
});
