var app = angular.module('clientsTeam', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'tuts/index.html',
            controller : 'clientsController'
        })
        .when('/bootstrap', {
            templateUrl : 'tuts/bootstrap/index.html',
            controller : 'bootstrapController'
        })
        .when('/broadcast', {
            templateUrl : 'tuts/broadcast/index.html',
            controller : 'broadcastController'
        })
        .when('/serve-static', {
            templateUrl : 'tuts/serve-static/index.html',
            controller : 'staticController'
        });

    // http://stackoverflow.com/a/41213016/1161948
    $locationProvider.hashPrefix('');
}]);

app.controller('bootstrapController', function($scope) {
    $scope.title = 'Get Bootstrap';
    $scope.description = 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.';
});

app.controller('broadcastController', function($scope) {
    $scope.title = 'Socket Listener';
    $scope.description = 'Listen for Web Socket Broadcasts';
});

app.controller('clientsController', function($scope) {
    $scope.title = 'Clients Team';
    $scope.description = 'As a member of the clients team, you are responsible for manufacturing the end user experience. You will write web applications in JavaScript and consume web services provided by your server team.';
});

app.controller('staticController', function($scope) {
    $scope.title = "Serve Static";
    $scope.description = 'Setup a static file server with Node.js';
});
/*
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
*/