function init() {
	const filterModal = document.querySelector('.b-filterModal')
	const filterOpen = document.querySelector('.js-openFilter')
	const filterBack = document.querySelector('.b-filterModal__head__back')

	filterOpen.addEventListener('click', () => {
		filterModal.style.display = "block";
	})

	filterBack.addEventListener('click', () => {
		filterModal.style.display = "none";
	})
}

export default {
	init
}
