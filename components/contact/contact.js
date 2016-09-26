(function(){

	"use strict";

	angular
		.module('contact.ctrl', ['ngMaterial', 'ui.router'])
		.controller('contactController', function($scope, $state, $mdSidenav, $http){

			$scope.facebook = 'http://facebook.com';
			$scope.instagram = 'http://instagram.com';

			$scope.linkModelFunc = function (url){
							  console.log('link model function');
							  $window.open(url);
							}
		});

})();