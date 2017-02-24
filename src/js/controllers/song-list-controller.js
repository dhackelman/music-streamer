(function() {
  angular.module('MusicStreaming').controller('ListController', function($q, getData) {
    $q.when(getData.get('./data/music.json')).then((response) => {
      this.allSongs = response.data.songs;
      console.log(this.allSongs);
    });
  });
})();
