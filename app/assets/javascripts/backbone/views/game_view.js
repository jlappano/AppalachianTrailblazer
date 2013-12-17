//model is Player
var GameView = Backbone.View.extend({
  className: "game-view",

  template: _.template($("script.game[type='text/html'").html()),

  initialize: function() {
    var shelter = this.model.get("shelter");
    shelter.getAdventurePrompt();
    this.render();
  },
  render: function() {
    this.$el.html(this.template());
  },

  events: {
    "click button.yes": "renderAnswerYes",
    "click button.no": "renderAnswerNo"
  },

  renderAnswerYes: function(e) {
    var adventure = this.model.get("shelter").get("adventurePrompt");
    this.$(".answer-buttons").remove();
    this.model.changeMorale(adventure.get("consequenceYes"));
    new AnswerViewYes({model: this.model, creator: this});
  },

  renderAnswerNo: function(e) {
    var adventure = this.model.get("shelter").get("adventurePrompt");
    this.$(".answer-buttons").remove();
    this.model.changeMorale(adventure.get("consequenceNo"));
    new AnswerViewNo({model: this.model, creator: this});
  }

});