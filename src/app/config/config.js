angular.module('App_websocket')

.factory('config', function() {
    var url = {
        endpoint: 'ws://10.6.4.9:28080/cable'
    };

    var websocket = {
        canal:      'canal',
        evento:     'evento'
    };

    return {
        url: url,
        websocket: websocket
    }
});
