'use strict';

angular.module('mongoDB')
    .controller('MongoDBCreateCtrl', ['$scope','$state', function ($scope,$state) {

        console.log('MongoDBCreateCtrl');

        $scope.createService = function () {
            $state.go('app.mongoDB');
        }
    }]);
