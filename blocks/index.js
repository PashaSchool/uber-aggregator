$(function() {
	// init material drop down menu
	$('select').material_select();
	Materialize.updateTextFields();

	const menuWidth = $('.menu-left').width();

    Navigation.setWidth.call(menuWidth);
    
    $('.burger-wrapper').on('click', Navigation.slideMenu);
    $(window).on('resize', Navigation.checkMenuSlider)
})