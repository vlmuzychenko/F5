// datepicker search
var datepickerDefaultOptions = {
   dayNames: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
   monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
   dayNamesMin: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
   prevText: '',
   nextText: ''
};

$('.js-pick-date').datepicker($.extend(datepickerDefaultOptions, {
   beforeShow: function () {
      $('#ui-datepicker-div').addClass('datepicker-smpl-search');
   }
}));

$('.js-search-adv-date').datepicker($.extend(datepickerDefaultOptions, {
   beforeShow: function () {
      $('#ui-datepicker-div').addClass('datepicker-adv-search');
   }
}));

// $('.js-calendar').datepicker($.extend(datepickerDefaultOptions, {
//    inline: true,
//    beforeShow: function () {
//       $('#ui-datepicker-div').addClass('event-calendar');
//    }
// }));
