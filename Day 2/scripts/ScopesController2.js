angular.module('hrApp').controller('ScopesController2', ['$scope', function ($scope){

    $scope.title = 'Two Way Binding Demo';
$scope.childtemplate = 'templates/childscope.html';
$scope.resetFirstVariable = function () {
    $scope.firstVariable = undefined;
};
$scope.setFirstVariable = function (val) {
    $scope.firstVariable = val;
};
}])