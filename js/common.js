$(function() {

// Smooth-scrolling
$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

// toTop button
$(window).scroll(function() {
	if ($(this).scrollTop() > $(this).height()) {
			$('.toTop').addClass('toTop-active');
	} else {
			$('.toTop').removeClass('toTop-active');
	};
});
$('.toTop').click(function() {
	$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});

});
