var Player = Backbone.Model.extend({

  defaults: {
    morale:  100,
    shelter: 0,
    over:    "",
    name: ""
  },

  initialize: function(opts){
    this.trail = opts["trail"];
  },

  setInitialShelter: function(){
    this.set("shelter", this.trail.first());
  },

  hikeTheTrail: function(){
    //changes player's shelter by increasing the index of the player's shelter  
    var index = this.trail.models.indexOf(this.get("shelter"));
    this.set({shelter: this.trail.at(index + 1)});
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
    this.set({morale: morale});
  }
});