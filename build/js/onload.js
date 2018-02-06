'use strict';

window.onload = function () {
  var preloader = document.getElementById('preloader');
  preloader.className += ' finish';
  setTimeout(function () {
    preloader.className += ' preloader-animate';
  }, 100);
  setTimeout(function () {
    preloader.className += ' hide';
  }, 500);
};