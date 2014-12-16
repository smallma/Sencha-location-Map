Ext.define("map.model.location", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: 'location', type: 'string'},
            { name: 'lat', type: 'auto'},
            { name: 'lon', type: 'auto'}
        ]
    }
});