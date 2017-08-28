'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CalendarModal = function () {
	function CalendarModal(config) {
		_classCallCheck(this, CalendarModal);

		this.el = $(config.modal);
		this.btnClose = $(config.closeEl);
		this.beforeOpen = config.beforeOpen;

		this.btnClose.on('click', this.hide.bind(this));
	}

	_createClass(CalendarModal, [{
		key: 'show',
		value: function show(e) {

			function isFunction(functionToCheck) {
				var getType = {};
				return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
			}

			if (this.beforeOpen && isFunction(this.beforeOpen)) this.beforeOpen(e, this.el);

			this.el.fadeIn();
		}
	}, {
		key: 'hide',
		value: function hide() {

			this.el.fadeOut();
		}
	}]);

	return CalendarModal;
}();

var Calendar = function () {
	function Calendar() {
		_classCallCheck(this, Calendar);

		this._data = {
			calendar: '[data-calendar]',
			calendarPopup: '[data-calendar-popup]',
			calendarTitle: '[data-calendar-title]',
			calendarYear: '[data-calendar-year]',
			closeCalendar: '[data-close-calendar]',
			inputFrom: '[data-calendar-from]',
			inputTo: '[data-calendar-to]',
			saveBtn: '[data-calendar-save]',
			calendarYearSelect: '.ui-datepicker-year'
		};

		this.calendar = $(this._data.calendar);
		this.calendarYear = $(this._data.calendarYear);
		this.inputs = $(this._data.inputFrom + ', ' + this._data.inputTo);
		this.saveBtn = $(this._data.saveBtn);

		//initialisations
		this.initCalendar();
		this.initModal();

		//binding events
		this.inputs.on('focus', this.showModal.bind(this));

		this.calendarYear.on('click', this.changeYear.bind(this));

		this.saveBtn.on('click', this.saveDate.bind(this));
	}

	_createClass(Calendar, [{
		key: 'initCalendar',
		value: function initCalendar() {
			var _this = this;

			this.calendar.datepicker({
				dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
				monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
				dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
				prevText: '',
				firstDay: 1,
				inline: true,
				changeYear: true,
				showOtherMonths: true,
				selectOtherMonths: false,
				dateFormat: 'dd.mm.yy',
				onChangeMonthYear: function onChangeMonthYear(year) {
					return setActiveYear.call(_this, year);
				}
			});

			function setActiveYear(year) {

				this.calendarYear.removeClass('is-active');

				return this.calendarYear.filter('[data-value="' + year + '"]').addClass('is-active');
			}
		}
	}, {
		key: 'initModal',
		value: function initModal() {

			var data = this._data;
			this.modal = new CalendarModal({
				modal: data.calendarPopup,
				closeEl: data.closeCalendar,
				beforeOpen: function beforeOpen(e, modal) {

					var titleBlock = modal.find(data.calendarTitle);
					var target = $(e.target);
					var titleText = target.data('title');

					titleBlock.text(titleText);
				}
			});
		}
	}, {
		key: 'showModal',
		value: function showModal(e) {
			this.currentInput = $(e.target);
			this.modal.show(e);
		}
	}, {
		key: 'changeYear',
		value: function changeYear(e) {
			this.calendarYearSelect = this.calendar.find(this._data.calendarYearSelect);

			var target = $(e.target);
			var year = target.data('value');

			this.calendarYear.removeClass('is-active');
			target.addClass('is-active');

			this.calendarYearSelect.find('option[value="' + year + '"]').prop('selected', true);
			this.calendarYearSelect.change();

			e.preventDefault();
		}
	}, {
		key: 'saveDate',
		value: function saveDate(e) {
			var date = this.calendar.datepicker().val();
			this.currentInput.val(date);

			this.modal.hide();
		}
	}]);

	return Calendar;
}();

new Calendar();