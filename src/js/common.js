$(function () {

   // slick
   $('.js-card-slider').slick({
      useTransform: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.js-card-slider-nav',
      cssEase: 'linear'
   });

   $('.js-card-slider-nav').slick({
      useTransform: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.js-card-slider',
      dots: false,
      focusOnSelect: true
   });

   (function () {
      var viewBtn = $('.js-yacht-view'),
          viewContainer = $('.js-view-container'),
          favBtn  = $('.js-card-favourite');

      // change yacht view: list/grid
      viewBtn.on('click',function(e) {
         e.preventDefault();
         if ($(this).hasClass('grid')) {
            $(this).siblings(viewBtn).removeClass('is-active');
            $(this).addClass('is-active');
            viewContainer.removeClass('list').addClass('grid');
         }
         else if($(this).hasClass('list')) {
            $(this).siblings(viewBtn).removeClass('is-active');
            $(this).addClass('is-active');
            viewContainer.removeClass('grid').addClass('list');
         }
      });

      // add favourite card
      favBtn.on('click', function (e) {
         e.preventDefault();
         $(this).toggleClass('is-selected');
      });

   })();

    (function(){
       let infoBtn = $('.js-open-info');
       let info = $('.js-info');

		infoBtn.on('click', function() {
			info.toggleClass('is-active');
       });

    })();

});

