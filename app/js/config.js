/* jslint node: true */

'use strict';

// requires
module.exports = function($stateProvider, $locationProvider, $urlRouterProvider, $ionicConfigProvider){

    // $ionicConfigProvider.views.maxCache(0);
    // $locationProvider.html5Mode(true);

    $stateProvider
    
        .state('index', {
            url: '/',
            controller: 'IndexCtrl',
            templateUrl: 'views/index.html',
        })

        .state('signin', {
            url: '/signin',
            controller: 'SigninCtrl',
            templateUrl: 'views/signin.html',
        })
        
        .state('signup', {
            url: '/signup',
            controller: 'SignupCtrl',
            templateUrl: 'views/signup.html',
        })
        
    $urlRouterProvider.otherwise('/');
};