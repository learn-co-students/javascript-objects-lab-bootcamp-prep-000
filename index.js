var recipes = { prop: 1};

function updateObjectWithKeyAndValue(object, key, value) {

  var object = Object.assign({}, recipes, { [key]: value});
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var object = Object.assign({}, recipes, [key]);
  delete object.key;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}