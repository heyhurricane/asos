$(document).ready(function () {
  var basketActive = false;
  var searchActive = false;

  //выпадающая корзина в секции Hero

  var basket = $('.modalbasket'),
      basketBtn = $('[data-toggle=basket]');
  
  basketBtn.on('click', function () {
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

  // Смена ховеров у кнопок слайдера

  var block = document.getElementById('block');

  function changeBgImg(){
    block.style.backgroundImage = "url('https://cs7062.vk.me/c540107/v540107359/2729/fYQlS_23QdA.jpg')";
  }

  // Кнопки вперёд/назад в слайдере в секции Hero
  $('.heroswiper-button-prev').on('click', function() {
    const index = mySwiper.realIndex;
    if (index=='1') {
      $(this).removeClass('slide1-prev');
      $(this).removeClass('slide3-prev');
      $('.heroswiper-button-next').removeClass('slide1-next');
      $('.heroswiper-button-next').removeClass('slide3-next');
      $('.heroswiper-button-next').addClass('slide2-next');
      $(this).addClass('slide2-prev');
    }
    else {
      if (index=='2') { 
        $(this).removeClass('slide1-prev');
        $(this).removeClass('slide2-prev');
        $('.heroswiper-button-next').removeClass('slide1-next');
        $('.heroswiper-button-next').removeClass('slide2-next');
        $('.heroswiper-button-next').addClass('slide3-next');
        $(this).addClass('slide3-prev'); 

      }
      else { 
        $(this).removeClass('slide2-prev');
        $(this).removeClass('slide3-prev');
        $('.heroswiper-button-next').removeClass('slide2-next');
        $('.heroswiper-button-next').removeClass('slide3-next');
        $('.heroswiper-button-next').addClass('slide1-next');
        $(this).addClass('slide1-prev'); 
      }
    }

  });

  $('.heroswiper-button-next').on('click', function() {
    const index = mySwiper.realIndex;
    if (index=='1') {
      $(this).removeClass('slide1-next');
      $(this).removeClass('slide3-next');
      $('.heroswiper-button-prev').removeClass('slide1-prev');
      $('.heroswiper-button-prev').removeClass('slide3-prev');
      $('.heroswiper-button-prev').addClass('slide2-prev');
      $(this).addClass('slide2-next');
    }
    else {
      if (index=='2') { 
        $(this).removeClass('slide1-next');
        $(this).removeClass('slide2-next');
        $('.heroswiper-button-prev').removeClass('slide1-prev');
        $('.heroswiper-button-prev').removeClass('slide2-prev');
        $('.heroswiper-button-prev').addClass('slide3-prev');
        $(this).addClass('slide3-next'); 

      }
      else { 
        $(this).removeClass('slide2-next');
        $(this).removeClass('slide3-next');
        $('.heroswiper-button-prev').removeClass('slide2-prev');
        $('.heroswiper-button-prev').removeClass('slide3-prev');
        $('.heroswiper-button-prev').addClass('slide1-prev');
        $(this).addClass('slide1-next'); 
      }
    }
  });




  
// Слайдер в секции Популярные товары
var mySwiper2 = new Swiper ('.popularswiper-container', {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 44,
  pagination: {
    el: '.popularswiper-pagination',
    type: 'bullets', 
  },
  navigation: {
    nextEl: '.popularswiper-button-next',
    prevEl: '.popularswiper-button-prev',
  },
});


  var hoverActive = false;
  var hover;
  var indexSlide;

// ПОЯВЛЕНИЕ ИКОНОК ПРИ КЛИКЕ НА СЛАЙД В СЕКЦИИ ПОПУЛЯРНЫЕ ТОВАРЫ
$('.popularswiper-slide').on('click', function() {
  if (hoverActive==true) { 
    hover.toggleClass('popular__hover'+indexSlide+'--visible');
    hoverActive=!(hoverActive);
  }
  indexSlide = $(this).data('swiperSlideIndex')+1;
 
  if (indexSlide=='1') { hover = $('.popular__hover1'); }
  if (indexSlide=='2') { hover = $('.popular__hover2'); }
  if (indexSlide=='3') { hover = $('.popular__hover3'); }
  if (indexSlide=='4') { hover = $('.popular__hover4'); }
  
  hover.toggleClass('popular__hover'+indexSlide+'--visible');
  hoverActive=!(hoverActive);

});




  new WOW().init();

});