angular.module('App_websocket')

.factory('config', function() {
    var url = {
        endpoint: '//localhost:3000/websocket'
    };

    var websocket = {
        canal:      'canal',
        evento:     'evento',
        conectados: 'conectados'
    };

    return {
        url: url,
        websocket: websocket
    }
});
