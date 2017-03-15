'use strict';

$(function () {
  $('.academy-wrap').fullpage({
    verticalCentered: true,
    anchors: ['license', 'teoretic', 'practice', 'instructors', 'learning', 'fmk'],
    menu: '.academy-menu',
    css3: true
  });

  $('.gallery__img').slick({
    fade: true,
    infinite: true,
    draggable: false,
    dots: true,
    prevArrow: $('.gallery__arrow_left'),
    nextArrow: $('.gallery__arrow_right')
  });

  $('.instructor__btn_1').click(function () {
    $('.instructor-cards').addClass('active');
    $('.instructor-card_1').addClass('active');
  });
  $('.instructor__btn_2').click(function () {
    $('.instructor-cards').addClass('active');
    $('.instructor-card_2').addClass('active');
  });
  $('.instructor__btn_3').click(function () {
    $('.instructor-cards').addClass('active');
    $('.instructor-card_3').addClass('active');
  });
  $('.instructor__btn_4').click(function () {
    $('.instructor-cards').addClass('active');
    $('.instructor-card_4').addClass('active');
  });

  $('.js-instructor-cards-close').click(function () {
    $('.instructor-cards').removeClass('active');
    $('.instructor-card').removeClass('active');
  });

  $('.js-instructor-1').click(function () {
    $('.instructor-card').removeClass('active');
    $('.instructor-card_1').addClass('active');
  });
  $('.js-instructor-2').click(function () {
    $('.instructor-card').removeClass('active');
    $('.instructor-card_2').addClass('active');
  });
  $('.js-instructor-3').click(function () {
    $('.instructor-card').removeClass('active');
    $('.instructor-card_3').addClass('active');
  });
  $('.js-instructor-4').click(function () {
    $('.instructor-card').removeClass('active');
    $('.instructor-card_4').addClass('active');
  });

  $('.course__video_teoretic .course__video-btn').click(function () {
    $('.academy-content-wrap_teoretic').fadeOut();
    $('.academy-video_teoretic').delay(400).fadeIn();
  });
  $('.js-close-teoretic').click(function () {
    $('.academy-video_teoretic').fadeOut();
    $('.academy-content-wrap_teoretic').delay(400).fadeIn();
  });

  $('.course__video_pract .course__video-btn').click(function () {
    $('.academy-content-wrap_pract').fadeOut();
    $('.academy-video_pract').delay(400).fadeIn();
  });
  $('.js-close-pract').click(function () {
    $('.academy-video_pract').fadeOut();
    $('.academy-content-wrap_pract').delay(400).fadeIn();
  });

  $('.course__video-btn_fmk').click(function () {
    $('.academy-content-wrap_fmk').fadeOut();
    $('.academy-video_fmk').delay(400).fadeIn();
  });
  $('.js-close-fmk').click(function () {
    $('.academy-video_fmk').fadeOut();
    $('.academy-content-wrap_fmk').delay(400).fadeIn();
  });
});