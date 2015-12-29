(function() {
  'use strict';
  angular
    .module('starter')
    .controller('ChatDetailCtrl', ChatDetailCtrl);

  function ChatDetailCtrl(Chats, $stateParams) {
    var vm = this;
    
    vm.chat = Chats.get($stateParams.chatId);
  }
})();
