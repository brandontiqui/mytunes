// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    //this.listenTo(this.collection, 'change', this.render);
    this.collection.on('change reset add remove', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    
    this.$el.html('<th>Queue</th>').append(this.collection.map(function(queueEntry) {
      var temp = new SongQueueEntryView({ model: queueEntry });
      return temp.render();
    }));
    return this.$el;
  }

});
