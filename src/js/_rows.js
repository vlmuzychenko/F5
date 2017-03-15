(function() {

	let row = $('.js-row');
	let rowInner = $('.js-row-inner');

	const isTouchDevice = !!('ontouchstart' in document);
	const isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
	const duration = isMac ? 4 : 50;

	const LEFT_ARROW = 37;
	const RIGHT_ARROW = 39;

	if (isTouchDevice) {
		$('body').addClass('is-touch');
		return false;
	}
	
	row.mousewheel(function(event, delta) {
		
		let content = $(this).find('.js-row-inner');

		content[0].scrollLeft -= (event.deltaY * duration);

		event.preventDefault();
	});

	let moveByArrows = el => e => {

		let keyCode = e.keyCode;

		switch (keyCode) {
			case LEFT_ARROW:
				el.stop().animate({scrollLeft: '-=258'}, 300);
				return;
			case RIGHT_ARROW:
				el.stop().animate({scrollLeft: '+=258'}, 300);
				return;
		}
	};

	let eventHandler = null;

	row.on('mouseenter',function() {
		let content = $(this).find('.js-row-inner');
		eventHandler = moveByArrows(content);

		$(document).on('keyup', eventHandler);
	});

	row.on('mouseleave',function() {
		$(document).off('keyup', eventHandler);
	});

})();