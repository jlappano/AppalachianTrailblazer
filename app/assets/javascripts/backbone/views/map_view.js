var MapView = Backbone.View.extend({
  id: 'map',
  initialize: function(){
    $("body").append( $(this.el));
    this.map = new google.maps.Map(this.el, this.model.attributes);
    console.log(this.model.flightPlanCoordinates);

    this.flightPath = new google.maps.Polyline({
    path: this.model.flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#9900CC',
    strokeOpacity: 0.5,
    strokeWeight: 2
  });
    this.image = 'http://www.marcellusgas.org/images/gmap/beachflag.png';
    this.myLatLng = new google.maps.LatLng(34.7398, -83.9369);
    this.beachMarker = new google.maps.Marker({
      position: this.myLatLng,
      map: this.map,
      icon: this.image
    });


  this.flightPath.setMap(this.map);


  this.render();
  },
  render: function(){
    $('#map').replaceWith(this.el);
    $("body").append( $(this.el));
  }
});


// var mapView = new MapView({model: this.map});





