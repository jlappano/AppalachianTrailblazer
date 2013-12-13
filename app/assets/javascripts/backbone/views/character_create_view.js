var CharacterCreateView = Backbone.View.extend({

  el: $("<div>"),

  template: _.template($("script.character[type='text/html'").html()),

  initialize: function(){
    this.render();
  },

  events: {
    "click button.submit": "grabName"
  },

  render: function() {
    this.$el.html(this.template());
  },

  grabName: function() {
    var name = this.$el.find("input[name='character-name']").val();
    console.log(name);
    this.sayHi();
  },

  //on click
  //create AdventureCollection
  //add adventures to the list
  //create ShelterCollection


  sayHi: function() {
    console.log("hey");
  }

});