var CharacterCreateView = Backbone.View.extend({
  className: "view character-create-view",

  template: _.template($("script.character[type='text/html'").html()),

  initialize: function(){
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
    var player = new Player({name: name});
    TrailBlazerApp.player = player;
    TrailBlazerApp.player.setInitialShelter();

    var map = new Map();
    TrailBlazerApp.map = map;

    // console.log(name);
    Backbone.history.navigate("shelter/1", {trigger: true});
  },

});