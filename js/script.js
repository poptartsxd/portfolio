$(document).ready(function(){

	$(".scrollspy").scrollSpy();
	$(".button-collapse").sideNav();
	$(".myProcessNav").pushpin({
		top:700,
		offset:100
	});

	$(".medMinderProcessNav").pushpin({
		top:1000,
		offset:100
	});

	$(".argonProcessNav").pushpin({
		top:1000,
		offset:100
	});

	$(".lockitProcessNav").pushpin({
		top:800,
		offset:100
	});

	$(".connectProcessNav").pushpin({
		top:1000,
		offset:100
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