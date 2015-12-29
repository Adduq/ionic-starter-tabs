(function() {
  'use strict';
  angular
    .module('starter')
    .controller('AccountCtrl', AccountCtrl);

  function AccountCtrl() {
    var vm = this;

    vm.settings = {enableFriends: true};
  }
})();
