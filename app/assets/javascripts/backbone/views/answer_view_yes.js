//model is player
var AnswerViewYes = Backbone.View.extend({

  el: $("<div>"),

  template: _.template($("script.answerYes[type='text/html'").html()),

  initialize: function(){
    console.log(this.model);
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
    this.model.hikeTheTrail();
    this.$el.remove();
    new GameView({model: this.model});
  }

});