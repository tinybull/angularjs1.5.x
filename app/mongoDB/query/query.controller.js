'use strict';

angular.module('mongoDB')
    .controller('MongoDBQueryCtrl', ['$scope', '$state', function ($scope, $state) {

        console.log('mongo db');

        console.log($scope);
        console.log($scope.$parent);

        $scope.navigateToCreateServicePage = function () {
            console.log('hahah');
            console.log($state);
            $state.go('app.mongoDB.service');
        };

        console.log($scope);
    }]);
