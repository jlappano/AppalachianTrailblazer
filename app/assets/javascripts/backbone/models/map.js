var Map = Backbone.Model.extend({
  defaults: {
     zoom: 5,
     center: new google.maps.LatLng(40.612732, -75.912438),
     mapTypeId: google.maps.MapTypeId.TERRAIN
  },

  initialize: function(){

    this.flightPlanCoordinates = [
      new google.maps.LatLng(34.62673, -84.193656),
      new google.maps.LatLng(34.7398, -83.9369),
      new google.maps.LatLng(35.035482, -83.537977),
      new google.maps.LatLng(35.55, -83.5),
      new google.maps.LatLng(35.639259, -83.371878),
      new google.maps.LatLng(35.705311, -83.257683),
      new google.maps.LatLng(35.989967, -82.490312),
      new google.maps.LatLng(36.1044, -82.1225),
      new google.maps.LatLng(36.6597, -81.5447),
      new google.maps.LatLng(37.392421, -80.036987),
      new google.maps.LatLng(37.5167, -79.5),
      new google.maps.LatLng(37.8197, -79.0628),
      new google.maps.LatLng(38.597886, -78.371919),
      new google.maps.LatLng(39.719, -77.506),
      new google.maps.LatLng(40.612732, -75.912438),
      new google.maps.LatLng(41.0029, -75.0733),
      new google.maps.LatLng(41.268912, -74.514512),
      new google.maps.LatLng(41.204842, -74.403629),
      new google.maps.LatLng(41.312778, -74.006667),
      new google.maps.LatLng(41.319, -73.988),
      new google.maps.LatLng(42.044861, -73.454394),
      new google.maps.LatLng(42.101906, -73.432637),
      new google.maps.LatLng(42.6376, -73.1662),
      new google.maps.LatLng(42.977928, -73.071635),
      new google.maps.LatLng(43.086218, -72.925101),
      new google.maps.LatLng(43.227942, -72.940079),
      new google.maps.LatLng(43.604717, -72.820177),
      new google.maps.LatLng(43.825735, -72.038638),
      new google.maps.LatLng(43.885455, -72.023951),
      new google.maps.LatLng(44.0244, -71.8314),
      new google.maps.LatLng(44.122965, -71.736553),
      new google.maps.LatLng(44.13337, -71.736915),
      new google.maps.LatLng(44.1406, -71.645),
      new google.maps.LatLng(44.1488, -71.6445),
      new google.maps.LatLng(44.1608, -71.6444),
      new google.maps.LatLng(44.187219, -71.610836),
      new google.maps.LatLng(44.188, -71.555),
      new google.maps.LatLng(44.194751, -71.388224),
      new google.maps.LatLng(44.270527, -71.303423),
      new google.maps.LatLng(44.289823, -71.176483),
      new google.maps.LatLng(44.303054, -71.167757),
      new google.maps.LatLng(44.31306, -71.165),
      new google.maps.LatLng(44.50282, -70.999506),
      new google.maps.LatLng(44.5384, -70.9894),
      new google.maps.LatLng(44.5601, -70.9763),
      new google.maps.LatLng(44.609287, -70.892316),
      new google.maps.LatLng(44.680597, -70.83522),
      new google.maps.LatLng(44.747119, -70.765595),
      new google.maps.LatLng(45.146771, -70.288172),
      new google.maps.LatLng(45.415646, -69.370468),
      new google.maps.LatLng(45.456459, -69.256117), 
      new google.maps.LatLng(45.554633, -69.246405), 
      new google.maps.LatLng(45.8815981, -68.995052)  
    ];

  },

});

// var map = new Map();
