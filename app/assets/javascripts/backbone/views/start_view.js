var StartView = Backbone.View.extend({
  className: "view start-view",

  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.append( $("<h1>Welcome to the Appalachian Trail Blazer!</h1>") );
    this.$el.append( $("<h3>Start Game?</h3>") );
    this.$el.append( $("<button>HECK YEAAAAAAAA</button>") );
  },

  events: {
    "click button": "renderCharacterCreate"
  },

  renderCharacterCreate: function(){
    
    //this.remove();
    Backbone.history.navigate("character", {trigger: true});
  }
});