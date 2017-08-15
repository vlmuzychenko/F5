"use strict";

// datepicker search
var datepickerDefaultOptions = {
   dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
   monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
   dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
   prevText: '',
   firstDay: 1,
   nextText: ''
};

$('.js-pick-date').datepicker($.extend(datepickerDefaultOptions, {
   beforeShow: function beforeShow() {
      $('#ui-datepicker-div').addClass('datepicker-smpl-search');
   }
}));

$('.js-search-adv-date').datepicker($.extend(datepickerDefaultOptions, {
   beforeShow: function beforeShow() {
      $('#ui-datepicker-div').addClass('datepicker-adv-search');
   }
}));

// $('.js-calendar').datepicker($.extend(datepickerDefaultOptions, {
//    inline: true,
//    beforeShow: function () {
//       $('#ui-datepicker-div').addClass('event-calendar');
//    }
// }));