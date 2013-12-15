Ext.define('LocationSharing.view.History', {
    extend: 'Ext.List',
    xtype: 'history',
    id: 'historyList',
    config: {
        title: 'History',
        itemTpl: '<h3>{street}</h3>({latitude} {longitude})',
       store: 'LocationSharing.store.markerStore'
    }
    
});