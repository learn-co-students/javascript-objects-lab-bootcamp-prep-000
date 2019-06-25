
 //1) Objects defines a `recipes` object:
  var recipes = {}
  
  /*
  2) Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair:
  3) Objects updateObjectWithKeyAndValue(object, key, value) it does not modifythe original object, but rather returns a clone with the new data:
  */
  function updateObjectWithKeyAndValue(object, key, value){
    return Object.assign({}, object, {[key]: value});
  }
  
  /*
  4) Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive) and returns theentire updated object:
  */
  function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
    return Object.assign(object, {[key]: value});
  }
  
  /*
  5) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):
  6) Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive):*/
  function deleteFromObjectByKey(object, key){
    var newObject = Object.assign({}, object)
    delete newObject[key];
    return newObject
  }
  
  /*
  7) Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:
  8) Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:*/
  function destructivelyDeleteFromObjectByKey(object, key){
    delete object[key];
    return object;
  }
  
  