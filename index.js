var recipes = {};

//returns an object with the original key value pair and the new key value pair
//does not modify the original object, but rather returns a clone with the new data
function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object, {[key]: value});
  return newObject;
}

//updates 'object' with the given 'key' and 'value' (it is destructive) and returns the entire updated object
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

//deletes 'key' from a clone of object and returns the new object (it is non-destructive)
//does not modify the original object
function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}

//returns object without the deleted key/value pair
//modifies the original object
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}