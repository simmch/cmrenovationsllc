(function(){

	"use strict";
            angular
				.module('myApp', ['ngMaterial', 'ui.router', 'main.ctrl', 'about.ctrl', 'nav.ctrl'])
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
                .state('nav', {
                    url: '/nav',
                    templateUrl: 'components/navigation/navigation.html',
                    controller: 'NavController as vm'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'components/about/about.html',
                    controller: 'aboutController as vm'
                })

            });

})();

