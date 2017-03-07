var recipes = {chicken : "chicken"};

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var ret = Object.assign({}, object);
  delete ret.key;
  return ret;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}
