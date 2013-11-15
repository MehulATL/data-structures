describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of linkedList
  it("Tail should have correct value after adding 2 items", function(){
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    expect(linkedList.tail).toEqual({value: 'b', next: null});
  });

  it("should have have the correct head value after adding two items", function(){
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    expect(linkedList.head).toEqual({value: 'a', next: {value: 'b', next: null}});
  });

  it("should have correct values for head after adding two items then removing the head", function(){
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.removeHead();
    expect(linkedList.head).toEqual({value: 'b', next: null});
  });

  it("should return value of removed head node", function(){
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    expect(linkedList.removeHead()).toEqual('a');
  });

});