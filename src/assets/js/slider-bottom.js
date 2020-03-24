import Swiper from 'swiper';
import '../../../node_modules/swiper/css/swiper.min.css';

var myBottomSwiper = new Swiper('.swiper-bottom-container', {
    // Optional parameters   
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      700: {
        slidesPerView: 2
      },
      1024:{
        slidesPerView: 3
      }
    },
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-bottom-button-next',
      prevEl: '.swiper-bottom-button-prev',
    },
});

export  default myBottomSwiper;