/**
 * Created by alpha on 19/02/17.
 */

(function() {
  'use strict';

  angular
    .module('angularPlaidAppApp')
    .controller('TransactionsController', function(transactionsData) {
      this.transperaccount = transactionsData.transactions;
    });
})();
