/**
 * Created by alpha on 19/02/17.
 */
(function () {
  'use strict';

  angular
    .module('angularPlaidAppApp')
    .controller('DashboardController', function (accountsData) {
      this.accounts = accountsData.accounts;

      this.transactions = accountsData.transactions;
    });
})();
