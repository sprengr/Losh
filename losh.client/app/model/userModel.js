Ext.define('LocationSharing.model.userModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'name', type: 'string' },
            { name: 'password', type: 'string' }
        ],
        proxy: {
        	type: 'memory',
        	reader: {
        		type: 'json',
        		root: 'currentUser'
        	}
        }
    }
});
