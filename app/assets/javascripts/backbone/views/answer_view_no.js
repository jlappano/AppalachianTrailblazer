// //model is player
// var AnswerViewNo = Backbone.View.extend({
//   className: "view no-view",

//   template: _.template($("script.answerNo[type='text/html']").html()),

//   initialize: function(options){
//     this.creator = options.creator;
//     // this.listenTo(this.model, 'change:won', function(){
//     //   this.creator.remove();
//     //   this.remove(); 
//     // });
//     this.render();
//   },

//   events: {
//     "click button.next": "moveOn"
//   },

//   render: function() {
//     $("body").append(this.el);
//     this.$el.html(this.template());
//   },

//   moveOn: function() {
//     console.log(this.model.get("won"))
//     // remove the previous gameview
//     if(this.model.get("won") == ""){
//       this.creator.remove();
//       this.model.hikeTheTrail();
//       var gamie = new GameView({model: this.model});
//       $("body").append( gamie.el );
//       this.remove();
//     }
//     else {
//       this.creator.remove();
//       this.remove();
//     }
//   }

// });