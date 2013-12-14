Ext.define('LocationSharing.store.markerStore', {
 extend: 'Ext.data.Store',
 requires: [
        'Ext.data.proxy.JsonP',
        'LocationSharing.model.markerModel'
    ],
    
 config: {
   autoLoad: true,
   model: 'LocationSharing.model.markerModel',
   storeId: 'markerStore',
   autoSync: true,
   proxy: {
		type: 'jsonp',
		callbackKey: 'callback',
		url: 'http://localhost:8099/locations',
		reader: {
		    type: 'json'//,
		    //rootProperty: 'data',
		    //successProperty: 'success'
		}
	}
 }
});