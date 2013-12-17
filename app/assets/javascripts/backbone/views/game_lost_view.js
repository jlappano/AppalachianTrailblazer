var GameLostView = Backbone.View.extend({

 template: _.template($("script.gameLost[type='text/html'").html()),

  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template());
  },

});