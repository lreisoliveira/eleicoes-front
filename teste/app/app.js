//Define an angular module for our app
var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('autocompleteController', function($scope, $http) {

  getCountries();

  function getCountries() {
    var cidades = [];
    $http.get("http://localhost:3000/json/cidades.json").success(function(data){
        for (a in data){
          for (b in data[a]){
            cidades.push({"cidade": data[a][b]['descricao'], "capital":  data[a][b]['slug'] });
          }
        }
        $scope.countries = cidades;
    });
  };

});
