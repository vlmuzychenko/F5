'use strict';

(function () {

	var row = $('.js-row');
	var rowInner = $('.js-row-inner');

	var isTouchDevice = !!('ontouchstart' in document);
	var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
	var duration = isMac ? 4 : 50;

	var LEFT_ARROW = 37;
	var RIGHT_ARROW = 39;

	if (isTouchDevice) {
		$('body').addClass('is-touch');
		return false;
	}

	row.mousewheel(function (event, delta) {

		var content = $(this).find('.js-row-inner');

		content[0].scrollLeft -= event.deltaY * duration;

		event.preventDefault();
	});

	var moveByArrows = function moveByArrows(el) {
		return function (e) {

			var keyCode = e.keyCode;

			switch (keyCode) {
				case LEFT_ARROW:
					el.stop().animate({ scrollLeft: '-=258' }, 300);
					return;
				case RIGHT_ARROW:
					el.stop().animate({ scrollLeft: '+=258' }, 300);
					return;
			}
		};
	};

	var eventHandler = null;

	row.on('mouseenter', function () {
		var content = $(this).find('.js-row-inner');
		eventHandler = moveByArrows(content);

		$(document).on('keyup', eventHandler);
	});

	row.on('mouseleave', function () {
		$(document).off('keyup', eventHandler);
	});
})();