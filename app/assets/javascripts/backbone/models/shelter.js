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


// var shelterTheFirst = new Shelter({ latitude: 555.55, longitude: 333.333, name: "Smoke House", sequence: 1 });