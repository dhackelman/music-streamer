(function() {
  angular.module('MusicStreaming').controller('FriendController', function($q, getData, $state) {
    $q.when(getData.get2('./data/users.json')).then((response) => {
      this.allFriends = response.data;
      // console.log(response.data);
    });

    this.showDetails = function() {
      $state.go('MusicParent.userDetail');
    }
  });
})();
