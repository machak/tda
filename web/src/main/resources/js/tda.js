(function() {
  "use strict";
  angular.module('tda.module', [
        'ngRoute', 'nvd3', 'flow', 'ngDialog',
        'ngNotificationsBar', 'ngSanitize',
        'dragularModule', 'ngJsTree'
      ])
      .config(function($provide, $routeProvider, $httpProvider) {
        $routeProvider
            .when('/thread', {
              templateUrl: '/thread.html',
              controller: 'ThreadCtrl'
            }).when('/', {
          controller: 'HomeCtrl'
        })
      })

      .controller('HomeCtrl', function($scope, $sce, ngDialog, $rootScope, $http, $log) {
        $scope.allData = [];
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
          $scope.allData = response.data.children;
          $scope.treeData = [];
          var length = $scope.allData.length;
          // display only first level
          for (var i = 0; i < length; i++) {
            console.log($scope.allData[i]);
            var root = {'text': $scope.allData[i].text};
            $scope.treeData.push(root);
            var children = $scope.allData[i].children;
            root.children = [];
            if (children) {
              for (var j = 0; j < children.length; j++) {
                var child = children[j];
                var text = child.text;
                if(root.text.lastIndexOf(text, 0) === 0){
                  continue;
                }
                root.children.push({'text': text, 'target': child});
              }
            }
          }

          $scope.treeConfig.version++;
        });

      }).filter('sanitize', function($sce) {
    return function(htmlCode) {
      return $sce.trustAsHtml(htmlCode);
    }
  })

})();
