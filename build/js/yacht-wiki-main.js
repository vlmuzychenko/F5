'use strict';

$(function () {
  var gridView = ['5', '3', '6', '7', '7'];
  // var gridViewNumbers = gridView.map(function(num){
  //   return +num;
  // });
  // console.log(gridViewNumbers);
  function unorderedGrid() {
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
  }

  function orderedGrid() {
    $('.wiki-content').remove();
    //for ordered slides
    for (var i = 0; i < gridView.length; i++) {
      $('.wiki-content-wrap').append("<div class='wiki-content-slide'><div class='wiki-content w" + i + "'></div></div>");
    }
    var slides = $('.wiki-content');
    for (var i = 0; i < slides.length; i++) {
      for (var j = 0; j < gridView[i]; j++) {
        $(slides[i]).append(wiki[j]);
      }
      wiki.splice(0, gridView[i]);
    }
    //for unordered slides
    var wikiRest = wiki.splice(0, orderedCount);
    var wikiRestCount = wikiRest.length / 8;
    var restCnt = Math.ceil(wikiRestCount);
    for (var i = 0; i < restCnt; i++) {
      $('.wiki-content-wrap').append("<div class='wiki-content-slide'><div class='wiki-content wiki-content-new w" + i + "'></div></div>");
    }
    var newSlides = $('.wiki-content-new');
    for (var i = 0; i < newSlides.length; i++) {
      for (var j = 0; j <= 7; j++) {
        $(newSlides[i]).append(wikiRest[j]);
      }
      wikiRest.splice(0, 8);
    }
  }

  //checking if order is set
  if (gridView.length !== 0) {
    var wiki = $('.wiki');
    var orderedCount = 0;
    for (var i = 0; i < gridView.length; i++) {
      orderedCount += gridView[i];
    }
    orderedGrid();
    $('.wiki-content').each(function () {
      if ($(this).children().length == 0) {
        $(this).parent().remove();
      }
    });
  } else {
    unorderedGrid();
  }

  //creating slider
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

//setting adaptive classes
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