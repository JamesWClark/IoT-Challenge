var app = angular.module('serverTeam', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'tuts/index.html',
            controller : 'mainController'
        })
        .when('/install', {
            templateUrl : 'tuts/install/index.html',
            controller : 'helloController'
        })
        .when('/hello', {
            templateUrl : 'tuts/hello/index.html',
            controller : 'installController'
        })
        .when('/post', {
            templateUrl : 'tuts/post/index.html',
            controller : 'postController'
        });

    // http://stackoverflow.com/a/41213016/1161948
    $locationProvider.hashPrefix('');
}]);

app.controller('mainController', function($scope) {
    $scope.title = 'Main';
});

app.controller('installController', function($scope) {
    $scope.title = "Install Express";
});

app.controller('helloController', function($scope) {
    $scope.title = "Hello World Example";
});

app.controller('postController', function($scope) {
    $scope.title = "HTTP POST with JSON";
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
