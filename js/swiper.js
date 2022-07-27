var swiper = new Swiper('.courses-swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  initialSlide: 1,
  loop: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  // 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards'
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
    350: {
      slidesPerView: 1,
      spaceBetween: 10
    },

    420: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    580: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    650: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
})
