var SearchView = Backbone.View.extend({
  initialize: function() {
    this.render();

  }, 

  events: {
    'click button': function() {
      var val = this.$el.find('input').val();
      this.collection.fetch(val);
    }
  },

  render: function() {
    return this.$el.html('<div><input type="text"><button type="button">Search</button></div>');
  }
});