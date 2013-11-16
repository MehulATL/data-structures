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
  console.log(i);
  var bucket = this._storage.get(i);
  // check if this._storage[i] is an array
  if (Array.isArray(bucket)){
    var innerArray = [];
    // the next line is to push existing data into the
    // newly created array
    innerArray.push(bucket);
    innerArray.push([k,v]);
    this._storage.set(i, innerArray);
  } else {
    this._storage.set(i, [k,v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for(var xArr = 0; bucket.length; xArr++){
    if (bucket[xArr][0] === k) {
      return bucket[xArr][1];
    }
  }
  // var len = this._storage[i].length;
  // for (var j = 0; j < len; j++){
  //   var lastIndex = this._storage[i][j].indexOf(k);
  //   result = this._storage[i][j][lastIndex];
  //   console.log(result);
  // }
  // return result;
};

HashTable.prototype.remove = function(k){

};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you