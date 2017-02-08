$(document).ready(function(){

	$(".scrollspy").scrollSpy();
	$(".button-collapse").sideNav();

	$('.carousel.carousel-slider').carousel({full_width: true, indicators:true});

	$(".myProcessNav").pushpin({
		top:1300,
		offset:75
	});

	$(".medMinderProcessNav").pushpin({
		top:1900,
		offset:75
	});

	$(".argonProcessNav").pushpin({
		top:1200,
		offset:75
	});

	$(".lockitProcessNav").pushpin({
		top:1500,
		offset:75
	});

	$(".connectProcessNav").pushpin({
		top:1600,
		offset:75
	});

	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 300) { 
	        $('#goToTop').fadeIn(500); 
	    } else {
	        $('#goToTop').fadeOut(500); 
	    }

	});
	$('#goToTop').click(function() {
	    $('body').animate({
	        scrollTop : 0                
	    }, 500);
	});
	
});