angular.module('AirplaneApp')
.controller('HomeCtrl', ['$scope', 'AirplaneService', function($scope, AirplaneService) {
  $scope.airplanes = [];
  $scope.newAirplane = {
    manufacturer: '',
    model: '',
    engines: '',
    image: ''
  }

  // Load all of the airplanes when the page first loads.
  getAllAirplanes();

  $scope.createAirplane = function() {
    AirplaneService.addAirplane($scope.newAirplane, function(res) {
      AirplaneService.getAllAirplanes(function(data) {
        $scope.airplanes = data.data;
      });
    });
  }

  $scope.deleteAirplane = function(airplane) {
    AirplaneService.deleteAirplane(airplane, function(res) {
      getAllAirplanes();
    });
  };

  function getAllAirplanes() {
    AirplaneService.getAllAirplanes(function success(res) {
      console.log("here is the res.data: ", res.data);
      $scope.airplanes = res.data;
    }, function error(res) {
      console.log(res);
    });
  }

  $scope.searchAirplanes = function(searchTerm) {
    console.log('seach button');
    searchTerm = searchTerm.toLowerCase();
      console.log(searchTerm);
      $scope.airplanes.filter(function(result){
        return result.toLowerCase().indexOf(searchTerm) !== -1;
      });
    };

}])
.controller('AirplaneCtrl', ['$scope', '$stateParams', '$state', 'AirplaneService',
    function($scope, $stateParams, $state, AirplaneService) {
  $scope.airplane = {
    manufacturer: '',
    model: '',
    engines: '',
    image: ''
  };

  var id = $stateParams.id;
  AirplaneService.getAirplane(id, function(res) {
    $scope.airplane = res.data;
  });

  $scope.updateAirplane = function() {
    AirplaneService.updateAirplane($scope.airplane, function(res) {
      $state.go('airplane', {id: $scope.airplane._id});
    });
  }
}]);
