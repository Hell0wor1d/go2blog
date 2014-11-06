'use strict';

angular.module('myApp.article', ['ngRoute'])
    .controller('ArticleCtrl', ['$scope', '$rootScope',
        function($scope, $rootScope) {
            $rootScope.pagepost = 'post ';
            $rootScope.nofluid = 'no-fluid ';
        }
    ]);
