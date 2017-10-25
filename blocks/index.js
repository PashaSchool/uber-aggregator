$(function() {
	// init material drop down menu
	$('select').material_select();
	Materialize.updateTextFields();

    Navigation.setWidth();
    $('.burger-wrapper').on('click', Navigation.slideMenu)

})