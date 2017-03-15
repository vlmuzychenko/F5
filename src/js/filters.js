$(function () {

   // search filters change

   (function () {
      var filterDetailed = $('.js-filter-detailed'),
         toggleFilters = $('.js-more-filters');

      toggleFilters.each(function () {
         $(this).on('click', function (e) {
            e.preventDefault();

            $(this).toggleClass('is-active');
            $(this).find('span').text(!$(this).hasClass('is-active') ? 'Больше фильтров' : 'Меньше фильтров');
            filterDetailed.toggleClass('is-active');

         });
      });

   })();

// range sliders

   (function () {

      var priceRange = $('.js-price-range'),
         priceFromInput = $('.js-price-from'),
         priceToInput = $('.js-price-to'),
         peopleCountRange = $('.js-people-count-range'),
         peopleCountInput = $('.js-people-count'),
         toiletsCountRange = $('.js-toilets-count-range'),
         toiletsCountInput = $('.js-toilets-count'),
         cabinCountRange = $('.js-cabin-count-range'),
         cabinCountInput = $('.js-cabin-count');

      // price count
      priceRange.slider({
         animate: true,
         range: true,
         min: 5000,
         max: 50000,
         step: 1000,
         values: [5000, 28000],
         slide: function (event, ui) {
            priceFromInput.val(ui.values[0]);
            priceToInput.val(ui.values[1]);
         }
      });

      priceFromInput.val(priceRange.slider('values', 0));

      priceFromInput.on('change', function () {
         var _value = priceFromInput.val();

         priceFromInput.val(_value);

         priceRange.slider('values', 0, _value);
      });

      priceToInput.val(priceRange.slider('values', 1));

      priceToInput.on('change', function () {
         var _value = priceToInput.val();

         priceToInput.val(_value);

         priceRange.slider('values', 1, _value);
      });

      // people count
      peopleCountRange.slider({
         animate: true,
         range: 'min',
         min: 1,
         max: 50,
         value: [15],
         slide: function (event, ui) {
            peopleCountInput.val(ui.value);
         }
      });

      peopleCountInput.val(peopleCountRange.slider('value'));

      peopleCountInput.on('change', function () {
         var _value = peopleCountInput.val();

         peopleCountInput.val(_value);

         peopleCountRange.slider('value', _value);
      });

      // toilets count
      toiletsCountRange.slider({
         animate: true,
         range: 'min',
         min: 1,
         max: 50,
         value: [15],
         slide: function (event, ui) {
            toiletsCountInput.val(ui.value);
         }
      });

      toiletsCountInput.val(toiletsCountRange.slider('value'));

      toiletsCountInput.on('change', function () {
         var _value = toiletsCountInput.val();

         toiletsCountInput.val(_value);

         toiletsCountRange.slider('value', _value);
      });

      // cabin count
      cabinCountRange.slider({
         animate: true,
         range: 'min',
         min: 1,
         max: 50,
         value: [15],
         slide: function (event, ui) {
            cabinCountInput.val(ui.value);
         }
      });

      cabinCountInput.val(cabinCountRange.slider('value'));

      cabinCountInput.on('change', function () {
         var _value = cabinCountInput.val();

         cabinCountInput.val(_value);

         cabinCountRange.slider('value', _value);
      });

      // disable keypress
      $('.js-price-from, .js-price-to, .js-people-count, .js-cabin-count, .js-toilets-count').keypress(function (event) {
         var key, keyChar;
         if (!event) var event = window.event;

         if (event.keyCode) key = event.keyCode;
         else if (event.which) key = event.which;

         if (key == null || key == 0 || key == 8 || key == 13 || key == 9 || key == 46 || key == 37 || key == 39) return true;
         keyChar = String.fromCharCode(key);

         if (!/\d/.test(keyChar)) return false;

      });

   })();

});
