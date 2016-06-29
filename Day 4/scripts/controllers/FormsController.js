/**
 * Created by usr on 6/29/2016.
 */
colorsApp.controller("FormsController", function($scope){
    $scope.submit= function()
    {
        if($scope.myForm.input.$valid==true) {
            alert("submitted!");
        }
    }
    
})