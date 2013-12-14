var GameView = Backbone.View.extend({
  el: $("<div>"),

  template: _.template($("script.game[type='text/html'").html()),

  initialize: function() {

    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  }

});