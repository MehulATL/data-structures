describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

  // Add more tests here to test the functionality of tree.
  it("addChild method should add child node to the tree.", function(){
    tree.addChild('a');
    expect(tree.children[0].value).toEqual('a');
  });

  it("should be able to add child node to an existing child node", function(){
    tree.addChild('a');
    tree.children[0].addChild('a-1');
    expect(tree.children[0].children[0].value).toEqual('a-1');
  });

  it("should be able to chain the addChild method", function(){
    tree.addChild('a').addChild('a-1');
    expect(tree.children[0].children[0].value).toEqual('a-1');
  });

  it("should return true if the target value is present in tree", function(){
    tree.addChild('a').addChild('a-1');
    expect(tree.contains('a-1')).toEqual(true);
  });

  it("should return false if the target value is not present in tree", function(){
    tree.addChild('a').addChild('a-1');
    expect(tree.contains('zebra')).toEqual(false);
  });

});