$(document).ready(function(){

	$(".scrollspy").scrollSpy();
	$(".button-collapse").sideNav();


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