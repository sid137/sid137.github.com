function AppCtrl($scope, $routeParams, $http){
}

function ProjectDetailCtrl($scope, $routeParams, $http){
  $http.get('/javascripts/' + $routeParams.project + '.json').success(function(data){
    $scope.project = data;
  });
}
