Ext.define('map.store.locations', {
    extend: 'Ext.data.Store',
    requires: 'map.model.location',

    config: {
        model: 'map.model.location',
        data: [
            {
                'location': 'Quanta Computer lnc.',
                'lat': 25.049726,
                'lon': 121.3754241
            },
            {
                'location': 'Taipei 101',
                'lat': 25.033493,
                'lon': 121.564100999999940000
            },
            {
                'location': 'Grand Hotel',
                'lat': 25.0778045,
                'lon': 121.5260285
            },
            {
                'location': 'Miramar Cinemas',
                'lat': 25.0832989,
                'lon': 121.5573333
            },
            {
                'location': 'Cihu Mausoleum',
                'lat': 24.840365,
                'lon': 121.294271
            },
            {
                'location': '4 Grass',
                'lat': 23.046346,
                'lon': 120.141461
            }
        ]
    }
});