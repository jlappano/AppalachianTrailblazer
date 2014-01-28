//sets player name, gives player a shelter with a sequence of one, creates map model,
//and navigates to first adventure. 
var GamePreparer = Backbone.Model.extend({

initialize: function(opts){
    TrailBlazerApp.player.set("name", opts["name"]);   
    TrailBlazerApp.player.setInitialShelter();
    var map = new Map();
    TrailBlazerApp.map = map;
    Backbone.history.navigate("shelter/1", {trigger: true});
  },
})