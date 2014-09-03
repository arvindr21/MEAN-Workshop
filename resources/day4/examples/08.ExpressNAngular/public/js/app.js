var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    }).when('/movie/:id', {
      templateUrl: 'partials/movie.html',
      controller: 'movieDetailsController'
    }).otherwise({
      redirectTo: '/'
    });
});
