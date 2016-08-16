angular.module('App_websocket')

    .directive('ngMinhadiretiva', function() {
        var diretiva = {};
        diretiva.restrict = "E";
        diretiva.scope = {
            campeonato: "@numero"
        };
        diretiva.controller  = 'WebsocketController';
        diretiva.templateUrl = "/templates/index.html?" + Math.random();
        return diretiva;
    });