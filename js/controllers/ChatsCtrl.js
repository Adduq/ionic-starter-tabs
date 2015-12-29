(function() {
  'use strict';
  angular
    .module('starter')
    .controller('ChatsCtrl', ChatsCtrl);

    function ChatsCtrl (Chats){
      var vm = this;
      vm.remove = removeChat

      vm.chats = Chats.all();

      function removeChat(chat) {
        Chats.remove(chat);
      }
    }
  })();
