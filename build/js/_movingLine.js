'use strict';

$(function () {

	var movingLine = {
		init: function init() {
			this.el = $('.js-nav');
			this.el.find('> li').on('mouseover', this._move.bind(this));
			this.el.on('mouseleave', this._destroy.bind(this));

			this._goToActive();
		},
		_move: function _move(e) {
			var target = $(e.currentTarget);
			var $line = target.siblings('.js-moving-line');
			var width = target.width();
			var offsetLeft = target.position().left;
			var gutterLeft = parseInt(getComputedStyle(target[0]).paddingLeft);

			$line.css({
				width: width + 'px',
				transform: 'translate3d(' + (gutterLeft + offsetLeft) + 'px,0,0)'
			});
		},
		_destroy: function _destroy() {
			var $line = this.el.find('.js-moving-line');

			// $line.attr('style', '');

			this._goToActive();
		},
		_goToActive: function _goToActive() {
			var line = this.el.find('.js-moving-line');
			var active = this.el.find('li.is-active');
			var gutterLeft = parseInt(getComputedStyle(active[0]).paddingLeft);

			var activeProp = {
				width: active.width(),
				offsetLeft: active.position().left
			};

			line.css({
				width: activeProp.width + 'px',
				transform: 'translate3d(' + (activeProp.offsetLeft + gutterLeft) + 'px,0,0)'
			});

			setTimeout(function () {
				line.addClass('is-init');
			}, 200);
		}
	};

	movingLine.init();
});