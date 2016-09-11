(function() {
  'use strict';

  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope", "$filter"]
  function LunchCheckController($scope, $filter) {
    $scope.food = "";
    $scope.message = "";
    $scope.warn = false;
    $scope.error = false;

    $scope.checkLunch = function() {
      var n_items = countInput(parseInput($scope.food));

      if (n_items <= 0) {
        $scope.message = "Please enter data first";
        $scope.warn = true;
        $scope.error = false;
      } else if (n_items <= 3) {
        $scope.message = "Enjoy!";
        $scope.warn = $scope.error = false;
      } else if (n_items > 3) {
        $scope.message = "Too much!";
        $scope.error = true;
        $scope.warn = false;
      } else {
        console.error("Weird input in food..");
      }
    };
  };

  function parseInput(text) {
    return text.trim().split(",");
  };

  function countInput(array) {
    var n = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] !== "") {
        n++;
      }
    }
    return n;
  }
}());  // IIFE
