Ext.define('LocationSharing.store.markerStoreLocal', {
    extend: "Ext.data.Store",
    config: {
        storeId: 'markerStoreLocalStorage',
        model: 'LocationSharing.model.markerModel'
        //autoLoad: true
    }
});