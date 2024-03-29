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
    var removedKey = storage[0];
    delete storage[0];
    for (var key in storage){
      storage[key-1] = storage[key];
      delete storage[key];
    }
    return removedKey;
  };

  instance.size = function(){
    return Object.keys(storage).length;
  };

  return instance;
};

