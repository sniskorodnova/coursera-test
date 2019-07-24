(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchText="";
  $scope.customTextcolor = {};
  $scope.customBorder = {};

  $scope.countWords = function () {
    $scope.count = 0;

    if ($scope.lunchText === "") {
      $scope.messageText = "Please enter data first";
      $scope.customTextcolor.color = {"color":"red"};
      $scope.customBorder.border = {"border": "2px solid red"};
    }
    else {
      var words = $scope.lunchText.split(',');
      $scope.customTextcolor.color = {"color":"green"};
      $scope.customBorder.border = {"border": "2px solid green"};

      for (var i = 0; i < words.length; i++) {
        if (words[i] != (" " & "")) {
          $scope.count++;
        }
      }

      if (($scope.count >= 1) & ($scope.count <= 3)) {
        $scope.messageText = "Enjoy!";
      }

      else {
        if ($scope.count === 0){
          $scope.messageText = "Please enter data first";
          $scope.customTextcolor.color = {"color":"red"};
          $scope.customBorder.border = {"border": "2px solid red"};
        }
        else {
          $scope.messageText = "Too much!";
        }
      }
    }
  };
}

})();
