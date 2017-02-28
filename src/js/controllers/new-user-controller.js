(function() {
  angular.module('MusicStreaming').controller('NewUserController', function(StorageService) {
    let userDeets = {
      username: '',
      password: ''
    };

    this.grabForm = function() {
      this.userDeets = {
        username: event.target[0].value,
        password: event.target[1].value
      };
      // console.log(this.allUsers);
      // StorageService.get('all-users', this.userDeets);
    };

  });
})();
