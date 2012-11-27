
var App = angular.module('App', []);

App.links = {
  blog_url: "http://www.sid137.com", 
  twitter_url: "https://twitter.com/sid137",
  linked_in_url: "http://www.linkedin.com/in/sid137",
  google_plus_url: "http://plus.google.com/105375603751571213131/about",
  github_url: "https://github.com/sid137",
  stack_overflow_url: "http://stackoverflow.com/users/262972/noli",
  root_url: "/", 
  about_url: "/about",
  contact_url: "/contact",
  projects_url: "/projects/:project"
};

App.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

App.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider.when(App.links.root_url, {templateUrl: 'main.html'});
  $routeProvider.when(App.links.about_url, {templateUrl: 'about.html'});
  $routeProvider.when(App.links.contact_url, {templateUrl: 'contact.html'});
  $routeProvider.when(App.links.projects_url, {templateUrl: 'project_detail.html', controller: "ProjectDetailCtrl"});
  $routeProvider.otherwise({redirectTo: App.links.root_url});

}]);

App.run(function($rootScope){
  $rootScope.contact = {}; 

  $rootScope.projects = [
    {
      thumbnail: "/img/atoms_mot.small.jpg",
      alt: "Magneto-optical trap containing atomic storage medium",
      page: "/projects/quantum_memory",
      name: "quantum_memory",
      title: "Quantum Memory for Squeezed Light",
      description: "Developing the building blocks for the computers of tomorrow.  Storing information onto atoms using light"
    },
    {
      thumbnail: "/img/flowers-lg.jpg",
      alt: "Transcription of phone call audio",
      page: "/projects/roger",
      name: "roger", 
      title: "\"Roger\" Speech Transcription",
      description: "An application to improve the quality of life of the hearing-impaired, by providing easier communications mechanism."
    },
    {
      thumbnail: "/img/leaves-lg.jpg",
      alt: "BillFloat.com web site",
      page: "/projects/ruby_on_rails",
      name: "ruby_on_rails",
      title: "Ruby on Rails",
      description: "Front and backend web development for Billfloat.com, using Ruby on Rails"
    }
  ];

  $rootScope.links = App.links;

});
