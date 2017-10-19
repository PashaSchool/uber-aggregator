'use strict';

$(function () {
  var $window = $(window);

  Navigation.setWidth();
  $('.burger-wrapper').on('click', Navigation.slideMenu);
});
'use strict';

var Navigation = function () {
	var $arrow = $('.burger-wrapper__stick-arrow');
	var $menu = $('.menu-left');
	var $menuSlide = $('.menu_slide');
	var trigger = 'trigger';
	var $overlay = $('.overlay');
	var tl = new TimelineLite({ paused: true });

	var animateArrow = function animateArrow() {
		return $arrow.toggleClass(trigger);
	};
	var setWidth = function setWidth() {
		tl.from($menuSlide, .5, { left: -$menu.width() });
	};

	var slideMenu = function slideMenu() {
		if (!$arrow.hasClass(trigger)) {
			animateArrow();
			tl.play();
			$overlay.css('display', 'block');
			return;
		}
		animateArrow();
		$overlay.css('display', 'none');
		tl.reverse();
		return;
	};

	return {
		slideMenu: slideMenu,
		setWidth: setWidth
	};
}();
//# sourceMappingURL=index.js.map
