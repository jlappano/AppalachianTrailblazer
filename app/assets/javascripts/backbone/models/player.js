var Player = Backbone.Model.extend({

  defaults: {
    morale:  100,
    shelter: 0,
    over:    ""
  },

  initialize: function(name){
    this.name = name;
    this.on("change:over", function(){
      Backbone.history.navigate("/game-over/" + this.get("over"), {trigger: true}); 
    });
  },

  setInitialShelter: function(){
    this.set({shelter: TrailBlazerApp.shelters.models[0]});
  },

  hikeTheTrail: function(){
    var trail = TrailBlazerApp.shelters; //this.get("shelterList");
    console.log(trail.length); //22
    var index = trail.indexOf(this.get("shelter"));
    //don't check for win here
    this.set({shelter: trail.models[index + 1]});
  },

  checkWin: function(){
    var trail = TrailBlazerApp.shelters; //this.get("shelterList");
    var index = trail.indexOf(this.get("shelter"));
    if(index == 21){
      this.set({over: "win"});
    };
    console.log(this.get("over"));
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
      this.set({over: "lose"});
    }
    console.log("MORALE --> " + morale);
    this.set({morale: morale});
  }
});