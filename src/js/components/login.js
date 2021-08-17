const forms = document.querySelectorAll('.b-login__form')
const btnShow = document.querySelectorAll('.js-show')
const btnStep = document.querySelectorAll('.js-step')

const show = (el) => {
	const formID = el.target.dataset.id
	forms.forEach((form) => {
		form.classList.add('is-hidden')
	})
	document.querySelector(`[data-form="${formID}"]`)
		.classList.remove('is-hidden')
}

const step = (el) => {
	const parent = el.target.offsetParent.parentElement
	parent.classList.remove('is-active')
	parent.nextElementSibling.classList.add('is-active')
}


btnShow.forEach((button) => {
	button.addEventListener('click', show);
});

btnStep.forEach((button) => {
	button.addEventListener('click', step);
});
