(function() {
  'use strict';

  angular
    .module('studentRoster')
    .controller('SharedController', function ($timeout, SchoolResource) {
      var self = this;

      SchoolResource.getSchools()
      .$promise
      .then(function onSuccess(SchoolResponse){
        self.schools = SchoolResponse.data;
      });
      
    });

})();
