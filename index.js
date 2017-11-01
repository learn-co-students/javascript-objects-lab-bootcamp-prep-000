var recipes = new Object();

function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign({}, object, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey (object, key) {
  var deleted = delete object.key;
  return deleted;
}

function destructivelyDeleteFromObjectByKey (object, key) {
  return delete object[key];
}
