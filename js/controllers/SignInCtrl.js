(function() {
  'use strict';
  angular
    .module('starter')
    .controller('SignInCtrl', SignInCtrl);

  function SignInCtrl($state) {
    var vm = this;
    vm.submit = submit;


    function submit() {
      $state.go('tab.dash');
    }
    vm.user = {};

  }
})();
