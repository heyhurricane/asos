$(document).ready(function () {
  var basketActive = false;
  var searchActive = false;

  //выпадающая корзина в секции Hero

  var basket = $('.modalbasket'),
      basketBtn = $('[data-toggle=basket]');
  
  basketBtn.on('click', function () {
    console.log('yes');
   basket.toggleClass('modalbasket--visible');
   basketActive = !(basketActive);
  //  $(".shopping-cart").fadeToggle( "fast");
  });

  //выпадающий поиск в секции Hero

  var search = $('.modalsearch'),
      searchBtn = $('[data-toggle=search]');
      closeBtn =  $('.modalsearch__close');
  
  searchBtn.on('click', function () {
    console.log('yes');
    search.toggleClass('modalsearch--visible');
    searchActive = !(searchActive);
  });

  closeBtn.on('click', function () {
    search.toggleClass('modalsearch--visible');
    searchActive = !(searchActive);
    $('.modalsearch__form')[0].reset();
  });

  $(document).keydown(function(event) { 
    if (event.key=='Escape' && (searchActive)) { 
      search.toggleClass('modalsearch--visible');
      searchActive = !(searchActive);
      $('.modalsearch__form')[0].reset();
    }
    else {
      if (event.key=='Escape' && (basketActive)) { 
        basket.toggleClass('modalbasket--visible');
        basketActive = !(basketActive);
      }

    }
  });

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