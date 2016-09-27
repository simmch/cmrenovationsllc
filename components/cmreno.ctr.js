(function(){

    "use strict";

    angular
        .module('main.ctrl', ['ngMaterial', 'ui.router'])
        .controller('MainController', function($scope, $state, $mdSidenav){

        var vm = this;

        vm.goHome = goHome;

        vm.openSidebar = openSidebar;

        vm.phoneCall = phoneCall;

        $scope.phone = "5133561794";

        $scope.isOpen = false;
        $scope.menu = {
            isOpen: false,
            count: 0,
            selectedDirection: 'left'
        }

        function openSidebar(){
            console.log('Hey');
            $state.go('nav');
        }

         function goHome(){
            console.log('goHome');
            $state.go('home');
        }

        function phoneCall(phone){
            $window.open(phone)
        }

    });

})();

