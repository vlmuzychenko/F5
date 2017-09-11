'use strict';

$(document).ready(function () {

  TweenLite.set('.card-front__frame-face', { transformStyle: 'preserve-3d', transformOrigin: '0 50%' });

  $('.hover').hover(function () {
    TweenLite.to($(this).siblings('.main-card').find('.card-front__frame-face'), .5, { rotationY: 20, ease: Sine.easeOut });
  }, function () {
    TweenLite.to($(this).siblings('.main-card').find('.card-front__frame-face'), .5, { rotationY: 0, ease: Sine.easeOut });
  });

  $('.hover_4').click(function () {
    $('.main-card_1').removeClass('main-card_1');
    $('.main-card_2').removeClass('main-card_2');
    $('.main-card_3').removeClass('main-card_3');
    $('.main-card_4').removeClass('main-card_4');

    var openCard = new TimelineMax();
    openCard.to($('.card-front'), .3, { opacity: '0', display: 'none', ease: Sine.easeOut }).to($('.main-card'), 0, { zIndex: '50' }, 0).to($(this).siblings('.main-card'), .5, { scaleX: 1, scaleY: 1, height: '70vh', zIndex: '200' }, 0).to($(this).parents('.card-container').find('.card-small'), 0, { opacity: '0', className: '-=active' }, 0).to($('.hover_link').parents('.card-container').find('.card-small'), 0, { opacity: '1', className: '+=active' }, 0).to($('.hover_link').parents('.card-container'), 1, { width: '30px', ease: Sine.easeOut }, 0).to($(this).parents('.card-container'), 1, { width: '85%', ease: Power0.easeNone }, .5).to($('.card-open'), 0, { className: '+=active' }, 0).fromTo($(this).parents('.card-container').find('.card-open__img-wrap'), 1, { css: { transform: 'scale(.8) translateX(-500px)', opacity: '0' } }, { css: { transform: 'scale(1) translateX(0)', opacity: '1' } }, 1).to($(this).parents('.card-container').find('.card-open__title'), 1, { opacity: '1' }, 1.3).fromTo($('.hover_link').parents('.card-container').find('.main-card'), .5, { css: { transform: 'translateZ(-100px) rotateY(-20deg)' } }, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut }, 0).to($(this).parents('.card-container').find('.card-open__items'), 0, { className: '+=active' }, 1.6).to($(this).parents('.card-container').find('.card-open__close'), .3, { opacity: '1', display: 'block', ease: Sine.easeOut });
  });

  $('.js-card-close').click(function () {
    $('.hover_1').siblings('.main-card').addClass('main-card_1');
    $('.hover_2').siblings('.main-card').addClass('main-card_2');
    $('.hover_3').siblings('.main-card').addClass('main-card_3');
    $('.hover_4').siblings('.main-card').addClass('main-card_4');

    var closeCard = new TimelineMax();
    closeCard.to($(this), .3, { opacity: '0', display: 'none', ease: Sine.easeOut }, 0).to($('.main-card'), 0, { zIndex: '50' }, 1.02).to($('.card-open'), 1, { className: '-=active' }, 0).to($('.card-open__img-wrap'), 1, { opacity: '0' }, 0).to($('.card-open__title'), 0, { opacity: '0' }, 0).to($('.card-open__items'), 0, { className: '-=active' }, 0).to($('.card-small'), 1, { className: '-=active', opacity: '1' }, 0).to($('.card-container'), 1, { width: '21.3%', ease: Power0.easeNone }, 0).to($('.main-card'), 1, { width: '100%', ease: Power0.easeNone }, 0).to($('.main-card'), 1, { height: '60vh', ease: Power0.easeNone }, 0).to($('.card-container').find('.card-front'), .5, { opacity: '1', display: 'block', ease: Sine.easeOut }, 1).to($('.card-small'), 0, { opacity: '0' }, 1.01);
  });

  $('.hover_1').hover(function () {
    TweenLite.to($(this), .5, { scaleX: 1.05, scaleY: 1.05 });
    TweenLite.to($(this).siblings('.main-card_1'), .5, { scaleX: 1.05, scaleY: 1.05 });
    TweenLite.to($('.main-card_2'), .5, { css: { transform: 'translateZ(-100px) rotateY(-20deg)' }, ease: Sine.easeOut });
    TweenLite.to($('.main-card_3'), .5, { css: { transform: 'translateZ(-100px) rotateY(-20deg)' }, ease: Sine.easeOut });
    TweenLite.to($('.main-card_4'), .5, { css: { transform: 'translateZ(-100px) rotateY(-20deg)' }, ease: Sine.easeOut });
  }, function () {
    TweenLite.to($(this), .5, { scaleX: 1, scaleY: 1 });
    TweenLite.to($(this).siblings('.main-card_1'), .5, { scaleX: 1, scaleY: 1 });
    TweenLite.to($('.main-card_2'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
    TweenLite.to($('.main-card_3'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
    TweenLite.to($('.main-card_4'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
  });

  $('.hover_2').hover(function () {
    TweenLite.to($(this), .5, { scaleX: 1.05, scaleY: 1.05 });
    TweenLite.to($(this).siblings('.main-card_2'), .5, { scaleX: 1.05, scaleY: 1.05 });
    TweenLite.to($('.main-card_1'), .5, { css: { transform: 'translateZ(-100px) rotateY(20deg)' }, ease: Sine.easeOut });
    TweenLite.to($('.main-card_3'), .5, { css: { transform: 'translateZ(-100px) rotateY(-20deg)' },
      ease: Sine.easeOut });
    TweenLite.to($('.main-card_4'), .5, { css: { transform: 'translateZ(-100px) rotateY(-20deg)' }, ease: Sine.easeOut });
  }, function () {
    TweenLite.to($(this), .5, { scaleX: 1, scaleY: 1 });
    TweenLite.to($(this).siblings('.main-card_2'), .5, { scaleX: 1, scaleY: 1 });
    TweenLite.to($('.main-card_1'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
    TweenLite.to($('.main-card_3'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
    TweenLite.to($('.main-card_4'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
  });

  $('.hover_3').hover(function () {
    TweenLite.to($(this), .5, { scaleX: 1.05, scaleY: 1.05 });
    TweenLite.to($(this).siblings('.main-card_3'), .5, { scaleX: 1.05, scaleY: 1.05 });
    TweenLite.to($('.main-card_1'), .5, { css: { transform: 'translateZ(-100px) rotateY(20deg)' }, ease: Sine.easeOut });
    TweenLite.to($('.main-card_2'), .5, { css: { transform: 'translateZ(-100px) rotateY(20deg)' }, ease: Sine.easeOut });
    TweenLite.to($('.main-card_4'), .5, { css: { transform: 'translateZ(-100px) rotateY(-20deg)' }, ease: Sine.easeOut });
  }, function () {
    TweenLite.to($(this), .5, { scaleX: 1, scaleY: 1 });
    TweenLite.to($(this).siblings('.main-card_3'), .5, { scaleX: 1, scaleY: 1 });
    TweenLite.to($('.main-card_1'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
    TweenLite.to($('.main-card_2'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
    TweenLite.to($('.main-card_4'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
  });

  $('.hover_4').hover(function () {
    TweenLite.to($(this), .5, { scaleX: 1.05, scaleY: 1.05 });
    TweenLite.to($(this).siblings('.main-card_4'), .5, { scaleX: 1.05, scaleY: 1.05 });
    TweenLite.to($('.main-card_1'), .5, { css: { transform: 'translateZ(-100px) rotateY(20deg)' }, ease: Sine.easeOut });
    TweenLite.to($('.main-card_2'), .5, { css: { transform: 'translateZ(-100px) rotateY(20deg)' }, ease: Sine.easeOut });
    TweenLite.to($('.main-card_3'), .5, { css: { transform: 'translateZ(-100px) rotateY(20deg)' }, ease: Sine.easeOut });
  }, function () {
    TweenLite.to($(this), .5, { scaleX: 1, scaleY: 1 });
    TweenLite.to($(this).siblings('.main-card_4'), .5, { scaleX: 1, scaleY: 1 });
    TweenLite.to($('.main-card_1'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
    TweenLite.to($('.main-card_2'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
    TweenLite.to($('.main-card_3'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
  });

  $('.card-open__item:nth-child(1) .card-open__link span').hover(function () {
    $('.card-open__img').removeClass('active');
    $('.card-open__img:nth-child(1)').addClass('active');
  });

  $('.card-open__item:nth-child(2) .card-open__link span').hover(function () {
    $('.card-open__img').removeClass('active');
    $('.card-open__img:nth-child(2)').addClass('active');
  });

  $('.card-open__item:nth-child(3) .card-open__link span').hover(function () {
    $('.card-open__img').removeClass('active');
    $('.card-open__img:nth-child(3)').addClass('active');
  });

  $('.card-open__item:nth-child(4) .card-open__link span').hover(function () {
    $('.card-open__img').removeClass('active');
    $('.card-open__img:nth-child(4)').addClass('active');
  });

  $('.card-open__item:nth-child(5) .card-open__link span').hover(function () {
    $('.card-open__img').removeClass('active');
    $('.card-open__img:nth-child(5)').addClass('active');
  });

  $('.card-open__item:nth-child(6) .card-open__link span').hover(function () {
    $('.card-open__img').removeClass('active');
    $('.card-open__img:nth-child(6)').addClass('active');
  });

  $('.contacts__btn-popup').click(function () {

    var openPopup = new TimelineMax();
    openPopup.to($('.popup-wrap'), 0, { className: '+=js-opened', opacity: '1', display: 'block', ease: Sine.easeOut }).fromTo($('.popup-contacts'), 1, { x: '0%', opacity: '0', display: 'none' }, { x: '-50%', opacity: '1', display: 'block' }, 0).fromTo($('.popup-substrate'), 1, { x: '-100%', opacity: '0', display: 'none' }, { x: '-50%', opacity: '1', display: 'block' }, 0);
  });

  $('.js-popup-close').click(function () {
    var closePopup = new TimelineMax();
    closePopup.fromTo($('.popup-contacts'), 1, { x: '-50%', opacity: '1', display: 'block' }, { x: '0%', opacity: '0', display: 'none' }, 0).fromTo($('.popup-substrate'), 1, { x: '-50%', opacity: '1', display: 'block' }, { x: '-100%', opacity: '0', display: 'none' }, 0).to($('.popup-wrap'), 0, { className: '-=js-opened', display: 'none', ease: Sine.easeOut }, .5);
  });

  $('.js-send').click(function () {
    var sendPopup = new TimelineMax();
    sendPopup.fromTo($('.popup-contacts'), 1, { x: '-50%', opacity: '1', display: 'block' }, { x: '0%', opacity: '0', display: 'none' }, 0).to($('.popup-substrate__content'), 0, { className: '+=show' }, 0).to($('.popup-wrap'), 0, { className: '-=js-opened' }, 0).to($('.popup-wrap'), 0, { className: '+=js-opened_substrate' }, 0);
    $('#timer').html('5');

    if ($('.popup-substrate__content').hasClass('show') == true) {
      var timery = function timery() {
        var obj = document.getElementById('timer');
        obj.innerHTML--;
        if (obj.innerHTML == 0) {
          TweenLite.fromTo($('.popup-substrate'), 1, { x: '-50%', opacity: '1', display: 'block' }, { x: '-100%', opacity: '0', display: 'none' });
          TweenLite.to($('.popup-wrap'), 1, { className: '-=js-opened', delay: .5, opacity: '0', display: 'none', ease: Sine.easeOut });
          TweenLite.to($('.popup-substrate__content'), 1, { delay: .5, className: '-=show' });
        } else {
          setTimeout(timery, 1000);
        }
      };

      setTimeout(timery, 1000);
    } else {
      console.log('123');
    };
  });

  $('.js-popup-substrate-close').click(function () {
    var closeSecondPopup = new TimelineMax();
    closeSecondPopup.fromTo($('.popup-substrate'), 1, { x: '-50%', opacity: '1', display: 'block' }, { x: '-100%', opacity: '0', display: 'none' }, 0).to($('.popup-wrap'), 1, { className: '-=js-opened_substrate', opacity: '0', display: 'none', ease: Sine.easeOut }, .5).to($('.popup-substrate__content'), 1, { className: '-=show' }, 1.1);
  });
});

$(document).keydown(function (e) {
  if (e.keyCode == 27) {
    if ($('.popup-wrap').hasClass('js-opened')) {
      var closePopup = new TimelineMax();
      closePopup.fromTo($('.popup-contacts'), 1, { x: '-50%', opacity: '1', display: 'block' }, { x: '0%', opacity: '0', display: 'none' }, 0).fromTo($('.popup-substrate'), 1, { x: '-50%', opacity: '1', display: 'block' }, { x: '-100%', opacity: '0', display: 'none' }, 0).to($('.popup-wrap'), 0, { className: '-=js-opened', display: 'none', ease: Sine.easeOut }, .5);
    } else if ($('.popup-wrap').hasClass('js-opened_substrate')) {
      var closeSecondPopup = new TimelineMax();
      closeSecondPopup.fromTo($('.popup-substrate'), 1, { x: '-50%', opacity: '1', display: 'block' }, { x: '-100%', opacity: '0', display: 'none' }, 0).to($('.popup-wrap'), 1, { className: '-=js-opened_substrate', opacity: '0', display: 'none', ease: Sine.easeOut }, .5).to($('.popup-substrate__content'), 1, { className: '-=show' }, 1.1);
    }
  };
  if (e.keyCode == 27) {
    if ($('body').hasClass('popup-open')) {
      $('.popup').removeClass('is-open');
      $('body').removeClass('popup-open');
    }
  }
});

$(document).click(function (e) {
  if (!$('.popup__in').is(e.target) && $('.popup__in').has(e.target).length === 0) {
    $('.popup').removeClass('is-open');
  }
  if (!$('.popup-contacts').is(e.target) && $('.popup-contacts').has(e.target).length === 0) {
    console.log('cnqwp');
    $('.popup-wrap').removeClass('js-opened');
    $('.popup-contacts').hide();
    $('.popup-substrate').hide();
  }
});