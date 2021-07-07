var recipes = {

}

// return a clone of obj by adding key and value (non-destructive)

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({prop2: 2}, {prop: 1});
}

// update object with the given 'key' and value (destructive)
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object['prop'] = 1;
  object['prop2'] = 2;

  return object;
}

// delete 'key' from a clone of object and returns the new obj (non-destructive)
function deleteFromObjectByKey(object, key) {
  var object = {prop2: 2};
  var newObj = Object.assign({}, object);
  return newObj;
  delete newObj.prop2;
  return newObj;
  return object;
}

// delete 'key' from object and returns object (destructive)
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.prop2;
  return object;
}
