Ext.define('LocationSharing.view.MapOverview', {
    extend: 'Ext.Map',
    xtype: 'mapoverview',
    //geo: Ext.util.Geolocation,
    //useCurrentLocation: Ext.util.Geolocation, //same var geo with geolocation object
    config: {
        mapOptions : {
            center : new google.maps.LatLng(51.381592, 0),
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
        }
    }
});