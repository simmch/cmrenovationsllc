(function (){

	"use strict";

	angular
		.module('product.ctrl')
		.factory('productFactory',['$http', function($http){
			
			var vm = this;


			vm.getProducts = getProducts;



			function getProducts() {
				return $http.get('data/products.json')
					.success(function(data){
						
						console.log("Good job!")
						
					})
					
			}

			return {
				getProducts: getProducts
			}

		}]);
})();