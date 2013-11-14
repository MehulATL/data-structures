var Stack = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here
  // Use an object with numeric keys to store values
  this.storage = {};
  this.len = 0; // Hint: set an initial value here
};

Stack.prototype.push = function(value){
  this.len++;
  this.storage[this.len] = value;
};

Stack.prototype.pop = function(){
  this.len && this.len--;
  return this.storage[this.len+1];
};

Stack.prototype.size = function(){
  return this.len;
};

var ourStack = new Stack();