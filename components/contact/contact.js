(function(){

	"use strict";

	angular
		.module('contact.ctrl', ['ngMaterial', 'ui.router'])
		.controller('contactController', function($scope, $state, $mdSidenav, $http, $mdToast, $animate, $httpParamSerializerJQLike){

			$scope.facebook = 'http://facebook.com';
			$scope.instagram = 'http://instagram.com';

			$scope.linkModelFunc = function (url){
							  console.log('link model function');
							  $window.open(url);
							}

			$scope.formData = {};

            $scope.processForm = function(){
                $http({
                    method: 'POST',
                    url: 'mail.php',
                    data: $scope.formData, 
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

                })

                .success(function(data){
                    console.log(data);

                    if(!data.success) {
                        $scope.errorName = data.errors.name
                    } else {
                        $scope.message = data.message;
                    }
                });
            };

							//3. we decide where the toast will display on the view
            $scope.toastPosition = {
                bottom: false,
                top: true,
                left: false,
                right: true
            };
 
            //2. the method looks for the position that we want to display the toast
            $scope.getToastPosition = function() {
                return Object.keys($scope.toastPosition)
                    .filter(function(pos) { return $scope.toastPosition[pos]; })
                    .join(' ');
            };
 
            //1. The send button will call this method
            this.sendMail = function() {
                $mdToast.show(
                    $mdToast.simple()
                        .content('Thanks for your Message ' + this.contactName + '!')
                        .position($scope.getToastPosition())
                        .hideDelay(4000)
                );
            };

        })
        
  
		



})();