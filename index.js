var recipes = {
  recipes: "type of"};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(object, key) {
  var copy = Object.assign({}, recipes)
  delete copy.key;
  return copy;
}

function destructivelyDeleteFromObjectByKey (object, key) {
  delete object[key];
  return object;
}