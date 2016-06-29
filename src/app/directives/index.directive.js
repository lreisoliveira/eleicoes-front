angular.module('App_websocket')

    .directive('ngMinhadiretiva', function() {
        var diretiva = {};
        diretiva.restrict = "E";
        diretiva.scope = {
            campeonato: "@numero"
        };
        diretiva.templateUrl = "/templates/index.html?" + Math.random();
        diretiva.controller = 'WebsocketController';
        return diretiva;
    });