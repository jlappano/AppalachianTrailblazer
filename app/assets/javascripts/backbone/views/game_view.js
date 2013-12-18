//model is Player
var GameView = Backbone.View.extend({
  className: "view game-view",

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
    "click button": "renderAnswer",
  },

  renderAnswer: function(e) {
    var answer = e.currentTarget.name;
    console.log(answer);

    var adventure = this.model.get("shelter").get("adventurePrompt");
    
    if (answer == "yes") {
      console.log();
      this.model.changeMorale(adventure.get("consequenceYes"));
    } else {
      this.model.changeMorale(adventure.get("consequenceNo"));
    }

    new AnswerView({model: this.model, creator: this, answer: answer});
  }
});