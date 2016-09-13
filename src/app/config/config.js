angular.module('App_eleicoes_resultado')

.factory('config', function() {

    var url = {
        json:         '//localhost:3000/json',
        endpoint:     'ws://10.6.4.9:28080/cable',
        abrangencias: '//localhost:3000/json/cidades.json'
    };

    var eleicao = {
        numero: 6434
    };

    var websocket = {
        canal:  'canal',
        evento: 'evento'
    };

    return {
        url: url,
        eleicao: eleicao,
        websocket: websocket
    }
});
