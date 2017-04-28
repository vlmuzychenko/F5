'use strict';

$(function () {
  $('.yacht-wiki-fp_reg').fullpage({
    verticalCentered: true,
    anchors: ['description', 'details', 'entertainment', 'price', 'flot', 'programm', 'registration'],
    menu: '.yacht-wiki-menu',
    css3: true,
    onLeave: function onLeave(anchorLink, index) {
      if (index == 1) {
        $('.yacht-wiki-menu').addClass('dark');
        $('.yacht-wiki-menu').removeClass('light');
      }
      if (index == 2) {
        $('.yacht-wiki-menu').addClass('dark');
        $('.yacht-wiki-menu').removeClass('light');
      }
      if (index == 3) {
        $('.yacht-wiki-menu').addClass('dark');
        $('.yacht-wiki-menu').removeClass('light');
      }
      if (index == 4) {
        $('.yacht-wiki-menu').addClass('dark');
        $('.yacht-wiki-menu').removeClass('light');
      }
      if (index == 5) {
        $('.yacht-wiki-menu').addClass('light');
        $('.yacht-wiki-menu').removeClass('dark');
      }
    }
  });

  $('.yacht-wiki-fp_reg-5').fullpage({
    verticalCentered: true,
    anchors: ['description', 'details', 'price', 'programm', 'registration'],
    menu: '.yacht-wiki-menu',
    css3: true,
    onLeave: function onLeave(anchorLink, index) {
      if (index == 1) {
        $('.yacht-wiki-menu').addClass('dark');
        $('.yacht-wiki-menu').removeClass('light');
      }
      if (index == 2) {
        $('.yacht-wiki-menu').addClass('dark');
        $('.yacht-wiki-menu').removeClass('light');
      }
      if (index == 3) {
        $('.yacht-wiki-menu').addClass('dark');
        $('.yacht-wiki-menu').removeClass('light');
      }
      if (index == 4) {
        $('.yacht-wiki-menu').addClass('dark');
        $('.yacht-wiki-menu').removeClass('light');
      }
      if (index == 5) {
        $('.yacht-wiki-menu').addClass('light');
        $('.yacht-wiki-menu').removeClass('dark');
      }
    }
  });

  $('.yacht-wiki-fp_reg-6').fullpage({
    verticalCentered: true,
    anchors: ['description', 'details', 'price', 'flot', 'programm', 'registration'],
    menu: '.yacht-wiki-menu',
    css3: true,
    onLeave: function onLeave(anchorLink, index) {
      if (index == 1) {
        $('.yacht-wiki-menu').addClass('dark');
        $('.yacht-wiki-menu').removeClass('light');
      }
      if (index == 2) {
        $('.yacht-wiki-menu').addClass('dark');
        $('.yacht-wiki-menu').removeClass('light');
      }
      if (index == 3) {
        $('.yacht-wiki-menu').addClass('dark');
        $('.yacht-wiki-menu').removeClass('light');
      }
      if (index == 4) {
        $('.yacht-wiki-menu').addClass('dark');
        $('.yacht-wiki-menu').removeClass('light');
      }
      if (index == 5) {
        $('.yacht-wiki-menu').addClass('dark');
        $('.yacht-wiki-menu').removeClass('light');
      }
      if (index == 6) {
        $('.yacht-wiki-menu').addClass('light');
        $('.yacht-wiki-menu').removeClass('dark');
      }
    }
  });

  if ($('.js-programm-slider').length > 0) {
    for (var i = 0; i < $('.js-programm-slider').length; i++) {
      var slider = $('.js-programm-slider').eq(i);
      slider.slick({
        fade: true,
        infinite: false,
        draggable: false,
        prevArrow: slider.next().find('.js-programm-left'),
        nextArrow: slider.next().find('.js-programm-right')
      });

      slider.next().find('.js-programm-btn').click(function () {
        var slider = $(this).parents('.programm__btn-container').prev();
        var bg = slider.find('.slick-active').data('bgImg');
        var bgPic = slider.find('.slick-active').data('bgImgPic');
        console.log(bg);
        console.log(bgPic);
        slider.parent().css('background-image', bgPic);
        slider.parent().prev().find('.js-section-bg').css('background-image', bg);
      });
    }
  }

  function carouselSlider() {
    var carouselItems = $('.carousel li').length;
    if (carouselItems < 10) {
      $('.carousel li').each(function () {
        $(this).clone().appendTo(".carousel");
      });
    }
    $('.carousel').roundabout({
      minScale: 0.1,
      minOpacity: 1,
      childSelector: "li",
      autoplay: false,
      btnNext: $('.js-details-left'),
      btnPrev: $('.js-details-right')
    });
  };
  carouselSlider();

  $('.descr__video-btn').click(function () {
    $('.descr').fadeOut();
    $('.descr-video').delay(400).fadeIn();
    $('.yacht-wiki-menu').css('visibility', 'hidden');
  });

  $('.descr-video__close').click(function () {
    $('.descr-video').fadeOut();
    $('.descr').delay(400).fadeIn();
    $('.yacht-wiki-menu').css('visibility', 'visible');
  });

  $('.js-enroll').click(function () {

    var openPopup = new TimelineMax();
    openPopup.to($('.popup-wrap'), 0, { className: '+=js-opened', opacity: '1', display: 'block', ease: Sine.easeOut }).fromTo($('.popup-contacts'), 1, { x: '0%', opacity: '0', display: 'none' }, { x: '-50%', opacity: '1', display: 'block' }, 0).fromTo($('.popup-substrate'), 1, { x: '-100%', opacity: '0', display: 'none' }, { x: '-50%', opacity: '1', display: 'block' }, 0);
  });
});