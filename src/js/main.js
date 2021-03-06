$(document).ready(function () {
  var basketActive = false;
  var searchActive = false;
  var zoomActive = false;
  var sizeActive = false;
  var authActive = false;
  // Кнопка Наверх и Анимация
  $(window).scroll(function () {
    var windowHeight = $(window).height();
      if ($(this).scrollTop() > 0) {
          $('.scroll-up').fadeIn();
          if (document.getElementById("headerwrap")!==null) {
            document.getElementById("headerwrap").style.background = "#5a52a5";
          }
      } else {
          $('.scroll-up').fadeOut();
          if (document.getElementById("headerwrap")!==null) {
            document.getElementById("headerwrap").style.background = "transparent";
          }
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

  var auth = $('.authorization'),
  authBtn = $('[data-toggle=auth]');
  
  authBtn.on('click', function () {
    auth.toggleClass('authorization--visible');
    authActive = !(authActive);
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

  // закрытие по нажатию Esc
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
        else {
          if (event.key=='Escape' && (sizeActive)) { 
            sizechart.toggleClass('sizechart--visible');
            sizeActive = !(sizeActive);
          }
          else { 
            if (event.key=='Escape' && (messageActive)) { 
            modalMessage.toggleClass('message--visible');
            messageActive = !(messageActive);
            }
            else {
              if (event.key=='Escape' && (submessageActive)) {
                subMessage.toggleClass('submessage--visible');
                submessageActive = !(submessageActive);
              }
              else {
                if (event.key=='Escape' && (authActive)) {
                  auth.toggleClass('authorization--visible');
                  authActive = !(authActive);
                }
              }
            }
          }
        }
      }

    }
  });
  
  // таблица размеров

  var sizechart = $('.sizechart'),
      sizeBtn = $('[data-toggle=sizechart]');
      closesizeBtn =  $('.sizechart__close');
  
  sizeBtn.on('click', function () {
    sizechart.toggleClass('sizechart--visible');
    sizeActive = !(sizeActive);
  });

  closesizeBtn.on('click', function () {
    sizechart.toggleClass('sizechart--visible');
    sizeActive = !(sizeActive);
  });

  var cartmodal = $('.modalbasket__dialog');

  // закрытие по нажатию вне области
  $(document).on('click', function(event) {
    if ($(event.target).is(search)) {
      search.toggleClass('modalsearch--visible');
      searchActive = !(searchActive);
      $('.modalsearch__form')[0].reset();
    }
    else {
      if ($(event.target).is(zoom)) {
        zoom.toggleClass('modalzoom--visible');
        zoomActive = !(zoomActive);
      }
      else {
        if (($(event.target).is(cartmodal))==false && (basketActive==true)) {
          if (($(event.target).is('.account__link--basket'))==false) {
          //  if ($(event.target).is(cartmodal.childNodes)==true)
          //  var node = $(event.target.classList);
          //  console.log(node);
          //  if (node.parentNode == cartmodal)
          //   {
          //   console.log(event.target);
          //  }
          //  var allchild = $('.cartmodal > *');
           
          //  console.log(allchild);
          // }
          basket.toggleClass('modalbasket--visible');
          basketActive = !(basketActive);
          }
        }
        else {
          if ($(event.target).is(sizechart)) {
            sizechart.toggleClass('sizechart--visible');
            sizeActive = !(sizeActive);
          }
          else {
            if ($(event.target).is(modalMessage)) {
              modalMessage.toggleClass('message--visible');
              messageActive = !(messageActive);
            }
            else {
              if ($(event.target).is(subMessage)) {
                subMessage.toggleClass('submessage--visible');
                submessageActive = !(submessageActive);
                }
                else {
                  if ($(event.target).is(auth)) {
                    auth.toggleClass('authorization--visible');
                    authActive = !(authActive);
                    }
                 }
             }
          }
        }
      }
    }
  });

  $('.message__button').click(function () {
    modalMessage.toggleClass('message--visible');
    messageActive = !(messageActive);
});

$('.submessage__button').click(function () {
  subMessage.toggleClass('submessage--visible');
  submessageActive = !(submessageActive);
});


$('.authorization__close').click(function () {
  auth.toggleClass('authorization--visible');
  authActive = !(authActive);
  $('.authorization__form')[0].reset();
  auth.removeClass('authorization--visible');
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

var mySwiper2small = new Swiper ('.popularsmallswiper-container', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: '.popularsmallswiper-pagination',
    type: 'bullets', 
  },
  navigation: {
    nextEl: '.popularsmallswiper-button-next',
    prevEl: '.popularsmallswiper-button-prev',
  },
});

  var hoverActive = false;
  var hover;
  var indexSlide;

// ПОЯВЛЕНИЕ ИКОНОК ПРИ КЛИКЕ НА СЛАЙД В СЕКЦИИ ПОПУЛЯРНЫЕ ТОВАРЫ
$('.popularswiper-slide').on('mouseenter', function() {
  if (hoverActive==true) { 
    hover.toggleClass('popular__hover'+indexSlide+'--visible');
    hoverActive=!(hoverActive);
    if (indexSlide==($(this).data('swiperSlideIndex')+1)) {return true;}
  }
  if (indexSlide!=($(this).data('swiperSlideIndex')+1) || hoverActive==false) {
        
    indexSlide = $(this).data('swiperSlideIndex')+1;
    if (indexSlide=='1') { 
      hover = $('.popular__hover1'); 
      $(".modalzoom__image").attr("src", "img/zoom/zoom1.jpg");
    }
    if (indexSlide=='2') { 
      hover = $('.popular__hover2'); 
      $(".modalzoom__image").attr("src", "img/zoom/zoom2.jpg");
    }
    if (indexSlide=='3') { 
      hover = $('.popular__hover3'); 
      $(".modalzoom__image").attr("src", "img/zoom/zoom3.jpg");
    }
    if (indexSlide=='4') { 
      hover = $('.popular__hover4'); 
      $(".modalzoom__image").attr("src", "img/zoom/zoom4.jpg");
    }
  hover.toggleClass('popular__hover'+indexSlide+'--visible');
  hoverActive=!(hoverActive);
  }

});

$('.popularswiper-slide').on('mouseleave', function() {
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


  $('.popularsmallswiper-slide').on('click', function() {
    if (hoverActive==true) { 
      hover.toggleClass('popular__hover'+indexSlide+'--visible');
      hoverActive=!(hoverActive);
      if (indexSlide==($(this).data('swiperSlideIndex')+1)) {return true;}
    }
    if (indexSlide!=($(this).data('swiperSlideIndex')+1) || hoverActive==false) {
    indexSlide = $(this).data('swiperSlideIndex')+1;
  
    if (indexSlide=='1') { 
      hover = $('.popular__hover1'); 
      $(".modalzoom__image").attr("src", "img/zoom/zoom1.jpg");
    }
    if (indexSlide=='2') { hover = $('.popular__hover2'); 
    $(".modalzoom__image").attr("src", "img/zoom/zoom2.jpg");}
    if (indexSlide=='3') { hover = $('.popular__hover3'); 
    $(".modalzoom__image").attr("src", "img/zoom/zoom3.jpg");}
    if (indexSlide=='4') { hover = $('.popular__hover4'); 
    $(".modalzoom__image").attr("src", "img/zoom/zoom4.jpg");}
    
    hover.toggleClass('popular__hover'+indexSlide+'--visible');
    hoverActive=!(hoverActive);
    }

  });
  $('.popularsmallswiper-button-prev').on('click', function() {
    if (hoverActive==true) { 
      hover.toggleClass('popular__hover'+indexSlide+'--visible');
      hoverActive=!(hoverActive);
      if (indexSlide==($(this).data('swiperSlideIndex')+1)) {return true;}
    }
  });

  $('.popularsmallswiper-button-next').on('click', function() {
    if (hoverActive==true) { 
      hover.toggleClass('popular__hover'+indexSlide+'--visible');
      hoverActive=!(hoverActive);
      if (indexSlide==($(this).data('swiperSlideIndex')+1)) {return true;}
    }
  });

  var zoom = $('.modalzoom'),
    // searchBtn = $('[data-toggle=search]');
    zoomBtn =  $('.modalzoom__close');
    // Открытие модального окна Zoom
    $('.popular__iconzoom').click(function () {
      zoom.toggleClass('modalzoom--visible');
      zoomActive = !(zoomActive);
    });

    zoomBtn.on('click', function () {
      zoom.toggleClass('modalzoom--visible');
      zoomActive = !(zoomActive);
    });
    

  // кнопка читать далее в секции Новости

  $(function(){
    $(".news__text-left").elimore({
    maxLength: 203,
    moreText: "Читать целиком",
    lessText: "Свернуть текст"
    });
    $(".news__text-right").elimore({
      maxLength: 176,
      moreText: "Читать целиком",
      lessText: "Свернуть текст"
      });
  });



  // валидация форм

 var modalMessage = $('.message');
  var messageActive = false;

  var subMessage = $('.submessage');
  var submessageActive = false;

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
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "subscribe.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          subMessage.toggleClass('submessage--visible');
          submessageActive = !(submessageActive);
        },
        error: function (response) {
          console.log('Ошибка запроса ' + response);
        }
      });
    }
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
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "feedback.php",
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
    }
  });


  $('.contacts__form').validate({
    errorClass: "errinvalid",
    errorElement : 'div',
    rules: {
      // simple rule, converted to {required:true}
      nameofuser: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      emailofuser: {
        required: true,
        email: true
      },
      phoneofuser: {
        // required: true,
        minlength: 17,
        maxlength: 17
      },
      message: "required"
    },
    messages: {
      nameofuser: {
        required: "Имя обязательно",
        minlength: 'Имя не короче 2 символов',
        maxlength: 'Имя не длиннее 15 символов'
      },
      emailofuser: {
        required: "Обязательно укажите email",
        email: "Введите в формте: name@domain.com"
      },
      phoneofuser: {
        minlength: 'Телефон должен содержать 10 символов',
        maxlength: 'Телефон должен содержать 10 символов'
      },
      message: "Введите текст сообщения",
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "contacts.php",
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
    }
  });


  $('.authorization__form').validate({
    errorClass: "invaliderror",
    errorElement : 'div',
    rules: {
      // simple rule, converted to {required:true}
      passwordUser: {
        required: true,
        minlength: 8
      },
      userofemail: {
        required: true,
        email: true
      }
    },
    messages: {
      userofemail: {
        required: "Обязательно укажите email",
        email: "Введите в формте: name@domain.com"
      },
      passwordUser: {
        required: "Обязательно укажите пароль",
        minlength: 'Пароль не короче 8 символов',
      }
    }

  });

  // бургер-меню
  
  var menuButton = $('.menu-button');
  var menuButtonmain = $('.menu-button--light');
  var burgerMenu = $('.burger-menu');
  var menuButtonActive = $('.menu-button-activ')
  var menu = $('.header');

  menuButton.on('click', function() {
    menuButton.toggleClass('menu-button-activ');
    menuButton.css('display', 'block');
    burgerMenu.toggleClass('burger-menu-none');
    // menu.classList.toggle('header-active');
  });

  menuButtonmain.on('click', function() {
    menuButtonmain.toggleClass('menu-button-activ');
    menuButtonmain.css('display', 'block');
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
    // navigation: {
    //   nextEl: '.productswiper-button-next',
    //   prevEl: '.productswiper-button-prev',
    // },
  });


  $('.select').on('click', '.select__head', function () {
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).next().fadeOut();
    } else {
        $('.select__head').removeClass('open');
        $('.select__list').fadeOut();
        $(this).addClass('open');
        $(this).next().fadeIn();
    }
  });

  $('.select').on('click', '.select__item', function () {
      $('.select__head').removeClass('open');
      $(this).parent().fadeOut();
      $(this).parent().prev().text($(this).text());
      $(this).parent().prev().prev().val($(this).text());
  });

  $(document).click(function (e) {
      if (!$(e.target).closest('.select').length) {
          $('.select__head').removeClass('open');
          $('.select__list').fadeOut();
      }
  });


   var indexSlideProduct=1;
  // Кнопки вперёд/назад в слайдере в секции 6 Шагов
  $('.productswiper-button-prev').on('click', function() {
    indexSlideProduct = indexSlideProduct-1;
    if (indexSlideProduct=='1') {
      $(".product__image").attr("src", "img/product/photo1.jpg");
      indexSlideProduct=1;
      $('.productswiper-slide').removeClass('productswiper-slide--active');
      $('.productslide1').addClass('productswiper-slide--active');
    }
    if (indexSlideProduct=='2') {
      $(".product__image").attr("src", "img/product/photo2.jpg");
      indexSlideProduct=2;
      $('.productswiper-slide').removeClass('productswiper-slide--active');
      $('.productslide2').addClass('productswiper-slide--active');
    }
    if (indexSlideProduct=='0') {
      $(".product__image").attr("src", "img/product/photo3.jpg");
      indexSlideProduct=3;
      $('.productswiper-slide').removeClass('productswiper-slide--active');
      $('.productslide3').addClass('productswiper-slide--active');
    }
  });

  $('.productswiper-button-next').on('click', function() {
    indexSlideProduct = indexSlideProduct+1;
    if (indexSlideProduct=='4') {
      $(".product__image").attr("src", "img/product/photo1.jpg");
      indexSlideProduct=1;
      $('.productswiper-slide').removeClass('productswiper-slide--active');
      $('.productslide1').addClass('productswiper-slide--active');
    }
    if (indexSlideProduct=='2') {
      $(".product__image").attr("src", "img/product/photo2.jpg");
      indexSlideProduct=2;
      $('.productswiper-slide').removeClass('productswiper-slide--active');
      $('.productslide2').addClass('productswiper-slide--active');
    }
    if (indexSlideProduct=='3') {
      $(".product__image").attr("src", "img/product/photo3.jpg");
      indexSlideProduct=3;
      $('.productswiper-slide').removeClass('productswiper-slide--active');
      $('.productslide3').addClass('productswiper-slide--active');
    }
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
      $(".product__image").attr("src", "img/product/photo1.jpg");
      indexSlideProduct=1;
      $('.productswiper-slide').removeClass('productswiper-slide--active');
      $('.productslide1').addClass('productswiper-slide--active');
    }
    if (ID=='2') {
      $(".product__image").attr("src", "img/product/photo2.jpg");
      indexSlideProduct=2;
      $('.productswiper-slide').removeClass('productswiper-slide--active');
      $('.productslide2').addClass('productswiper-slide--active');}
    if (ID=='3') {
      $(".product__image").attr("src", "img/product/photo3.jpg");
      indexSlideProduct=3;
      $('.productswiper-slide').removeClass('productswiper-slide--active');
      $('.productslide3').addClass('productswiper-slide--active');}
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
    $(value).attr("src", "img/feedback/star-grey.png");
  });
    $('.feedbacks__rating-stars--new').each(function (index, value) {
      if ($(value).attr('id')<=rating) {
        $(value).attr("src", "img/feedback/star-pink.png");
      }
    });
});

var heartFull = false;
$('.product__favourite').on('click', function() {
  if (heartFull==true) {
    document.getElementById('favourite').style.backgroundImage = "url('img/product/heart.png')";
  }
  else {
    document.getElementById('favourite').style.backgroundImage = "url('img/product/heartfull.png')";
  }
  heartFull = !(heartFull);
});

  // Маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00');

  new WOW().init();

});