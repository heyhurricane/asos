$(document).ready(function () {
  var basketActive = false;
  var searchActive = false;
  var zoomActive = false;

  // Кнопка Наверх и Анимация
  $(window).scroll(function () {
    var windowHeight = $(window).height();
      if ($(this).scrollTop() > 0) {
          $('.scroll-up').fadeIn();
          document.getElementById("headerwrap").style.background = "#5a52a5";
      } else {
          $('.scroll-up').fadeOut();
          document.getElementById("headerwrap").style.background = "transparent";
      }
    
  });

  $('.scroll-up').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 900);
    return false;
});


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
      else {
        if (event.key=='Escape' && (zoomActive)) { 
          zoom.toggleClass('modalzoom--visible');
          zoomActive = !(zoomActive);
        }
      }

    }
  });
  

  $(document).on('click', function(event) {
    if ($(event.target).is(search)) {
      search.toggleClass('modalsearch--visible');
      searchActive = !(searchActive);
      // $('.modal__form')[0].reset();
    }
    else {
      // if (!($(event.target).is(basket))) {
      //   console.log('yes');
      //   basket.toggleClass('modalbasket--visible');
      //   basketActive = !(basketActive);
      // }
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

// $('.sliderwrap .popularswiper-container').each(function(index, value) {
 
//   var mySwiper2 = new Swiper(value, {
//     loop: true,
//     spaceBetween: 44,
//     navigation: {
//       nextEl: value.nextElementSibling.nextElementSibling,
//       prevEl: value.nextElementSibling,
//     },
//     pagination: {
//       el: value.nextElementSibling.nextElementSibling.nextElementSibling,
//       clickable: true,
//     },
//     slidesPerView: 4
//     });
//   });
// });


  var hoverActive = false;
  var hover;
  var indexSlide;

// ПОЯВЛЕНИЕ ИКОНОК ПРИ КЛИКЕ НА СЛАЙД В СЕКЦИИ ПОПУЛЯРНЫЕ ТОВАРЫ
$('.popularswiper-slide').on('click', function() {
  if (hoverActive==true) { 
    hover.toggleClass('popular__hover'+indexSlide+'--visible');
    hoverActive=!(hoverActive);
    if (indexSlide==($(this).data('swiperSlideIndex')+1)) {return true;}
  }
  if (indexSlide!=($(this).data('swiperSlideIndex')+1) || hoverActive==false) {
  indexSlide = $(this).data('swiperSlideIndex')+1;
 
  if (indexSlide=='1') { hover = $('.popular__hover1'); }
  if (indexSlide=='2') { hover = $('.popular__hover2'); }
  if (indexSlide=='3') { hover = $('.popular__hover3'); }
  if (indexSlide=='4') { hover = $('.popular__hover4'); }
  
  hover.toggleClass('popular__hover'+indexSlide+'--visible');
  hoverActive=!(hoverActive);
  }

});

  var zoom = $('.modalzoom'),
    // searchBtn = $('[data-toggle=search]');
    zoomBtn =  $('.modalzoom__close');
    // Открытие модального окна Zoom
    $('.popular__iconzoom').click(function () {
      if (indexSlide=='1') {
        $(".modalzoom__image").attr("src", "img/zoom/zoom1.jpg");}
      if (indexSlide=='2') {
        $(".modalzoom__image").attr("src", "img/zoom/zoom2.jpg");}
      if (indexSlide=='3') {
        $(".modalzoom__image").attr("src", "img/zoom/zoom3.jpg");}
      if (indexSlide=='4') {
        $(".modalzoom__image").attr("src", "img/zoom/zoom4.jpg");}
      zoom.toggleClass('modalzoom--visible');
      zoomActive = !(zoomActive);
    });

    zoomBtn.on('click', function () {
      zoom.toggleClass('modalzoom--visible');
      zoomActive = !(zoomActive);
    });
    

  // кнопка читать далее в секции Новости

  $(function(){
    $(".news__text").elimore({
    maxLength: 208,
    moreText: "Читать целиком",
    lessText: "Свернуть текст"

    });
     
  });

  // валидация форм

  $('.subscription__form').validate({
    errorClass: "invalid",
    errorElement : 'div',
    rules: {
      // simple rule, converted to {required:true}
      userEmail: {
        required: true,
        email: true
      },
    },
    messages: {
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формте: name@domain.com"
      }
    }/*,
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "subscribe.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modalMessage.toggleClass('message--visible');
          messageActive = !(messageActive);
        },
        error: function (response) {
          console.log('Ошибка запроса ' + response);
        }
      });
    }*/
  });

  $('.feedbacks__form').validate({
    errorClass: "errinvalid",
    errorElement : 'div',
    rules: {
      // simple rule, converted to {required:true}
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      useremail: {
        required: true,
        email: true
      },
      userfeedback: "required",
    },
    messages: {
      username: {
        required: "Имя обязательно",
        minlength: 'Имя не короче 2 символов',
        maxlength: 'Имя не длиннее 15 символов'
      },
      useremail: {
        required: "Обязательно укажите email",
        email: "Введите в формте: name@domain.com"
      },
      userfeedback: "Если Вы хотите оставить отзыв, обязательно его введите",
    }/*,
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "subscribe.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modalMessage.toggleClass('message--visible');
          messageActive = !(messageActive);
        },
        error: function (response) {
          console.log('Ошибка запроса ' + response);
        }
      });
    }*/
  });

  // бургер-меню
  
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top - 60
    }, 1500);
  });

  $("#burger-menu").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top - 60
    }, 1500);
  });

  var menuButton = $('.menu-button');
  var burgerMenu = $('.burger-menu');
  var menuButtonActive = $('.menu-button-activ')
  var menu = $('.header');

  menuButton.on('click', function() {
    menuButton.toggleClass('menu-button-activ');
    menuButton.css('display', 'block');
    burgerMenu.toggleClass('burger-menu-none');
    // menu.classList.toggle('header-active');
  });


  // Слайдер на странице Товар
  var mySwiper3 = new Swiper ('.productswiper-container', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.productswiper-pagination',
      type: 'bullets', 
    },
    navigation: {
      nextEl: '.productswiper-button-next',
      prevEl: '.productswiper-button-prev',
    },
  });


  // выбор цвета в секции Товар

  var colorActive = false;
  
  $('.product__colors').click(function () {
    if (colorActive==true) {
        $('.product__colors').not(this).removeClass('product__colors--selected');
        colorActive = !(colorActive);
    }
    $(this).addClass('product__colors--selected');
    colorActive = !(colorActive);
  });

  // выбор размера в секции Товар

  var sizeActive = false;
  
  $('.product__size').click(function () {
    if (sizeActive==true) {
        $('.product__size').not(this).removeClass('product__size--selected');
        sizeActive = !(sizeActive);
    }
    $(this).addClass('product__size--selected');
    sizeActive = !(sizeActive);
  });


  // смена фото в секции товара
