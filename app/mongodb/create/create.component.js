'use strict';

angular.module('mongodb')
    .directive('mongodbServiceCreate', ['$templateCache', function ($templateCache) {
        return {
            restrict: 'E',
            controller: 'mongodbCreateCtrl',
            scope: {},
            template: $templateCache.get('mongodb/template/create/create.html'),
            replace: false,
            controllerAs: '$ctrl',
            link: function (scope, iElement, iAttrs, controller) {
            }
        };
    }])
    .controller('mongodbCreateCtrl', ['$scope', '$state', function ($scope, $state) {

        console.log('MongoDBCreateCtrl');

        $scope.createService = function () {
            $state.go('app.mongodb');
        }
    }])
    .run(['$templateCache', function ($templateCache) {
        // language=HTML
        $templateCache.put('mongodb/template/create/create.html', `
            <div class="container-fluid">
                <form class="form-horizontal">
                    <h3>创建服务</h3>
                    <h4>基本配置</h4>
                    <div class="form-group">
                        <label class="col-sm-3 col-lg-2 control-label">
                            <span class="required">*</span>
                            服务名称
                        </label>
                        <div class="col-sm-5 col-md-4">
                            <input type="email" class="form-control" placeholder="Email">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 col-lg-2 control-label">
                            <span class="required">*</span>
                            引擎版本
                        </label>
                        <div class="col-sm-5 col-md-4">
                            <input type="email" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 col-lg-2 control-label">架构类型</label>
                        <div class="col-sm-5 col-md-4">
                            <input type="email" class="form-control">
                        </div>
                    </div>
                    <h4>资源规格</h4>
                    <div class="form-group">
                        <label class="col-sm-3 col-lg-2 control-label">
                            <span class="required">*</span>
                            CPU
                        </label>
                        <div class="col-sm-5 col-md-4">
                            <input type="email" class="form-control" placeholder="Email">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 col-lg-2 control-label">
                            <span class="required">*</span>
                            内存
                        </label>
                        <div class="col-sm-5 col-md-4">
                            <input type="password" class="form-control" placeholder="Password">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 col-lg-2 control-label">
                            <span class="required">*</span>
                            存储容量
                        </label>
                        <div class="col-sm-5 col-md-4">
                            <input type="password" class="form-control" placeholder="Password">
                        </div>
                    </div>
                    <h4>定时备份策略</h4>
                    <div class="form-group">
                        <label class="col-sm-3 col-lg-2 control-label">
                            <span class="required">*</span>
                            是否开启
                        </label>
                        <div class="col-sm-5 col-md-4">
                            <input type="email" class="form-control" placeholder="Email">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 col-lg-2 control-label">
                            <span class="required">*</span>
                            每天定时备份时刻
                        </label>
                        <div class="col-sm-5 col-md-4">
                            <input type="password" class="form-control" placeholder="Password">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 col-lg-2 control-label">
                            <span class="required">*</span>
                            备份保留时长
                        </label>
                        <div class="col-sm-5 col-md-4">
                            <input type="password" class="form-control" placeholder="Password">
                        </div>
                    </div>
                    <h4>Mongod参数</h4>
                    <div class="form-group">
                        <label class="col-sm-3 col-lg-2 control-label">
                            <span class="required">*</span>
                            最大连接数
                        </label>
                        <div class="col-sm-5 col-md-4">
                            <input type="email" class="form-control" placeholder="Email">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 col-lg-2 control-label">
                            <span class="required">*</span>
                            Profiling模式
                        </label>
                        <div class="col-sm-5 col-md-4">
                            <input type="password" class="form-control" placeholder="Password">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 col-lg-2 control-label">
                            <span class="required">*</span>
                            慢请求阈值
                        </label>
                        <div class="col-sm-5 col-md-4">
                            <input type="password" class="form-control" placeholder="Password">
                        </div>
                    </div>
                    <h4>其他设置</h4>
                    <div class="form-group">
                        <label class="col-sm-3 col-lg-2 control-label">
                            是否创建TCP负载均衡
                        </label>
                        <div class="col-sm-5 col-md-4">
                            <input type="email" class="form-control" placeholder="Email">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 col-lg-2 control-label">
                            <span class="required">*</span>
                            初始root账号密码
                        </label>
                        <div class="col-sm-5 col-md-4">
                            <input type="password" class="form-control" placeholder="Password">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-3 col-sm-offset-3 col-lg-6 col-lg-offset-2">
                            <button class="btn btn-default" ng-click="createService()">创建服务</button>
                        </div>
                    </div>
                </form>
            </div>
        `);
    }]);


