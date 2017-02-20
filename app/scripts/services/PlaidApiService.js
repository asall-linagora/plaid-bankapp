/**
 * Created by alpha on 19/02/17.
 */
(function () {
  'use strict';

  angular
    .module('angularPlaidAppApp')
    .factory('PlaidApiService', function (Restangular, bankAppKeys, $q) {

      var defered = $q.defer();
      var access_token = '';

      return {
        connect: connectAPI,
        getData: getData
      };

      //connect to api using credentials
      function connectAPI(username, password, type) {
        Restangular.one('connect').customPOST({
          client_id: bankAppKeys.credentials.client_id,
          secret: bankAppKeys.credentials.secret, type: type,
          username: username, password: password
        }).then(function(data) {
          defered = $q.defer();
          defered.resolve(data);
          access_token = data.access_token;
        }, function(err) {
          access_token = '';
          defered.reject(err.data);
        });
        return defered.promise;
      }

      //getData when user is authenticated
      function getData(options) {
        return Restangular.one('connect').one('get').customPOST({
          client_id: bankAppKeys.credentials.client_id,
          secret: bankAppKeys.credentials.secret,
          access_token: access_token,
          options: options
        });
      }
    });


})();
