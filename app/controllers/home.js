'use strict';

angular.module('myApp.home', ['ngRoute'])
    .controller('HomeCtrl', ['$scope', '$rootScope',
        function($scope, $rootScope) {
            $rootScope.pagepost = '';
            $rootScope.nofluid = '';
        }
    ]);
