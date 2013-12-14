var GameView = Backbone.View.extend({
  el: $("<div>"),

  template: _.template($("script.game[type='text/html'").html()),

  initialize: function() {
    this.model.setInitialShelter();
    var shelter = this.model.get("shelter");
    shelter.getAdventurePrompt();

    // var adventure = shelter.get("adventurePrompt");
    this.render();
  },

  events: {
    "click button.yes": "renderAnswerYes",
    "click button.no": "renderAnswerNo"
  },

  renderAnswerYes: function() {
    var adventure = this.model.get("shelter").get("adventurePrompt")
    this.$(".answer-buttons").remove();
    new AnswerViewYes({model: adventure});
  },

  renderAnswerNo: function() {
    var adventure = this.model.get("shelter").get("adventurePrompt")
    this.$(".answer-buttons").remove();
    new AnswerViewNo({model: adventure});
  },

  render: function() {
    this.$el.html(this.template());
  }

});