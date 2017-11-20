const scrollToButton = (function() {

	const goTo = node => {
		let scrollTo = $(node).offset().top;
		
		return e => {
			e.preventDefault();
			$("html, body").animate({
				scrollTop: scrollTo - 20
			}, 1500)
		}
	}

	return {
		goTo
	}
})()