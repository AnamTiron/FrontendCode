angular.module('hrApp').controller('MainController', ['$rootScope', '$scope', function($rootScope, $scope) {
    $scope.nameValue= "name";
    console.log($scope.nameValue);

}])