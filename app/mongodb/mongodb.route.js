'use strict';

angular.module('mongodb')
    .config(function ($stateProvider) {

        $stateProvider
            .state('app.mongodb', {
                parent: "app",
                url: "/mongodb",
                template: '<mongodb-query></mongodb-query>',
                data: {}
            })
            .state('app.mongodb.service', {
                parent: "app",
                url: "/mongodbService",
                template: '<mongodb-service-create></mongodb-service-create>',
                data: {}
            })
            .state('app.mongodb.detail', {
                parent: "app",
                url: "/mongodb/detail",
                templateUrl: 'mongodb/detail/detail.html',
                controller: 'MongoDBDetailCtrl',
                data: {}
            });
    });