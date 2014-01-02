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
//= require underscore
//= require backbone
//= require backbone/app
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_self

$(function(){


  // get the adventures and shelters in the database!
  var adventures = new AdventurePromptList();
  adventures.fetch();

  var shelters = new ShelterList();
  shelters.fetch({
    success: function(){
      shelters.each(function(shelter) {
        shelter.set({adventureList: adventures});
      });
    }
  });

  // instantiate the router and begin navigating!
  new Router(adventures, shelters);
  Backbone.history.start();
});
