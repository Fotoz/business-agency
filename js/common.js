$(function() {

// smooth-scroll
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


// toTop-button
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


// menu-nav-toggle
	$('#nav_toggle').on('click', function(event) {
		event.preventDefault();

		$(this).toggleClass('is-active');
		$('#mobile_nav').slideToggle(350);
	});


// при клике на элемент навигации - скрываем навигацию на экранах шириной 768px и ниже
	$('.mobile-link').on('click', function(event) {
		event.preventDefault();

		$('#mobile_nav').slideToggle(150);
		$('#nav_toggle').removeClass('is-active');
	});


// при скроле страницы добавляет класс 'is-active' блоку до которого мы доскролили
	$(document).scroll(function () {
		var scrollTop = $(window).scrollTop() + 1,
				aboutUsOffset = $('#s_about_us').offset().top,
				ourApprochOffset = $('#s_our_approch').offset().top,
				worksOffset = $('#s_works').offset().top,
				consultationOffset = $('#s_consultation').offset().top;

		if ( scrollTop < aboutUsOffset ) {
			$('.mobile-link').removeClass('is-active');
			$('#link_1').addClass('is-active');
		} else {
			$('.mobile-link').removeClass('is-active');
			$('#link_2').addClass('is-active');
		};

		if ( scrollTop >= ourApprochOffset ) {
			$('.mobile-link').removeClass('is-active');
			$('#link_3').addClass('is-active');
		};

		if ( scrollTop >= worksOffset ) {
			$('.mobile-link').removeClass('is-active');
			$('#link_4').addClass('is-active');
		};

		if ( scrollTop >= consultationOffset ) {
			$('.mobile-link').removeClass('is-active');
			$('#link_5').addClass('is-active');
		};
	});


// display-form-btn - ( кнопка влияющая на отображение формы )
	$('#display_form_btn').on('click', function(event) {
		event.preventDefault();

		$(this).toggleClass('is-active');
		$('#form_wrapper').slideToggle();
	});


// hide-form-btn - ( кнопка влияющая на отображение формы )
	$('#hide_form_btn').on('click', function(event) {
		event.preventDefault();

		$('#display_form_btn').removeClass('is-active');
		$('#form_wrapper').slideToggle();
	});

});
