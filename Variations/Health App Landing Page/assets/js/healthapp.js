const topScroll = document.querySelector(".top-scroll");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    topScroll.classList.add("activescroll");
  } else {
    topScroll.classList.remove("activescroll");
  }
});
$(function() { AOS.init({ offset: 300, duration:1000, easing:"ease-out-quad", once:0 });  window.addEventListener('load', AOS.refresh);});
<<<<<<< HEAD
=======

>>>>>>> 7e565eafb664a2fbd4ec255345cac2400749a693
