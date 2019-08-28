angular.module('layout')
    .directive('defaultLayout', ['$templateCache', function ($templateCache) {
        return {
            restrict: 'E',
            controller: 'mongodbQueryCtrl',
            scope: {},
            // templateUrl: 'mongodb/query/query.html',
            template: $templateCache.get('layout/default/default-layout.html'),
            replace: false,
            link: function (scope, iElement, iAttrs, controller) {
            }
        };
    }])
    .run(['$templateCache', function ($templateCache) {
        // language=HTML
        $templateCache.put('layout/default/default-layout.html', `
            <div style="padding-left: 200px;">
                <form class="form-inline">
                    <div class="form-group">
                        <select type="email" class="form-control">
                            <option>
                                <i class="glyphicon glyphicon-bookmark"></i>
                                Disabled select
                            </option>
                            <option>
                                <i class="glyphicon glyphicon-bookmark"></i>
                                Disabled select2
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <select type="password" class="form-control" placeholder="Password">
                            <option>Disabled select</option>
                        </select>
                    </div>
                </form>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <span>MongoDB服务管理</span>
                            >
                            <span>MongoDB服务</span>
                        </div>
                    </div>
                </div>
                <div ui-view></div>
            </div>
        `);
    }]);