var recipes = new Object();

// Returns an object with the original key value pairs and the new key value 
// pair
// It does not modify the original object, but rather returns a clone with the 
// new data
function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object);
  newObject[key] = value;
  return newObject;
}

// updates `object` with the given `key` and `value` (it is destructive) and 
// returns the entire updated object
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

// deletes `key` from a clone of object and returns the new object (it is 
// non-destructive)
// does not modify the original object(it is non-destructive)
function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}

// returns object withoutthe delete key/value pair
// modifies the original object
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}