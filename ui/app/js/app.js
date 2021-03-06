angular.module('myApp', ['ui.router', 'ui.bootstrap', 'ngStorage', 'restangular'])

.config(function($stateProvider, $urlRouterProvider) {
    "use strict";
    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('root', {
        abstract: true,
        url: '',
        templateUrl: 'assets/dist/views/root.html',
        controller: 'rootCtrl'
    })
    .state('root.home', {
        url: '/home',
        templateUrl: 'assets/dist/views/home.html',
        controller: 'homeCtrl'
    })
    .state('root.crud', {
        abstract: true,
        url: '/crud/:crudId',
        templateUrl: 'assets/dist/views/crud/main.html',
        controller: 'crudCtrl'
    })
    .state('root.crud.all', {
        url: '/all',
        templateUrl: 'assets/dist/views/crud/all.html',
        controller: 'crudAllCtrl'
    })
    .state('root.crud.create', {
        url: '/create',
        templateUrl: 'assets/dist/views/crud/create.html',
        controller: 'crudCreateCtrl'
    })
    .state('root.crud.details', {
        url: '/:id',
        templateUrl: 'assets/dist/views/crud/details.html',
        controller: 'crudDetailsCtrl'
    })
    .state('root.chat', {
        url: '/chat',
        templateUrl: 'assets/dist/views/chat.html',
        controller: 'chatCtrl'
    });
})

.run(function($rootScope, $location){
    $rootScope.isActive = function (viewLocation) {
        var regex = new RegExp('^'+viewLocation+'$', 'g');
        return regex.test($location.path());
    };
});
