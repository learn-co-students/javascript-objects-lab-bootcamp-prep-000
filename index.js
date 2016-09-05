var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newOb = object[key] = value;
      newOb = Object.assign({}, object, newOb);
  return newOb;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newOb = Object.assign({}, object);
  delete newOb[key];
  return newOb;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
