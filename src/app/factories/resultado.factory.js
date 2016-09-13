angular.module('App_eleicoes_resultado')

    .factory('EleicoesApi', function (config) {

      var getAbrangencias = function() {
          var content = null;
          jQuery.ajax({
              type: 'GET',
              url: config.url.abrangencias + '?cache=' + Math.random(),
              cache: false,
              async: false,
              crossDomain: true
          }).done( function (response) {
              content = response;
          }).fail( function(response) {
              content = null;
              console.log('Error: getAbrangencias', response);
          });
          return content;
      };

        var getResultado = function(estado_cidade) {
            uf     = estado_cidade.split('_')[0];
            cidade = estado_cidade.split('_')[1];
            var content = null;
            jQuery.ajax({
                type: 'GET',
                url: config.url.json + '/' + config.eleicao.numero + '/' + uf + '/' + cidade + '.json?cache=' + Math.random(),
                cache: false,
                async: false,
                crossDomain: true
            }).done( function (response) {
                content = response;
            }).fail( function(response) {
                content = null;
                console.log('Error: getResultado', response);
            });
            return content;
        };

        return {
            getAbrangencias: getAbrangencias,
            getResultado:    getResultado
        }
    });
