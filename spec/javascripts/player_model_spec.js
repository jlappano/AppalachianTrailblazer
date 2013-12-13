describe("Player", function(){

  var player, shelter, trail;

  beforeEach(function() {
    trail = new ShelterList(new Shelter({sequence:1}));
    player = new Player({ name: "Beans", shelter: trail.models[0], shelterList: trail});
    shelter = new Shelter({ latitude: 555.55, longitude: 333.333, name: "Smoke House", sequence: 1 });

  });

  it('Will set passed attributes on the model instance when created.', function() { 
    expect(player.get('name')).toBe("Beans"); 
  });

  it('Will be created with morale at 100 percent.', function() {
    expect(player.get('morale')).toBe(100);
  });

  it('Will be created with a shelter with a sequence of one.', function() {
    expect(player.get('shelter').get('sequence')).toBe(1);
  });

  it('Can change shelters sequentially.', function() {

     trail.add([
      {sequence: 2},
      {sequence: 3}
    ]);

     player.hikeTheTrail();
     expect(player.get('shelter').get('sequence')).toBe(2);
  });

  it('Can change morale based on input', function() {
    player.changeMorale(-10);
    expect(player.get('morale')).toBe(90);
  });

  it('Cannot change morale to be higher than 100', function() {
    player.changeMorale(20);
    expect(player.get('morale')).toBe(100);
  });

  it('checks to see if morale is zero', function() {
    player.changeMorale(-140);
    
  });



})