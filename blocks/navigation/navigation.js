const Navigation = (function(){
	let $arrow = $('.burger-wrapper__stick-arrow');
	let $menu = $('.menu-left');
	let $menuSlide = $('.menu_slide');
	let trigger = 'trigger';
	let $overlay = $('.overlay');
	let tl = new TimelineLite({paused: true});


	const animateArrow = () => $arrow.toggleClass(trigger); 
	const setWidth = () => {
		tl.from($menuSlide, .5, {left: -$menu.width() })
	};

	const slideMenu = () => {
		if(!$arrow.hasClass(trigger)) {
			animateArrow();
			tl.play();
			$overlay.css('display', 'block')
			return
		}
		animateArrow();
		$overlay.css('display', 'none')
		tl.reverse();
		return

	}

	return {
		slideMenu,
		setWidth
	}
})();
