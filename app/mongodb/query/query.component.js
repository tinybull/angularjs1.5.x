'use strict';

angular.module('mongodb')
    .directive("mongodbQuery", ['$templateCache', function ($templateCache) {
        return {
            restrict: 'E',
            controller: 'MongoDBQueryCtrl',
            scope: {},
            templateUrl: 'mongodb/query/query.html',
            // template: $templateCache.get('tree.html'),
            replace: false,
            controllerAs: '$ctrl',
            link: function (scope, iElement, iAttrs, controller) {
            }
        };
    }])
    .controller('MongoDBQueryCtrl', ['$scope', '$state', function ($scope, $state) {
        this.name = 'mongodb query controller';

        console.log('mongo db');

        console.log($scope);
        console.log($scope.$parent);

        $scope.navigateToCreateServicePage = function () {
            console.log('hahah');
            console.log($state);
            $state.go('app.mongodb.service');
        };

        console.log($scope);
    }]);
