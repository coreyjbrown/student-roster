(function() {
  'use strict';

  angular
    .module('studentRoster')
    .controller('MainController', function ($scope, $timeout, UI_STATES, authToken) {
      var self = this;
      self.uiStates = UI_STATES;
    });

})();
