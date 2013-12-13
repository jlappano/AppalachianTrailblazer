var ShelterList = Backbone.Collection.extend({
  model: Shelter,
  comparator: 'sequence'
});
