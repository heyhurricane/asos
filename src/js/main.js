$(document).ready(function () {
  
  // Слайдер в секции Hero
  var mySwiper = new Swiper ('.heroswiper-container', {
    // Optional parameters
    loop: true,
    spaceBetween: 40,
    pagination: {
      el: '.heroswiper-pagination',
      type: 'bullets', 
    },
    navigation: {
      nextEl: '.heroswiper-button-next',
      prevEl: '.heroswiper-button-prev',
    },
  });

  //  Навигация и пагинация для слайдера в Проектах
  // var next = $('.heroswiper-button-next');
  // var prev = $('.heroswiper-button-prev');
  // var bullets = $('.heroswiper-pagination');
  // bullets.css('left', prev.width()+18);
  // next.css('left', prev.width()+18+bullets.width()+18);

  new WOW().init();

});