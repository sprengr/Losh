Ext.define('LocationSharing.model.markerModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'latitude', type: 'float' },
            { name: 'longitude', type: 'float' }
        ],
        proxy: {
        	type: 'localstorage',
        	reader: {
        		type: 'json',
        		root: 'currentMarker'
        	}
        }
    }
});