var makeStack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var instance = Object.create(makeStack.stackMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.len = 0; // Hint: set an initial value here

  return instance;
};

makeStack.stackMethods = {};

makeStack.stackMethods.push = function(value){
  this.len++;
  this.storage[this.len] = value;
};

makeStack.stackMethods.pop = function(){
  this.len && this.len--;
  return this.storage[this.len+1];
};

makeStack.stackMethods.size = function(){
  return this.len;
};
var stackMethods = {};


