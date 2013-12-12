Ext.define('LocationSharing.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',
        fullscreen: true,

        items: [
            {
                title: 'Upload',
                iconCls: 'maps',
                layout: 'fit',
                items: 
                [
                    {
                          xtype : 'mapoverview'
                    }
                ]
                
            },
            {
                title: 'Map',
                iconCls: 'maps',
                layout: 'fit',
                items: 
                [
                    {
                          xtype : 'mapoverview'
                    }
                ]
                
            },
            {
                title: 'History',
                iconCls: 'maps',
                layout: 'fit',
                items: 
                [
                    {
                          xtype : 'mapoverview'
                    }
                ]
                
            },
            {
                title: 'Login',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: [
                    {
                          xtype : 'login'
                    }
                ]

            }
        ]
    }
});
