var app = angular.module('meanWorkshop', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/welcome.html'
      }).when('/day1', {
        templateUrl: '/partials/day1.html'
      }).when('/day2', {
        templateUrl: '/partials/day2.html'
      }).when('/day3', {
        templateUrl: '/partials/day3.html'
      }).when('/day4', {
        templateUrl: '/partials/day4.html'
      }).when('/day5', {
        templateUrl: '/partials/day5.html'
      }).otherwise({
        redirectTo: '/'
      });
  });
