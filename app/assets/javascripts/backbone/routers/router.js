var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "characterCreate": "characterCreate"
  },

  index: function() {
    this.loadView(new StartView());
  },

  characterCreate: function() {
    this.loadView(new CharacterCreateView());
  },

  loadView: function(view) {

    this.main && this.main.remove();
    this.main = view;
    $("body").append(view.el);
  }

});