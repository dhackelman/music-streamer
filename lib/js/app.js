'use strict';

(function () {

  angular.module('MusicStreaming', ['ui.router', 'LocalStorageModule']);

  angular.module('MusicStreaming').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    console.log('in');

    $stateProvider.state('MusicParent', {
      url: '/',
      abstract: true,
      template: '<ui-view></ui-view>'
    }).state('MusicParent.index', {
      url: '',
      templateUrl: './templates/home.html'
    }).state('MusicParent.songlist', {
      url: 'song-list',
      templateUrl: './templates/song-list.html',
      controller: 'ListController as listCtrl'
    }).state('MusicParent.friendlist', {
      url: 'friend-list',
      templateUrl: './templates/friend-list.html',
      controller: 'FriendController as friendCtrl'
    });
  });
})();
'use strict';

(function () {
  angular.module('MusicStreaming').controller('FriendController', function ($q, getData) {
    var _this = this;

    $q.when(getData.get2('./data/users.json')).then(function (response) {
      _this.allFriends = response.data;
      console.log(response.data);
    });
  });
})();
'use strict';

(function () {
  angular.module('MusicStreaming').controller('ListController', function ($q, getData) {
    var _this = this;

    $q.when(getData.get('./data/music.json')).then(function (response) {
      _this.allSongs = response.data.songs;
      console.log(_this.allSongs);
    });
  });
})();
'use strict';

(function () {
  angular.module('MusicStreaming').service('getData', function ($http) {
    function fetchData(url) {
      return $http({
        method: 'GET',
        url: './data/music.json'
      });
    }
    function fetchData2(url) {
      return $http({
        method: 'GET',
        url: './data/users.json'
      });
    }

    return {
      get: fetchData,
      get2: fetchData2
    };
  });
})();