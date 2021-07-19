$(function () {

  //header-mainの高さを100%に調整
  var windowHeight = $(window).height();
  $(".header-main").height(windowHeight);

  $(window).resize(function () {
    var windowHeight = $(window).height();
    $(".header-main").height(windowHeight);
  });

  //ページ内スクロール
  $('a[href^="#"]').on('click', function () {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  //ページトップへ戻る
  var $pageTop = $('.page-top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }
  });
  $pageTop.on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300);
    return false;
  });

  //スクロールに応じてヘッダーの背景色が変化
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.header-nav').addClass('active');
    } else {
      $('.header-nav').removeClass('active');
    }
  });

  //ハンバーガーメニュー
  var humburgerClicked = $('.humburger-clicked');
  var headerRight = $('.header-right');

  humburgerClicked.on('click', function () {
    humburgerClicked.toggleClass('active');
    headerRight.toggleClass('show');
  });

});

//Swiperの設定
var mySwiper = new Swiper('.works-img-wrapper', {
  // Optional parameters
  autoplay: {
    delay: 4000,
  },
  speed: 500,
  loop: true,
  effect: 'fade',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})