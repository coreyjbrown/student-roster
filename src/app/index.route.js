(function() {
  'use strict';

  angular
    .module('studentRoster')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, UI_STATES) {
    $stateProvider
    .state(UI_STATES.HOME, {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'ctrl'
    })
    .state(UI_STATES.STUDENTS, {
      url: '/students',
      templateUrl: 'app/students/students.html',
      controller: 'StudentsController',
      controllerAs: 'ctrl'
    })
    .state(UI_STATES.ENROLLMENTS, {
      url: '/enrollments',
      templateUrl: 'app/enrollments/enrollments.html',
      controller: 'StudentsController',
      controllerAs: 'ctrl'
    })
    .state(UI_STATES.SCHOOLS, {
      url: '/schools',
      templateUrl: 'app/shared/shared.html',
      controller: 'SharedController',
      controllerAs: 'ctrl'
    });

    $urlRouterProvider.otherwise('/');
  }

})();
