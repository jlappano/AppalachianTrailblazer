describe('AdventurePromptList', function() {

  it('Can add Model instances as objects and arrays.', function() {
    var adventures = new AdventurePromptList();
    expect(AdventurePromptList.length).toBe(0);

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

    expect(adventures.length).toBe(2);

  });
});