var app = angular.module('MAQSoftwareApp', ['ngRoute', 'ngResource']);
app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        //templateUrl: "/views/home.html",
        templateUrl: "/placeholder.html",
        controller: "HomeController"
    }).when("/hiretalent", {
        //templateUrl: "/views/home.html",
        templateUrl: "/placeholder.html",
        controller: "HomeController"
    }).when("/expertise", {
        //templateUrl: "/views/home.html",
        templateUrl: "/placeholder.html",
        controller: "HomeController"
    }).when("/findwork", {
        //templateUrl: "/views/home.html",
        templateUrl: "/placeholder.html",
        controller: "HomeController"
    }).when("/benefits", {
        //templateUrl: "/views/home.html",
        templateUrl: "/placeholder.html",
        controller: "HomeController"
    }).when("/contacts", {
        //templateUrl: "/views/home.html",
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