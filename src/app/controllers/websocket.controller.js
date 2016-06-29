angular.module('App_websocket')

.controller('WebsocketController', ['$compile', '$scope', '$interval', 'config', function($compile, $scope, $interval, config) {

    $scope.mensagem = '--';
    $scope.usuarios = 'Carregando...';

    $scope.applyNarracaoWebsocketRails = function() {

    var dispatcher = new WebSocketRails(config.url.endpoint);
    var channel    = dispatcher.subscribe(config.websocket.canal);

    channel.bind(config.websocket.conectados, function (conteudo) {
        $scope.usuarios = conteudo.usuarios_conectados;
    });

    channel.bind(config.websocket.evento, function (conteudo) {
      $scope.$apply( function () {
        $scope.mensagem = conteudo.mensagem;
      });
    });

    $interval (function () {
      if(dispatcher.state != "connected") {
        dispatcher.reconnect();
      }
      if(dispatcher.state == "connected") {
        dispatcher.trigger('tasks.conectados');
      } else {
        console.log(dispatcher.state);
      }
    }, 5000);
    
    dispatcher.trigger('tasks.conectados');
  };

 $scope.applyNarracaoWebsocketRails();

}]);
