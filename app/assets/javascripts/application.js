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

    ]);

var shelters = new ShelterList();
new Router(adventures, shelters);
Backbone.history.start();


// watchList.fetch({reset: true});
