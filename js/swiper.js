var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  initialSlide: 0,
  loop: true,
  centeredSlides: false,
  // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards'
  scrollbar: {
    el: '.swiper-scrollbar'
  },
  effect: 'slide',
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 30
    },

    560: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    960: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
})
