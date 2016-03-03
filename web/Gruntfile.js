module.exports = function(grunt) {
  grunt.initConfig({
    bowercopy: {
      options: {
        srcPrefix: 'bower_components'
      },
      scripts: {
        options: {
          destPrefix: 'js/'
        },
        files: {
          //'jquery.js': 'jquery/dist/jquery.min.js',
          'angular.js': 'angular/angular.min.js',
          'angular-route.js': 'angular-route/angular-route.min.js',
          'angular-animate.js': 'angular-animate/angular-animate.min.js',
          'angular-cookies.js': 'angular-cookies/angular-cookies.min.js',
          'angular-nvd3.js': 'angular-nvd3/dist/angular-nvd3.min.js',
          'ng-flow.js': 'ng-flow/dist/ng-flow.min.js',
          'flow.js': 'flow.js/dist/flow.min.js',
          'dragular.js': 'dragular/dist/dragular.min.js',
          'ng-dialog.js': 'ng-dialog/js/ngDialog.min.js',
          'angularjs-datepicker.js': 'angularjs-datepicker/dist/angular-datepicker.min.js',
          'angular-sanitize.js': 'angular-sanitize/angular-sanitize.min.js',
          'notification-bar.js': 'ng-notifications-bar/dist/ngNotificationsBar.min.js',
          'ng-wig.js': 'ngWig/dist/ng-wig.min.js',
          'd3.js': 'd3/d3.min.js',
          'angular-tree-control.js': 'angular-tree-control/angular-tree-control.js',
          'nvd3.js': 'nvd3/build/nv.d3.min.js'
        }
      }
    },
    comments: {
      strip_comments: {
        options: {
          singleline: true,
          multiline: true
        },
        src: ['js/*.js']
      }
    },
    concat: {

      js_common: {
        src: [
          // JQUERY
          //'js/jquery.js',
          'js/angular.js',
          'js/angular-route.js',
          'js/angular-animate.js',
          'js/angular-sanitize.js',
          /*'js/angular-cookies.js',*/
          'js/d3.js',
          'js/nvd3.js',
          'js/angular-nvd3.js',
          'js/ng-flow.js',
          'js/flow.js',
          'js/dragular.js',
          'js/ng-dialog.js',
          'js/angularjs-datepicker.js',
          'js/notification-bar.js',
          'js/angular-tree-control.js'


          /*'js/loading-bar.js',*/
          /*'js/angucomplete-alt.js'*/
        ],
        dest: 'js/common.js',
        options: {
          separator: '\n',
          stripBanners: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-stripcomments');
  grunt.registerTask('build', [
    'bowercopy', /*'comments:strip_comments',*/
    'concat:js_common'
  ]);
};