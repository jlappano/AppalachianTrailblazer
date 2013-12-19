describe("AdventurePrompt", function(){
  //it will be initialized with a question, answerYes, answerNo, consequenceYes, consequenceNo
  //it will belong to an adventureprompt list
  var adventure;

  beforeEach(function() {

    adventure = new AdventurePrompt({ 
      question: "Do you drink the murky water?", 
      answerYes: "You have dysentary!", 
      answerNo: "Bear Grylls would be proud!", 
      consequenceYes: -20,
      consequenceNo: 10  
    });

  });
  
  it('Will set passed attributes on the model instance when created.', function() { 
    expect(adventure.get('consequenceNo')).toBe(10); 
    expect(adventure.get('consequenceYes')).toBe(-20);
    expect(adventure.get('answerYes')).toBe("You have dysentary!");

  });
});