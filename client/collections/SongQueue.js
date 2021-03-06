// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.models.length === 1) {
        this.playFirst();
      }
    }, this);
    
    this.on('ended', function(song) {
      //console.log(song);
      this.remove(this.at(0));
      if (this.models.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      if (song === this.at(0)) {
        this.remove(song);
        if (this.models.length > 0) {
          this.playFirst();
        }
      } else {
        this.remove(song);  
      }
    });
  },

  playFirst: function() {
    this.at(0).play();
  }

});