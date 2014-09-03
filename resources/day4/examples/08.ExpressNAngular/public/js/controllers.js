myApp.controller("HomeCtrl", function($rootScope, $scope, moviesFactory) {

  $rootScope.currMovie = null;
  $rootScope.getMovieById = function(id) {
    var movies = $scope.movies;
    for (var i = 0; i < movies.length; i++) {
      var movie = $scope.movies[i];
      if (movie.id == id) {
        $rootScope.currMovie = movie;
      }
    }
  };

  moviesFactory.getData().then(function(data) {
    $scope.movies = data.data;
  })

});


myApp.controller("movieDetailsController", function($scope, $routeParams) {
  $scope.getMovieById($routeParams.id);
});
