var recipes = {}

var updateObjectWithKeyAndValue = function(object, key, value) {
  object = Object.assign({}, object, {[key]: value});
  return object;
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value) {
  object[key] = value;
  return object;
}

var destructivelyDeleteFromObjectByKey = function(object, key) {
  delete object[key];
  return object;
}

var deleteFromObjectByKey = function(object, key) {
  Object.assign(object, key);
  return object;
}
