var MapView = Backbone.View.extend({
  id: 'map',
  className: "view map-view",

  initialize: function(options){
    this.player = options.player;
    this.icon =   'http://www.marcellusgas.org/images/gmap/beachflag.png';
    this.map =    new google.maps.Map(this.el, this.model.attributes);
    
    //console.log(this.model.shelterCoordinates);

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
    this.myLatLng = new google.maps.LatLng(lat, lng);
    this.marker = new google.maps.Marker({
      position: this.myLatLng,
      map:      this.map,
      icon:     this.icon
    });
    $('#map').replaceWith(this.el);
    $("body").append( $(this.el));
  }

});