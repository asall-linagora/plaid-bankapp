/**
 * Created by alpha on 19/02/17.
 */
(function () {
  'use strict';

  angular
    .module('angularPlaidAppApp')
    .config(function(RestangularProvider) {
      RestangularProvider.setDefaultHeaders({'Content-Type': 'application/json'});
    })
    .run(function (bankAppKeys, Restangular) {
      Restangular.setBaseUrl(bankAppKeys.plaidAPI);
    });
})();
