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
		this.birthDate = enrollmentInfo.studentDetails.dob;
		this.schoolName = enrollmentInfo.schoolDetails.schoolName;
		this.admitDate = enrollmentInfo.studentDetails.admitDate;
		this.previousSchool = enrollmentInfo.studentDetails.sendingSchool;
		this.isEditing = false;
	}

	Enrollment.prototype.editEnrollment = function() {
		this.isEditing = true;
		this.tempLogin = angular.copy(this.login);
	};

	Enrollment.prototype.cancelEdit = function() {
		this.tempLogin = {};
		this.isEditing = false;
	};

	Enrollment.prototype.saveChanges = function() {
		this.login = angular.copy(this.tempLogin);
		this.tempLogin = {};
		this.isEditing = false;
	};

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

