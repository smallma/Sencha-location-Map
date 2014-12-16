Ext.define('map.view.Main', {
    extend: 'Ext.tab.Panel',
    requires: [
        'map.view.CustomMap',
        'map.view.LocationInfo'
    ],
    xtype: 'main',

    config: {

        tabBarPosition: 'bottom',
        items: [
            {
                title: 'Map',
                iconCls: 'maps',
                layout: 'fit',
                items:[
                    {
                        xtype: 'CustomMap',
                        itemId: 'maps'
                    }
                ]
            },
            {
                title: 'Locations',
                iconCls: 'action',
                layout: 'fit',
                items: [
                    {
                        xtype: 'LocationInfo'
                    }
                ]
            }
        ]
    }
});