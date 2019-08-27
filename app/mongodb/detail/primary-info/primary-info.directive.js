'use strict';

angular.module("mongodb")
    .directive("primaryInfo", ['$templateCache', function ($templateCache) {
        return {
            restrict: 'E',
            controller: 'PrimaryInfoCtrl',
            scope: {},
            templateUrl: 'mongodb/detail/primary-info/primary-info.html',
            // template: $templateCache.get('tree.html'),
            replace: true,
            link: function (scope, iElement, iAttrs, controller) {

            }
        };
    }])
    .controller('PrimaryInfoCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {
        console.log($uibModal);
    }]);