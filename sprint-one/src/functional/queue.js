var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  instance.enqueue = function(value){
    storage[value] = [value];
  };

  instance.dequeue = function(){
  };

  instance.size = function(){
    return Object.keys(storage).length;
  };

  return instance;
};
