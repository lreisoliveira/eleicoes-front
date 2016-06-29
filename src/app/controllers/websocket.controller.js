angular.module('App_websocket')

.controller('WebsocketController', ['$compile', '$scope', '$interval', 'config', function($compile, $scope, $interval, config) {

    $scope.numero = '0';

    $scope.applyNarracaoWebsocketRails = function() {

    var dispatcher = new WebSocketRails(config.url.websocket);
    var channel    = dispatcher.subscribe('canal');

    channel.bind('conectados', function (conteudo) {
        console.log(conteudo);
    });

    channel.bind('evento', function (conteudo) {
      $scope.$apply( function () {
        $scope.numero = conteudo.numero;
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
