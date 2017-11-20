$(function() {
	// init material drop down menu
	$('select').material_select();
	Materialize.updateTextFields();

	const menuWidth = $('.menu-left').width();

    Navigation.setWidth.call(menuWidth);
    $('.parallax').parallax();

    if($('.js-scroll-to-traffic')[0] != undefined) {
        const $button = $('.js-scroll-to-traffic');
        $button.click(scrollToButton.goTo(".join-us-container"));
    }
    
    $('.burger-wrapper').on('click', Navigation.slideMenu);
    $(window).on('resize', Navigation.checkMenuSlider);
})