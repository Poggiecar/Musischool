window.addEventListener("scroll", function() {
    var nav = document.getElementById("nav");
    if (window.pageYOffset > nav.offsetTop) {
      nav.classList.add("nav-scroll");
    } else {
      nav.classList.remove("nav-scroll");
    }
  });

  function changeColor(newColor) {
    const elem = document.getElementById("nombre");
    elem.style.color = red;
  }