var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  // update an existing object without being destructive
  return Object.assign({}, object, {[key]: value});
};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
};

function deleteFromObjectByKey(object, key) {
  // *deletes a key-value pair without being destructive*
  // Create a new variable and use Object.assign to clone the original object
  var newObj = Object.assign({}, object);
  // use delete operator to delete a key from the clone
  delete newObj[key];
  // return the the cloned object
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
