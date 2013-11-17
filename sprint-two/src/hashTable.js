var HashTable = function(){
  this._limit = 8;

  // Use a limited array toßstore inserted elements.
  // It'll keep you from using too much space. Usage:
  //
  //   limitedArray.set(3, 'hi');
  //   limitedArray.get(3); // alerts 'hi'
  //
  // There's also a '.each' method that you might find
  // handy once you're working on resizing
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // check if we have a bucket, if not make one.
  var bucket = this._storage.get(i) || [];
  // iterate over bucket to seperate the tuples
  for (var j = 0; j < bucket.length; j++){
    var tuple = bucket[j];
    // update value of tuple if the key matches our input.
    if(tuple[0] === k){
      tuple[1] = v;
      return;
    }
  }

  bucket.push([k, v]);
  // resize storage stuff goes here
  this._storage.set(i, bucket);
};



HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++){
    var tuple = bucket[j];
    if(tuple[0] === k){
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++){
    var tuple = bucket[j];
    if(tuple[0] === k){
      bucket.splice(j, 1);
      return tuple[1]; // return the value that was deleted
    }
  }
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you