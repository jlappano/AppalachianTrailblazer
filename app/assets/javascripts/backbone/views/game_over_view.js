var GameOverView = Backbone.View.extend({
  className: "view game-over-view",

  initialize: function(options) {
    if (options.over == "win") {
      this.template = _.template($("script.gameWon").html());  
    } else {
      this.template = _.template($("script.gameLost").html());
    }
    this.render();
  },
  render: function() {
    console.log("game over render");
    this.$el.html(this.template());
  },

  events: {
    "click button.restart": "restart"
  },

  restart: function() {
    TrailBlazerApp.player = new Player({trail: TrailBlazerApp.shelters});
    TrailBlazerApp.answerView.remove();
    this.remove();
    Backbone.history.navigate("", {trigger: true});
  }

});