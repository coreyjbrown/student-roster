(function(){
	'use strict';

	angular.module('studentRoster')

	.directive('schoolEnrollments', function () {
		return {
			restrict: 'A',
			templateUrl: 'app/students/school-enrollments.html'
		};
	})
})();