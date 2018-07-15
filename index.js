var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
  return object;
}

// updateObjectWithKeyAndValue(object, 'prop2', 2);

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object;

}
function deleteFromObjectByKey(object, key) {
  delete object.key;
  return deleteFromObjectByKey;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.prop;
  return destructivelyDeleteFromObjectByKey;
}
