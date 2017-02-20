/**
 * Created by alpha on 19/02/17.
 */
(function() {

  'use strict';

  /**
   * @ngdoc function
   * @name angularPlaidAppApp.controller:LoginController
   * @description
   * # LoginController
   * Controller of the angularPlaidAppApp
   */
  angular
    .module('angularPlaidAppApp')
    .controller('LoginController', function(PlaidApiService, $state, $mdToast) {

      this.submit = submit;

      this.credentials = {
        username: '',
        password: ''
      };

      this.selectedBank = 'wells';

      this.bankList = {
        bofa: 'Bank of america',
        wells: 'Wells Fargo',
        chase: 'Chase'
      };
      var self = this;


      function submit() {
        PlaidApiService.connect(self.credentials.username, self.credentials.password, self.selectedBank).then(function(data) {
          self.accounts = data.accounts;
          self.transactions = data.transactions;
          $state.go('dashboard');
        }, function(err) {
          self.credentials.password = '';
          $mdToast.show(
            $mdToast.simple()
              .textContent(err.message)
              .hideDelay(3000)
          );
          $state.go('login');
        });
      }
    });
})();
