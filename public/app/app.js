angular.module('VerdictApp', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'app/views/home.html',
  })
  // .state('poll', {
  //   url: '/poll',
  //   templateUrl: 'app/views/poll.html',
  //   // controller: 'PollCtrl'
  // })
  .state('randomNum', {
    url: '/randomNum',
    templateUrl: 'app/views/randomNum.html',
    // controller: 'RandomNumCtrl'
  })
  .state('eightball', {
    url: '/eightball',
    templateUrl: 'app/views/eightball.html'
    // controller: 'eightballCtrl'
  })
  .state('coinFlip', {
    url: '/coinFlip',
    templateUrl: 'app/views/coinFlip.html',
    controller: 'CoinCtrl'
  })
  // .state('wheel', {
  //   url: '/wheel',
  //   templateUrl: 'app/views/wheel.html',
    // controller: 'WheelCtrl'
  // })
  .state('idea-generator', {
    url: '/ideaGen',
    templateUrl: 'app/views/ideaGen.html',
  })

  $locationProvider.html5Mode(true);
}]);

