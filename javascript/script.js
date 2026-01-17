let currentStyle = 'openfreemap-liberty';
const mapStyles = {
	"carto-positron": {
		code: "carto-positron",
		url: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
		image: "https://carto.com/help/images/building-maps/basemaps/positron_labels.png",
		name: "Carto Positron",
	},
	"carto-dark": {
		code: "carto-dark",
		url: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
		image: "https://carto.com/help/images/building-maps/basemaps/dark_labels.png",
		name: "Carto Dark",
	},
	"carto-voyager": {
		code: "carto-voyager",
		url: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
		image: "https://carto.com/help/images/building-maps/basemaps/voyager_labels.png",
		name: "Carto Voyager",
	},
	"openfreemap-positron": {
		code: "openfreemap-positron",
		url: "https://tiles.openfreemap.org/styles/positron",
		image: "",
		name: "OpenFreeMap Positron",
	},
	"openfreemap-bright": {
		code: "openfreemap-bright",
		url: "https://tiles.openfreemap.org/styles/bright",
		image: "",
		name: "OpenFreeMap Bright",
	},
	"openfreemap-liberty": {
		code: "openfreemap-liberty",
		url: "https://tiles.openfreemap.org/styles/liberty",
		image: "",
		name: "OpenFreeMap Liberty",
	},
	"etalab-darkmatter": {
		code: "etalab-darkmatter",
		url: "https://openmaptiles.geo.data.gouv.fr/styles/dark-matter/style.json",
		image: "",
		name: "Etalab DarkMatter",
	},
	"ign-planign": {
		code: "ign-planign",
		url: "https://data.geopf.fr/annexes/ressources/vectorTiles/styles/PLAN.IGN/standard.json",
		image: "",
		name: "IGN PlanIGN",
	},
};

