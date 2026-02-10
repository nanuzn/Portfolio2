
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

// Bounties Slideshow
$(document).ready(function () {
	let interval;
	const $slideshow = $('.bounty-slideshow');
	const $images = $slideshow.find('img');
	let currentIndex = 0;

	if ($images.length > 0) {
		// Show first image initially
		$images.eq(0).addClass('active');

		$('#bounty-card').hover(
			function () {
				// Mouse enter
				currentIndex = 0;
				$images.removeClass('active').eq(currentIndex).addClass('active');

				interval = setInterval(function () {
					$images.eq(currentIndex).removeClass('active');
					currentIndex = (currentIndex + 1) % $images.length;
					$images.eq(currentIndex).addClass('active');
				}, 1000); // Change every 1 second
			},
			function () {
				// Mouse leave
				clearInterval(interval);
				$images.removeClass('active');
				$images.eq(0).addClass('active'); // Reset to first
			}
		);
	}
});