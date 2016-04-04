(function() {
  'use strict';

  angular
    .module('studentRoster')
    .controller('StudentsController', function ($timeout, StudentResource) {
      var self = this;

      StudentResource.getStudents()
      .$promise
      .then(function onSuccess(StudentsResponse){
        self.students = StudentsResponse.data;
      });
      
    });

})();
