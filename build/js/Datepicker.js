'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Datepicker = function () {
		function Datepicker() {
				_classCallCheck(this, Datepicker);

				this.config = {
						el: '.js-datepicker',
						moveBtn: '.js-datepicker-btn',
						openBtn: '.js-open-datepicker',
						yearInput: '.js-datepicker-year',
						monthInput: '.js-datepicker-month',
						selectText: '.js-datepicker-text',
						dropdown: '.js-datepicker-dropdown',
						firstDay: 0
				};

				this.openBtn = $(this.config.openBtn);
				this.el = $(this.config.el);
				this.inputs = this.el.find('input');

				this.selectText = $(this.config.selectText);
				this.initialText = this.selectText.text().split(' ');
				this.moveBtn = $(this.config.moveBtn);

				this.text = {
						month: this.initialText[0],
						year: this.initialText[1]
				};

				this.openBtn.on('click', this._toggleOpen.bind(this));
				this.inputs.on('change', this._handleChange.bind(this));
				this.moveBtn.on('click', this._move.bind(this));
		}

		_createClass(Datepicker, [{
				key: '_toggleOpen',
				value: function _toggleOpen(e) {
						var _config = this.config,
						    el = _config.el,
						    dropdown = _config.dropdown;


						var target = $(e.target);
						var parent = target.parents(el);
						var dropDown = parent.find(dropdown);

						dropDown.toggleClass('is-open');

						e.preventDefault();
				}
		}, {
				key: '_handleChange',
				value: function _handleChange(e) {
						var _config2 = this.config,
						    el = _config2.el,
						    dropdown = _config2.dropdown;


						var target = $(e.target);
						var parent = target.parents(el);
						var dropDown = parent.find(dropdown);
						var type = target.data('type');
						var val = target.data('val');

						this.text[type] = val;

						this._updateText();

						if (type == 'month') {
								dropDown.removeClass('is-open');
						}
				}
		}, {
				key: '_updateText',
				value: function _updateText() {
						var _text = this.text,
						    month = _text.month,
						    year = _text.year;

						var text = month + ' ' + year;

						this.selectText.text(text);
				}
		}, {
				key: '_move',
				value: function _move(e) {
						var _config3 = this.config,
						    el = _config3.el,
						    dropdown = _config3.dropdown,
						    monthInput = _config3.monthInput,
						    yearInput = _config3.yearInput;

						var target = $(e.currentTarget);
						var direction = target.data('direction');
						var parent = target.parents(el);

						var IS_LEAF_TO_NEXT_MONTH = direction == 'next';

						//year data
						var yearInputs = parent.find(yearInput).find('input');
						var currentYearIndex = [].findIndex.call(yearInputs.toArray(), function (item, i, array) {
								return item.checked;
						});

						var nextYearIndex = IS_LEAF_TO_NEXT_MONTH ? currentYearIndex + 1 : currentYearIndex - 1;

						var nextYear = $(yearInputs[nextYearIndex]);

						//month data
						var monthInputs = parent.find(monthInput).find('input');
						var currentMonthIndex = [].findIndex.call(monthInputs.toArray(), function (item, i, array) {
								return item.checked;
						});

						var nextMonthIndex = IS_LEAF_TO_NEXT_MONTH ? currentMonthIndex + 1 : currentMonthIndex - 1;

						var nextMonth = $(monthInputs[nextMonthIndex]);

						//if it last or very first - do nothing
						if (nextMonthIndex > monthInputs.length - 1 && nextYearIndex > yearInputs.length - 1 || nextMonthIndex < 0 && nextYearIndex < 0) return;

						var FIRST_MONTH = 0;
						var LAST_MONTH = monthInputs.length - 1;

						var shouldLeaf = IS_LEAF_TO_NEXT_MONTH ? currentMonthIndex == monthInputs.length - 1 && currentYearIndex != yearInputs.length - 1 : currentMonthIndex == 0 && currentYearIndex != 0;

						if (shouldLeaf) {

								nextYear.prop("checked", true);

								var valYear = nextYear.data('val');

								this.text.year = valYear;

								var newMonthIndex = IS_LEAF_TO_NEXT_MONTH ? FIRST_MONTH : LAST_MONTH;

								nextMonth = $(monthInputs[newMonthIndex]);
						}

						nextMonth.prop("checked", true);

						var valMonth = nextMonth.data('val');

						this.text.month = valMonth;

						this._updateText();
				}
		}]);

		return Datepicker;
}();

new Datepicker();