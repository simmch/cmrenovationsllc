(function(){

	"use strict";
            angular
				.module('myApp', ['ngMaterial', 'ui.router'])
				.config(function($mdThemingProvider, $mdIconProvider, $stateProvider, $urlRouterProvider) {
					$mdThemingProvider.theme('default')
					.primaryPalette('red')
					.accentPalette('orange');
                
                $urlRouterProvider.otherwise('/home');
                
                $stateProvider
                .state('home', {
                    url: '/home', 
                    templateUrl: 'components/homepage/home.html',
                    controller: 'MainController as vm'
                })
                .state('home.contact', {
                    url: '/contact',
                    templateUrl: 'components/contact/contact.html',
                    controller: 'ContactController as vm'
                });
                
            });

})();

