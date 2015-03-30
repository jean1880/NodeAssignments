'use strict';

/**
 * @ngdoc function
 * @name mongooseAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mongooseAppApp
 */
angular.module('mongooseAppApp')
    .controller('AddCustomerCtrl', function ($scope, FactoryCustomer, $location) {
        $scope.customer = {};

        $scope.save = function () {
            FactoryCustomer.add($scope.customer).success(function () {
                $location.path('/');
            });
        };
    });