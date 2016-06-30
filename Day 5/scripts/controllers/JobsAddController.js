hrApp.controller('JobsAddController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup',
    function($scope, $http, $location, commonResourcesFactoryBackup) {
        $scope.jobs = [];
        $scope.requiredErrorMessage = "Please fill out this form!";

         $scope.resetjob = function () {
            //this.jobs = {};
          //  $location.url('/jobsAdd/');
             console.log($scope.job);
        };


        $scope.createjob = function (addJob) {
            $http({url: commonResourcesFactoryBackup.addJobUrl, method: 'POST', data: addJob})
                .success(function (data) {
                    $scope.jobs = data;
                    $location.url('/jobsView/' + $scope.jobs.jobId);
                })
                .error(function(data, status, headers, config){
                    alert("error"+status);

                });
        };


    }]);