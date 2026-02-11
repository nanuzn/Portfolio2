
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

// Slideshow Popup Logic
$(document).ready(function () {
	function setupSlideshow(cardId, overlayId) {
		let interval;
		const $overlay = $(overlayId);
		const $images = $overlay.find('img');
		let currentIndex = 0;

		if ($images.length > 0) {
			// Prepare first image
			$images.eq(0).addClass('active');

			$(cardId).hover(
				function () {
					// Mouse enter
					$overlay.addClass('active');

					// Reset to first image
					currentIndex = 0;
					$images.removeClass('active').eq(currentIndex).addClass('active');

					interval = setInterval(function () {
						$images.eq(currentIndex).removeClass('active');
						currentIndex = (currentIndex + 1) % $images.length;
						$images.eq(currentIndex).addClass('active');
					}, 1200);
				},
				function () {
					// Mouse leave
					$overlay.removeClass('active');
					clearInterval(interval);
				}
			);
		}
	}

	setupSlideshow('#bounty-card', '#bounty-overlay');
	setupSlideshow('#hof-card', '#hof-overlay');
});