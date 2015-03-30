'use strict';

/**
 * @ngdoc function
 * @name mongooseAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mongooseAppApp
 */
angular.module('mongooseAppApp')
    .controller('MainCtrl', function ($scope, FactoryCustomer) {
        $scope.customers = [];

        var init = function () {
            FactoryCustomer.get().success(function (data) {
                $scope.customers = data.customers;
            });
        };

        init();
    });