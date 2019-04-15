var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newo = Object.assign({}, object);
  newo[key] = value;
  return newo;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newo = Object.assign({}, object);
  delete newo[key];
  return newo;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}