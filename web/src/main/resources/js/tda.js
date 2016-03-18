function rightInfo(){
  console.log("global");
}
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

      .controller('HomeCtrl', function($scope, $sce, ngDialog, $rootScope, $http, $log, $compile) {
        $scope.allData = [];
        $scope.header = "TDA";
        $scope.selectedContent = "bottom";
        $scope.selectedRight = "right";
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

        $scope.loadSleeping = function() {
          console.log("==============================");
          console.log("Load sleeping threads");
          console.log("==============================");
        };

        $scope.changed = function(e, data) {
          console.log(data);
          data.instance.toggle_node(data.node);
          var original = data.node.original;
          if (original.target) {
            console.log("target");
            console.log(original.target);
            var children = original.target.children[0].children;
            $scope.selectedRight = "";
            $scope.rightReferences = [];
            for (var i = 0; i < children.length; i++) {
              var child = children[i];
              //console.log(child);
              $scope.rightReferences[i] = child.children ? child.children[0].content : "";
              $scope.selectedRight += "<div><a data-ng-click=\"rightInfo(" + i + ")\" >";
              $scope.selectedRight += child.text;
              $scope.selectedRight += "</a></div>";
            }
            $scope.selectedContent = "";
            $scope.$apply();
            return;
          }
          if (original.overview) {
            $scope.selectedContent = original.overview;
          }
          else if (original.content) {
            $scope.selectedContent = original.content;
          } else {
            $scope.selectedContent = data.node.text;
          }
          $scope.$apply();
        };
        $scope.rightInfo = function(idx) {
          console.log("====================");
          console.log(idx);
          $scope.selectedContent = $scope.rightReferences[idx];
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
            var root = {'text': $scope.allData[i].text, 'overview': $scope.allData[i].overview};
            $scope.treeData.push(root);
            var children = $scope.allData[i].children;
            root.children = [];
            if (children) {
              for (var j = 0; j < children.length; j++) {
                var child = children[j];
                var text = child.text;
                if (root.text.lastIndexOf(text, 0) === 0) {
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
  }).directive('compile', [
    '$compile', function($compile) {
      return function(scope, element, attrs) {
        scope.$watch(
            function(scope) {
              return scope.$eval(attrs.compile);
            },
            function(value) {
              element.html(value);
              $compile(element.contents())(scope);
            }
        )
      };
    }
  ])

})();
