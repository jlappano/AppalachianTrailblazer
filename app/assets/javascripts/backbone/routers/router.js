var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "characterCreate": "characterCreate",
    "startGame/:name": "startGame",
    "gameLost": "gameLost",
    "gameWon": "gameWon"
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
    var player = new Player({name: name, shelterList: this.shelters});
    player.setInitialShelter();
    var map = new Map();
    var mapView = new MapView({model: map, player: player});
    this.loadView(new GameView({model: player}));
  },

  gameWon: function() {
    this.loadView(new GameWonView());
  },

  gameLost: function() {
    this.loadView(new GameLostView());
  },

  loadView: function(view) {
    this.main && this.main.remove();
    this.main = view;
    $("body").append(view.el);
  }

});