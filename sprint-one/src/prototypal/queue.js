var makeQueue = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here
  var instance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};

  return instance;
  };

var queueMethods = {};

  // Implement the methods below

queueMethods.enqueue = function(value){
  var keyCount = Object.keys(this.storage).length;
  this.storage[keyCount] = value;
};

queueMethods.dequeue = function(){
  var removedKey = this.storage[0];
  delete this.storage[0];
  for (var key in this.storage){
    this.storage[key-1] = this.storage[key];
    delete this.storage[key];
  }
  return removedKey;
};

queueMethods.size = function(){
  return Object.keys(this.storage).length;
};