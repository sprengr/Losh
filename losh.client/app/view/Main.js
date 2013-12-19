Ext.define('LocationSharing.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    id: 'mainTabPanel',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
        fullscreen: true,

        items: [
            {
                id: 'mapTab',
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
                id: 'uploadTab',
                needsLogin: true,
                title: 'Upload',
                iconCls: 'arrow_up',  
                layout: 'card',
                styleHtmlContent: true,
                items:
                [
                    {
                        xtype : 'login',
                        needsLogin: false
                    },
                    {
                        xtype: 'upload',
                        needsLogin: true
                    }
                ]    
            },
            {
                id: 'historyTab',
                needsLogin: false,
                title: 'History',
                iconCls: 'list',
                layout: 'card',
                styleHtmlContent: true,
                items: 
                [
                    {
                       xtype : 'history',
                       needsLogin: false
                    }
                ]
            }
        ]
    }
});
