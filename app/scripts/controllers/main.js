/**
 * Created by alpha on 19/02/17.
 */
(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name angularPlaidAppApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the angularPlaidAppApp
   */
  angular
    .module('angularPlaidAppApp')
    .controller('MainController', function () {
      this.accounts = {};
      this.transactions = {};

    });
})();
