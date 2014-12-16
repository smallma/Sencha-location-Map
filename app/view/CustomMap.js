Ext.define('map.view.CustomMap', {
    extend: 'Ext.Map',
    xtype: 'CustomMap',

    config: {
        mapOptions: {
            center: new google.maps.LatLng (map.config.lat, map.config.lon),
            // disableDefaultUI: true,
            mapTypeControl: false,
            // zoomControl: false,
            streetViewControl: false,
            zoom: 17
        },
    }
});