'use strict';

$(function () {
  // init material drop down menu
  $('select').material_select();
  Materialize.updateTextFields();

  var menuWidth = $('.menu-left').width();

  Navigation.setWidth.call(menuWidth);

  $('.burger-wrapper').on('click', Navigation.slideMenu);
  $(window).on('resize', Navigation.checkMenuSlider);
});
"use strict";
"use strict";

var Navigation = function () {
	var config = {
		"css": {
			"start": 0
		},
		"duration": 500
	};

	var $arrow = $('.burger-wrapper__stick-arrow');
	var $menu = $('.menu-left');
	var $menuSlide = $('.menu_slide');
	var trigger = 'trigger';
	var $overlay = $('.overlay');
	var menuWidth = $menu.width();

	var animateArrow = function animateArrow() {
		return $arrow.toggleClass(trigger);
	};

	var setWidth = function setWidth() {
		$menuSlide.css('left', -menuWidth);
	};

	var checkMenuSlider = function checkMenuSlider() {
		var curentWidth = $menu.width();
		if (menuWidth !== curentWidth) {
			menuWidth = curentWidth;
			setWidth.call(menuWidth);
			return;
		}
		return;
	};

	var slideMenu = function slideMenu() {
		if (!$arrow.hasClass(trigger)) {
			animateArrow();
			$menuSlide.animate({
				left: config.css.start
			}, config.duration);
			$overlay.css('display', 'block');
			return;
		}
		animateArrow();
		$overlay.css('display', 'none');

		$menuSlide.animate({
			left: "-" + menuWidth + "px"
		}, config.duration);
		return;
	};

	return {
		slideMenu: slideMenu,
		setWidth: setWidth,
		checkMenuSlider: checkMenuSlider
	};
}();
//# sourceMappingURL=index.js.map
