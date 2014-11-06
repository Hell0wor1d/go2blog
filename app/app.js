'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.article',
    'myApp.home',
    'myApp.contact',
    'ngCookies'
    //'myApp.version'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/article', {
                templateUrl: 'views/article.html',
                controller: 'ArticleCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
            })
            .otherwise({redirectTo: '/home'});
    }]).
    controller('RootCtrl', ['$scope', '$cookieStore', '$location', function ($scope, $cookieStore, $location) {
        $scope.pagepost = false;
        $scope.nofluid = false;
        var rMode = $cookieStore.get('read_mode');
        var pFont = $cookieStore.get('page_font');
        if(rMode === undefined || rMode === ''){
            $cookieStore.put('read_mode', 'day');
            rMode = $cookieStore.get('read_mode');
            $scope.bgcolor = rMode;
        }

        if(pFont === undefined || pFont === ''){
            $cookieStore.put('page_font', 'font2');
            pFont = $cookieStore.get('page_font');
            $scope.pagefont = pFont;
        }
        $scope.bgcolor = rMode;
        $scope.pagefont = pFont;
        $scope.isDay = rMode == "day";

        //set page font
        $scope.setPageFont = function (font1) {
            $scope.isFont1 = font1;
            if(font1){
                $cookieStore.put('page_font', 'font1');
                $scope.pagefont = 'font1';
            }else{
                $cookieStore.put('page_font', 'font2');
                $scope.pagefont = 'font2';
            }
        };

        //set read mode
        $scope.setReadMode = function (day){
            $scope.isDay = day;
            if(day){
                $cookieStore.put('read_mode', 'day');
                $scope.bgcolor = 'day';
            }else{
                $cookieStore.put('read_mode', 'night');
                $scope.bgcolor = 'night';
            }
        };

        $scope.isButtonActive = function (viewLocation) {
            var path =  $location.path();
            return viewLocation === path;
        };

        $scope.showReadModeModal = function (value) {
            var ele = document.getElementById("view-mode-modal");
            if (value) {
                ele.style.display = "block";
            } else {
                ele.style.display = "none"
            }
        }
    }])
;
