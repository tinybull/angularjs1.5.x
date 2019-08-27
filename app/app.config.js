'use strict';

angular.module('app')
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('app', {
                url: "/app",
                templateUrl: 'layout/layout.html'
            })
            .state('app.mongodb', {
                parent: "app",
                url: "/mongodb",
                template: '<mongodb-query></mongodb-query>',
                data: {}
            })
            .state('app.mongodb.service', {
                parent: "app",
                url: "/mongoDBService",
                templateUrl: 'mongodb/create/create.html',
                controller: 'MongoDBCreateCtrl',
                data: {}
            })
            .state('app.mongodb.detail', {
                parent: "app",
                url: "/mongodb/detail",
                templateUrl: 'mongodb/detail/detail.html',
                controller: 'MongoDBDetailCtrl',
                data: {}
            });


        //the default state is home state
        $urlRouterProvider.otherwise('/app/mongodb');
    });