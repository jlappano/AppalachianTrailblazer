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

    new GamePreparer({name: name});
  },

});