
var App = angular.module('App', []);

App.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

App.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider.when('/', {templateUrl: 'main.html'});
  $routeProvider.when('/about.html', {templateUrl: 'about.html'});
  $routeProvider.when('/contact.html', {templateUrl: 'contact.html'});
  $routeProvider.when('/projects/:project', {templateUrl: 'project_detail.html', controller: "ProjectDetailCtrl"});
  $routeProvider.otherwise({redirectTo: '/'});

}]);

App.run(function($rootScope){
  $rootScope.contact = {}; 

  $rootScope.projects = [
    {
      thumbnail: "img/atoms_mot.small.jpg",
      alt: "Magneto-optical trap containing atomic storage medium",
      page: "/projects/quantum_memory",
      title: "Quantum Memory for Squeezed Light",
      description: "Developing the building blocks for the computers of tomorrow.  Storing information onto atoms using light"
    },
    {
      thumbnail: "img/flowers-lg.jpg",
      alt: "Transcription of phone call audio",
      page: "/projects/roger",
      title: "\"Roger\" Speech Transcription",
      description: "An application to improve the quality of life of the hearing-impaired, by providing easier communications mechanism."
    },
    {
      thumbnail: "img/leaves-lg.jpg",
      alt: "BillFloat.com web site",
      page: "/projects/ruby_on_rails",
      title: "Ruby on Rails",
      description: "Front and backend web development for Billfloat.com, using Ruby on Rails"
    }
  ];

  $rootScope.links = {
    twitter_url: "https://twitter.com/sid137",
    linked_in_url: "http://www.linkedin.com/in/sid137",
    google_plus_url: "http://plus.google.com/105375603751571213131/about",
    github_url: "https://github.com/sid137",
    stack_overflow_url: "http://stackoverflow.com/users/262972/noli"
  };

});
