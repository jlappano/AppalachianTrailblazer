var AdventurePrompt = Backbone.Model.extend({
  initialize: function(question, answerYes, answerNo, consequenceYes, consequenceNo){
    this.question = question;
    this.answerYes = answerYes;
    this.answerNo = answerNo;
    this.consequenceYes = consequenceYes;
    this.consequenceNo = consequenceNo;
  }
})