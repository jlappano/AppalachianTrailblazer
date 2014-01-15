var StartView = Backbone.View.extend({
  className: "view start-view",

  initialize: function(){
    this.template = _.template($("script.start").html()),
    this.render();
  },
  
  render: function(){
    this.$el.html(this.template());
  },

  events: {
    "click button": "renderCharacterCreate"
  },

  renderCharacterCreate: function(){
    
    this.remove();
    Backbone.history.navigate("character", {trigger: true});
  }
});