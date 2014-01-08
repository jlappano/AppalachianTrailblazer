

var MapView = Backbone.View.extend({
  id: 'map',

  initialize: function(options){
    console.log("map view loaded");
    console.log(this.$el);
    console.log(this.el);
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

    // set up listeners to changing model
    this.listenTo(this.player, 'change:shelter', this.render);
    this.listenTo(this.player, 'change:over', this.remove);

    this.render();
  },

  render: function(){
    var lat = this.player.get("shelter").get("lat");
    var lng = this.player.get("shelter").get("long");
    console.log(this.myLatLng = new google.maps.LatLng(lat, lng))
    this.marker = new google.maps.Marker({
      position: this.myLatLng,
      map:      this.map,
      icon:     this.icon
    });
    $('#map').replaceWith( $(this.el));
    $("body").append( $(this.el));
    google.maps.event.trigger(this.map, 'resize');
    console.log("this.map");
    console.log(this.map);
  }

});