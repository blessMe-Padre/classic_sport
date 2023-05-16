const initMainSlider = () => {
    const sliderWhom = document.querySelector('.main__slider');
  
    if (sliderWhom) {
        let swiper = new Swiper(sliderWhom, {
          loop: true,
          spaceBetween: 20,
          init: true,
          breakpoints: {
            425: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            560: {
                slidesPerView: 2,
                spaceBetween: 30,
              },

            767: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            1023: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
          },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

    }
  }
  
  export { initMainSlider };
  