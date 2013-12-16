//model is player
var AnswerViewNo = Backbone.View.extend({
  className: "view-no",

  template: _.template($("script.answerNo[type='text/html'").html()),

  initialize: function(options){
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
    this.creator.remove();

    this.model.hikeTheTrail();
    this.$el.remove();
    var gamie = new GameView({model: this.model});
    $("body").append( gamie.el );
    this.remove();
  }

});