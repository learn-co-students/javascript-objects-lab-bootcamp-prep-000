//returns an object with the orignal key value pairs and the new key value pair
//does not modify the original object, but rather returns a clone with the new data
//returns an object with an updated key value pair
function updateObjectWithKeyAndValue(object,key,value){
 var clone = Object.assign({},object); // first I created a variable to hold the new object without modifying the original
      clone[key]=value;// I added new values to the clone, and it will print, the original values plus the new ones.
      return clone;
}
//updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key]=value;
  return object;
}
//deletes `key` from a clone of object and returns the new object (it is non-destructive
//does not modify the original object (it is non-destructive)
function deleteFromObjectByKey(object,key){
  var clone = Object.assign({},object);
  delete clone[key];
  return clone;
}
//returns object without the delete key/value pair
//modifies the original object
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
