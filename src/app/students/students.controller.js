(function() {
  'use strict';

  angular
    .module('studentRoster')
    .controller('StudentsController', function ($timeout, StudentResource, Student, Enrollment) {
      var self = this;
      self.myStudents = [];
      self.students = [];
      self.myEnrollments = [];

      StudentResource.getStudents()
      .$promise
      .then(function onSuccess(StudentsResponse){
        self.students = StudentsResponse.data;
        self.myStudents = self.students.map(function(e){
          return new Student(e);
        });
        self.myEnrollments = self.students.map(function(e){
          return new Enrollment(e);
        });
      }).catch(function(error){
        console.log(error);
      });


    });

})();
