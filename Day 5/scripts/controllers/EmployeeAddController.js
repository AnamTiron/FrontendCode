hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup',
    function($scope, $http, $location, commonResourcesFactoryBackup) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1

        $scope.departments= [];
        $scope.jobs=[];
        $scope.managers=[];

        $http.get(commonResourcesFactoryBackup.findAllDepartmentsUrl)
            .success(function(data,status,headers,config)
            {
                $scope.departments= data;
            })
            .error(function(data, status, headers,config){
                alert("error:"+status);
            });

        $http.get(commonResourcesFactoryBackup.findAllEmployeesUrl)
            .success(function(data,status,headers,config)
            {
                $scope.managers= data;
            })
            .error(function(data, status, headers,config){
                alert("error:"+status);
            });
        $http.get(commonResourcesFactoryBackup.findAllJobsUrl)
            .success(function(data,status,headers,config)
            {
                $scope.jobs= data;
            })
            .error(function(data, status, headers,config){
                alert("error:"+status);
            });
        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
            $location.url('/employeeAdd/');
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: commonResourcesFactoryBackup.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                })
                .error(function(data, status, headers, config){
                alert("error"+status);

            });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);