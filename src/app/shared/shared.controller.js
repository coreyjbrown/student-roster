(function() {
  'use strict';

  angular
    .module('studentRoster')
    .controller('SharedController', function ($timeout, SchoolResource, School) {
      var self = this;
      self.schools = [];
      self.mySchools = [];

      SchoolResource.getSchools()
      .$promise
      .then(function onSuccess(SchoolResponse){
        self.schools = SchoolResponse.data.map(function(e){
          return new School(e);
        });
      });
      
    });

})();
