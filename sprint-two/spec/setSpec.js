describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("add method should add input string to set", function(){
    set.add('a');
    expect(set._storage['a']).toEqual(true);
  });

  it("contains method should return true if string is in the set otherwise return false", function(){
    set.add('a');
    expect(set.contains('a')).toEqual(true);
    expect(set.contains('b')).toEqual(false);
  });

  it("remove method should delete input string from set", function(){
    set.add('a');
    set.remove('a');
    expect(set.contains('a')).toEqual(false);
  });

});