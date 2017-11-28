 (function() {
     function AlbumCtrl(Fixtures, SongPlayer, $stateParams) {
       console.log($stateParams);
       this.albumData = Fixtures.getAlbum($stateParams.id);
       this.songPlayer = SongPlayer;
       this.songPlayer.setAlbum(this.albumData);
       console.log(this.albumData);
     }

     angular
         .module('blocJams')
         .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', '$stateParams', AlbumCtrl]);
 })();
