'use strict';

$(function () {
  var obj = {};
  var newsPost = $('.news-post').length / 8;
  var cnt = Math.ceil(newsPost);
  for (var i = 0; i < cnt; i++) {
    obj[i] = {};
    for (var j = 0; j <= 7; j++) {
      var id = i * 8 + (j + 1) - 1;
      if ($('.news-post').eq(id).length > 0) {
        obj[i][j] = {};
        obj[i][j] = $('.news-post').eq(id);
      } else {
        break;
      }
    }
  }
  $('.news-content').remove();
  var block = Object.keys(obj);
  for (var i = 0; i < block.length; i++) {
    if ($('.news-content').length > 0) {
      $('.news-content-slide:last').after("<div class='news-content-slide'><div class='news-content w" + i + "'></div></div>");
    } else {
      $('.news-content-wrap').append("<div class='news-content-slide'><div class='news-content w" + i + "'></div></div>");
    }
    var elements = Object.keys(obj[i]);
    for (var j = 0; j < elements.length; j++) {
      $(".w" + i).append(obj[i][j]);
    }
  }
  $('.news-content-wrap').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    fade: true,
    prevArrow: $('.js-news-left'),
    nextArrow: $('.js-news-right')
  });
});