'use strict';

$(function () {
  var includedWrap = $('.js-included');
  var extraWrap = $('.js-extra');

  var currentPrice = $('.js-price').find('input:checked');

  var currentText = currentPrice.siblings('label').text();
  var currentInfo = currentPrice.parent().data('price-info');
  var currentIncludedCont = currentInfo.included.split(',');
  var currentExtraCont = currentInfo.extra.split(',');

  includedWrap.html('');
  extraWrap.html('');
  $('.price__title').text(currentText).addClass('active');
  for (var i = 0; i < currentIncludedCont.length; i++) {
    includedWrap.append('<li class="active">' + currentIncludedCont[i] + '</li>');
  }
  for (var i = 0; i < currentExtraCont.length; i++) {
    extraWrap.append('<li class="active">' + currentExtraCont[i] + '</li>');
  }

  $('.js-price label').click(function (e) {

    var target = $(e.currentTarget);

    var text = target.text();
    var info = target.parent().data('price-info');
    var includedCont = info.included.split(',');
    var extraCont = info.extra.split(',');

    includedWrap.html('');
    extraWrap.html('');
    $('.price__title').text(text).removeClass('active');
    for (var i = 0; i < includedCont.length; i++) {
      includedWrap.append('<li>' + includedCont[i] + '</li>');
    }
    for (var i = 0; i < extraCont.length; i++) {
      extraWrap.append('<li>' + extraCont[i] + '</li>');
    }
    //animations
    setTimeout(function () {
      $('.price__title').addClass('active');
    }, 200);
    includedWrap.find('li').each(function (i) {
      var self = $(this);
      setTimeout(function () {
        self.addClass('active');
      }, i * 100);
    });
    extraWrap.find('li').each(function (i) {
      var self = $(this);
      setTimeout(function () {
        self.addClass('active');
      }, i * 100);
    });
  });
})();