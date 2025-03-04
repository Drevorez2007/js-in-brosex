window.addEventListener('DOMContentLoaded', () => {
    const createSwiper = (breakpoint, swiperClass, swiperSettings) => {
        let swiper;
  
        breakpoint = window.matchMedia(breakpoint);
        const enableSwiper = function (className, settings) {
            swiper = new Swiper(className, settings);
        };
  
        const checker = function () {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
            }
            if (swiper !== undefined) swiper.destroy();
            return;
        };
  
        breakpoint.addEventListener('change', checker);
        checker();
    };
  
    const swiperSettingsObj = {
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        spaceBetween: 16,
        freeMode: true,
    };
  
    createSwiper('(max-width: 768px)', '.mySwiper', swiperSettingsObj);
  });