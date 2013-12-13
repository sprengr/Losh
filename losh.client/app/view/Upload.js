Ext.define('LocationSharing.view.Upload', {
    extend: 'Ext.Panel',
    xtype: 'upload',

    config: {
        fullscreen: true,
        items: [
            {
                xtype: 'button',
                title: 'Upload',
                id: 'uploadButton'
            }
        ]
    }
});