$('.productswiper-slide').on('click', function() {
    var ID = $(this).data('swiperSlideIndex')+1;
    if (ID=='1') {
      $(".product__image").attr("src", "../img/product/photo1.jpg");}
    if (ID=='2') {
      $(".product__image").attr("src", "../img/product/photo2.jpg");}
    if (ID=='3') {
      $(".product__image").attr("src", "../img/product/photo3.jpg");}
});


  // Переключение Описание/Отзывы/Оплата

  var descriptionActive = true;
  var feedbackActive = false;
  var paymentActive = false;

  $('.description__name').click(function () {
    var page = $(this).attr('id');
    $('.description__name').not(this).removeClass('description__name--active');
    $(this).addClass('description__name--active');
    if (page=='description') {
      $('.description__fullinfo').toggleClass('description__fullinfo--visible');
      if (feedbackActive==true) {$('.feedbacks').toggleClass('feedbacks--visible'); feedbackActive = !(feedbackActive);}
      if (descriptionActive==true) {  $('.payandship').toggleClass('payandship--visible');  paymentActive = !(paymentActive);}
      descriptionActive = !(descriptionActive);
    }
    if (page=='feedbacks') {
      $('.feedbacks').toggleClass('feedbacks--visible');
      if (descriptionActive==true) { $('.description__fullinfo').toggleClass('description__fullinfo--visible'); descriptionActive = !(descriptionActive);}
      if (paymentActive==true) {  $('.payandship').toggleClass('payandship--visible');  paymentActive = !(paymentActive);}
      feedbackActive = !(feedbackActive);
    }
    if (page=='payment') {
      $('.payandship').toggleClass('payandship--visible');
      if (feedbackActive==true) {$('.feedbacks').toggleClass('feedbacks--visible'); feedbackActive = !(feedbackActive);}
      if (descriptionActive==true) { $('.description__fullinfo').toggleClass('description__fullinfo--visible'); descriptionActive = !(descriptionActive);}
      paymentActive = !(paymentActive);
    }
  });
   

  // оценка
$('.feedbacks__rating-stars--new').on('click', function() {
  var rating = $(this).attr('id');
  $('.feedbacks__rating-stars--new').each(function (index, value) {
    $(value).attr("src", "../img/feedback/star-grey.png");
  });
    console.log('yea');
    $('.feedbacks__rating-stars--new').each(function (index, value) {
      //your iterator
      console.log($(value).attr('id'));
      if ($(value).attr('id')<=rating) {
        $(value).attr("src", "../img/feedback/star-pink.png");
      }
    });
  // }
});



  // Маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00');




  new WOW().init();

});