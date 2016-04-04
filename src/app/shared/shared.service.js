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

.value('authToken', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL252LXN0dWRlbnQtYXBpLWRldi5hdXRoMC5jb20vIiwiZW1haWwiOiJ0ZXN0MmRvZUB5b3VwZC5vcmciLCJhdWQiOiJFc2tOdjN3VWF4VnppR214MzVqNVBrV3F6SlhQRU1MMCIsImlhdCI6MTQ1OTc5Njg1MywiZXhwIjoxNDU5ODMyODUzfQ.R2jInLtWEq8UM_b5UrDTAyuMBhRJ4-KQLRwvritT71g');