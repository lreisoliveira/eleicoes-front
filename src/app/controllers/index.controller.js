angular.module('App_eleicoes_resultado')

    .controller('indexController', ['$scope', '$compile', function($scope, $compile) {
        $scope.receber = function() {
            var diretiva = $compile('<ng-diretivaresultado></ng-diretivaresultado>')($scope);
            jQuery("#conteudo").html('');
            jQuery("#conteudo").append(diretiva);
        };
    }]);
