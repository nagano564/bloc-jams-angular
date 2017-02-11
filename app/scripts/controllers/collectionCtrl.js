 (function() {
     function CollectionCtrl(Fixtures) {
        this.albums = Fixtures.getColletion(12);
        }
     }
 
     angular
         .module('blocJams')
         .controller('CollectionCtrl', ['Fixtures', CollectionCtrl);
 })();