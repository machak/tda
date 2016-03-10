(function() {
  "use strict";
  angular.module('tda.module', [
        'ngRoute', 'nvd3', 'flow', 'ngDialog',
        'ngNotificationsBar', 'ngSanitize',
        'dragularModule', 'treeControl'
      ])
      .controller('HomeCtrl', function($scope, ngDialog, $rootScope, $http) {
        $scope.header = "TDA";
        $scope.treeOptions = {
          nodeChildren: "children",
          dirSelectable: true
        };

        $http.get("/api/tree").then(function(response) {
          console.log(response.data);
          $scope.dataForTheTree = response.data.children;
        });

      })

})();
