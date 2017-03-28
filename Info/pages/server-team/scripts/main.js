var app = angular.module('serverTeam', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'tuts/index.html',
            controller : 'serverController'
        })
        .when('/broadcast', {
            templateUrl : 'tuts/broadcast/index.html',
            controller : 'broadcastController'
        })
        .when('/hello', {
            templateUrl : 'tuts/hello/index.html',
            controller : 'helloController'
        })
        .when('/install', {
            templateUrl : 'tuts/install/index.html',
            controller : 'installController'
        })
        .when('/post', {
            templateUrl : 'tuts/post/index.html',
            controller : 'postController'
        });

    // http://stackoverflow.com/a/41213016/1161948
    $locationProvider.hashPrefix('');
}]);

app.controller('broadcastController', function($scope) {
    $scope.title = 'Web Socket Broadcast';
    $scope.description = '';
});

app.controller('serverController', function($scope) {
    $scope.title = 'Server Team';
    $scope.description = 'The server team is responsible for setting up HTTP routes and web sockets that expose, coordinate, and collect user input and distributed sensors data. As you develop server side solutions for Node.js, you will become familiar with the Express framework and Socket.io library.';
});

app.controller('installController', function($scope) {
    $scope.title = "Install Express";
    $scope.description = '';
});

app.controller('helloController', function($scope) {
    $scope.title = "Hello World Example";
    $scope.description = '';
});

app.controller('postController', function($scope) {
    $scope.title = "HTTP POST with JSON";
    $scope.description = '';
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
