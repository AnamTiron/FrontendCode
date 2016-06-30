hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup', 'EmployeeService',
    function ($scope, $http, $routeParams, $location, commonResourcesFactoryBackup, EmployeeService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5

        /**
         * Reset form
         */

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
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: commonResourcesFactoryBackup.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);