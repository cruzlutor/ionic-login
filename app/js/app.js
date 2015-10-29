/* jslint node: true */
'use strict';

// requires
var angular = require('angular');

// load angular requires
require('angular-resource');
require('angular-route');
require('angular-sanitize');
require('angular-animate');
require('angular-ui-router');

// ionic modules
require('./../libs/ionic/js/ionic');
require('./../libs/ionic/js/ionic-angular');

// load pages
require('./modules/index');
require('./modules/signin');
require('./modules/signup');

// load common
require('./common/components/pageHeader');

angular.element(document).ready(function() {

    var requires = [
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngAnimate',

        // three party
        'ui.router',
        'ionic',

        // pages
        'page.home',
        'page.signin',
        'page.signup',
        'page.main',

        //common
        'components.pageHeader',
    ];

    // init app
    angular.module('app', requires);

    // load config
    angular.module('app').config(require('./config'));

    // load run
    angular.module('app').run(require('./run'));

    // manual bootstraping
    angular.bootstrap(document, ['app']);

});