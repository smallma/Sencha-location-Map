Ext.define('map.view.LocationInfo', {
    extend: 'Ext.Container',
    xtype: 'LocationInfo',

    config: {
        xtype: 'panel',
        layout: 'vbox',
        items: [
            {
                xtype: 'list',
                itemId: 'locationInfo',
                store: 'locations',
                flex: '1',
                emptyText: '',
                loadingText: 'Loading...',
                scrollable: 'vertical',
                onItemDisclosure : true,
                disableSelection: true,
                cls: 'locationInfo',
                itemTpl: new Ext.XTemplate(
                    '<div class="location">{location}</div>'
                )
            }
        ],
        listeners: [
            {
                delegate: '#locationInfo',
                event: 'itemtap',
                fn: 'onTapLocationInfo'
            }
        ]
    },
    onTapLocationInfo: function(list, index, target, record, evt) {
        this.fireEvent('tapLocationInfo', record);
    }
});