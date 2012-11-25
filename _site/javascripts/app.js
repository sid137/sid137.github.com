// hello world
myModule = angular.module('myModule', []);

myModule.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
      $interpolateProvider.endSymbol(']]');
});

