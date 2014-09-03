myApp.factory('moviesFactory', function($http) {
  return {
    getData: function() {
      return $http.get('/data');
    }
  }
});
