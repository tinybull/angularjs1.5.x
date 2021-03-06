'use strict';

angular.module('mongodb')
    .directive("mongodbQuery", ['$templateCache', function ($templateCache) {
        return {
            restrict: 'E',
            controller: 'mongodbQueryCtrl',
            scope: {},
            template: $templateCache.get('mongodb/template/query/query.html'),
            replace: false,
            link: function (scope, iElement, iAttrs, controller) {
            }
        };
    }])
    .controller('mongodbQueryCtrl', ['$scope', '$state', function ($scope, $state) {
        $scope.navigateToCreateServicePage = function () {
            $state.go('app.mongodb.service');
        };
    }])
    .run(["$templateCache", function ($templateCache) {
        // language=HTML
        $templateCache.put("mongodb/template/query/query.html", `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <h2>MongoDB服务</h2>
                    </div>
                </div>
                <div class="row" style="padding: 5px 0;">
                    <div class="col-md-6">
                        <button class="btn btn-default" ng-click="navigateToCreateServicePage()">
                            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                            新建服务
                        </button>
                    </div>
                    <div class="col-md-6" style="text-align: right;">
                        <form class="form-inline">
                            <div class="form-group has-feedback">
                                <input type="text" class="form-control">
                                <span class="glyphicon glyphicon-search form-control-feedback"
                                      style="pointer-events: auto;cursor: pointer;z-index: 4;"></span>
                            </div>
                        </form>
                    </div>
                </div>
                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th>序号</th>
                        <th>服务名称</th>
                        <th>状态</th>
                        <th>服务规格</th>
                        <th>创建时间</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr ng-repeat="s in services">
                        <td>{{org.no}}</td>
                        <td>
                            <a href="" ng-click="openDetail(org.no)">{{org.name}}</a>
                        </td>
                        <td>{{org.orgGrade.name}}</td>
                        <td>{{org.address}}</td>
                        <td>{{org.superOrg.name}}</td>
                        <td>
                            <a href="" ng-click="delOrg(org)" class="a-delete">&nbsp;删除</a>&nbsp;
                            <a href="" ng-click="openOrgMod(org)"></span>&nbsp;修改</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="row">
                    <div class="col-md-6">
                        共<span class="pagination-font">{{totalRow}}</span>条
                        <select ng-model="pageSize" ng-options="option for option in [10,20,30,50]"
                                ng-change="pageChanged()"></select>
                    </div>
                    <div class="col-md-6" style="text-align: right;">
                        <nav aria-label="...">
                            <ul class="pagination" style="margin: 0;">
                                <li class="disabled">
                                    <a href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li class="active">
                                    <a href="#">1</a>
                                </li>
                                <li>
                                    <a href="#">2</a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li>
                                    <a href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        `);
    }]);
