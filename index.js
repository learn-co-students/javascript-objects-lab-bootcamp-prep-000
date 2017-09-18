var recipes = {'a':2};

function updateObjectWithKeyAndValue(object, key, value) {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var copy = object;

  copy[key] = value;
  return copy;
}

function deleteFromObjectByKey(object, key) {
  var copy = Object.assign({}, object);
  delete copy[key];
  return copy;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var copy = object;
  delete copy[key];
  return copy;
}
