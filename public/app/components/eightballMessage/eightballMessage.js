(function() {
  angular.module('VerdictApp')
  .component('eightballMessage', {
    templateUrl: 'app/components/eightballMessage/eightballMessage.html',
    controller: EightballMessage,
    controllerAs: 'eightballMessage'
  });

  function EightballMessage(EightballService) {
    var billsList = this;
    billsList.bills = [];

    EightballService.getAllEightballs(function(data) {
      console.log('firing get all eightballs', data);
      eightballMessage.eightballs = data.data;
      console.log('here are the eightballs: ', eightballMessage.eightballs);
    });


    // eightballMessage.addingEi = false;
    // billsList.addBill = function() {
    //   console.log('adding-bill!');
    //   billsList.addingBill = true;
    // }
  }

