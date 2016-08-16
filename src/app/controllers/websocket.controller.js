angular.module('App_websocket')

.controller('WebsocketController', ['$compile', '$scope', '$interval', 'config', function($compile, $scope, $interval, config) {

    $scope.mensagem = '--';
    $scope.usuarios = 'Carregando...';

    $scope.applyNarracaoWebsocketRails = function() {
        var ws = new WebSocketActionCable(config.url.endpoint);
        ws.bind('TestChannel', {evento: 1}, function(conteudo) {
          console.log('content', conteudo);
        });
    };
    $scope.applyNarracaoWebsocketRails();
}]);
