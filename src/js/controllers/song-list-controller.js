(function() {
  angular.module('MusicStreaming').controller('ListController', function($q, getData, $state) {
    $q.when(getData.get('./data/music.json')).then((response) => {
      this.allSongs = response.data.songs;
      console.log(this.allSongs);
    });

    this.showDetails = function() {
      $state.go('MusicParent.songDetails');
    }
  });
})();
