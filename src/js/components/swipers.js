import Swiper from 'swiper/bundle';

const init = () => {
	const reviews = new Swiper(".js-reviews", {
		slidesPerView: 1,
		spaceBetween: 12,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			550: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
		},
	})

	const projects = new Swiper(".js-projects", {
		spaceBetween: 16,
		loop: true,
		slidesPerView: "auto",
		centeredSlides: true,
		breakpoints: {
			10: {
				slidesPerView: 1,
				centeredSlides: false,
			},
			550: {
				slidesPerView: 2,
				centeredSlides: false,
			},
			768: {
				slidesPerView: 2,
				centeredSlides: false,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 12,
			},
			1199: {
				slidesPerView: "auto",
			},
		},
	})

	const specialists = new Swiper(".js-specialists", {
		slidesPerView: 2,
		spaceBetween:  20,
		slidesPerColumn: 2,
		breakpoints: {
			550: {
				slidesPerView: 3,
				slidesPerColumn: 2,
			},
			767: {
				slidesPerView: 4,
				slidesPerColumn: 2,
			},
			991: {
				slidesPerView: 5,
				slidesPerColumn: 2,
			},
			1200: {
				slidesPerView: 5,
				slidesPerColumn: 2,
			},
		},
	})

	const spec = new Swiper(".js-spec", {
		slidesPerView: 21,
		spaceBetween:  10,
		slidesPerColumn: 2,
		breakpoints: {
			0: {
				slidesPerView: 1,
				slidesPerColumn: 2,
			},
			660: {
				slidesPerView: 2,
				slidesPerColumn: 2,
			},
			767: {
				slidesPerView: 2,
				slidesPerColumn: 2,
			},
			991: {
				slidesPerView: 3,
				slidesPerColumn: 2,
			},
			1200: {
				slidesPerView: 3,
				slidesPerColumn: 2,
			},
		},
	})
}

export default {
	init
}
