
//
$(document).ready(function () {
	var isMobile = $(window).width() <= 768;

	if (!isMobile) {
		$('#fullpage').fullpage({
			'verticalCentered': false,
			'scrollingSpeed': 600,
			'autoScrolling': false,
			'css3': true,
			'navigation': true,
			'navigationPosition': 'right',
		});
	}

	// Handle resize / orientation change
	var resizeTimer;
	$(window).on('resize', function () {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function () {
			var nowMobile = $(window).width() <= 768;
			if (nowMobile && typeof $.fn.fullpage.destroy === 'function') {
				try { $.fn.fullpage.destroy('all'); } catch (e) { }
			}
		}, 250);
	});
});

// wow
$(function () {
	new WOW().init();
	$(".rotate").textrotator();
})

// Achievement Gallery Logic
const galleries = {
	'bounty': [
		'images/bounties/Screenshot_20251008_203958.jpg', 'images/bounties/Screenshot_20251008_204007.jpg',
		'images/bounties/Screenshot_20251008_204016.jpg', 'images/bounties/Screenshot_20251008_204037.jpg',
		'images/bounties/Screenshot_20251008_204044.jpg', 'images/bounties/Screenshot_20251008_204052.jpg',
		'images/bounties/Screenshot_20251008_204100.jpg', 'images/bounties/Screenshot_20251008_204107.jpg',
		'images/bounties/Screenshot_20251008_204120.jpg', 'images/bounties/Screenshot_20251008_204127.jpg',
		'images/bounties/Screenshot_20251008_204139.jpg', 'images/bounties/Screenshot_20251008_204146.jpg',
		'images/bounties/Screenshot_20251008_204154.jpg', 'images/bounties/Screenshot_20251008_204203.jpg',
		'images/bounties/Screenshot_20251008_204211.jpg', 'images/bounties/Screenshot_20251008_204221.jpg',
		'images/bounties/Screenshot_20251008_204228.jpg', 'images/bounties/Screenshot_20251008_204237.jpg',
		'images/bounties/Screenshot_20251008_204243.jpg', 'images/bounties/Screenshot_20251008_204250.jpg',
		'images/bounties/Screenshot_20251008_204257.jpg', 'images/bounties/Screenshot_20251008_204306.jpg',
		'images/bounties/Screenshot_20251008_204354.jpg'
	],
	'hof': [
		'images/hofs/Screenshot_20251008_203938.jpg', 'images/hofs/Screenshot_20251008_204402.jpg',
		'images/hofs/Screenshot_20251008_204620.jpg', 'images/hofs/Screenshot_20251008_204910.jpg',
		'images/hofs/Screenshot_20251008_205028.jpg', 'images/hofs/Screenshot_20251008_205205.jpg',
		'images/hofs/Screenshot_20251008_205259.jpg', 'images/hofs/Screenshot_20251008_205426.jpg',
		'images/hofs/Screenshot_20251008_205731.jpg', 'images/hofs/Screenshot_20251008_211448.jpg'
	],
	'ewptx': [
		'images/ewptx.jpg'
	]
};

let currentGallery = [];
let currentIndex = 0;

function openGallery(type) {
	currentGallery = galleries[type];
	currentIndex = 0;
	updateModal();
	$('#screenshot-modal').addClass('active');
	$('body').css('overflow', 'hidden'); // Prevent scrolling
}

function closeModal() {
	$('#screenshot-modal').removeClass('active');
	$('body').css('overflow', 'auto');
}

function changeImage(step) {
	currentIndex += step;
	if (currentIndex >= currentGallery.length) currentIndex = 0;
	if (currentIndex < 0) currentIndex = currentGallery.length - 1;
	updateModal();
}

function updateModal() {
	const $img = $('#modal-img');
	$img.css('opacity', '0');
	setTimeout(() => {
		$img.attr('src', currentGallery[currentIndex]);
		$img.css('opacity', '1');
		$('#current-index').text(currentIndex + 1);
		$('#total-count').text(currentGallery.length);
	}, 200);
}

// Close modal on click outside
$(document).ready(function () {
	$('#screenshot-modal').on('click', function (e) {
		if ($(e.target).is('#screenshot-modal')) {
			closeModal();
		}
	});

	// Keyboard support
	$(document).on('keydown', function (e) {
		if (!$('#screenshot-modal').hasClass('active')) return;

		if (e.key === "ArrowRight") changeImage(1);
		if (e.key === "ArrowLeft") changeImage(-1);
		if (e.key === "Escape") closeModal();
	});
});