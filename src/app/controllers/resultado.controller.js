angular.module('App_eleicoes_resultado').config(['$locationProvider', function($locationProvider) {  }])

.controller('ResultadoController', ['$location', '$compile', '$scope', '$interval', 'config', '$timeout','EleicoesApi', function($location, $compile, $scope, $interval, config, $timeout, EleicoesApi) {

    $scope.resultado    = '';
    $scope.tentativas   = 1;
    $scope.load         = 0;
    abrangencias        = EleicoesApi.getAbrangencias();
    cidades             = [];
    cidade_default      = 'sp_sao-paulo';

    for (uf in abrangencias) {
      for (b in abrangencias[uf]) {
        cidades.push({"cidade": abrangencias[uf][b]['descricao'], "uf": uf, "uf_cidade": uf.toLowerCase() + '_' + abrangencias[uf][b]['slug'] });
      }
    }
    $scope.cidades = cidades;

    $scope.applyResultadoJson = function() {
      $scope.resultado_json = EleicoesApi.getResultado($scope.cidade);
      if ($scope.resultado_json != null) {
        $scope.resultado = $scope.resultado_json;
      }
    }

    $scope.applyResultadoWebsocket = function() {
        if ($scope.resultado_json == null) return;
        var ws = new WebSocketActionCable(config.url.endpoint);
        ws.conexao(function(conexao) {
            if (conexao) {
              $scope.tentativas = 1;
              return;
            }
            $scope.tentativas = $scope.tentativas + 1;
            if ($scope.tentativas > 5) {
                $scope.$apply(function() {
                $scope.applyResultadoJson();
              });
            }
        });

        ws.bind('ResultadoCidadeChannel', { uf_cidade: $scope.cidade }, function(conteudo) {
          console.log(JSON.parse(conteudo));
          $scope.$apply(function() {
            $scope.resultado = JSON.parse(conteudo);
            if ($scope.load == 1) {
              document.getElementById('som_evento').play();
            }
            $scope.load = 1;
          });
        });
    };

    $scope.$watch('cidade_selecionada', function(cidade) {
      if (typeof cidade == 'object') {
        window.location.href = $location.protocol() + '://' + $location.host() + '?cidade=' + cidade['uf_cidade'];
      }
    });

    $scope.applyResultado = function(uf_cidade) {
      $scope.cidade = uf_cidade;
      $scope.applyResultadoJson();
      $scope.applyResultadoWebsocket();
    }

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    cidade = getParameterByName('cidade');
    if (typeof cidade == 'string') {
      cidade_default = cidade;
    }

    $scope.applyResultado(cidade_default);
}]);
