var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0; // Hint: set an initial value here

  // Implement the methods below

  instance.push = function(value){
    size++;
    storage[size] = value;
  };

  instance.pop = function(){
    size && size--;
    return storage[size+1];
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
