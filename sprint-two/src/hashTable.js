var HashTable = function(){
  this._limit = 8;
  this._size = 0;
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
  // check if our bucket needs to resized, if it does, double the size
  this._size++;
  if(this._size > this._limit * 0.75){
    this.resize(this._limit * 2);
  }
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

HashTable.prototype.resize = function(newLimit){
  var oldStorage = this._storage;
  this._limit = newLimit;
  this._storage = makeLimitedArray(this._limit);

  var that = this;
  // taking old storage data and inserting into new storage
  oldStorage.each(function(bucket){
    for (var i=0; i < bucket.length; i++){
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  });
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you