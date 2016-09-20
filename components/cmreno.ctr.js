(function(){
    
    "use strict";

    angular
        .module('myApp')
        .controller('MainController', function($scope, $state, $mdSidenav){
        
        var vm = this;

        vm.goHome = goHome;
        
        vm.openSidebar = openSidebar;

        $scope.isOpen = false;
        $scope.menu = {
            isOpen: false,
            count: 0,
            selectedDirection: 'right'
        }
        
        function openSidebar(){
            console.log('Hey');
            $state.go('home.nav');
        }      

         function goHome(){
            console.log('goHome');
            $state.go('home');
        } 
        


    });
    
})();

