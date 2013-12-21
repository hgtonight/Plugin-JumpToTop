/* Copyright 2013 Zachary Doll */
jQuery(function ($) {
	jumpToTop = '#JumpToTop';

	$(window).on('scroll', $.throttle(function () {
		$jumpToTop = $(jumpToTop);

		if ($(this).scrollTop() > 100) {
			$jumpToTop.fadeIn();
		} else {
			$jumpToTop.fadeOut();
		}
	}, 100));

	$(document).on('click', JumpToTop, function (e) {
		e.preventDefault();

		$('body').animate({scrollTop: 0}, 800);
	});
});
