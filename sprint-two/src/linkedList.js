// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    list.tail = makeNode(value);
    // if the list has no items the head and tail are the same
    // change the next property of the previously added value to
    // point to the tail
    if (list.head === null) {
      list.head = list.tail;
    }
    // list.head = list.tail;
    list.head.next = makeNode(value);
  };

  list.removeHead = function(){
  };

  list.contains = function(value){
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
