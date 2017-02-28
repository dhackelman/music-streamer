'use strict';

(function () {

  var app = angular.module('MusicStreaming', ['ui.router', 'LocalStorageModule']);

  angular.module('MusicStreaming').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    console.log('in');

    $stateProvider.state('MusicParent', {
      url: '/',
      abstract: true,
      template: '<ui-view></ui-view>'
    }).state('MusicParent.login', {
      url: 'login',
      templateUrl: './templates/login.html',
      controller: 'LoginController as loginCtrl'
    }).state('MusicParent.newUser', {
      url: 'new',
      templateUrl: './templates/new-user.html',
      controller: 'NewUserController as newCtrl'
    }).state('MusicParent.index', {
      url: '',
      templateUrl: './templates/home.html',
      controller: 'HomeController as homeCtrl'
    }).state('MusicParent.songlist', {
      url: 'song-list',
      templateUrl: './templates/song-list.html',
      controller: 'ListController as listCtrl'
    }).state('MusicParent.friendlist', {
      url: 'friend-list',
      templateUrl: './templates/friend-list.html',
      controller: 'FriendController as friendCtrl'
    }).state('MusicParent.userDetail', {
      url: 'user-detail',
      templateUrl: './templates/user-detail.html',
      controller: 'DetailController as detailCtrl'
    }).state('MusicParent.songDetails', {
      url: 'song-details',
      templateUrl: './templates/song-details.html',
      controller: 'SongController as songCtrl'
    });;
  });
})();
'use strict';

(function () {
  angular.module('MusicStreaming').controller('FriendController', function ($q, getData, $state) {
    var _this = this;

    $q.when(getData.get2('./data/users.json')).then(function (response) {
      _this.allFriends = response.data;
      // console.log(response.data);
    });

    this.showDetails = function () {
      $state.go('MusicParent.userDetail');
    };
  });
})();
'use strict';

(function () {
  angular.module('MusicStreaming').controller('HomeController', function (StorageService, $state) {
    this.users = StorageService.get('users');

    this.userDeets = function () {
      $state.go('MusicParent.userDetail');
    };
  });
})();
'use strict';

(function () {
  angular.module('MusicStreaming').controller('LoginController', function ($q, getData, StorageService, $state) {
    var _this = this;

    var userDeets = {
      username: '',
      password: ''
    };

    $q.when(getData.get2('./data/users.json')).then(function (response) {
      _this.allUsers = response.data;
      StorageService.set('all-users', _this.allUsers);
      console.log(response.data);
    });

    this.grabForm = function () {
      this.userDeets = {
        username: event.target[0].value,
        password: event.target[1].value
      };
      console.log(this.userDeets);
    };

    this.compareStuff = function () {
      var login = true;
      for (var i = 0; i < this.allUsers.length; i++) {
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
'use strict';

(function () {
  angular.module('MusicStreaming').controller('NewUserController', function (StorageService) {
    var userDeets = {
      username: '',
      password: ''
    };

    this.grabForm = function () {
      this.userDeets = {
        username: event.target[0].value,
        password: event.target[1].value
      };
      // console.log(this.allUsers);
      // StorageService.get('all-users', this.userDeets);
    };
  });
})();
'use strict';

(function () {
  angular.module('MusicStreaming').controller('SongController', function ($q, getData, $state) {
    var _this = this;

    $q.when(getData.get('./data/music.json')).then(function (response) {
      _this.allSongs = response.data.songs;
      console.log(_this.allSongs);
    });

    this.showDetails = function () {
      $state.go('MusicParent.songDetail');
    };
  });
})();
'use strict';

(function () {
  angular.module('MusicStreaming').controller('ListController', function ($q, getData, $state) {
    var _this = this;

    $q.when(getData.get('./data/music.json')).then(function (response) {
      _this.allSongs = response.data.songs;
      console.log(_this.allSongs);
    });

    this.showDetails = function () {
      $state.go('MusicParent.songDetails');
    };
  });
})();
'use strict';

(function () {
  angular.module('MusicStreaming').controller('DetailController', function (StorageService) {
    this.users = StorageService.get('users');
    this.songsLiked = 0;
    this.friends = 0;

    this.allUsers = StorageService.get('all-users');
    console.log(this.allUsers);

    for (var i = 0; i < this.allUsers.length; i++) {
      if (this.users == this.allUsers[i].email) {
        this.songsLiked = this.allUsers[i].songsLiked;
        this.friends = this.allUsers[i].friends;
      } else {
        console.log('fuck you');
      }
    };
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
    function fetchData3(url) {
      return $http({
        method: 'GET',
        url: './data/users.json'
      });
    }

    return {
      get: fetchData,
      get2: fetchData2,
      get3: fetchData3
    };
  });
})();
'use strict';

(function (ng) {
    "use strict";

    ng.module('MusicStreaming').service('StorageService', function (localStorageService) {
        function setItems(key, value) {
            localStorageService.set(key, value);
        }

        function getItems(key) {
            return localStorageService.get(key);
        }

        return {
            set: setItems,
            get: getItems
        };
    });
})(angular);