angular.module('App_eleicoes_resultado')

    .directive('ngDiretivaresultado', function() {
        var diretiva = {};
        diretiva.restrict = "E";
        diretiva.controller  = 'ResultadoController';
        diretiva.templateUrl = "/templates/index.html?" + Math.random();
        return diretiva;
    });
