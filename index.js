var recipes = {}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object
}

function destructivelyDeleteFromObjectByKey (object, key) {
  delete object[key];
  return object
}

function updateObjectWithKeyAndValue (object, key, value) {
    return Object.assign({}, object, { [key]: value})
}

function deleteFromObjectByKey (object, key) {
  var New = Object.assign({}, object);
  delete New[key];
  return New
}
