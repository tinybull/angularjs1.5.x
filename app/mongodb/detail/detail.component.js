'use strict';

angular.module('mongodb')
    .directive('mongodbDetail', ['$templateCache', function ($templateCache) {
        return {
            restrict: 'E',
            controller: 'MongoDBDetailCtrl',
            scope: {},
            template: $templateCache.get('mongodb/template/detail/detail.html'),
            replace: false,
            link: function (scope, iElement, iAttrs, controller) {
            }
        };
    }])
    .controller('MongoDBDetailCtrl', ['$scope', function (scope) {

    }])
    .run(["$templateCache", function ($templateCache) {
        // language=HTML
        $templateCache.put("mongodb/template/detail/detail.html", `
            <h2>mongodbtest1</h2>
            <uib-tabset active="active">
                <uib-tab index="0" heading="基本信息">
                    <primary-info></primary-info>
                </uib-tab>

                <uib-tab index="1" heading="备份恢复">
                    <backup-recover></backup-recover>
                </uib-tab>

                <uib-tab index="2" heading="监控">
                    <monitor></monitor>
                    content 3
                </uib-tab>
            </uib-tabset>
        `);
    }]);
