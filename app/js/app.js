mapboxgl.accessToken = 'pk.eyJ1Ijoid21jYSIsImEiOiJjajEzZW4xcnAwMDBwMzNwbWFucnl6NmgyIn0.gJqgdVQOW1xuqpPgX2mZEA';
if (!mapboxgl.supported()) {
    alert('Your browser does not support Mapbox GL');
} else {
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/wmca/cj6f7g4cy25ed2rpavkpp2wtf',
    center: [-1.9635834, 52.4788428],
    preserveDrawingBuffer: true,
    zoom: 12
});
}

var printBtn = document.getElementById('mapboxgl-ctrl-print');
var exportView = document.getElementById('export-map');

var printOptions = {
    disclaimer: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi.",
    northArrow: '../../north_arrow.svg'
}

printBtn.onclick = function(e) {
    PrintControl.prototype.initialize(map, printOptions)
}

exportView.onclick = function(e) {
    PrintControl.prototype.exportMap();
    e.preventDefault();
}

map.on('load', function () {

  map.addSource('futmetrostops', { type: 'geojson', data: '/Data/Future-Metro-Stops.geojson' });
 map.addLayer({
     "id": "futmetrostops",
     "type": "symbol",
     "source": "futmetrostops",
     "minzoom": 12,
     "layout": {
         "visibility": 'visible',
         "icon-size": 0.1,
         'icon-image': 'tram-50'
     },
     "paint": {}
 }, 'futuremetro');

 map.addSource('university', { type: 'geojson', data: '/Data/University.geojson' });
 map.addLayer({
    "id": "university",
    "type": "symbol",
    "source": "university",
    "minzoom": 12,
    "layout": {
        "visibility": 'visible',
        "icon-size": 0.1,
        'icon-image': 'university-50'
    },
    "paint": {}
 }, 'place-suburb', 'place-city-md-s', 'place-village');

 map.addSource('hospitals', { type: 'geojson', data: '/Data/Hospitals-Points.geojson' });
 map.addLayer({
    "id": "hospitals",
    "type": "symbol",
    "source": "hospitals",
    "minzoom": 12,
    "layout": {
        "visibility": 'visible',
        "icon-size": 1,
        'icon-image': 'hospital-15'
    },
    "paint": {}
 }, 'place-suburb', 'place-city-md-s', 'place-village');

 map.addSource('shopping', { type: 'geojson', data: '/Data/Shopping-Centres.geojson' });
 map.addLayer({
    "id": "shopping",
    "type": "symbol",
    "source": "shopping",
    "minzoom": 12,
    "layout": {
        "visibility": 'visible',
        "icon-size": 0.1,
        'icon-image': 'shopping-50'
    },
    "paint": {}
 }, 'place-suburb', 'place-city-md-s', 'place-village');

 map.addSource('futrailstops', { type: 'geojson', data: '/Data/Future-Rail-Stations.geojson' });
 map.addLayer({
    "id": "futrailstops",
    "type": "symbol",
    "source": "futrailstops",
    "minzoom": 12,
    "layout": {
        "visibility": 'visible',
        "icon-size": 0.1,
        'icon-image': 'rail-50'
    },
    "paint": {}
 }, 'place-suburb', 'place-city-md-s', 'place-village');

 map.addSource('hs2stations', { type: 'geojson', data: '/Data/Future-HS2-Stations.geojson' });
map.addLayer({
    "id": "hs2stations",
    "type": "symbol",
    "source": "hs2stations",
    "minzoom": 12,
    "layout": {
        "visibility": 'visible',
        "icon-size": 1,
        'icon-image': 'circle-15'
    },
    "paint": {}
}, 'place-suburb', 'place-city-md-s', 'place-village');

 map.addSource('tramstops', { type: 'geojson', data: '/Data/Current-Metro-Stops.geojson' });
map.addLayer({
    "id": "tramstops",
    "type": "symbol",
    "source": "tramstops",
    "minzoom": 12,
    "layout": {
        "visibility": 'visible',
        "icon-size": 0.1,
        'icon-image': 'tram-50'
    },
    "paint": {}
}, 'metroline');

map.addSource('districtjobs', { type: 'geojson', data: '/Data/District-Jobs.geojson' });
map.addLayer({
   "id": "districtjobs",
   "type": "symbol",
   "source": "districtjobs",
   "minzoom": 12,
   "layout": {
       "visibility": 'visible',
       "icon-size": 1,
       'icon-image': 'circle-15'
   },
   "paint": {}
}, 'place-suburb', 'place-city-md-s', 'place-village');

    map.addSource('metroline', { 'type': 'geojson', 'data': '/Data/Current-Metro-Line.geojson'});
    map.addLayer({
        "id": "metroline",
        "type": "line",
        "source": "metroline",
        "layout": {
            'visibility': 'visible'
        },
        "paint": {
            "line-color": "#ED2939",
            "line-width": 3,
        }
    }, 'place-suburb', 'place-city-md-s', 'place-village');

    map.addSource('railline', { 'type': 'geojson', 'data': '/Data/Current-Rail-Line.geojson'});
    map.addLayer({
        "id": "railline",
        "type": "line",
        "source": "railline",
        "layout": {
            'visibility': 'visible'
        },
        "paint": {
            "line-color": "#6c6868",
            "line-width": 3,
        }
    }, 'place-suburb', 'place-city-md-s', 'place-village');

    map.addSource('hs2', { 'type': 'geojson', 'data': '/Data/Future-HS2-Line.geojson'});
    map.addLayer({
        "id": "hs2",
        "type": "line",
        "source": "hs2",
        "layout": {
            'visibility': 'visible'
        },
        "paint": {
            "line-color": "#3db7e4",
            "line-width": 3,
            "line-dasharray": [3,2]
        }
    }, 'place-suburb', 'place-city-md-s', 'place-village');

    map.addSource('futuremetro', { 'type': 'geojson', 'data': '/Data/Future-Metro-Alignment.geojson'});
    map.addLayer({
        "id": "futuremetro",
        "type": "line",
        "source": "futuremetro",
        "layout": {
            'visibility': 'visible'
        },
        "paint": {
            "line-color": "#3db7e4",
            "line-width": 3,
            "line-dasharray": [3,2]
        }
    }, 'place-suburb', 'place-city-md-s', 'place-village', 'futmetrostops');

    map.addSource('futurerail', { 'type': 'geojson', 'data': '/Data/Future-Rail-Lines.geojson'});
    map.addLayer({
        "id": "futurerail",
        "type": "line",
        "source": "futurerail",
        "layout": {
            'visibility': 'visible'
        },
        "paint": {
            "line-color": "#823c47",
            "line-width": 3,
            "line-dasharray": [3,2]
        }
    }, 'place-suburb', 'place-city-md-s', 'place-village');

    map.addSource('krn', { 'type': 'geojson', 'data': '/Data/Key-Route-Network.geojson'});
    map.addLayer({
        "id": "krn",
        "type": "line",
        "source": "krn",
        "layout": {
            'visibility': 'visible'
        },
        "paint": {
            "line-color": "#ffa02f",
            "line-width": 3,
        }
    }, 'place-village');

    map.addSource('sprint', { 'type': 'geojson', 'data': '/Data/Sprint-Lines.geojson'});
    map.addLayer({
        "id": "sprint",
        "type": "line",
        "source": "sprint",
        "layout": {
            'visibility': 'visible'
        },
        "paint": {
            "line-color": "#9038a6",
            "line-width": 3,
            "line-dasharray": [3,2]
        }
    }, 'road-label-large');

    map.addSource('vlr', { 'type': 'geojson', 'data': '/Data/Very-Light-Rail-Lines.geojson'});
    map.addLayer({
        "id": "vlr",
        "type": "line",
        "source": "vlr",
        "layout": {
            'visibility': 'visible'
        },
        "paint": {
            "line-color": "#823c47",
            "line-width": 3,
        }
    }, 'place-suburb', 'place-city-md-s', 'place-village');



map.addSource('housing', { 'type': 'geojson', 'data': '/Data/Major-Housing-Sites.geojson'});

    map.addLayer({
       'id': 'housing',
       'type': 'fill',
       "source": "housing",
       "layout": {
           'visibility': 'visible'
       },
       'paint': {
           'fill-color': '#ffa02f',
           'fill-opacity': 0.5
       }
   }, 'place-city-md-s');


   map.addSource('employment', { 'type': 'geojson', 'data': '/Data/Proposed-Employment-Sites.geojson'});

       map.addLayer({
          'id': 'employment',
          'type': 'fill',
          "source": "employment",
          "layout": {
              'visibility': 'visible'
          },
          'paint': {
              'fill-color': '#ffa02f',
              'fill-opacity': 0.8
          }
      }, 'place-village');
});

