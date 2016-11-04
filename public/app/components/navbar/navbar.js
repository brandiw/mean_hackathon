(function() {
  angular.module('VerdictApp')
  .component('navBar', {
    templateUrl: 'app/components/navbar/navbar.html',
    controller: Navbar,
    controllerAs: 'navbar'
  });

  function Navbar() {
    
  }

  EightballMessage.$inject = [];
})()