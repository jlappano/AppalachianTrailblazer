var Shelter = Backbone.Model.extend({
  
  defaults: { 
    prompt: null, 
  },

  intialize: function(latitude, longtitude, name){
    this.latitude = latitude;
    this.longtitude = longtitude;
    this.name = name;
  }

});