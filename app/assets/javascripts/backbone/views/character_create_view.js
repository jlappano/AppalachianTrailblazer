var CharacterCreateView = Backbone.View.extend({
  className: "view character-create-view",

  initialize: function(){
    this.template = _.template($("script.character").html()),
    this.render();
  },
  render: function() {
    this.$el.html(this.template());
  },

  events: {
    "click button.submit": "startGame"
  },

  startGame: function(e) {
    e.preventDefault();

    // set player name and initialize
    var name = this.$el.find("input[name='character-name']").val();

    // answer: answer
    
    TrailBlazerApp.player.set("name", name);   
    TrailBlazerApp.player.setInitialShelter();

    var map = new Map();
    TrailBlazerApp.map = map;

    // console.log(name);
    Backbone.history.navigate("shelter/1", {trigger: true});
  },

});