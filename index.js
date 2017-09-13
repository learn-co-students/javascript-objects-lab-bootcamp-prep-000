// Define an object called recipes
var recipes = new Object();

// updateObjectWithKeyAndValue(object, key, value)
// Returns an object with the orignal key value pairs and the new key value pair
// It does not modify the original object, but rather returns a clone with the new data
// Expect: { prop: 1, prop2: 2} | undefined
function updateObjectWithKeyAndValue(object, key, value) {
    var objCopy = Object.assign({}, object);
    objCopy[key] = value;

  return objCopy;
}

// destructivelyUpdateObjectWithKeyAndValue(object, key, value)
// Updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object
// Expect: { prop: 1, prop2: 2}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;

  return object;
}

// deleteFromObjectByKey(object, key)
// Deletes `key` from a clone of object and returns the new object (it is non-destructive)
// It does not modify the original object (it is non-destructive)
// Expect: obj['prop']).toBe(1)
function deleteFromObjectByKey(object, key) {
  var objCopy = Object.assign({}, object);
  delete objCopy[key];

  return objCopy;
}

// destructivelyDeleteFromObjectByKey(object, key)
// Returns object without the delete key/value pair
// modifies the original object
// Expect: undefined
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];

  return object;
}
