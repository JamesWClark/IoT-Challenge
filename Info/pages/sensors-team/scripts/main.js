var app = angular.module('sensorsTeam', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'tuts/index.html',
            controller : 'sensorsController'
        })
        .when('/post', {
            templateUrl : 'tuts/post/index.html',
            controller : 'staticController'
        });

    // http://stackoverflow.com/a/41213016/1161948
    $locationProvider.hashPrefix('');
}]);

app.controller('sensorsController', function($scope) {
    $scope.title = 'Sensors Team';
    $scope.description = 'The sensors team is responsible for writing GrovePi sensor code in Python, coordinating the Raspberry Pi fleet, and producing the data needed for this project.';
});

app.controller('postController', function($scope) {
    $scope.title = "POST JSON";
    $scope.description = 'Send GrovePi sensor data to a Node.js express server.';
});

// http://stackoverflow.com/a/28575776/1161948
$(document).keydown(function(event) {
    if (event.keyCode == 123) {
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        return false; //Prevent from ctrl+shift+i
    }
});

// http://stackoverflow.com/a/28575776/1161948
$(document).on("contextmenu",function(e){        
   e.preventDefault();
});
