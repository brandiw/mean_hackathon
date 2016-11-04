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


    eightballmsg.shakeIt = function() {
      var eightballmsg = this;
      eightballmsg.eightballs = [];

      EightballService.getAllEightballs(function(data) {
        eightballmsg.eightballs = data.data;

        var randomIndex = Math.floor((Math.random() * 5));
        eightballmsg.randommsg = data.data[randomIndex].content;
      });



        $('#message1').css("color", "#000080");
        $('#eightball').effect("shake");
        //shakeWait();
        console.log('shaking?', eightballmsg.shaking);
        setTimeout(function() {
          eightballmsg.shaking = false;
          $('#message1').css("color", "white");
          console.log('timeout: ', eightballmsg.shaking);
        }, 1000);
    }





  }


  EightballMessage.$inject = ['EightballService'];
})()