var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value});
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  return delete newObj[key]
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object;
}