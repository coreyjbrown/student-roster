'use_strict';

angular.module('studentRoster')

.factory('SchoolResource', function ($resource, authToken) {
	return $resource('https://nv-student-api-dev.herokuapp.com/v1/schools', null, {
		getSchools: {
			method: 'GET',
			isArray: false,
			headers: {
				Accept: 'application/json',
				Authorization: authToken
			}
		}
	});
})

.factory('School', function () {
	
	function School(schoolInfo){
		this.fullName = schoolInfo.fullName;
		this.schoolId = schoolInfo._id;
		this.nickName = schoolInfo.nickName;
		this.grades = schoolInfo.gradesServed;
	}

	return School;
})

.value('authToken', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL252LXN0dWRlbnQtYXBpLWRldi5hdXRoMC5jb20vIiwiZW1haWwiOiJ0ZXN0MmRvZUB5b3VwZC5vcmciLCJhdWQiOiJFc2tOdjN3VWF4VnppR214MzVqNVBrV3F6SlhQRU1MMCIsImlhdCI6MTQ2MDMyOTM3OCwiZXhwIjoxNDYwMzY1Mzc4fQ.xX_GuC_lqKzg19p0lv_VqOG_ON35g4X9koT1vnhupZU');