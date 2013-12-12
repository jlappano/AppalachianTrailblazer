describe("Player", function(){

  var player, shelter;

  beforeEach(function() {
    shelter = new Shelter({ latitude: 555.55, longitude: 333.333, sequence: 1, name: "Smoke House" });
    player = new Player({ name: "Beans"});

  });

  it('Will set passed attributes on the model instance when created.', function() { 
    // what are the values expected here for each of the
    // attributes in our Todo?
    expect(player.get('name')).toBe("Beans"); 
 });

  // it('Gets an adventure prompt object and sets it as an attribute.', function() {
  //   shelter.getAdventurePrompt("adventurePrompt");

  //   expect(shelter.get('prompt')).not.toBe(null);
  // });

})