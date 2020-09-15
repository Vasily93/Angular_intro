var app = angular.module('counter', []); //setter syntax

angular.module('counter')
            .controller('CounterController', CounterController);

// CounterController.$inject = [];

function CounterController() {
    var ctrl = this; //doesnt break then store this in local variable
    ctrl.count = 0;
    ctrl.increment = function() {
        ctrl.count ++;
    }
    ctrl.decrement = function() {
       ctrl.count --;
    }
}