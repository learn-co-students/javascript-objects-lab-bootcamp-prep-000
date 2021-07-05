// Create new object called 'recipes'

var recipes = {
  ingredients: 'flour'
}

// Does not modify the original object, but rather returns a clone with the new data

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}

// Updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

// Deletes `key` from a clone of object and returns the new object (it is non-destructive)

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

// Returns object without the delete key/value pair and modifies the original object

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
