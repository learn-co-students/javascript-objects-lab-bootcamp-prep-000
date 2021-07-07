var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var object2 = Object.assign({}, object, {[key]: value});
  return (object, object2);
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  // updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object:
  object[key] = value;
  return object;
}


function deleteFromObjectByKey(object, key) {
  // deletes `key` from a clone of object and returns the new object (it is non-destructive)
  var object2 = Object.assign({}, object);
  delete object2[key];
  return object2;
}


function destructivelyDeleteFromObjectByKey(object, key) {
  //returns object without the delete key/value pair
  //modifies the original object
  delete object[key];
  return object;
}


