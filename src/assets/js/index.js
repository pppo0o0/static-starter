jQuery(function($){

});

// scroll
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 200;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


// sp nav
$(function() {
  $('.js-sp-navToggle').click(function() {
    $(this).toggleClass('is-active');
    if ($(this).hasClass('is-active')) {
      $('.js-sp-navContent').addClass('is-active');
    } else {
      $('.js-sp-navContent').removeClass('is-active');
    }
  });

  // aタグをタップしたらnavが閉じる
  $('.js-sp-navContent a').click(function () {
    $('.js-sp-navContent').removeClass('is-active');
    $('.js-sp-navToggle').removeClass('is-active');
  });
});

// header fix
$(function() {
  var $win = $(window),
      $main = $('.wrap'),
      $nav = $('nav'),
      navHeight = $nav.outerHeight(),
      navPos = $nav.offset().top,
      fixedClass = 'is-fixed';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > navPos ) {
      $nav.addClass(fixedClass);
    } else {
      $nav.removeClass(fixedClass);
    }
  });
});
