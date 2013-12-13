var AdventurePrompt = Backbone.Model.extend({

  //it will be initialized with a question, answerYes, answerNo, consequenceYes, consequenceNo

  intialize: function(question, answerYes, answerNo, consequenceYes, consequenceNo){
    this.question = question;
    this.answerYes = answerYes;
    this.answerNo = answerNo;
    this.consequenceYes = consequenceYes;
    this.consequenceNo = consequenceNo;
  }
})