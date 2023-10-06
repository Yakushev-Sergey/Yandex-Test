
let swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


document.addEventListener('DOMContentLoaded', () => {

  const itemScroll = document.querySelectorAll('.item-scroll');

  const scrollAnimation = () => {
    let windowCenter = (window.innerHeight / 5) * 4;
    itemScroll.forEach(el => {
      let scrollOffset = el.getBoundingClientRect().top;

      if (windowCenter >= scrollOffset) {
        el.classList.add('animation-class');
      } else {
        el.classList.remove('animation-class');
      }
    })
  }

  scrollAnimation();
  window.addEventListener('scroll', scrollAnimation);

});