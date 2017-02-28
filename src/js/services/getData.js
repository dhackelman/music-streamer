(function() {
    angular.module('MusicStreaming').service('getData', function($http) {
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
