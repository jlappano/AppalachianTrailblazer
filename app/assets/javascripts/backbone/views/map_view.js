var MapView = Backbone.View.extend({
  id: 'map',

  initialize: function(options){
    this.player = options.player;
    this.icon =   'http://www.marcellusgas.org/images/gmap/beachflag.png';
    this.map =    new google.maps.Map(this.el, this.model.attributes);

    this.path = new google.maps.Polyline({
      path: this.model.shelterCoordinates,
      geodesic: true,
      strokeColor: '#9900CC',
      strokeOpacity: 0.5,
      strokeWeight: 2
    });
    
    this.path.setMap(this.map);

    // set up listeners to changing model, render a new marker each time player is at a new shelter
    this.listenTo(this.player, 'change:shelter', this.render);
    this.listenTo(this.player, 'change:over', this.remove);

    this.render();
  },

  render: function(){
    var lat = this.player.get("shelter").get("lat");
    var lng = this.player.get("shelter").get("long");
    this.myLatLng = new google.maps.LatLng(lat, lng);
    this.marker = new google.maps.Marker({
      position: this.myLatLng,
      map:      this.map,
      icon:     this.icon
    });
    $('#map').replaceWith( $(this.el));
    $("body").append( $(this.el));

    //overrides map's positioning for future iterations of the game
    document.getElementById('map').style.position = 'absolute';
    google.maps.event.trigger(this.map, 'resize');
    this.map.setCenter(new google.maps.LatLng(40.612732, -75.912438));
  }

});