'use strict';

$(function () {
    // init material drop down menu
    $('select').material_select();
    Materialize.updateTextFields();

    var menuWidth = $('.menu-left').width();

    Navigation.setWidth.call(menuWidth);
    $('.parallax').parallax();

    if ($('.js-scroll-to-traffic')[0] != undefined) {
        var $button = $('.js-scroll-to-traffic');
        $button.click(scrollToButton.goTo(".join-us-container"));
    }

    $('.burger-wrapper').on('click', Navigation.slideMenu);
    $(window).on('resize', Navigation.checkMenuSlider);
});
// const tl = new TimelineLite();

// const card = $('.js-why-as-item');


// card.hover(function(e) {
// 	tl
// 		.to(this, .2, {backgroundColor: '#212121'})
// 		.to($(this).find('.js-icon > svg'), .4, {width: 50, height: 50, color: "red"})
// 		.to($(this).find('.js-icon > svg path, rect, polygon'), .4, {fill: "#fff"})
// 		.to($(this).find('.js-body'), .2, {height: 'auto'})
// 		.to($(this).find('.js-body'), .3, {color: '#fff', display: "block"})
// }, function(e) {
// 	tl.restart()
// })
"use strict";
"use strict";

function initMap() {
    var option = {
        center: { lat: 49.85, lng: 24.0166666667 },
        scrollwheel: false,
        zoom: 18,
        scaleControl: false,
        zoomControl: false,
        streetViewControl: false,
        styles: [{
            "featureType": "all",
            "stylers": [{
                "saturation": 0
            }, {
                "hue": "#e7ecf0"
            }]
        }, {
            "featureType": "road",
            "stylers": [{
                "saturation": -70
            }]
        }, {
            "featureType": "transit",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "visibility": "simplified"
            }, {
                "saturation": -60
            }]
        }]
    };

    var map = new google.maps.Map(document.getElementById('map'), option);
    // icon: {url: './../img/markerSvg.svg'},

    // var marker = new google.maps.Marker({
    //     map: map,
    //     position: option.center
    // });

}
"use strict";

$(function () {
	var input = $("#file");
	input.on('change', function (e) {
		console.log(this.files);
	});
});
"use strict";

var Navigation = function () {
	var config = {
		"css": {
			"start": 0
		},
		"duration": 500
	};

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
				left: config.css.start
			}, config.duration);
			$overlay.css('display', 'block');
			return;
		}
		animateArrow();
		$overlay.css('display', 'none');

		$menuSlide.animate({
			left: "-" + menuWidth + "px"
		}, config.duration);
		return;
	};

	return {
		slideMenu: slideMenu,
		setWidth: setWidth,
		checkMenuSlider: checkMenuSlider
	};
}();
"use strict";

var scrollToButton = function () {

	var goTo = function goTo(node) {
		var scrollTo = $(node).offset().top;

		return function (e) {
			e.preventDefault();
			$("html, body").animate({
				scrollTop: scrollTo - 20
			}, 1500);
		};
	};

	return {
		goTo: goTo
	};
}();
//# sourceMappingURL=index.js.map
