Ext.define('LocationSharing.view.MapOverview', {
    extend: 'Ext.Map',
    xtype: 'mapoverview',
    //geo: Ext.util.Geolocation,
    //useCurrentLocation: Ext.util.Geolocation, //same var geo with geolocation object
    config: {
        mapOptions : {
            center : new google.maps.LatLng(37.381592, -122.135672),  //nearby San Fran
            zoom : 12,
            mapTypeId : google.maps.MapTypeId.ROADMAP,
            navigationControl: true,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.DEFAULT
            },
            //useCurrentLocation: true
        },
        /*plugins : [
            new Ext.plugin.google.Tracker({
                trackSuspended: true,   //suspend tracking initially
                allowHighAccuracy: false,
                marker: new google.maps.Marker({
                    position: position,
                    title: 'My Current Location',
                    shadow: shadow,
                    icon: image
                })
            }),
            new Ext.plugin.google.Traffic()
        ],*/

        listeners: {
            maprender: function(comp, map) {
                //debugger;
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(37.44885, -122.158592),
                    title : 'Sencha HQ',
                    map: map
                });

                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map, marker);
                });

                setTimeout(function() {
                    map.panTo(new google.maps.LatLng(37.44885, -122.158592));
                }, 1000);
            }

        }
    }
});