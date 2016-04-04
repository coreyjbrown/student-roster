'use strict';

angular.module('studentRoster')

.factory('StudentResource', function ($resource, authToken){
	return $resource('https://nv-student-api-dev.herokuapp.com/v1/students', null, {
		getStudents: {
			method: 'GET',
			isArray: false,
			headers: {
				Accept: 'application/json',
				Authorization: authToken
			}
		}
	});
})

.factory('Student', function (student) {
	this.lastFirst = student.studentDetails.name.lastFirst;
	this.studentId = student.student.studentId;
	this.schoolName =  student.schoolDetails.schoolName;
	return this;
});

