'use strict';
(function() {
// Declare app level module which depends on views, and components
var peerEvalApp = angular.module('peerEvalApp', [ ]);

peerEvalApp.controller('courseListCtrl', function () {
  this.courseData = courseList;
});

  var courseList = [
        {name: 'Is1',
         description: 'intro a la is',
          instructor: 'gastn'},
        {name: 'Is2',
         description: 'intro a la is222',
         instructor: 'Maartin'},
        {name: 'DA1',
         description: 'intro al disño',
         instructor: 'Nacho'}
      ];

// config script
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
})();
