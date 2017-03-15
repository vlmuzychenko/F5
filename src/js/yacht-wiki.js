$(function () {
  $('.yacht-wiki-fp_reg').fullpage({
    verticalCentered: true,
		anchors: ['description', 'details', 'price', 'programm', 'registration'],
		menu: '.yacht-wiki-menu',
    css3: true,
    onLeave: function(anchorLink, index){
      if(index == 1) {
        $('.yacht-wiki-menu').addClass('dark');
        $('.yacht-wiki-menu').removeClass('light');
      }
      if(index == 2){
        $('.yacht-wiki-menu').addClass('dark');
        $('.yacht-wiki-menu').removeClass('light');
      }
      if(index == 3){
        $('.yacht-wiki-menu').addClass('dark');
        $('.yacht-wiki-menu').removeClass('light');
      }
      if(index == 4){
        $('.yacht-wiki-menu').addClass('dark');
        $('.yacht-wiki-menu').removeClass('light');
      }
      if(index == 5){
        $('.yacht-wiki-menu').addClass('light');
        $('.yacht-wiki-menu').removeClass('dark');
      }
    }
  });

  $('.js-programm__slider').slick({
    fade: true,
    infinite: false,
    draggable: false,
    prevArrow: $('.js-programm-left'),
    nextArrow: $('.js-programm-right')
  });

  $('.js-programm-btn').click(function () {
    var bg = $('.programm__slider .slick-active').data('bgImg');
    var bgPic = $('.programm__slider .slick-active').data('bgImgPic');
    $('.js-section-bg').css('background-image', bg);
    $('.programm').css('background-image', bgPic)
  });

  $('.js-programm__slider1').slick({
    fade: true,
    infinite: false,
    draggable: false,
    prevArrow: $('.js-programm-left'),
    nextArrow: $('.js-programm-right')
  });

  $('.carousel').roundabout({
    minScale:0.1,
    minOpacity: 1,
    childSelector:"li",
    autoplay:false,
    btnNext: $('.js-details-left'),
    btnPrev: $('.js-details-right')
  });

  $('.descr__video-btn').click(function(){
    $('.descr').fadeOut();
    $('.descr-video').delay(400).fadeIn();
    $('.yacht-wiki-menu').css('visibility', 'hidden');
  });

  $('.descr-video__close').click(function(){
    $('.descr-video').fadeOut();
    $('.descr').delay(400).fadeIn();
    $('.yacht-wiki-menu').css('visibility', 'visible');
  });

  $('.js-enroll').click(function(){

    var openPopup = new TimelineMax();
    openPopup
    .to($('.popup-wrap'), 0, {opacity:'1', display:'block', ease:Sine.easeOut})
    .fromTo($('.popup-contacts'), 1, {x:'0%', opacity:'0', display:'none'}, {x:'-50%', opacity:'1', display:'block'}, 0)
    .fromTo($('.popup-substrate'), 1, {x:'-100%', opacity:'0', display:'none'}, {x:'-50%', opacity:'1', display:'block'}, 0);
  });

});
