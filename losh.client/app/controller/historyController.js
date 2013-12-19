Ext.define('LocationSharing.controller.historyController', {
    extend: 'Ext.app.Controller',
    config: {
        id: 'historyController',
        refs: {historyList:'#historyList'},
        control: {
            history : {
                'show': 'loadMarkers',
                'selectionchange': 'showMarker',
                'itemtap': 'itemtap'
            }
        }
    },

    loadMarkers: function() {
        var markerStoreLocalStorage = Ext.getStore('markerStoreLocalStorage');
        var self = this;
        //if ((markerStoreLocalStorage.getCount()) <= 1) {
            Ext.Ajax.request(
            {
               url: LocationSharing.config.Config.getLocationsUrlGet(),
               method: 'GET',  
               success: function(response, opts) {
                  var obj = Ext.decode(response.responseText);
                  console.log('Loaded locations');
                  
                  markerStoreLocalStorage.removeAll();

                  var responseJson = JSON.parse(response.responseText);
                  for (var i = 0; i < responseJson.length; i++) {
                    markerStoreLocalStorage.add({
                        longitude: responseJson[i].longitude,
                        latitude: responseJson[i].latitude,
                        date: responseJson[i].date,
                        user: responseJson[i].name,
                        street: responseJson[i].street,
                        visible: false,
                        type: 'history'});
                  };
                  markerStoreLocalStorage.sync();
                  markerStoreLocalStorage.filter('type', 'history');
                  self.getHistoryList().setStore(markerStoreLocalStorage);
               },
               failure: function(response, opts) {
                  console.log('server-side failure with status code ' + response.status);
               }
            });
        //}
    },

    itemtap: function(list, index, target, record) {
        record.data.visible = !record.data.visible;
        record.save();
    },

    showMarker: function(){
        //debugger;
    }
});