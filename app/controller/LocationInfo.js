Ext.define('map.controller.LocationInfo', {
    extend: 'Ext.app.Controller',
    requires: 'map.view.LocationInfo',

    config: {
        refs: {
            infoView: {
                selector: 'LocationInfo',
                xtype: 'LocationInfo',
                autoCreate: true
            },
            mainView: {
                selector: 'main',
                xtype: 'main',
                autoCreate: true
            }
        },
        control: {
            infoView: {
                tapLocationInfo: 'onTapLocationInfo'
            }
        }
    },
    onTapLocationInfo: function(record) {
        var mainView = this.getMainView(),
            mapView = mainView.down('#maps');

        mainView.setActiveItem(0);
        Ext.Viewport.animateActiveItem(mainView, { type: 'slide', direction: 'right' });

        mapView.setMapCenter({
            latitude: record.get('lat'),
            longitude: record.get('lon')
        });
    }
});