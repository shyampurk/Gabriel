/*globals require*/
require.config({
    shim: {

    },
    paths: {
        famous: '../lib/famous/src',
        requirejs: '../lib/requirejs/require',
        almond: '../lib/almond/almond',
        ionicons: '../lib/ionicons/fonts/*',
        jquery: '../lib/jquery/dist/jquery'
    },
    packages: [

    ]
});
require(['main']);