const mapLayer = {
	'LIMITES_ADMINISTRATIVES_EXPRESS': {
		id: 'LIMITES_ADMINISTRATIVES_EXPRESS',
		source: 'LIMITES_ADMINISTRATIVES_EXPRESS.LATEST:commune',
		// filter: ['==', ['get', 'limite'], 'Vol interdit *'],
		type: 'fill',
		'paint': {
			'fill-extrusion-opacity': 0.5,
			'fill-extrusion-color': '#00F',
			'fill-extrusion-height': 1, // Units in meters
			'fill-extrusion-base': 0, // Units in meters
			'fill-extrusion-vertical-gradient': true
		},
	},
	'TRANSPORTS_DRONES_RESTRICTIONS_INTERDIT': {
		id: 'TRANSPORTS_DRONES_RESTRICTIONS_INTERDIT',
		source: 'TRANSPORTS.DRONES.RESTRICTIONS:carte_restriction_drones_lf',
		filter: ['==', ['get', 'limite'], 'Vol interdit *'],
		type: 'fill-extrusion',
		'paint': {
			'fill-extrusion-opacity': 0.5,
			'fill-extrusion-color': '#F00',
			'fill-extrusion-height': 0.1, // Units in meters
			'fill-extrusion-base': 0, // Units in meters
			'fill-extrusion-vertical-gradient': true
		},
	},
	'TRANSPORTS_DRONES_RESTRICTIONS_30': {
		id: 'TRANSPORTS_DRONES_RESTRICTIONS_30',
		source: 'TRANSPORTS.DRONES.RESTRICTIONS:carte_restriction_drones_lf',
		filter: ['==', ['get', 'limite'], 'Hauteur maximale de vol de 30 m *'],
		type: 'fill-extrusion',
		'paint': {
			'fill-extrusion-opacity': 0.5,
			'fill-extrusion-color': '#f80',
			'fill-extrusion-height': 30, // Units in meters
			'fill-extrusion-base': 0, // Units in meters
			'fill-extrusion-vertical-gradient': true
		},
	},
	'TRANSPORTS_DRONES_RESTRICTIONS_50': {
		id: 'TRANSPORTS_DRONES_RESTRICTIONS_50',
		source: 'TRANSPORTS.DRONES.RESTRICTIONS:carte_restriction_drones_lf',
		filter: ['==', ['get', 'limite'], 'Hauteur maximale de vol de 50 m *'],
		type: 'fill-extrusion',
		'paint': {
			'fill-extrusion-opacity': 0.5,
			'fill-extrusion-color': '#fA0',
			'fill-extrusion-height': 50, // Units in meters
			'fill-extrusion-base': 0, // Units in meters
			'fill-extrusion-vertical-gradient': true
		},
	},
	'TRANSPORTS_DRONES_RESTRICTIONS_60': {
		id: 'TRANSPORTS_DRONES_RESTRICTIONS_60',
		source: 'TRANSPORTS.DRONES.RESTRICTIONS:carte_restriction_drones_lf',
		filter: ['==', ['get', 'limite'], 'Hauteur maximale de vol de 60 m *'],
		type: 'fill-extrusion',
		'paint': {
			'fill-extrusion-opacity': 0.5,
			'fill-extrusion-color': '#ff0',
			'fill-extrusion-height': 60, // Units in meters
			'fill-extrusion-base': 0, // Units in meters
			'fill-extrusion-vertical-gradient': true
		},
	},
	'TRANSPORTS_DRONES_RESTRICTIONS_100': {
		id: 'TRANSPORTS_DRONES_RESTRICTIONS_100',
		source: 'TRANSPORTS.DRONES.RESTRICTIONS:carte_restriction_drones_lf',
		filter: ['==', ['get', 'limite'], 'Hauteur maximale de vol de 100 m *'],
		type: 'fill-extrusion',
		'paint': {
			'fill-extrusion-opacity': 0.5,
			'fill-extrusion-color': '#Af4',
			'fill-extrusion-height': 100, // Units in meters
			'fill-extrusion-base': 0, // Units in meters
			'fill-extrusion-vertical-gradient': true
		},
	},
	'TRANSPORTS_DRONES_RESTRICTIONS_120': {
		id: 'TRANSPORTS_DRONES_RESTRICTIONS_120',
		source: 'LIMITES_ADMINISTRATIVES_EXPRESS.LATEST:commune',
		// filter: ['==', ['get', 'limite'], 'Hauteur maximale de vol de 120 m *'],
		type: 'fill-extrusion',
		'paint': {
			'fill-extrusion-opacity': 0.5,
			'fill-extrusion-color': '#4cf',
			'fill-extrusion-height': 120, // Units in meters
			'fill-extrusion-base': 0, // Units in meters
			'fill-extrusion-vertical-gradient': true
		},
	}
}

let style = new URL(location.href).searchParams.get('style');
if (style && style.length > 0) {
	currentStyle = style;
}

function parseHash() {
    const hash = window.location.hash.substring(1); // Remove the '#'
    if (!hash) return null;

    const parts = hash.split('/');
    // if (parts.length !== 5) return null;

    return {
        zoom: parseFloat(parts[0]) || undefined,
        lng: parseFloat(parts[1]) || undefined,
        lat: parseFloat(parts[2]) || undefined,
        bearing: parseFloat(parts[3]) || undefined,
        pitch: parseFloat(parts[4]) || undefined,
    };
}
const hashParams = parseHash();

const map = new maplibregl.Map({
	container: 'mapdiv', // container id
	style: mapStyles[currentStyle].url, // style URL
	center: (hashParams && hashParams.lng && hashParams.lat) ? [hashParams.lng, hashParams.lat] : undefined, // starting position [lng, lat]
    zoom: (hashParams && hashParams.zoom) ? hashParams.zoom : null, // starting zoom
    bearing: (hashParams && hashParams.bearing) ? hashParams.bearing : 0.0,
    pitch: (hashParams && hashParams.pitch) ? hashParams.pitch : 0,
	maxZoom: 18,
	maxPitch: 68.5,
	attributionControl: false,
	maplibreLogo: true,
	hash: true,
});


