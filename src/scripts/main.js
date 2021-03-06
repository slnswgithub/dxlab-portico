require.config({
    "baseUrl": "dist/assets/scripts/modules",
    "paths": {
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
        'underscore': "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min",
        'backbone': 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min',
        'libs': '../libs',
        'base': '../'
    },
    'shim': {
        'underscore': {
            exports: '_',
        },
        'backbone': {
            exports: 'Backbone',
            deps: ['underscore'],
        },
        'libs/jquery.idle/jquery.idle.min': {
            deps: ['jquery'],
        }
    }
});

require(['base/config.min']);
require(['app.min']);