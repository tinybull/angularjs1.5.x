'use strict';

angular.module('app')
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('app', {
                url: "/app",
                templateUrl: 'layout/layout.html'
            });

        //the default state is home state
        $urlRouterProvider.otherwise('/app/mongodb');
    });