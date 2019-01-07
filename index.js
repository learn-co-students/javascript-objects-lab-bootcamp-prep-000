var recipes = { foo:
  'bar' 
} ;

function updateObjectWithKeyAndValue(object, key, value) {
  var update = Object.assign({[key]: value}, object);
  return update;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var updatedObject = Object.assign({}, object);
  delete updatedObject[key];
  return updatedObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}