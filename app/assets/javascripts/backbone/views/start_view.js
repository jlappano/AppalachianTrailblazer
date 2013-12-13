var StartView = Backbone.View.extend({

  el: $("<div>"),

  initialize: function(){
    this.$el.append( $("<h3>Start Game?</h3>") );
    this.$el.append( $("<button>HECK YEAAAAAAAA</button>") );
  },

  events: {
    "click button": "renderCharacterCreate"
  },

  renderCharacterCreate: function(){
    this.remove();
    Backbone.history.navigate("characterCreate", {trigger: true});
  }
});