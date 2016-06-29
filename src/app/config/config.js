angular.module('App_websocket')

.factory('config', function() {
    var url = {
        websocket: '//localhost:3000/websocket',
    };

    return {
        url: url,
    }
});
