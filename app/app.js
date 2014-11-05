'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.article',
  'myApp.home',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/home',{
        templateUrl: 'view2/home.html',
        controller: 'HomeCtrl'
      })
      .when('/article', {
        templateUrl: 'view1/article.html',
        controller: 'ArticleCtrl'
      })
      .otherwise({redirectTo: '/home'});
}]);
