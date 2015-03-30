'use strict';

/**
 * @ngdoc service
 * @name mongooseAppApp.FactoryCustomer
 * @description
 * # FactoryCustomer
 * Factory in the mongooseAppApp.
 */
angular.module('mongooseAppApp')
    .factory('FactoryCustomer', function ($http, ServerAddress) {
        return {
            add: function (data) {
                return $http.post(ServerAddress + 'customer', {
                    customer: data
                });
            },
            get: function () {
                return $http.get(ServerAddress + 'customers');
            }
        };
    });