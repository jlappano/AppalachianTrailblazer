var Player = Backbone.Model.extend({

  defaults: {
    morale:  100,
    shelter: 0,
    over:    ""
  },

  initialize: function(name){
    this.name = name;
  },

  setInitialShelter: function(){
    console.log(this.get("shelter"));
    var shelter = this.get("shelter");
    console.log(TrailBlazerApp.shelters.models[0]);
    this.set({shelter: TrailBlazerApp.shelters.models[0]});
  },

  hikeTheTrail: function(){
    //changes player's shelter by increasing the index in 
    var trail = TrailBlazerApp.shelters;
    var index = trail.indexOf(this.get("shelter"));
    this.set({shelter: trail.models[index + 1]});
  },

  checkWin: function(){
    var trail = TrailBlazerApp.shelters;
    var index = trail.indexOf(this.get("shelter"));
    if(index == 21){
      this.set({over: "win"});
    };
  },

  changeMorale: function(integer){
    var morale = this.get("morale");

    morale += integer;
    //checks loss
    if(morale > 100){
      morale = 100;
    }
    else if(morale <= 0){
      morale = 0;
      this.set({over: "lose"});
    }
    // console.log("MORALE --> " + morale);
    this.set({morale: morale});
  }
});