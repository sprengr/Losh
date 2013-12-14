Ext.define('LocationSharing.model.userModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'name', type: 'string' },
            //{ name: 'password', type: 'string' }
            { name: 'isLoggedIn', type: 'boolean'}
        ],
        proxy: {
        	type: 'localstorage',
        	reader: {
        		type: 'json',
        		root: 'currentUser'
        	}
        }
    }
});
