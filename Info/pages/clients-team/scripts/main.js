var app = angular.module('clientsTeam', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'tuts/index.html',
            controller : 'mainController'
        })
        .when('/serve-static', {
            templateUrl : 'tuts/serve-static/index.html',
            controller : 'staticController'
        });

    // http://stackoverflow.com/a/41213016/1161948
    $locationProvider.hashPrefix('');
}]);

app.controller('clientsController', function($scope) {
    $scope.title = 'Main';
});

app.controller('staticController', function($scope) {
    $scope.title = "Serve Static";
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
