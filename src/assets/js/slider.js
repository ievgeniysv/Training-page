import Swiper from 'swiper';
import '../../../node_modules/swiper/css/swiper.min.css';

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters   
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

export  default mySwiper;