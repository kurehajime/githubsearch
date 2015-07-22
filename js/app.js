'use strict';

/* App Module */

var phonecatApp = angular.module('GithubSearchApp', [
  'ngRoute',
  'githubSearchControllers',
  'githubSearchServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/repos', {
        templateUrl: 'partials/repo-list.html',
        controller: 'RepoListCtrl'
      }).
      otherwise({
        redirectTo: '/repos'
      });
  }]);
