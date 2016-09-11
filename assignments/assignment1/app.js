(function() {
  'use strict';

  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"]
  function LunchCheckController($scope) {
    $scope.food = "";
    $scope.message = "";
    $scope.n_items = 0;
    $scope.checked = false;

    $scope.checkLunch = function() {
      $scope.checked = true;
      $scope.n_items = countInput(parseInput($scope.food));

      if ($scope.n_items <= 0) {
        $scope.message = "Please enter data first";
      } else if ($scope.n_items <= 3) {
        $scope.message = "Enjoy!";
      } else if ($scope.n_items > 3) {
        $scope.message = "Too much!";
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
      if (array[i].trim() !== "") {
        n++;
      }
    }
    return n;
  };
}());  // IIFE
