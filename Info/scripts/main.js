var app = angular.module('iot', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'mainController'
    })
    .when('/serverteam', {
        templateUrl: 'pages/server-team/index.html',
        controller: 'serverTeamController'
    })
    .when('/sensors-team', {
        templateUrl: 'pages/sensors-team/index.html',
        controller: 'sensorsController'
    });
    
    // http://stackoverflow.com/a/41213016/1161948
    $locationProvider.hashPrefix('');
}]);

app.controller('mainController', function($scope) {
    $scope.view = 'Main';
});

app.controller('serverTeamController', function($scope) {
    $scope.view = "Server Team";
});

app.controller('sensorsController', function($scope) {
    $scope.view = "Sensors Team";
});