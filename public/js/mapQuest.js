function initMap() {
	L.mapquest.key = 'Op5BosyEDy2W5Lzg1Kza8t3GAjUEsBnn';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.87857434280311, -117.23586454487881],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false,
	});

	L.marker([32.87857434280311, -117.23586454487881]).addTo(map);
}