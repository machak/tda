(function() {
  "use strict";
  angular.module('tda.module', [
        'ngRoute', 'nvd3', 'flow', 'ngDialog',
        'ngNotificationsBar', 'ngSanitize',
        'dragularModule', 'ngJsTree'
      ])
      .config(function($provide, $routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
              templateUrl: '/',
              controller: 'HomeCtrl'
            })
      })

      .controller('HomeCtrl', function($scope, $sce, ngDialog, $rootScope, $http, $log) {
        $scope.header = "TDA";
        $scope.selectedContent = "selected";
        $scope.treeConfig = {
          core: {
            multiple: false,
            animation: true,
            error: function(error) {
              $log.error('treeCtrl: error from js tree - ' + angular.toJson(error));
            },
            check_callback: true,
            worker: true
          },
          version: 1
        };
        $scope.changed = function(e, data) {
          var original = data.node.original;
          if (original.content) {
            $scope.selectedContent = original.content;
          } else {
            $scope.selectedContent = data.node.text;
          }
          $scope.$apply();
        };
        $scope.trust = function(data) {
          return $sce.trustAsHtml(data);
        };

        $http.get("/api/tree").then(function(response) {
          console.log(response.data);
          $scope.treeData = response.data.children;
          $scope.treeConfig.version++;
        });

      }).filter('sanitize', function($sce) {
    return function(htmlCode) {
      return $sce.trustAsHtml(htmlCode);
    }
  })

})();
