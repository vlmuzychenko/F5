'use strict';

$(function () {
  $('.event-fp').fullpage({
    verticalCentered: true,
    anchors: ['event', 'details', 'place', 'partners', 'registration'],
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
});