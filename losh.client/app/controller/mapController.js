Ext.define('LocationSharing.controller.mapController', {
    extend: 'Ext.app.Controller',
    
    config: {
        routes: {
            'map': 'showMap'
        },
        control: {
            'mapoverview': { maprender:'onMaprender' }
        }
    },

    onMaprender: function(comp, map) {
	    var geo = new Ext.util.Geolocation({
	        autoUpdate: true,
	        allowHighAccuracy: true,
	        listeners: {
	            locationupdate: function(geo) {
	                lat = geo.getLatitude();
	                lon = geo.getLongitude();
	                var coord = new google.maps.LatLng(lat, lon);
					var currentMap = comp.getMap();
					currentMap.panTo(coord);
			        var marker = new google.maps.Marker({
			            position: new google.maps.LatLng(geo.getLatitude(), geo.getLongitude()),
			            title : 'My Position',
			            map: currentMap
			        });

			        //get street name from google maps
					var geocoder = new google.maps.Geocoder();
					geocoder.geocode({'latLng': new google.maps.LatLng(geo.getLatitude(), geo.getLongitude())}, function(results, status) {
						var street = 'n/a';
						if (status == google.maps.GeocoderStatus.OK) {
							if (results[0]) {
								street = results[0].formatted_address;
							}
						} 
						//update location in localstorage
						var markerModel = Ext.create('LocationSharing.model.markerModel', {
							latitude: geo.getLatitude(),
							longitude: geo.getLongitude(),
							street: street,
							visible: true,
							id: 'currentMarker'
						});
						markerModel.save();
				    });

			        google.maps.event.addListener(marker, 'click', function() {
						console.debug(arguments);
			            infowindow.open(map, marker);
			        });
	            }
	        }
	    });
    }

});
