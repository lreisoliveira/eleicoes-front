angular.module('App_aovivo-eventos')

    .factory('EventosApi', function (config) {

        var getEvento = function(params) {
            var content = null;
            if (params == false) {
                console.log('Não foi informado o id do evento');
                return content;
            }

            jQuery.ajax({
                url: config.url.json + '/' + params.id + '.json?q=' + Math.random(),
                async: false,
                crossDomain: true
            }).success( function (response) {
                content = response;
            }).error( function(response) {
                content = null;
                console.log('Error: getEvento', response);
            });

            return content;
        };

        return {
            getEvento: getEvento
        }
    });
