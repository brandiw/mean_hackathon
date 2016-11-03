// (function() {
//   angular.module('Splitwise')
//   .component('billsList', {
//     templateUrl: 'app/components/billsList/billsList.html',
//     controller: BillsList,
//     controllerAs: 'billsList'
//   });

//   function BillsList(BillsService) {
//     var billsList = this;
//     billsList.bills = [];

//     BillsService.getAllBills(function(data) {
//       console.log('firing get all bills', data);
//       billsList.bills = data.data;
//       console.log('here are the bills: ', billsList.bills);
//     });


//     billsList.addingBill = false;
//     billsList.addBill = function() {
//       console.log('adding-bill!');
//       billsList.addingBill = true;
//     }
//   }
