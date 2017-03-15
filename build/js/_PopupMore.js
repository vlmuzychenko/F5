'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Popup = function () {
	function Popup(opt) {
		_classCallCheck(this, Popup);

		this.options = opt;

		this.popup = $(opt.popup);
		this.popupIn = $(opt.popupIn);
		this.popupClose = $(opt.popupClose);
		this.popupOpen = $(opt.popupOpen);

		this.afterOpen = opt.afterOpen;
		this.beforeOpen = opt.beforeOpen;
		this.afterClose = opt.afterClose;

		this.popupOpen.on('click', this.open.bind(this));
		this.popupClose.on('click', this.hide.bind(this));

		if (this.options.hideFromParent) this.popup.on('click', this._hideFromParent.bind(this));
	}

	_createClass(Popup, [{
		key: 'open',
		value: function open(e, dataPopup) {
			var target = $(e.currentTarget) || {};
			var data = dataPopup || target.data('open');
			var popup = this.popup.filter('[data-popup="' + data + '"]');

			if ($('.popup').hasClass('is-open')) {

				var zIndexList = [].map.call($('.popup.is-open'), function (item) {
					return +getComputedStyle(item).zIndex;
				});
				var zIndex = Math.max(zIndexList);

				popup.css("zIndex", zIndex + 1);
			}

			if (this.beforeOpen && isFunction(this.beforeOpen)) this.beforeOpen(this.popup, e);

			// popup.fadeIn('fast');
			popup.addClass('is-open');

			this._scrollTop = $(window).scrollTop();
			$('body').css('top', -this._scrollTop).addClass('popup-open');

			//callback
			function isFunction(functionToCheck) {
				var getType = {};
				return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
			}

			if (this.afterOpen && isFunction(this.afterOpen)) this.afterOpen(this.popup);

			e.preventDefault();
		}
	}, {
		key: 'hide',
		value: function hide(e, dataPopup) {
			var target = $(e.currentTarget) || {};
			var data = dataPopup || target.data('open');
			var popup = dataPopup ? this.popup.filter('[data-popup="' + data + '"]') : target.closest(this.options.popup);

			$('body').removeAttr('style').removeClass('popup-open').scrollTop(this._scrollTop);

			// popup.fadeOut('fast');
			popup.removeClass('is-open');

			function isFunction(functionToCheck) {
				var getType = {};
				return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
			}

			if (this.afterClose && isFunction(this.afterClose)) this.afterClose(this.popup);

			e.preventDefault();
		}
	}, {
		key: '_hideFromParent',
		value: function _hideFromParent(e) {

			if (!$(e.target).closest(this.options.popupIn).length) {
				this.hide(e);
			}
		}
	}]);

	return Popup;
}();

//data-open / data-popup


var popup = new Popup({
	popup: '.js-popup',
	popupClose: '.js-close-popup',
	popupOpen: '.js-open-popup',
	popupIn: '.js-popup-in',
	hideFromParent: true
});

var popupMore = new Popup({
	popup: '.js-popup-more',
	popupClose: '.js-close-popup-more',
	popupOpen: '.js-open-popup-more',
	popupIn: '.js-popup-more-in',
	hideFromParent: true,
	beforeOpen: function beforeOpen(popup, e) {
		var target = $(e.currentTarget);

		var more = target.parents('.js-infromation-more');

		var _more$data = more.data('information-for-popup'),
		    title = _more$data.title,
		    img = _more$data.img,
		    text = _more$data.text,
		    link = _more$data.link;

		var moreTitle = popup.find('.js-more-title');
		var moreImg = popup.find('.js-more-photo');
		var moreText = popup.find('.js-more-text');
		var moreLink = popup.find('.js-more-link');

		moreTitle.text(title);
		moreText.html(text);
		moreImg.css('background-image', 'url(' + img + ')');
		moreLink.attr('href', link);
	}
});