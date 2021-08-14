const init = () => {
	const mapID = document.querySelector('#map')

	if (mapID) {
		ymaps.ready(function () {
			var myMap = new ymaps.Map('map', {
					center: [55.751574, 37.573856],
					zoom: 9,
					controls: [],
				})
			myMap.behaviors.disable('scrollZoom');
		});
	}
}

export default {
	init
}