var layers =
[
    {
        'name': 'Group',
        'directory': 'Misc',
        'id': 'foo',
        'layerGroup' : [

        ]
    },
    {
        'name': 'Rail Line',
        'id': 'railline',
        'source': 'railline',
        'directory': 'Current Transportation',
    },
    {
        'name': 'Metro Line',
        'id': 'metroline',
        'source': 'metroline',
        'directory': 'Current Transportation',
    },
    {
        'name': 'HS2 Line',
        'id': 'hs2',
        'source': 'hs2',
        'directory': 'Future Transportation',
    },
    {
        'name': 'Metro Line',
        'id': 'futuremetro',
        'source': 'futuremetro',
        'directory': 'Future Transportation',
    },
    {
        'name': 'Rail Line',
        'id': 'futurerail',
        'source': 'futurerail',
        'directory': 'Future Transportation',
    },
    {
        'name': 'Key Route Network',
        'id': 'krn',
        'source': 'krn',
        'directory': 'Other',
    },
    {
        'name': 'Sprint',
        'id': 'sprint',
        'source': 'sprint',
        'directory': 'Future Transportation',
    },
    {
        'name': 'Very Light Rail',
        'id': 'vlr',
        'source': 'vlr',
        'directory': 'Current Transportation',
    },
    {
        'name': 'Metro Stops',
        'id': 'tramstops',
        'source': 'tramstops',
        'directory': 'Current Transportation',
        'icon': '../../img/tram-50.svg'
    },
    {
        'name': 'District Jobs',
        'id': 'districtjobs',
        'source': 'districtjobs',
        'directory': 'Other',
    },
    {
        'name': 'HS2 Stations',
        'id': 'hs2stations',
        'source': 'hs2stations',
        'directory': 'Future Transportation',
        'icon': '../../img/rail-50.svg'
    },
    {
        'name': 'Metro Stops',
        'id': 'futmetrostops',
        'source': 'futmetrostops',
        'directory': 'Future Transportation',
        'icon': '../../img/tram-50.svg'
    },
    {
        'name': 'Rail Stops',
        'id': 'futrailstops',
        'source': 'futrailstops',
        'directory': 'Future Transportation',
        'icon': '../../img/rail-50.svg'
    },
    {
        'name': 'Hospitals',
        'id': 'hospitals',
        'source': 'hospitals',
        'directory': 'Other',
        'icon': '../../img/hospital-50.svg'
    },
    {
        'name': 'Shopping Centres',
        'id': 'shopping',
        'source': 'shopping',
        'directory': 'Other',
        'icon': '../../img/shopping-50.svg'
    },
    {
        'name': 'University',
        'id': 'university',
        'source': 'university',
        'directory': 'Other',
        'icon': '../../img/university-50.svg'
    },
    {
        'name': 'Major Housing Sites',
        'id': 'housing',
        'source': 'housing',
        'directory': 'Other',
    },
    {
        'name': 'Proposed Employment Sites',
        'id': 'employment',
        'source': 'employment',
        'directory': 'Other',
    },
];

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.ScaleControl());
map.addControl(new LayerTree({
    layers: layers
}), 'bottom-left');
