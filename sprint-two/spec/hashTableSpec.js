describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should handle hash function collisions", function(){
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    var v1 = 'val1', v2 = 'val2';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).toEqual(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
  });

  // add more tests!
  it(".retrieve(key) should return the correct value", function(){
    hashTable.insert(1, 'a');
    expect(hashTable.retrieve(1)).toEqual('a');
  });

  it(".removing(key) should return the value that was deleted", function(){
    hashTable.insert(1, 'a');
    expect(hashTable.remove(1)).toEqual('a');
  });

  it("the bucket should resize if it gets too small to hold everything", function(){
    for (var i = 0; i < 100; i++){
      hashTable.insert(i, i);
    }
    expect(hashTable._limit > 8).toEqual(true);
  });
});
