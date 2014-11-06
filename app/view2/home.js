'use strict';

angular.module('myApp.home', ['ngRoute'])
.controller('HomeCtrl', ['$scope','$rootScope',function($scope,$rootScope) {
      $rootScope.bodylayout = 'output fluid reader-day-mode reader-font2 ';
}]);