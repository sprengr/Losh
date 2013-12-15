Ext.define('LocationSharing.model.markerModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'latitude', type: 'float' },
            { name: 'longitude', type: 'float' },
            { name: 'visible', type: 'boolean' },
            { name: 'street', type: 'string' },
            { name: 'googleMarker'},
            { name: 'type', type: 'string'}
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