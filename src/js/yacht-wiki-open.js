$(function() {
  var slidesPerPage = Math.floor($('.wiki-extended-slider__nav').outerWidth() / 105);
  $('.wiki-extended-slider__body div').click(function(){
    if($('.wiki-extended__view').hasClass('opened')){
    } else {
      $('.wiki-extended__view').addClass('opened');
      slidesPerPage = Math.floor($('.wiki-extended-slider__nav').outerWidth() / 105);
      $('.js-wiki-extended-slider').slick('setPosition');
      $('.js-wiki-extended-slider-nav').slick('setPosition');
    }
  })
  $('.wiki-extended-slider__controll .close').click(function(){
      $('.wiki-extended__view').removeClass('opened');
      slidesPerPage = Math.floor($('.wiki-extended-slider__nav').outerWidth() / 105);
      console.log(slidesPerPage);
      $('.js-wiki-extended-slider').slick('setPosition');
      $('.js-wiki-extended-slider-nav').slick('setPosition');
      $('.wiki-extended-slider__video').fadeOut();
  })

  $('.js-wiki-extended-slider').slick({
     useTransform: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     draggable: false,
     arrows: false,
     fade: true,
     asNavFor: '.js-wiki-extended-slider-nav',
     cssEase: 'linear'
  });

  $('.js-wiki-extended-slider-nav').slick({
     slidesToShow: 6,
     slidesToScroll: 1,
     asNavFor: '.js-wiki-extended-slider',
     dots: false,
     focusOnSelect: true,
     infinity: false,
     arrows: false
  });

  $('.wiki-extended-slider__video-btn').click(function(){
    $('.descr').fadeOut();
    $('.wiki-extended-slider__video').delay(400).fadeIn();
  });



});
