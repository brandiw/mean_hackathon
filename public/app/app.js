angular.module('AirplaneApp', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/home.html',
    controller: 'HomeCtrl'
  })
  .state('airplane', {
    url: '/airplane/:id',
    templateUrl: 'app/views/displayAirplane.html',
    controller: 'AirplaneCtrl'
  })
  .state('edit-airplane', {
    url: '/airplane/:id/edit',
    templateUrl: 'app/views/editAirplane.html',
    controller: 'AirplaneCtrl'
  });

  $locationProvider.html5Mode(true);
}]);


