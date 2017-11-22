 (function() {
     function AlbumCtrl(Fixtures, SongPlayer, $stateParams) {
       console.log($stateParams);
       this.albumData = Fixtures.getAlbum($stateParams.id);
       this.songPlayer = SongPlayer;
       console.log(this.albumData);
     }

     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', '$stateParams', AlbumCtrl]);
 })();
