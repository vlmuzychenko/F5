'use strict';

$(function () {
   //sort items in select
   var select = $('select.js-select-multiple');
   select.each(function () {
      var options = $(this).find("option");
      var arr = options.map(function (_, o) {
         return { t: $(o).text(), v: o.value };
      });
      arr.sort(function (o1, o2) {
         var t1 = o1.t.toLowerCase();
         var t2 = o2.t.toLowerCase();
         return t1 > t2 ? 1 : t1 < t2 ? -1 : 0;
      });
      options.each(function (i, o) {
         o.value = arr[i].v;
         $(o).text(arr[i].t);
      });
   });

   // custom selects
   $('.js-select-multiple').each(function () {
      $(this).multipleSelect({
         width: '100%',
         placeholder: $(this).attr('placeholder'),
         countSelected: ' # из % выбрано',
         selectAll: false,
         allSelected: 'Все выбрано'
      });
   });

   $('.js-select-single').each(function () {
      $(this).multipleSelect({
         width: '100%',
         placeholder: $(this).attr('placeholder'),
         single: true
      });
   });

   // custom scrolls
   // $('.js-yacht-scroll').perfectScrollbar();
   // $('.js-scroll-filter').perfectScrollbar();
   // $('.js-scroll').perfectScrollbar();

   setTimeout(function () {
      $('.js-scroll').perfectScrollbar();
      $('.js-yacht-scroll').perfectScrollbar();
      $('.js-scroll-filter').perfectScrollbar();
      // $('.js-scroll-row').perfectScrollbar({suppressScrollX: true});
   }, 300);

   $(window).on('resize', function () {
      $('.js-scroll').perfectScrollbar('update');
      $('.js-yacht-scroll').perfectScrollbar('update');
      $('.js-scroll-filter').perfectScrollbar('update');
   });

   $('.js-select-field').on('click', function () {
      var selectScroll = $(this).find('.ms-parent ul');

      selectScroll.perfectScrollbar({
         wheelSpeed: 1,
         wheelPropagation: false,
         swipePropagation: true,
         minScrollbarLength: null,
         maxScrollbarLength: null,
         useBothWheelAxes: false,
         useKeyboard: true,
         suppressScrollX: false,
         suppressScrollY: false,
         scrollXMarginOffset: 0,
         scrollYMarginOffset: 0,
         includePadding: false
      });

      selectScroll.perfectScrollbar('update');
   });

   var map;

   function initMap() {

      var mexico = new google.maps.LatLng(19.432608, -99.133209);

      var mapOptions = {
         zoom: 5,
         center: mexico,
         disableDefaultUI: true
      };

      var map = new google.maps.Map(document.getElementById('js-yacht-map'), mapOptions);

      var yachtMapWindow = '<div class="yacht-map__info">' + '<div class="yacht-map__window-pic">' + '<img src="img/content/yacht-card-1.jpg">' + '</div>' + '<div class="yacht-map__window-title">ЯХТА Riva Duchessa' + '</div>' + '<div class="yacht-map__window-price">13 000 грн/день' + '</div>' + '</div>';

      var mapInfo = new google.maps.InfoWindow({
         content: yachtMapWindow
      });

      var mapMarker = 'img/ui-icons/map-marker.png';
      var markerMexico = new google.maps.Marker({
         position: mexico,
         map: map,
         icon: mapMarker
      });

      markerMexico.addListener('click', function () {
         mapInfo.open(map, markerMexico);
      });

      google.maps.event.addListener(map, "click", function (event) {
         mapInfo.close();
      });
      // show map
      var yachtMapShowBtn = $('.js-show-yacht-map'),
          yachtMapInner = $('.js-yacht-map-inner'),
          yachtMapMove = $('.js-yacht-map-move'),
          yachtSection = $('.js-yacht-section');

      yachtMapShowBtn.on('click', function (e) {
         e.preventDefault();

         yachtMapShowBtn.toggleClass('is-active');

         yachtMapInner.slideToggle(function () {
            yachtSection.toggleClass('is-active');
            google.maps.event.trigger(map, 'resize');
            map.setCenter(mexico);
            yachtMapMove.slideToggle();
            setTimeout(function () {
               $('.js-yacht-scroll').perfectScrollbar('update');
            }, 150);
         });

         if (yachtMapShowBtn.hasClass('is-active')) {
            $(this).children('span').text('Скрыть карту');
         } else {
            $(this).children('span').text('Показать карту');
         }
      });
   }

   initMap();
});