document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('button[data-bs-target="#imageModal"]');
  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const imgSrc = button.getAttribute("data-img-src");
      document.getElementById("modalImage").setAttribute("src", imgSrc);
    });
  });
});