'use strict';

angular.module('mongodb')
    .controller('MongoDBCreateCtrl', ['$scope','$state', function ($scope,$state) {

        console.log('MongoDBCreateCtrl');

        $scope.createService = function () {
            $state.go('app.mongodb');
        }
    }]);
