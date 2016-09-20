(function(){
    
    "use strict";
    
    angular 
        .module('myApp')
        .controller('NavController', function($scope, $state, $mdSidenav, $timeout){
        
        var vm = this;

        vm.goHome = goHome;

        vm.closeSidebar = closeSidebar;

        function goHome(){
            console.log('goHome');
            $state.go('home');
        }
        
        $timeout(function(){
            $mdSidenav('left').open();
        });

        $scope.$watch('sidenavOpen', function(sidenavOpen){
        	if(sidenavOpen === false) {
        		$mdSidenav('left')
        			.close()
        			.then(function() {
        				$state.go('home');
        			});
        	}
        });

        function closeSidebar() {
        	$scope.sidenavOpen = false;
        }

        
        
    });
    
})();