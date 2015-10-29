/* jslint node:true */
'use strict';

var Slideout = require('slideout');

function pageHeader() {

    var controller = function($scope, $ionicHistory) {

        if($scope.type == 'burguer'){
            var slideout = new Slideout({
                'panel': document.getElementById('panel'),
                'menu': document.getElementById('menu'),
                // 'padding': 260,
                // 'tolerance': 70,
                'touch':false,
            });
        }

        function goBack(){
            $ionicHistory.goBack();
        }

        function openMenu(){
            slideout.toggle();
        }

        var title = $scope.pageTitle;

        angular.extend(this, {
            openMenu: openMenu,
            goBack: goBack,
            title: title,
        });
    };

    var template =  '<header class="bar bar-header hide-on-keyboard-open">' +
                        '<a ng-show="type == \'back\'" ng-click="vm.goBack()" class="button button-transparent "><i class="icon ion-ios-arrow-left"></i></a>' +
                        '<a ng-show="type == \'burguer\'" ng-click="vm.openMenu()" class="button button-transparent "><i class="icon ion-navicon"></i></a>' +
                        '<h1 class="bar-header__title">{{vm.title}}</h1>' +
                    '</header> ';
    return {
        scope: {
            'pageTitle' : '@',
            'type' : '@',
        },
        controllerAs : 'vm',
        controller: controller,
        template: template
    };
}

angular.module('components.pageHeader', [])
    .directive('pageHeader', [pageHeader]);