$(function() {
	let $window = $(window);
	
    Navigation.setWidth();
    $('.burger-wrapper').on('click', Navigation.slideMenu)

})