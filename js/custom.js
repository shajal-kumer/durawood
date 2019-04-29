(function($) {
	$(document).ready(function() {
		// work-showcase-area__carousel start
		$('.work-showcase-area__carousel').owlCarousel({
			loop: true,
			margin: 80,
			autoplay: false,
			autoplayTimeout: 4000,
			autoplayHoverPause: true,
			autoHeight: true,
			autoHeightClass: 'owl-height2',
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			responsiveClass: true,
			items: 3,
			dots: false,
			responsive: {
				0: {
					items: 1,
					nav: false
				},
				767: {
					items: 2,
					nav: false,
					margin: 50
				},
				991: {
					nav: false
				}
			}
		});
		// work-showcase-area__carousel end
		// work-showcase-area__carousel start
		$('.work-area__carousel').owlCarousel({
			loop: true,
			margin: 0,
			autoplay: false,
			autoplayTimeout: 4000,
			autoplayHoverPause: true,
			autoHeight: true,
			autoHeightClass: 'owl-height2',
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			responsiveClass: true,
			items: 1,
			dots: true
		});
		// work-showcase-area__carousel end

		// slider-area__carouser start
		$('.slider-area__carouser').owlCarousel({
			loop: true,
			margin: 0,
			autoplay: false,
			autoplayTimeout: 4000,
			autoplayHoverPause: true,
			autoHeight: true,
			autoHeightClass: 'owl-height2',
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			responsiveClass: true,
			items: 1,
			dots: false,
			responsive: {
				0: {
					items: 1,
					nav: false
				},
				767: {
					items: 1,
					nav: false
				},
				991: {
					items: 1,
					nav: false
				}
			}
		});
		// slider-area__carouser end

		if ($(window).width() < 768) {
			// promo-area carousel start
			$('.promo-area').addClass('owl-carousel owl-theme');
			$('.promo-area').owlCarousel({
				loop: true,
				margin: 0,
				autoplay: false,
				autoplayTimeout: 4000,
				autoplayHoverPause: true,
				autoHeight: true,
				autoHeightClass: 'owl-height2',
				animateOut: 'fadeOut',
				animateIn: 'fadeIn',
				responsiveClass: true,
				items: 1,
				dots: false,
				responsive: {
					0: {
						items: 1,
						nav: false
					},
					767: {
						items: 1,
						nav: false
					},
					991: {
						items: 1,
						nav: false
					}
				}
			});
			// slider-area__carouser end
		}

		if ($(window).width() > 991) {
			$('.our-promise-area__content').css(
				'height',
				$('.our-promise-area__img').height()
			);
			$('.our-story-area__content').css(
				'height',
				$('.our-story-area__img').height()
			);
			$('.mission-area__content').css(
				'height',
				$('.mission-area__img').height()
			);
			$('.work-area__content').css(
				'height',
				$('.work-area__carousel').height()
			);
			$('.about-area__content').css(
				'height',
				$('.about-area__carousel').outerHeight()
			);
		}
		$('.hamberger-menu i').on('click', function() {
			$('.mobile-menu__wrap').addClass('active');
		});
		$('.close-mb-menu').on('click', function() {
			$('.mobile-menu__wrap').removeClass('active');
		});

		//wow js start
		// wow = new WOW({
		//     animateClass: 'animated',
		//     offset: 100,
		// });
		// wow.init();
		//wow js stop

		// scroll a image zoom js start
		// $(window).scroll(function () {
		//     var scroll = $(window).scrollTop();
		//     $(".zoom img").css({
		//         width: (100 + scroll / 5) + "%"
		//     });
		// });
		// scroll a image zoom js end

		// hamber menu js start
		// $(".mobile-menu-bar").on("click", function () {
		//     $('.mobile-menu-bottom').toggleClass("menuappend");
		// });
		// hamber menu js end

		/* stick menu js start */
		// $(window).scroll(function () {
		//     var distanceFromTop = $(this).scrollTop();
		//     if (distanceFromTop >= $('.desktop-menu-hero').height()) {
		//         $('.desktop-menu-hero').addClass('fixed animated fadeInDown');
		//     } else {
		//         $('.desktop-menu-hero').removeClass('fixed animated fadeInDown');
		//     }
		// });
		/* stick menu js end */
	});
})(jQuery);
