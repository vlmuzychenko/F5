'use strict';

$(function () {
  var obj = {};
  var wiki = $('.wiki').length / 8;
  var cnt = Math.ceil(wiki);
  for (var i = 0; i < cnt; i++) {
    obj[i] = {};
    for (var j = 0; j <= 7; j++) {
      var id = i * 8 + (j + 1) - 1;
      if ($('.wiki').eq(id).length > 0) {
        obj[i][j] = {};
        obj[i][j] = $('.wiki').eq(id);
      } else {
        break;
      }
    }
  }
  $('.wiki-content').remove();
  var block = Object.keys(obj);
  for (var i = 0; i < block.length; i++) {
    if ($('.wiki-content').length > 0) {
      $('.wiki-content-slide:last').after("<div class='wiki-content-slide'><div class='wiki-content w" + i + "'></div></div>");
    } else {
      $('.wiki-content-wrap').append("<div class='wiki-content-slide'><div class='wiki-content w" + i + "'></div></div>");
    }
    var elements = Object.keys(obj[i]);
    for (var j = 0; j < elements.length; j++) {
      $(".w" + i).append(obj[i][j]);
    }
  }
  $('.wiki-content-wrap').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    fade: true,
    prevArrow: $('.js-wiki-left'),
    nextArrow: $('.js-wiki-right')
  });
});

$(function () {
  $(".wiki-content").each(function () {
    var wikiCount = $(this).find('.wiki').length;
    switch (wikiCount) {
      case 1:
        $(this).children('.wiki').addClass('grid_2-4');
        break;
      case 2:
        $(this).children('.wiki').addClass('grid_2-2');
        break;
      case 3:
        $(this).children('.wiki').addClass('grid_2-3');
        break;
      case 4:
        $(this).children('.wiki').addClass('grid_1-2');
        break;
      case 5:
        $(this).children('.wiki').addClass('grid_1-1');
        $(this).children('.wiki:first-child').removeClass('grid_1-1').addClass('grid_2-2');
        break;
      case 6:
        $(this).children('.wiki').addClass('grid_1-3');
        break;
      case 7:
        $(this).children('.wiki').addClass('grid_1-1');
        $(this).append('<div class="grid_1-1 wiki_comming-soon"><span>мы готовим новые яхт-вики, оставайтесь с нами</span></div>');
        break;
      case 8:
        $(this).children('.wiki').addClass('grid_1-1');
        break;
    }
  });
});