(function() {
  'use strict';

  describe('New Enrollment', function(){

    beforeEach(module('studentRoster'));

    var ctrl;

    beforeEach(inject(function(_$controller_) {

      ctrl = _$controller_('StudentsController');
    }));

    it('should show a form', function() {
      expect(ctrl.creationDate).toEqual(jasmine.any(Number));
    });

    // it('should define animate class after delaying timeout ', function() {
    //   $timeout.flush();
    //   expect(vm.classAnimation).toEqual('rubberBand');
    // });

    // it('should show a Toastr info and stop animation when invoke showToastr()', function() {
    //   vm.showToastr();
    //   expect(toastr.info).toHaveBeenCalled();
    //   expect(vm.classAnimation).toEqual('');
    // });

    // it('should define more than 5 awesome things', function() {
    //   expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
    //   expect(vm.awesomeThings.length === 5).toBeTruthy();
    // });
  });
})();
