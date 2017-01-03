// Learn.co Bootcamp Prep 12 JavaScript Objects Lab

// Define empty recipes object.
var recipes = new Object();

// Define a function that returns a clone of the recipe object by adding key
// and value (non-destructive).
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value});
}

// Define a function that updates the recipe object by adding a key and value
// (destructive).
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

// Define a function that deletes the key from a clone of an object and
// returns the new object (non-destructive).
function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object);
  delete newObject.key;
  return newObject;
}

// Define a function that deletes the key from an object and returns the object
// (destructive).
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}
