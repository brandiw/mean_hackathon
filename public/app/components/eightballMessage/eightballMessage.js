(function() {
  angular.module('VerdictApp')
  .component('eightballMessage', {
    templateUrl: 'app/components/eightballMessage/eightballMessage.html',
    controller: EightballMessage,
    controllerAs: 'eightballmsg'
  });

  function EightballMessage(EightballService) {
    console.log('firing eightball controller');
    var eightballmsg = this;
    eightballmsg.eightballs = [];

    EightballService.getAllEightballs(function(data) {
      console.log('firing get all eightballs HERE data.data', data.data[1].content);
      console.log('firing get all eightballs HERE data', data);
      eightballmsg.eightballs = data.data;

      var randomIndex = Math.floor((Math.random() * 5));
      eightballmsg.randommsg = data.data[randomIndex].content;
    });

    console.log('HUZZAH!');
  }

  EightballMessage.$inject = ['EightballService'];
})()