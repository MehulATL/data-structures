var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here
  // Use an object with numeric keys to store values
  this.storage = {};
};

var queueMethods = {};

// Implement the methods below
Queue.prototype.enqueue = function(value){
  var keyCount = Object.keys(this.storage).length;
  this.storage[keyCount] = value;
};

Queue.prototype.dequeue = function(){
  var removedKey = this.storage[0];
  delete this.storage[0];
  for (var key in this.storage){
    this.storage[key-1] = this.storage[key];
    delete this.storage[key];
  }
  return removedKey;
};

Queue.prototype.size = function(){
  return Object.keys(this.storage).length;
};

