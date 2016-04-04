(function() {
  'use strict';

  angular
    .module('studentRoster')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: 'NavbarCtrl',
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;

  }

})();
