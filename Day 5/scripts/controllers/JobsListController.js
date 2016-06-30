hrApp.controller('JobsListController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup',
    function ($scope, $http, $location, CommonResourcesFactoryBackup) {

        $scope.jobs = [];



        $http({url: CommonResourcesFactoryBackup.findAllJobsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.jobs = data;
            });

        $scope.viewJob = function (jobId) {
            $location.url('/jobsView/' + jobId);
        };


        $scope.editJob = function (jobId) {
            $location.url('/jobsEdit/' + jobId);
        };
        $scope.deleteJob = function(jobId) {
            $http.delete( {url: CommonResourcesFactoryBackup.deleteJobUrl})

            $http.delete(CommonResourcesFactoryBackup.deleteEmployeeUrl + "/" + jobId)
                .success(function(data,status, headers, config){
                    alert("Delete successful");
                })
                .error(function(error){
                    alert(error);
                });

            $location.url('/jobsList/');
        }
    }]);