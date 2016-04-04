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

.factory('Enrollment', function () {
	
	function Enrollment(enrollmentInfo){
		this.lastFirst = enrollmentInfo.studentDetails.name.lastFirst;
		this.studentId = enrollmentInfo.studentId;
		this.schoolName = enrollmentInfo.schoolDetails.schoolName;
		this.admitDate = enrollmentInfo.studentDetails.admitDate;
		this.previousSchool = enrollmentInfo.studentDetails.sendingSchool;
	}

	return Enrollment;
})

.factory('Student', function () {

	function Student(studentInfo){
		this.lastFirst = studentInfo.studentDetails.name.lastFirst;
		this.studentId = studentInfo.studentId;
		this.schoolName =  studentInfo.schoolDetails.schoolName;

	}
		return Student;
});

