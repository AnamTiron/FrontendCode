var colorsApp= angular.module('colorsApp', ['ngRoute']);


colorsApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
             when('/colors', {
            templateUrl: 'views/colors.html',
            controller: 'ColorController'
    }).
        when('/forms', {
            templateUrl: 'views/form.html',
            controller: 'FormsController'
    }).

        otherwise({
            redirectTo:'/'
        });


    }])