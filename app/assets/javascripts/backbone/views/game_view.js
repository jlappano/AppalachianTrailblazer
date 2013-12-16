//model is Player
var GameView = Backbone.View.extend({
  el: $("<div>"),

  template: _.template($("script.game[type='text/html'").html()),

  initialize: function() {
    var shelter = this.model.get("shelter");
    shelter.getAdventurePrompt();
    this.render();
  },

  events: {
    "click button.yes": "renderAnswerYes",
    "click button.no": "renderAnswerNo"
  },

  renderAnswerYes: function() {
    var adventure = this.model.get("shelter").get("adventurePrompt");
    this.$(".answer-buttons").remove();
    this.model.changeMorale(adventure.get("consequenceYes"));
    new AnswerViewYes({model: this.model});
  },

  renderAnswerNo: function() {
    var adventure = this.model.get("shelter").get("adventurePrompt");
    this.$(".answer-buttons").remove();
    this.model.changeMorale(adventure.get("consequenceNo"));
    new AnswerViewNo({model: this.model});
  },

  render: function() {
    this.$el.html(this.template());
  }

});