(function() {
  'use strict';

  angular
    .module('studentRoster')
    .controller('EnrollmentsController', function ($timeout) {
      var self = this;

      self.test = {
        first: 'Tom',
        last: 'Sawyer'
      };
      
      console.log('Hello World'); 
    });

})();
