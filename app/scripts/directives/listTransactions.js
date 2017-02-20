/**
 * Created by alpha on 19/02/17.
 */
(function () {
  'use strict';
  angular
    .module('angularPlaidAppApp')
    .directive('listTransactions', function () {
      return {
        scope: {
          list: '=transactionsList'
        },
        restrict: 'EA',
        controller: function ($scope) {
          $scope.listTransactions = $scope.list;
          console.log('mlj', $scope.list);
          $scope.order = {
            type: 'date'
          };
        },
        templateUrl: 'views/listTransactions.html'
      };
    });
})();
