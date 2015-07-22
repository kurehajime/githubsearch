'use strict';

/* Services */

var githubSearchServices = angular.module('githubSearchServices', ['ngResource']);

githubSearchServices.factory('Repos', ['$http',
  function($http){
    return {
        searchRepo: searchRepo
    }  
    function searchRepo(query){
        var url = "https://api.github.com/search/repositories?q="+query+"&sort=stars&order=desc&callback=JSON_CALLBACK";
        return $http.jsonp(url).then(
            function(response) {
                return response.data.data.items;
            },function(response){
                return [];
            });
    }
  }
]);

