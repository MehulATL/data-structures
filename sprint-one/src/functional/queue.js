var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  instance.enqueue = function(value){
    var keyCount = Object.keys(storage).length;
    storage[keyCount] = value;
  };

  instance.dequeue = function(){
    var keyCount = Object.keys(storage).length;
    var removedKey = storage[keyCount-1];
    delete storage[keyCount-1];
    return removedKey;
  };

  instance.size = function(){
    return Object.keys(storage).length;
  };

  return instance;
};

