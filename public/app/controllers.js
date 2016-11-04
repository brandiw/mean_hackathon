angular.module('VerdictApp')
.controller('CoinCtrl', ['$scope', function($scope) {
  console.log('ready');
  $scope.class = '';
  var spinArray = ['animation900','animation1080','animation1260','animation1440','animation1620','animation1800','animation1980','animation2160'];

  function getSpin() {
    var spin = spinArray[Math.floor(Math.random()*spinArray.length)];
    return spin;
  }

  $scope.clickCoin = function() {
  
    setTimeout(function(){
      $scope.class = '';
      $scope.class= getSpin();
    }, 100);
  }
}])
.controller('RandomNumCtrl', ['$scope', function($scope) {
  console.log("in randomNum controller");
  $scope.slider = {
   minValue: 0,
   maxValue: 1000,
   options: {
       floor: 0,
       ceil: 1000,
       step: 1
   }
  };

  $scope.randomNumber = function(min, max){
   console.log("randomNumber")
   return Math.floor(Math.random()*(max-min+1)+min);  
  }

  $scope.getNumber = function(){
   console.log("get Number")
   $scope.number = $scope.randomNumber($scope.slider.minValue, $scope.slider.maxValue);
  }
}]);