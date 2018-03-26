
 // 1) Objects defines a `recipes` object:
var recipes = {};
      

 // 2) Objects updateObjectWithKeyAndValue(object, key, value)returns an object with the orignal key value pairs and the new key value pair:
 
function updateObjectWithKeyAndValue (object, key, value){
  var newObject = Object.assign ({}, object, { [key] : value });
  return newObject;
}

  //4) Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object:
  
  function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    Object.assign (object, { [key] : value});
    return object;
  }

//  5) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign( {}, object);
  delete newObject[key];
  return newObject;
}
     
//  7) Objects destructivelyDeleteFromObjectByKey(object, key)returns object without the delete key/value pair:

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
    