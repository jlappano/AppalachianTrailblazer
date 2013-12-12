var Shelter = Backbone.Model.extend({
  
  defaults: { 
    prompt: null, 
  },

  intialize: function(latitude, longtitude, sequence, name){
    this.sequence = sequence;
    this.latitude = latitude;
    this.longtitude = longtitude;
    this.name = name;
  },

  getAdventurePrompt: function(adObj){
    this.set({ prompt: adObj });
  }

});