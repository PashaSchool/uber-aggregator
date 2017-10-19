$(function() {
	// init material drop down menu
	$('select').material_select();

    Navigation.setWidth();
    $('.burger-wrapper').on('click', Navigation.slideMenu)

})