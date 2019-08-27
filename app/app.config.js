'use strict';

angular.module('app')
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('app', {
                url: "/app",
                templateUrl: 'layout/layout.html'
            })
            .state('app.mongoDB', {
                parent: "app",
                url: "/mongoDB",
                templateUrl: 'mongoDB/query/query.html',
                controller: 'MongoDBQueryCtrl',
                data: {}
            })
            .state('app.mongoDB.service', {
                parent: "app",
                url: "/mongoDBService",
                templateUrl: 'mongoDB/create/create.html',
                controller: 'MongoDBCreateCtrl',
                data: {}
            })
            .state('app.mongoDB.detail', {
                parent: "app",
                url: "/mongoDB/serviceDetail",
                templateUrl: 'mongoDB/detail/detail.html',
                controller: 'MongoDBDetailCtrl',
                data: {}
            });


        //the default state is home state
        $urlRouterProvider.otherwise('/app/mongoDB');
    });