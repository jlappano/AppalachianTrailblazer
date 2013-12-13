//var shelterTheFirst = new Shelter({ latitude: 555.55, longitude: 333.333, name: "Smoke House", sequence: 1 });
//var trail = 

var Player = Backbone.Model.extend({

  defaults: {
    morale: 100,
    shelter: 0 
  },

  intialize: function(name, shelter, shelterList){
    this.name = name;
    this.shelter = shelter;
    this.shelterList = shelterList;
  },

  hikeTheTrail: function(){
    var trail = this.get("shelterList");
    var index = trail.indexOf(this.get("shelter"));
    this.set({shelter: trail.models[index + 1]});
  },

  changeMorale: function(integer){
    var morale = this.get("morale");

    morale += integer;
    
    if(morale > 100){
      morale = 100;
    }
    this.set({morale: morale});
  }
});