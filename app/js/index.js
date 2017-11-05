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


// $(document).on('scroll', function(e) {
// 	// // console.dir()
// 	// let body = document.body;
// 	// let docEl = document.documentElement;

// 	// let scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
// 	// let elementTop = $('.join-us-container').position().top;

// 	// if(scrollTop >= elementTop) {
// 	// 	$('.join-us-container').css({
// 	// 		'position': 'fixed',
// 	// 		'top' : scrollTop + 'px'
// 	// 	})
// 	// }
// 	// console.log('still here')
// })
"use strict";
'use strict';

var Navigation = function () {
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
				left: 0
			}, 500);
			$overlay.css('display', 'block');
			return;
		}
		animateArrow();
		$overlay.css('display', 'none');

		$menuSlide.animate({
			left: -menuWidth + 'px'
		}, 500);
		return;
	};

	return {
		slideMenu: slideMenu,
		setWidth: setWidth,
		checkMenuSlider: checkMenuSlider
	};
}();
//# sourceMappingURL=index.js.map
