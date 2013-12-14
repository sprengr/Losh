Ext.define('LocationSharing.view.History', {
    extend: 'Ext.List',
    xtype: 'history',
    id: 'historyList',
    config: {
        title: 'History',
        itemTpl: '{street} ({latitude} {longitude})',
       store: 'LocationSharing.store.markerStore'
    }
    
});