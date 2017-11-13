const Navigation = (function(){
	const config = {
		"css" : {
			"start" : 0
		},
		"duration" : 500
	};
	
	let $arrow = $('.burger-wrapper__stick-arrow');
	let $menu = $('.menu-left');
	let $menuSlide = $('.menu_slide');
	let trigger = 'trigger';
	let $overlay = $('.overlay');
	let menuWidth = $menu.width();

	const animateArrow = () => $arrow.toggleClass(trigger);

	const setWidth = () => {
		 $menuSlide.css('left', -menuWidth)
	};

	const checkMenuSlider = () => {
		let curentWidth =  $menu.width();
		if(menuWidth !== curentWidth) {
			menuWidth = curentWidth;
			setWidth.call(menuWidth)
			return
		}
		return
	}

	const slideMenu = () => {
		if(!$arrow.hasClass(trigger)) {
			animateArrow();
			$menuSlide.animate({
				left: config.css.start
			}, config.duration)
			$overlay.css('display', 'block')
			return
		}
		animateArrow();
		$overlay.css('display', 'none')

		$menuSlide.animate({
				left: `-${menuWidth}px`
		}, config.duration)
		return
	}

	return {
		slideMenu,
		setWidth,
		checkMenuSlider
	}
})();
