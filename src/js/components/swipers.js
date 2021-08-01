import Swiper from 'swiper';

const init = () => {
	const reviews = new Swiper(".js-reviews", {
		slidesPerView: 1,
		spaceBetween: 12,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			640: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 3,
			},
		},
	})
}

export default {
	init
}
