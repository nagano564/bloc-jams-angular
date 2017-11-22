 (function() {
     function Fixtures() {
         var Fixtures = {};

         var albumPicasso = {
            id: 1,
            title: 'The Colors',
            artist: 'Pablo Picasso',
            label: 'Cubism',
            year: '1881',
            albumArtUrl: '/assets/images/album_covers/01.png',
            songs: [
                 { title: 'Blue', duration: '161.71', audioUrl: '/assets/music/blue' },
                 { title: 'Green', duration: '103.96', audioUrl: '/assets/music/green' },
                 { title: 'Red', duration: '268.45', audioUrl: '/assets/music/red' },
                 { title: 'Pink', duration: '153.14', audioUrl: '/assets/music/pink' },
                 { title: 'Magenta', duration: '374.22', audioUrl: '/assets/music/magenta' },
         ]
     };

         var albumJake = {
            id: 2,
            title: 'Miles Away',
            artist: 'Jake Incao',
            label: 'Cubism',
            year: '2000',
            albumArtUrl: '/assets/images/album_covers/jake.jpeg',
            songs: [
                 { title: 'Gloria', duration: '161.71', audioUrl: '/assets/music/blue' },
                 { title: 'Miles Away', duration: '103.96', audioUrl: '/assets/music/green' },
                 { title: 'Til the Heavans Cry', duration: '268.45', audioUrl: '/assets/music/red' },
                 { title: 'Someday', duration: '153.14', audioUrl: '/assets/music/pink' },
                 { title: 'Mind Wide Open', duration: '374.22', audioUrl: '/assets/music/magenta' },
         ]
     };

     var albumsArr = [
       albumPicasso,
       albumJake
     ];

         Fixtures.getAlbum = function(id){
             id *= 1;
             return albumsArr.find(function(album){
               return album.id === id;
             });
         };

         Fixtures.getCollection = function(){
            return albumsArr;
         };

         return Fixtures;
     }

     angular
         .module('blocJams')
         .factory('Fixtures', Fixtures);
 })();
