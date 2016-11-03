(function() {
  angular.module('VerdictApp')
  .component('eightballMessage', {
    templateUrl: 'app/components/eightballMessage/eightballMessage.html',
    controller: EightballMessage,
    controllerAs: 'eightballmsg'
  });

  function EightballMessage(EightballService) {
    var eightballmsg = this;
    eightballmsg.eightballs = [];

    EightballService.getAllEightballs(function(data) {
      eightballmsg.eightballs = data.data;

      var randomIndex = Math.floor((Math.random() * 5));
      eightballmsg.randommsg = data.data[randomIndex].content;

    });

    console.log('HUZZAH!');

    eightballmsg.shakeIt = function() {
        console.log('ITS SHAKING');
      }

  }


  EightballMessage.$inject = ['EightballService'];
})()