// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.append(this.collection.map(function(queueEntry) {
      var temp = new SongQueueEntryView({ model: queueEntry });
      return temp.render();
    }));
    return this.$el;
  }

});
