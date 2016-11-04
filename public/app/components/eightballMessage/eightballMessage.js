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

    eightballmsg.shaking = false;

    eightballmsg.shakeIt = function() {
        eightballmsg.shaking = true;
        $('#message1').css("color", "red");
        $('#eightball').effect("shake");
        //shakeWait();
        console.log('shaking?', eightballmsg.shaking);
        setTimeout(function() {
          eightballmsg.shaking = false;
          $('#message1').css("color", "white");
          console.log('timeout: ', eightballmsg.shaking);
        }, 2000);
    }





  }


  EightballMessage.$inject = ['EightballService'];
})()