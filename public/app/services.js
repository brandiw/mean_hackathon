angular.module('AirplaneApp')
.service('AirplaneService', ['$http', function($http) {
  //show all airplanes
  this.getAllAirplanes = function(callback) {
    $http({
      url: '/api/airplanes',
      method: 'GET'
    }).then(function(res) {
      callback(res);
      console.log('callback: ', res)
    }, function error(res) {
      console.log(res);
    });
  };

  //show one airplanes details
  this.getAirplane = function(id, callback) {
    $http.get('/api/airplanes/' + id).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  }

  //edit one airplance
  this.updateAirplane = function(airplane, callback) {
    $http.put('/api/airplanes/' + airplane._id, airplane).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  }

  //create new airplane
  this.addAirplane = function(airplaneData, callback) {
    $http.post('/api/airplanes', airplaneData).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  }

  //delete one airplane
  this.deleteAirplane = function(airplane, callback) {
    $http.delete('/api/airplanes/' + airplane._id).then(function success(res) {
      callback(res);
    }, function error(res) {
      console.log(res);
    });
  }
}]);
