var CharacterCreateView = Backbone.View.extend({

  el: $("<div>"),

  template: _.template($("script.character[type='text/html'").html()),

  initialize: function(){
    this.render();
  },

  events: {
    "click button.submit": "startGame"
  },

  render: function() {
    this.$el.html(this.template());
  },

  startGame: function() {
    var name = this.$el.find("input[name='character-name']").val();
    // console.log(name);
    Backbone.history.navigate("startGame/" + name, {trigger: true});
  },

  //create player
  //change the route


});