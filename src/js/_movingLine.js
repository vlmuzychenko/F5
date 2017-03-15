$(function(){


let movingLine = {
	init() {
		this.el = $('.js-nav');
		this.el.find('> li').on('mouseover', this._move.bind(this));
		this.el.on('mouseleave', this._destroy.bind(this));

		this._goToActive();

	},

	_move(e) {
		let target = $(e.currentTarget);
		let $line = target.siblings('.js-moving-line');
		let width = target.width();
		let offsetLeft = target.position().left;
		let gutterLeft = parseInt(getComputedStyle(target[0]).paddingLeft);

		$line.css({
			width : width + 'px',
			transform : `translate3d(${gutterLeft + offsetLeft}px,0,0)`
		});
	},
	_destroy() {
		let $line = this.el.find('.js-moving-line');

		// $line.attr('style', '');

		this._goToActive();
	},
	_goToActive() {
		let line = this.el.find('.js-moving-line');
		let active = this.el.find('li.is-active');
		let gutterLeft = parseInt(getComputedStyle(active[0]).paddingLeft);

		let activeProp = {
			width: active.width(),
			offsetLeft: active.position().left
		};

		line.css({
			width : activeProp.width + 'px',
			transform : `translate3d(${activeProp.offsetLeft + gutterLeft}px,0,0)`
		});

		setTimeout(function() {
			line.addClass('is-init');
		}, 200);

	}
};

movingLine.init();

});