map.on('load', async () => {
	console.log('map', map);

	if (!hashParams) {
		map.fitBounds([
			[-5.955, 41.387],
			[ 9.799, 51.832],
		]);
	}

	// ========== Layers START ==========
	// Function to fetch data for the current viewport
	function updateData() {
		if (map.getZoom() < 10) {
			return;
		}

		const bounds = map.getBounds();
		const bbox = [
			bounds.getWest(),
			bounds.getSouth(),
			bounds.getEast(),
			bounds.getNorth(),
			'EPSG:4326',
		].join(',');

		// Replace with your actual GeoJSON endpoint
		const urlTransportsDronesRestrictions = 'https://data.geopf.fr/wfs/ows' +'?'+ new URLSearchParams({
			service: 'WFS',
			version: '2.0.0',
			request: 'GetFeature',
			typenames: 'TRANSPORTS.DRONES.RESTRICTIONS:carte_restriction_drones_lf',
			srsname: 'EPSG:4326',
			outputformat: 'application/json',
			// cql_filter: "limite = 'Hauteur maximale de vol de 30 m *'",
			bbox: bbox,
		}).toString();

		fetch(urlTransportsDronesRestrictions).then(response => response.json()).then(dataTransportsDronesRestrictions => {
			map.getSource('TRANSPORTS.DRONES.RESTRICTIONS:carte_restriction_drones_lf').setData(dataTransportsDronesRestrictions);
			updateData120m(dataTransportsDronesRestrictions);
		}).catch(error => {
			console.error('Error fetching dataTransportsDronesRestrictions:', error);
		});
	
		function updateData120m(dataTransportsDronesRestrictions) {
			const urlLimiteAdministrative = 'https://data.geopf.fr/wfs/ows?' + new URLSearchParams({
				service: 'WFS',
				version: '2.0.0',
				request: 'GetFeature',
				typenames: 'LIMITES_ADMINISTRATIVES_EXPRESS.LATEST:commune',
				srsname: 'EPSG:4326',
				outputformat: 'application/json',
				bbox: bbox,
			}).toString();

			fetch(urlLimiteAdministrative).then((response) => response.json()).then((dataLimiteAdministrative) => {
				const dataLimiteAdministrativePoly = turf.union(turf.featureCollection(dataLimiteAdministrative.features));
				const dataTransportsDronesRestrictionsPoly = turf.union(turf.featureCollection(dataTransportsDronesRestrictions.features));
				const data120m = turf.difference(
					turf.featureCollection([dataLimiteAdministrativePoly, dataTransportsDronesRestrictionsPoly])
				);
				map.getSource('LIMITES_ADMINISTRATIVES_EXPRESS.LATEST:commune').setData(data120m);
			}).catch((error) => {
				console.error('Error fetching data120m:', error);
			});
		}

	}


	// Update data when the map moves
	map.on('moveend', () => {
		updateData();
	});
	
	map.addSource('LIMITES_ADMINISTRATIVES_EXPRESS.LATEST:commune', {
		attribution: 'LIMITES_ADMINISTRATIVES_EXPRESS.LATEST:commune',
		type: 'geojson',
		data: {
			type: 'FeatureCollection',
			features: []
		}
	});

	map.addSource('TRANSPORTS.DRONES.RESTRICTIONS:carte_restriction_drones_lf', {
		attribution: 'Restrictions UAS catégorie Ouverte et Aéromodélisme <a href="http://www.dac-s.aviation-civile.gouv.fr/spip.php?rubrique8" target="_blank">© DGAC (DTA, DSAC-IR, STAC et SNIA)</a>',
		type: 'geojson',
		data: {
			type: 'FeatureCollection',
			features: []
		}
	});

	// map.addLayer(mapLayer['TRANSPORTS_DRONES_RESTRICTIONS']);
	map.addLayer(mapLayer['TRANSPORTS_DRONES_RESTRICTIONS_INTERDIT']);
	map.addLayer(mapLayer['TRANSPORTS_DRONES_RESTRICTIONS_30']);
	map.addLayer(mapLayer['TRANSPORTS_DRONES_RESTRICTIONS_50']);
	map.addLayer(mapLayer['TRANSPORTS_DRONES_RESTRICTIONS_60']);
	map.addLayer(mapLayer['TRANSPORTS_DRONES_RESTRICTIONS_100']);
	map.addLayer(mapLayer['TRANSPORTS_DRONES_RESTRICTIONS_120']);

	updateData();

	[
		'TRANSPORTS_DRONES_RESTRICTIONS',
		'TRANSPORTS_DRONES_RESTRICTIONS_INTERDIT',
		'TRANSPORTS_DRONES_RESTRICTIONS_30',
		'TRANSPORTS_DRONES_RESTRICTIONS_50',
		'TRANSPORTS_DRONES_RESTRICTIONS_60',
		'TRANSPORTS_DRONES_RESTRICTIONS_100',
		'TRANSPORTS_DRONES_RESTRICTIONS_120',
	].forEach(layer => {
		// open a popup on click
		map.on('click', layer, (e) => {
			let popup = new maplibregl.Popup({
				closeButton: true,
				closeOnClick: false,
			});
			let content = (e.features[0].properties.limite) ? e.features[0].properties.limite : 'Hauteur maximale de vol de 120 m *';
			if (e.features[0].properties.remarque) {
				content += `<br>${e.features[0].properties.remarque}`;
			}
			popup.setLngLat(e.lngLat);
			popup.setHTML(content);
			popup.addTo(map);
		});
		// Change the cursor style
		map.on('mouseenter', layer, () => {
			map.getCanvas().style.cursor = 'pointer';
		});
		map.on('mouseleave', layer, () => {
			map.getCanvas().style.cursor = '';
		});
	});
	// ========== Layers END ==========


	// ========== Control START ==========
	// ===== Control Geocoder START =====
	const geocoderApi = { // https://github.com/mapbox/mapbox-gl-geocoder
		forwardGeocode: async (config) => {
			const features = [];
			try {
				const request = `https://nominatim.openstreetmap.org/search?q=${config.query}&format=geojson&polygon_geojson=1&addressdetails=1`;
				const response = await fetch(request);
				const geojson = await response.json();
				for (const feature of geojson.features) {
					const center = [
						feature.bbox[0] + (feature.bbox[2] - feature.bbox[0]) / 2,
						feature.bbox[1] + (feature.bbox[3] - feature.bbox[1]) / 2
					];
					const point = {
						type: 'Feature',
						geometry: {
							type: 'Point',
							coordinates: center
						},
						place_name: feature.properties.display_name,
						properties: feature.properties,
						text: feature.properties.display_name,
						place_type: ['place'],
						center
					};
					features.push(point);
				}
			} catch (e) {
				console.error(`Failed to forwardGeocode with error: ${e}`);
			}
			return {
				features
			};
		}
	};
	const GeocoderControl = new MaplibreGeocoder(geocoderApi, {
		maplibregl
	});
	// ===== Control Geocoder END =====


	// ===== Control Zoom Compass START =====
	const NavigationControl = new maplibregl.NavigationControl({
		visualizePitch: true,
		showZoom: true,
		showCompass: true
	});
	// ===== Control Zoom Compass END =====


	// ===== Control Fullscreen START =====
	const FullscreenControl = new maplibregl.FullscreenControl({
		container: document.querySelector('body')
	});
	// ===== Control Fullscreen END =====


	// ===== Control GeoLocate START =====
	const GeolocateControl = new maplibregl.GeolocateControl({
		positionOptions: {
			enableHighAccuracy: true
		},
		trackUserLocation: true
	});
	// ===== Control GeoLocate END =====


	// ===== Control Attribution START =====
	const AttributionControl = new maplibregl.AttributionControl({
		customAttribution: '<a href="https://maplibre.org/" target="_blank">MapLibre</a>',
		compact: true,
	});
	// ===== Control Attribution END =====


	// ===== Control Scale START =====
	const ScaleControl = new maplibregl.ScaleControl({
		maxWidth: 80,
		unit: 'metric',
	});
	// ===== Control Scale END =====

	// ===== Control Legend START =====
	const targets = {};
	const options = {
		title: 'Légende',
		showDefault: false,
		showCheckbox: true,
		reverseOrder: true,
		onlyRendered: true,
	};
	const LegendControl = new MaplibreLegendControl.MaplibreLegendControl(targets, options);
	// ===== Control Legend END =====


	// ===== Layer Control START =====
	const setStyleURL = function (currentStyle) {
		const url = new URL(window.location.href);
		url.searchParams.set('style', currentStyle);
		window.history.replaceState({}, '', url.href);
	}
	class StyleSwitcherControl {
		constructor(styles) {
			this.styles = styles;
			this.container = document.createElement('div');
			this.container.className = "maplibregl-ctrl maplibregl-ctrl-group maplibregl-style-switcher";
		}
		onAdd(map) {
			this.map = map;
			this.container.innerHTML = "";
			this.createElements();
			return this.container;
		}
		onRemove() {
			this.container.parentNode.removeChild(this.container);
			this.map = undefined;
		}

		saveCustomSourcesAndLayers() {
			this.customSourcesAndLayers = {
				sources: {},
				layers: [],
				image: {},
			};
			const sources = this.map.getStyle().sources;
			for (const [sourceId, source] of Object.entries(sources)) {
				if (!source.url) {
					this.customSourcesAndLayers.sources[sourceId] = source;
				}
			}
			const layers = this.map.getStyle().layers;
			for (const layer of layers) {
				if (this.customSourcesAndLayers.sources[layer.source]) {
					this.customSourcesAndLayers.layers.push(layer);
				}
			}
			const allImageIDs = this.map.listImages();
			const customIDs = allImageIDs.filter((id) => id.startsWith("customImg-"));
			if (customIDs.length != 0) {
				customIDs.forEach((Id) => {
					this.customSourcesAndLayers.image[Id] = this.map.getImage(Id);
				});
			}
		}

		restoreCustomSourcesAndLayers() {
			for (const [sourceId, source] of Object.entries(this.customSourcesAndLayers.sources)) {
				this.map.addSource(sourceId, source);
			}
			for (const layer of this.customSourcesAndLayers.layers) {
				this.map.addLayer(layer);
			}

			for (const [IdImage, Image] of Object.entries(this.customSourcesAndLayers.image)) {
				this.map.addImage(IdImage, Image.data);
			}
		}


		createElements() {
			// Crée le conteneur principal du contrôle
			const styleSwitcher = document.createElement('div');
			styleSwitcher.className = "style-switcher";
			styleSwitcher.style.display = 'flex';
			styleSwitcher.style.flexDirection = 'row';
			styleSwitcher.style.flexWrap = 'nowrap';
			styleSwitcher.style.alignItems = 'center';
			// Ajoute le titre
			const title = document.createElement('div');
			title.textContent = "Styles :";
			title.style.marginLeft = '2px';
			styleSwitcher.appendChild(title);
			// Crée la liste des boutons pour chaque style
			const select = document.createElement('select');
			select.setAttribute('id','mapstyles');
			select.style.border = 'none';
			select.style.outline = 'none';
			select.style.textAlign = 'center';
			select.style.background = '#fff';
			// Ajoute un bouton pour chaque style
			Object.values(this.styles).forEach(style => {
				const option = document.createElement('option');
				option.setAttribute("value", style['code']);
				option.setAttribute('title', style['code']);
				if (style['code'] == currentStyle) {
					option.setAttribute('selected', 'selected');
				}
				option.innerText = (style['name']) ? style['name'] : style['code'];
				select.appendChild(option);
			});
			select.addEventListener("change", (e) => {
				const newStyleCode = e.target.value;
				this.saveCustomSourcesAndLayers();
				this.map.setStyle(this.styles[newStyleCode].url);
				currentStyle = newStyleCode;
				setStyleURL(currentStyle);
				this.map.once("styledata", () => {
					setTimeout(() => {
						this.restoreCustomSourcesAndLayers();
					}, 500);
				});
			});
			styleSwitcher.appendChild(select);
			this.container.appendChild(styleSwitcher);
		}
	}
	const styleSwitcher = new StyleSwitcherControl(mapStyles);
	// ===== Layer Control END =====


	map.addControl(GeocoderControl, 'top-left');
	map.addControl(styleSwitcher, "top-left");
	map.addControl(NavigationControl, 'top-right');
	map.addControl(FullscreenControl, 'top-right');
	map.addControl(GeolocateControl, 'top-right');
	map.addControl(AttributionControl, 'bottom-right');
	map.addControl(ScaleControl, 'bottom-left');
	map.addControl(LegendControl, "bottom-right");
	// ========== Control END ==========

});



