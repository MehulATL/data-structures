// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    list.tail = makeNode(value);
    if (list.head === null) {
      list.head = list.tail;
    }

    // add nodes to the list {};
    var newKey = Object.keys(list).length;
    list[newKey] = list.tail;

    // check to see if there is a previous node,
    // if there is, reassign it's 'next' value.
    if (newKey > 5) {
      list[newKey-1].next = list[newKey];
    }
  };

  list.removeHead = function(){
    // reassign head value and return the previous head value
    var removedNode = list.head;
    list.head = list.head.next;
    return removedNode.value;
  };

  // recursive search to find target value.
  list.contains = function(target){
    var result = false;
    var search = function(target, node) {
      var startNode = node || list.head;
      if (startNode.value === target) {
        result = true;
      } else {
        if (startNode.next !== null){
          search(target, startNode.next);
        }
      }
    };
    search(target);
    return result;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
