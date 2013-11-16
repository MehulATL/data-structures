var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
  newTree.children = undefined; // children [ [tree][tree][tree] ] *we think*
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(input){
  var node = makeTree();
  node.value = input;
  // check to see if there is an array to push nodes to
  // if not create one
  if(this.children === undefined){
    this.children = [];
  }

  this.children.push(node);

  // returning this allows us to chain
  // addChild methods
  return node;
};

treeMethods.contains = function(){
};
