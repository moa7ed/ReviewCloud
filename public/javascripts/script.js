    //Up Arrow

$(window).scroll(function(){  
			// if the user scrolled the page more than 200 pixels, show the 'up' arrow image
			if ($(this).scrollTop() > 200) {
					$('.uparrow').fadeIn();
			}
	
			// hide the 'up' arrow image
			else {
					$('.uparrow').fadeOut();
			} 
	});
	
	
	
	// when the user clicks on the 'up' arrow image, it will scroll the page to the top
	
	// it will occur in a second (see 1000 value below)
	
	// you can change that value if you want to make the scroll faster or slower
	
	$('.uparrow').click(function(){
			$("html, body").animate({ scrollTop: 0}, 1000);
			return false;
	});
	
	
	
// Centering the Logo and Nav 
	$(window).resize(function() {
		jQuery.fn.center = function () {
			$('.nav_cont').css("position","absolute");
			$('.nav_cont').css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
																									$(window).scrollLeft()) + "px");
			return this;
	}
	$('.nav_cont').center();
});
	



