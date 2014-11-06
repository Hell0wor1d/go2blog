'use strict';

angular.module('myApp.contact', ['ngRoute'])
    .controller('ContactCtrl', ['$scope','$rootScope',function($scope,$rootScope) {
        $rootScope.nofluid = true;
    }]);