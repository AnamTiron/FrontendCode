hrApp.service('JobsService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {
            findById: function (jobId) {
                return $http.get(CommonResourcesFactoryBackup.findOneJobUrl + jobId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        alert("no can do");
                    });
            }
        }
    }]
);