

console.log('Primary file reporting in!');

$(document).ready(function () {
	
	document.createElement( "picture" );

	$(".menu-trigger").click(function(){
		$(".nav").slideToggle(400, function() {
			$(this).toggleClass("nav-expanded").css('display', '');
		});

	});

	$(".slider").owlCarousel({
		items : 1,
		responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        640:{
	            items:1,
	            nav:true
	        }
	    },
		nav : true,
		navText : ['&lsaquo;', '&rsaquo;'],
		loop : true,
		fluidSpeed : 600,
		autoplaySpeed : 600,
		navSpeed : 600,
		dots: false
	});

});