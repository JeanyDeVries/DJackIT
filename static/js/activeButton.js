var links = document.querySelectorAll('nav ul li a');


let n = window.location.href;
links.forEach(function (element) {
  element.href == n && element.classList.add("active")
});
