var Shelter = Backbone.Model.extend({
  
  defaults: { 
    adventurePrompt: null, 
  },

  initialize: function(latitude, longtitude, sequence, name, adventureList){
    this.sequence = sequence;
    this.latitude = latitude;
    this.longtitude = longtitude;
    this.name = name;
    this.adventureList = adventureList;
  },

  getAdventurePrompt: function(){
    var adventures = this.get("adventureList");
    this.set({adventurePrompt: _.sample(adventures.models)});
  }

});

