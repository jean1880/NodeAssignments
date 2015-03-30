'use strict';

/**
 * @ngdoc overview
 * @name mongooseAppApp
 * @description
 * # mongooseAppApp
 *
 * Main module of the application.
 */
angular
    .module('mongooseAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/customer', {
                templateUrl: 'views/addCustomer.html',
                controller: 'AddCustomerCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });