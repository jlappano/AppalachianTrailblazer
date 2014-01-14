describe("Player", function(){

  var player, shelter, trail;

  beforeEach(function() {
    shelter = jasmine.createSpyObj('shelter', ['get']);
    trail = { first: function(){ return shelter } };
    player = new Player({trail: trail});
    spyOn(player, "hikeTheTrail").and.returnValue(2);
    spyOn(player, "checkWin").and.callFake(function() {
      player.set({over: "win"});
    });
  });

  it('Will set passed attributes on the model instance when created.', function() { 
    expect(player.get('name')).toBe(""); 
  });

  it('Will be created with morale at 100 percent.', function() {
    expect(player.get('morale')).toBe(100);
  });

  it('Will be created with a shelter with a sequence of one.', function() {
    player.setInitialShelter();
    expect(player.get("shelter")).toBe(shelter);
  });

  it('Can change shelters sequentially.', function() {
     var sequence = player.hikeTheTrail();
     expect(sequence).toEqual(2);
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
    console.log(player.get('over'));
    expect(player.get('over')).toBe("lose");
  });

  it('checks to to see if the player has won', function() {
    player.checkWin();
    expect(player.get('over')).toBe("win");
  })
})