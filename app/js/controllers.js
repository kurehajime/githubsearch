'use strict';

/* Controllers */

var githubSearchControllers = angular.module('githubSearchControllers', []);

githubSearchControllers.controller('RepoListCtrl', ['$scope', 'Repos',
  function($scope, Repos) {
    $scope.repos = [];
    $scope.orderProp = '-stargazers_count';
    $scope.query='Javascript'
    $scope.search=function(){
        Repos.searchRepo($scope.query).then(function(resp){
            $scope.repos=resp;
        })
    }
    Repos.searchRepo($scope.query).then(function(resp){
        $scope.repos=resp;
    })
    
  }]);