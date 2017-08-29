class CalendarModal {
	constructor(config) {
		this.el = $(config.modal);
		this.btnClose = $(config.closeEl);
		this.beforeOpen = config.beforeOpen;

		this.btnClose.on('click', this.hide.bind(this));
	}

	show(e) {

		function isFunction(functionToCheck) {
			let getType = {};
			return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
		}

		if(this.beforeOpen && isFunction(this.beforeOpen)) this.beforeOpen(e, this.el);

		this.el.fadeIn();
	}

	hide() {

		this.el.fadeOut();
	}

}


class Calendar {
	constructor() {
		this._data = {
			calendar		: '[data-calendar]',
			calendarPopup	: '[data-calendar-popup]',
			calendarTitle	: '[data-calendar-title]',
			calendarYear	: '[data-calendar-year]',
			closeCalendar	: '[data-close-calendar]',
			inputFrom		: '[data-calendar-from]',
			inputTo			: '[data-calendar-to]',
			saveBtn			: '[data-calendar-save]',
			calendarYearSelect: '.ui-datepicker-year'
		};

		this.calendar 		= $(this._data.calendar);
		this.calendarYear 	= $(this._data.calendarYear);
		this.inputs 		= $(this._data.inputFrom + ', ' + this._data.inputTo);
		this.saveBtn 		= $(this._data.saveBtn);

		//initialisations
		this.initCalendar();
		this.initModal();


		//binding events
		this.inputs
			.on('focus', this.showModal.bind(this));

		this.calendarYear
			.on('click', this.changeYear.bind(this));

		this.saveBtn
			.on('click', this.saveDate.bind(this));
	}

	initCalendar() {

		this.calendar.datepicker({
			dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
	    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
	    dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
	    prevText: '',
	    firstDay: 1,
			inline: true,
			changeYear: true,
			showOtherMonths: true,
			selectOtherMonths: false,
			dateFormat: 'dd.mm.yy',
			onChangeMonthYear: year => setActiveYear.call(this, year)
		});

		function setActiveYear(year) {

			this.calendarYear.removeClass('is-active');

			return (
				this.calendarYear
					.filter(`[data-value="${year}"]`)
					.addClass('is-active')
			)

		}

	}

	initModal() {

		let data = this._data;
		this.modal = new CalendarModal({
			modal: data.calendarPopup,
			closeEl: data.closeCalendar,
			beforeOpen: function(e, modal) {

				let titleBlock = modal.find(data.calendarTitle);
				let target = $(e.target);
				let titleText = target.data('title');

				titleBlock.text(titleText);

			}
		});

	}

	showModal(e) {
		this.currentInput = $(e.target);
		this.modal.show(e);
	}

	changeYear(e) {
		this.calendarYearSelect = this.calendar.find(this._data.calendarYearSelect);

		let target = $(e.target);
		let year = target.data('value');

		this.calendarYear.removeClass('is-active');
		target.addClass('is-active');

		this.calendarYearSelect.find(`option[value="${year}"]`).prop('selected', true);
		this.calendarYearSelect.change();

		e.preventDefault();
	}

	saveDate(e) {
		let date = this.calendar.datepicker().val();
		this.currentInput.val(date);

		this.modal.hide();
	}

}

new Calendar();

$(window).click(function() {
	$('.calendar-wrap').hide();
});

$('.calendar-wrap').click(function(event){
    event.stopPropagation();
});
$('.js-pick-date').click(function(event){
    event.stopPropagation();
});

$('.js-pick-date').click(function(){
	$('.calendar-wrap').removeClass('left');
	$('.calendar-wrap').removeClass('right');
	if($(this).is('#sailing')){
		$('.calendar-wrap').addClass('left');
	}
	if($(this).is('#arrival')){
		$('.calendar-wrap').addClass('right');
	}
	if($(this).is('#sailing-adv')){
		$('.calendar-wrap').addClass('left');
	}
	if($(this).is('#arrival-adv')){
		$('.calendar-wrap').addClass('right');
	}
});
