angular.module("mongodb")
    .directive("backupRecover", ['$templateCache', function ($templateCache) {
        return {
            restrict: 'E',
            controller: 'BackupRecoverCtrl',
            scope: {},
            template: `
                <div>
                    <button class="btn btn-default" ng-click="openModal()">Modal</button>
                </div>
            `,
            replace: true,
            link: function (scope, iElement, iAttrs, controller) {

            }
        };
    }])
    .controller('BackupRecoverCtrl', ['$scope', '$uibModal', function ($scope, $uibModal) {

        $scope.openModal = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'mongodb/detail/backup-recover/confirm-backup.html',
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