const Navigation = (function(){
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
				left: 0
			}, 500)
			$overlay.css('display', 'block')
			return
		}
		animateArrow();
		$overlay.css('display', 'none')

		$menuSlide.animate({
				left: -menuWidth + 'px'
		}, 500)
		return
	}

	return {
		slideMenu,
		setWidth,
		checkMenuSlider
	}
})();
