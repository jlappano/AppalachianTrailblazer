


describe("Player", function(){

  var player, shelter, trail, TrailBlazerApp;

  beforeEach(function() {
    shelter = jasmine.createSpyObj('shelter', ['get']);
    trail = { first: function(){ return shelter } };
    player = new Player({ trail: trail});
  });

  it('Will set passed attributes on the model instance when created.', function() { 
    expect(player.get('name')).toBe("Beans"); 
  });

  it('Will be created with morale at 100 percent.', function() {
    expect(player.get('morale')).toBe(100);
  });

  it('Will be created with a shelter with a sequence of one.', function() {
    player.setInitialShelter();
    expect(player.get("shelter")).toBe(shelter);
  });

  it('Can change shelters sequentially.', function() {

     trail.add([
      {sequence: 2},
      {sequence: 3}
    ]);

     TrailBlazerApp.player.setInitialShelter();
     // console.log(player.get("shelter"));
     TrailBlazerApp.player.hikeTheTrail();
     console.log(TrailBlazerApp.shelters.models);

     // console.log(player.get("shelter"));
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
    TrailBlazerApp.player.changeMorale(-140);
    console.log(player.get('over'));
    expect(player.get('over')).toBe("lose");
  });

  it('checks to to see if the player has won', function() {

    trail.add([
      {sequence: 4},
      {sequence: 5},
      {sequence: 6},
      {sequence: 7},
      {sequence: 8},
      {sequence: 9},
      {sequence: 10},
      {sequence: 11},
      {sequence: 12},
      {sequence: 13},
      {sequence: 14},
      {sequence: 15},
      {sequence: 16},
      {sequence: 17},
      {sequence: 18},
      {sequence: 19},
      {sequence: 20},
      {sequence: 21},
      {sequence: 22}
    ]);

    TrailBlazerApp.player.setInitialShelter();

    for (var i = 0; i < 21; i++) {
      TrailBlazerApp.player.hikeTheTrail();
    };

    TrailBlazerApp.player.checkWin();
    console.log(player);
    expect(player.get('over')).toBe("win");
  })
})