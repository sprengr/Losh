Ext.define('LocationSharing.controller.mapController', {
    extend: 'Ext.app.Controller',
    
    config: {
        routes: {
            'map': 'showMap'
        },
        refs: {
            
        },
        control: {
            'mapoverview': { maprender:'onMaprender' }
        }
    },

    onMaprender: function(comp, map) {
        // debugger;
	    var geo = new Ext.util.Geolocation({
	        autoUpdate: true,
	        allowHighAccuracy: true,
	        listeners: {
	            locationupdate: function(geo) {
					console.debug(arguments);
	            	// debugger;
	                lat = geo.getLatitude();
	                lon = geo.getLongitude();
	                var coord = new google.maps.LatLng(lat, lon);
					var currentMap = comp.getMap();
					currentMap.panTo(coord);
			        var marker = new google.maps.Marker({
			            position: new google.maps.LatLng(geo.getLatitude(), geo.getLongitude()),
			            title : 'Sencha HQ',
			            map: currentMap
			        });

			        google.maps.event.addListener(marker, 'click', function() {
						console.debug(arguments);
			            infowindow.open(map, marker);
			        });
			        // setTimeout(function() {
			            // map.panTo(new google.maps.LatLng(37.44885, -122.158592));
			        // }, 1000);
	                // here comes processing the coordinates   
	            }
	        }
	    });
    }

});
