var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "characterCreate": "characterCreate",
    "startGame/:name": "startGame"
  },

  initialize: function(adventures, shelters) {
    this.adventures = adventures;
    this.shelters = shelters;
  },

  index: function() {
    this.loadView(new StartView());
  },

  characterCreate: function() {
    this.loadView(new CharacterCreateView());
  },

  startGame: function(name) {
    console.log(name);
    this.loadView(new GameView({name: name, adventures: this.adventures}));
  },

  loadView: function(view) {
    this.main && this.main.remove();
    this.main = view;
    $("body").append(view.el);
  }

});