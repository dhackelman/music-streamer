(function () {

  const app = angular.module('MusicStreaming', ['ui.router', 'LocalStorageModule']);

  angular.module('MusicStreaming').config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    console.log('in');

    $stateProvider.state('MusicParent', {
      url:'/',
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
      controller: 'FriendController as friendCtrl',
    }).state('MusicParent.userDetail', {
      url: 'user-detail',
      templateUrl: './templates/user-detail.html',
      controller: 'DetailController as detailCtrl',
    }).state('MusicParent.songDetails', {
      url: 'song-details',
      templateUrl: './templates/song-details.html',
      controller: 'SongController as songCtrl',
    });;
  });

})();
