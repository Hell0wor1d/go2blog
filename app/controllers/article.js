'use strict';

angular.module('myApp.article', ['ngRoute'])
.controller('ArticleCtrl', ['$scope','$rootScope',function($scope,$rootScope) {
      $rootScope.bodylayout = 'post output fluid reader-day-mode reader-font2 ';
    }]);