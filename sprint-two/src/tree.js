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

  // returning node allows us to chain
  // addChild methods
  return node;
};

treeMethods.contains = function(target){
  var that = this;
  var result = false;
  var search = function(target, start){
    var node = start || that.children;
    each(node, function(item){
      if (item.value === target) {
        result = true;
      } else if (item.children) {
        search(target, item.children);
      }
    });
  };
  search(target);
  return result;
};


var each = function(collection, iterator) {
  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++){
      iterator(collection[i]);
    }
  } else {
    for (var key in collection){
      iterator(collection[key]);
    }
  }
};
