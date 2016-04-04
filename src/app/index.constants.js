/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('studentRoster')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('UI_STATES', {
    	HOME: 'home',
    	STUDENTS: 'students',
    	ENROLLMENTS: 'enrollments',
    	SCHOOLS: 'schools'
    });


})();
