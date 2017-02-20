/**
 * Created by alpha on 19/02/17.
 */
(function () {
  'use strict';

  angular
    .module('angularPlaidAppApp')
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider

        .state('home', {
          url: '/',
          templateUrl: 'views/login.html',
          controller: 'LoginController',
          controllerAs: 'login'
        })

        .state('login', {
          url: '/login',
          templateUrl: 'views/login.html',
          controller: 'LoginController',
          controllerAs: 'login'
        })

        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'views/dashboard.html',
          controller: 'DashboardController',
          controllerAs: 'dashboard',
          resolve: {
            accountsData: function(PlaidApiService, $state) {
              return PlaidApiService.getData({pending: true}).then(function(data) {
                return data;
              }, function() {
                $state.go('login');
              });
            }
          }
        })

        .state('dashboard.transactions', {
          url:'/account/:id',
          params: {
            id: null
          },
          templateUrl: 'views/transactions.html',
          controller: 'TransactionsController',
          controllerAs: 'transactions',
          resolve: {
            transactionsData: function($stateParams, PlaidApiService) {
              return PlaidApiService.getData({account: $stateParams.id});
            }
          }
        });




    });
})();

