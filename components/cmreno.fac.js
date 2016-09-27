(function (){

	"use strict";

	angular
		.module('product.ctrl')
		.factory('productFactory',['$scope', '$http', function($scope, $http){
			
			var vm = this;

			vm.getProducts = getProducts;

			$scope.isLoading = true;

			function getProducts() {
				return $http.get('data/products.json')
					.success(function(data){
						$scope.isLoading = false;
						console.log("Good job!")
						
					})
					
			}

			return {
				getProducts: getProducts
			}

		}]);
})();