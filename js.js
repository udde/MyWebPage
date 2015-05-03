
$(function() {
	//alert("")
	var num = 199; //number of pixels before modifying styles

	//$(window).bind('scroll', function () {
	$(window).scroll( function () {
		if($(window).scrollTop() > num) {
	        $('.my-header').addClass('fixed');
	        $('.my-header').removeClass('header-top');
	    } else {
	    	$('.my-header').addClass('header-top');
	        $('.my-header').removeClass('fixed');

	    }

	});
});
