//model is player
var AnswerViewYes = Backbone.View.extend({
  className: "view-yes",

  template: _.template($("script.answerYes[type='text/html'").html()),

  initialize: function(options){
    //creator is the gameview that triggered this view
    this.creator = options.creator;
    this.render();
  },

  events: {
    "click button.next": "moveOn"
  },

  render: function() {
    $("body").append(this.el);
    this.$el.html(this.template());
  },

  moveOn: function() {

    // remove the previous gameview
    if(this.model.get("won") == ""){
      this.creator.remove();
      this.model.hikeTheTrail();
      var gamie = new GameView({model: this.model});
      $("body").append( gamie.el );
      this.remove();
    }
    else {
      this.creator.remove();
      this.remove();
    }
  }

});