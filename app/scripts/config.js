/**
 * Created by alpha on 19/02/17.
 */

(function () {
  'use strict';

  angular
    .module('angularPlaidAppApp')
    .constant('bankAppKeys', {
      credentials: {
        //those must be saved in ENV/Server
        client_id: 'test_id',
        secret: 'test_secret'
      },
      plaidAPI: '/' //https://tartan.plaid.com'
    });
})();

