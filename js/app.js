var app = angular.module('MAQSoftwareApp', ['ngRoute', 'ngResource']);
app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "/placeholder.html",
        controller: "HomeController"
    }).when("/hiretalent", {
        templateUrl: "/placeholder.html",
        controller: "HomeController"
    }).when("/expertise", {
        templateUrl: "/placeholder.html",
        controller: "HomeController"
    }).when("/findwork", {
        templateUrl: "/placeholder.html",
        controller: "HomeController"
    }).when("/benefits", {
        templateUrl: "/placeholder.html",
        controller: "HomeController"
    }).when("/contacts", {
        templateUrl: "/placeholder.html",
        controller: "HomeController"
    })
        .otherwise({ redirectTo: "/" });
    $locationProvider.html5Mode(true);
}])
.controller('HomeController', ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.$on('$viewContentLoaded', function () {
        loadPlugins();
        navigate();
    });
    $scope.$on('$routeChangeSuccess', function () {
        console.log('Route Change: ' + $location.url());
        $window.ga('set', 'page', $location.url());
        $window.ga('send', 'pageview', {
            'hitCallback': function () {
                console.log('GA hitCallback sent!');
            }
        });
    });
}]);