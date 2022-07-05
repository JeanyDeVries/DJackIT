var links = document.querySelectorAll('nav ul li a');
links.forEach(function (element) {
  element.addEventListener('click', function (e) {
    // PreventDefault to prevent redirect
    e.preventDefault();
    links.forEach(function (element) {
      element.classList.remove('active');
    });
    this.classList.add('active');
  });
});