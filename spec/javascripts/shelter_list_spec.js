describe('ShelterList', function() {

  it('Can add Model instances as objects and arrays.', function() {
    var shelters = new ShelterList();
    expect(shelters.length).toBe(0);

    shelters.add([
    { latitude: 555.55, longitude: 333.333, name: "Smoke House" }, 
    { latitude: 555.57, longitude: 333.331, name: "Stack House" }
    ]);

    expect(shelters.length).toBe(2);

  });
});