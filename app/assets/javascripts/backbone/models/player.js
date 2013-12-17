var Player = Backbone.Model.extend({

  defaults: {
    morale: 100,
    shelter: 0,
    won: "" 
  },

  initialize: function(name, shelterList){
    this.name = name;
    this.shelterList = shelterList;
    this.on("change:won", function(){
      Backbone.history.navigate("/gameLost", {trigger: true}); 
    });
  },

  setInitialShelter: function(){
    var trail = this.get("shelterList");
    this.set({shelter: trail.models[0]});
  },

  hikeTheTrail: function(){
    var trail = this.get("shelterList");
    console.log(trail.length); //22
    var index = trail.indexOf(this.get("shelter"));
    //check for win
    if(index < 21){
      this.set({shelter: trail.models[index + 1]});
    }
    else{
      this.set({won: "You won"});
    }
  },

  changeMorale: function(integer){
    var morale = this.get("morale");

    morale += integer;
    //check for loss
    if(morale > 100){
      morale = 100;
    }
    else if(morale <= 0){
      morale = 0;
      this.set({won: "You lost"});
    }
    console.log(morale);
    this.set({morale: morale});
  }
});