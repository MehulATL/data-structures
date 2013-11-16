var makeSet = function(){
  var set = Object.create(setPrototype); // fix me
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(string){
  if (this._storage === undefined){
    this._storage = {};
  }
  this._storage[string] = true;
};

setPrototype.contains = function(string){
  if (this._storage[string]){
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(string){
  delete this._storage[string];
};
