Ext.define('LocationSharing.controller.mapController', {
    extend: 'Ext.app.Controller',
    
    config: {
        routes: {
            'map': 'showMap'
        },
        control: {
            'mapoverview': { maprender:'onMaprender' }//,
            //'main': { activeitemchange: 'mainTabChange' }
        }
    },

    initializeMap: function(){
    	debugger;
    },

    onMaprender: function(comp, map) {
		var map = comp.getMap(),
			panMapToLocationFunction = this.panMapToLocationCreateFunction(map),
			locationupdateFunction = this.locationupdateCreateFunction(map),
			geoConfig = {autoUpdate: true,
				        allowHighAccuracy: true,
				        listeners: {
				            locationupdate: locationupdateFunction
				        }},
			geo = new Ext.util.Geolocation(geoConfig);
		// get location once to pan the map
		geo.updateLocation(panMapToLocationFunction);
    },

    panMapToLocationCreateFunction: function(map){
    	return function(geo){
			var lat = geo.getLatitude(),
	        	lon = geo.getLongitude(),
	        	coord = new google.maps.LatLng(lat, lon);
			map.panTo(coord);
    	};
    },

    locationupdateCreateFunction: function(map){
    	var self = this;
    	var currentPositionMarker;
    	var historyMarkers = [];

    	return function(geo) {
	        var lat = geo.getLatitude(),
	        	lng = geo.getLongitude(),
	        	coord = new google.maps.LatLng(lat, lng 	),
				markerStoreLocalStorage = Ext.getStore({ model: 'LocationSharing.model.markerModel'}),
				previousMarker = currentPositionMarker;

			if (self.positionChanged(previousMarker, geo)){
				if (previousMarker)
					self.removeMarker(previousMarker);

		        var marker = self.createNewMarker(map, lat, lng);
		        currentPositionMarker = marker;
		        self.findAndSetStreetName(map, geo, marker);

				markerStoreLocalStorage.load();

				for (var i = 0; i < historyMarkers.length; i++) {
					self.removeMarker(historyMarkers[i]);
				};
				historyMarkers = [];

				markerStoreLocalStorage.each(function(marker){
					//if (!!marker.data.visible){
						var historyMarkerOnMap = new google.maps.Marker({
					            position: new google.maps.LatLng(marker.data.latitude, marker.data.longitude),
					            title : marker.data.street,
					            map: map,
					            icon: LocationSharing.config.Config.getHistoryMarkerIcon()
					        });
						historyMarkers.push(historyMarkerOnMap);
					//}
				});
			}
	    };
	},

	positionChanged: function(geoOld, geoNew){
		return !geoOld
			|| (geoOld.position.lat() != geoNew.getLongitude()
				&& geoOld.position.lng() != geoNew.getLatitude());
	},

	createNewMarker: function(map, lat, lng){
		return new google.maps.Marker({
            position: new google.maps.LatLng(lat, lng),
            title : 'My Position',
            map: map
        });
	},

	findAndSetStreetName: function(map, geo, marker){
		var geocoder = new google.maps.Geocoder(),
			setSteetNameFunction = this.setSteetNameCreateFunction(marker, geo),
			latitude = geo.getLatitude(),
			longitude = geo.getLongitude(),
			googleLatLng = new google.maps.LatLng(latitude, longitude);

		geocoder.geocode({'latLng': googleLatLng}, setSteetNameFunction);
	},

	setSteetNameCreateFunction: function(marker, geo) {
		return function(results, status){
			var street = 'n/a';
			if (status == google.maps.GeocoderStatus.OK) {
				if (results[0]) {
					street = results[0].formatted_address;
				}
			}
			var markerModel = Ext.create('LocationSharing.model.markerModel', {
				latitude: geo.getLatitude(),
				longitude: geo.getLongitude(),
				street: street,
				visible: true,
				googleMarker: marker,
				type: 'currentPosition',
				id: 'currentMarker'
			});
            markerModel.save();
		};
	},

	removeMarker: function(marker){
		marker.setMap(null);
	}

});
