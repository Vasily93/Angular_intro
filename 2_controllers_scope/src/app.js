var app = angular.module('counter', []);

app.controller('CounterController', 
                function CounterController($scope) {
                    $scope.count = 0;
                    $scope.increment = function() {
                        $scope.count ++
                    }
                    $scope.decrement = function() {
                        $scope.count --
                    }
                });