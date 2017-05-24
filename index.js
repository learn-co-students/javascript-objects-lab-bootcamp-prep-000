var recipes = {
  sugar: "1 tbsp"
}

// returns a clone of `object` by adding `key` and `value` (it is non-destructive)
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

// updates `object` with the given `key` and `value` (it is destructive)
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

// deletes `key` from a clone of object and returns the new object (it is non-destructive)
function deleteFromObjectByKey(object, key) {
  var obj = Object.assign({}, object);
  delete obj[key];
  return obj;
}

// deletes `key` from object and returns object
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
