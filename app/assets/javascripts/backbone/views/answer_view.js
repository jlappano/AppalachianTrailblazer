//model is player
var AnswerView = Backbone.View.extend({
  className: "view answer-view",

  initialize: function(options){
    var answer = options.answer;
    this.model.checkWin();
    
    //creator is the gameview that triggered this view
    this.creator = options.creator;
    
    this.template = _.template($("script.answer-"+ answer).html());
    this.render();
  },
  render: function() {
    $("body").append(this.el);
    this.$el.html(this.template());

    // GAME OVER HAPPENS HERE
    //  because most events around game ending are tied to a change on the player model,
    //  the events happen the moment the morale is changed on the model, ie before this
    //  view is rendered... thus when this view is rendered the game will have been over
    //  if the morale is lower than 0 or shelter is greater than length
    // render buttons accordingly:
    //  > if game over, remove answer view's default onwards (ie .next) button
    //  > if game not over, show answer view's onwards button but remove game_view's buttons
    //    (if game over, then game_view buttons will be gone b/c
    //     game_view is gone, so no need to remove)
    //
    if (this.model.get("over") != "") {
      console.log("Game Over!");
      this.remove();
      $(".next").remove();
    } else {
      $(".answer-buttons").remove();  
    }
    
  },

  events: {
    "click button.next": "moveOn"
  },

  moveOn: function() {
    console.log("move along!");
    console.log(this.model);

    this.creator.remove();
    this.model.hikeTheTrail();
    this.remove();

    Backbone.history.navigate(
      "shelter/" + this.model.get("shelter").get("sequence"),
      {trigger: true}
    );
  }

});