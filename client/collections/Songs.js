// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    // this.on('enqueue', function() {

    // });
    var context = this;
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      success: function(data) {
        context.add(data.results);
        console.log(data.results);
      }
    });
  }

});