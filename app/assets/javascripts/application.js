// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_self

var adventures = new AdventurePromptList();

adventures.add([

      { question: "Do you drink the murky water?", 
      answerYes: "You have dysentary!", 
      answerNo: "Bear Grylls would be proud!", 
      consequenceYes: -20,
      consequenceNo: 10 },

      { question: "Eat the yellow snow?", 
      answerYes: "Mmmm tastes like lemon", 
      answerNo: "You missed out man",
      consequenceYes: 5,
      consequenceNo: -5 },

      { question: "You are tired. in town, A postal clerk directes you to the Hapiday Motor Inn, Do you stay at this establishment?",
      answerYes: "Woo! Hot Water!",
      answerNo: "Wake up with slugs on your face",
      consequenceYes: 20,
      consequenceNo: -10 }

    ]);

var shelters = new ShelterList();

// latitude, longtitude, sequence, name, adventureList

shelters.add([

    { latitude: 555.55, longitude: 333.333, sequence: 1, name: "Smoke House", adventureList: adventures }, 
    { latitude: 555.57, longitude: 333.331, sequence: 2, name: "Stack House", adventureList: adventures },
    { latitude: 555.58, longitude: 333.330, sequence: 3, name: "Lookout Point", adventureList: adventures }, 
    { latitude: 555.59, longitude: 333.328, sequence: 4, name: "Top Point", adventureList: adventures }, 
    { latitude: 555.60, longitude: 333.326, sequence: 5, name: "Fort Look", adventureList: adventures }, 
    { latitude: 555.62, longitude: 333.324, sequence: 6, name: "Perry Point", adventureList: adventures }

    ]);

new Router(adventures, shelters);
Backbone.history.start();


// watchList.fetch({reset: true});
