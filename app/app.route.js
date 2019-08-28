'use strict';

angular.module('app')
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('app', {
                url: "/app",
                template: '<default-layout></default-layout>',
                // templateUrl: 'layout/default/default-layout.html'
            });

        // default state
        $urlRouterProvider.otherwise('/app/mongodb');
    });