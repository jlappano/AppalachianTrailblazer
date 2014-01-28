# README


The Appalachian Trailblazer is a nod to a certain beloved "Go forth west" game of of the 90's.
It is a text-based adventure game which prompts the player to choose their fate as they hike the famed Appalachian trail. The aim is to reach the end of the trail, keeping morale above zero. 

This App was built on a Rails framework, using Ruby 2.0.0 and Rails 4.0.0. Shelter and Adventure Prompt models are currently stored in the database. While the app does not currently use relational tables, it may once gameplay involves stored users. 

Play at <http://guarded-oasis-5521.herokuapp.com>


## Front End

The full game is built with Javascript using the Backbone framework.

### Collections:

* Adventure Prompt list: syncs with DB to populate with adventure models. 

* Shelter List: syncs with DB to populate with shelter models; adds the Adventure Prompt List as an attribute. 
 

### Models: 

* Adventure Prompt: Stored in the DB as "adventures" containing the attributes, "question, answerYes, answerNo, consequenceYes, consequenceNo."

* Shelter: Contains atrributes "latitude, longtitude, sequence, name, adventureList." Samples randomly from the Adventure Promt List for a single adventure.  

* Player: Is intialized with a trail collection. It can set it own shelter based on index, check for a win, and change morale level.

* Map: Contains attributes that are needed for view rendering. All map logic utilizes the Google Maps API.  

* Game Preparer: contains logic tied to the start of gameplay. Sets player name, gives player a shelter with a sequence of one, creates map model, and navigates to first adventure.

### Game Flow:

in Appplication.js:

      $(function(){

       var adventures = new AdventurePromptList();
       adventures.fetch();
       TrailBlazerApp.shelters = new ShelterList();
       var shelters = TrailBlazerApp.shelters;

       shelters.fetch({
        success: function(){
         shelters.each(function(shelter) {
         shelter.set({adventureList: adventures});
        });
       }
      });

      new Router(adventures, shelters);
      Backbone.history.start();
      });

gets the adventures and shelters from the database, instantiates the router and begin navigation history! Master TraiblazerApp object is created for namespacing:

      var TrailBlazerApp = {};


In the Router, the index function is triggered, which instantiates a Start View and listens to the player for a completed game:

      index: function() {
       this.loadView(new StartView());
       this.listenTo(TrailBlazerApp.player, "change:over", function(player){
         Backbone.history.navigate("/game-over/" + player.get("over"), 
         {trigger: true}); 
        });
       },

![Alt text](/app/assets/images/screenshots/startview.png)

Once the player decides to begin the game the router triggers the creation of a Character Create View. Once the player fills in a Trail Name and submits the form, the startGame function is called. 

      startGame: function(e) {
       e.preventDefault();
 
      // set player name and initialize
       var name = this.$el.find("input[name='character-name']").val();
 
       new GamePreparer({name: name});
       this.remove();
      },


GamePreparer navigates to the first shelter and triggers the arriveShelter method, where both the map and gameView are initialized. 

      arriveShelter: function(number) {
       if (number == 1) {
       TrailBlazerApp.mapView = new MapView({model: TrailBlazerApp.map, player: TrailBlazerApp.player});
       }

       this.loadView(new GameView({model: TrailBlazerApp.player}));
      },

![Alt text](/app/assets/images/screenshots/Gamemapview.png)

GameView is responsible for the morale bar animation, and renders the adventure's AnswerView as a subview once the player chooses. It is in AnswerView that the player's "won" status is checked, and routes accordingly. If the player's morale is above 0, they can moveOn:

    moveOn: function() {
     this.creator.remove();
     this.model.hikeTheTrail();
     this.remove();

     Backbone.history.navigate(
      "shelter/" + this.model.get("shelter").get("sequence"),
      {trigger: true}
     );
    }
    
The player model changes it's shelter attribute to a shelter with a greater trail sequence, and the arriveShelter function is once again called by the router.

When the game ends for either reason, the gameOver function is called with the value of the Player's "over" attribute passed in. A Game Over view is created, with different templates rendered based on the value of "over". If the player wants to restart the game:

    restart: function() {
     TrailBlazerApp.player = new Player({trail: TrailBlazerApp.shelters});
     TrailBlazerApp.answerView.remove();
     this.remove();
     Backbone.history.navigate("", {trigger: true});
    }

A new Player must be created and url is routed back to the index. On future games, when the map is re-rendered, it must have it positioning overrided to "absolute" and its center re-defined.

    document.getElementById('map').style.position = 'absolute';
    google.maps.event.trigger(this.map, 'resize');
    this.map.setCenter(new google.maps.LatLng(40.612732, -75.912438)); 


### Testing 

The backbone models are tested using Jasmine. 











