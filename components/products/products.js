(function(){

	"use strict";

	angular
		.module('product.ctrl', ['ngMaterial', 'ui.router'])
		.controller("productController", function($scope, $mdSidenav, $http, $state, $stateParams, productFactory){
			var vm = this;


			productFactory.getProducts().then(function(data)	{
				vm.products = data.data;
				vm.categories = getCategories(vm.products);
			});

			function getCategories(products) {

				var categories = [];

				angular.forEach(products, function(item) {
					angular.forEach(item.categories, function(category){
						categories.push(category);
					});
				});
				return _.uniq(categories);
			}
		});

})();