'use strict';

$(function () {
   $('.js-news-extended-slider').slick({
      useTransform: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      arrows: false,
      fade: true,
      asNavFor: '.js-news-extended-slider-nav',
      cssEase: 'linear'
   });

   $('.js-news-extended-slider-nav').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.js-news-extended-slider',
      dots: false,
      focusOnSelect: true,
      infinity: false,
      arrows: false
   });
});