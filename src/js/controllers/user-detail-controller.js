(function() {
  angular.module('MusicStreaming').controller('DetailController', function(StorageService) {
    this.users = StorageService.get('users');
    this.songsLiked = 0;
    this.friends = 0;

    this.allUsers = StorageService.get('all-users');
    console.log(this.allUsers);

    for (let i = 0; i < this.allUsers.length; i++) {
      if (this.users == this.allUsers[i].email) {
        this.songsLiked = this.allUsers[i].songsLiked;
        this.friends = this.allUsers[i].friends;
      } else {
        console.log('fuck you');
      }
    };

  });
})();
