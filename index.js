//1) Objects defines a `recipes` object:
var recipes = {};


//2) Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair:
//function updateObjectWithKeyAndValue(object, key, value) {
  
  //object[key] = value;
  //return object;
  
//}


//3) Objects updateObjectWithKeyAndValue(object, key, value) it does not modifythe original object, but rather returns a clone with the new data:
function updateObjectWithKeyAndValue(object, key, value) {
  
  var nuObject = Object.assign({}, object, {[key]: value});
  return nuObject;
  
}


//4) Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive) and returns theentire updated object:
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  object[key] = value;
  return object;
  
}


// 5 || 5.1) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):
function deleteFromObjectByKey(object, key)  {
  
  var nuObject = Object.assign({}, object);
  delete nuObject[key];
  return nuObject;
  
}


//6 || 5.2) Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive):
//?? seems like the same as task 5
//Ah ok, this is one more hint to task 5

//7 || 6.1) Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:
function destructivelyDeleteFromObjectByKey(object, key) {
  
  delete object[key];
  return object;
  
}

//8 || 6.2) Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object: