angular.module("mongoDB")
    .directive("backupRecover", ['$templateCache', function ($templateCache) {
        return {
            restrict: 'E',
            controller: 'BackupRecoverCtrl',
            scope: {},
            templateUrl: 'mongoDB/detail/backup-recover/backup-recover.html',
            // template: $templateCache.get('tree.html'),
            replace: true,
            link: function (scope, iElement, iAttrs, controller) {

            }
        };
    }])
    .controller('BackupRecoverCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {

        $scope.openModal = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'mongoDB/detail/backup-recover/confirm-backup.html',
                controller: 'ModalConfirmBackupCtrl',
                size: 800,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
            });
        }


    }])
    .controller('ModalConfirmBackupCtrl', ['$scope', function ($scope) {

    }]);