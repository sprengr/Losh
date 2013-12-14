Ext.define('LocationSharing.controller.historyController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {historyList:'#historyList'},
        control: {
            history : {
                'show': 'loadMarkers'
            }
        }
    },
    loadMarkers: function() {
        var markerStoreLocalStorage= Ext.getStore('markerStoreLocalStorage');

        if ((markerStoreLocalStorage.getCount()) <= 1) {
            Ext.Ajax.request(
            {
               url: 'http://localhost:8099/locations',
               method: 'GET',  
               /*params: {
               },*/
               success: function(response, opts) {
                  var obj = Ext.decode(response.responseText);
                  console.log('Loaded locations');

                  var responseJson = JSON.parse(response.responseText);
                  
                  for (var i = 0; i < responseJson.length; i++) {
                    markerStoreLocalStorage.add({
                        longitude: responseJson[i].longitude,
                        latitude: responseJson[i].latitude,
                        street: responseJson[i].street,
                        visible: false});
                  };
               },
               failure: function(response, opts) {
                  console.log('server-side failure with status code ' + response.status);
               }
            });
        }
        this.getHistoryList().setStore(markerStoreLocalStorage);
    }
});