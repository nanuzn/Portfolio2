
//
$(document).ready(function () {
	$('#fullpage').fullpage({
		'verticalCentered': false,
		'scrollingSpeed': 600,
		'autoScrolling': false,
		'css3': true,
		'navigation': true,
		'navigationPosition': 'right',
	});
});

// wow
$(function () {
	new WOW().init();
	$(".rotate").textrotator();
})

// Bounties Slideshow Popup
$(document).ready(function () {
	let interval;
	const $overlay = $('#bounty-overlay');
	const $images = $overlay.find('img');
	let currentIndex = 0;

	if ($images.length > 0) {
		// Prepare first image
		$images.eq(0).addClass('active');

		$('#bounty-card').hover(
			function () {
				// Mouse enter
				$overlay.addClass('active');

				// Reset to first image or keep current logic
				currentIndex = 0;
				$images.removeClass('active').eq(currentIndex).addClass('active');

				interval = setInterval(function () {
					$images.eq(currentIndex).removeClass('active');
					currentIndex = (currentIndex + 1) % $images.length;
					$images.eq(currentIndex).addClass('active');
				}, 1200); // Slightly slower for big images
			},
			function () {
				// Mouse leave
				$overlay.removeClass('active');
				clearInterval(interval);
				// Optional: Reset active class after delay or immediately
			}
		);
	}
});