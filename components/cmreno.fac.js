(function (){

	"use strict";

	angular
		.module('product.ctrl')
		.factory('productFactory', function($http){

			function getProducts() {
				return $http.get('data/products.json');
			}

			return {
				getProducts: getProducts
			}

		});
})();