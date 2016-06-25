
angular.module( 'hrApp').controller('DescriptionController', [ '$scope', function( $scope) {
    $scope.descriptionShow=false;
    $scope.title = 'Two way Binding Demo';
    $scope.childtemplate = 'templates/childscope.html';
    $scope.resetFirstVariable = function () {
        $scope.firstVariable = undefined;
    };
    $scope.setFirstVariable = function (val) {
        $scope.firstVariable = val;
    }

    $scope.toggleDescriptionShow=function() {
        if($scope.descriptionShow==false) {
            $scope.descriptionShow = true;
        }
        else {$scope.descriptionShow=false;}
    }
}]);
