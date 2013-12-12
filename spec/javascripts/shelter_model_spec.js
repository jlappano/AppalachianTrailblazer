// var Shelter = Backbone.Model.extend({
  
//   defaults: { 
//     prompt: null, 
//   },

//   intialize: function(latitude, longtitude, name){
//     this.latitude = latitude;
//     this.longtitude = longtitude;
//     this.name = name;
//   }

// });


describe("Shelter", function(){

  var shelter;

  beforeEach(function() {
    shelter = new Shelter({ latitude: 555.55, longitude: 333.333, name: "Smoke House" });
  });

  it('Will set passed attributes on the model instance when created.', function() { 
    // what are the values expected here for each of the
    // attributes in our Todo?
    expect(shelter.get('latitude')).toBe(555.55); 
    expect(shelter.get('longitude')).toBe(333.333); 
    expect(shelter.get('name')).toBe("Smoke House");
    expect(shelter.get('prompt')).toBe(null);
 });

})