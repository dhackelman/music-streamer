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
      templateUrl: './templates/song-list.html'
      // controller: 'ListController as listCtrl'
    }).state('MusicParent.friendlist', {
      url: 'friend-list',
      templateUrl: './templates/friend-list.html'
    });
  });
})();