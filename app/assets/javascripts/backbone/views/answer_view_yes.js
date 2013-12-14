var AnswerViewYes = Backbone.View.extend({

  el: $("<div>"),

  template: _.template($("script.answerYes[type='text/html'").html()),

  initialize: function(){
    console.log(this.model);
     this.render();
    // this.$el.append( $("<p>answer</p>") );
    // this.$el.append( $("<button>move on</button>") );
  },

  render: function() {
    $("body").append(this.el);
    this.$el.html(this.template());
  }


});