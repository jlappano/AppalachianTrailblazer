

describe("Shelter", function(){

  var shelter, adventures;

  beforeEach(function() {
    adventures = new AdventurePromptList();
    adventures.add([
      { question: "Do you drink the murky water?", 
      answerYes: "You have dysentary!", 
      answerNo: "Bear Grylls would be proud!", 
      consequenceYes: -20,
      consequenceNo: 10 },

      { question: "Eat the yellow snow?", 
      answerYes: "Mmmm tastes like lemon", 
      answerNo: "You missed out man", 
      consequenceYes: 5,
      consequenceNo: -5 },

    ]);
    shelter = new Shelter({ latitude: 555.55, longitude: 333.333, name: "Smoke House", adventureList: adventures });
  });

  it('Will set passed attributes on the model instance when created.', function() { 
    // what are the values expected here for each of the
    // attributes in our Todo?
    expect(shelter.get('latitude')).toBe(555.55); 
    expect(shelter.get('longitude')).toBe(333.333); 
    expect(shelter.get('name')).toBe("Smoke House");
    expect(shelter.get('adventurePrompt')).toBe(null);
    expect(shelter.get('adventureList')).not.toBeUndefined();
  });

  it('Can access an adventure.', function() {
    var adlist = shelter.get('adventureList');
    expect(adlist.models[0]).not.toBeUndefined();

  });

  it('Gets an adventure prompt object and sets it as an attribute.', function() {
    shelter.getAdventurePrompt();
    //check to see if this test is useful, how could I test to see if the actual adventure is there?
    expect(shelter.get('adventurePrompt')).not.toBe(null);
  });


})


