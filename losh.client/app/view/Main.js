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
                title: 'Map',
                iconCls: 'action',
                layout: 'fit',
                items: 
                [
                    {
                          xtype : 'mapoverview'
                    }
                ]
                
            },
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },

                html: [
					"fuu fuuuu uuuuu"
                ].join("")
            }
        ]
    }
});
