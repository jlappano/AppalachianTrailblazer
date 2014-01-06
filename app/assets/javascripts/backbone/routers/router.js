var Router = Backbone.Router.extend({
  routes: {
    "":                "index",
    "character":       "characterCreate",
    "shelter/:number": "arriveShelter",
    "game-over/:over": "gameOver"
  },

  initialize: function(adventures, shelters) {
    TrailBlazerApp.adventures = adventures;
    TrailBlazerApp.shelters = shelters;
    TrailBlazerApp.player = new Player({trail: shelters});

    this.listenTo(TrailBlazerApp.player, "change:over", function (player){
      Backbone.history.navigate("/game-over/" + player.get("over"), {trigger: true}); 
    });
  },

  index: function() {
    this.loadView(new StartView());
  },

  characterCreate: function() {
    this.loadView(new CharacterCreateView());
  },

  arriveShelter: function(number) {
    if (number == 1) {
      console.log(new MapView({model: TrailBlazerApp.map, player: TrailBlazerApp.player}));

    }
    

    this.loadView(new GameView({model: TrailBlazerApp.player}));
  },

  gameOver: function(over) {
    this.loadView(new GameOverView({over: over}));
  },

  loadView: function(view) {
    this.main && this.main.remove();
    this.main = view;
    $("body").append(view.el);
  }

});