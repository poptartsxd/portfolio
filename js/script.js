$(document).ready(function(){

	$(".scrollspy").scrollSpy();
	$(".button-collapse").sideNav();

	$('.carousel.carousel-slider').carousel({full_width: true, indicators:true});

	$(".myProcessNav").pushpin({
		top:1300,
		offset:25
	});

	$(".medMinderProcessNav").pushpin({
		top:1900,
		offset:25
	});

	$(".argonProcessNav").pushpin({
		top:1200,
		offset:25
	});

	$(".lockitProcessNav").pushpin({
		top:1500,
		offset:25
	});

	$(".connectProcessNav").pushpin({
		top:1600,
		offset:25
	});


	$(window).scroll(function() {

		var windscroll = $(window).scrollTop();

		if ($(this).scrollTop() >= 300) { 
			$('#goToTop').fadeIn(500); 
		} else {
			$('#goToTop').fadeOut(500); 
		}

		if(windscroll >= 300){
			$('.wrapper section').each(function(i) {
				if ($(this).position().top <= windscroll + 200) {
					$('ul li a.myNav.active').removeClass('active');
					$('ul li a.myNav').eq(i).addClass('active');
				}
			});
		}else{
			$('ul li a.myNav.active').removeClass('active');
		}


	});
	$('#goToTop').click(function() {
		$('body').animate({
			scrollTop : 0                
		}, 500);
	});
	
});