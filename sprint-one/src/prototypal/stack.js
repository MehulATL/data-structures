var makeStack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var instance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.len = 0; // Hint: set an initial value here

  return instance;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.len++;
  this.storage[this.len] = value;
};

stackMethods.pop = function(){
  this.len && this.len--;
  return this.storage[this.len+1];
};

stackMethods.size = function(){
  return this.len;
};