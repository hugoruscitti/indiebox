var app = angular.module('app', []);
var fs = require('fs');
var exec = require('child_process').exec;
var path = require('path');

app.controller('AppCtrl', function($scope) {
  $scope.data = {};
  $scope.data.juegos = [];
  $scope.data.ejecutando = false;

  /* Busca los juegos en el directorio 'juegos' */
  fs.readdir('juegos/', function(error, data) {
    for (var i in data) {
      var directorio = data[i];

      console.log(directorio);

      if (/^[a-z]+$/.test(directorio)) {
      console.log(directorio);
        $scope.data.juegos.push({nombre: directorio});
      }
    }

    $scope.$apply();
  });


  /* Ejecuta el juego solicitado */
  $scope.ejecutar = function(nombre_del_juego) {
    $scope.data.ejecutando = true;

    var comando = path.join('juegos', nombre_del_juego, 'run.sh');
    var proceso = exec(comando);

    proceso.on('exit', function() {
      /* si, si, se 'come' el error y no dice nada... */
      $scope.data.ejecutando = false;
      $scope.$apply();
    });

  }

});
