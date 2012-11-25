
var App = angular.module('App', []);

App.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

App.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider.when('/', {templateUrl: 'partials/index.html'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html'});
  $routeProvider.otherwise({redirectTo: '/'});

}]);
