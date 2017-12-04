'use strict';

$(function () {
  $('.js-price label').click(function (e) {
    var target = $(e.currentTarget);
    console.log(target);
  });
})();