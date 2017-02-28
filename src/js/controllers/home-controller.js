(function() {
  angular.module('MusicStreaming').controller('HomeController', function(StorageService, $state) {
    this.users = StorageService.get('users');

    this.userDeets = function() {
      $state.go('MusicParent.userDetail');
    }
  });

})();
