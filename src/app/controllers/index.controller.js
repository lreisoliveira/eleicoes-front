angular.module('App_websocket')

    .controller('indexController', ['$scope', '$compile', function($scope, $compile) {
        $scope.receber = function() {
            var diretiva = $compile('<ng-minhadiretiva></ng-minhadiretiva>')($scope);
            jQuery("#conteudo").html('');
            jQuery("#conteudo").append(diretiva);
        };
    }]);