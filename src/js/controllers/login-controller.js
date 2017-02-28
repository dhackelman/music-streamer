(function() {
  angular.module('MusicStreaming').controller('LoginController', function($q, getData, StorageService, $state) {
    let userDeets = {
      username: '',
      password: ''
    };

      $q.when(getData.get2('./data/users.json')).then((response) => {
      this.allUsers = response.data;
      StorageService.set('all-users', this.allUsers);
      console.log(response.data);

    });

    this.grabForm = function() {
      this.userDeets = {
        username: event.target[0].value,
        password: event.target[1].value
      };
      console.log(this.userDeets);
    };

    this.compareStuff = function() {
      let login = true;
      for (let i = 0; i < this.allUsers.length; i++) {
        if (this.userDeets.username == this.allUsers[i].email && this.userDeets.password == this.allUsers[i].password) {
          console.log('login successful');
          StorageService.set('users', '');
          StorageService.set('users', this.allUsers[i].email);
          $state.go('MusicParent.index');
        } else {
          console.log('fuck you');
          login = true;
        }
      }
    };
  });

})();
