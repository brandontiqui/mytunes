// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    //this.fetch('');
  }, 

  fetch: function(keyword) {
    var context = this;
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      data: {
        'where': { 
          'title': { 
            '$regex': keyword, 
            '$options': 'i' 
          } 
        }
      },
      success: function(data) {
        context.reset(data.results);
        console.log(data.results);
      }
    });
  }

});