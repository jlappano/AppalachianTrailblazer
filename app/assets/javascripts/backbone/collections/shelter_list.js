//orders shelters based on sequence
var ShelterList = Backbone.Collection.extend({
  url: "/shelters",
  model: Shelter,
  comparator: 'sequence'
});
