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
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.js-card-slider',
      dots: false,
      arrows: false,
      focusOnSelect: true,
      infinity: false
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

    $('.js-close-popup-email').click(function(){
      $('.js-popup-email').removeClass('is-open');
    });
    $('.js-close-popup-acquiring').click(function(){
      $('.js-popup-acquiring').removeClass('is-open');
    });
    $('.js-close-popup-acquiring-error').click(function(){
      $('.js-popup-acquiring-error').removeClass('is-open');
    });

    $(document).keydown(function(e) {
      if (e.keyCode == 27) {
        $('.js-popup-email').removeClass('is-open');
      }
    });

    $(".click-img-static label").on('click', function(e){
      $(this).parent('li').toggleClass('active-1');
    })
     $(".click-img-2 li").on('click', function(e){
       e.preventDefault();
       $(this).toggleClass('active-2');
    })
});
