//model is Player
var GameView = Backbone.View.extend({
  className: "view game-view",

  initialize: function() {
    this.template = _.template($("script.game").html());
    var shelter = this.model.get("shelter");
    shelter.getAdventurePrompt();
    // this.barRender();
    this.render(); 
    this.changeBar();
  },


  render: function() {
    this.$el.html(this.template());
  },

  events: {
    "click button": "renderAnswer",
  },

  changeBar: function() {
      var progress = this.$(".bar-percentage");
      // console.log(progress.attr('data-percentage'));
      var percentage = progress.attr('data-percentage');
      console.log("percent");
      console.log(percentage);
      $({countNum: 0}).animate({countNum: percentage}, {
        duration: 1000,
        easing:'linear',
        progress: function() {
        // What todo on every count
        console.log(this.countNum);
        var pct = Math.ceil(this.countNum) + '%';
        progress.text(pct);
        progress.siblings().children().css('width',pct);
      }
    });
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
    this.innerView1 = new AnswerView({model: this.model, creator: this, answer: answer});
    this.$('.inner-view-container')
        .append(this.innerView1.el)
  }
});