(function() {
  'use strict';

  angular
    .module('studentRoster')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
